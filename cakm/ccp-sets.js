

// The collections array is new and needs to be moved from xx_vocab all orthographies.																	
// It provides sets that can be used for searching text in term lists and in pickers.																	
// Keys are drawn from the following set of characters:																	
// ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ
// ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ⊙
// 🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩
// 🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉

var collections = [
{ symbol:'Ⓒ', desc:'Consonants', chars:'[𑄛𑄝𑄖𑄘𑄑𑄓𑄇𑄉𑄜𑄞𑄗𑄙𑄒𑄔𑄈𑄊𑄌𑄍𑄎𑄏𑅇𑄥𑄦𑄟𑄚𑄕𑄐𑄋𑄤𑄢𑄣𑅄𑄡𑄠]' },
{ symbol:'ⓥ', desc:'Dependent vowels', chars:'[𑄨𑄪𑄩𑄫𑄬𑄮𑅆𑄰𑄧𑅅𑄭𑄯]' },
{ symbol:'Ⓥ', desc:'Independent vowels', chars:'[𑄄𑄅𑄆𑄃]' },
{ symbol:'Ⓕ', desc:'Finals', chars:'[𑄀𑄁𑄂]' },
{ symbol:'🅲', desc:'Latin consonants', chars:'[hkkʰɡɡʰŋt͡ʃst͡ʃʰd͡ʒd͡ʒʰɲʈʈʰɖɖʰɳttʰddʰnpfpʰfʰbbʰmjzrɽlwsʃlʰv]' },
{ symbol:'ⓧ', desc:'Virama', chars:'[\u11133]' },
{ symbol:'⊙', desc:'Invisibles', chars:'[\u200C\u200D]' },
]
