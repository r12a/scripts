

// The collections array is new and needs to be moved from xx_vocab all orthographies.																	
// It provides sets that can be used for searching text in term lists and in pickers.																	
// Keys are drawn from the following set of characters:																	
// ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ
// ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ⊙
// 🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩
// 🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉

var collections = [
{ symbol:'ⓥ', desc:'Dependent vowels', chars:'[𑆴𑆶𑆵𑆷𑆼𑆾𑆳𑆽𑆿𑆸]' },
{ symbol:'🅚', desc:'Kashmiri vowels', chars:'[𑭢𑭣𑭤𑭠𑭥𑭡𑭦𑭧]' },
{ symbol:'Ⓥ', desc:'Independent vowels', chars:'[𑆅𑆇𑆆𑆈𑆍𑆏𑆃𑆄𑆎𑆐𑆉]' },
{ symbol:'🅥', desc:'Vocalics', chars:'[𑆉𑆸𑆹𑆊𑆺𑆋𑆻𑆌]' },
{ symbol:'Ⓒ', desc:'All consonants', chars:'[𑆥𑆠𑆛𑆖𑆑𑆧𑆢𑆝𑆘𑆓𑆦𑆡𑆜𑆗𑆒𑆨𑆣𑆞𑆙𑆔𑆱𑆯𑆰𑆲𑆩𑆤𑆚𑆟𑆕𑆮𑆫𑆬𑆭𑆪]' },
{ symbol:'Ⓔ', desc:'Extended consonants', chars:'[𑆖𑇊𑇅𑆗𑇊𑇅𑆘𑇊]' },
{ symbol:'Ⓕ', desc:'Finals', chars:'[𑆁𑇅𑆂]' },
{ symbol:'⊙', desc:'Invisibles', chars:'[\u200C\u200D]' },
]
