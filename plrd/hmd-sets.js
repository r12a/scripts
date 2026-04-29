

// The collections array is new and needs to be moved from xx_vocab all orthographies.																	
// It provides sets that can be used for searching text in term lists and in pickers.																	
// Keys are drawn from the following set of characters:																	
// ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ
// ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ⊙
// 🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩
// 🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉

var collections = [
{ symbol:'Ⓥ', desc:'Rhymes', chars:'[𖽔𖽗𖽘𖽙𖽜𖽝𖽞𖽟𖽠𖽡𖽢𖽣𖽤𖽦𖽨𖽪𖽫𖽬𖽭𖽱𖽳𖽵𖽷𖽹𖽺𖽻𖽾]' },
{ symbol:'Ⓒ', desc:'Consonants', chars:'[𖼀𖼁𖼄𖼅𖼇𖼈𖼊𖼋𖼎𖼏𖼐𖼑𖼔𖼕𖼖𖼘𖼚𖼛𖼜𖼝𖼞𖼟𖼡𖼢𖼣𖼦𖼨𖼩𖼪𖼫𖼬𖼭𖼮𖼯𖼳𖼴𖼵𖼷𖼸𖼺𖼻𖼽𖽀𖽂𖽃]' },
{ symbol:'Ⓦ', desc:'Consonants with warts', chars:'[𖼁𖼅𖼋𖼏𖼑𖼕𖼛𖼝𖼟𖼢𖼩𖼫𖼭𖼯𖼸]' },
{ symbol:'Ⓣ', desc:'Tones', chars:'[𖾓𖾔𖾕𖾖𖾗𖾘𖾙𖾏𖾐𖾑]' },
]
