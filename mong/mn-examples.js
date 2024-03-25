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




autoExpandExamples.mn = `

@ wiktionary


ᠠᠦ᠋ᠲ᠋ᠣᠪᠦ᠋ᠰ|bus|a§w§̜tʰ§ɔ§ˈp§ʊ§s||автобyс
ᠠᠩᠨᠠᠬᠤ|to hunt||agnakh|агнах
ᠠᠪᠢᠶᠠᠰ||␣
ᠠᠪᠤ|father|aː§w̜§–|aav|аав
ᠠᠪᠬᠤ|to go, leave|a§w§ə§x||авах
ᠠᠭᠠᠭ|strength|–§–§ˈaː§k||ааг
ᠠᠭᠤᠢ ᠶᠢᠨ ᠰᠤᠳᠤᠯᠤᠯ||
ᠠᠭᠤᠯᠠ|mountain|–§–§ʊː§ɮ§–|aɢʊla|уул
ᠠᠮᠠ|mouth|am|am|ам
ᠠᠮᠠᠨ ᠠᠶᠠᠯᠭᠤ ᠰᠤᠳᠤᠯᠤᠯ||
ᠠᠮᠢᠨ ᠰᠤᠳᠤᠯᠤᠯ||
ᠠᠮᠢᠰᠬᠤᠯᠠᠬᠤ|to breathe|amʲsɢəɮəx|amisgalakh|амьсгалах
ᠠᠮᠢᠲᠠᠨ|animal|æm.tə̠ɴ̟|ȧmĭtan|амьтан
ᠠᠮᠧᠷᠢᠺᠠ ᠶᠢᠨ ᠨᠢᠭᠡᠳᠦᠭᠰᠡᠨ ᠤᠯᠤᠰ||␣|
ᠠᠮᠧᠷᠢᠺᠠ||␣|
ᠠᠯᠠᠬᠤ|to kill||alakh|алах
ᠠᠯᠬᠤᠬᠤ|to step||alkhakh|алхах
ᠠᠯᠲᠠ|gold|a§ɮ§tʰ§–||алт
ᠠᠯᠲᠠᠢ||
ᠠᠯᠲᠠᠨ|golden|aɮtʰəŋ||алтан
ᠠᠲᠠ|gelding|ata
ᠠᠳᠠ|demon|a§d§a
ᠠᠴᠢᠬᠤ|to load, burden|ˈat͡ɕʰix||ачих
ᠠᠶ᠋ᠢᠮᠠᠭ||
ᠠᠶᠢᠮᠠᠭ|tribe|æː.§–§–§m§ə§k̠||аймаг
ᠠᠶᠤᠬᠤ|to fear||aikh|айх
ᠠᠷᠠᠰᠤ|skin|arʲs||арьс
ᠠᠷᠠᠳ|people|arăd|ard|ард
ᠠᠷᠪᠠ|ten|a§rᵊ§w̜§–||арав
ᠠᠷᠰᠯᠠᠩ|lion|
ᠠᠷᠴᠠ||␣|
ᠠᠺᠠᠳᠧᠮᠢᠴᠢ||␣|
ᠡᠨᠡ|this|en|ene|энэ
ᠡᠨᠳᠡ|here|e§n§t§–|end|энд
ᠡᠪᠡᠰᠦ|grass|ows|övs|өвс
ᠡᠪᠡᠷ|horn|ewər|ever|эвэр
ᠡᠬᠡ|mother|i§x§–|ekh|эх
ᠡᠬᠡᠨᠡᠷ|wife|ˈe§x§–§n§e§r̥|ekhner|эхнэр
ᠡᠭᠦᠯᠡ|cloud|–§–§uː§ɮ§–|üül|үүл
ᠡᠮᠡᠭᠲᠡᠢ|woman|e§m§ə§ɡ§tʰ§e|emegtei|эмэгтэй
ᠡᠮᠦᠨ᠎ᠡ|south|ˈɵmn||өмнө
ᠡᠮᠬᠦᠬᠦ|to bite||ümkhekh|үмхэх
ᠡᠯᠡᠰᠦ|sand||els|элс
ᠡᠯᠢᠭᠡ|liver|iɮəɡ|eleg|элэг
ᠡᠯᠴᠢᠨ ᠦ ᠭᠠᠵᠠᠷ||
ᠡᠯᠵᠢᠭᠡ|donkey|ˈi§ɮ§t͡ɕ§i§k§–||илжиг
ᠡᠳᠦᠭᠡ|now||eduge
ᠡᠳᠦᠷ|day|ˈɵ§t§ə§r̥|ödör|өдөр
ᠡᠴᠢᠭᠡ|father||etseg|эцэг
ᠡᠵᠢ|mother|eːt͡ʃ|eǰi
ᠡᠷᠭᠢᠬᠦ|to turn|i§r§ɡ§i§x§–|ergekh|эргэх
ᠡᠷᠴᠢᠰ||
ᠢᠨᠢᠶᠡᠬᠦ|to laugh||ineekh|инээх
ᠢᠪᠡᠭᠡᠯ|care, aid|i§w§eː§§§ɮ
ᠢᠮᠠᠭ᠎ᠠ|goat|ja§m§–§–§–§aː|imag·a
ᠢᠯᠡᠳᠬᠡᠯ|report|ˈi§ɮ§§tʰ§k§e§ɮ
ᠢᠳᠡᠬᠦ|to eat|i§t§ə§x§–|idekh|идэх
ᠢᠷᠡᠬᠦ|to come|i§r§ə§x§–|irekh|ирэх
ᠣ᠋ᠣ||
ᠣᠢ|forest||oi|ой
ᠣᠭᠲᠠᠷᠭᠤᠢ|sky||ogtorgui|огторгуй
ᠣᠯᠠᠨ|many|ɔ§ɮ§ə§ŋ|olon|олон
ᠣᠯᠤᠰᠤ|rope||ols|олс
ᠣᠳᠤ|star|ɔt|od|од
ᠣᠶᠤᠬᠤ|to sew|ɔ.§j§ʊ§χ§–|oyokh|оёх
ᠣᠷᠤᠰ|Russian|ɔ.§r§ʊ§s|oros|орос
ᠣᠷᠳᠤ|camp|ɔ§r§d§ʊ||орд
ᠤᠤ|final interrogative particle|ˈʊː
ᠤᠤᠭᠤᠬᠤ|to drink|–§–§–§ʊː§χ§–|uukh|уух
ᠤᠨᠤᠬᠤ|to ride a horse|ʊnəx|unakh|унах
ᠤᠨᠲᠠᠬᠤ|to sleep|ʊntʰax|untakh|унтах
ᠤᠭᠠᠬᠤ|to wash||ugaakh|угаах
ᠤᠯᠠᠭᠠᠨ|red|ˈʊ§ɮ§–§–§aː§ŋ|ulaan|улаан
ᠤᠯᠠᠭᠠᠨᠪᠠᠭᠠᠲᠤᠷ|Ulaanbaatar|ʊ§ɮ§–§–§aː§n§p§–§–§a§t§–§r||Улаанбаатар
ᠤᠯᠠᠭᠠᠨᠴᠠᠪᠬᠣᠲᠠ||
ᠤᠯᠢᠶᠠᠰᠤᠲᠠᠢ||
ᠤᠯᠤᠰ||␣|
ᠤᠰᠤ||␣
ᠤᠰᠤᠨ|water|ˈʊs|us|ус
ᠤᠲᠠᠰᠤ|phone|ʊtᵊs|utas|утас
ᠤᠲᠤᠭ ᠠ|smoke|ʊtʰa|utaa|утаа
ᠤᠳᠬ᠎ᠠ|meaning|ʊ§tʰ§əɢ§–§–|ʊdx·a
ᠤᠵᠡᠭᠦᠯᠬᠦ|to show|u§t͡s§–§–§uː§lə§x§–|uǰəgulxu
ᠤᠶᠢᠭᠤᠷᠵᠢᠨ||␣|
ᠤᠷᠲᠤ|long|ʊ§r§t§ă|urt|урт
ᠥᠨᠦᠳᠦᠷ|today|ɵnɵ:dɵr||өнөөдөр
ᠥᠨᠳᠡᠭᠡ|egg|ɵ§n§d§ᵊ§k|öndög|өндөг
ᠥᠩᠭᠡ|color|ɵŋk|öngö|өнгө
ᠥᠪᠡᠷ|other|oːr|öör|өөр
ᠥᠭᠡᠬᠦ|fat (noun)|oːx|öökh|өөх
ᠥᠭᠡᠯᠡᠳ||
ᠥᠭᠬᠦ|to give|o§ɡ§əx§–|ögökh|өгөх
ᠥᠳᠦ|feather|ot|öd|өд
ᠥᠷᠭᠡᠨ|wide|ø§r§k§ø§ŋ|örgön|өргөн
ᠦᠢᠯᠡ|act, deed|uiɮ|[ˈueɮ]|үйл
ᠦᠨᠡᠰᠦ|ash|uns|üns|үнс
ᠦᠨᠳᠦᠰᠦ|root|untəs|ündes|үндэс
ᠦᠨᠳᠦᠰᠦᠲᠡᠨ|nationality|untᵊstᵊŋ||үндэстэн
ᠦᠯᠢᠶᠡᠬᠦ|to blow|uɮex|üleekh|үлээх
ᠦᠰᠦ|hair||üs|үс
ᠦᠵᠡᠬᠦ|to see|u§t͡s§ə§x§–|üzekh|үзэх
ᠦᠵᠡᠭᠦᠯᠬᠦ|to show|ud͡ʒuːləx|uǰegulxu
ᠦᠷ᠎ᠡ|seed|ur|ür|үр
ᠨᠠᠢ᠍ᠮᠠ|eight|naima||nai³ma
ᠨᠠᠪᠴᠢ|leaf|naft͡ʃĭ|navch|навч
ᠨᠠᠭᠤᠷ|lake|nʊːr|nuur|нуур
ᠨᠠᠮᠤᠷ|autumn|ˈn§a§m§a§r̥|namᵊr namar|намар
ᠨᠠᠮᡠᡵ||␣|
ᠨᠠᠰᠤ ᠪᠠᠷᠠᠬᠤ|to die||nas barakh|нас барах
ᠨᠠᠰᠤᠲᠠᠢ|old||nastai|настай
ᠨᠠᠶᠠ||␣|
ᠨᠠᠷᠠ|sun|nɐɾ|nar|нар
ᠨᠡᠷ᠎ᠠ|name|n§e§r|ner|нэр
ᠨᠡᠷ᠎ᠡ|name|ner|ner|нэр
ᠨᠢᠭᠡ|one|neɡ|neg|нэг
ᠨᠢᠭᠡᠨ||
ᠨᠢᠮᠭᠡᠨ|thin|n§i§m§ɡ§e§n|nimgen|нимгэн
ᠨᠢᠰᠬᠡᠬᠦ||
ᠨᠢᠰᠬᠡᠯ||
ᠨᠢᠰᠬᠦ|to fly|n§i§s§əx§–|nisekh|нисэх
ᠨᠢᠳᠦ|eye||nüd|нүд
ᠨᠢᠷᠤᠭᠤ|back||nuruu|нуруу
ᠨᠣᠬᠠᠶ|dog|n§ɔ§x§ɔ§i|nokhoi|нохой
ᠨᠣᠭᠤᠭᠠᠨ|green|n§ɔ.§ɢ§–§–§ɔː§ŋ|nogoon|ногоон
ᠨᠣᠮ|book, knowledge|nɔm||ном
ᠨᠣᠶᠠᠨ||
ᠨᠤᠷᠮ᠎ᠠ|ash|nʊrəm|nuram|нурам
ᠨᠥᠬᠦᠷ|husband|nɵ.xur|nökhör|нөхөр
ᠪᠠ|and|ˈpa|ba|ба
ᠪᠠᠭ᠋ᠠᠲᠤᠷ|hero|ˈpaːtʰar̥|баатар|baɣatur paɢᶠᵛˢ¹atʰʊr|
ᠪᠠᠮᠪᠠᠢ ᠪᠤᠯᠴᠢᠷᠬᠠᠢ||␣
ᠪᠠᠶᠠᠷ ᠵᠢᠷᠭᠠᠯ|pleasure|||баяр жаргал
ᠪᠠᠶᠠᠷᠯᠠᠯᠤᠭ᠎ᠠ|thank you|p§a§j§ə§r§ɮ§–§–§–§–§–§a|||баярлалаа
ᠪᠠᠷᠠᠭᠤᠨ ᠲᠥ᠋ᠪᠡᠳ||
ᠪᠠᠷᠠᠭᠤᠨ||
ᠪᠠᠷᠢᠬᠤ|to hold|parʲəx|barikh|барих
ᠪᠠᠷᠰ|tiger|p§a§r||бар
ᠪᠡᠭᠡᠵᠢᠩ|Beijing|ˈp§eː§§§t͡ɕ§i§ŋ||Бээжин
ᠪᠡᠯᠡᠭ|gift|p§i§ɮ§i§ɡ|beleg|бэлэг
ᠪᠡᠯᠭᠦᠲᠡᠢ||
ᠪᠢ ᠮᠣᠩᠭᠤᠯ ᠢᠶᠠᠷ ᠶᠠᠷᠢᠳᠠᠭ ᠦᠭᠡᠢ||␣|
ᠪᠢ|I|ˈpʲi|bi|би
ᠪᠢᠳ᠋ᠡ|we|pit|bid|бид
ᠪᠢᠴᠢᠭᠡᠴᠢ|clerk|ˈp§i§t͡ɕʰ§–§–§eː§t͡ɕʰ§–||бичээч
ᠪᠢᠴᠢᠯ ᠠᠮᠢᠨ ᠰᠤᠳᠤᠯᠤᠯ||
ᠪᠣᠬᠢᠷ|dirty||bokhir|бохир
ᠪᠣᠭᠣ|deer, reindeer|p§ʊ§ɢ§–|buǧă|буга
ᠪᠣᠭᠤᠨᠢ|short|pɔɡʲən|bȯɡinŏ bogino|богино
ᠪᠣᠯᠵᠣᠮᠣᠷ|sparrow|pɔld͡ʒmɔr|bɔlǰɔmɔr
ᠪᠣᠳᠤᠬᠤ|to think|ˈpɔtɔx|bodokh|бодох
ᠪᠣᠳᠤᠯ|thought|b§o§d§–§ɮ||бодол
ᠪᠣᠷᠤᠭ᠎ᠠ|rain|ˈpɔroː|boroo|бороо
ᠪᠣᠷᠵᠢᠭᠢᠨ||␣
ᠪᠤᠤᠽ|dumpling|p§ʊː§‹§t͡s||бууз
ᠪᠤᠭᠤ|deer|pʊɡ|bʊgʊ
ᠪᠤᠶᠢᠳᠠᠩ|sofa|ˈpʊi̯taŋ||буйдан
ᠪᠥᠭᠡᠯᠵᠢᠬᠦ|to vomit|poːɮt͡ɕəx|bööljikh|бөөлжих
ᠪᠥᠭᠡᠰᠦ|louse|poːs|böös|бөөс
ᠪᠦᠢᠯᠡᠰᠦ|almond|pueɮs|büils|бүйлс
ᠪᠦᠬᠦ|all|p§u§x§–|bxĕ/bükh|бүх
ᠪᠦᠭᠦᠳᠡ ᠨᠠᠶ᠋ᠢᠷᠠᠮᠳᠠᠬᠤ ᠤᠯᠤᠰ||␣
ᠫᠢᠸᠣ᠋|beer|ˈpʰ§i§w̜§–§–||пиво
ᠬᠠᠤᠯᠢ|law|xʊːɮʲ|χɵːɮʲ/xu̇:lĭ/xuil|хууль
ᠬᠠᠨ᠎ᠠ|wall of a tent||xan·a
ᠬᠠᠨᠠ|outer casing of a vein||xana
ᠬᠠᠨᠵᠢ||␣
ᠬᠠᠩᠪᠤ||␣|
ᠬᠠᠪᠠᠷ|nose||khamar|хамар
ᠬᠠᠭᠠᠨ|khan, king|ˈx§–§–§aː§ŋ||ухаан
ᠬᠠᠭᠠᠷᠠᠬᠤ|to break|ˈxaɢrəx|khagarakh|хагарах
ᠬᠠᠮᠢᠭ᠎ᠠ|where|xaːnă|khaana|хаана
ᠬᠠᠯᠪᠠᠭ᠎ᠠ|spoon|xaɮbaɡᵊ|khalbaga|халбага
ᠬᠠᠵᠠᠬᠤ|to bite|xat͡səx|khazakh|хазах
ᠬᠠᠶᠠᠬᠤ|to spit|xajəx|khayakh|хаях
ᠬᠠᠷ ᠠ ᠬᠡᠷᠢᠶ ᠡ||␣|
ᠬᠠᠷ᠎ᠠ|black|χar̊|khar|хар
ᠬᠠᠷᠠᠨᠳᠠ|pencil|x§a§r§ə§n§t§a|xarᵊnˈda/χaɾɐnˈda/kharandaa|харандаа
ᠬᠡᠦᠬᠡᠳ|child|x§–§uː§x§ə§t|khüükhed|хүүхэд
ᠬᠡᠨ|who|ˈxeŋ|khen|хэн
ᠬᠡᠪᠲᠡᠬᠦ|to lie (bed)|xeftĕ|khevtekh|хэвтэх
ᠬᠡᠯᠡ ᠰᠢᠨᠵᠢᠯᠡᠯ||␣|
ᠬᠡᠯᠡ|tongue, language|xeɮ|khel|хэл
ᠬᠡᠯᠡᠬᠦ|to say|xiɮəx|khelekh|хэлэх
ᠬᠡᠵᠢᠶ᠎ᠡ|when|ˈxet͡seː|khezee|хэзээ
ᠬᠡᠷᠡᠯᠳᠤᠨ᠎ᠡ|fight|xərəldunə
ᠬᠢᠮᠤᠰᠤ|fingernail|x§ʊ§m§–§s§–|khums|хумс
ᠬᠢᠲᠠᠳ||␣
ᠬᠣᠩᠬᠤ|bell|xɔŋx|xɔŋxʊ
ᠬᠣᠭᠤᠯᠠ|food|xɔːɮ||хоол
ᠬᠣᠯᠠ|far|χɔɬ|khol|хол
ᠬᠣᠯᠲᠣᠰᠣ|bark (of a tree)|xɔɮtʰəs|kholtos|холтос
ᠬᠣᠲᠠ ᠶᠢᠨ||␣|
ᠬᠣᠲᠠ|town|ˈxɔtʰ|xotŏ|хот
ᠬᠣᠶᠠᠳᠤᠭᠠᠷ||␣|
ᠬᠣᠶᠠᠷ|two|χɔ.jʊr|khoyor|хоёр
ᠬᠣᠶᠢᠳᠤ||
ᠬᠣᠷᠢ|twenty||xorʲ|хорь
ᠬᠣᠷᠤᠬᠠᠢ|worm|ˈx§ɔ§r§–§x§ɔ§i̯|khorkhoi|хорхой
ᠬᠤᠤᠱᠤᠤᠷ|dumpling|xʊːʃʊr|||хуушуур
ᠬᠤᠯᠤᠰᠤ||
ᠬᠥᠬᠡ ᠨᠠᠭᠤᠷ||
ᠬᠥᠬᠡ ᠰᠢᠯ||
ᠬᠥᠬᠡ|breast|ˈxɵx|khökh|хөх
ᠬᠥᠬᠡᠬᠣᠲᠠ||␣
ᠬᠥᠬᠦᠨ ᠤ ᠲᠣᠯᠤᠭᠠᠢ||
ᠬᠥᠯ|foot, leg||khöl|хөл
ᠬᠦᠨᠳᠦ|heavy|xunt|khünd|хүнд
ᠬᠦᠮᠦᠨ|man (human being)|xun|khün|хүн
ᠬᠦᠵᠦᠭᠦᠦ|neck|xut͡su|khüzüü|хүзүү
ᠭ᠋ᠠᠯ|fire|ɢ§–§a§ɮ|gal|гал
ᠭᠠᠩᠰᠠ||
ᠭᠠᠬᠠᠢ|pig|ɢa.χæː||гахай
ᠭᠠᠰᠠᠯᠠᠩ ᠠᠴᠠ ᠨᠥᠭᠴᠢᠭᠰᠡᠨ||␣
ᠭᠠᠳᠠᠨ᠎ᠠ|outside|ɢ§a§t§ə§n§|ɢadn|гадна
ᠭᠠᠳᠠᠭ᠎ᠠ|outside|ɣaˈtaː||гадаа
ᠭᠠᠳᠠᠭᠠᠳᠤ|foreign|ɢadaːt|gadaad|гадаад
ᠭᠠᠵᠠᠷ|place||gaǰar
ᠭᠠᠵᠠᠷᠤᠨ ᠵᠢᠷᠤᠭ|||газар
ᠭᠠᠵᠠᠷᠴᠢ||␣|
ᠭᠠᠵᠠᠷ ᠠ|to the country||gaǰar-a
ᠭᠠᠷ|hand|ɢar|gar|гар
ᠭᠡᠳᠡᠰᠦ|belly|ˈketes|gedes|гэдэс
ᠭᠡᠷ||␣
ᠭᠡᠷᠡᠯᠲᠦᠨ᠎ᠡ|twinkle|ɡərəltənə|gereltun·e
ᠭᠡᠷᠭᠡᠢ|wife|ɡ§e§r.§ɡ§–§iː|gergii|гэргий
ᠭᠣᠤᠯ|river|ɢɔɮ|gol|гол
ᠭᠣᠪᠢ|Gobi|ɢœw̜|ǧȯwĭ|говь
ᠭᠣᠯᠮᠤᠳ||
ᠭᠤᠷᠪᠠ|three|ɡʊrᵊw̜|gurav|гурав
ᠭᠤᠸ᠎ᠠ|gourd|
ᠭᠦᠮᠦᠨ|person||gumun
ᠭᠦᠶᠦᠬᠦ|to run|||гүйх
ᠭᠦᠷᠦᠨ|state|ˈk§u§r§e§ŋ||гүрэн
ᠭᠦᠷᠪᠡᠯ|lizard|gurpəl|gurbəl
ᠮᠠᠨᠠᠨ|fog|manəŋ|manan|манан
ᠮᠠᠨᠠᠩ|fog|m§a§n§ə§ŋ|manan|манан
ᠮᠠᠨᠵᠤᠤᠷ||␣
ᠮᠠᠭᠠᠵᠢᠬᠤ|to scratch|maːt͡ɕəx|maajikh|маажих
ᠮᠠᠭᠤ|bad|mʊː|muu|муу
ᠮᠠᠭᠮᠠ||␣|
ᠮᠠᠯᠭᠠᠢ|hat|m§a§ɮ§ɢ§a§i||малгай
ᠮᠠᠱᠢᠨ|car|m§a§ˈʃ§i§ŋ|mashin|машин
ᠮᠡᠨᠡᠬᠡᠢ|frog|miɮxi||мэлхий
ᠮᠡᠯᠡᠬᠡᠢ|frog|m§ə§l§–§x§–§iː|melexei
ᠮᠡᠳᠡᠬᠦ|to know|m§i§t§ə§x§–|medekh|мэдэх
ᠮᠢᠬ᠎ᠠ|meat|max|makh|мах
ᠮᠣᠩᠭᠣᠯ ᠬᠡᠯᠡ|Mongolian language|mɔŋɢɔ̆ɮ xeɮ
ᠮᠣᠩᠭᠣᠯ|a Mongolian|m§ɔ§ɴ.§ɢ§ʊ§ɮ|mongol|монгол
ᠮᠣᠭᠠᠢ|snake|ˈm§ɔ§ɣ§ɔ§i̯|mogoi|могой
ᠮᠣᠳᠤ|tree|mɔt|mod|мод
ᠮᠣᠷᠢ|horse|mœr|mȯrĭ, mȯrꞌ|морь
ᠮᠣᠷᠢᠨ ᠵᠥᠭᠡᠢ|wasp|ˈmɔriŋ t͡sɵɣiː||морин зөгий
ᠮᠤᠤᠷ|cat|m§›§ʊː§r||муур
ᠮᠥᠩᠭᠦ|money|moŋɡ|möngö|мөнгө
ᠮᠥᠭᠦ|mushroom|moog|mogu
ᠮᠥᠰᠦ|ice|mos|mös mɵs|мөс
ᠮᠥᠰᠦᠨ||
ᠮᠥᠷᠡᠨ|river|mɵ.ruŋ|mörön|мөрөн
ᠮᠦᠦᠷ||␣
ᠯᠠᠮᠠ||
ᠯᠠᠲ᠋ᠢᠨ ᠴᠠᠭᠠᠨ ᠲᠣᠯᠤᠭᠠᠢ||
ᠯᠢᠷ|pear|ɮ§iː§r|liir|лийр
ᠰᠠᠢ᠋ᠨ|good||sa¹in
ᠰᠠᠨᠳᠠᠯᠢ|chair|sandᵊɮ|sandal|сандал
ᠰᠠᠩ|fund, store|saŋ|saŋ|сан
ᠰᠠᠪᠠᠭ᠎ᠠ|stick, cane|sawa|savaa|саваа
ᠰᠠᠭᠤᠬᠤ|to sit|sʊːx|suukh|суух
ᠰᠠᠮ|comb|s§a§m
ᠰᠠᠯᠬᠢ|wind|s§æ§ɮ§x§–|salkhi|салхи
ᠰᠠᠶ᠋ᠢᠨ ᠪᠠᠶ᠋ᠢᠨ ᠠ ᠤᠤ||
ᠰᠠᠶ᠋ᠢᠨ|good|sæːɴ̟|sain|сайн
ᠰᠠᠶᠢᠨ ᠪᠠᠶᠢᠨ᠋ ᠠ ᠤᠤ||
ᠰᠠᠶᠢᠨ|good||sayin
ᠰᠠᠷᠠ|moon|sar|sar|сар
ᠰᠡᠭᠦᠯ|tail||süül|сүүл
ᠰᠡᠮ|quietly|s§ə§m||sem
ᠰᠡᠯᠡᠮᠡ|sword|sələm|seleme
ᠰᠡᠯᠢᠬᠦ|to swim|seɮəx|selekh|сэлэх
ᠰᠢᠨ᠎ᠡ|new|ʃin|shin|шин
ᠰᠢᠨᠵᠢᠯᠡᠯ||␣|
ᠰᠢᠪᠠᠭᠤ|bird|ʃ§ʊ§w§–§–§ʊ|shuvuu|шувуу
ᠰᠢᠬᠠᠬᠤ|to squeeze|ʃaxəx|shakhakh|шахах
ᠰᠢᠮᠠᠭᠤᠯ|mosquito|ʃumu:l||шумуул
ᠰᠢᠯᠤᠭᠤᠨ|straight|ʃʊɮʊŋ|shuluun|шулуун
ᠰᠢᠲᠠᠭᠠᠬᠤ|to burn|ʃatʰax|shataakh|шатаах
ᠰᠢᠳᠦ|tooth|ʃud|shüd|шүд
ᠰᠢᠷᠡᠭᠡ|table|ʃ§i§r§–§–§e|shiree|ширээ
ᠰᠣᠨᠢᠨ|news|sœ.nəŋ|sɔnin|сонин
ᠰᠣᠨᠤᠰᠬᠤ|to hear|sɔnsəx|sonsokh|сонсох
ᠰᠤᠮᠤ||␣
ᠰᠥ᠋ᠨ᠋ᠢ|night|ʃɵn|shönö|шөнө
ᠰᠦᠨ|milk|suː|süü|сүү
ᠰᠦᠮ ᠡ||
ᠰᠦᠯᠵᠢᠬᠦ||
ᠱᠠᠭᠠᠵᠠᠭᠠᠢ|magpie|ʃaːt͡sɢai|šaɣad͡ʒaɣai|шаазгай
ᠱᠠᠹᠠ|sofa|ˈʃ§a§f§a||шафа
ᠱᠣᠩᠬᠤᠷ|falcon|ʃ§ɔ§ŋ§x§ɔ§r||шонхор
ᠱᠣᠷᠤ|pointed|ʃɔr|šɔrʊ
ᠱᠥᠷᠤ|fence|ʃor
ᠲ᠋ᠷᠣᠯᠯᠧᠶ᠋ᠢᠪᠦᠰ||
ᠲᠠᠪᠤ|five|ˈtʰaw̜|tav|тав
ᠲᠠᠶᠠᠭ|stick|tʰ§a§j§ə§ɡ|tayag|таяг
ᠲᠡᠦᠬᠡ|history|tuux|teuxe
ᠲᠡᠨ᠋ᠳ᠋ᠡ|there|t§e§n§–§d§–§ә|tend|тэнд
ᠲᠡᠩᠭᠢᠰ||
ᠲᠡᠮᠡᠴᠡᠬᠦ|to fight|ˈtʰemt͡sʰex|temtsekh|тэмцэх
ᠲᠡᠳ᠋ᠡ ᠨᠠᠷ|they||ted nar|тэд нар
ᠲᠡᠶᠢᠮᠦ|yes|tiːm|tiim|тийм
ᠲᠡᠷᠡ|he, that|tʰer|ter|тэр
ᠲᠢᠩᠬᠢᠮ|living room|tiŋxim|||x
ᠲᠣᠭᠠᠯᠠᠬᠤ|to count||toolokh|тоолох
ᠲᠣᠭᠣᠰᠤ|dust|tɔɔs|tɔgɔsʊ
ᠲᠣᠭᠤᠰ|peacock|ˈtʰ§ɔ§ɢ§ə§s||тогос|тогос
ᠲᠣᠮᠤ|big|tʰɔm|tom|том
ᠲᠣᠯᠤᠭᠠᠢ|head|tʰɔɮɢɔi|tolgoi|толгой
ᠲᠤᠸᠠ||
ᠲᠥᠭᠥᠷᠢᠭ|tugrug|ˈtʰ§ɵ§k§–§r§ɵ§k||төгрөг
ᠲᠥᠮᠦᠰᠦ|potato|tʰ§ɵ§m§–§s§–||төмс
ᠲᠥᠯᠦᠢ||
ᠲᠦᠢᠮᠡᠷ|wildfire|tʰuimər|[ˈtʰuemɪr]|түймэр
ᠲᠩᠷᠢ|sky|tʰeŋ.ɡer|tenger|тэнгэр
ᠲᠷᠣᠯᠯᠧᠶᠢᠪᠦ᠋ᠰ|trolleybus|ˈtʰrɔɮːʲɵi̯βʊs||троллейбус
ᠲᠸᠾᠷᠠᠨ|Tehran|tʰ§e§̝ɡ.§r§äˑ§ɴ̟||Тегеран
ᠳ᠋ᠢᠶᠠᠩᠬᠤᠸᠠ||
ᠳᠠᠪᠤᠰᠤ|salt|dawᵊs|davs|давс
ᠳᠠᠭᠠᠷᠢᠯᠲᠠ||␣
ᠳᠠᠭᠤ|song|tʊː||дуу
ᠳᠠᠭᠤᠤ|song|tʊː||дуу
ᠳᠠᠭᠤᠷ||
ᠳᠠᠯᠠᠢ|sea|taɮai|dalai|далай
ᠳᠠᠯᠠᠪᠴᠢ|wing|ˈtaɮaw̜t͡ɕʰ|dalavch|далавч
ᠳᠡᠪᠲᠡᠷ|notebook|ˈtew̜tʰer̥||дэвтэр
ᠳᠡᠭᠡᠷ᠎ᠡ|on|teːr|deer|дээр
ᠳᠡᠯᠡᠭᠡᠢ|earth|ˈteɬʰiː|delkhii|дэлхий
ᠳᠡᠷ᠎ᠡ|pillow|der|der|дэр
ᠳᠣᠭᠣᠢ|circle, round||duǧui|дугуй
ᠳᠣᠷᠤᠨ ᠠ||
ᠳᠤ||
ᠳᠤᠤ|song|tʊː||дуу
ᠳᠤᠭᠤᠯᠬᠤ|to sing||duulakh|дуулах
ᠳᠤᠮᠳᠠᠳᠤ ᠤᠯᠤᠰ|China|ˈt§ʊ§n§t§a§t§–§ §ʊ§ɮ§–§s||Дундад улс
ᠳᠥᠷᠪᠡ|four|tɵruw̜|döröv|дөрөв
ᠴᠠᠢ ᠶᠢᠨ ᠭᠠᠵᠠᠷ||␣|
ᠴᠠᠢ||
ᠴᠠᠢᠶᠢᠨ ᠭᠠᠵᠠᠷ||
ᠴᠠᠭ|clock|ʧaɡ
ᠴᠠᠭᠠᠨ ᠲᠣᠯᠤᠭᠠᠢ||
ᠴᠠᠭᠠᠨ|white|t͡s§a§ˈɢ§aː§ŋ|tsagaan|цагаан
ᠴᠠᠭᠠᠰᠤ|paper|t͡s§–§–§aː§s§–|tsaas|цаас
ᠴᠠᠭᠳᠠᠭ᠎ᠠ|police|t͡s§a§ɡ§ˈt§–§–§–§aː|tsagdaa|цагдаа
ᠴᠠᠰᠤ|snow|t͡sʰ§a§s§–|tsas|цас
ᠴᠡᠴᠡᠭ|flower|t͡ʃʰ§i§t͡ʃʰ§ɘ§k|tsetseg|цэцэг
ᠴᠡᠷᠢᠭ|soldier|ˈt͡sʰ§e§r§e§k||цэрэг
ᠴᠢ|you (singular)|ˈt͡ɕʰi||чи
ᠴᠢᠨᠤ᠎ᠠ|wolf|ˈt͡ɕʰɔn|chono|чоно
ᠴᠢᠩᠭᠢᠰ ᠬᠠᠭᠠᠨ|Genghis Khan||čingɣis qaɣan|Чингис хаан
ᠴᠢᠩᠭᠢᠰ||␣
ᠴᠢᠬᠢ|ear|t͡ʃ§i§x§ᵊ|chikh|чих
ᠴᠢᠯᠠᠭᠤ|stone||chuluu|чулуу
ᠴᠢᠰᠤ|blood|t͡sʊs|tsus|цус
ᠴᠢᠳᠠᠪᠤᠷᠢ||␣|
ᠴᠢᠷᠢᠭ᠌|soldier||čirig²
ᠴᠣᠬᠢᠬᠤ|to hit|t͡sʰɔxʲəx|tsokhikh|цохих
ᠴᠣᠬᠤ|beetle|ʦoxŏ||цох
ᠴᠥᠭᠡᠨ|few|t͡sʰoːŋ]|tsöön|цөөн
ᠵᠠᠬ᠎ᠠ|market|t͡sax||зах
ᠵᠠᠭᠤᠨ|hundred|d͡zʊːn||зуун
ᠵᠠᠭᠤᠬᠤ|to bite|t͡sʊːx|zuukh|зуух
ᠵᠠᠮ|road|ˈt͡s§a§m|zam|зам
ᠵᠠᠷᠢᠮ ᠳᠠᠭᠠᠨ|sometimes|t͡s§a§r§ʲə§m§–§t§–§–§a§–|||заримдаа
ᠵᠠᠷᠯᠢᠭ|order||ǰarlig
ᠵᠡᠭᠡᠷᠡ|gazelle|t͡seːr||зээр
ᠵᠡᠭᠦᠨ|left|ˈt͡suːŋ|züün|зүүн
ᠵᠡᠭᠦᠨᠭᠠᠷ||
ᠵᠢᠭᠠᠬᠤ|teach|t͡saːx||заах
ᠵᠢᠭᠠᠯ|small|d͡ʒaːɮ|jaal|жаал
ᠵᠢᠭᠠᠰᠤ|fish|t͡saɢəs|zagas|загас
ᠵᠢᠭᠦᠷ|wing|ˈt͡ɕiɣuːr̥|jigüür|жигүүр
ᠵᠢᠮᠢᠰ|fruit|t͡ɕims|jims|жимс
ᠵᠢᠯ|year||jil|жил
ᠵᠢᠯᠤᠭᠤᠴᠢ|driver|t͡ʃɔˈɮɔːt͡ʃʰ||жолооч
ᠵᠢᠵᠢᠭ|small|d͡ʒ§i§d͡ʒ§i§ɡ|jijig|жижиг
ᠵᠢᠷᠤᠭ|picture|t͡sʊraɡ||зураг
ᠵᠢᠷᠦᠬᠡ|heart||zürkh|зүрх
ᠵᠣᠨ||
ᠵᠣᠭᠰᠤᠬᠤ|to stand|t͡s§ɔ§ɡ§s§ə§x§–|zogsokh|зогсох
ᠵᠣᠷ|good fortune, luck||ǰɔr
ᠵᠣᠷᠢᠭᠲᠠᠢ|to be brave||ǰɔrigtai
ᠵᠣᠷᠲᠠᠢ|lucky||ǰɔrtai
ᠵᠤᠨ|summer|ˈt͡sʊŋ|zun|зун
ᠵᠤᠵᠠᠭᠠᠨ|thick|t͡s§ʊ§t͡s§–§–§a§ŋ|zuzaan|зузаан
ᠵᠥᠭᠡᠢ|bee|ˈt͡s§ɵ§ɣ§–§iː||зөгий
ᠵᠦ᠋ᠩᠭ᠋ᠠᠷ||
ᠵ‍ᠠ‍ᠷᠢᠮ|some|t͡sarʲəm|zarim|зарим
ᠶᠠᠪᠤᠬᠤ|to go, leave|japax||явах
ᠶᠠᠪᠤᠭᠤᠯᠬᠤ|to send|j§a§p§ʊ§§§lə§x§|yabʊgʊlxʊ
ᠶᠠᠭᠠᠭᠢᠵᠤ|how|jaːd͡ʒ|yaaj|яаж
ᠶᠠᠰ|bone|j§a§sᵊ|yas|яс
ᠶᠡᠩ‍ᢉᠢᠷ|mountain goat||jaŋgir|янгир
ᠶᠢᠰᠦ|nine|jɵsᵊ|yes|ес
ᠶᠣᠣᠲᠠᠩ|sugar cube|ˈjɔːtʰɔŋ|yooton|ёотон
ᠸᠠᠩ|king, prince|w§a§ŋ̠||ван
ᠸᠠᠭᠣᠨ|train|wa.ɢɔˑɴ̟|boɡoːn|вагон
ᠸᠢᠨᠣ|wine|w̜§i§ˈn§–|viˈnoː|вино
ᠸᠢᠳᠢᠣ᠋|video|ˈw̜itʲɵ||видео
ᠸᠢᠺᠢᠫᠧᠳᠢᠶᠠ|Wikipedia||viḳipədiya
ᠺᠠᠽᠠᠭᠰᠲ᠋ᠠᠨ||␣|
ᠺᠢᠨᠣ᠋|theatre (archaic form)|k§i§n§o|ḳinɔ¹
ᠺᠣᠹᠧ|coffee|kʰ§ɔˑ.§f§eˑ|kofe|кофе
ᠻᠠᠷᠲ᠋|card|k§a§r§t§–||карт
ᠾᠧᠵᠢᠩ|Hejing (Chinese county)|
ᡀᠠᠰᠠ|Lhasa|ˈɬʰ§a§s§–||Лхас
















`

