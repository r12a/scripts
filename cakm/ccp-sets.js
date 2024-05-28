

// The collections array is new and needs to be moved from xx_vocab all orthographies.																	
// It provides sets that can be used for searching text in term lists and in pickers.																	
// Keys are drawn from the following set of characters:																	
// ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ
// ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ⊙
// 🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩
// 🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉

var collections = [
{ symbol:'Ⓒ', desc:'Consonants', chars:'(𑄛|𑄝|𑄖|𑄘|𑄑|𑄓|𑄇|𑄉|𑄜|𑄞|𑄗|𑄙|𑄒|𑄔|𑄈|𑄊|𑄌|𑄍|𑄎|𑄏|𑅇|𑄥|𑄦|𑄟|𑄚|𑄕|𑄐|𑄋|𑄤|𑄢|𑄣|𑅄|𑄡|𑄠)' },
{ symbol:'ⓥ', desc:'Dependent vowels', chars:'(𑄨|𑄪|𑄩|𑄫|𑄬|𑄮|𑅆|𑄰|𑄧|𑅅|𑄭|𑄯)' },
{ symbol:'Ⓥ', desc:'Independent vowels', chars:'(𑄄|𑄅|𑄆|𑄃)' },
{ symbol:'Ⓕ', desc:'Finals', chars:'(𑄀|𑄁|𑄂)' },
{ symbol:'⊙', desc:'Invisibles', chars:'(\u200C|\u200D)' },
]
