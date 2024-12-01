

// The collections array is new and needs to be moved from xx_vocab all orthographies.																	
// It provides sets that can be used for searching text in term lists and in pickers.																	
// Keys are drawn from the following set of characters:																	
// ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ
// ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ⊙
// 🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩
// 🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉

var collections = [
{ symbol:'Ⓥ', desc:'Vowels', chars:'(𐦢|𐦡|𐦣|𐦠)' },
{ symbol:'Ⓒ', desc:'Simple consonants', chars:'(𐦧|𐦦|𐦴|𐦷|𐦲|𐦳|𐦯|𐦰|𐦭|𐦮|𐦨|𐦩|𐦥|𐦫|𐦬|𐦤)' },
{ symbol:'⊙', desc:'Invisibles', chars:'(\u200C|\u200D|2067|202B|2066|202A|2068|2069|202C|200F|200E|061C|034F)' },
]
