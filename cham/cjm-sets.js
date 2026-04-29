

// The collections array is new and needs to be moved from xx_vocab all orthographies.																	
// It provides sets that can be used for searching text in term lists and in pickers.																	
// Keys are drawn from the following set of characters:																	
// ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ
// ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ⊙
// 🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩
// 🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉

var collections = [
{ symbol:'Ⓒ', desc:'Consonants', chars:'[ꨆꨇꨈꨉꨊꨋꨌꨍꨎꨏꨐꨑꨒꨓꨔꨕꨖꨗꨘꨙꨚꨛꨜꨝꨞꨟꨠꨡꨢꨣꨤꨥꨦꨧꨨ]' },
{ symbol:'ⓥ', desc:'Dependent vowels', chars:'[ꨪꨲꨭꨫꨲꨩꨭꨩꨬꨯꨯꨩꨮꨱꨯꨮꨯꨮꨩɔꨯꨱꨩꨰꨮꨭ]' },
{ symbol:'Ⓥ', desc:'Independent vowels', chars:'[ꨀꨁꨂꨃꨄꨅ]' },
{ symbol:'Ⓕ', desc:'Finals', chars:'[ꩀꩁꩂꩃꩄꩅꩆꩇꩈꩉꩊꩋꩌꩍ]' },
{ symbol:'Ⓜ', desc:'Medials', chars:'[ꨳꨴꨵꨶ]' },
{ symbol:'Ⓝ', desc:'Nasals with ɨ', chars:'[ꨟꨗꨐꨊ]' },
{ symbol:'ⓝ', desc:'Nasals with a', chars:'[ꨠꨘꨑꨋ]' },

{ symbol:'🆅', desc:'Latin vowels', chars:'[aeiouɔəɛɨɯ]' },
]
