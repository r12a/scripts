/*
native | meaning | IPA① | transcription | other transcriptions② | notes | wiktionary③


① separate each text unit (consonant+combining_mark(s)) with ,, separate phonetic syllables with .
   use ‹ and › for a sound that spans 2 text units
   use – for a text unit that doesn't produce sound
   syllable boundary markers go inside previous unit, and emphasis markers begin emphasised unit

② the previous transcription field is always Latin. 
   if there is another key orthography (eg. Mongolian cyrillic) it goes here.
   vowelled/unvowelled alternatives also go here

③ if Wiktionary spells the word differently, add the spelling here
*/


otherTranscription = true   // kicks in the latest order of items: indicates that this uses a format that includes other transcriptions in the position shown above – this affects the assignments for the code, and i think also affects lookup for script notes that show both unvocalised and vocalised
termListType = 3			// picks up sources automatically



autoExpandExamples.lis = `

@ wiktionary

ꓑꓺ ꓦꓯꓹ|bamboo rat|pa,˦˦.,,h,ɛ̃,˧˥|pā hæ̌̃|pɑ̱ h̃æ̌|/../
ꓔꓲꓹ|to dye, to immerse in water|t,i,˦˥ˀ|tǐ|
ꓞꓽ ꓐꓳꓺ|salt|tsʰà,˩, ,b,o,˧|tsʰɑ̀ bo̱|tsʰà bo
ꓠꓴꓻ|you|n,u,˨˨|nu|
ꓚꓳ-ꓗꓴꓷꓼ|China|t͡ɕ,o˧˧.,,k,u,ə,˧˩|tʃo-kù̱ɤ
ꓐꓵꓺ|to owe|b,y,˧˧|by̱|by̠³³|/../
ꓒꓵꓽ|pumpkin|pʰ,y,˧˩|pʰỳ
ꓡꓲ-ꓢꓴ|Lisu language|l,i˧˧.,,s,u˧˧|li̱-su̱||[..]
ꓡꓲꓺ-ꓢꓴꓺ|Lisu language|l,i,˧˧,,s,u,˧˧|li̱-su̱
ꓥꓪ|I, me|ŋ,wɑ˧|ŋwɑ||[..]
ꓥꓳꓽ|language|ŋ,o,˧˩|ŋò
ꓦ ꓐꓻ|moon|hã˧.,,ba,˨|hɑ̃ bɑ̰||/../
ꓬꓲꓻ|water|ʑ,i,˨|ji||/../




@ Handbook of the Lisu language – Lisu text is generated from transcription; IPA is generated from Lisu text

ꓡꓳꓺ ꓗꓶꓺ|abandon|l,o,˧, ,k,ɯ,˧|lō kɯ̄|law3-krgh3
ꓬꓹ|to abase|jɑ̌,˦˥ˀ|yɑ̌|ya2|Chinese
ꓠꓲꓸ ꓡꓰꓺ ꓝꓲꓺ|to abate|n,i,˥˥, ,l,e,˧˧, ,t͡s,i,˧˧|ní lē t͡sī|ni1-lye3 tsi3
ꓠꓲꓹ ꓟꓺ|abdomen|n,i,˦˥ˀ, ,mɑ,˧˧|nǐ mɑ̄|ni2-ma3
ꓠꓬꓲꓹ ꓔꓸ|to dwell|ɲ,‹,ǐ,˦˥ˀ, ,tɑ́,˥˥|ɲǐ tɑ́|nyi2-ta1
ꓨʼꓲꓻ|house|ɦ,›,ĩ,˨|ɦḭ̃|h'i4
ꓒꓰꓽ ꓷꓻ|to appear|pʰ,e,˩, ,ə,˨˨|pʰè ə̰|hpye5-rghe4
ꓐꓴꓽ ꓡꓴꓻ|butterfly|b,u,˩, ,l,u,˨˨|bù lṵ|bu5 lu4
ꓑꓶꓸ|to dare|p,ɯ,˥˥|pɯ́|prgh1
ꓑꓽ ꓡꓰꓹ|scythe|pa,˩, ,l,e,˦˥ˀ|pà lě|pa5 lye2||x
ꓙꓲꓽ|to sew|d͡ʑ,i,˩|d͡ʑì|ji6
ꓣꓼ ꓟꓶʼꓻ ꓨꓪ|to marry|ʒa,˧˩ˀ, ,m,ɯ̃,‹,˨˨, ,ɦ,wa˧˧|ʒa᷆ mɯ̰̃ ɦwa|ra5 mrghʼ4 hwa3
ꓩꓴꓹ ꓣꓼ|idol|f,u,˦˥ˀ, ,ʒa,˧˩ˀ|fǔ ʒa᷆|fu2 ra5
ꓵ|to count|ʔỹ||üʼ3



@ video

ꓠꓸ ꓑꓳ|ear|na,˥˥, ,p,o˧|ná pō|na1 paw3
ꓕꓲ|one|tʰ,i|hti5
ꓠꓬꓲ|two|ɲ,‹,i˩||nyï5
ꓢ|three|sa||sa3
ꓡꓲꓸ|four|l,i,˥||li3
ꓥꓪꓽ|five|ŋ,wa,˩|ŋwà|ngwa5
ꓚꓳ|six|t͡ɕ,o|t͡ɕo|hchaw6
ꓫꓵꓼ|seven|ʃ,y,˧˩ˀ|ʃy᷆|shï5
ꓦꓲꓼ|eight|h,i,˧˩ˀ|hi᷆|hʼi6
ꓗꓴꓸ|nine|k,u,˥˥|ku1|kú
ꓞꓲ|ten|ʦʰ,i||htsi4
ꓡꓯꓽ ꓒꓶ|shoulder|l,ɛ,˩, ,pʰ,ɯ|lɛ̀ pʰɯ|lá6 hprgh5
ꓡꓯꓽ ꓒꓯꓹ|hand|l,ɛ̀,˩, ,pʰ,ɛ̌,˦˥ˀ|lɛ̀ pʰɛ̌|lá2 hpá2
ꓪꓴꓸ ꓓꓴ|head|w,u,˥, ,d,u|wú du|wu1 dü3
ꓡ ꓛꓱ|tongue|la, ,t͡ɕʰ,ø||la3 hchē3
ꓗꓶꓸ ꓝꓲꓸ|neck|k,ɯ,˥˥, ,t͡s,i,˥˥|kɯ́ t͡sí|krgh1 tsē3
ꓠꓲꓹ M|heart|n,i,˦˥ˀ, ,ma|nǐ ma|ni2 ma3
ꓟꓶꓽ ꓡꓶꓹ|lips|m,ɯ,˩, ,l,ɯ,˦˥ˀ|mɯ̀ lɯ̌|mrgh5 lrge2
ꓦꓲꓼ ꓟ|belly|h,i,˧˩ˀ, ,ma|hi᷆ ma|hʼi6 hchi6
ꓐꓵꓼ ꓟꓴ|lung|b,y,˧˩ˀ, ,m,u˧˧||by᷆ mu|
ꓮꓸ ꓬꓲꓼ|elder brother|ʔɑ,˥, ,j,i,˧˩ˀ|ʔɑ́ ji᷆|a1 yi6
ꓠꓬꓲ ꓤꓽ|younger brother|ɲ,‹,i, ,za,˩|ɲi zà|nyi3 ra5
ꓢꓲꓽ|blood|s,i,˩|sì|si5
ꓤꓽ ꓟꓶꓼ|daughter|za,˩, ,m,ɯ,˧˩ˀ|zà mɯ᷆|á1 mi5
ꓢꓲꓹ ꓜꓲ|tree|s,i,˦˥ˀ, ,d͡z,i˧˧|s,ǐ,‹, ,d͡z,i|si2 zhi3
ꓕꓳꓽ ꓜꓲ|pine tree|tʰ,o,˩, ,d͡z,i||tʰò d͡zi
ꓟꓺ ꓓ|bamboo|m,a,˧, ,da|mā da|ma4 da4
ꓘꓪꓽ ꓢꓱ|garlic|kʰ,wa,˩, ,s,ø|kʰwà sø|khwa5 sye4
ꓢ ꓡꓽ|cotton|sa, ,la,˩|sa là|sa3 la5
ꓢꓲꓹ ꓢꓶꓽ|fruit|s,i,˦˥ˀ, ,s,ɯ,˩|sǐ sɯ̀|sï2 sï5
ꓮꓸ ꓭꓸ|chicken|ʔɑ̃,˥˥, ,ɣa,˥˥||ʔɑ́̃ ɣá
ꓯꓹ|duck|ʔɛ̃,˦˥ˀ|ʔɛ̌̃|áʼ2
ꓳ|goose|ʔõ|ʔõ|awʼ3
ꓕꓳꓼ ꓡ|rabbit|tʰ,o,˧˩ˀ, ,la|tʰo᷆ la|htaw5 la4
ꓥꓪꓸ|fish|ŋ,wa,˥˥|ŋwá|ngwa1|
ꓪꓴꓸ ꓖꓳꓽ ꓡꓳ|pillow|w,u,˥, ,ɡ,o,˩, ,l,o˧|wú ɡò lo|wu1 gaw6 law3




@ Unicode Lisu proposal http://std.dkuug.dk/jtc1/sc2/wg2/docs/n3317.pdf

ꓠꓴ ꓙꓰꓻˍ ꓥꓳꓻ|you will go|n,u˧˧, ,d͡ʑ,e,˨˨,a˩, ,ŋ,o,˨˨|nu d͡ʑḛà ŋo̰
ꓖꓳꓻ ꓡꓱꓻ ꓮˍ ꓟꓲ|but|ɡ,o,˨˨, ,l,ø,˨˨, ,ŋɑ˧˩ˀ,a˩, ,m,i˧˧|ɡo̰ lø̰ ŋɑ᷆à mi


@ https://live.bible.is/bible/LISTCM/MAT/17?audio_type=audio  Pronunciation manually added

ꓬꓰ‐ꓢꓴ|Jesus|j,e,,s,u


@ https://en.wikipedia.org/wiki/Fraser_script

ꓡꓬꓮꓳ ꓩꓷꓠ|jelly|l,i̯,ɛ,w˧˧, ,f,ə,n˧˧|li̯ɛw fən|凉粉



























`


// The collections array is new and needs to be propagated throughout all orthographies.
// It provides sets that can be used for searching text in term lists and in pickers.
// Keys are drawn from the following set of characters: ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ
// ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ⊙

var collections = [
{ symbol:'Ⓥ', desc:'Vowels', chars:'(ꓲ|ꓵ|ꓶ|ꓴ|ꓰ|ꓱ|ꓷ|ꓳ|ꓯ|ꓮ)' },
{ symbol:'Ⓒ', desc:'All consonants', chars:'(ꓑ|ꓐ|ꓒ|ꓔ|ꓓ|ꓕ|ꓗ|ꓖ|ꓘ|ꓝ|ꓜ|ꓞ|ꓚ|ꓙ|ꓛ|ꓩ|ꓢ|ꓤ|ꓣ|ꓫ|ꓬ|ꓧ|ꓭ|ꓦ|ꓨ|ꓟ|ꓠ|ꓥ|ꓪ|ꓡ)' },
{ symbol:'Ⓣ', desc:'Tones', chars:'(ꓸ|ꓹ|ꓺ|ꓻ|ꓼ|ꓽ)' },
{ symbol:'⊙', desc:'Invisibles', chars:'(\u200C|\u200D)' },
]
