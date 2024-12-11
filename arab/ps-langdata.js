// this should always be updated when app-charuse/langs.js is updated

    const Y = true
    const N = false
    const P = 'partial'
    const U = '?'


var langs = {

"pbt": { name:"Southern Pashto (Pushtu, Pushto)", local:"پښتو", localtrans:"Pax̌tó", silcode:"pus",
source:"r12a", 
region:"casia", countries:"Afghanistan", script:"arab", speakers:"~50000000", 
letter:"آئابتثجحخدذرزسشصضطظعغفقلمنهويټپځڅچډړږژښکگڼیۍې", letteraux:"", mark:"َُِٙ", markaux:"͏ًٓٔ", number:"۰۱۲۳۴۵۶۷۸۹", punctuation:"«»،؛؟٪٬‘’“”…", other:"\u061C\u200C\u200D\u200E\u200F\u202A\u202B\u202C\u2066\u2067\u2068\u2069", 
orth:`[Arabic] Characters typically used in Afghanistan. <a href='../scripts/arab/ps.html' target='_blank'>Details</a>. `,
related:`ps is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Southern Pashto [pbt]<br/>Northern Pashto [pbu]<br/>Central Pashto [pst].
Legacy applications often use ps rather than [pbu].
`,
type:"abjad", cs:"no", gpos:"yes", gsub:"yes", cursive:"yes", wordsep:"space", baseline:"mid", wrap:"word", hyphenation:"?",  direction:"rtl",  justification:"?", 
vowels:"ml:y hcm:y", 
linked:"arab/ps", fonts:"arab-ps", font:"Scheherazade", 
},

"pbu": { name:"Northern Pashto (Pushtu, Pushto)", local:"پښتو", localtrans:"Pax̌tó", silcode:"pbu",  rtl:true,
source:"r12a,cldr_ps", 
region:"casia", countries:"Pakistan, Afghanistan, UAE", script:"arab", speakers:"20850900", 
letter:"آئابتثجحخدذرزسشصضطظعغفقلمنهويټپځڅچډړږژښکګڼۀیۍېے", letteraux:"ە", mark:"َُِٙ", markaux:"͏ًٓٔ", number:"۰۱۲۳۴۵۶۷۸۹", punctuation:"«»،؛؟٪٬‘’“”…", other:"\u061C\u200C\u200D\u200E\u200F\u202A\u202B\u202C\u2066\u2067\u2068\u2069", 
orth:`[Arabic]  &nbsp; Characters typically used in the Peshawar region. Primary usage is naskh style, but nastaliq ([Aran]) also used. <a href='../scripts/arab/ps.html' target='_blank'>Details</a>. `,
related:`ps is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Southern Pashto [pbt]<br/>Northern Pashto [pbu]<br/>Central Pashto [pst].
Legacy applications often use ps rather than [pbu].
`,
type:"abjad", cs:"no", gpos:"yes", gsub:"yes", cursive:"yes", wordsep:"space", baseline:"mid", wrap:"word", hyphenation:"?",  direction:"rtl",  justification:"?", 
vowels:"ml:y hcm:y", 
linked:"arab/ps", fonts:"arab-ps", font:"Scheherazade", 
},



"ps": { name:"Pashto (Pushtu, Pushto)", local:"پښتو", localtrans:"Pax̌tó", silcode:"pus", redirect:true, 
source:"r12a", 
region:"casia", countries:"Afghanistan, Pakistan", script:"macrolanguage", speakers:"~50000000", 
letter:"آئابتثجحخدذرزسشصضطظعغفقلمنهويټپځڅچډړږژښکګگڼۀیۍېے", letteraux:"كںە", mark:"͏ً", markaux:"َُِٓٔٙ", number:"۰۱۲۳۴۵۶۷۸۹", punctuation:"«»،؛؟٪٬‘’“”…", symbol:"", other:"\u{061C}\u{200C}\u{200D}\u{200E}\u{200F}\u{2066}\u{2067}\u{2068}\u{2069}", otheraux:"\u{202A}\u{202B}\u{202C}", aux:"[]ـ۔​‑–—‹›⁠﴾﴿", 
orth:`[Arabic] This entry reflects characters recommended by both Afghan and Peshawar authorities. There exist a small number of regional differences. <a href='../scripts/arab/ps.html' target='_blank'>Details</a>. `,
related:`ps is a macrolanguage that encompasses the following more specific primary language subtags:<br/>Southern Pashto [pbt]<br/>Northern Pashto [pbu]<br/>Central Pashto [pst].
Legacy applications often use ps rather than [pbu].
`,
linked:"arab/ps", picker:"", font:"Scheherazade", 
},


"arab": {name:"Arabic", region:"wasia", type:"abjad", 
blocks:7, chars:449, bletter:276, bmark:118, bnumber:20, bpunctuation:0, bsymbol:11, bother:11, 
direction:"rtl", rtlnumbers:N,
voweltype: { inherent:0, letters:Y, marks:Y, hidden:Y, visorder:N, vocalics:N, ivowels:N, vbase:"alef ا", vcomposite:Y, prebase:N, circum:N, },
case:N, cursive:Y, mcchars:"m", conjuncts:Y, ligs:Y, 
medials:"", finals:"",
clusters:{ ligation:N, stacks:N, touch:N, conjoined:N, subjoinedcp:N, visviram:N, diacritic:Y, killer:""},
wordsep:"space",
linebreak:"word", hyphen:N, justification:"sp str sw", spacing:"base", gc:Y, baseline:"romn", 
},




}