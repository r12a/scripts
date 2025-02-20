

// The collections array is new and needs to be moved from xx_vocab all orthographies.																	
// It provides sets that can be used for searching text in term lists and in pickers.																	
// Keys are drawn from the following set of characters:																	
// ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ
// ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ⊙
// 🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩
// 🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉

var collections = [
{ symbol:'ⓥ', desc:'Dependent vowels', chars:'(𑆴|𑆶|𑆵|𑆷|𑆼|𑆾|𑆳|𑆽|𑆿|𑆸)' },
{ symbol:'🅚', desc:'Kashmiri vowels', chars:'(𑭢|𑭣|𑭤|𑭠|𑭥|𑭡|𑭦|𑭧)' },
{ symbol:'Ⓥ', desc:'Independent vowels', chars:'(𑆅|𑆇|𑆆|𑆈|𑆍|𑆏|𑆃|𑆄|𑆎|𑆐|𑆉)' },
{ symbol:'🅥', desc:'Vocalics', chars:'(𑆉|𑆸|𑆹|𑆊|𑆺|𑆋|𑆻|𑆌)' },
{ symbol:'Ⓒ', desc:'All consonants', chars:'(𑆥|𑆠|𑆛|𑆖|𑆑|𑆧|𑆢|𑆝|𑆘|𑆓|𑆦|𑆡|𑆜|𑆗|𑆒|𑆨|𑆣|𑆞|𑆙|𑆔|𑆱|𑆯|𑆰|𑆲|𑆩|𑆤|𑆚|𑆟|𑆕|𑆮|𑆫|𑆬|𑆭|𑆪)' },
{ symbol:'Ⓔ', desc:'Extended consonants', chars:'(𑆖𑇊𑇅𑆗𑇊𑇅𑆘𑇊)' },
{ symbol:'Ⓕ', desc:'Finals', chars:'(𑆁𑇅𑆂)' },
{ symbol:'⊙', desc:'Invisibles', chars:'(\u200C|\u200D)' },
]
