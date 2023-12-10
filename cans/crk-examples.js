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



autoExpandExamples.crk = `

@ Wikipedia:Plains Cree article
@ https://en.wiktionary.org/wiki/Category:Plains_Cree_lemmas

ᐃᐢᑯᑌᐤ|fire|ˈi§s§koˌ§teː§w|iskotēw|
ᐃᐢᑵᐤ|woman|i§s§ˈkwe:§w|iskwēw|
ᐃᔨᓂᓯᑊ|drake|i§ˈji§ni§ˌsi§p|iyinisip
ᐅᐢᑐᐢᑐᑕᒼ|coughs||ostostotam||x
ᐅᐢᑭᓃᑭᐤ|young man|o§s§ˈki§niː§ˌki§w|oskinîkiw
ᐅᒉᐠ|fisher|o§ˈt͡seː§k|ocêk
ᐆᐦᐅᐤ|owl|oː§ˈh§o§w|ôhow
ᐆᑌᓈᐤ|town||ōtēnāw||x
ᐊᐚᓯᐢ|child|ˈa§waː§ˌsi§s|awâsis
ᐊᐢᑭᕀ|country; year|a§ˈs§ki§j|askiy
ᐊᐢᑭᕁ|bucket|ʌ§s§ˈkɪ§ʰk|askihk
ᐊᐳᕀ|paddle|a§ˈpo§j|apoy
ᐊᑎᒼ|dog|a§ˈti§m|atim|
ᐊᑎᕽ|caribou|a§ˈti§hk|atihk
ᐊᑐᐢᑫᐤ|works||atoskēw||x
ᐊᑖᐚᑲᐣ|fur, pelt|a§ˈtaː§waːˌ§ka§n|atâwâkan
ᐊᑯᐦᑊ|blanket|ʌ§kˈkʊ§ʰ§p|akohp
ᐊᒋᒧᓯᐢ|puppy|a§ˈt͡si§moˌ§si§s|acimosis
ᐊᒍᓯᐢ|arrow|ˈa§t͡so§ˌsi§s|acosis
ᐊᒥᐢᐠ|beaver|a§ˈmi§s§k|amisk
ᐊᓂᐠᐘᒑᐢ|squirrel|a§ˈni§k§wa§ˌt͡saː§s|anikwacâs
ᐊᓄᐦᐨ|today|a§nʊ§h§ʧ|anohc||x
ᐊᓇᐱᣟ|net||anapiy||x
ᐊᓯᐢᑭᕀ|soil|ˈa§siˌ§s§ki§j|asiskiy
ᐊᓯᓂᕀ|stone, bullet|ˈʌ.§sɪˌ§ni§j|asiniy
ᐊᓯᓃᐘᒋᕀ|the Rocky Mountains|ˌa§si§ˈniː§waˌ§t͡si§j|asinîwaciy
ᐊᓵᒼ|snowshoe|ʌ§ˈsɑː§m|asâm
ᐊᔨᓈᓀᐤ|eight|a§ˈyi§naː§ˌneː§w|ayinānēw|
ᐊᔩᑭᐢ|frog, toad|ˈa§jiː§ˌki§s|ayîkis
ᐊᔩᓯᔨᓂᐤ|person, human|ˌʌ.§jiː§ˈsɪ.§jɪ§ˌni§w|ayîsiyiniw
ᐋᐦᑯᓰᐏᑯᒥᐠ|hospital||āhkosīwikomik||x
ᐋᑕᔫᐦᑲᐣ|spirit animal|aː§ˈta§joː§ˌh§ka§n|âtayôhkan
ᐏᔮᐢ|meat|wi§ˈjaː§s|wiyâs
ᐑᐢᑕ|he, she|wiː§s§ˈta|wîsta
ᐑᐢᑕᐚᐤ|they|ˈwiː§s§ta§ˌwaː§w|wîstawâw
ᐑᐦᑎᑯᐤ|wendigo|ˈwiː§h§ti§ˌko§w|wîhtikow
ᐑᑭᒫᑲᐣ|spouse|wiː§ˈki§maː§ˌka§n|wîkimâkan
ᐑᒋᐦ|||wîcih
ᐑᒋᐦᐃᐠ|help me!||wīcihik||x
ᐑᒋᐦᐃᕽ|help him!||wīcihihk||x
ᐑᔭ|he, she|wiː§ˈja|wîya
ᐑᔭᐚᐤ|they|ˈwiː§ja§ˌwaː§w|wîyawâw
ᐘᒋᕀ|mountain, hill|wa§ˈt͡si§j|waciy
ᐘᒐᐢᐠ|muskrat|wʌ§ˈt͡sʌ§s§k|wacask
ᐘᔭᐑᑎᒥᕽ|outside||wayawītimihk||x
ᐚᐏ|egg|waː§ˈwi|wâwi
ᐚᐢᑲᐦᐃᑲᐣ|log cabin|waː§s§ˈka§h§i§ˌka§n|wâskahikan
ᐚᐳᐢ|rabbit, hare|waː§ˈpo§s|wâpos
ᐚᐸᐦᑕᒼ|sees (obj)||wāpahtam||x
ᐚᐸᑯᓃᐤ|flower|waː§ˈpa§ko§ˌniː§w|wâpakonîw
ᐚᐸᒣᐤ|sees (person)||wāpamēw||x
ᐯᔭᐠ|one|peː§ˈja§k|pēyak|
ᐯᔭᑯᓵᑊ|eleven|peː§ˈja§ko§ˌsaː§p|pêyakosâp
ᐱᐦᑯ|ash, dust|pi§ˈh§ko|pihko
ᐱᐦᔦᐤ|partridge|pi§h§ˈjeː§w|pihyêw
ᐱᐦᔦᓰᐢ|||||x
ᐱᑭᐤ|resin, gum|pi§ˈki§w|pikiw
ᐱᒥᐸᐦᑖ|run!|pɪ§mɪ§ba§h§tɑː|pimipahtā||x
ᐱᒧᐦᑌᐤ|walks||pimohtēw||x
ᐱᒫᑎᓯᐤ|lives||pimātisiw||x
ᐱᓯᐢᑭᐤ|animal|ˈpi§si§s§ˌki§w|pisiskiw
ᐱᓯᐤ|lynx|pi§ˈsi§w|pisiw
ᐲᐚᐱᐢᐠ|metal, iron|ˈpiː§waː§ˌpi§s§k|pîwâpisk
ᐲᐚᐱᐢᑯᐢ|wire, needle, coin|piː§ˈwaː§pi§s§ˌko§s|pîwâpiskos
ᐲᑲᓄᐏᔨᓂᐤ|Piegan person|piː§ˌka§no§ˈwi§ji§ˌni§w|pîkanowiyiniw
ᐲᓯᒧᐦᑳᐣ|clock||pīsimohkān||x
ᐴᓂᐱᒫᑎᓯᐤ|dies||pōnipimātisiw||x
ᐴᓯᐤ|embarks||pōsiw||x
ᐸᐦᑵᓯᑲᐣ|fried bread|pa§h§kˈweː§si§ˌka§n|pahkwêsikan
ᐸᑳᐣ|nut|pʌ§ˈkɑː§n|pakân
ᐹᐏᐢᑎᐠ|waterfall, rapids|ˈpaː§wi§s§ˌti§k|pâwistik
ᐹᐢᑭᓯᑫᐤ|shoots||pāskisikēw||x
ᐹᐢᑭᓯᑲᐣ|gun|paː§s§ˈki§si§ˌka§n|pāskisikan|
ᐹᐦᐱᐤ|laughs||pāhpiw||x
ᑌᐸᑯᐦᑊ|seven|ˈteː§pa§ˌko§h§p|tēpakohp|
ᑌᐹᐸᐦᑕᒼ|can see enough||tēpāpahtam||x
ᑎᐱᐢᑳᐤ|night|ˈti§pi§s§ˌkaː§w|tipiskâw
ᑎᐸᐦᐃᑲᐣ|unit of measurement|ti§ˈpa§h§i§ˌka§n|tipahikan
ᑕᑯᓯᐣ|arrives||takosin||x
ᑖᓂᓯ|how?|ˈtaː§ni§ˌsi§/tɑːnɪʃɪ (tānisi)|
ᑫᐦᑌ|old|keː§ˈʰ§teː|kêhtê
ᑫᑭᓭᑊ|in the morning||kēkisēp||x
ᑫᑲ ᒥᑖᑕᐦᐟ|nine||kēka-mitātaht||x
ᑫᑳᐨ|almost|keː§ˈkaː§t͡s|kêkâc
ᑭᐢᑫᔨᒣᐤ|knows||kiskēyimēw||x
ᑭᐦᐃᐤ|eagle|kɪ§ˈh§i§w|kihiw
ᑭᑿᣟ|what|ki§kwa§j|||x
ᑭᒧᐘᐣ|is raining||kimowan||x
ᑭᓀᐱᐠ|snake|ˈki§neː§ˌpi§k|kinêpik
ᑭᓄᓭᐤ|fish|ˈkɪ.§nʊ§ˌseː§w|kinosēw|
ᑭᓭᔨᓂᐤ|old man|kɪ§ˈseː.§jɪ§ˌni§w|kisêyiniw
ᑭᔮᐢᐠ|seagull|ˈki§jaː§s§k|kiyâsk
ᑮᐢᐱᐣ|if|kiː§s§ˈpi§n|kîspin
ᑮᐢᑕ|you|kiː§s§ˈta|kîsta
ᑮᐢᑕᐚᐤ|you (pl)|ˈkiː§s§ta§ˌwaː§w|kîstawâw
ᑮᐢᑕᓇᐤ|we|ˈkiː§s§ta§ˌna§w|kîstanaw
ᑮᑭᓭᑊ|in the morning||kīkisēp||x
ᑮᓯᐠ|sky|kiː§ˈsi§k|kîsik
ᑮᓯᑳᐤ|day|ˈkiː§si§ˌkaː§w|kîsikâw
ᑮᔭ|you|kiː§ˈja|kîya
ᑮᔭᐚᐤ|you (pl)|ˈkiː§ja§ˌwaː§w|kîyawâw
ᑮᔮᓇᐤ|we|ˈkiː§jaː§ˌna§w|kîyânaw
ᑮ ᐚᐸᒣᐤ|he saw him||kī-wāpamēw||x
ᑰᓇ|snow|koː§ˈnʌ|kôna
ᑲᔮᐢ|long ago|ka§ˈjaː§s|kayâs
ᑳᐦᑫᐘᐠ|dried meat|ˈkaː§h§keː§ˌwa§k|kâhkêwak
ᒌ|interrogative particle|ˈt͡siː|cî
ᒌᑲᐦᐃᑲᐣ|axe||cīkahikan||x
ᒣᐢᑲᓇᐤ|road, path|ˈmeː§s§ka§ˌna§w|mêskanaw
ᒣᑕᐍᐤ|plays||mētawēw||x
ᒣᒁᐨ|in the meantime|meː§ɡwɑː§t͡s|mēkwāc||x
ᒥᐢᐳᐣ|is snowing||mispon||x
ᒥᐢᑎᐠ|tree||mistik||x
ᒥᐢᑕᑎᒼ|horse|ˈmi§s§ta§ˌti§m|mistatim|
ᒥᐢᑖᐯᐤ|giant|ˈmi§s§taː§ˌpeː§w|mistâpêw
ᒥᐢᑿᒥᕀ|ice|ˈmi§s§kwa§ˌmi§j|miskwamiy
ᒥᐦᑯ|blood|mi§ˈh§ko|mihko
ᒥᑖᑕᐦᐟ|ten||mitātaht||x
ᒥᓂᐢᑎᐠ|island|ˈmi§ni§s§ˌti§k|ministik
ᒥᓯᑯᐢ|mother-in-law|ˈmi§si§ˌko§s|misikos
ᒥᓵᐤ|is big||misāw||x
ᒥᔦᐤ|gives to||miyēw||x
ᒥᔪᐢᐸᑿᐣ|tastes good||miyospakwan||x
ᒥᔼᓯᐣ|is nice||miywāsin||x
ᒦᑭᐚᐦᑉ|teepee|ˈmiː§ki§ˌwaː§h§p|mîkiwâhp
ᒦᑭᓯᐢ|bead|ˈmiː§ki§ˌsi§s|mîkisis
ᒦᑿᐣ|feather|miː§ˈkwa§n|mîkwan
ᒦᒋᒫᐳᕀ|soup, broth|miː§ˈt͡si§maː§ˌpo§j|mîcimâpoy
ᒦᓂᐢ|berry|miː§ˈni§s|mînis
ᒦᓂᓵᐳᕀ|berry soup/juice|miː§ˈni§saː§ˌpo§j|mînisâpoy
ᒦᓇ|and, also|miː§ˈna|mîna
ᒧᐢᑐᐢ|cow, buffalo|mo§s§ˈto§s|mostos
ᒨᐦᑯᒫᐣ|knife|ˈmoː§h§ko§ˌmaː§n|mōhkomān|
ᒨᔁ|moose|moː§ˈsʷʌ|mōswa|
ᒪᐢᑫᐠ|swamp|ma§s§ˈkeː§k|maskêk
ᒪᐢᑭᐦᑭᐏᐢᑵᐤ|nurse|ˌma§s§ki§ˈh§ki§wi§s§ˌkweː§w|maskihkiwiskwêw
ᒪᐢᑭᐦᑭᐏᔨᓂᐤ|doctor|ma§s§ˌki§h§ki§ˈwi§ji§ˌni§w|maskihkiwiyiniw
ᒪᐢᑭᐦᑭᕀ|herb, medecine|ˈma§s§ki§ˌh§ki§j|maskihkiy
ᒪᐢᑭᓯᐣ|shoe|ˈma§s§ki§ˌsi§n|maskisin|
ᒪᐢᑯᓯᕀ|blade of grass|ˈma§s§ko§ˌsi§j|maskosiy
ᒪᐢᑿ|bear|ma§s§ˈkwa|maskwa|
ᒪᐦᑖᒥᐣ|maize grain|ˈma§h§taː§ˌmi§n|mahtâmin
ᒪᐦᑫᓰᐢ|fox; coyote|ˈma§h§keː§ˌsiː§s|mahkêsîs
ᒪᓯᓇᐦᐃᑲᐣ|paper, book|ˌma§si§ˈna§h§i§ˌka§n|masinahikan|
ᒫᑿ|diver, loon|maː§ˈkwa|mâkwa
ᓀᐓ|four|neː§ˈwo|nēwo|
ᓂᐢᑌᐢ|my older brother||nistēs||x
ᓂᐢᑐ|three|ni§s§ˈto|nisto|
ᓂᐢᑯᑕᑲᣟ|my coat|ni§s§ko§ta§ka§j|||x
ᓂᐢᑲ|goose|nɪ§s§ˈkʌ|niska
ᓂᐱᐤ|dies||nipiw||x
ᓂᐱᕀ|water|ni§ˈpi§j|nipiy|
ᓂᐸᐦᐁᐤ|kills||nipahēw||x
ᓂᐹᐤ|sleeps||nipāw||x
ᓂᐹᐹ|my father||nipāpā||x
ᓂᑭᐠ|otter|ni§ˈki§k|nikik
ᓂᑯᑤᓯᐠ|six|ni§ˈko§twaː§ˌsi§k|nikotwāsik||
ᓂᑲᒧ!|sing! (now)||nikamo!||x
ᓂᑲᒨᐦᑲᐣ!|sing! (later)||nikamōhkan!||x
ᓂᑳᐏᕀ|my mother||nikāwiy||x
ᓂᒥᐢ|my older sister||nimis||x
ᓂᒫᒫ|my mother||nimāmā||x
ᓂᓰᒥᐢ|my younger brother/sister||nisīmis||x
ᓂᓵᑭᐦᐋᐤ|I love her/him|nɪ§sɑː§ɡɪ§h§ɑː§w|nisākihāw||x
ᓂᔮᓇᐣ|five|ˈni§jaː§ˌna§n|niyānan|
ᓃᐢᑕ|I, me|niː§s§ˈta|nîsta
ᓃᐢᑕᓈᐣ|we|ˈniː§s§ta§ˌnaː§n|nîstanân
ᓃᐱᓯᕀ|willow|ˈniː§pi§ˌsi§j|nîpisiy
ᓃᐱᕀ|leaf|niː§ˈpi§j|nīpiy|
ᓃᓱ|two|niː§ˈso|nīso|
ᓃᔭ|I|niː§ˈja|nîya
ᓃᔭᓈᐣ|we|ˈniː§ja§ˌnaː§n|nîyanân
ᓅᐦᑖᐏᕀ|my father||nōhtāwiy||x
ᓅᑎᓇᑳᐣ|enemy|noː§ˈti§naː§ˌka§n|nôtinâkan
ᓅᑐᑵᓯᐤ|old woman|noː§ˈto§kweː§ˌsi§w|nôtokwêsiw
ᓅᓭᐱᐦᔦᐤ|prairie chicken|noː§ˈseː§pi§h§ˌjeː§w|nôsêpihyêw
ᓇᒨᔭ|not|ˈna§moː§ˌja|namôya
ᓇᒪ|not|na§ˈma|nama
ᓇᒪᑭᑿᣟ|nothing|na§ma§ki§kwa§j||
ᓈᐯᐢᑎᒼ|stallion|ˈnaː§peː§s§ˌti§m|nâpêstim
ᓈᐯᐤ|man|nɑː§ˈpeː§w|nāpēw|
ᓭᐦᑫᐤ|car||sēhkēw||x
ᓰᐱᕀ|river|siː§ˈpi§j|sīpiy|
ᓰᐱᣟ|river|siː§ˈpi§j|sīpiy|
ᓰᓰᑊ|duck|siː§ˈsiː§p|sîsîp
ᓲᐏᓂᑲᐣ|sugar||sōwinikan||x
ᓲᑳᐤ|sugar||sōkāw||x
ᓲᓂᔮᐤ|money|ˈsoː§ni§ˌjaː§w|sōniyāw|
ᓴᑲᐦᐃᑲᐣ|nail||sakahikan||x
ᓴᑳᐤ|bush, woods|sa§ˈkaː§w|sakâw
ᓵᑭᐦᐋᐤ|he/she is loved|sɑː§ɡɪ§h§ɑː§w|sākihāw)||x
ᓵᑲᐦᐃᑲᐣ|lake|saː§ˈka§h§i§ˌka§n|sākahikan|
ᔦᑲᐤ|sand|jeː§ˈka§w|yêkaw
ᔫᑎᐣ|wind|joː§ˈti§n|yōtin|
ᕒᐁᑎᔪ|radio|r§eː§ti§jo|rētiyo||x

ᓀᐦᐃᔭᐍᐏᐣ|Plains Cree||Nēhiyawēwin
ᓀᐦᐃᔭᐍᒧᐏᐣ|Northern Plains Cree||Nēhiyawēmowin


































`

