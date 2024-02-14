

// The collections array is new and needs to be moved from xx_vocab all orthographies.																	
// It provides sets that can be used for searching text in term lists and in pickers.																	
// Keys are drawn from the following set of characters:																	
// ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ
// ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ⊙
// 🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩
// 🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉

var collections = [
{ symbol:'Ⓒ', desc:'Consonants', chars:'(ꤶ|ꤷ|ꤳ|ꤴ|ꤹ|ꤺ|ꤰ|ꤱ|ꤼ|ꥁ|ꤸ|ꤵ|ꤻ|ꤲ|ꥀ|ꤽ|ꤾ|ꤿ|ꤶ|ꤷ|ꤳ|ꤴ|ꤹ|ꤺ|ꤰ|ꤱ|ꤼ|ꥁ|ꤸ|ꤵ|ꤻ|ꤲ|ꥀ|ꤽ|ꤾ|ꤿ)' },
{ symbol:'Ⓟ', desc:'Prenasalised consonants', chars:'(ꥂ|ꥃ|ꥄ|ꥅ)' },
{ symbol:'ⓥ', desc:'Dependent vowels', chars:'(ꥇ|ꥈ|ꥉ|ꥋ|ꥍ|ꥎ|ꥊ|ꥌ)' },
{ symbol:'Ⓥ', desc:'Independent vowels', chars:'(ꥆ)' },
{ symbol:'Ⓕ', desc:'Finals', chars:'(ꥒ|ꥐ|ꥏ|ꥑ)' },
]
