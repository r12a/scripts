// this should always be updated when app-charuse/langs.js is updated

var langs = {

"hi": { name:"Hindi", local:" मानक हिन्दी‎ (Mānak Hindī), हिन्दी‎ (Hindī)", silcode:"hin", 
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

"ccp": { name:"Chakma", source:"cldr_ccp,udhr_ccp", region:"sasia", countries:"Bangladesh, India", script:"cakm", speakers:"330000", 
letter:"𑄃𑄄𑄅𑄆𑄇𑄈𑄉𑄊𑄋𑄌𑄍𑄎𑄏𑄐𑄑𑄒𑄓𑄔𑄕𑄖𑄗𑄘𑄙𑄚𑄛𑄜𑄝𑄞𑄟𑄠𑄡𑄢𑄣𑄤𑄥𑄦𑅇", letteraux:"𑅄", mark:"͏𑄀𑄁𑄂𑄧𑄨𑄩𑄪𑄫𑄬𑄭𑄮𑄯𑄰𑄱𑄲𑄳𑄴", markaux:"𑅅𑅆", number:"০১২৩৪৫৬৭৮৯𑄶𑄷𑄸𑄹𑄺𑄻𑄼𑄽𑄾𑄿", punctuation:"𑅀𑅁𑅂𑅃", symbol:"", other:"\u200C\u200D\u2060",	
local:"𑄌𑄋𑄴𑄟𑄳𑄦 𑄞𑄌𑄴", localtrans:"(changmha bhach)", notes:`UDHR uses Chakma digits, whereas CLDR shows only Bengali digits.`, 
orth:`[Chakma] &nbsp; `,
also:
['ccp-beng | beng | ',
'ccp-latn | latn | ']
},

"ccp": { name:"Chakma", local:"𑄌𑄋𑄴𑄟𑄳𑄦 𑄞𑄌𑄴", localtrans:"(changmha bhach)", 
source:"cldr_ccp,udhr_ccp", 
region:"sasia", countries:"Bangladesh, India", script:"cakm", speakers:"330000", 
letter:"𑄃𑄄𑄅𑄆𑄇𑄈𑄉𑄊𑄋𑄌𑄍𑄎𑄏𑄐𑄑𑄒𑄓𑄔𑄕𑄖𑄗𑄘𑄙𑄚𑄛𑄜𑄝𑄞𑄟𑄠𑄡𑄢𑄣𑄤𑄥𑄦𑅇", letteraux:"𑅄", mark:"͏𑄀𑄁𑄂𑄧𑄨𑄩𑄪𑄫𑄬𑄭𑄮𑄯𑄰𑄱𑄲𑄳𑄴", markaux:"𑅅𑅆", number:"০১২৩৪৫৬৭৮৯𑄶𑄷𑄸𑄹𑄺𑄻𑄼𑄽𑄾𑄿", punctuation:"𑅀𑅁𑅂𑅃", other:"‌‍⁠", 
orth:`[Chakma] &nbsp; `,
also:
["ccp-beng | beng | ",
"ccp-latn | latn | "],
notes:`UDHR uses Chakma digits, whereas CLDR shows only Bengali digits.`,
type:"abugida", cs:"no", gpos:"yes", gsub:"yes", cursive:"no", wordsep:"space", baseline:"mid", wrap:"word", hyphenation:"?",  direction:"ltr",  justification:"?", 
vowels:"inh:1 vs:12 ind:4 base:A pre:1 circ:2",  clusters:"vir stk cnj lig",  finals:"cm:2", 
linked:"cakm/ccp", fonts:"cakm-ccp", font:"Noto Sans Chakma", 
},

}