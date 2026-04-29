/*
native | meaning | /IPA/① | transcription | other transcriptions② | notes/[IPA]③ | wiktionary④


① separate each text unit (consonant+combining_mark(s)) with ,, separate phonetic syllables with .
   use ‹ and › for a sound that spans 2 text units
   use – (en dash) for a text unit that doesn't produce sound
   syllable boundary markers go inside previous unit, and emphasis markers begin emphasised unit

② the previous transcription field is always Latin. 
   if there is another key orthography (eg. Mongolian cyrillic) it goes here.
   vowelled/unvowelled alternatives also go here

③ where you want to be able to distinguish broad and narrow phonetic descriptions, the narrow goes here
	alternatively, this field may be used for notes

④ if Wiktionary spells the word differently, add the spelling here


Tones are best written in IPA using decomposed accents after the vowel, rather than \u0304 or numeric superscripts. This makes it easier to search for tones in the term lists, and produces easier to read transcriptions. To prevent normalisation problems, the accents should be represented using escapes, like \u0300.
*/


/* Tone markers in this list are:
\u0300	low falling -Z
\u0301	mid-high falling -X
\u0304	mid-high level or rising -C
ˀ		glottal stop -Q
*/


autoExpandExamples.nst = `



@ https://www.unicode.org/L2/L2021/21027r-tangsa.pdf

𖪠𖩴|to go|k,a\u0300||
𖪣𖩿𖪐|to feel jealous|ŋ,e\u0300,ŋ|
𖪠𖪇𖪬𖪬𖩿𖪬|jealousy|kʰ,u\u0304,n,n,e\u0304,n|
𖪶𖩴𖪫𖪀|rice|t͡s,ə\u0300,m|||old spelling
𖪶𖩸𖪫|rice|t͡s,ə\u0300,m|
𖪲𖩷𖪇𖪐|sky|r,a,u\u0304,ŋ|||old spelling
𖪲𖩻𖪇𖪐|sky|r,ə,u\u0304,ŋ|
𖪠𖩶|??|k,aˀ|
𖪠𖩴𖩶|??|k,aˀ|||preferred by founder
𖪰𖩴𖪆𖪠|1st person past marker|t,a\u0300,uˀ,k|
𖪭𖩴|question particle|h,a\u0300|
𖪬𖪑 𖪠𖪕𖪲𖩷|very very far|n,ɤ\u0304ː, ,k,ə,r,a\u0304|
𖩸𖪲𖪗 𖪮𖪓|let it be only so much|ə,r,ɤ\u0304, ,l,ɔ\u0304ˀ|
𖪭𖩻𖪮|good|h,ə\u0304,l|
𖪰𖪒𖪷𖪌𖪀|blood|t,ə,ɣ,ɯ,i\u0300|
𖪴𖪔𖪠𖩿|creator|ʃ,ə,k,e\u0304|
𖪠𖪔𖪲𖪅𖪮 𖪫𖪔𖪲𖩽𖪬|likewise|k,ə,r,u\u0301,l, ,m,ə,r,e\u0301,n|
𖪦𖪒𖪷𖩵𖪬|others|β,ə,ɣ,a\u0301,n|
𖩸𖪰𖪒𖪤𖪌𖪧|lastly|ə\u0300,t,ə,s,ɯ\u0300,p|
𖪡𖩿𖪮|goat|kʰ,e\u0304,l|
𖪢𖩼𖪭𖩽|dog|ɡ,e\u0300,h,e\u0301|
𖪠𖩷𖪬|mountain|k,a\u0304,n|
𖪥𖩵𖪲𖩼𖪫|January|j,a\u0301,r,e\u0300,m|
𖪥𖩵𖪣𖩴|February|j,a\u0301,ŋ,a\u0300|
𖪦𖪔𖪲𖩵|April|w,ɤ\u0300,r,a\u0301
𖪥𖩵𖪴𖪃|May|j,a\u0301,ʃ,i\u0304
𖪥𖩵𖪠𖪄𖪀|June|j,a\u0301,k,u,i\u0300
𖪥𖩵𖪵𖪙𖪫|July|j,a\u0301,t͡ɕ,ɯu\u0301,m|
𖪥𖩵𖪴𖪇𖪮|August|j,a\u0301,ʃ,u\u0304,l|
𖪥𖩵𖪴𖩷|September|j,a\u0301,ʃ,a\u0304|
𖪦𖪄𖪱𖪦𖪌|October|w,u\u0300,d,w,ɯ\u0300|
𖪥𖩵𖪱𖩵|November|j,a\u0301,d,a\u0301|
𖪥𖩵𖪱𖩸𖪬|December|j,a\u0301,d,ə\u0300,n
𖪴𖩱𖩹𖪬𖪴𖩷𖪮|Monday|ʃ,o,ə\u0301,n,ʃ,a\u0304,l|
𖪫𖩵𖪬𖪴𖩷𖪮|Tuesday|m,a\u0301,n,ʃ,a\u0304,l|
𖪩𖩵𖪬𖪴𖩷𖪮|Wednesday|pʰ,a\u0301,n,ʃ,a\u0304,l|
𖪯𖩵𖪬𖪴𖩷𖪮|Thursday|tʰ,a\u0301,n,ʃ,a\u0304,l|
𖪦𖩵𖪬𖪴𖩷𖪮|Friday|w,a\u0301,n,ʃ,a\u0304,l|
𖪣𖩵𖪬𖪴𖩷𖪮|Saturday|ŋ,a\u0301,n,ʃ,a\u0304,l|
𖪧𖩽𖩱𖪴𖩷𖪮|Sunday|p,e,o\u0301,ʃ,a\u0304,l|






@ https://www.unicode.org/L2/L2021/21027r-tangsa.pdf

𖪫𖪏𖪴𖩻𖪇𖪐|Muishvung language|m,ɯ\u0304,ʃ,ə,u\u0304,ŋ|




`




// automatically creates Online Resources section, if markup is uncommented in xx.html

termLists = [

{
"title":"Video for teaching the Tangsa script created by Lakhum Mossang. Part 1: Vowels and Consonants",
"url":"https://www.youtube.com/watch?v=2hefxhkGzsE",
},


]

