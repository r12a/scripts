

// The collections array is new and needs to be moved from xx_vocab all orthographies.																	
// It provides sets that can be used for searching text in term lists and in pickers.																	
// Keys are drawn from the following set of characters:																	
// ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ
// ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ⊙
// 🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩
// 🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉

var collections = [
{ symbol:'Ⓒ', desc:'Consonants', chars:'[𖪧𖪩𖪪𖪰𖪯𖪹𖪸𖪶𖪵𖪽𖪱𖪠𖪡𖪢𖪻𖪼𖪤𖪾𖪴𖪺𖪷𖪭𖪫𖪜𖪟𖪝𖪞𖪬𖪳𖪨𖪣𖪐𖪦𖪲𖪮𖪥]' },
{ symbol:'Ⓥ', desc:'Vowels', chars:'[𖪀𖪃𖪁𖪂𖪌𖪏𖪍𖪎𖪄𖪇𖪅𖪆𖩼𖩿𖩽𖩾𖪔𖪒𖪗𖪑𖪕𖪖𖩰𖩳𖩱𖩲𖩸𖩻𖩹𖩺𖪈𖪋𖪓𖪉𖪊𖩴𖩷𖩵𖩶]' },
{ symbol:'Ⓕ', desc:'Finals', chars:'[xxx]' },
{ symbol:'Ⓣ', desc:'Tones', chars:'[xxx]' },
{ symbol:'⊙', desc:'Invisibles', chars:'[\u200C\u200D]' },
]
