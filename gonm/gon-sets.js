

// The collections array is new and needs to be moved from xx_vocab all orthographies.																	
// It provides sets that can be used for searching text in term lists and in pickers.																	
// Keys are drawn from the following set of characters:																	
// ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ
// ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ⊙
// 🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩
// 🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉

var collections = [
{ symbol:'Ⓒ', desc:'Consonants', chars:'(𑴠|𑴡|𑴢|𑴣|𑴛|𑴜|𑴝|𑴞|𑴑|𑴒|𑴓|𑴔|𑴖|𑴗|𑴘|𑴙|𑴌|𑴍|𑴎|𑴏|𑴨|𑴫|𑴩|𑴪|𑴬|𑴤|𑴟|𑴚|𑴕|𑴐|𑴦|𑴧|𑴭|𑴥)' },
{ symbol:'ⓥ', desc:'Dependent vowels', chars:'(𑴲|𑴳|𑴴|𑴵|𑴺|𑴽|𑴱|𑴼|𑴿|𑴶)' },
{ symbol:'Ⓥ', desc:'Independent vowels', chars:'(𑴂|𑴃|𑴄|𑴅|𑴆|𑴉|𑴀|𑴁|𑴈|𑴋)' },
{ symbol:'Ⓡ', desc:'R-repha & r-kara', chars:'(𑵆|𑵇)' },
{ symbol:'Ⓕ', desc:'Finals', chars:'(𑵀|𑵁)' },
{ symbol:'⊙', desc:'Invisibles', chars:'(\u200C|\u200D)' },
{ symbol:'🆅', desc:'Virama', chars:'(\u{11D45})' },
{ symbol:'🅥', desc:'Vowel killer', chars:'(\u{11D44})' },
]
