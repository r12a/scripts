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




autoExpandExamples.sat = `

@ https://en.wiktionary.org/wiki/Category:Santali_terms_with_IPA_pronunciation

ᱤᱧ|I||iñ
ᱟᱢ|you (singular)||am
ᱩᱱᱤ|he||uni
ᱟᱹᱞᱤᱧ|we||ăliñ
ᱟᱞᱮ|we||ale
ᱟᱹᱵᱤᱱ|you (plural)||ăbin
ᱟᱯᱮ|you (plural)|ape
ᱩᱱᱠᱤᱱ|they|unkin
ᱩᱱᱠᱩ|they||unku
ᱱᱚᱣᱟ|this|n§ɔ§w§a|nôva
ᱚᱱᱟ|that||ôna
ᱱᱚᱰᱮ|here|n§ɔ§ɖ§e|nôḍe
ᱦᱟᱸᱰᱮ|there||hãḍe
ᱚᱠᱚᱭ|who||ôkôy
ᱪᱮᱫ|what||cet’
ᱚᱠᱟᱨᱮ|where||ôkare
ᱛᱤᱨᱮ|when||tire
ᱛᱤᱥ|when||tis
ᱪᱮᱫ ᱞᱮᱠᱟᱛᱮ|how||cet’ lekate
ᱵᱟᱝ|not||baṅ
ᱡᱚᱛᱚ|all|ӡoto|jôtô
ᱡᱷᱚᱛᱚ|all|ɟʰ§‹§ɔ§t§ɔ|jhôtô
ᱟᱭᱢᱟ|many||ayma
ᱟᱫᱚᱢ|some||adôm
ᱛᱷᱚᱲᱟ|some, few|tʰ§‹§ɔ§ɽ§a|thôṛa
ᱮᱴᱟᱜ|other|e§ʈ§a§k̚|eṭak’
ᱢᱤᱫ|one||mit’
ᱵᱟᱨ|two||bar
ᱯᱮ|three||pe
ᱢᱚᱬᱮ|five|m§ɔ§ɳ§e|môṇe
ᱛᱩᱨᱩᱭ|six|t§u§r§u§j|turuy
ᱮᱭᱟᱭ|seven|e§j§a§j|eyay
ᱤᱨᱟᱹᱞ|eight|i§r§ə§‹§l|irăl
ᱟᱨᱮ|nine||are
ᱜᱮᱞ|ten||gel
ᱢᱟᱨᱟᱝ|big|maraŋ|maraṅ
ᱡᱤᱞᱤᱧ|long|ɟ§i§l§i§ɲ|jiliñ
ᱚᱥᱟᱨ|wide||ôsar
ᱤᱵᱤᱞ|thick||ibil
ᱦᱟᱢᱟᱞ|heavy||hamal
ᱠᱟᱴᱤᱡ|small||kaṭic’
ᱦᱩᱰᱤᱧ|small||huḍiñ
ᱠᱟᱴᱤᱡ|short||kaṭic’
ᱠᱩᱲᱤ|woman|k§u§ɽ§i|kuṛi
ᱠᱚᱲᱟ|man (adult male)|k§ɔ§ɽ§a|kôṛa
ᱦᱚᱲ|man (human being)||hôṛ
ᱜᱤᱫᱨᱟ|child||gidra
ᱦᱚᱯᱚᱱ|child||hôpôn
ᱵᱟᱦᱩ|wife||bahu
ᱮᱨᱚ|wife||erô
ᱡᱟᱶᱟᱭ|husband|ɟ§a§w̃§a§j|jaw̃ay
ᱜᱚᱜᱚ|mother||gôgô
ᱟᱭᱚ|mother||ayô
ᱮᱝᱜᱚ|mother|e§ŋ§ɡ§ɔ|eṅgô
ᱵᱟᱵᱟ|father||baba
ᱟᱯᱟ|father|a§p§a|apa
ᱡᱤᱣᱟᱹᱞᱤ|animal||jivăli
ᱦᱟᱹᱠᱩ|fish||hăku
ᱪᱮᱬᱮ|bird|c§e§ɳ§e|ceṇe
ᱥᱮᱛᱟ|dog|s§e§t§a|seta
ᱥᱤ|louse||si
ᱵᱤᱝ|snake||biṅ
ᱛᱤᱡᱩ|worm||tiju

ᱦᱮᱸᱫᱮ|black|h§ẽ§‹§d§e
ᱵᱮᱺᱫᱤ|paddy storage|b§ə̃§‹§d§i
ᱡᱭᱻᱭᱤ|soul|jiːyi
ᱢᱚᱹᱬᱮᱻ ᱢᱚᱸᱻᱦᱟ|five days|m§ɔ§‹§ɳ§eː§‹§ §m§ãː§‹§‹§h§a
ᱫᱟᱜᱽ|mark|d§a§ɡ§‹
ᱫᱟᱜᱤ|marked|d§a§ɡ§i
ᱨᱚᱡᱽ|rule|r§a§ɟ§‹
ᱨᱚᱡᱚ|king|r§a§ɟ§a
ᱜᱤᱫᱽᱨᱟ|child|ɡ§i§d§‹§r§a
ᱜᱤᱫᱤ|vulture|ɡ§i§d§i
ᱩᱵᱽ|pour (from a pot)|ub
ᱵᱤᱨ|forest|b§i§r
ᱫᱚᱜ|water|d§a§k̚
ᱨᱚᱜ|cry|rak̚
ᱨᱮᱡ|snatch|rec̚
ᱢᱩᱡ|ant|m§u§c̚
ᱜᱳᱫ|pluck|g§o§t̚
ᱢᱮᱫ|eye|m§e§t̚
ᱩᱵ|hair|u§p̚
ᱢᱮᱱᱟᱜᱼᱟ|have|m§e§n§a§k§‹§a|menak’a
ᱟᱠᱟᱫᱼᱟ|?|akat|akat’
ᱦᱤᱡᱩᱜᱼᱟ|come|h§i§j§u§k§‹§a|hijuk’a
ᱥᱩᱱᱭᱚ|zero|sunjɔ

ᱚᱡᱚ|grandfather|ɔd͡ʒɔ
ᱟᱛᱳ|village|ɔto
ᱡᱟᱝ|bone|jaŋ/ɖʒaŋ/d͡ʒa(ː)ŋ/ɟaŋ
ᱥᱮᱝᱜᱮᱞ|fire|seŋɡel/sɛŋɡɛl
ᱯᱳᱱ|four|poːn
ᱳᱞ ᱪᱮᱢᱮᱫ|Ol Cemet|ol cemetˈ

ᱚᱞ ᱪᱤᱠᱤ|Ol Chiki|ɔ§l§ §c§i§k§i|
ᱥᱟᱱᱛᱟᱲᱤ|Santali|s§a§n§t§a§ɽ§i































`

