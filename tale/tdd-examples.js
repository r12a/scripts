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




autoExpandExamples.tdd = `

@ wiktionary  &  https://abvd.eva.mpg.de/austronesian/language.php?id=1650

ᥐᥝ|I, me||kaw
ᥐᥣ|crow||kaa
ᥐᥣᥙ||
ᥐᥣᥱ||
ᥐᥤᥢ|to eat|k§i§n˧˧|kin
ᥐᥥᥐ||
ᥐᥧᥢᥰᥛᥤᥒᥴ||
ᥐᥨᥢᥰ|person, human||kön
ᥐᥩᥒᥰᥛᥧᥰ||
ᥑᥛᥰ||
ᥑᥝᥲ|rice||xàw
ᥑᥝᥲᥔᥥᥢᥲ|rice noodles||xàwsèn
ᥑᥝᥴ|they, them||xáw
ᥑᥣᥛᥰ|language||xäam
ᥑᥣᥝᥱ|news, message|x§aː§w§˩˩|xǎaw
ᥑᥣᥝᥴ|white||xáaw
ᥑᥣᥭᥰ|water buffalo|x§aː§j§˥|xäay
ᥑᥣᥰ||
ᥑᥣᥱ||
ᥑᥣᥴ||
ᥑᥧᥢᥴᥞᥨᥝᥴᥑᥛᥰ|king|xúnhówxäm
ᥑᥭᥲ|to want, wish|xa§j§˦˨|xày
ᥒᥝᥰ|shadow||ngäw
ᥒᥧᥰ|snake|ŋ§u§˥˧|ngü
ᥓᥣᥒᥳ||
ᥓᥣᥭᥰ|man||tsäay
ᥓᥪ|name|t͡s§ɯ|tsue
ᥓᥬᥴ||
ᥔᥒᥴ||
ᥔᥣᥛᥴ||
ᥔᥣᥝᥴ|girl||sáaw
ᥔᥤᥙᥴ|ten||síp
ᥔᥤᥱ||
ᥔᥥᥒᥴ|sound, voice||séng
ᥔᥥᥢᥲ||
ᥔᥧᥛᥳ|room||s§u§̇m
ᥔᥧᥴ||
ᥔᥩᥒᥴ|two|s§ɔ§ŋ§˨˦|sóang
ᥔᥩᥢᥴ||
ᥕᥒ||
ᥕᥝᥳ||
ᥕᥤᥒᥰ||
ᥕᥧᥱ|to be at|j§u§˩˩|yǔ
ᥕᥧ̌|to be at|j§u§˩˩|yǔ
ᥕᥭᥰ|cicada|j§aj§˥˧|yäy
ᥖᥣᥢᥲ|to speak||tàan
ᥖᥦᥛᥲ|to write||tàem
ᥖᥧ||
ᥖᥨᥙ||
ᥖᥨᥝ|body|to˧|tow
ᥖᥩᥒ||
ᥖᥩᥒᥰ||
ᥖᥩᥒᥱ||
ᥖᥩᥒᥲ||
ᥖᥩᥒᥳ||
ᥖᥩᥒᥴ||
ᥗᥬᥴ|where||tháue
ᥘᥛᥱ||
ᥘᥛᥳ|water||lȧm
ᥘᥢᥰ||
ᥘᥣᥐᥴ|heavy||lȧak
ᥘᥣᥒᥰ|lady, mistress||läang
ᥘᥣᥢᥰ||
ᥘᥣᥭᥰ|dew||läay
ᥘᥤᥐ|book|l§i§k§˦˧|lik
ᥘᥥᥐᥱ|iron||lěk
ᥘᥦ|agreement particle||lae
ᥘᥦᥒ|red||laeng
ᥘᥦᥰ|imperative particle||läe
ᥘᥧᥐ||
ᥙᥣ|fish||paa
ᥙᥣᥐᥱ||
ᥙᥤ|year||pi
ᥙᥤᥢᥱ||
ᥙᥥᥢ||
ᥚᥐᥴ|vegetable||phák
ᥚᥬᥴ|who|pʰ§aɯ§˨˦|pháue
ᥛᥢᥰ||
ᥛᥣᥰ|to come||mäa
ᥛᥣᥱ|shoulder||mǎa
ᥛᥣᥲ|hemp|
ᥛᥣᥳ|horse||mȧa
ᥛᥣᥴ|dog||máa
ᥛᥤᥰ||
ᥛᥥ|mother|
ᥛᥦᥒᥰ|insect||mäeng
ᥛᥦᥝᥴ|cat||máew
ᥛᥧᥴ||
ᥛᥨᥝᥴ|doctor||mów
ᥛᥨᥝᥴᥔᥩᥢᥴ|teacher||mówsóan
ᥛᥨᥢᥱ||
ᥛᥫᥒᥰ|city, country|m§ə§ŋ§˥|möeng
ᥛᥬᥰ|you (s)||mäue
ᥛᥬᥱ|new||mǎue
ᥜᥒᥰ||
ᥜᥒᥱ||
ᥜᥒᥴ|to bury||fáng
ᥜᥒ́|to bury||fáng
ᥜᥫᥐᥱ|to study, learn||fǒek
ᥜᥭᥰ|fire|f§aj§⁴|fäy
ᥝᥢᥰ|day||wän
ᥞᥝᥰ|we, us||häw
ᥞᥣᥲ|five||hàa
ᥞᥧᥴ|ear||hú
ᥞᥨᥐᥱ|six|h§o§k§˩|hǒk
ᥞᥪᥴ||
ᥟᥛᥱ|not||ʼǎm
ᥟᥝ|to read|a§w|ʼaw
ᥟᥣᥒᥱ|basin, bowl||ʼǎang
ᥢᥛᥱ||
ᥢᥣᥒᥰ|lady, mistress||näang


@ ?
ᥘᥩᥐᥳ|outside||||x
ᥖᥭᥰᥖᥬᥳᥑᥨᥒᥰ|Tai Nüa|t§aj§˥.§t§aɯ§˧˩.§x§o§ŋ§˥
ᥖᥭᥰᥘᥫᥴ|Tai Le|ta§j§˦.§l§ə§˧˥


@ with tone marks, rather than letters
ᥛᥣ̈|to come||mäa
ᥘᥣᥐ́|heavy||lȧak
ᥛᥣ́|dog||máa
ᥘᥩᥐ̇|outside||||x
ᥛᥣ̇|horse||mȧa
ᥛᥣ̀|hemp|
ᥞᥨᥐ̌|six|hok⁵|hǒk
ᥛᥣ̌|shoulder||mǎa
ᥑᥣᥝ̌|news, message|x§aː§w§˩˩|xǎaw





















`






termLists = [

{
"title":"Wiktionary, Tai Nüa lemmas",
"url":"https://en.wiktionary.org/wiki/Category:Tai_Nüa_lemmas",
},

{
"title":"Austronesian Basic Vocabulary Database, Tai Nüa",
"url":"https://abvd.eva.mpg.de/austronesian/language.php?id=1650",
"notes":"Latin only",
},

]












