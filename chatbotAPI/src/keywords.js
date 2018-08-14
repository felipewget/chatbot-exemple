
/** 
 * Class with collection of methods for Treat Keywrods in Messages
 * 
 * @author Felipe Oliveira <felipe.wget@gmail.com>
 * @version 0.1
 * @copyright Copyright © 2018, Felipe Rodrigues Oliveira
 * @access public 
 */
const keywords = {

	treatPharse: function( text ){
		return keywords.removeAcentuation(text).toLowerCase();
	},
	removeAcentuation: function( text ){

		var withAccentuation = "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ";
		var withoutAccentuation = "AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaceeeeiiiionoooooouuuuybyr";
		returnText="";
		for(i=0; i<text.length; i++) {
			troca=false;
			for (a=0; a<withAccentuation.length; a++) {
				if (text.substr(i,1)==withAccentuation.substr(a,1)) {
					returnText+=withoutAccentuation.substr(a,1);
					troca=true;
					break;
				}
			}
			if (troca==false) {
				returnText+=text.substr(i,1);
			}
		}
		return returnText;

	}

}