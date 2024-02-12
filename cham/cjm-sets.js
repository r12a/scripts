

// The collections array is new and needs to be moved from xx_vocab all orthographies.																	
// It provides sets that can be used for searching text in term lists and in pickers.																	
// Keys are drawn from the following set of characters:																	
// ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ
// ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ⊙
// 🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩
// 🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉

var collections = [
{ symbol:'Ⓒ', desc:'Consonants', chars:'(ꨆ|ꨇ|ꨈ|ꨉ|ꨊ|ꨋ|ꨌ|ꨍ|ꨎ|ꨏ|ꨐ|ꨑ|ꨒ|ꨓ|ꨔ|ꨕ|ꨖ|ꨗ|ꨘ|ꨙ|ꨚ|ꨛ|ꨜ|ꨝ|ꨞ|ꨟ|ꨠ|ꨡ|ꨢ|ꨣ|ꨤ|ꨥ|ꨦ|ꨧ|ꨨ)' },
{ symbol:'ⓥ', desc:'Dependent vowels', chars:'(ꨪ|ꨲ|ꨭ|ꨫ|ꨲꨩ|ꨭꨩ|ꨬ|ꨯ|ꨯꨩ|ꨮ|ꨱ|ꨯꨮ|ꨯꨮꨩ|ɔꨯꨱ|ꨩ|ꨰ|ꨮꨭ)' },
{ symbol:'Ⓥ', desc:'Independent vowels', chars:'(ꨀ|ꨁ|ꨂ|ꨃ|ꨄ|ꨅ)' },
{ symbol:'Ⓕ', desc:'Finals', chars:'(ꩀ|ꩁ|ꩂ|ꩃ|ꩄ|ꩅ|ꩆ|ꩇ|ꩈ|ꩉ|ꩊ|ꩋ|ꩌ|ꩍ)' },
{ symbol:'Ⓜ', desc:'Medials', chars:'(ꨳ|ꨴ|ꨵ|ꨶ)' },
{ symbol:'Ⓝ', desc:'Nasals with ɨ', chars:'(ꨟ|ꨗ|ꨐ|ꨊ)' },
{ symbol:'ⓝ', desc:'Nasals with a', chars:'(ꨠ|ꨘ|ꨑ|ꨋ)' },

{ symbol:'🆅', desc:'Latin vowels', chars:'(a|e|i|o|u|ɔ|ə|ɛ|ɨ|ɯ)' },
]
