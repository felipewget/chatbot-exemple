
/** 
 * Class with collection of methods for chatbot responses
 * 
 * @author Felipe Oliveira <felipe.wget@gmail.com>
 * @version 0.1
 * @copyright Copyright © 2018, Felipe Rodrigues Oliveira
 * @access public 
 */
const chatbot = {

	/** 
	 * Start the chatbot
	 */
	init: function(){
		chatbot.interactions = [];
		chatbot.indecision = null;
		chatbot.question = null;
		chatbot.indecisionsLogs = [];
	},

	/** 
	 * Start the welcome message
	 */
	startConversation: function(){

		var validatedInteractions = [];
		for( var index in chatbot.interactions ){
			if( chatbot.interactions[index].start && chatbot.interactions[index].start == 1 ){
				validatedInteractions.push( chatbot.interactions[index] );
				var response = chatbot.testWeights( validatedInteractions );
				return chatbot.sendResponse( response, chatbot.interactions );
			}
		}

	},

	/** 
	 * Return indcisions log
	 */
	getLogs: function(){
		return chatbot.indecisionsLogs;	
	},

	/** 
	 * Set New Interaction
	 */
	setInteraction: function( interaction ){
		chatbot.interactions.push( interaction );
	},

	/** 
	 * Set Indecision for BOT
	 */
	setIndecision: function( objIndecision ){
		chatbot.indecision = objIndecision;	
	},

	/** 
	 * Process text anda return responses
	 */
	processInteraction: function( text ){

		var validatedInteractions = [];
		var indecision = [];

		if( chatbot.question != null ){

			for( var index in chatbot.interactions ){

				if( chatbot.interactions[index].identifier == chatbot.question ){

					indecision = chatbot.interactions[index].indecision;

					for( var i_option in chatbot.interactions[index].options ){
						var sentences = chatbot.interactions[index].options[i_option].sentences;
						var is_valid = chatbot._processSentences( text, sentences );
						if( is_valid ){
							chatbot.question = null;
							validatedInteractions.push( chatbot.interactions[index].options[i_option] );
						}
					}

				}

			}

		} else {

			for( var index in chatbot.interactions ){
				var sentences = chatbot.interactions[index].sentences;			
				var is_valid = chatbot._processSentences( text, sentences );
				if( is_valid ){
					validatedInteractions.push( chatbot.interactions[index] );
				}
			}

		}
		
		if( validatedInteractions.length > 0 ){
			var response = chatbot.testWeights( validatedInteractions );
			return chatbot.sendResponse( response, chatbot.interactions );
		} else {
			// Indecisão
			if( chatbot.question != null ){
				
				chatbot.indecisionsLogs.push( {
					title: 'Indecisão na Pergunta: ' + chatbot.question,
					message: text,
					question: chatbot.question
				} );

				validatedInteractions.push( indecision );
				var response = chatbot.testWeights( validatedInteractions );
				return chatbot.sendResponse( response, chatbot.interactions );

			} else {

				validatedInteractions.push( chatbot.indecision );
				var response = chatbot.testWeights( validatedInteractions );
				
				chatbot.indecisionsLogs.push( {
					title: 'Indecisão ',
					message: text,
					question: null
				} );

				return chatbot.sendResponse( response, chatbot.interactions );

			}
		}	

	},

	/** 
	 * Treat Responses for return
	 */
	sendResponse: function( response, interactions ){

		var messages = [];
		console.log( response );
		messages.push( response.text );
		if( response.type == "answer" ){
			var whileCountSecurity = 0;
			if( response.redirectTo && response.redirectTo !== null ){
				var redirectTo = response.redirectTo;
				var catched = 0;
				do {

					catched = 0;
					for( var i in interactions ){
						if( interactions[i].identifier == redirectTo ){
							catched = 1;
							redirectTo = null;
							messages.push( interactions[i].text );
							if( interactions[i].type == "answer" ){
								redirectTo = interactions[i].redirectTo;
							}

							if( interactions[i].type == "question" ){
								chatbot.question = interactions[i].identifier;
							}

						}
					}

					whileCountSecurity++;

				} while( catched == 1 && redirectTo !== null && whileCountSecurity < 3 );
			}
		}

		if( response.type == "question" ){
			chatbot.question = response.identifier;
		}

		return messages;

	},

	/** 
	 * Process Sentences within the Processing of Messages
	 */
	_processSentences: function( text, sentences ){

		var validatedSentences = [];
		var validated = 0;
		var text = keywords.treatPharse( text );
		for( var index in sentences ){

			var tested = 0;
			
			// Grupo de sentenças
			for( var i_group in sentences[index].whitelist ){

				if( tested == 0 ){
					validated = 1;

					for( var i_sentence in sentences[index].whitelist[i_group] ){

						var sentence = keywords.treatPharse(sentences[index].whitelist[i_group][i_sentence] );
						if( !(parseInt( text.indexOf( sentence ) ) > -1) ){
							validated = 0;
						}

					}
				}

				if( validated == 1 ){
					tested = 1;
				}

			}

			if( validated == 1 ){

				for( var i_group in sentences[index].blacklist ){

					// Sentença
					for( var i_sentence in sentences[index].blacklist[i_group] ){

						if( text.indexOf( sentences[index].blacklist[i_group][i_sentence] ) > -1 ){
							// Não Encontrado
							validated = 0;
						}

					}

				}

			}


			if( validated == 1 ){
				return true;
			}

		}

		return false;

	},

	/** 
	 * Check and manage weights
	 */
	testWeights: function( validatedInteractions ){

		if( validatedInteractions.length > 0 ){

			var weight = -1;
			var response;

			if( validatedInteractions.length == 0 ){
 				response = validatedInteractions;
 				weight = validatedInteractions.weight;
			}

			for( var i in validatedInteractions ){
				if( weight < validatedInteractions[i].weight ){
					response = validatedInteractions[i];
 					weight = validatedInteractions[i].weight;
				}
			}

			return response;

		} else {
			return null;
		}
	}

}