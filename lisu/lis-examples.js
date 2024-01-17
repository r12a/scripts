/*
native | meaning | IPA① | transcription | other transcriptions② | notes | wiktionary③


① separate each text unit (consonant+combining_mark(s)) with §, separate phonetic syllables with .
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

ꓑꓺ ꓦꓯꓹ|bamboo rat|pā§ §h§æ̌̃§‹
ꓔꓲꓹ|to dye|t§ǐ§‹
ꓞꓽ ꓐꓳꓺ|salt|tsʰà§‹ §b§o§‹
ꓠꓴꓻ|you|n§u§‹


@ Handbook of the Lisu language – Lisu text is generated from transcription; IPA is generated from Lisu text

ꓡꓳꓺ ꓗꓶꓺ|abandon|l§ō§‹§ §k§ɯ̄§‹|law3-krgh3
ꓬꓹ|to abase|jɑ̌§‹|ya2||Chinese
ꓠꓲꓸ ꓡꓰꓺ ꓝꓲꓺ|to abate|n§í§‹§ §l§ē§‹§ §t͡s§ī§‹|ni1-lye3 tsi3
ꓠꓲꓹ ꓟꓺ|abdomen|n§ǐ§‹§ §mɑ̄§‹|ni2-ma3
ꓠꓬꓲꓹ ꓔꓸ|to dwell|ɲ§‹§ǐ§‹§ §tɑ́§‹|nyi2-ta1
ꓨʼꓲꓻ|house|ɦ§›§ḭ̃§‹||h'i4
ꓒꓰꓽ ꓷꓻ|to appear|pʰ§è§‹§ §ə̰§‹|hpye5-rghe4
ꓐꓴꓽ ꓡꓴꓻ|butterfly|b§ù§‹§ §l§ṵ§‹|bu5 lu4
ꓑꓶꓸ|to dare|p§ɯ́§‹|prgh1
ꓑꓽ ꓡꓰꓹ|scythe|pà§‹§ §l§ě§‹|pa5 lye2
ꓙꓲꓽ|to sew|d͡ʑ§ì§‹||ji6
ꓣꓼ ꓟꓶʼꓻ ꓨꓪ|to marry|ʒa§‹§᷆ §m§ɯ̰̃§‹§‹§ §ɦ§wa|ra5 mrghʼ4 hwa3
ꓩꓴꓹ ꓣꓼ|idol|f§ǔ§‹§ §ʒa᷆§‹||fu2 ra5
ꓵ|to count|ʔỹ||üʼ3



@ video

ꓠꓸ ꓑꓳ|ear||ná§‹§ §p§ō|na1 paw3
ꓕꓲ|one|tʰ§i||hti5
ꓠꓬꓲ|two|ɲ§‹§i||nyï5
ꓢ|three|sa||sa3
ꓡꓲꓸ|four|l§í§‹||li3
ꓥꓪꓽ|five|ŋ§wà§‹||ngwa5
ꓚꓳ|six|t͡ɕ§o||hchaw6
ꓫꓵꓼ|seven|ʃ§y᷆§‹||shï5
ꓦꓲꓼ|eight|h§i᷆§‹||hʼi6
ꓗꓴꓸ|nine|k§ú§‹||ku1
ꓞꓲ|ten|ʦʰ§i||htsi4
ꓡꓯꓽ ꓒꓶ|shoulder|l§ɛ̀§‹§ §pʰ§ɯ||lá6 hprgh5
ꓡꓯꓽ ꓒꓯꓹ|hand|l§ɛ̀§‹§ §pʰ§ɛ̌§‹||lá2 hpá2
ꓪꓴꓸ ꓓꓴ|head|w§ú§‹§ §d§u||wu1 dü3
ꓡ ꓛꓱ|tongue|la§ §t͡ɕʰ§ø||la3 hchē3
ꓗꓶꓸ ꓝꓲꓸ|neck|k§ɯ́§‹§ §t͡s§í§‹||krgh1 tsē3
ꓠꓲꓹ M|heart|n§ǐ§‹§ §ma||ni2 ma3
ꓟꓶꓽ ꓡꓶꓹ|lips|m§ɯ̀§‹§ §l§ɯ̌§‹||mrgh5 lrge2
ꓦꓲꓼ ꓟ|belly|h§i᷆§‹§ §ma||hʼi6 hchi6
ꓐꓵꓼ ꓟꓴ|lung|b§y᷆§‹§ §m§u|
ꓮꓸ ꓬꓲꓼ|elder brother|ʔɑ́§‹§ §j§i᷆§‹||a1 yi6
ꓠꓬꓲ ꓤꓽ|younger brother|ɲ§‹§i§ §zà§‹||nyi3 ra5
ꓢꓲꓽ|blood|s§ì§‹||si5
ꓤꓽ ꓟꓶꓼ|daughter|zà§‹§ §m§ɯ᷆§‹||á1 mi5
ꓢꓲꓹ ꓜꓲ|tree|s§ǐ§‹§ §d͡z§i||si2 zhi3
ꓕꓳꓽ ꓜꓲ|pine tree|tʰ§ò§‹§ §d͡z§i
ꓟꓺ ꓓ|bamboo|m§ā§‹§ §da||ma4 da4
ꓘꓪꓽ ꓢꓱ|garlic|kʰ§wà§‹§ §s§ø||khwa5 sye4
ꓢ ꓡꓽ|cotton|sa§ §là§‹||sa3 la5
ꓢꓲꓹ ꓢꓶꓽ|fruit|s§ǐ§‹§ §s§ɯ̀§‹||sï2 sï5
ꓮꓸ ꓭꓸ|chicken|ʔɑ́̃§‹§ §ɣá§‹
ꓯꓹ|duck|ʔɛ̌̃§‹||áʼ2
ꓳ|goose|ʔõ||awʼ3
ꓕꓳꓼ ꓡ|rabbit|tʰ§o§‹§᷆ §la||htaw5 la4
ꓥꓪꓸ|fish|ŋwá||ngwa1
ꓪꓴꓸ ꓖꓳꓽ ꓡꓳ|pillow|w§ú§‹§ §ɡ§ò§‹§ §l§o||wu1 gaw6 law3


@ Unicode Lisu proposal http://std.dkuug.dk/jtc1/sc2/wg2/docs/n3317.pdf

ꓠꓴ ꓙꓰꓻˍ ꓥꓳꓻ|you will go|n§u§ §d͡ʑ§ḛ§‹§à§ §ŋ§o̰§‹
ꓖꓳꓻ ꓡꓱꓻ ꓮˍ ꓟꓲ|but|ɡ§o̰§‹§ §l§ø̰§‹§ §ŋɑ§᷆à§ §m§i


@ https://live.bible.is/bible/LISTCM/MAT/17?audio_type=audio  Pronunciation manually added

ꓬꓰ‐ꓢꓴ|Jesus|j§e§§s§u


@ https://en.wikipedia.org/wiki/Fraser_script

ꓡꓬꓮꓳ ꓩꓷꓠ|jelly|l§i̯§ɛ§w§ §f§ə§n||凉粉




























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
