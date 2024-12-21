const Y = true
const N = false
const P = 'partial'
const U = '?'


var scriptdb = {


"adlm": { name:"Adlam", region:"afr",
blocks: 1, chars: 88, bletter:69, bmark:7, bnumber:10, bpunctuation:2, bsymbol:0, bother:0, 
direction:"rtl", rtlnumbers:Y,
type:"alpha", 
voweltype: { inherent: 0, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, ivowels:N, vbase:"", vcomposite:N, prebase:N, circum:N },
case:Y, cursive:Y, conjuncts:N, mcchars:"m", 
medials:"", finals:"",
clusters: { ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:"" }, 
wordsep:"space",
linebreak:"word", hyphen:"no", justification:"sp", wordspan:N, gc:Y,
baseline: "romn",
},



"ahom": {name:"Ahom", region:"sasia", type:"abug", 
blocks:1, chars:65, bletter:34, bmark:15, bnumber:12, bpunctuation:3, bsymbol:1, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:1, letters:Y, marks:Y, hidden:N, visorder:N, vocalics:N, ivowels:N, vbase:"A 𑜒", vcomposite:Y, prebase:Y, circum:N, },
case:N, cursive:N, mcchars:"m", conjuncts:Y, ligs:Y, 
medials:"cm", finals:"vk",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:Y, diacritic:N, killer:"k"},
wordsep:"space",
linebreak:"word", hyphen:"? ", wordspan:N, justification:U, gc:Y, baseline:"romn", 
},



"arab": {name:"Arabic", region:"wasia", type:"abjad", 
blocks:7, chars:449, bletter:276, bmark:118, bnumber:20, bpunctuation:0, bsymbol:11, bother:11, 
direction:"rtl", rtlnumbers:N,
voweltype: { inherent:0, letters:Y, marks:Y, hidden:Y, visorder:N, vocalics:N, ivowels:N, vbase:"alef ا", vcomposite:Y, prebase:N, circum:N, },
case:N, cursive:Y, mcchars:"m", conjuncts:Y, ligs:Y, 
medials:"", finals:"",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:Y, killer:""},
wordsep:"space",
linebreak:"word", hyphen:N, justification:"sp str sw", wordspan:N, gc:Y, baseline:"romn", 
},




"arabd": { name:"Arabic [diacritic alpha]", region:"wasia",
blocks:7, chars:449, bletter:276, bmark:118, bnumber:20, bpunctuation:13, bsymbol:11, bother:11, 
direction: "rtl", rtlnumbers:N,
type:"alpha", 
voweltype: { inherent:0, letters:Y, marks:Y, hidden:N, visorder:N, vocalics:N, ivowels:N, vbase:"", vcomposite:N, prebase:N, circum:N },
case:N, cursive:Y, conjuncts:Y, mcchars:"m", ligs:Y, 
medials:"", finals:"",
clusters: { ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:Y, killer:"" },
wordsep: "space",
linebreak:"word", hyphen:N, justification:"sp str", wordspan:N, gc:Y,
baseline: "romn",
},




"arabl": { name:"Arabic [letter alpha]", region:"wasia",
blocks:7, chars:449, bletter:276, bmark:118, bnumber:20, bpunctuation:13, bsymbol:11, bother:11, 
direction: "rtl", rtlnumbers:N,
type:"alpha", 
voweltype: { inherent:0, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, ivowels:N, vbase:" ئـ", vcomposite:N, prebase:N, circum:N },
case:N, cursive:Y, conjuncts:N, mcchars:N, ligs:Y, 
medials:"", finals:"",
clusters: { ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:"" },
wordsep: "space",
linebreak:"word", hyphen:"yes ـ", justification:"sp str", wordspan:N, gc:Y,
baseline: "romn",
},




"armi": { name:"Aramaic, Imperial", region:"wasia",
blocks:1, chars:31, bletter:22, bmark:7, bnumber:8, bpunctuation:1, bsymbol:0, bother:0, 
direction: "rtl", rtlnumbers:Y,
type:"abjad", 
voweltype: { inherent:0, letters:N, marks:N, hidden:N, visorder:N, vocalics:N, ivowels:N, vbase:"", vcomposite:N, prebase:N, circum:N },
case:N, cursive:N, mcchars:N, conjuncts:N, 
medials:"", finals:"",
clusters: { ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:"" },
wordsep: "space none",
linebreak:U, hyphen:"yes", justification:U, wordspan:N, gc:Y,
baseline: "romn",
},



"armn": { name:"Armenian", region:"eur",
blocks:1, chars:91, bletter:80, bmark:0, bnumber:0, bpunctuation:8, bsymbol:3, bother:0, 
direction: "ltr", rtlnumbers:N,
type:"alpha", 
voweltype: { inherent:0, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, ivowels:N, vbase:"", vcomposite:Y, prebase:N, circum:N },
case:Y, cursive:N, mcchars:N, conjuncts:N, ligs:Y, 
medials:"", finals:"",
clusters: { ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:"" },
wordsep: "space",
linebreak:"word", hyphen:"yes ֊", justification:"sp", wordspan:N, gc:U,
baseline: "romn",
},



"avst": { name:"Avestan", region:"wasia",
blocks:1, chars:61, bletter:54, bmark:0, bnumber:0, bpunctuation:7, bsymbol:0, bother:0, 
direction: "rtl", rtlnumbers:N,
type:"alpha", 
voweltype: { inherent:0, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, ivowels:N, vbase:"", vcomposite:N, prebase:N, circum:N },
case:N, cursive:N, mcchars:N, conjuncts:N, ligs:Y, 
medials:"", finals:"",
clusters: { ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:"" },
wordsep: "ws:·",
linebreak:U, hyphen:U, justification:U, wordspan:N, gc:Y,
baseline: "romn",
},



"bali": {name:"Balinese", region:"oce", type:"abug", 
blocks:1, chars:127, bletter:55, bmark:31, bnumber:10, bpunctuation:12, bsymbol:19, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:1, letters:N, marks:Y, hidden:N, visorder:N, vocalics:Y, ivowels:Y, vbase:"HA ᬳ", vcomposite:N, prebase:Y, circum:Y, },
case:N, cursive:N, mcchars:"m", conjuncts:Y, ligs:N, 
medials:"", finals:"cm",
clusters:{ ligation:Y, stacks:Y, touch:N, conjoined:Y, subjoinedcp:N, visviram:Y, diacritic:N, killer:"v"},
wordsep:"no",
linebreak:"syllable", hyphen:"yes ᭠", justification:U, wordspan:Y, gc:N, baseline:"romn", 
},



"bamu": {name:"Bamum", region:"afr", type:"syll", 
blocks:1, chars:639, bletter:639, bmark:2, bnumber:10, bpunctuation:6, bsymbol:0, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:0, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, ivowels:N, vbase:"", vcomposite:N, prebase:N, circum:N, },
case:N, cursive:N, mcchars:Y, conjuncts:Y, ligs:N, 
medials:"", finals:"cm",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:Y, killer:""},
wordsep:"space",
linebreak:"word", hyphen:"? ", wordspan:N, justification:"sp", gc:Y, baseline:"romn", 
},



"bass": {name:"Bassa Vah", region:"afr", type:"alpha", 
blocks:1, chars:36, bletter:30, bmark:5, bnumber:0, bpunctuation:1, bsymbol:0, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:0, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, ivowels:N, vbase:"", vcomposite:N, prebase:N, circum:N, },
case:N, cursive:N, mcchars:Y, conjuncts:N, ligs:N, 
medials:"", finals:"",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:"space",
linebreak:"word", hyphen:"? ", wordspan:N, justification:U, gc:Y, baseline:"romn", 
},



"batk": {name:"Batak", region:"oce", type:"abug", 
blocks:1, chars:56, bletter:38, bmark:14, bnumber:0, bpunctuation:4, bsymbol:0, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:1, letters:N, marks:Y, hidden:N, visorder:N, vocalics:N, ivowels:N, vbase:"A ᯀ", vcomposite:N, prebase:N, circum:N, },
case:N, cursive:N, mcchars:Y, conjuncts:N, ligs:Y, 
medials:"", finals:"cm vk",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:"no",
linebreak:"syllable", hyphen:"no ", wordspan:N, justification:U, gc:"?", baseline:"romn", 
},



"beng": {name:"Bengali", region:"sasia", type:"abug", 
blocks:1, chars:96, bletter:55, bmark:20, bnumber:16, bpunctuation:1, bsymbol:4, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:2, letters:N, marks:Y, hidden:N, visorder:N, vocalics:N, ivowels:Y, vbase:"", vcomposite:N, prebase:Y, circum:Y, },
case:N, cursive:N, mcchars:"m", conjuncts:Y, ligs:Y, 
medials:"cm let", finals:"cm let",
clusters:{ ligation:Y, stacks:Y, touch:N, conjoined:Y, subjoinedcp:N, visviram:N, diacritic:N, killer:"v"},
wordsep:"space",
linebreak:"word", hyphen:"(yes) -", wordspan:N, justification:"sp", gc:N, baseline:"hang", 
},


"beri": {name:"Beria Erfe", region:"afr", type:"alpha", 
blocks:1, chars:50, bletter:50, bmark:0, bnumber:0, bpunctuation:0, bsymbol:0, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:0, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, ivowels:Y, vbase:"", vcomposite:N, prebase:N, circum:N, },
case:Y, cursive:N, mcchars:Y, conjuncts:N, ligs:N, 
medials:"", finals:"",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:"space",
linebreak:"word", hyphen:"? ", wordspan:N, justification:U, gc:Y, baseline:"romn", 
},



"bugi": {name:"Buginese", region:"oce", type:"abug", 
blocks:1, chars:30, bletter:23, bmark:5, bnumber:0, bpunctuation:2, bsymbol:0, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:1, letters:N, marks:Y, hidden:N, visorder:N, vocalics:N, ivowels:N, vbase:"A ᨕ", vcomposite:N, prebase:Y, circum:N, },
case:N, cursive:N, mcchars:Y, conjuncts:N, ligs:N, 
medials:"", finals:"",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:"space",
linebreak:"word", hyphen:"no ", wordspan:N, justification:U, gc:Y, baseline:"romn", 
},



"buhd": {name:"Buhid", region:"oce", type:"abug", 
blocks:1, chars:20, bletter:18, bmark:2, bnumber:0, bpunctuation:0, bsymbol:0, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:1, letters:N, marks:Y, hidden:N, visorder:N, vocalics:N, ivowels:Y, vbase:"", vcomposite:N, prebase:N, circum:N, },
case:N, cursive:N, mcchars:Y, conjuncts:N, ligs:N, 
medials:"", finals:"",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:"space",
linebreak:"word", hyphen:"? ", wordspan:N, justification:U, gc:Y, baseline:"romn", 
},



"cakm": {name:"Chakma", region:"sasia", type:"abug", 
blocks:1, chars:71, bletter:38, bmark:19, bnumber:10, bpunctuation:4, bsymbol:0, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:1, letters:Y, marks:Y, hidden:N, visorder:N, vocalics:N, ivowels:Y, vbase:"AA 𑄃", vcomposite:N, prebase:N, circum:N, },
case:N, cursive:N, mcchars:Y, conjuncts:Y, ligs:N, 
medials:"", finals:"cm vk",
clusters:{ ligation:Y, stacks:Y, touch:N, conjoined:Y, subjoinedcp:N, visviram:N, diacritic:N, killer:"i"},
wordsep:"space",
linebreak:"word", hyphen:"? ", wordspan:N, justification:U, gc:N, baseline:"romn", 
},



"cans": {name:"Canadian Aboriginal Syllabics", region:"nam", type:"feat", 
blocks:3, chars:726, bletter:723, bmark:0, bnumber:0, bpunctuation:2, bsymbol:1, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:0, letters:N, marks:N, hidden:N, visorder:N, vocalics:N, ivowels:Y, vbase:"", vcomposite:N, prebase:N, circum:N, },
case:N, cursive:N, mcchars:N, conjuncts:N, ligs:N, 
medials:"", finals:"let ss",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:"space",
linebreak:"word", hyphen:"yes -", wordspan:N, justification:"sp", gc:Y, baseline:"romn", 
},


"cham": {name:"Cham", region:"seasia", type:"abug", 
blocks:1, chars:83, bletter:52, bmark:17, bnumber:10, bpunctuation:4, bsymbol:0, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:2, letters:N, marks:Y, hidden:N, visorder:N, vocalics:N, ivowels:Y, vbase:"A ꨀ", vcomposite:Y, prebase:Y, circum:N, },
case:N, cursive:N, mcchars:"m", conjuncts:N, ligs:N, 
medials:"cm", finals:"cm let",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:"space",
linebreak:"word", hyphen:"? ", wordspan:N, justification:U, gc:Y, baseline:"romn", 
},



"cher": { name:"Cherokee", region:"nam", 
blocks:2, chars:172, bletter:172, bmark:0, bnumber:0, bpunctuation:0, bsymbol:0, bother:0, 
direction: "ltr", rtlnumbers:N,
type:"syll", 
voweltype: { inherent:0, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, ivowels:N, vbase:"", vcomposite:N, prebase:N, circum:N },
case:Y, cursive:N, mcchars:N, conjuncts:N, ligs:N, 
medials:"", finals:"",
clusters: { ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:"" },
wordsep: "space",
linebreak:"word", hyphen:"?", justification:"sp", wordspan:N, gc:Y,
baseline: "romn",
},



"cyrl": {name:"Cyrillic", region:"easia", type:"alpha", 
blocks:6, chars:506, bletter:447, bmark:56, bnumber:0, bpunctuation:2, bsymbol:1, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:0, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, ivowels:Y, vbase:"", vcomposite:N, prebase:N, circum:N, },
case:Y, cursive:N, mcchars:N, conjuncts:N, ligs:N, 
medials:"", finals:"",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:"space",
linebreak:"word", hyphen:"yes -", wordspan:N, justification:"sp", gc:Y, baseline:"romn", 
},



"deva": {name:"Devanagari", region:"sasia", type:"abug", 
blocks:3, chars:170, bletter:90, bmark:53, bnumber:10, bpunctuation:17, bsymbol:0, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:1, letters:Y, marks:Y, hidden:N, visorder:N, vocalics:Y, ivowels:Y, vbase:"", vcomposite:N, prebase:Y, circum:N, },
case:N, cursive:N, mcchars:Y, conjuncts:Y, ligs:N, 
medials:"", finals:"cm",
clusters:{ ligation:Y, stacks:Y, touch:N, conjoined:Y, subjoinedcp:N, visviram:N, diacritic:N, killer:"v"},
wordsep:"space",
linebreak:"word", hyphen:"yes -", wordspan:N, justification:"sp", gc:N, baseline:"hang", 
},



"ethi": {name:"Ethiopic", region:"afr", type:"feat", 
blocks:5, chars:523, bletter:481, bmark:3, bnumber:20, bpunctuation:9, bsymbol:10, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:0, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, ivowels:Y, vbase:"", vcomposite:N, prebase:N, circum:N, },
case:N, cursive:N, mcchars:N, conjuncts:N, ligs:N, 
medials:"", finals:"",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:"space ws:፡",
linebreak:"word", hyphen:"? ", wordspan:N, justification:"sp", gc:Y, baseline:"romn", 
},


"gara": {name:"Garay", region:"afr", type:"alpha", 
blocks:1, chars:69, bletter:51, bmark:5, bnumber:10, bpunctuation:1, bsymbol:2, bother:0, 
direction:"rtl", rtlnumbers:N,
voweltype: { inherent:0, letters:Y, marks:Y, hidden:N, visorder:N, vocalics:N, ivowels:N, vbase:"A 𐵰 𐵐 ", vcomposite:N, prebase:N, circum:N, },
case:Y, cursive:N, mcchars:"m", conjuncts:N, ligs:Y, 
medials:"", finals:"",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:"space",
linebreak:"word", hyphen:"yes 𐵮", wordspan:N, justification:U, gc:Y, baseline:"romn", 
},



"geor": {name:"Georgian", region:"eur", type:"alpha", 
blocks:3, chars:174, bletter:173, bmark:0, bnumber:0, bpunctuation:1, bsymbol:0, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:0, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, ivowels:Y, vbase:"", vcomposite:N, prebase:N, circum:N, },
case:Y, cursive:N, mcchars:N, conjuncts:N, ligs:N, 
medials:"", finals:"",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:"space",
linebreak:"word", hyphen:"yes -", wordspan:N, justification:"sp", gc:Y, baseline:"romn", 
},



"grek": {name:"Greek", region:"eur", type:"alpha", 
blocks:3, chars:417, bletter:318, bmark:0, bnumber:59, bpunctuation:2, bsymbol:38, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:0, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, ivowels:Y, vbase:"", vcomposite:N, prebase:N, circum:N, },
case:Y, cursive:N, mcchars:Y, conjuncts:N, ligs:N, 
medials:"", finals:"",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:"space",
linebreak:"word", hyphen:"yes -", wordspan:N, justification:"sp", gc:Y, baseline:"romn", 
},



"gujr": { name:"Gujarati", region:"sasia", 
blocks:1, chars:91, bletter:53, bmark:26, bnumber:10, bpunctuation:1, bsymbol:1, bother:0, 
direction: "ltr", rtlnumbers:N,
type:"abug", 
voweltype: { inherent:1, letters:Y, marks:Y, hidden:N, visorder:N, vocalics:Y, ivowels:Y, vbase:"", vcomposite:N, prebase:Y, circum:N },
case:N, cursive:N, mcchars:Y, conjuncts:Y, 
medials:"", finals:"cm",
clusters: { ligation:Y, stacks:Y, touch:Y, conjoined:Y, subjoinedcp:N, visviram:N, diacritic:N, killer:"v" },
wordsep: "space",
linebreak:"word", hyphen:"?", justification:"sp", wordspan:N, gc:N,
baseline: "hang",
},



"guru": {name:"Gurmukhi", region:"sasia", type:"abug", 
blocks:1, chars:80, bletter:51, bmark:18, bnumber:10, bpunctuation:1, bsymbol:0, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:1, letters:N, marks:Y, hidden:N, visorder:N, vocalics:N, ivowels:Y, vbase:"", vcomposite:N, prebase:Y, circum:N, },
case:N, cursive:N, mcchars:Y, conjuncts:Y, ligs:Y, 
medials:"cm", finals:"cm",
clusters:{ ligation:N, stacks:Y, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:"v"},
wordsep:"space",
linebreak:"word", hyphen:"? ", wordspan:N, justification:"sp", gc:N, baseline:"hang", 
},



"hang": {name:"Hangul", region:"eur", type:"feat", 
blocks:5, chars:11635, bletter:11635, bmark:0, bnumber:0, bpunctuation:0, bsymbol:0, bother:0, 
direction:"ltr tbrl", rtlnumbers:N,
voweltype: { inherent:0, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, ivowels:Y, vbase:"", vcomposite:N, prebase:N, circum:N, },
case:N, cursive:N, mcchars:N, conjuncts:N, ligs:N, 
medials:"", finals:"",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:"space",
linebreak:"word char", hyphen:"no ", wordspan:N, justification:"sp", gc:Y, baseline:"ideo", 
},



"hani": {name:"Han", region:"eur", type:"ideo", 
blocks:17, chars:99110, bletter:98706, bmark:3, bnumber:4, bpunctuation:1, bsymbol:396, bother:0, 
direction:"ltr tbrl", rtlnumbers:N,
voweltype: { inherent:0, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, ivowels:Y, vbase:"", vcomposite:N, prebase:N, circum:N, },
case:N, cursive:N, mcchars:N, conjuncts:N, ligs:N, 
medials:"", finals:"",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:"no",
linebreak:"char", hyphen:"no ", wordspan:N, justification:"ic", gc:Y, baseline:"ideo", 
},



"hano": {name:"Hanunó'o", region:"oce", type:"abug", 
blocks:1, chars:23, bletter:18, bmark:3, bnumber:0, bpunctuation:2, bsymbol:0, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:1, letters:N, marks:Y, hidden:N, visorder:N, vocalics:N, ivowels:Y, vbase:"", vcomposite:N, prebase:N, circum:N, },
case:N, cursive:N, mcchars:Y, conjuncts:Y, ligs:N, 
medials:"", finals:"vk",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:Y, killer:""},
wordsep:"space",
linebreak:"word", hyphen:"? ", wordspan:N, justification:U, gc:Y, baseline:"romn", 
},



"hebr": {name:"Hebrew", region:"wasia", type:"abjad", 
blocks:2, chars:134, bletter:75, bmark:52, bnumber:0, bpunctuation:6, bsymbol:1, bother:0, 
direction:"rtl", rtlnumbers:N,
voweltype: { inherent:0, letters:Y, marks:Y, hidden:Y, visorder:N, vocalics:N, ivowels:N, vbase:"", vcomposite:N, prebase:N, circum:N, },
case:N, cursive:N, mcchars:"m", conjuncts:N, ligs:N, 
medials:"", finals:"let",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:Y, killer:""},
wordsep:"space",
linebreak:"word", hyphen:"? ", wordspan:N, justification:"sp", gc:Y, baseline:"romn", 
},


"hira": {name:"Hiragana", region:"eur", type:"syll", 
blocks:5, chars:406, bletter:402, bmark:2, bnumber:0, bpunctuation:0, bsymbol:2, bother:0, 
direction:"ltr tbrl", rtlnumbers:N,
voweltype: { inherent:0, letters:Y, marks:Y, hidden:N, visorder:N, vocalics:N, ivowels:N, vbase:"", vcomposite:N, prebase:N, circum:N, },
case:N, cursive:N, mcchars:N, conjuncts:N, ligs:N, 
medials:"", finals:"",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:"no",
linebreak:"char", hyphen:"", justification:"ic", wordspan:N, gc:Y, baseline:"ideo", 
},



"hluw": { name:"Anatolian hieroglyphs", local:"", localtrans:"", 
region:"wasia", countries:"Turkey", script:"hluw", speakers:U, 
blocks:1, chars:583, bletter:583, bmark:0, bnumber:0, bpunctuation:0, bsymbol:0, bother:0, 
direction: "rtl ltr bous", rtlnumbers:N,
type:"syll", 
voweltype: { inherent:0, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, ivowels:N, vbase:"", vcomposite:N, prebase:N, circum:N },
case:N, cursive:N, mcchars:N, conjuncts:N, ligs:N, 
medials:"", finals:"",
clusters: { ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:"" },
wordsep: U,
linebreak:U, hyphen:"n/a", justification:U, wordspan:N, gc:Y,
baseline:"romn",
},


"java": {name:"Javanese", region:"oce", type:"abug", 
blocks:1, chars:91, bletter:48, bmark:18, bnumber:10, bpunctuation:15, bsymbol:0, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:2, letters:Y, marks:Y, hidden:N, visorder:N, vocalics:Y, ivowels:Y, vbase:"HA ꦲ", vcomposite:Y, prebase:Y, circum:N, },
case:N, cursive:N, mcchars:Y, conjuncts:Y, ligs:N, 
medials:"cm", finals:"cm vk",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:"v"},
wordsep:"no",
linebreak:"syllable", hyphen:"", justification:"sp ig", wordspan:Y, gc:N, baseline:"romn", 
},


"jpan": {name:"Japanese", region:"eur", type:"syll", 
blocks:"9+", chars:2724, bletter:2731, bmark:2, bnumber:3, bpunctuation:0, bsymbol:2, bother:0, 
direction:"ltr tbrl", rtlnumbers:N,
voweltype: { inherent:0, letters:N, marks:N, hidden:N, visorder:N, vocalics:N, ivowels:Y, vbase:"", vcomposite:N, prebase:N, circum:N, },
case:N, cursive:N, mcchars:N, conjuncts:N, ligs:N, 
medials:"", finals:"",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:"no",
linebreak:"char", hyphen:"no ", wordspan:N, justification:"ic", gc:Y, baseline:"romn", 
},


"kali": {name:"Kayah Li", region:"seasia", type:"alpha", 
blocks:1, chars:48, bletter:28, bmark:8, bnumber:10, bpunctuation:2, bsymbol:0, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:0, letters:Y, marks:Y, hidden:N, visorder:N, vocalics:N, ivowels:Y, vbase:"OE ꤣ", vcomposite:N, prebase:N, circum:N, },
case:N, cursive:N, mcchars:Y, conjuncts:N, ligs:N, 
medials:"", finals:"",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:"space",
linebreak:"word", hyphen:"? ", wordspan:N, justification:U, gc:Y, baseline:"romn", 
},


"kana": {name:"Katakana", region:"eur", type:"syll", 
blocks:3, chars:171, bletter:168, bmark:0, bnumber:0, bpunctuation:3, bsymbol:0, bother:0, 
direction:"ltr tbrl", rtlnumbers:N,
voweltype: { inherent:0, letters:Y, marks:Y, hidden:N, visorder:N, vocalics:N, ivowels:N, vbase:"", vcomposite:N, prebase:N, circum:N, },
case:N, cursive:N, mcchars:N, conjuncts:N, ligs:N, 
medials:"", finals:"",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:"no",
linebreak:"char", hyphen:"", justification:"ic", wordspan:N, gc:Y, baseline:"ideo", 
},


"khmr": {name:"Khmer", region:"seasia", type:"abug", 
blocks:2, chars:146, bletter:54, bmark:33, bnumber:20, bpunctuation:6, bsymbol:33, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:2, letters:N, marks:Y, hidden:N, visorder:N, vocalics:Y, ivowels:Y, vbase:"QA អ", vcomposite:Y, prebase:Y, circum:Y, },
case:N, cursive:N, mcchars:"m", conjuncts:Y, ligs:Y, 
medials:"", finals:"",
clusters:{ ligation:N, stacks:Y, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:"i"},
wordsep:"no",
linebreak:"word", hyphen:"? ", wordspan:N, justification:U, gc:N, baseline:"romn", 
},


"krai": {name:"Kirat Rai", region:"sasia", type:"abug", 
blocks:1, chars:58, bletter:45, bmark:0, bnumber:10, bpunctuation:3, bsymbol:0, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:1, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, ivowels:N, vbase:"A 𖵃", vcomposite:N, prebase:N, circum:N, },
case:N, cursive:N, mcchars:N, conjuncts:N, ligs:N, 
medials:"", finals:"let",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:Y, diacritic:N, killer:"k"},
wordsep:"space",
linebreak:"word", hyphen:"? ", wordspan:N, justification:"sp", gc:Y, baseline:"romn", 
},


"lana": {name:"Tai Tham (Lanna)", region:"seasia", type:"abug", 
blocks:1, chars:127, bletter:54, bmark:40, bnumber:20, bpunctuation:13, bsymbol:0, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:1, letters:Y, marks:Y, hidden:N, visorder:N, vocalics:N, ivowels:Y, vbase:"A ᩋ", vcomposite:Y, prebase:Y, circum:N, },
case:N, cursive:N, mcchars:Y, conjuncts:Y, ligs:Y, 
medials:"cm", finals:"cm",
clusters:{ ligation:N, stacks:Y, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:"i"},
wordsep:"no",
linebreak:"word", hyphen:"", justification:U, wordspan:N, gc:N, baseline:"romn", 
},


"laoo": { name:"Lao", region:"seasia",
blocks:1, chars:83, bletter:56, bmark:17, bnumber:10, bpunctuation:0, bsymbol:0, bother:0, 
direction: "ltr", rtlnumbers:N,
type:"alpha", tones:Y, 
voweltype: { inherent:0, letters:Y, marks:Y, hidden:N, visorder:Y, vocalics:N, ivowels:N, vbase:"O ອ", vcomposite:Y, prebase:Y, circum:N },
case:N, cursive:N, mcchars:"m", conjuncts:N, ligs:N, 
medials:"", finals:"",
clusters: { ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:"" },
wordsep: "no",
linebreak:"word", hyphen:"no", justification:U, wordspan:N, gc:Y,
baseline: "romn",
},


"latn": {name:"Latin", region:"afr", type:"alpha", 
blocks:14, chars:1551, bletter:1427, bmark:0, bnumber:26, bpunctuation:53, bsymbol:41, bother:3, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:0, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, ivowels:Y, vbase:"", vcomposite:N, prebase:N, circum:N, },
case:Y, cursive:N, mcchars:N, conjuncts:N, ligs:N, 
medials:"", finals:"",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:"space",
linebreak:"word", hyphen:"? ", wordspan:N, justification:"sp", gc:Y, baseline:"romn", 
},


"lepc": {name:"Lepcha", region:"sasia", type:"abug", 
blocks:1, chars:74, bletter:39, bmark:20, bnumber:10, bpunctuation:5, bsymbol:0, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:1, letters:N, marks:Y, hidden:N, visorder:N, vocalics:N, ivowels:N, vbase:"A ᰣ", vcomposite:N, prebase:Y, circum:N, },
case:N, cursive:N, mcchars:N, conjuncts:N, ligs:N, 
medials:"cm let", finals:"cm",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:"space",
linebreak:"word", hyphen:"", justification:U, wordspan:N, gc:Y, baseline:"romn", 
},


"limb": {name:"Limbu", region:"sasia", type:"abug", 
blocks:1, chars:68, bletter:31, bmark:24, bnumber:10, bpunctuation:2, bsymbol:1, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:1, letters:N, marks:Y, hidden:N, visorder:N, vocalics:N, ivowels:N, vbase:"VC ᤀ", vcomposite:N, prebase:N, circum:Y, },
case:N, cursive:N, mcchars:Y, conjuncts:N, ligs:N, 
medials:"cm", finals:"cm vk",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:"k"},
wordsep:"space",
linebreak:"word", hyphen:"", justification:U, wordspan:N, gc:Y, baseline:"romn", 
},


"lisu": {name:"Lisu", region:"easia", type:"abug", 
blocks:2, chars:49, bletter:47, bmark:0, bnumber:0, bpunctuation:2, bsymbol:0, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:1, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, ivowels:Y, vbase:"", vcomposite:N, prebase:N, circum:N, },
case:N, cursive:N, mcchars:N, conjuncts:N, ligs:N, 
medials:"", finals:"",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:"syllable",
linebreak:"syllable", hyphen:"? ", wordspan:N, justification:U, gc:Y, baseline:"romn", 
},


"mand": {name:"Mandaic", region:"wasia", type:"abjad", 
blocks:1, chars:29, bletter:25, bmark:3, bnumber:0, bpunctuation:1, bsymbol:0, bother:0, 
direction:"rtl", rtlnumbers:N,
voweltype: { inherent:0, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, ivowels:Y, vbase:"In ࡏ", vcomposite:N, prebase:N, circum:N, },
case:N, cursive:Y, mcchars:N, conjuncts:N, ligs:N, 
medials:"", finals:"",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:"space",
linebreak:"word", hyphen:"? ", wordspan:N, justification:"sp str pad", gc:Y, baseline:"romn", 
},


"merc": {name:"Meroitic Cursive", region:"afr", type:"abug", 
blocks:1, chars:90, bletter:26, bmark:0, bnumber:64, bpunctuation:0, bsymbol:0, bother:0, 
direction:"rtl", rtlnumbers:Y,
voweltype: { inherent:1, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, ivowels:Y, vbase:"", vcomposite:N, prebase:N, circum:N, },
case:N, cursive:N, mcchars:N, conjuncts:N, ligs:N, 
medials:"", finals:"",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:": ws",
linebreak:"", hyphen:"? ", wordspan:N, justification:U, gc:Y, baseline:"romn", 
},


"mlym": {name:"Malayalam", region:"sasia", type:"abug", 
blocks:1, chars:118, bletter:67, bmark:23, bnumber:26, bpunctuation:0, bsymbol:2, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:1, letters:N, marks:Y, hidden:N, visorder:N, vocalics:Y, ivowels:Y, vbase:"", vcomposite:Y, prebase:Y, circum:Y, },
case:N, cursive:N, mcchars:N, conjuncts:N, ligs:Y, 
medials:"", finals:"cm",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:"v"},
wordsep:"space",
linebreak:"word", hyphen:"", justification:"sp", wordspan:N, gc:N, baseline:"romn", 
},


"mong": {name:"Traditional Mongolian", region:"easia", type:"alpha", 
blocks:2, chars:171, bletter:129, bmark:7, bnumber:10, bpunctuation:24, bsymbol:0, bother:1, 
direction:"tblr", rtlnumbers:N,
voweltype: { inherent:0, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, ivowels:N, vbase:"", vcomposite:N, prebase:N, circum:N, },
case:N, cursive:Y, mcchars:N, conjuncts:N, ligs:Y, 
medials:"", finals:"",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:"space",
linebreak:"word", hyphen:N, justification:U, wordspan:N, gc:Y, baseline:"cntr", 
},


"mroo": {name:"Mro", region:"sasia", type:"alpha", 
blocks:1, chars:43, bletter:31, bmark:0, bnumber:10, bpunctuation:2, bsymbol:0, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:0, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, ivowels:Y, vbase:"", vcomposite:N, prebase:N, circum:N, },
case:N, cursive:N, mcchars:N, conjuncts:N, ligs:N, 
medials:"", finals:"",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:"space",
linebreak:"word", hyphen:"", justification:U, wordspan:N, gc:Y, baseline:"romn", 
},


"mymr": {name:"Myanmar", region:"seasia", type:"abug", 
blocks:4, chars:243, bletter:120, bmark:62, bnumber:50, bpunctuation:6, bsymbol:5, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:4, letters:Y, marks:Y, hidden:N, visorder:N, vocalics:N, ivowels:Y, vbase:"A အ", vcomposite:Y, prebase:Y, circum:N, },
case:N, cursive:N, mcchars:"m", conjuncts:Y, ligs:Y, 
medials:"cm", finals:"vk",
clusters:{ ligation:N, stacks:Y, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:"i"},
wordsep:"no",
linebreak:"word", hyphen:"? ", wordspan:N, justification:U, gc:N, baseline:"romn", 
},


"nagm": {name:"Nag Mundari", region:"sasia", type:"alpha", 
blocks:1, chars:42, bletter:28, bmark:4, bnumber:10, bpunctuation:0, bsymbol:0, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:0, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, ivowels:Y, vbase:"", vcomposite:N, prebase:N, circum:N, },
case:N, cursive:N, mcchars:"m", conjuncts:N, ligs:N, 
medials:"", finals:"",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:"space",
linebreak:"word", hyphen:"? ", wordspan:N, justification:"sp", gc:Y, baseline:"romn", 
},


"newa": {name:"Newa", region:"sasia", type:"abug", 
blocks:1, chars:97, bletter:60, bmark:19, bnumber:10, bpunctuation:8, bsymbol:0, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:1, letters:Y, marks:Y, hidden:N, visorder:N, vocalics:Y, ivowels:Y, vbase:"", vcomposite:N, prebase:Y, circum:Y, },
case:N, cursive:Y, mcchars:"m", conjuncts:Y, ligs:Y, 
medials:"", finals:"vk",
clusters:{ ligation:Y, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:Y, diacritic:N, killer:"v"},
wordsep:"space",
linebreak:"word", hyphen:"? ", wordspan:N, justification:"sp", gc:N, baseline:"hang", 
},


"nkoo": {name:"N’Ko", region:"afr", type:"alpha", 
blocks:1, chars:62, bletter:36, bmark:10, bnumber:10, bpunctuation:3, bsymbol:3, bother:0, 
direction:"rtl", rtlnumbers:Y,
voweltype: { inherent:0, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, ivowels:Y, vbase:"", vcomposite:N, prebase:N, circum:N, },
case:N, cursive:Y, mcchars:"m", conjuncts:N, ligs:N, 
medials:"", finals:"",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:Y, killer:""},
wordsep:"space",
linebreak:"word", hyphen:"? ", wordspan:N, justification:"sp str", gc:Y, baseline:"romn", 
},


"olck": {name:"Ol Chiki", region:"sasia", type:"alpha", 
blocks:1, chars:48, bletter:36, bmark:0, bnumber:10, bpunctuation:2, bsymbol:0, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:0, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, ivowels:Y, vbase:"", vcomposite:N, prebase:N, circum:N, },
case:N, cursive:N, mcchars:N, conjuncts:N, ligs:N, 
medials:"", finals:"let",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:"space",
linebreak:"word", hyphen:"? ", wordspan:N, justification:"sp", gc:Y, baseline:"romn", 
},


"orya": {name:"Odia/Oriya", region:"sasia", type:"abug", 
blocks:1, chars:91, bletter:53, bmark:21, bnumber:16, bpunctuation:0, bsymbol:1, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:1, letters:N, marks:Y, hidden:N, visorder:N, vocalics:Y, ivowels:Y, vbase:"", vcomposite:N, prebase:Y, circum:Y, },
case:N, cursive:N, mcchars:"m", conjuncts:Y, ligs:Y, 
medials:"", finals:"cm",
clusters:{ ligation:Y, stacks:Y, touch:N, conjoined:Y, subjoinedcp:N, visviram:Y, diacritic:N, killer:"v"},
wordsep:"space",
linebreak:"word", hyphen:"? ", wordspan:N, justification:"sp", gc:N, baseline:"romn", 
},


"osge": {name:"Osage", region:"nam", type:"alpha", 
blocks:1, chars:72, bletter:72, bmark:0, bnumber:0, bpunctuation:0, bsymbol:0, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:0, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, ivowels:Y, vbase:"", vcomposite:N, prebase:N, circum:N, },
case:Y, cursive:N, mcchars:"m", conjuncts:N, ligs:N, 
medials:"", finals:"",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:"space",
linebreak:"word", hyphen:"? ", wordspan:N, justification:U, gc:Y, baseline:"romn", 
},


"plrd": {name:"Miao (Pollard script)", region:"easia", type:"alpha", 
blocks:1, chars:149, bletter:89, bmark:60, bnumber:0, bpunctuation:0, bsymbol:0, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:0, letters:N, marks:Y, hidden:N, visorder:N, vocalics:N, ivowels:N, vbase:"AH 𖽃", vcomposite:N, prebase:Y, circum:N, },
case:N, cursive:N, mcchars:"m", conjuncts:N, ligs:N, 
medials:"let", finals:"cm",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:"syllable",
linebreak:"syllable", hyphen:"no ", wordspan:N, justification:U, gc:Y, baseline:"romn", 
},


"rjng": {name:"Rejang", region:"seasia", type:"abug", 
blocks:1, chars:37, bletter:23, bmark:13, bnumber:0, bpunctuation:1, bsymbol:0, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:1, letters:N, marks:Y, hidden:N, visorder:N, vocalics:N, ivowels:N, vbase:"A ꥆ", vcomposite:N, prebase:Y, circum:Y, },
case:N, cursive:N, mcchars:"m", conjuncts:Y, ligs:N, 
medials:"", finals:"cm",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:Y, diacritic:Y, killer:""},
wordsep:"space",
linebreak:"word", hyphen:"? ", wordspan:N, justification:U, gc:Y, baseline:"romn", 
},


"rohg": {name:"Rohingya", region:"seasia", type:"alpha", 
blocks:1, chars:50, bletter:36, bmark:4, bnumber:10, bpunctuation:0, bsymbol:0, bother:0, 
direction:"rtl", rtlnumbers:N,
voweltype: { inherent:0, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, ivowels:Y, vbase:"A 𐴀", vcomposite:N, prebase:N, circum:N, },
case:N, cursive:Y, mcchars:Y, conjuncts:N, ligs:N, 
medials:"", finals:"",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:"space",
linebreak:"word", hyphen:"? ", wordspan:N, justification:"sp str", gc:Y, baseline:"romn", 
},


"sinh": {name:"Sinhala", region:"sasia", type:"abug", 
blocks:2, chars:111, bletter:59, bmark:21, bnumber:30, bpunctuation:1, bsymbol:0, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:1, letters:N, marks:Y, hidden:N, visorder:N, vocalics:Y, ivowels:Y, vbase:"", vcomposite:N, prebase:Y, circum:Y, },
case:N, cursive:N, mcchars:"m", conjuncts:Y, ligs:Y, 
medials:"", finals:"cm",
clusters:{ ligation:N, stacks:N, touch:Y, conjoined:Y, subjoinedcp:N, visviram:Y, diacritic:N, killer:"v"},
wordsep:"space",
linebreak:"word", hyphen:"? ", wordspan:N, justification:"sp", gc:N, baseline:"romn", 
},


"sora": {name:"Sora Sompeng", region:"sasia", type:"abug", 
blocks:1, chars:35, bletter:25, bmark:0, bnumber:10, bpunctuation:0, bsymbol:0, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:1, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, ivowels:Y, vbase:"", vcomposite:N, prebase:N, circum:N, },
case:N, cursive:N, mcchars:N, conjuncts:N, ligs:N, 
medials:"", finals:"",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:"space",
linebreak:"word", hyphen:"? ", wordspan:N, justification:U, gc:Y, baseline:"romn", 
},


"sund": {name:"Sundanese", region:"seasia", type:"abug", 
blocks:2, chars:72, bletter:38, bmark:16, bnumber:10, bpunctuation:8, bsymbol:0, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:1, letters:N, marks:Y, hidden:N, visorder:N, vocalics:N, ivowels:Y, vbase:"", vcomposite:N, prebase:Y, circum:N, },
case:N, cursive:N, mcchars:"m", conjuncts:N, ligs:N, 
medials:"cm", finals:"cm",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:Y, diacritic:N, killer:"k"},
wordsep:"space",
linebreak:"", hyphen:"? ", wordspan:N, justification:U, gc:Y, baseline:"romn", 
},


"sunu": {name:"Sunuwar", region:"sasia", type:"abug alpha", 
blocks:1, chars:44, bletter:33, bmark:0, bnumber:10, bpunctuation:1, bsymbol:0, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:0, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, ivowels:Y, vbase:"", vcomposite:N, prebase:N, circum:N, },
case:N, cursive:N, mcchars:Y, conjuncts:Y, ligs:N, 
medials:"cm", finals:"",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:Y, killer:""},
wordsep:"space",
linebreak:"word", hyphen:"? ", wordspan:N, justification:U, gc:Y, baseline:"romn", 
},


"syrc": {name:"Classical Syriac", region:"wasia", type:"abjad", 
blocks:2, chars:88, bletter:45, bmark:28, bnumber:0, bpunctuation:14, bsymbol:0, bother:1, 
direction:"rtl", rtlnumbers:N,
voweltype: { inherent:0, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, ivowels:Y, vbase:"", vcomposite:N, prebase:N, circum:N, },
case:N, cursive:Y, mcchars:"m", conjuncts:N, ligs:Y, 
medials:"", finals:"",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:"space",
linebreak:"word", hyphen:"? ", wordspan:N, justification:U, gc:Y, baseline:"romn", 
},


"syrn": {name:"Eastern Syriac", region:"wasia", type:"alpha", 
blocks:2, chars:88, bletter:45, bmark:28, bnumber:0, bpunctuation:14, bsymbol:0, bother:1, 
direction:"rtl", rtlnumbers:N,
voweltype: { inherent:0, letters:Y, marks:Y, hidden:N, visorder:N, vocalics:N, ivowels:N, vbase:"ʔ ܐ", vcomposite:N, prebase:N, circum:N, },
case:N, cursive:Y, mcchars:"m", conjuncts:N, ligs:Y, 
medials:"", finals:"",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:"space",
linebreak:"word", hyphen:"? ", wordspan:N, justification:U, gc:Y, baseline:"romn", 
},


"syrj": {name:"Eastern Syriac", region:"wasia", type:"alpha", 
blocks:2, chars:88, bletter:45, bmark:28, bnumber:0, bpunctuation:14, bsymbol:0, bother:1, 
direction:"rtl", rtlnumbers:N,
voweltype: { inherent:0, letters:Y, marks:Y, hidden:N, visorder:N, vocalics:N, ivowels:N, vbase:"ʔ ܐ", vcomposite:N, prebase:N, circum:N, },
case:N, cursive:Y, mcchars:"m", conjuncts:N, ligs:Y, 
medials:"", finals:"",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:"space",
linebreak:"word", hyphen:"?", wordspan:N, justification:U, gc:Y, baseline:"romn", 
},


"tagb": {name:"Tagbanwa", region:"oce", type:"abug", 
blocks:1, chars:18, bletter:16, bmark:2, bnumber:0, bpunctuation:0, bsymbol:0, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:1, letters:N, marks:Y, hidden:N, visorder:N, vocalics:N, ivowels:Y, vbase:"", vcomposite:N, prebase:N, circum:N, },
case:N, cursive:N, mcchars:Y, conjuncts:N, ligs:N, 
medials:"", finals:"",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:"space",
linebreak:"word", hyphen:"? ", wordspan:N, justification:U, gc:Y, baseline:"romn", 
},


"tale": {name:"Tai Le", region:"seasia", type:"abug", 
blocks:1, chars:35, bletter:35, bmark:0, bnumber:0, bpunctuation:0, bsymbol:0, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:1, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, ivowels:N, vbase:"QA ᥟ", vcomposite:N, prebase:N, circum:N, },
case:N, cursive:N, mcchars:Y, conjuncts:N, ligs:N, 
medials:"", finals:"",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:"no",
linebreak:"", hyphen:"?", wordspan:N, justification:U, gc:Y, baseline:"romn", 
},


"talu": {name:"New Tai Lü", region:"easia", type:"abug", 
blocks:1, chars:83, bletter:70, bmark:0, bnumber:11, bpunctuation:0, bsymbol:2, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:1, letters:Y, marks:N, hidden:N, visorder:Y, vocalics:N, ivowels:N, vbase:"QA ᦀ ᦁ", vcomposite:Y, prebase:N, circum:N, },
case:N, cursive:N, mcchars:N, conjuncts:N, ligs:N, 
medials:"let", finals:"let",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:"no",
linebreak:"", hyphen:"? ", wordspan:N, justification:U, gc:"?", baseline:"romn", 
},


"taml": {name:"Tamil", region:"sasia", type:"abug", 
blocks:2, chars:123, bletter:37, bmark:14, bnumber:34, bpunctuation:1, bsymbol:37, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:1, letters:N, marks:Y, hidden:N, visorder:N, vocalics:N, ivowels:Y, vbase:"", vcomposite:N, prebase:Y, circum:Y, },
case:N, cursive:N, mcchars:"m", conjuncts:Y, ligs:Y, 
medials:"", finals:"vk",
clusters:{ ligation:Y, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:Y, diacritic:N, killer:"v"},
wordsep:"space",
linebreak:"word", hyphen:"? ", wordspan:N, justification:"sp ig", gc:N, baseline:"romn", 
},


"tavt": {name:"Tai Viet", region:"seasia", type:"alpha", 
blocks:1, chars:72, bletter:61, bmark:9, bnumber:0, bpunctuation:2, bsymbol:0, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:0, letters:Y, marks:Y, hidden:N, visorder:Y, vocalics:N, ivowels:N, vbase:"O ꪮ ꪯ", vcomposite:Y, prebase:N, circum:N, },
case:N, cursive:N, mcchars:Y, conjuncts:N, ligs:N, 
medials:"", finals:"let",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:"space",
linebreak:"word", hyphen:"? ", wordspan:N, justification:U, gc:Y, baseline:"romn", 
},


"tayo": {name:"Tai Yo", region:"seasia", type:"abug", 
blocks:1, chars:54, bletter:49, bmark:5, bnumber:0, bpunctuation:0, bsymbol:0, bother:0, 
direction:"tbrl", rtlnumbers:N,
voweltype: { inherent:1, letters:Y, marks:Y, hidden:N, visorder:N, vocalics:N, ivowels:N, vbase:"QO 𞛜", vcomposite:N, prebase:N, circum:N, },
case:N, cursive:N, mcchars:"m", conjuncts:N, ligs:N, 
medials:"cm", finals:"",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:"space",
linebreak:"word", hyphen:"no ", wordspan:N, justification:U, gc:Y, baseline:"cntr", 
},


"telu": {name:"Telugu", region:"sasia", type:"abug", 
blocks:1, chars:100, bletter:57, bmark:24, bnumber:17, bpunctuation:1, bsymbol:1, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:1, letters:N, marks:Y, hidden:N, visorder:N, vocalics:Y, ivowels:Y, vbase:"", vcomposite:N, prebase:N, circum:Y, },
case:N, cursive:N, mcchars:"m", conjuncts:Y, ligs:Y, 
medials:"", finals:"cm",
clusters:{ ligation:N, stacks:Y, touch:N, conjoined:Y, subjoinedcp:N, visviram:N, diacritic:N, killer:"v"},
wordsep:"space",
linebreak:"word", hyphen:"? ", wordspan:N, justification:"sp", gc:N, baseline:"romn", 
},


"tfng": {name:"Tifinagh", region:"afr", type:"alpha", 
blocks:1, chars:59, bletter:57, bmark:1, bnumber:0, bpunctuation:1, bsymbol:0, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:0, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, ivowels:Y, vbase:"", vcomposite:N, prebase:N, circum:N, },
case:N, cursive:N, mcchars:N, conjuncts:N, ligs:Y, 
medials:"", finals:"",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:"space",
linebreak:"word", hyphen:"? ", wordspan:N, justification:"sp", gc:Y, baseline:"romn", 
},


"thaa": {name:"Thaana", region:"sasia", type:"alpha", 
blocks:1, chars:50, bletter:39, bmark:11, bnumber:0, bpunctuation:0, bsymbol:0, bother:0, 
direction:"rtl", rtlnumbers:N,
voweltype: { inherent:0, letters:N, marks:Y, hidden:N, visorder:N, vocalics:N, ivowels:N, vbase:"∅ އ", vcomposite:N, prebase:N, circum:N, },
case:N, cursive:N, mcchars:Y, conjuncts:Y, ligs:N, 
medials:"", finals:"",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:Y, killer:""},
wordsep:"space",
linebreak:"word", hyphen:"? ", wordspan:N, justification:"sp", gc:Y, baseline:"romn", 
},



"thai": {name:"Thai", region:"seasia", type:"abug", 
blocks:1, chars:87, bletter:57, bmark:16, bnumber:10, bpunctuation:3, bsymbol:1, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:3, letters:Y, marks:Y, hidden:N, visorder:Y, vocalics:Y, ivowels:N, vbase:"O อ", vcomposite:Y, prebase:N, circum:N, },
case:N, cursive:N, mcchars:"m", conjuncts:N, ligs:N, 
medials:"", finals:"",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:"no",
linebreak:"word", hyphen:"? ", wordspan:N, justification:U, gc:Y, baseline:"romn", 
},


"tibt": {name:"Tibetan", region:"easia", type:"abug", 
blocks:1, chars:211, bletter:50, bmark:77, bnumber:20, bpunctuation:28, bsymbol:36, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:1, letters:N, marks:Y, hidden:N, visorder:N, vocalics:Y, ivowels:N, vbase:"A འ ཨ", vcomposite:N, prebase:N, circum:N, },
case:N, cursive:N, mcchars:Y, conjuncts:Y, ligs:N, 
medials:"", finals:"",
clusters:{ ligation:N, stacks:Y, touch:N, conjoined:N, subjoinedcp:Y, visviram:N, diacritic:N, killer:""},
wordsep:"sb",
linebreak:"syllable", hyphen:"? ", wordspan:N, justification:"pad", gc:N, baseline:"hang", 
},



"tols": {name:"Tolong Siki", region:"sasia", type:"alpha", 
blocks:1, chars:54, bletter:44, bmark:0, bnumber:10, bpunctuation:0, bsymbol:0, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:0, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, ivowels:Y, vbase:"ʼ", vcomposite:N, prebase:N, circum:N, },
case:N, cursive:N, mcchars:"m", conjuncts:N, ligs:N, 
medials:"cm", finals:"cm",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:"space",
linebreak:"word", hyphen:"? ", wordspan:N, justification:U, gc:Y, baseline:"romn", 
},


"vaii": {name:"Vai", region:"afr", type:"syll", 
blocks:1, chars:300, bletter:287, bmark:0, bnumber:10, bpunctuation:3, bsymbol:0, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:0, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, ivowels:Y, vbase:"", vcomposite:N, prebase:N, circum:N, },
case:N, cursive:N, mcchars:N, conjuncts:N, ligs:N, 
medials:"", finals:"",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:"space",
linebreak:"word", hyphen:"? ", wordspan:N, justification:"sp", gc:Y, baseline:"romn", 
},


"wcho": {name:"Wancho", region:"sasia", type:"alpha", 
blocks:1, chars:59, bletter:44, bmark:4, bnumber:10, bpunctuation:0, bsymbol:1, bother:0, 
direction:"ltr", rtlnumbers:N,
voweltype: { inherent:0, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, ivowels:Y, vbase:"", vcomposite:N, prebase:N, circum:N, },
case:N, cursive:N, mcchars:N, conjuncts:N, ligs:N, 
medials:"let", finals:"",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:""},
wordsep:"space",
linebreak:"word", hyphen:"? ", wordspan:N, justification:U, gc:Y, baseline:"romn", 
},



"xxxx": { name:"Adlam", region:"nam sam cam carib eur sasia easia nasia seasia casia wasia afr oce", 
blocks:1, chars:88, bletter:69, bmark:7, bnumber:10, bpunctuation:2, bsymbol:0, bother:0, 
direction: "ltr rtl tbrl tblr bt bous", rtlnumbers:N,
type:"alpha abug syll ideo abjad", 
voweltype: { inherent:0, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, ivowels:N, vbase:"", vcomposite:N, prebase:N, circum:N },
case:N, cursive:N, mcchars:N, conjuncts:N, ligs:N, 
medials:"cm sj let", finals:"cm let vk ss",
clusters: { ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:"vik" },
wordsep: "space ws:x no zwsp syllable sb",
linebreak:"word syllable char", hyphen:"yes<char> (yes)<char> yes{∅} no n/a", wordspan:N, justification:"sp ic ig str sw pad none", gc:Y,
baseline: "romn hang ideo cntr",
},

name:"Bamum", local:"", localtrans:"", region:"afr", countries:"Senegal, etc", speakers:U,


}



/*
vowels:"1 inherent vowel, 36 letters/3 matres lectionis/some independent vowels, 18 vowel-signs/3 diacritics, A vowel-base ᩋ, 5 visually-encoded letters, 5 prescripts, 2 circumgraphs, 29 composite vowels, 4 vocalics",
clusters:"", medials:"", finals:"",
clusters:"visible virama, virama-based conjuncts, stacking, conjoining, ligation, touching, ra special",
medials:"", finals:"6 marks, ordinary letters",
pre-base letters
*/



// regions:
// nam (Northern America), sam (South America), cam (Central America), carib (Caribbean)
// eur (Europe - includes Russia to Urals and Georgia, but not Armenia or Azerbaijan)
// easia (East Asia - includes China, Mongolia, Japan, Korea)
// nasia (Northern Asia - Russia east of Urals)
// seasia (Southeast Asia - including Indonesia, Philippines
// casia (Central Asia - north of Iran, S of Russia, W of China)
// wasia (Western Asia - includes Armenian, Azerbaijan, Turkey, & middle east)
// afr (Africa)
// oce (Oceania - includes Australia, NZ, and Pacific Islands)

// Notes
// kl: CLDR adds, bletter:"áâãéêíîôúûæøåÁÂÃÉÊÍÎÔÚÛÆØÅĩĸũĨŨ",mark:"\u{0301 0302 0303 030A}" but i don't see any in use
// aux field holds things you would find but not often, and is determined by my research rather than simply from CLDR's auxiliary field



var langscjk = {
"zro": { name:"Záparo (Sápara, Zápara)", source:"udhr_zro", region:"sam", countries:"Ecuador", script:"latn", speakers:"350", bletter:"ñÑ", bmark:"̃", notes:`Ethnologue regards this language as unwritten (and almost extinct).`},
}
