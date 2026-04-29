

// The collections array is new and needs to be moved from xx_vocab all orthographies.																	
// It provides sets that can be used for searching text in term lists and in pickers.																	
// Keys are drawn from the following set of characters:																	
// ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ
// ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ⊙
// 🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩
// 🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉

var collections = [
{ symbol:'Ⓒ', desc:'Consonants', chars:'[𑵬𑵭𑵮𑵯𑵰𑵱𑵲𑵳𑵴𑵵𑵶𑵷𑵸𑵹𑵺𑵻𑵼𑵽𑵾𑵿𑶀𑶁𑶂𑶃𑶄𑶅𑶆𑶇𑶈𑶉]' },
{ symbol:'ⓥ', desc:'Dependent vowels', chars:'[◌𑶊◌𑶋◌𑶌◌𑶍◌𑶎◌𑶐◌𑶑◌𑶓◌𑶔]' },
{ symbol:'Ⓥ', desc:'Independent vowels', chars:'[𑵠𑵡𑵢𑵣𑵤𑵥𑵧𑵨𑵪𑵫]' },
{ symbol:'Ⓕ', desc:'Finals', chars:'[◌𑶕◌𑶖]' },
{ symbol:'⊙', desc:'Invisibles', chars:'[\u200C\u200D]' },
{ symbol:'🆅', desc:'Virama', chars:'[\u{11D97}]' },
]
