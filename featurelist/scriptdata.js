
var scriptData = [ 

{ script:"Adlam", language:"Pular", id:"fuf-adlm", type:"alpha", chars:88, cchars:7, cs:"yes", gpos:"yes", mcchars:"yes", matras: "no", gsub:"yes", cursive:"yes", dir:"rtl", wordsep:"space", baseline:"mid", wrap:"word", hyphenation:"?", justify:"?", digits:"yes", region:"Africa", linked:"adlam" },

//{ script:"Arabic", type:"abjad", chars:387, cchars:96, cs:"no", gpos:"yes", mcchars:"yes", matras: "no", gsub:"yes", cursive:"yes", dir:"rtl", wordsep:"space", baseline:"mid", wrap:"word", hyphenation:"no*", justify:"word/space", digits:"yes", region:"W Asia", linked:"arabic" },

{ script:"Arabic", language:"Arabic",  id:"arb", type:"abjad", chars:"71", letters:"36", cchars:12, cs:"no", gpos:"yes", mcchars:"yes", matras: "no", gsub:"yes", cursive:"yes", dir:"rtl", wordsep:"space", baseline:"mid", wrap:"word", hyphenation:"no", justify:"word/space", digits:"10", punctuation:"14", region:"W Asia", linked:"arabic" },

{ script:"Arabic", language:"Hausa",  id:"ha-arab", type:"abjad", chars:"71", letters:"36", cchars:12, cs:"no", gpos:"yes", mcchars:"yes", matras: "no", gsub:"yes", cursive:"yes", dir:"rtl", wordsep:"space", baseline:"mid", wrap:"word", hyphenation:"no", justify:"word/space", digits:"10", punctuation:"14", region:"Africa", linked:"arabic/hausa" },

{ script:"Armenian", language:"Armenian",  id:"hy", type:"alpha", chars:91, cchars:0, cs:"yes", gpos:"no", mcchars:"no", matras: "no", gsub:"no", cursive:"no", dir:"ltr", wordsep:"space", baseline:"mid", wrap:"word", hyphenation:"yes", justify:"space", digits:"no", region:"W Asia", linked:"armenian" },

{ script:"Balinese", language:"Balinese",  id:"ban-bali", type:"abugida", chars:121, cchars:31, cs:"no", gpos:"yes", mcchars:"yes", matras: "yes", gsub:"yes", cursive:"no", dir:"ltr", wordsep:"no", baseline:"mid", wrap:"syllable", hyphenation:"yes", justify:"none", digits:"yes", region:"Asia SE", linked:"balinese" },

//{ script:"Bassa Vah", language:"", type:"alpha", chars:36, cchars:5, cs:"no", gpos:"yes", mcchars:"no", matras: "no", gsub:"no", cursive:"no", dir:"ltr", wordsep:"no", baseline:"mid", wrap:"word/space", hyphenation:"?", justify:"?", digits:"no", region:"Africa", linked:"bassavah" },

{ script:"Bengali", language:"Bengali",  id:"bn", type:"abugida", chars:95, cchars:19, cs:"no", gpos:"yes", mcchars:"yes", matras: "yes", gsub:"yes", cursive:"no", dir:"ltr", wordsep:"space", baseline:"high", wrap:"word", hyphenation:"yes?", justify:"space", digits:"yes", region:"Asia S", linked:"bengali" },

{ script:"Buginese", language:"Buginese",  id:"bug-bugi", type:"abugida", chars:30, cchars:5, cs:"no", gpos:"yes", mcchars:"no", matras: "yes", gsub:"yes", cursive:"no", dir:"ltr", wordsep:"space", baseline:"mid", wrap:"syllable?", hyphenation:"no", justify:"?", digits:"no", region:"Asia SE", linked:"buginese" },

{ script:"Cherokee", language:"Cherokee",  id:"chr", type:"syllabic", chars:172, cchars:0, cs:"yes", gpos:"no", mcchars:"no", matras: "no", gsub:"no", cursive:"no", dir:"ltr", wordsep:"space", baseline:"mid", wrap:"word", hyphenation:"?", justify:"space", digits:"no", region:"America", linked:"cherokee" },

{ script:"Cyrillic", language:"Russian",  id:"ru", type:"alpha", chars:441, cchars:55, cs:"yes", gpos:"no", mcchars:"no", matras: "no", gsub:"no", cursive:"no", dir:"ltr", wordsep:"space", baseline:"mid", wrap:"word", hyphenation:"yes", justify:"space", digits:"no", region:"Europe", linked:"cyrillic" },

{ script:"Devanagari", language:"Hindi",  id:"hi", type:"abugida", chars:158, cchars:52, cs:"no", gpos:"yes", mcchars:"yes", matras: "yes", gsub:"yes", cursive:"no", dir:"ltr", wordsep:"space", baseline:"high", wrap:"word", hyphenation:"yes", justify:"space", digits:"yes", region:"Asia S", linked:"devanagari" },

{ script:"Devanagari", language:"Kashmiri",  id:"ks-deva", type:"abugida", chars:158, cchars:52, cs:"no", gpos:"yes", mcchars:"yes", matras: "yes", gsub:"yes", cursive:"no", dir:"ltr", wordsep:"space", baseline:"high", wrap:"word", hyphenation:"yes", justify:"space", digits:"yes", region:"Asia S", linked:"devanagari" },

{ script:"Ethiopic", language:"Amharic",  id:"am", type:"syllabic", chars:495, cchars:3, cs:"no", gpos:"no", mcchars:"no", matras: "no", gsub:"no", cursive:"no", dir:"ltr", wordsep:"፡/space", baseline:"mid", wrap:"char", hyphenation:"?", justify:"፡/space", digits:"yes", region:"Africa", linked:"ethiopic" },

{ script:"Georgian", language:"Georgian",  id:"ka", type:"alpha", chars:174, cchars:0, cs:"yes", gpos:"no", mcchars:"no", matras: "no", gsub:"no", cursive:"no", dir:"ltr", wordsep:"space", baseline:"mid", wrap:"word", hyphenation:"yes", justify:"space", digits:"no", region:"Europe", linked:"georgian" },

{ script:"Greek", language:"Greek",  id:"el", type:"alpha", chars:368, cchars:0, cs:"yes", gpos:"no", mcchars:"no", matras: "no", gsub:"no", cursive:"no", dir:"ltr", wordsep:"space", baseline:"mid", wrap:"word", hyphenation:"yes", justify:"space", digits:"no", region:"Europe", linked:"greek" },

{ script:"Gujarati", language:"Gujarati",  id:"gu", type:"abugida", chars:91, cchars:26, cs:"no", gpos:"yes", mcchars:"yes", matras: "yes", gsub:"yes", cursive:"no", dir:"ltr", wordsep:"space", baseline:"high?", wrap:"word", hyphenation:"?", justify:"space", digits:"yes", region:"Asia S", linked:"gujarati" },

{ script:"Gurmukhi", language:"Panjabi",  id:"pa", type:"abugida", chars:79, cchars:18, cs:"no", gpos:"yes", mcchars:"yes", matras: "yes", gsub:"yes", cursive:"no", dir:"ltr", wordsep:"space", baseline:"high", wrap:"word", hyphenation:"?", justify:"space", digits:"yes", region:"Asia S", linked:"gurmukhi" },

{ script:"S&T Chinese", language:"Chinese", id:"zh", type:"ideogr", chars:3113, cchars:0, cs:"no", gpos:"no", mcchars:"no", matras: "no", gsub:"no", cursive:"no", dir:"ltr/tbrl", wordsep:"no", baseline:"low", wrap:"char", hyphenation:"no", justify:"char", digits:"yes", region:"Asia E", linked:"han", letters:"3026", punctuation:"86", other:"-" },

{ script:"Hangul", language:"Korean", id:"ko", type:"ideogr", chars:"11321", cchars:0, cs:"no", gpos:"no", mcchars:"no", matras: "no", gsub:"no", cursive:"no", dir:"ltr/tbrl", wordsep:"space", baseline:"low", wrap:"char", hyphenation:"no", justify:"space", digits:"10", region:"Asia E", linked:"hangul", letters:"11321", punctuation:"-", other:"-" },

{ script:"Hebrew", language:"Hebrew",  id:"he", type:"abjad", chars:87, cchars:51, cs:"no", gpos:"yes", mcchars:"yes", matras: "no", gsub:"no", cursive:"no", dir:"rtl", wordsep:"space", baseline:"mid", wrap:"word", hyphenation:"yes", justify:"space", digits:"no", region:"W Asia", linked:"hebrew" },

{ script:"Javanese", language:"Javanese",  id:"jv-java", type:"abugida", chars:91, cchars:18, cs:"yes*", gpos:"yes", mcchars:"yes", matras: "yes", gsub:"yes", cursive:"no", dir:"ltr", wordsep:"no", baseline:"mid", wrap:"syllable", hyphenation:"no", justify:"?", digits:"yes", region:"Asia SE", linked:"javanese" },

{ script:"Japanese", language:"Japanese", id:"ja", type:"ideogr", chars:2078, cchars:0, cs:"no", gpos:"no", mcchars:"no", matras: "no", gsub:"no", cursive:"no", dir:"ltr/tbrl", wordsep:"no", baseline:"low", wrap:"char", hyphenation:"no", justify:"char", digits:"no", region:"Asia E", linked:"kana", letters:"2078", punctuation:"78", other:"-" },

{ script:"Kannada", language:"Kannada",  id:"kn", type:"abugida", chars:88, cchars:22, cs:"no", gpos:"yes", mcchars:"yes", matras: "yes", gsub:"yes", cursive:"no", dir:"ltr", wordsep:"space", baseline:"mid", wrap:"word", hyphenation:"?", justify:"space", digits:"yes", region:"Asia S" },

{ script:"Khmer", language:"Khmer",  id:"km", type:"abugida", chars:146, cchars:33, cs:"no", gpos:"yes", mcchars:"yes", matras: "yes", gsub:"yes", cursive:"no", dir:"ltr", wordsep:"no", baseline:"mid", wrap:"word", hyphenation:"no", justify:"cluster", digits:"yes", region:"Asia SE", linked:"khmer" },

{ script:"Lao", language:"Lao",  id:"lo", type:"alpha", chars:67, cchars:15, cs:"no", gpos:"yes", mcchars:"yes", matras: "visual", gsub:"yes", cursive:"no", dir:"ltr", wordsep:"no", baseline:"mid", wrap:"word", hyphenation:"no", justify:"cluster", digits:"yes", region:"Asia SE", linked:"lao" },

//{ script:"Latin", type:"alpha", chars:1286, cchars:0, cs:"yes", gpos:"no", mcchars:"no", matras: "no", gsub:"no", cursive:"no", dir:"ltr", wordsep:"space", baseline:"mid", wrap:"word", hyphenation:"yes", justify:"space", digits:"yes", region:"Eur/Am" },

{ script:"Lisu", language:"Lisu",  id:"lis", type:"abugida", chars:48, cchars:0, cs:"no", gpos:"no", mcchars:"no", matras: "no", gsub:"no", cursive:"no", dir:"ltr", wordsep:"syllable", baseline:"mid", wrap:"syllable", hyphenation:"no", justify:"space", digits:"no", region:"Asia E", linked:"lisu" },

{ script:"Malayalam", language:"Malayalam",  id:"ml", type:"abugida", chars:117, cchars:23, cs:"no", gpos:"yes", mcchars:"yes", matras: "yes", gsub:"yes", cursive:"no", dir:"ltr", wordsep:"space", baseline:"mid", wrap:"word", hyphenation:"?", justify:"space", digits:"yes", region:"Asia S", linked:"malayalam" },

{ script:"Mandaic", language:"Mandaic",  id:"mid", type:"alpha", chars:87, cchars:3, cs:"no", gpos:"yes", mcchars:"no", matras: "no", gsub:"yes", cursive:"yes", dir:"rtl", wordsep:"space", baseline:"mid", wrap:"word", hyphenation:"?", justify:"word/space", digits:"no", region:"Asia W", linked:"mandaic" },

{ script:"Mongolian", language:"Halh",  id:"khk", type:"alpha", chars:156, cchars:6, cs:"no", gpos:"yes", mcchars:"no?", matras: "no", gsub:"yes", cursive:"yes", dir:"tblr", wordsep:"space", baseline:"vertical", wrap:"word", hyphenation:"?", justify:"space", digits:"yes", region:"Asia C", linked:"mongolian" },

{ script:"Myanmar", language:"Myanmar",  id:"my", type:"abugida", chars:223, cchars:62, cs:"no", gpos:"yes", mcchars:"yes", matras: "yes", gsub:"yes", cursive:"no", dir:"ltr", wordsep:"no", baseline:"mid", wrap:"word", hyphenation:"no", justify:"cluster", digits:"yes", region:"Asia SE", linked:"myanmar" },

{ script:"New Tai Lü", language:"Tai Lü",  id:"khb", type:"abugida", chars:83, cchars:0, cs:"no", gpos:"no", mcchars:"no", matras: "visual", gsub:"no", cursive:"no", dir:"ltr", wordsep:"no", baseline:"mid", wrap:"?", hyphenation:"?", justify:"?", digits:"yes", region:"Asia SE", linked:"newtailue" },

{ script:"N'Ko", language:"Kangbe",  id:"nqo", type:"alpha", chars:62, cchars:10, cs:"no", gpos:"yes", mcchars:"yes", matras: "no", gsub:"yes", cursive:"yes", dir:"rtl", wordsep:"space", baseline:"mid", wrap:"word", hyphenation:"yes", justify:"wd/str", digits:"yes", region:"Africa", linked:"nko" },

{ script:"Oriya", language:"Oriya",  id:"ory", type:"abugida", chars:90, cchars:20, cs:"no", gpos:"yes", mcchars:"yes", matras: "yes", gsub:"yes", cursive:"no", dir:"ltr", wordsep:"space", baseline:"mid", wrap:"word", hyphenation:"?", justify:"space", digits:"yes", region:"Asia S" },

{ script:"Sinhala", language:"Sinhala",  id:"si", type:"abugida", chars:90, cchars:20, cs:"no", gpos:"yes", mcchars:"yes", matras: "yes", gsub:"yes", cursive:"no", dir:"ltr", wordsep:"space", baseline:"mid", wrap:"word", hyphenation:"?", justify:"space", digits:"unused", region:"Asia S", linked:"sinhala" },

{ script:"Sundanese", language:"Sundanese",  id:"su-sund", type:"abugida", chars:64, cchars:16, cs:"no", gpos:"yes", mcchars:"yes", matras: "yes", gsub:"yes", cursive:"no", dir:"ltr", wordsep:"space", baseline:"mid", wrap:"?", hyphenation:"no", justify:"?", digits:"yes", region:"Asia SE", linked:"sundanese" },

{ script:"Syriac", language:"Assyrian Neo&#x2011;Aramaic",  id:"aii", type:"abjad", chars:88, cchars:28, cs:"no", gpos:"yes", mcchars:"yes", matras: "no", gsub:"yes", cursive:"yes", dir:"rtl", wordsep:"space", baseline:"mid", wrap:"word", hyphenation:"?", justify:"word/space", digits:"no*", region:"W Asia", linked:"syriac" },

{ script:"Tai Le", language:"Tai Nüa",  id:"tdd", type:"alpha", chars:35, cchars:0, cs:"no", gpos:"yes", mcchars:"no", matras: "yes", gsub:"yes", cursive:"no", dir:"ltr", wordsep:"no", baseline:"mid", wrap:"?", hyphenation:"?", justify:"?", digits:"no", region:"Asia SE", linked:"taile" },

{ script:"Tai Tham", language:"N. Thai",  id:"nod", type:"abugida", chars:127, cchars:40, cs:"no", gpos:"yes", mcchars:"yes", matras: "yes", gsub:"yes", cursive:"no", dir:"ltr", wordsep:"no", baseline:"mid", wrap:"word", hyphenation:"no", justify:"?", digits:"yes", region:"Asia SE", linked:"taitham" },

{ script:"Tai Tham", language:"Tai Khün",  id:"kkh", type:"abugida", chars:127, cchars:40, cs:"no", gpos:"yes", mcchars:"yes", matras: "yes", gsub:"yes", cursive:"no", dir:"ltr", wordsep:"no", baseline:"mid", wrap:"word", hyphenation:"no", justify:"?", digits:"yes", region:"Asia SE", linked:"taitham" },

{ script:"Tai Viet", language:"Tai Dam",  id:"blt", type:"alpha", chars:72, cchars:9, cs:"no", gpos:"yes", mcchars:"yes", matras: "visual", gsub:"no", cursive:"no", dir:"ltr", wordsep:"space", baseline:"mid", wrap:"word", hyphenation:"?", justify:"?", digits:"no", region:"Asia SE", linked:"taiviet" },

{ script:"Tamil", language:"Tamil",  id:"ta", type:"abugida", chars:72, cchars:14, cs:"no", gpos:"yes", mcchars:"yes", matras: "yes", gsub:"yes", cursive:"no", dir:"ltr", wordsep:"space", baseline:"mid", wrap:"word", hyphenation:"?", justify:"space", digits:"yes", region:"Asia S", linked:"tamil" },

{ script:"Telugu", language:"Telugu",  id:"te", type:"abugida", chars:96, cchars:22, cs:"no", gpos:"yes", mcchars:"yes", matras: "yes", gsub:"yes", cursive:"no", dir:"ltr", wordsep:"space", baseline:"mid", wrap:"word", hyphenation:"?", justify:"space", digits:"yes", region:"Asia S" },

{ script:"Thaana", language:"Dhivehi",  id:"dv", type:"alpha", chars:50, cchars:11, cs:"no", gpos:"no", mcchars:"no", matras: "no", gsub:"no", cursive:"no", dir:"rtl", wordsep:"space", baseline:"mid", wrap:"word", hyphenation:"?", justify:"space", digits:"no", region:"Asia S", linked:"thaana" },

{ script:"Thai", language:"Thai",  id:"th", type:"abugida", chars:87, cchars:16, cs:"no", gpos:"yes", mcchars:"yes", matras: "visual", gsub:"yes", cursive:"no", dir:"ltr", wordsep:"no", baseline:"mid", wrap:"word", hyphenation:"no", justify:"cluster", digits:"yes", region:"Asia SE", linked:"thai" },

{ script:"Tibetan", language:"Tibetan",  id:"bo", type:"abugida", chars:211, cchars:77, cs:"no", gpos:"yes", mcchars:"yes", matras: "no", gsub:"yes", cursive:"no", dir:"ltr", wordsep:"no", baseline:"high", wrap:"syllable", hyphenation:"no", justify:"special", digits:"yes", region:"Asia C", linked:"tibetan" },

{ script:"Tifinagh", language:"Tamazight",  id:"zgh", type:"alpha", chars:59, cchars:1, cs:"no", gpos:"no", mcchars:"no", matras: "no", gsub:"no", cursive:"no", dir:"ltr/rtl", wordsep:"space", baseline:"mid", wrap:"word", hyphenation:"?", justify:"space", digits:"no", region:"Africa", linked:"tifinagh" },

{ script:"UCAS", language:"Swampy Cree",  id:"csw", type:"?", chars:710, cchars:0, cs:"no", gpos:"no", mcchars:"no", matras: "no", gsub:"no", cursive:"no", dir:"ltr", wordsep:"space", baseline:"mid", wrap:"word", hyphenation:"?", justify:"space", digits:"no", region:"America" },

{ script:"Vai", language:"Vai",  id:"vai", type:"syllabary", chars:300, cchars:0, cs:"no", gpos:"no", mcchars:"no", matras: "no", gsub:"no", cursive:"no", dir:"ltr", wordsep:"space", baseline:"mid", wrap:"word", hyphenation:"?", justify:"space?", digits:"no", region:"Africa", linked:"vai" },

]


