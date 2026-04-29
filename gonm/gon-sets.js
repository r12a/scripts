

// The collections array is new and needs to be moved from xx_vocab all orthographies.																	
// It provides sets that can be used for searching text in term lists and in pickers.																	
// Keys are drawn from the following set of characters:																	
// ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ
// ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ⊙
// 🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩
// 🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉

var collections = [
{ symbol:'Ⓒ', desc:'Consonants', chars:'[𑴠𑴡𑴢𑴣𑴛𑴜𑴝𑴞𑴑𑴒𑴓𑴔𑴖𑴗𑴘𑴙𑴌𑴍𑴎𑴏𑴨𑴫𑴩𑴪𑴬𑴤𑴟𑴚𑴕𑴐𑴦𑴧𑴭𑴥]' },
{ symbol:'ⓥ', desc:'Dependent vowels', chars:'[𑴲𑴳𑴴𑴵𑴺𑴽𑴱𑴼𑴿𑴶]' },
{ symbol:'Ⓥ', desc:'Independent vowels', chars:'[𑴂𑴃𑴄𑴅𑴆𑴉𑴀𑴁𑴈𑴋]' },
{ symbol:'Ⓡ', desc:'R-repha & r-kara', chars:'[𑵆𑵇]' },
{ symbol:'Ⓕ', desc:'Finals', chars:'[𑵀𑵁]' },
{ symbol:'⊙', desc:'Invisibles', chars:'[\u200C\u200D]' },
{ symbol:'🆅', desc:'Virama', chars:'[\u{11D45}]' },
{ symbol:'🅥', desc:'Vowel killer', chars:'[\u{11D44}]' },
]
