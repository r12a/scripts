

// The collections array is new and needs to be moved from xx_vocab all orthographies.																	
// It provides sets that can be used for searching text in term lists and in pickers.																	
// Keys are drawn from the following set of characters:																	
// ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ
// ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ⊙
// 🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩
// 🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉

var collections = [
{ symbol:'Ⓒ', desc:'Consonants', chars:'(ꠙ|ꠚ|ꠛ|ꠜ|ꠔ|ꠕ|ꠌ|ꠍ|ꠖ|ꠗ|ꠎ|ꠏ|ꠐ|ꠑ|ꠒ|ꠓ|ꠇ|ꠈ|ꠉ|ꠊ|ꠡ|ꠢ|ꠝ|ꠘ|ꠞ|ꠠ|ꠟ)' },
{ symbol:'ⓥ', desc:'Dependent vowels', chars:'(ꠤ|ꠥ|ꠦ|ꠧ|ꠣ|ꠂ)' },
{ symbol:'Ⓥ', desc:'Independent vowels', chars:'(ꠁ|ꠃ|ꠄ|ꠅ|ꠀ)' },
{ symbol:'Ⓕ', desc:'Finals', chars:'(ꠋ)' },
{ symbol:'ⓧ', desc:'Vowel killers', chars:'(꠆|꠬)' },
{ symbol:'⊙', desc:'Invisibles', chars:'(\u200C|\u200D)' },
{ symbol:'🅒', desc:'Latin consonants', chars:'(b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z|ɖ|ɦ|ɸ|ɽ|ɾ|ʃ|ʈ|ʒ|d͡ʒ|t͡ʃ|ḍ|ṛ|ṭ|ŋ)' },
{ symbol:'🅥', desc:'Latin vowels', chars:'(a|e|i|o|u|ɔ|ɛ|ʊ|ʒ|æ)' },
]
