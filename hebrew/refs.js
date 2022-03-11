reflist = {


"a": {
"url":"https://hebrew-academy.org.il/topic/hahlatot/punctuation/",
"authors": "Hebrew Academy",
"title":"האקרמיה ללשון העברת",
},

"d": {
"url":"#refs",
"authors": "Peter T. Daniels and William Bright",
"title":"The World's Writing Systems",
"publisher":"Oxford University Press",
"pages":"487-497",
"isbn":"0-19-507993-0",
},

"l": {
"url":"https://www.typotalks.com/videos/go-bolder-just-slant-it/",
"authors": "Liron Lavi Turkenich",
"title":"Go bolder, just slant it—secondary styles in Hebrew (video)",
"sub":"in TYPO  International Design Talks",
},

"s": {
"url":"https://scriptsource.org/scr/Hebr",
"authors": "ScriptSource",
"title":"Hebrew",
},

"u": {
"url":"https://www.unicode.org/versions/Unicode13.0.0/ch9.pdf",
"authors": "Unicode Consortium",
"title":"The Unicode Standard, Version 13.0",
"sub":"Chapter 9.1: Middle East-I, Hebrew",
"pages":"359-364",
"isbn":"978-1-936213-16-0.",
},

"ul": {
"url":"https://www.unicode.org/reports/tr14/",
"authors": "Unicode Consortium",
"title":"Unicode Line Breaking Algorithm (UAX#14)",
"reviewed":true
},

"wc": {
"url":"http://en.wikipedia.org/wiki/Cantillation",
"authors": "Wikipedia",
"title":"Cantillation",
},

"wg": {
"url":"http://en.wikipedia.org/wiki/Geresh",
"authors": "Wikipedia",
"title":"Geresh",
},

"wh": {
"url":"http://en.wikipedia.org/wiki/Holam",
"authors": "Wikipedia",
"title":"Holam",
},

"whp": {
"url":"http://en.wikipedia.org/wiki/Hebrew_punctuation",
"authors": "Wikipedia",
"title":"Hebrew punctuation",
},

"wi": {
"url":"https://en.wikipedia.org/wiki/Help:IPA/Hebrew",
"authors": "Wikipedia",
"title":"Help:IPA/Hebrew",
},

"wp": {
"url":"https://en.wikipedia.org/wiki/Modern_Hebrew_phonology",
"authors": "Wikipedia",
"title":"Modern Hebrew Phonology",
},

"wsv": {
"url":"http://en.wikipedia.org/wiki/Schwa",
"authors": "Wikipedia",
"title":"Schwa",
},

"ws": {
"url":"http://en.wikipedia.org/wiki/Hebrew_alphabet",
"authors": "Wikipedia",
"title":"Hebrew alphabet",
},

"ww": {
"url":"https://en.wikipedia.org/wiki/Waw_(letter)#Pronunciation_in_Modern_Hebrew",
"authors": "Wikipedia",
"title":"Waw (letter)",
},


}






scriptLanguageList = {
hbo:{name:"Hebrew, Ancient"},
bhh:{name:"Bukharic"},
ydd:{name:"Yiddish, Eastern"},
heb:{name:"Hebrew", url:"he.html"},
huy:{name:"Hulaulá"},
jrb:{name:"Judeo-Arabic"},
jbe:{name:"Judeo-Berber"},
yhd:{name:"Arabic, Judeo-Iraqi"},
itk:{name:"Judeo-Italian"},
aju:{name:"Arabic, Judeo-Moroccan"},
jpr:{name:"Judeo-Persian"},
jdt:{name:"Judeo-Tat"},
yud:{name:"Arabic, Judeo-Tripolitanian"},
ajt:{name:"Arabic, Judeo-Tunisian"},
jye:{name:"Arabic, Judeo-Yemeni"},
lad:{name:"Ladino"},
trg:{name:"Lishán Didán"},
lsd:{name:"Lishana Deni"},
aij:{name:"Lishanid Noshan"},
sam:{name:"Aramaic, Samaritan"},
smp:{name:"Samaritan"},
tgk:{name:"Tajik"},
yih:{name:"Yiddish, Western"},
yid:{name:"Yiddish"},
}



function removeVowels (str) {
// removes the nikkud etc from the text in the text area

var vowels =  ['ִ','ֻ','ְ','ֱ','ֵ','ֶ','ֳ','ֹ','ֺ','ֲ','ַ','ָ', 'ּ']

for (var i=0;i<vowels.length;i++) {
	var re = new RegExp(vowels[i],'g')
	str = str.replace(re,'')
	}

return str
}



