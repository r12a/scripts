

// The collections array is new and needs to be moved from xx_vocab all orthographies.																	
// It provides sets that can be used for searching text in term lists and in pickers.																	
// Keys are drawn from the following set of characters:																	
// ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ
// ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ⊙
// 🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩
// 🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉

var collections = [
{ symbol:'Ⓥ', desc:'Vowels', chars:'(xxx)' },
{ symbol:'Ⓒ', desc:'Consonants', chars:'(xxx)' },
{ symbol:'ⓥ', desc:'Dependent vowels', chars:'(xxx)' },
{ symbol:'Ⓥ', desc:'Independent vowels', chars:'(xxx)' },
{ symbol:'🅥', desc:'Vocalics', chars:'(xxx)' },
{ symbol:'Ⓒ', desc:'All consonants', chars:'(xxx)' },
{ symbol:'Ⓑ', desc:'Basic consonants', chars:'(xxx)' },
{ symbol:'Ⓔ', desc:'Extended consonants', chars:'(xxx)' },
{ symbol:'Ⓕ', desc:'Finals', chars:'(xxx)' },
{ symbol:'Ⓜ', desc:'Medials', chars:'(xxx)' },
{ symbol:'Ⓣ', desc:'Tones', chars:'(xxx)' },
{ symbol:'⊙', desc:'Invisibles', chars:'(\u200C|\u200D)' },
{ symbol:'⊙', desc:'Invisibles', chars:'(\u200C|\u200D|2067|202B|2066|202A|2068|2069|202C|200F|200E|061C|034F)' },
]
