

// The collections array is new and needs to be moved from xx_vocab all orthographies.																	
// It provides sets that can be used for searching text in term lists and in pickers.																	
// Keys are drawn from the following set of characters:																	
// ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ
// ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ⊙
// 🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩
// 🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉

var collections = [
{ symbol:'Ⓥ', desc:'Vowels', chars:'[𑻳𑻴𑻵𑻶]' },
{ symbol:'Ⓒ', desc:'Consonants', chars:'[𑻣𑻦𑻩𑻠𑻤𑻧𑻪𑻡𑻰𑻥𑻨𑻫𑻢𑻯𑻭𑻮𑻬]' },
{ symbol:'ⓥ', desc:'Dependent vowels', chars:'[𑻳𑻴𑻵𑻶]' },
{ symbol:'Ⓥ', desc:'Independent vowels', chars:'[𑻱]' },
{ symbol:'⊙', desc:'Invisibles', chars:'[\u200C\u200D]' },
{ symbol:'🆅', desc:'Latin vowels', chars:'[aiueo]' },
{ symbol:'🅲', desc:'Latin consonants', chars:'[ptckbdjgsmnɲŋwrly]' },
]
