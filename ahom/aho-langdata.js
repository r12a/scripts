// this should always be updated when app-charuse/langs.js is updated

    const Y = true
    const N = false
    const P = 'partial'
    const U = '?'


var langs = {

"aho": { name:"Hindi", local:" मानक हिन्दी‎ (Mānak Hindī), हिन्दी‎ (Hindī)", silcode:"hin", 
source:"cldr_hi,udhr_hin,9d8e188be96400153901b55006feaaf9fd4bf3b1", 
region:"sasia", countries:"India, Nepal, Singapore, South Africa", script:"deva", speakers:"260000000", 
letter:"अआइईउऊऋएऐओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसहक़फ़ज़ख़ग़ड़ढ़", letteraux:"ऍऑऽॐ", mark:"ँंः़ािीुूृेैोौ्", markaux:"ॅॉ", number:"०१२३४५६७८९", punctuation:"।॥॰‘’“”—", symbol:"₹", other:"‌‍", 
orth:`[Devanagari] &nbsp;  
<a href="../scripts/devanagari" target="_blank">Detailed summary</a>.`,
also:
["hi-newa | newa | Archaic, no longer in use."],
type:"abugida", cs:"no", gpos:"yes", gsub:"yes", cursive:"no", wordsep:"space", baseline:"high", wrap:"word", hyphenation:"(yes)", hyphen:"-",  direction:"ltr",  justification:"sp", 
vowels:"inh:1 vs:11 ind:12 pre:1 voc:1",  clusters:"inv stk cnj lig rax",  finals:"cm:2 let:y", 
linked:"devanagari", fonts:"/pickers/deva-hi/", 
},


"ahom": { name:"Ahom", region:"seasia",
blocks:1, chars:65, bletter:34, bmark:15, bnumber:12, bpunctuation:3, bsymbol:1, bother:0, 
direction: "ltr", rtlnumbers:N,
type:"abug", 
voweltype: { inherent:0, letters:N, marks:Y, hidden:N, visorder:N, vocalics:N, ivowels:N, vbase:"A 𑜒", vcomposite:N, prebase:Y, circum:N },
case:N, cursive:N, mcchars:"m", conjuncts:Y, ligs:U,
medials:"cm", finals:"",
clusters: { ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:Y, diacritic:N, killer:"" },
wordsep: "space",
linebreak:"word", hyphen:U, justification:U, wordspan:N, gc:Y,
baseline: "romn",
},

}