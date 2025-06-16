

// The collections array is new and needs to be moved from xx_vocab all orthographies.																	
// It provides sets that can be used for searching text in term lists and in pickers.																	
// Keys are drawn from the following set of characters:																	
// ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ
// ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ⊙
// 🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩
// 🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉

var collections = [
{ symbol:'Ⓜ', desc:'MDC controls', chars:'(𓍹|𓍺|<|>|:|*|-|!)' },
{ symbol:'Ⓤ', desc:'Unicode controls', chars:'(𓐰|𓐱|𓐲|𓐳|𓐴|𓐵|𓐶|𓐷|𓐸|𓐹|𓐺|𓐻|𓐼|𓐽|𓐾|𓐿|𓑀|𓑁|𓑂|𓑃|𓑄|𓑅|𓑆|𓑇|𓑈|𓑉|𓑊|𓑋|𓑌|𓑍|𓑎|𓑏|𓑐|𓑑|𓑒|𓑓|𓑔|𓑕)' },
{ symbol:'⊙', desc:'Invisibles', chars:'(\u200C|\u200D|2067|202B|2066|202A|2068|2069|202C|200F|200E|061C|034F)' },
]
