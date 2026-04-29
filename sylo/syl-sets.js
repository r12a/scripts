

// The collections array is new and needs to be moved from xx_vocab all orthographies.																	
// It provides sets that can be used for searching text in term lists and in pickers.																	
// Keys are drawn from the following set of characters:																	
// ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ
// ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ⊙
// 🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩
// 🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉

var collections = [
{ symbol:'Ⓒ', desc:'Consonants', chars:'[ꠙꠚꠛꠜꠔꠕꠌꠍꠖꠗꠎꠏꠐꠑꠒꠓꠇꠈꠉꠊꠡꠢꠝꠘꠞꠠꠟ]' },
{ symbol:'ⓥ', desc:'Dependent vowels', chars:'[ꠤꠥꠦꠧꠣꠂ]' },
{ symbol:'Ⓥ', desc:'Independent vowels', chars:'[ꠁꠃꠄꠅꠀ]' },
{ symbol:'Ⓕ', desc:'Finals', chars:'[ꠋ]' },
{ symbol:'ⓧ', desc:'Vowel killers', chars:'[꠆꠬]' },
{ symbol:'⊙', desc:'Invisibles', chars:'[\u200C\u200D]' },
{ symbol:'🅒', desc:'Latin consonants', chars:'[bcdfghjklmnpqrstvwxyzɖɦɸɽɾʃʈʒd͡ʒt͡ʃḍṛṭŋ]' },
{ symbol:'🅥', desc:'Latin vowels', chars:'[aeiouɔɛʊʒæ]' },
]
