
/** 
* @var Represents Bot Interactions 
*/
var objInteractions = [
	{
		identifier: 'call-to-action',
		start: 1,
		weight: 10,
		sentences: [
			{
				whitelist: [],
				blacklist: []
			}
		],
		redirectTo: 'call-to-sugestion',
		text: 'Olá! no que posso ajudar?',
		type: 'answer'
	},
	{
		identifier: 'call-to-sugestion',
		weight: 5,
		sentences: [
			{
				whitelist: [],
				blacklist: []
			}
		],
		redirectTo: '',
		text: 'Hoje a sugestão do dia é a pizza de calabresa, ela está com desconto e é muito boa, você aceita essa pizza?',
		type: 'question',
		options: [
			{
				identifier: 'resposta-sim-pizza',
				weight: 5,
				redirectTo: 'call-to-sugestion-response',
				text: 'Custa R$29.90',
				type: 'answer',
				sentences: [
					{
						whitelist: [
							['quanto', 'custa'], ['preço'], ['caro'],
						],
						blacklist: []
					}
				]
			},
			{
				identifier: 'resposta-sim-pizza',
				weight: 5,
				redirectTo: null,
				text: 'Legal vou adicionar ao seu pedido',
				type: 'answer',
				sentences: [
					{
						whitelist: [
							['sim'], ['quero'], ['aceito'],
						],
						blacklist: [
							['nao']
						]
					}
				]
			},
			{
				identifier: 'resposta-nao-pizza',
				redirectTo: null,
				weight: 5,
				text: 'Beleza, bom, no que posso te ajudar hoje?',
				type: 'answer',
				sentences: [
					{
						whitelist: [
							['não'], 
						],
						blacklist: [
							['sim']
						]
					}
				]
			},
		],
		indecision: {
			identifier: 'resposta-indecisao-pizza',
			weight: 5,
			redirectTo: null,
			text: 'Não entendi, preciso que você digite "aceito" ou "não aceito"',
			type: 'answer',
			sentences: [
				{
					whitelist: [],
					blacklist: []
				}
			]
		},
	},
	{
		identifier: 'call-to-sugestion-response',
		weight: 5,
		sentences: [
			{
				whitelist: [],
				blacklist: []
			}
		],
		redirectTo: '',
		text: 'Posso adicionar a pizza ao seu pedido?',
		type: 'question',
		options: [
			{
				identifier: 'resposta-sim-pizza',
				weight: 5,
				redirectTo: null,
				text: 'Legal! Aidiconado ao seu pedido',
				type: 'answer',
				sentences: [
					{
						whitelist: [
							['sim'], ['pode'], ['adiciona'], ['adicione'],
						],
						blacklist: [
							['não']
						]
					}
				]
			},
			{
				identifier: 'resposta-nao-pizza',
				weight: 5,
				redirectTo: null,
				text: 'Beleza, vamos lá, no que posso te ajudar hoje?',
				type: 'answer',
				sentences: [
					{
						whitelist: [
							['não'], ['deixa'], ['valeu'],
						],
						blacklist: [
							['sim']
						]
					}
				]
			},
		],
		indecision: {
			identifier: 'resposta-indecisao-pizza',
			weight: 5,
			redirectTo: null,
			text: 'Não entendi, pode digitar sim ou não?',
			type: 'answer',
			sentences: [
				{
					whitelist: [],
					blacklist: []
				}
			]
		},
	},
	{
		identifier: 'menu',
		weight: 10,
		sentences: [
			{
				whitelist: [
					['cardapio'], ['menu'], ['sabores', '?']
				],
				blacklist: [
					// ['cardapido', 'pedido', 'menu']
				]
			}
		],
		redirectTo: 'promocoes',
		text: 'Segue o cardápio no link: https://exemplo.com',
		type: 'answer'
	},
	{
		identifier: 'promocoes',
		weight: 10,
		sentences: [
			{
				whitelist: [
					['promoção'], ['promoções']
				],
				blacklist: [
					['não']
				]
			}
		],
		redirectTo: null,
		text: 'Temos 3 sabores em promoção, napolitana, mussarela e calabresa',
		type: 'answer'
	},
	{
		identifier: 'sugestao-do-dia',
		weight: 10,
		sentences: [
			{
				whitelist: [
					['sugestão'], ['sugestão de pizza']
				],
				blacklist: []
			}
		],
		redirectTo: 'promocao',
		text: 'Hoje a sugestão do dia é a pizza de calabresa ( =',
		type: 'answer'
	},
	{
		identifier: 'promocao',
		weight: 10,
		sentences: [
			{
				whitelist: [
					['promoção'], ['promoções']
				],
				blacklist: []
			}
		],
		redirectTo: null,
		text: 'Também estamos com a promoção compre 1 e leve 2, é pra todos comerem pizza @/!',
		type: 'answer'
	},
	{
		identifier: 'cancelar',
		weight: 10,
		sentences: [
			{
				whitelist: [
					['cancelar', 'pedido'], ['esquece', 'pedido']
				],
				blacklist: []
			}
		],
		redirectTo: null,
		text: 'Legal, posso cancelar todo o pedido?',
		type: 'question',
		options: [
			{
				identifier: 'resposta-sim',
				weight: 5,
				redirectTo: null,
				text: 'Beleza, cancelado',
				type: 'answer',
				sentences: [
					{
						whitelist: [
							['sim'],
						],
						blacklist: [
							['nao']
						]
					}
				]
			},
			{
				identifier: 'resposta-sim',
				redirectTo: null,
				weight: 5,
				text: 'Beleza, vou manter seu pedido',
				type: 'answer',
				sentences: [
					{
						whitelist: [
							['não'],
						],
						blacklist: [
							['sim']
						]
					}
				]
			},
		],
		indecision: {
			identifier: 'indecision-question-1',
			weight: 5,
			redirectTo: 'cancelar',
			text: 'Não entendi a resposta da sua pergunta, responda com "Sim" ou "Não"',
			type: 'answer',
			sentences: [
				{
					whitelist: [],
					blacklist: []
				}
			]
		},
	},
	{
		identifier: 'tchau',
		weight: 10,
		sentences: [
			{
				whitelist: [
					['tchau'], ['ate mais']
				],
				blacklist: [
					[]
				]
			}
		],
		redirectTo: null,
		text: 'Tchau, até mais!',
		type: 'answer'
	},
	{
		identifier: 'novo-pedido',
		weight: 5,
		sentences: [
			{
				whitelist: [
					['fazer', 'pedido'],
					['pedir', 'pizza'],
				],
				blacklist: []
			}
		],
		redirectTo: '',
		text: 'Opa! vamos lá, seu pedido é pra entregar ou retirar aqui no balcão?',
		type: 'question',
		options: [
			{
				identifier: 'resposta-retirar',
				weight: 5,
				redirectTo: 'taxa-entrega-preco',
				text: 'A taxa de entrega é de R$15.00',
				type: 'answer',
				sentences: [
					{
						whitelist: [
							['quanto', 'custa', 'entrega'], ['preço'], ['quanto', 'custa', 'delivery'],
							['preço', 'entrega'], ['preço'], ['preço', 'delivery'], ['taxa']
						],
						blacklist: []
					}
				]
			},
			{
				identifier: 'delivery',
				weight: 2,
				redirectTo: 'anotar-pedido',
				text: 'Bacana, vou anotar aqui.',
				type: 'answer',
				sentences: [
					{
						whitelist: [
							['delivery'], ['quero'], ['aceito'],
						],
						blacklist: [
							['preço'],['taxa'],
						]
					}
				]
			},
			{
				identifier: 'balcao',
				redirectTo: 'anotar-pedido-balcao',
				weight: 5,
				text: 'Sou de bola, vou adicionar ao seu pedido',
				type: 'answer',
				sentences: [
					{
						whitelist: [
							['balcão'], ['vou', 'aí'], 
						],
						blacklist: [
							['sim']
						]
					}
				]
			},
		],
		indecision: {
			identifier: 'resposta-indecisao-pizza',
			weight: 5,
			redirectTo: null,
			text: 'Não entendi, preciso que você digite "balção" ou "delivery"',
			type: 'answer',
			sentences: [
				{
					whitelist: [],
					blacklist: []
				}
			]
		},
	},
	{
		identifier: 'taxa-entrega-preco',
		weight: 5,
		sentences: [
			{
				whitelist: [],
				blacklist: []
			}
		],
		redirectTo: '',
		text: 'Prefere que retirar no balção ou por delivery?',
		type: 'question',
		options: [
			{
				identifier: 'delivery',
				weight: 2,
				redirectTo: 'anotar-pedido',
				text: 'Bacana, vou anotar aqui.',
				type: 'answer',
				sentences: [
					{
						whitelist: [
							['delivery'], ['quero'], ['aceito'],
						],
						blacklist: [
							['preço'],['taxa'],
						]
					}
				]
			},
			{
				identifier: 'balcao',
				redirectTo: 'anotar-pedido-balcao',
				weight: 5,
				text: 'Sou de bola, vou adicionar ao seu pedido',
				type: 'answer',
				sentences: [
					{
						whitelist: [
							['balcão'], ['vou', 'aí'], 
						],
						blacklist: [
							['sim']
						]
					}
				]
			},
		],
		indecision: {
			identifier: 'resposta-indecisao-pizza',
			weight: 5,
			redirectTo: null,
			text: 'Não entendi, preciso que você digite "balção" ou "delivery"',
			type: 'answer',
			sentences: [
				{
					whitelist: [],
					blacklist: []
				}
			]
		},
	},
	{
		identifier: 'anotar-pedido-balcao',
		weight: 5,
		sentences: [
			{
				whitelist: [
					['fazer', 'pedido'],
					['pedir', 'pizza'],
				],
				blacklist: []
			}
		],
		redirectTo: '',
		text: 'Neste MVP de amostra de chatbot temos apenas 2 sabores, calabresa e napolitana, qual você quer?',
		type: 'question',
		options: [
			{
				identifier: 'meio-a-meio',
				weight: 5,
				redirectTo: 'final-balcao',
				text: 'Metade calabresa e outra metade napolitana? anotado.',
				type: 'answer',
				sentences: [
					{
						whitelist: [
							['meia'], ['meio'], ['metade'],
						],
						blacklist: []
					}
				]
			},
			{
				identifier: 'calabresa',
				weight: 2,
				redirectTo: 'final-balcao',
				text: 'Uma pizza de calabresa, anotado.',
				type: 'answer',
				sentences: [
					{
						whitelist: [
							['calabresa'],
						],
						blacklist: [
							['meia'], ['meio'], ['metade'],
						]
					}
				]
			},
			{
				identifier: 'napolitana',
				redirectTo: 'final-balcao',
				weight: 5,
				text: 'Napolitana, anotado.',
				type: 'answer',
				sentences: [
					{
						whitelist: [
							['napolitana'], ['napolitano'], 
						],
						blacklist: [
							['meia'], ['meio'], ['metade'],
						]
					}
				]
			},
		],
		indecision: {
			identifier: 'anotar-pedido-balcao',
			weight: 5,
			redirectTo: null,
			text: 'Não entendi, preciso que você digite "calabresa" ou "napolitana"',
			type: 'answer',
			sentences: [
				{
					whitelist: [],
					blacklist: []
				}
			]
		},
	},
	{
		identifier: 'anotar-pedido',
		weight: 5,
		sentences: [
			{
				whitelist: [
					['fazer', 'pedido'],
					['pedir', 'pizza'],
				],
				blacklist: []
			}
		],
		redirectTo: '',
		text: 'Neste MVP de amostra de chatbot temos apenas 2 sabores, calabresa e napolitana, qual você quer?',
		type: 'question',
		options: [
			{
				identifier: 'meio-a-meio',
				weight: 5,
				redirectTo: 'endereco',
				text: 'Metade calabresa e outra metade napolitana? anotado.',
				type: 'answer',
				sentences: [
					{
						whitelist: [
							['meia'], ['meio'], ['metade'],
						],
						blacklist: []
					}
				]
			},
			{
				identifier: 'calabresa',
				weight: 2,
				redirectTo: 'endereco',
				text: 'Uma pizza de calabresa, anotado.',
				type: 'answer',
				sentences: [
					{
						whitelist: [
							['calabresa'],
						],
						blacklist: [
							['meia'], ['meio'], ['metade'],
						]
					}
				]
			},
			{
				identifier: 'napolitana',
				redirectTo: 'endereco',
				weight: 5,
				text: 'Napolitana, anotado.',
				type: 'answer',
				sentences: [
					{
						whitelist: [
							['napolitana'], ['napolitano'], 
						],
						blacklist: [
							['meia'], ['meio'], ['metade'],
						]
					}
				]
			},
		],
		indecision: {
			identifier: 'anotar-pedido',
			weight: 5,
			redirectTo: null,
			text: 'Não entendi, preciso que você digite "calabresa" ou "napolitana"',
			type: 'answer',
			sentences: [
				{
					whitelist: [],
					blacklist: []
				}
			]
		},
	},
	{
		identifier: 'endereco',
		weight: 5,
		sentences: [
			{
				whitelist: [
					['fazer', 'pedido'],
					['pedir', 'pizza'],
				],
				blacklist: []
			}
		],
		redirectTo: '',
		text: 'Legal, qual o endereco?',
		type: 'question',
		options: [],
		indecision: {
			identifier: 'resposta-endereco',
			weight: 5,
			redirectTo: 'final',
			text: 'Legal, conheço esse endereço, jogava bets numa rua próxima aí, bom, vamos lá',
			type: 'answer',
			sentences: [
				{
					whitelist: [],
					blacklist: []
				}
			]
		},
	},
	{
		identifier: 'final',
		weight: 10,
		sentences: [
			{
				whitelist: [],
				blacklist: []
			}
		],
		redirectTo: null,
		text: 'Perfeito, sua pizza chegará em até 45 minutos',
		type: 'answer'
	},
	{
		identifier: 'final-balcao',
		weight: 10,
		sentences: [
			{
				whitelist: [],
				blacklist: []
			}
		],
		redirectTo: null,
		text: 'Perfeito, sua pizza ficará pronta em até 45 minutos, aí pode vir buscar',
		type: 'answer'
	},
	{
		identifier: 'ate-mais',
		weight: 10,
		sentences: [
			{
				whitelist: [
					['tchau'], ['ate', 'mais'], ['tchau'], ['ate', 'daqui', 'pouco']
				],
				blacklist: []
			}
		],
		redirectTo: null,
		text: 'Até daqui a pouco, valeu',
		type: 'answer'
	},



	



];

/** 
* @var Represents Bot Indecisions 
*/
var objIndecision = {
	identifier: 'indecisao',
	weight: 0,
	sentences: [
		{
			whitelist: [],
			blacklist: []
		}
	],
	redirectTo: null,
	text: 'Não entendi sua mensagem mas valos lá, você pode digitar termos como: Cardápio, Promoções ou Sugestão de Pizza',
	type: 'answer'
};


/** 
 * Class with collection of methods for managing page
 * 
 * @author Felipe Oliveira <felipe.wget@gmail.com>
 * @version 0.1
 * @copyright Copyright © 2018, Felipe Rodrigues Oliveira
 * @access public 
 */
const page = {

	/** 
	 * Process interactions and start the bot
	 * @access public 
	 */
	init: function(){

		for( var i in objInteractions ){
			chatbot.setInteraction( objInteractions[i] );
		}

		chatbot.setIndecision( objIndecision );
		var arrTexts = chatbot.startConversation();
		for( var i in arrTexts ){
			var html = page._htmlMessage( arrTexts[i], true );
			$('div[container-messages]').append(html);
		}

	},

	/** 
	 * Send your message to bot and return responses by interactions
	 * @access public 
	 */
	sendMessage: function(){
		var text = $('form textarea').val();
		var html = page._htmlMessage( text, false );
		$('div[container-messages]').append(html);
		page.scrollToBottom();
		
		var arrTexts = chatbot.processInteraction( text );
		for( var i in arrTexts ){
			var html = page._htmlMessage( arrTexts[i], true );
			$('div[container-messages]').append(html);
			page.scrollToBottom();
		}
		$('form textarea').val('');

		var logs = chatbot.getLogs();
		$('div[block-logs] div[container-indecisions]').text('');
		for( var i in logs ){
			if( logs[i].title != undefined ){
				$('div[block-logs] div[container-indecisions]').prepend( page._htmlIndecisionBlock( logs[i] ) );
			}
		}

	},

	/** 
	 * Scroll the messages down
	 * @access public 
	 */
	scrollToBottom: function(){
		var distanceTop = $('div[container-messages]')[0].scrollHeight;
		$('div[container-messages]').scrollTop( distanceTop );
	},

	/** 
	 * HTML block to indecisions log
	 * @access public 
	 */
	_htmlIndecisionBlock:function( obj ){

		var html = "";
			html += "<div indecision>";
				html += "<label>Ouve uma indecisão, verifique a interação com a mensagem:</label>";
				html += "<div message>";
					html += obj.message;
				html += "</div>";

				if( obj.question && obj.question !== null ){

					html += "<div question>";
						html += obj.question;
					html += "</div>";

				}

			html += "</div>";
		
		return html;

	},

	/** 
	 * HTML block to Messages
	 * @access public 
	 */
	_htmlMessage:function( text, colored ){

		var html = "";

		if( colored ){
			colored = " colored ";
		} else {
			colored = "";
		}

		html += "<div container-message " + colored + ">";
			html += "<div message>";
				html += text;
			html += "</div>";
		html += "</div>";
		return html;

	}

}


/** 
 * Init instancies after page loading
 * @access public 
 */
$(document).ready(function(){
	chatbot.init();
	page.init();
});