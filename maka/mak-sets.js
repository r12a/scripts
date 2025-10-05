

// The collections array is new and needs to be moved from xx_vocab all orthographies.																	
// It provides sets that can be used for searching text in term lists and in pickers.																	
// Keys are drawn from the following set of characters:																	
// ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ
// ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ⊙
// 🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩
// 🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉

var collections = [
{ symbol:'Ⓥ', desc:'Vowels', chars:'(𑻳|𑻴|𑻵|𑻶)' },
{ symbol:'Ⓒ', desc:'Consonants', chars:'(𑻣|𑻦|𑻩|𑻠|𑻤|𑻧|𑻪|𑻡|𑻰|𑻥|𑻨|𑻫|𑻢|𑻯|𑻭|𑻮|𑻬)' },
{ symbol:'ⓥ', desc:'Dependent vowels', chars:'(𑻳|𑻴|𑻵|𑻶)' },
{ symbol:'Ⓥ', desc:'Independent vowels', chars:'(𑻱)' },
{ symbol:'⊙', desc:'Invisibles', chars:'(\u200C|\u200D)' },
{ symbol:'🆅', desc:'Latin vowels', chars:'(a|i|u|e|o)' },
{ symbol:'🅲', desc:'Latin consonants', chars:'(p|t|c|k|b|d|j|g|s|m|n|ɲ|ŋ|w|r|l|y)' },
]
