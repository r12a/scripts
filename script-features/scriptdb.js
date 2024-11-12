const y = true
const n = false
const p = 'partial'


var langs = {


"adlm": { name:"Adlam", local:"𞤀𞤣𞤤𞤢𞤥", localtrans:"", 
region:"afr", countries:"Senegal, etc.", script:"adlm", speakers:"113000", 
blocks: 1, chars: 88, letter:69, mark:7, number:10, punctuation:2, symbol:0, other:0, 
direction:"rtl", rtlnumbers:y,
type:"alpha", 
voweltype: { inherent: 0, letters:y, marks:y, hidden:n, visorder:n, vocalics:n, vbase:"", prebase:n, circum:n },
cs: "yes", cursive: y, gsub: "m", gpos: "m", 
medials:"", finals:"",
clusters: { conjuncts:n, stacks:n, touch:n, conjoined:n, subjoinedcp:n, visviram:n, diacritic:y, killer:y }, 
wordsep:"space",
linebreak:"word", hyphen:"no", justification:"sp", spacing:"",
baseline: "romn",
},



"arab": { name:"Arabic [arb]", local:"العربية", localtrans:"", 
region:"wasia", countries:"Syria, Iraq, Gulf States, Egypt, North Africa, etc", script:"arab", speakers:"?", 
blocks:7, chars:449, letter:276, mark:118, number:20, punctuation:13, symbol:11, other:11, 
direction: "rtl", rtlnumbers:false,
type:"abjad", 
voweltype: { inherent:0, letters:true, marks:true, hidden:true, visorder:false, vocalics:false, vbase:"", prebase:false, circum:false },
cs: "no", cursive:true, gpos:"m", gsub:"h", 
medials:"", finals:"",
clusters: { conjuncts:false, stacks:false, touch:false, conjoined:false, subjoinedcp:false, visviram:false, diacritic:false, killer:"" },
wordsep: "space",
linebreak:"word", hyphen:"no", justification:"sp|str", spacing:"base",
baseline: "romn",
},




"armn": { name:"Armenian", local:"Հայոց գրեր", localtrans:"", 
region:"eur", countries:"Armenia, etc", script:"armn", speakers:"?", 
blocks:1, chars:91, letter:80, mark:0, number:0, punctuation:8, symbol:3, other:0, 
direction: "ltr", rtlnumbers:false,
type:"alpha", 
voweltype: { inherent:0, letters:true, marks:false, hidden:false, visorder:false, vocalics:false, vbase:"", prebase:false, circum:false },
cs: "yes", cursive:false, gpos:"l", gsub:"n", 
medials:"", finals:"",
clusters: { conjuncts:false, stacks:false, touch:false, conjoined:false, subjoinedcp:false, visviram:false, diacritic:false, killer:"" },
wordsep: "space",
linebreak:"word", hyphen:"yes ֊", justification:"sp", spacing:"?",
baseline: "romn",
},



"armi": { name:"Aramaic, Imperial", local:"", localtrans:"", 
region:"wasia", countries:"Iran", script:"armi", speakers:"?", 
blocks:1, chars:31, letter:22, mark:7, number:8, punctuation:1, symbol:0, other:0, 
direction: "rtl", rtlnumbers:false,
type:"abjad", 
voweltype: { inherent:0, letters:false, marks:false, hidden:false, visorder:false, vocalics:false, vbase:"", prebase:false, circum:false },
cs: "no", cursive:false, gpos:"n", gsub:"n", 
medials:"", finals:"",
clusters: { conjuncts:false, stacks:false, touch:false, conjoined:false, subjoinedcp:false, visviram:false, diacritic:false, killer:"" },
wordsep: "space|no",
linebreak:"?", hyphen:"?", justification:"?", spacing:"?",
baseline: "romn",
},



"avst": { name:"Avestan", local:"", localtrans:"", 
region:"wasia", countries:"Iran", script:"avst", speakers:"?", 
blocks:1, chars:61, letter:54, mark:0, number:0, punctuation:7, symbol:0, other:0, 
direction: "rtl", rtlnumbers:false,
type:"alpha", 
voweltype: { inherent:0, letters:true, marks:false, hidden:false, visorder:false, vocalics:false, vbase:"", prebase:false, circum:false },
cs: "no", cursive:false, gpos:"n", gsub:"n", 
medials:"", finals:"",
clusters: { conjuncts:false, stacks:false, touch:false, conjoined:false, subjoinedcp:false, visviram:false, diacritic:false, killer:"" },
wordsep: "·",
linebreak:"?", hyphen:"?", justification:"?", spacing:"?",
baseline: "romn",
},



"ahom": { name:"Ahom", local:"", localtrans:"", 
region:"seasia", countries:"Myanmar?", script:"ahom", speakers:"?", 
blocks:1, chars:65, letter:34, mark:15, number:12, punctuation:3, symbol:1, other:0, 
direction: "ltr", rtlnumbers:false,
type:"abug", 
voweltype: { inherent:0, letters:false, marks:true, hidden:false, visorder:false, vocalics:false, vbase:"A", prebase:true, circum:false },
cs: "no", cursive:false, gpos:"m", gsub:"m", 
medials:"cm", finals:"",
clusters: { conjuncts:false, stacks:false, touch:false, conjoined:false, subjoinedcp:false, visviram:false, diacritic:false, killer:"v" },
wordsep: "space",
linebreak:"word", hyphen:"?", justification:"?", spacing:"?",
baseline: "romn",
},



"bamu": { name:"Bamum", local:"", localtrans:"", 
region:"afr", countries:"Senegal, etc", script:"adlm", speakers:"?", 
blocks:1, chars:88, letter:70, mark:2, number:10, punctuation:6, symbol:0, other:569, 
direction: "ltr", rtlnumbers:false,
type:"syll", 
voweltype: { inherent:0, letters:false, marks:false, hidden:false, visorder:false, vocalics:false, vbase:"", prebase:false, circum:false },
cs: "no", cursive:false, gpos:"l", gsub:"n", 
medials:"", finals:"",
clusters: { conjuncts:false, stacks:false, touch:false, conjoined:false, subjoinedcp:false, visviram:false, diacritic:false, killer:"" },
wordsep: "space",
linebreak:"word", hyphen:"?", justification:"sp", spacing:"?",
baseline: "romn",
},



"bali": { name:"Balinese", local:"", localtrans:"", 
region:"oce", countries:"Indonesia", script:"bali", speakers:"?", 
blocks:1, chars:127, letter:55, mark:31, number:10, punctuation:12, symbol:19, other:0, 
direction: "ltr", rtlnumbers:false,
type:"abug", 
voweltype: { inherent:1, letters:true, marks:true, hidden:false, visorder:false, vocalics:true, vbase:"HA", prebase:true, circum:true },
cs: "no", cursive:false, gpos:"m", gsub:"m", 
medials:"", finals:"cm",
clusters: { conjuncts:true, stacks:true, touch:false, conjoined:true, subjoinedcp:false, visviram:true, diacritic:false, killer:"v" },
wordsep: "no|zwsp",
linebreak:"syllable", hyphen:"yes ᭠", justification:"?", spacing:"?",
baseline: "romn",
},



"hluw": { name:"Anatolian hieroglyphs", local:"", localtrans:"", 
region:"wasia", countries:"Turkey", script:"hluw", speakers:"?", 
blocks:1, chars:583, letter:583, mark:0, number:0, punctuation:0, symbol:0, other:0, 
direction: "bs", rtlnumbers:false,
type:"syll", 
voweltype: { inherent:0, letters:true, marks:false, hidden:false, visorder:false, vocalics:false, vbase:"", prebase:false, circum:false },
cs: "no", cursive:false, gpos:"n", gsub:"n", 
medials:"", finals:"",
clusters: { conjuncts:false, stacks:false, touch:false, conjoined:false, subjoinedcp:false, visviram:false, diacritic:false, killer:"" },
wordsep: "?",
linebreak:"?", hyphen:"n/a", justification:"?", spacing:"?",
baseline:"romn",
},



"laoo": { name:"Lao", local:"ອັກສອນລາວ", lang:"lo", localtrans:"ʔáksɔ̌ːn láːw", 
region:"seasia", countries:"Laos", script:"laoo", speakers:"?", 
blocks:1, chars:83, letter:56, mark:17, number:10, punctuation:0, symbol:0, other:0, 
direction: "ltr", rtlnumbers:n,
type:"alpha", 
voweltype: { inherent:0, letters:y, marks:y, hidden:n, visorder:y, vocalics:n, vbase:"ʔ", prebase:y, circum:n },
cs: "no", cursive:n, gpos:"m", gsub:"l", 
medials:"", finals:"",
clusters: { conjuncts:n, stacks:n, touch:n, conjoined:n, subjoinedcp:n, visviram:n, diacritic:n, killer:"" },
wordsep: "no",
linebreak:"word", hyphen:"no", justification:"?", spacing:"?",
baseline: "romn",
},



"tayo": { name:"Tai Yo", local:"", localtrans:"", 
region:"seasia", countries:"Vietnam", script:"tayo", speakers:"?", 
blocks:1, chars:54, letter:48, mark:5, number:0, punctuation:0, symbol:0, other:0, 
direction: "tbrl", rtlnumbers:false,
type:"abug", 
voweltype: { inherent:1, letters:true, marks:true, hidden:false, visorder:false, vocalics:false, vbase:"QO", prebase:false, circum:false },
cs: "no", cursive:false, gpos:"l", gsub:"n", 
medials:"cm", finals:"",
clusters: { conjuncts:false, stacks:false, touch:false, conjoined:false, subjoinedcp:false, visviram:false, diacritic:false, killer:"" },
wordsep: "space",
linebreak:"word", hyphen:"no", justification:"?", spacing:"?",
baseline: "cntr",
},



"thai": { name:"Thai", local:"อักษรไทย", localtrans:"", 
region:"seasia", countries:"Thailand", script:"thai", speakers:"?", 
blocks:1, chars:87, letter:57, mark:16, number:10, punctuation:3, symbol:1, other:0, 
direction: "ltr", rtlnumbers:n,
type:"abug", 
voweltype: { inherent:3, letters:y, marks:y, hidden:n, visorder:y, vocalics:y, vbase:"O", prebase:n, circum:n },
cs: "no", cursive:n, gpos:"l", gsub:"n", 
medials:"", finals:"",
clusters: { conjuncts:n, stacks:n, touch:n, conjoined:n, subjoinedcp:n, visviram:n, diacritic:n, killer:"" },
wordsep: "no",
linebreak:"word", hyphen:"?", justification:"?", spacing:"?",
baseline: "romn",
},



"xxxx": { name:"Adlam", local:"", localtrans:"", 
region:"nam|sam|cam|carib|eur|easia|nasia|seasia|casia|wasia|afr|oce", countries:"Senegal, etc", script:"adlm", speakers:"?", 
blocks:1, chars:88, letter:69, mark:7, number:10, punctuation:2, symbol:0, other:0, 
direction: "ltr|rtl|tbrl|tblr|bt|bs", rtlnumbers:false,
type:"alpha|abug|syll|ideo|abjad", 
voweltype: { inherent:0, letters:true, marks:false, hidden:false, visorder:false, vocalics:false, vbase:"", prebase:false, circum:false },
cs: "no|yes|partial", cursive:false, gpos:"l|m|h|n", gsub:"l|m|h|n", 
medials:"cm|sj|let", finals:"cm|let|vk|ss",
clusters: { conjuncts:false, stacks:false, touch:false, conjoined:false, subjoinedcp:false, visviram:false, diacritic:false, killer:"v|i|k" },
wordsep: "space|<wordspace>|no|zwsp|syllable|sb",
linebreak:"word|syllable|char", hyphen:"yes<char>|(yes)<char>|yes ∅|no|n/a", justification:"sp|ic|ig|str|sw|pad|none", spacing:"sp|base",
baseline: "romn|hang|ideo|cntr",
},



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
