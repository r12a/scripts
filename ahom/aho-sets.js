

// The collections array is new and needs to be moved from xx_vocab all orthographies.																	
// It provides sets that can be used for searching text in term lists and in pickers.																	
// Keys are drawn from the following set of characters:																	
// ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ
// ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ⊙
// 🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩
// 🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉

var collections = [
{ symbol:'Ⓥ', desc:'Vowels', chars:'(𑜂|𑜐|𑜚|𑜠|𑜡|𑜢|𑜣|𑜤|𑜥|𑜦|𑜧|𑜨|𑜩|𑜪|𑜫)' },
{ symbol:'Ⓒ', desc:'Consonants', chars:'(𑜆|𑜇|𑜈|𑜘|𑜄|𑜌|𑜓|𑜔|𑝁|𑝂|𑝃|𑝄|𑝀|𑜋|𑜊|𑜙|𑜀|𑜁|𑜕|𑜏|𑜑|𑜉|𑜃|𑝅|𑜐|𑜂|𑜍|𑜎|𑝆)' },
{ symbol:'ⓥ', desc:'Dependent vowels', chars:'(xxx)' },
{ symbol:'Ⓥ', desc:'Independent vowels', chars:'(xxx)' },
{ symbol:'🅥', desc:'Vocalics', chars:'(xxx)' },
{ symbol:'Ⓒ', desc:'All consonants', chars:'(xxx)' },
{ symbol:'Ⓑ', desc:'Basic consonants', chars:'(xxx)' },
{ symbol:'Ⓔ', desc:'Extended consonants', chars:'(xxx)' },
{ symbol:'Ⓕ', desc:'Finals', chars:'(xxx)' },
{ symbol:'Ⓜ', desc:'Medials', chars:'(𑜞|𑜟|𑜝)' },
{ symbol:'Ⓣ', desc:'Tones', chars:'(xxx)' },
{ symbol:'⊙', desc:'Invisibles', chars:'(\u200C|\u200D)' },
{ symbol:'⊙', desc:'Invisibles', chars:'(\u200C|\u200D|2067|202B|2066|202A|2068|2069|202C|200F|200E|061C|034F)' },
]
