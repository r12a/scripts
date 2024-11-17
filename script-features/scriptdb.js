const Y = true
const N = false
const P = 'partial'
const U = '?'


var langs = {


"adlm": { name:"Adlam", region:"afr",
blocks: 1, chars: 88, letter:69, mark:7, number:10, punctuation:2, symbol:0, other:0, 
direction:"rtl", rtlnumbers:Y,
type:"alpha", 
voweltype: { inherent: 0, letters:Y, marks:Y, hidden:N, visorder:N, vocalics:N, vbase:"", prebase:N, circum:N },
case:Y, cursive: Y, gsub: "m", gpos: "m", 
medials:"", finals:"",
clusters: { conjuncts:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:Y, killer:"" }, 
wordsep:"space",
linebreak:"word", hyphen:"no", justification:"sp", spacing:U,
baseline: "romn",
},



"arab": { name:"Arabic [arb]", region:"wasia",
blocks:7, chars:449, letter:276, mark:118, number:20, punctuation:13, symbol:11, other:11, 
direction: "rtl", rtlnumbers:N,
type:"abjad", 
voweltype: { inherent:0, letters:Y, marks:Y, hidden:Y, visorder:N, vocalics:N, vbase:"", prebase:N, circum:N },
case:N, cursive:Y, gpos:"m", gsub:"h", 
medials:"", finals:"",
clusters: { conjuncts:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:"" },
wordsep: "space",
linebreak:"word", hyphen:"no", justification:"sp str", spacing:"base",
baseline: "romn",
},




"araba": { name:"Arabic [ajami]", region:"wasia",
blocks:7, chars:449, letter:276, mark:118, number:20, punctuation:13, symbol:11, other:11, 
direction: "rtl", rtlnumbers:N,
type:"alpha", 
voweltype: { inherent:0, letters:Y, marks:Y, hidden:N, visorder:N, vocalics:N, vbase:"", prebase:N, circum:N },
case:N, cursive:Y, gpos:"m", gsub:"h", 
medials:"", finals:"",
clusters: { conjuncts:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:Y, killer:"" },
wordsep: "space",
linebreak:"word", hyphen:"no", justification:"sp str", spacing:"base",
baseline: "romn",
},




"arabu": { name:"Arabic [uig]", region:"wasia",
blocks:7, chars:449, letter:276, mark:118, number:20, punctuation:13, symbol:11, other:11, 
direction: "rtl", rtlnumbers:N,
type:"alpha", 
voweltype: { inherent:0, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, vbase:"", prebase:N, circum:N },
case:N, cursive:Y, gpos:"m", gsub:"h", 
medials:"", finals:"",
clusters: { conjuncts:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:Y, killer:"" },
wordsep: "space",
linebreak:"word", hyphen:"yes", justification:"sp str", spacing:"base",
baseline: "romn",
},




"armn": { name:"Armenian", region:"eur",
blocks:1, chars:91, letter:80, mark:0, number:0, punctuation:8, symbol:3, other:0, 
direction: "ltr", rtlnumbers:N,
type:"alpha", 
voweltype: { inherent:0, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, vbase:"", prebase:N, circum:N },
case:Y, cursive:N, gpos:"l", gsub:"n", 
medials:"", finals:"",
clusters: { conjuncts:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:"" },
wordsep: "space",
linebreak:"word", hyphen:"yes ֊", justification:"sp", spacing:U,
baseline: "romn",
},



"armi": { name:"Aramaic, Imperial", region:"wasia",
blocks:1, chars:31, letter:22, mark:7, number:8, punctuation:1, symbol:0, other:0, 
direction: "rtl", rtlnumbers:N,
type:"abjad", 
voweltype: { inherent:0, letters:N, marks:N, hidden:N, visorder:N, vocalics:N, vbase:"", prebase:N, circum:N },
case:N, cursive:N, gpos:"n", gsub:"n", 
medials:"", finals:"",
clusters: { conjuncts:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:"" },
wordsep: "space none",
linebreak:U, hyphen:"yes", justification:U, spacing:U,
baseline: "romn",
},



"avst": { name:"Avestan", region:"wasia",
blocks:1, chars:61, letter:54, mark:0, number:0, punctuation:7, symbol:0, other:0, 
direction: "rtl", rtlnumbers:N,
type:"alpha", 
voweltype: { inherent:0, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, vbase:"", prebase:N, circum:N },
case:N, cursive:N, gpos:"n", gsub:"n", 
medials:"", finals:"",
clusters: { conjuncts:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:"" },
wordsep: "ws ·",
linebreak:U, hyphen:U, justification:U, spacing:U,
baseline: "romn",
},



"ahom": { name:"Ahom", region:"seasia",
blocks:1, chars:65, letter:34, mark:15, number:12, punctuation:3, symbol:1, other:0, 
direction: "ltr", rtlnumbers:N,
type:"abug", 
voweltype: { inherent:0, letters:N, marks:Y, hidden:N, visorder:N, vocalics:N, vbase:"A", prebase:Y, circum:N },
case:N, cursive:N, gpos:"m", gsub:"m", 
medials:"cm", finals:"",
clusters: { conjuncts:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:"v" },
wordsep: "space",
linebreak:"word", hyphen:U, justification:U, spacing:U,
baseline: "romn",
},



"bali": { name:"Balinese",
region:"oce", script:"bali", 
blocks:1, chars:127, letter:55, mark:31, number:10, punctuation:12, symbol:19, other:0, 
direction: "ltr", rtlnumbers:N,
type:"abug", 
voweltype: { inherent:1, letters:Y, marks:Y, hidden:N, visorder:N, vocalics:Y, vbase:"HA", prebase:Y, circum:Y },
case:N, cursive:N, gpos:"m", gsub:"m", 
medials:"", finals:"cm",
clusters: { conjuncts:Y, stacks:Y, touch:N, conjoined:Y, subjoinedcp:N, visviram:Y, diacritic:N, killer:"v" },
wordsep: "no zwsp",
linebreak:"syllable", hyphen:"yes ᭠", justification:U, spacing:U,
baseline: "romn",
},



"bamu": { name:"Bamum", region:"afr",
blocks:1, chars:88, letter:70, mark:2, number:10, punctuation:6, symbol:0, other:569, 
direction: "ltr", rtlnumbers:N,
type:"syll", 
voweltype: { inherent:0, letters:N, marks:N, hidden:N, visorder:N, vocalics:N, vbase:"", prebase:N, circum:N },
case:N, cursive:N, gpos:"l", gsub:"n", 
medials:"", finals:"",
clusters: { conjuncts:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:"" },
wordsep: "space",
linebreak:"word", hyphen:U, justification:"sp", spacing:U,
baseline: "romn",
},



"hluw": { name:"Anatolian hieroglyphs", local:"", localtrans:"", 
region:"wasia", countries:"Turkey", script:"hluw", speakers:U, 
blocks:1, chars:583, letter:583, mark:0, number:0, punctuation:0, symbol:0, other:0, 
direction: "bs", rtlnumbers:N,
type:"syll", 
voweltype: { inherent:0, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, vbase:"", prebase:N, circum:N },
case:N, cursive:N, gpos:"n", gsub:"n", 
medials:"", finals:"",
clusters: { conjuncts:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:"" },
wordsep: U,
linebreak:U, hyphen:"n/a", justification:U, spacing:U,
baseline:"romn",
},



"laoo": { name:"Lao", region:"seasia",
blocks:1, chars:83, letter:56, mark:17, number:10, punctuation:0, symbol:0, other:0, 
direction: "ltr", rtlnumbers:N,
type:"alpha", 
voweltype: { inherent:0, letters:Y, marks:Y, hidden:N, visorder:Y, vocalics:N, vbase:"O", prebase:Y, circum:N },
case:N, cursive:N, gpos:"m", gsub:"l", 
medials:"", finals:"",
clusters: { conjuncts:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:"" },
wordsep: "no",
linebreak:"word", hyphen:"no", justification:U, spacing:U,
baseline: "romn",
},



"tayo": { name:"Tai Yo", region:"seasia",
blocks:1, chars:54, letter:48, mark:5, number:0, punctuation:0, symbol:0, other:0, 
direction: "tbrl", rtlnumbers:N,
type:"abug", 
voweltype: { inherent:1, letters:Y, marks:Y, hidden:N, visorder:N, vocalics:N, vbase:"QO", prebase:N, circum:N },
case:N, cursive:N, gpos:"l", gsub:"n", 
medials:"cm", finals:"",
clusters: { conjuncts:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:"" },
wordsep: "space",
linebreak:"word", hyphen:"no", justification:U, spacing:U,
baseline: "cntr",
},



"thai": { name:"Thai", region:"seasia",
blocks:1, chars:87, letter:57, mark:16, number:10, punctuation:3, symbol:1, other:0, 
direction: "ltr", rtlnumSbers:N,
type:"abug", 
voweltype: { inherent:3, letters:Y, marks:Y, hidden:N, visorder:Y, vocalicase:Y, vbase:"O", prebase:N, circum:N },
cs: "no", cursive:N, gpos:"l", gsub:"n", 
medials:"", finals:"",
clusters: { conjuncts:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:"" },
wordsep: "no",
linebreak:"word", hyphen:U, justification:U, spacing:U,
baseline: "romn",
},



"tols": { name:"Tolong Siki", region:"sasia",
blocks:1, chars:88, letter:69, mark:7, number:10, punctuation:2, symbol:0, other:0, 
direction: "ltr", rtlnumbers:N,
type:"alpha", 
voweltype: { inherent:0, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, vbase:"", prebase:N, circum:N },
cs: N, cursive:N, gpos:"l", gsub:"n", 
medials:"cm", finals:"cm",
clusters: { conjuncts:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:"" },
wordsep: "space",
linebreak:"word", hyphen:U, justification:U, spacing:U,
baseline: "romn",
},



"bass": { name:"Bassa Vah", region:"afr", 
blocks:1, chars:36, letter:30, mark:5, number:0, punctuation:1, symbol:0, other:0, 
direction: "ltr", rtlnumbers:N,
type:"alpha", 
voweltype: { inherent:0, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, vbase:"", prebase:N, circum:N },
case: N, cursive:N, gpos:"m", gsub:"l", 
medials:"", finals:"let",
clusters: { conjuncts:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:"" },
wordsep: "space",
linebreak:U, hyphen:U, justification:U, spacing:U,
baseline: "romn",
},



"beng": { name:"Bengali", region:"sasia", 
blocks:1, chars:96, letter:55, mark:20, number:16, punctuation:1, symbol:4, other:0, 
direction: "ltr", rtlnumbers:N,
type:"abug", 
voweltype: { inherent:2, letters:N, marks:Y, hidden:N, visorder:N, vocalics:N, vbase:"", prebase:Y, circum:Y },
case: N, cursive:N, gpos:"m", gsub:"m", 
medials:"cm let", finals:"cm let",
clusters: { conjuncts:Y, stacks:Y, touch:N, conjoined:Y, subjoinedcp:N, visviram:N, diacritic:N, killer:"v" },
wordsep: "space",
linebreak:"word", hyphen:"(yes) -", justification:"sp", spacing:U,
baseline: "hang",
},



"bugi": { name:"Buginese", region:"oce", 
blocks:1, chars:30, letter:23, mark:5, number:0, punctuation:2, symbol:0, other:0, 
direction: "ltr", rtlnumbers:N,
type:"abug", 
voweltype: { inherent:1, letters:N, marks:Y, hidden:N, visorder:N, vocalics:N, vbase:"", prebase:Y, circum:N },
case: N, cursive:N, gpos:"l", gsub:"l", 
medials:"", finals:"",
clusters: { conjuncts:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:"" },
wordsep: "space",
linebreak:"word", hyphen:"no", justification:"?", spacing:"?",
baseline: "romn",
},



"cans": { name:"Canadian Aboriginal Syllabics", region:"nam", 
blocks:3, chars:726, letter:723, mark:0, number:0, punctuation:2, symbol:1, other:0, 
direction: "ltr", rtlnumbers:N,
type:"syll", 
voweltype: { inherent:0, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, vbase:"", prebase:N, circum:N },
case: N, cursive:N, gpos:"l", gsub:"l", 
medials:"", finals:"ss",
clusters: { conjuncts:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:"" },
wordsep: "space",
linebreak:"word", hyphen:"yes -", justification:"sp", spacing:"?",
baseline: "romn",
},



"cher": { name:"Cherokee", region:"nam", 
blocks:2, chars:172, letter:172, mark:0, number:0, punctuation:0, symbol:0, other:0, 
direction: "ltr", rtlnumbers:N,
type:"syll", 
voweltype: { inherent:0, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, vbase:"", prebase:N, circum:N },
case:Y, cursive:N, gpos:"n", gsub:"n", 
medials:"", finals:"",
clusters: { conjuncts:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:"" },
wordsep: "space",
linebreak:"word", hyphen:"?", justification:"sp", spacing:"?",
baseline: "romn",
},



"cyrl": { name:"Cyrillic", region:"eur", 
blocks:6, chars:506, letter:447, mark:56, number:0, punctuation:2, symbol:1, other:0, 
direction: "ltr", rtlnumbers:N,
type:"alpha", 
voweltype: { inherent:0, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, vbase:"", prebase:N, circum:N },
case:Y, cursive:N, gpos:"l", gsub:"l", 
medials:"", finals:"",
clusters: { conjuncts:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:"" },
wordsep: "space",
linebreak:"word", hyphen:"yes -", justification:"sp", spacing:"?",
baseline: "romn",
},



"deva": { name:"Devanagari", region:"sasia", 
blocks:3, chars:170, letter:90, mark:53, number:10, punctuation:17, symbol:0, other:0, 
direction: "ltr", rtlnumbers:N,
type:"abug", 
voweltype: { inherent:1, letters:Y, marks:Y, hidden:N, visorder:N, vocalics:Y, vbase:"", prebase:Y, circum:N },
case:N, cursive:N, gpos:"m", gsub:"m", 
medials:"", finals:"cm",
clusters: { conjuncts:Y, stacks:Y, touch:N, conjoined:Y, subjoinedcp:N, visviram:N, diacritic:N, ligation:Y, killer:"v" },
wordsep: "space",
linebreak:"word", hyphen:"yes -", justification:"sp", spacing:"sp",
baseline: "hang",
},



"ethi": { name:"Ethiopic", region:"afr", 
blocks:5, chars:523, letter:481, mark:3, number:20, punctuation:9, symbol:10, other:0, 
direction: "ltr", rtlnumbers:N,
type:"feat", 
voweltype: { inherent:0, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, vbase:"", prebase:N, circum:N },
case:N, cursive:N, gpos:"n", gsub:"n", 
medials:"", finals:"",
clusters: { conjuncts:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:"" },
wordsep: "space ws ፡",
linebreak:"word", hyphen:"?", justification:"sp", spacing:"?",
baseline: "romn",
},



"geor": { name:"Georgian", region:"eur", 
blocks:3, chars:174, letter:173, mark:0, number:0, punctuation:1, symbol:0, other:0, 
direction: "ltr", rtlnumbers:N,
type:"alpha", 
voweltype: { inherent:0, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, vbase:"", prebase:N, circum:N },
case:"allcaps", cursive:N, gpos:"l", gsub:"l", 
medials:"", finals:"",
clusters: { conjuncts:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:"" },
wordsep: "space",
linebreak:"word", hyphen:"yes -", justification:"sp", spacing:"sp",
baseline: "romn",
},



"grek": { name:"Greek", region:"eur", 
blocks:3, chars:417, letter:318, mark:0, number:59, punctuation:2, symbol:38, other:0, 
direction: "ltr", rtlnumbers:N,
type:"alpha", 
voweltype: { inherent:0, letters:Y, marks:"(✓)", hidden:N, visorder:N, vocalics:N, vbase:"", prebase:N, circum:N },
case:Y, cursive:N, gpos:"l", gsub:"n", 
medials:"", finals:"",
clusters: { conjuncts:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:"" },
wordsep: "space",
linebreak:"word", hyphen:"yes -", justification:"sp", spacing:"?",
baseline: "romn",
},



"gujr": { name:"Gujarati", region:"sasia", 
blocks:1, chars:91, letter:53, mark:26, number:10, punctuation:1, symbol:1, other:0, 
direction: "ltr", rtlnumbers:N,
type:"abug", 
voweltype: { inherent:1, letters:Y, marks:Y, hidden:N, visorder:N, vocalics:Y, vbase:"", prebase:Y, circum:N },
case:N, cursive:N, gpos:"m", gsub:"m", 
medials:"", finals:"cm",
clusters: { conjuncts:Y, stacks:Y, touch:Y, conjoined:Y, subjoinedcp:N, visviram:N, diacritic:N, killer:"v" },
wordsep: "space",
linebreak:"word", hyphen:"?", justification:"sp", spacing:"?",
baseline: "hang",
},



"guru": { name:"Gurmukhi", region:"sasia", 
blocks:1, chars:80, letter:51, mark:18, number:10, punctuation:1, symbol:0, other:0, 
direction: "ltr", rtlnumbers:N,
type:"abug", 
voweltype: { inherent:1, letters:Y, marks:Y, hidden:N, visorder:N, vocalics:N, vbase:"", prebase:Y, circum:N },
case:N, cursive:N, gpos:"m", gsub:"m", 
medials:"", finals:"cm",
clusters: { conjuncts:N, stacks:Y, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:"v" },
wordsep: "space",
linebreak:"word", hyphen:"?", justification:"sp", spacing:"?",
baseline: "hang",
},



"hang": { name:"Hangul", region:"easia", 
blocks:5, chars:11635, letter:11635, mark:0, number:0, punctuation:0, symbol:0, other:0, 
direction: "ltr tbrl", rtlnumbers:N,
type:"feat", 
voweltype: { inherent:0, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, vbase:"", prebase:N, circum:N },
case:N, cursive:N, gpos:"n", gsub:"n", 
medials:"", finals:"",
clusters: { conjuncts:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:"" },
wordsep: "space",
linebreak:"char word", hyphen:"no", justification:"sp", spacing:"?",
baseline: "ideo",
},



"hani": { name:"Han", region:"easia", 
blocks:17, chars:99110, letter:98706, mark:3, number:4, punctuation:1, symbol:396, other:0, 
direction: "ltr tbrl", rtlnumbers:N,
type:"ideo", 
voweltype: { inherent:0, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, vbase:"", prebase:N, circum:N },
case:N, cursive:N, gpos:"n", gsub:"n", 
medials:"", finals:"",
clusters: { conjuncts:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:"" },
wordsep: "no",
linebreak:"char", hyphen:"no", justification:"ic", spacing:"",
baseline: "ideo",
},



"hebr": { name:"Hebrew", region:"wasia", 
blocks:2, chars:134, letter:75, mark:52, number:0, punctuation:6, symbol:1, other:0, 
direction: "rtl", rtlnumbers:N,
type:"abjad", 
voweltype: { inherent:0, letters:Y, marks:Y, hidden:Y, visorder:N, vocalics:N, vbase:"", prebase:N, circum:N },
case:N, cursive:N, gpos:"m", gsub:"l", 
medials:"", finals:"let",
clusters: { conjuncts:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:"" },
wordsep: "space",
linebreak:"word", hyphen:"?", justification:"sp", spacing:"sp",
baseline: "romn",
},



"krai": { name:"Kirat Rai", region:"sasia", 
blocks:1, chars:58, letter:45, mark:0, number:10, punctuation:3, symbol:0, other:0, 
direction: "ltr", rtlnumbers:N,
type:"abug", 
voweltype: { inherent:1, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, vbase:"A", prebase:N, circum:N },
case:N, cursive:N, gpos:"n", gsub:"n", 
medials:"", finals:"let",
clusters: { conjuncts:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:Y, diacritic:N, killer:"k" },
wordsep: "space",
linebreak:"word", hyphen:"?", justification:"sp", spacing:"?",
baseline: "romn",
},



"xxxx": { name:"Adlam", region:"nam sam cam carib eur sasia easia nasia seasia casia wasia afr oce", 
blocks:1, chars:88, letter:69, mark:7, number:10, punctuation:2, symbol:0, other:0, 
direction: "ltr rtl tbrl tblr bt bous", rtlnumbers:N,
type:"alpha abug syll ideo abjad", 
voweltype: { inherent:0, letters:Y, marks:N, hidden:N, visorder:N, vocalics:N, vbase:"", prebase:N, circum:N },
case:N, cursive:N, gpos:"l m h n", gsub:"l m h n", 
medials:"cm sj let", finals:"cm let vk ss",
clusters: { conjuncts:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:N, killer:"v i k" },
wordsep: "space ws x no zwsp syllable sb",
linebreak:"word syllable char", hyphen:"yes<char> (yes)<char> yes{∅} no n/a", justification:"sp ic ig str sw pad none", spacing:"sp base",
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
// kl: CLDR adds, letter:"áâãéêíîôúûæøåÁÂÃÉÊÍÎÔÚÛÆØÅĩĸũĨŨ",mark:"\u{0301 0302 0303 030A}" but i don't see any in use
// aux field holds things you would find but not often, and is determined by my research rather than simply from CLDR's auxiliary field



var langscjk = {
"zro": { name:"Záparo (Sápara, Zápara)", source:"udhr_zro", region:"sam", countries:"Ecuador", script:"latn", speakers:"350", letter:"ñÑ", mark:"̃", notes:`Ethnologue regards this language as unwritten (and almost extinct).`},
}
