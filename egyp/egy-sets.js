

// The collections array is new and needs to be moved from xx_vocab all orthographies.																	
// It provides sets that can be used for searching text in term lists and in pickers.																	
// Keys are drawn from the following set of characters:																	
// ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ
// ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ⊙
// 🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩
// 🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉

var collections = [
{ symbol:'Ⓜ', desc:'MDC controls', chars:'[𓍹𓍺<>:*-!]' },
{ symbol:'Ⓤ', desc:'Unicode controls', chars:'[𓐰𓐱𓐲𓐳𓐴𓐵𓐶𓐷𓐸𓐹𓐺𓐻𓐼𓐽𓐾𓐿𓑀𓑁𓑂𓑃𓑄𓑅𓑆𓑇𓑈𓑉𓑊𓑋𓑌𓑍𓑎𓑏𓑐𓑑𓑒𓑓𓑔𓑕]' },
{ symbol:'⊙', desc:'Invisibles', chars:'[\u200C\u200D\u2067\u202B\u2066\u202A\u2068\u2069\u202C\u200F\u200E\u061C\u034F]' },
]
