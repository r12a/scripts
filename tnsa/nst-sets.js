

// The collections array is new and needs to be moved from xx_vocab all orthographies.																	
// It provides sets that can be used for searching text in term lists and in pickers.																	
// Keys are drawn from the following set of characters:																	
// ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ
// ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ⊙
// 🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩
// 🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉

var collections = [
{ symbol:'Ⓒ', desc:'Consonants', chars:'(𖪧|𖪩|𖪪|𖪰|𖪯|𖪹|𖪸|𖪶|𖪵|𖪽|𖪱|𖪠|𖪡|𖪢|𖪻|𖪼|𖪤|𖪾|𖪴|𖪺|𖪷|𖪭|𖪫|𖪜|𖪟|𖪝|𖪞|𖪬|𖪳|𖪨|𖪣|𖪐|𖪦|𖪲|𖪮|𖪥)' },
{ symbol:'Ⓥ', desc:'Vowels', chars:'(𖪀|𖪃|𖪁|𖪂|𖪌|𖪏|𖪍|𖪎|𖪄|𖪇|𖪅|𖪆|𖩼|𖩿|𖩽|𖩾|𖪔|𖪒|𖪗|𖪑|𖪕|𖪖|𖩰|𖩳|𖩱|𖩲|𖩸|𖩻|𖩹|𖩺|𖪈|𖪋|𖪓|𖪉|𖪊|𖩴|𖩷|𖩵|𖩶)' },
{ symbol:'Ⓕ', desc:'Finals', chars:'(xxx)' },
{ symbol:'Ⓣ', desc:'Tones', chars:'(xxx)' },
{ symbol:'⊙', desc:'Invisibles', chars:'(\u200C|\u200D)' },
]
