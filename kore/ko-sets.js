

// The collections array is new and needs to be moved from xx_vocab all orthographies.																	
// It provides sets that can be used for searching text in term lists and in pickers.																	
// Keys are drawn from the following set of characters:																	
// ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ
// ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ⊙
// 🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩
// 🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉

var collections = [
{ symbol:'🅞', desc:'Onsets', chars:'(ᄇ|ᄈ|ᄑ|ᄃ|ᄄ|ᄐ|ᄌ|ᄍ|ᄎ|ᄀ|ᄁ|ᄏ|ᄉ|ᄊ|ᄒ|ᄆ|ᄂ|ᄋ|ᄅ)' },
{ symbol:'🅒', desc:'Codas', chars:'(ᆸ|ᆹ|ᇁ|ᆮ|ᇀ|ᆽ|ᆾ|ᆨ|ᆩ|ᆪ|ᆿ|ᆺ|ᆻ|ᇂ|ᆷ|ᆫ|ᆬ|ᆭ|ᆼ|ᆯ|ᆰ|ᆱ|ᆲ|ᆳ|ᆴ|ᆵ|ᆶ)' },
{ symbol:'🅥', desc:'Vowels', chars:'(ᅵ|ᅳ|ᅮ|ᅦ|ᅩ|ᅢ|ᅥ|ᅡ|ᅲ|ᅨ|ᅭ|ᅤ|ᅧ|ᅣ|ᅴ|ᅱ|ᅰ|ᅬ|ᅫ|ᅯ|ᅪ)' },

{ symbol:'ⓞ', desc:'Tense onsets', chars:'(ᄈ|ᄄ|ᄍ|ᄁ|ᄊ)' },
{ symbol:'ⓥ', desc:'Horizontal vowels', chars:'(ᅳ|ᅮ|ᅩ|ᅲ|ᅭ|ᅴ|ᅱ|ᅰ|ᅬ|ᅫ|ᅯ|ᅪ)' },
{ symbol:'Ⓥ', desc:'Vertical vowels', chars:'(ᅵ|ᅦ|ᅢ|ᅥ|ᅡ|ᅨ|ᅤ|ᅧ|ᅣ)' },

{ symbol:'⊙', desc:'Invisibles', chars:'(\u200C|\u200D|2067|202B|2066|202A|2068|2069|202C|200F|200E|061C|034F)' },
]
