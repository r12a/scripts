

// The collections array is new and needs to be moved from xx_vocab all orthographies.																	
// It provides sets that can be used for searching text in term lists and in pickers.																	
// Keys are drawn from the following set of characters:																	
// ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ
// ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ⊙
// 🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩
// 🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉

var collections = [
{ symbol:'Ⓥ', desc:'Rhymes', chars:'(𖽔|𖽗|𖽘|𖽙|𖽜|𖽝|𖽞|𖽟|𖽠|𖽡|𖽢|𖽣|𖽤|𖽦|𖽨|𖽪|𖽫|𖽬|𖽭|𖽱|𖽳|𖽵|𖽷|𖽹|𖽺|𖽻|𖽾)' },
{ symbol:'Ⓒ', desc:'Consonants', chars:'(𖼀|𖼁|𖼄|𖼅|𖼇|𖼈|𖼊|𖼋|𖼎|𖼏|𖼐|𖼑|𖼔|𖼕|𖼖|𖼘|𖼚|𖼛|𖼜|𖼝|𖼞|𖼟|𖼡|𖼢|𖼣|𖼦|𖼨|𖼩|𖼪|𖼫|𖼬|𖼭|𖼮|𖼯|𖼳|𖼴|𖼵|𖼷|𖼸|𖼺|𖼻|𖼽|𖽀|𖽂|𖽃)' },
{ symbol:'Ⓦ', desc:'Consonants with warts', chars:'(𖼁|𖼅|𖼋|𖼏|𖼑|𖼕|𖼛|𖼝|𖼟|𖼢|𖼩|𖼫|𖼭|𖼯|𖼸)' },
{ symbol:'Ⓣ', desc:'Tones', chars:'(𖾓|𖾔|𖾕|𖾖|𖾗|𖾘|𖾙|𖾏|𖾐|𖾑)' },
]
