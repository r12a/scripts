

// The collections array is new and needs to be moved from xx_vocab all orthographies.																	
// It provides sets that can be used for searching text in term lists and in pickers.																	
// Keys are drawn from the following set of characters:																	
// ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ
// ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ⊙
// 🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩
// 🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉

var collections = [
{ symbol:'Ⓒ', desc:'Consonants', chars:'(𑵬|𑵭|𑵮|𑵯|𑵰|𑵱|𑵲|𑵳|𑵴|𑵵|𑵶|𑵷|𑵸|𑵹|𑵺|𑵻|𑵼|𑵽|𑵾|𑵿|𑶀|𑶁|𑶂|𑶃|𑶄|𑶅|𑶆|𑶇|𑶈|𑶉)' },
{ symbol:'ⓥ', desc:'Dependent vowels', chars:'(◌𑶊|◌𑶋|◌𑶌|◌𑶍|◌𑶎|◌𑶐|◌𑶑|◌𑶓|◌𑶔)' },
{ symbol:'Ⓥ', desc:'Independent vowels', chars:'(𑵠|𑵡|𑵢|𑵣|𑵤|𑵥|𑵧|𑵨|𑵪|𑵫)' },
{ symbol:'Ⓕ', desc:'Finals', chars:'(◌𑶕|◌𑶖)' },
{ symbol:'⊙', desc:'Invisibles', chars:'(\u200C|\u200D)' },
{ symbol:'🆅', desc:'Virama', chars:'(\u{11D97})' },
]
