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





autoExpandExamples.tru = `

@ wiktionary

ـܰܢܐ|this|-a§no§–|-ano||ـܢܐ
ـܰܢܝ|these|-a§n§i|-ani||ـܢܝ
ـܰܬ݂ܶܐ|this|-a§θe§–|-aṯe||ـܬܐ
ܐܳܒ|August|o§b|ob||ܐܒ
ܐܰܒܪܳܐ|son|a§b§ro§–|abro||ܐܒܪܐ
ܐܰܕܡܐ|blood|a§d§mo§–|admo||ܐܕܡܐ
ܐܰܕ݂ܢܐ|ear||aḏno||ܐܕܢܐ
ܐܳܕ݂ܰܪ|March|o§ða§r|oḏar||ܐܕܪ
ܐܰܚܘܢܳܐ|brother|a§ħ§u§no§–|aḥuno|‎|ܐܚܘܢܐ
ܐܰܚܢܰܐ|we|a§ħ§na§–|aḥna||ܐܚܢܐ
ܐܝـܝܰܪ|May|–§i§–§ja§r|iyar||ܐܝـܝܪ
ܐܝܕ݂ܳܐ|hand||iḏo||ܐܝܕܐ
ܐܝܠܷܢ|September|–§i§lə§n|ilën||ܐܝܠܢ
ܐܰܠܦܐ|thousand|a§l§fo§–|alfo||ܐܠܦܐ
ܐܠܦܐ|thousand|a§l§fo§–|alfo
ܐܳܢܳܐ|I|o§no§–|ono||ܐܢܐ
ܐܰܪܒܥܐ|four|a§r§b§ʕo§–|arbco||ܐܪܒܥܐ
ܐܰܪܒܥܝ|forty|a§r§b§ʕ§i|arbci||ܐܪܒܥܝ
ܐܰܪܒܰܥܣܰܪ|fourteen|a§r§ba§ʕ§sa§r|arbacsar||ܐܪܒܥܣܪ
ܐܰܪܝܳܐ|lion||aryo||ܐܪܝܐ
ܐܷܫܘܷܛ|February|ə§ʃ§wə§tˤ|ëšwëṭ||ܐܫܘܛ
ܐܷܫܬܐ|six|ə§ʃ§to§–|ëšto||ܐܫܬܐ
ܐܷܫܬܝ|fifty|ə§ʃ§t§i|ëšti||ܐܫܬܝ
ܐܷܫܬܰܥܣܰܪ|sixteen|ə§ʃ§ta§ʕ§sa§r|ëštacsar||ܐܫܬܥܣܪ
ܐܰܬ̣ܬܳܐ|wife||aṭto||ܐܬܬܐ
ܐܰܕܠܰܠܝܐ|tonight||adlalyo||x
ܐܰܝܕܰܪܒܐ|how||aydarbo||x
ܐܰܪܢܘܘܳܐ|rabbit||arnuwo||x
ܐܰܬ݂ܡܷܠ|yesterday||aṯmël||x
ܐܰܬ݂ܬܐ|woman||aṯto||x
ܐܳܬ݂ܐ|sign||oṯo||x
ܐܶܡܐ|mother||emo||x
ܐܷܫܡܐ|name||ëšmo||x
ܒ̣ܝܝܰܢܰܐ|Vienna||Viyana||x
ܒܰܒܐ|father|ba§b§o|||ܒܒܐ
ܒܝܪܰܐ|beer||bira||x
ܒܰܪܟܳܐ|knee||barko||ܒܪܟܐ
ܒܰܪܬ݂ܳܐ|daughter|ba§r§θo§–|barṯo||ܒܪܬܐ
ܒܰܒܰܗ|her father||baba||x
ܒܰܒܶܗ|his father||babe||x
ܒܰܗܪܐ|light||bahro||x
ܒܳܬܶܐ|houses||bote||x
ܒ݂ܝܠܠܰܐ|villa||villa||x
ܓܰܘܳܐ|belly||gawo||ܓܘܐ
ܓܰܘܪܳܐ|man, husband|ɡa§w§ro§–|ɡawro||ܓܘܪܐ	
ܓܘܫܡܳܐ|body|g§u§ʃ§mo§–|gušmo||ܓܘܫܡܐ
ܓܰܠܕܳܐ|skin||galdo||ܓܠܕܐ
ܓܪܷܫܠܰܗ|she pulled||grëšla||x
ܓܪܷܫܠܶܗ|he pulled||grëšle||x
ܓ݂ܰܠܛܐ|mistake||ġalṭo||x
ܓ݂ܱܠܱܒܶܐ|many||ġäläbe||x
ܔܷܪܔܐ|George|d͡ʒə§r§d͡ʒo§–|jërjo|ܔܪܔܐ
ܔܰܙܘܶܐ|coffee pot|d͡ʒa§z§we§–|jazwe||x
ܕܘܟܬܐ|place||dukṯo||x
ܕܰܩܩܰܐ|minute|da§q§qa§–|daqqa||ܕܩܩܐ
ܕܪܘܥܳܐ|arm||druco||ܕܪܘܥܐ
ܕܰܘܡܐ|tree||dawmo||x
ܕܰܪܓ݂ܐ|stair||darġo||x
ܗܰܘܐ|that|ha§wo§–|hawo||ܗܘܐ
ܗܰܝܐ|that|ha§jo§–|hayo||ܗܝܐ
ܗܝـܝܶܐ|he|h§i§–§ye§–|||ܗܝܝܐ
ܗܝـܝܰܐ|she|h§i§–§ya§–|||ܗܝܝܐ
ܗܰܢܳܐ|this|ha§no§–|hano||ܗܢܐ
ܗܰܢܝ|these|ha§n§i§–|hani||ܗܢܝ
ܗܰܢܷܟ|those|ha§nə§k|hanëk||ܗܢܟ
ܗܷܢܢܶܐ|they|hə§n.§ne§–|hënne||ܗܢܢܐ
ܗܰܬ|you (s)|ha§t|hat||ܗܬ
ܗܰܬ݂ܶܐ|this|ha§θe§–|haṯe||ܗܬܐ
ܗܰܬܘ|you (pl)|ha§t§u|hatu||ܗܬܘ
ܗܶܫ|still||heš||x
ܘܰܥܕܐ|appointment||wacdo||x
ܙ̰ܱܒܰܫܶܐ|watermelon||žäbaše||x
ܙܰܒܢܐ|time||zabno||x
ܚܰܐ|one (m)|ħa§–|ḥa||ܚܐ
ܚܕ݂ܐ|one (f)|ħ§ðo§–|ḥḏo||ܚܕܐ
ܚܰܒܘܫܳܐ|apple|ħa§b§u§ʃo§–|ḥabušo||ܚܒܘܫܐ
ܚܕ݂ܰܥܣܰܪ|eleven|ħ§ða§ʕ§sa§r|ḥḏacsar‎||ܚܕܥܣܪ
ܚܘܠܬܐ|maternal aunt||ḥulto||ܚܘܠܬܐ
ܚܙܝܪܷܢ|June|ħ§z§i§rə§n|ḥzirën||ܚܙܝܪܢ
ܚܳܠܐ|maternal uncle||ḥolo||ܚܠܐ
ܚܡܳܪܳܐ|donkey|ħ§mo§ro§–|ḥmoro||ܚܡܪܐ
ܚܰܡܪܳܐ|wine|ħa§m§ro§–|ḥamro||ܚܡܪܐ
ܚܰܡܫܐ|five|ħa§m§ʃo§–|ḥamšo||ܚܡܫܐ
ܚܰܡܫܝ|fifty|ħa§m§ʕ§i|ḥamši||ܚܡܫܝ
ܚܰܡܫܰܥܣܰܪ|fifteen|ħa§m§ʃa§ʕ§sa§r|ḥamšacsar||ܚܡܫܥܣܪ
ܚܳܬ݂ܳܐ|sister|ħo§θo§–|ḥoṯo||ܚܬܐ
ܚܰܠܘܐ|milk||ḥalwo||x
ܛܷܒܒܰܟ݂|August|tə§b§ba§x|ṭëbbax||ܛܒܒܟ
ܛܰܓ݂ܢܳܐ|pan, frying pan|ta§ɣ§no§–|ṭaġno||ܛܓܢܐ
ܛܰܝܳܐ|muslim|tˤa§jo§–|ṭayo||ܛܝܐ
ܝܰܘܡܳܐ|day|ja§w§mo§–|yawmo||ܝܘܡܐ
ܝܰܪܚܳܐ|month|ja§r§ħo§–|yarḥo||ܝܪܚܐ
ܟܰܠܒܳܐ|dog|ka§l§bo§–|kalbo||ܟܠܒܐ
ܟܳܢܘܢ ܚܰܪܳܝܳܐ|January|ko§n§u§n§ §ħa§ro§jo§–|konun ḥaroyo||ܟܢܘܢ ܚܪܝܐ
ܟܳܢܘܢ ܩܰܡܳܝܳܐ|December|ko§n§u§n§ §qa§mo§jo§–|konun qamoyo||ܟܢܘܢ ܩܡܝܐ
ܟܬ݂ܳܒ݂ܳܐ|book|k§θo§wo§–|kθowo||ܟܬܒܐ
ܟܰܬܦܳܐ|shoulder||katfo||ܟܬܦܐ
ܟܰܓ݂ܰܬ|paper||kaġat||x
ܟ݂ܰܒܪܐ|word||xabro||x
ܠܰܚܡܳܐ|bread|la§ħ§mo§–|laḥmo||ܠܚܡܐ
ܠܝܫܳܢܳܐ|tongue, language||lišono||ܠܝܫܢܐ
ܡܐ|hundred|mo§–|mo||ܡܐ
ܡܘܚܐ|brain||muḥo||ܡܘܚܐ
ܡܘܟܠܐ|food||muklo||x
ܡܰܬ݂ܶܐ|two hundred|ma§θe§–|maṯe||ܡܬܐ
ܡܰܠܟܘܬ݂ܐ|kingdom||malkuṯo||x
ܢܚܝܪܳܐ|nose||nḥiro||ܢܚܝܪܐ
ܢܝܣܷܢ|April|n§i§sə§n|nisën||ܢܝܣܢ
ܣܘܪܓܳܕ݂ܳܐ|calendar|s§u§r§ɡo§ðo§–|surgoḏo||ܣܘܪܓܕܐ
ܣܰܥܰܐ|hour|sa§ʕa§–|saca||ܣܥܐ
ܫܳܥܬ݂ܳܐ|hour|ʃo§ʕ§θo§–|šocṯo||ܫܥܬܐ
ܣܰܥܪܳܐ|hair||sacro||ܣܥܪܐ
ܣܰܬ݂ܘܳܐ|winter|sa§θ§wo§–|saṯwo||ܣܬܘܐ
ܣܷܣܝܐ|horse|sə§s§j§o|sësyo||x
ܥܰܛܡܳܐ|bone, thigh||caṭmo||ܥܛܡܐ
ܥܰܝܢܳܐ|eye||cayno||ܥܝܢܐ
ܥܰܟܣܘܢܳܐ|elbow||caksuno||ܥܟܣܘܢܐ
ܥܰܡܡܐ|paternal uncle||cammo||ܥܡܡܐ
ܥܰܡܬ̣ܐ|paternal aunt||camṯo||ܥܡܬܐ
ܥܰܣܪܐ|ten|ʕa§sˤ§ro§–|casro||ܥܣܪܐ
ܥܷܣܪܝ|twenty|ʕə§ʃ§r§i|cësri||ܥܣܪܝ
ܥܰܪܩܘܘܐ|heel||carquwo||ܥܪܩܘܘܐ
ܥܰܨܪܝـܝܶܐ|evening||caṣriye||x
ܦܶܡܳܐ|mouth||femo||ܦܡܐ
ܦܪܳܣܩܳܠܳܐ|radio|f§ro§s§qo§lo§–|frosqolo||ܦܪܣܩܠܐ
ܦܳܬ̣ܳܐ|face||foṭo||ܦܬܐ
ܦ݁ܠܰܢ|plan||plan||x
ܨܰܕܪܳܐ|chest||ṣadro||ܨܕܪܐ
ܨܰܘܥܳܐ|finger||ṣawco||ܨܘܥܐ
ܨܰܢܝـܝܶܐ|second|sˤa§n§i§–§je§–|ṣaniye||ܨܢܝـܝܐ
ܪܦܳܦܳܐ|a second|r§fo§fo§–|rfofo||ܪܦܦܐ
ܨܰܦ݂ܪܳܐ|tomorrow|sˤa§f§ro§–|ṣaf݂ro||ܨܦܪܐ
ܨܷܪܬܳܐ|picture, image|sˤə§r§to§–|ṣërto||ܨܪܬܐ
ܩܕ݂ܳܠܳܐ|neck||qḏolo||ܩܕܠܐ
ܩܰܘܪܳܐ|grave, cemetery|qa§w§ro§–|qawro||ܩܘܪܐ
ܩܰܛܷܢܬܳܐ‎|minute|qa§tˤə§n§to§–|qaṭënto‎||ܩܛܢܬܐ
ܩܰܝܛܳܐ|spring|qa§j§tˤo§–|qayṭo||ܩܝܛܐ
ܩܠܝܕ݂ܐ|key||qliḏo||ܩܠܝܕܐ
ܩܡܶܣܬܳܐ|shirt, robe|q§mə§s§tɒ§–|qmesto||ܩܡܣܬܐ
ܩܰܚܘܰܐ|coffee||qaḥwa||x
ܪܰܒܷܥ|Spring|ra§bə§ʕ|rabëc||ܪܒܥ
ܪܰܓ݂ܠܳܐ|foot||raġlo||ܪܓܠܐ
ܪܝܫܳܐ|head||rišo||ܪܝܫܐ
ܫܰܢܛܰܐ|bag|ʃa§n.§tˤa§–|šanṭa||ܫܢܛܐ
ܫ̰ܰܢܛܰܐ|bag|t͡ʃa§n§tˤa§–|čanṭa||ܫ̰ܢܛܐ
ܫܰܒܬ݂ܳܐ|week, Saturday|ʃa§b§θo§–|šabṯo|ܫܒܬܐ
ܫܘܚܠܳܦܳܐ|season|ʃ§u§ħ§lo§fo§–|šuḥlofo||ܫܘܚܠܦܐ
ܫܰܘܥܐ|seven|ʃa§w§ʕo§–|šawco||ܫܘܥܐ
ܫܰܘܥܝ|seventy|ʃa§w§ʕ§i|šawci||ܫܘܥܝ
ܫܘܰܥܣܰܪ|seventy|ʃ§wa§ʕ§sa§r|šwacsar||ܫܘܥܣܪ
ܫܠܳܡܐ|hello||šlomo||ܫܠܡܐ
ܫܳܩܳܐ|leg||šoqo||ܫܩܐ
ܫܰܬܳܐ|year|ʃa§to§–|šato||ܫܬܐ
ܬܠܳܬ݂ܐ|three|t§lo§θo§–|tloṯo||ܬܠܬܐ
ܬܠܶܬ݂ܝ|thirty|t§le§θ§i|tleṯi||ܬܠܬܝ
ܬܠܷܬ݂ܡܐ|three hundred|t§lə§θ§mo§–|tlëṯmo||ܬܠܬܡܐ
ܬܠܳܬ݂ܰܥܣܰܪ|thirteen|t§lo§θa§ʕ§sa§r|tloṯacsar||ܬܠܬܥܣܪ
ܬܰܡܷܙ|July|ta§mə§z|tamëz||ܬܡܙ
ܬܡܳܢܝ|eighty|t§mo§n§i|tmoni||ܬܡܢܝ
ܬܡܰܢܝܐ|eight|t§ma§n§jo§–|tmanyo||ܬܡܢܝܐ
ܬܡܳܢܰܥܣܰܪ|eighteen|t§mo§na§ʕ§sa§r|tmonacsar||ܬܡܢܥܣܪ
ܬܪܶܐ|two|t§re§–|tre||ܬܪܐ
ܬܪܰܥܣܰܪ|twelve|t§ra§ʕ§sa§r|tracsar||ܬܪܥܣܪ
ܬܷܫܥܐ|nine|tə§ʃ§ʕo§–|tëšco||ܬܫܥܐ
ܬܷܫܥܝ|ninety|tə§ʃ§ʕ§i|tëšci||ܬܫܥܝ
ܬܫܰܥܣܰܪ|nineteen|t§ʃa§ʕ§sa§r|tšacsar||ܬܫܥܣܪ
ܬܷܫܪܳܝܳܬ݂ܶܐ|autumn|tə§ʃ§ro§jo§θe§–|tëšroyoṯe||ܬܫܪܝܬܐ
ܬܷܫܪܷܢ ܚܰܪܳܝܳܐ|November|tə§ʃ§rə§n§ §ħa§ro§jo§–|tëšrën ḥaroyo||ܬܫܪܢ ܚܪܝܐ
ܬܷܫܪܷܢ ܩܰܡܳܝܳܐ|October|tə§ʃ§rə§n§ §qa§mo§jo§–|tëšrën qamoyo||ܬܫܪܢ ܩܡܝܐ
ܬܰܠܓܐ|snow||talgo||x
ܕܰܗܘܐ|gold|da§h§wo§–||||x

ܫ̰ܰܟܶܬ|jacket|t͡ʃa§ke§t|caket||x
ܟܱܫ̰ܰܠ|bald head|kə§t͡ʃa§l|käčal||x
ܬܰܠܰܒ݂ܝܙܝܳܢ|television|ta§la§v§i§z§jo§n|talavizyon||x
ܡܰܛܒܰܟ݂|kitchen|ma§tˤ§ba§x|maṭbax||x

ܡܷܠܠܶܗ|nation|məlle|mëlle
ܡܷܪܪܶܗ|they said|mərre|mërr












































`

