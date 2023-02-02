/*
@ Source: https://en.wiktionary.org/wiki/Appendix:Greek_Swadesh_list

native | meaning | IPA① | transcription | other transcriptions② & notes | wiktionary③


① separate each text unit (consonant+combining_mark(s)) with §, separate phonetic syllables with .
   use ‹ and › for a sound that spans 2 text units
   use – for a text unit that doesn't produce sound
   syllable boundary markers go inside previous unit, and emphasis markers begin emphasised unit

② the previous transcription field is always Latin. 
   if there is another key orthography (eg. Mongolian cyrillic) it goes here.
   vowelled/unvowelled alternatives also go here

③ x means that no link to Wiktionary should be added
   if Wiktionary spells the word differently, add the spelling here
*/



autoExpandExamples.el = `
Έλληνας|Greek|ˈe.§l§‹§i.§n§a§s|Éllinas
ευφυΐα|intelligence|e§‹§f§–§ˈi§a
νεράιδα|fairy|n§e§ˈɾ§a§i̯.§ð§a

εγώ|I|eˈɣo|egó
εσύ|you (singular)|eˈsi|esý
εσείς|you (singular) (formal)|eˈsis|eseís
αυτός|he|a§f§ˈt§o§s|aftós
εμείς|we|eˈmis|emeís
εσείς|you (plural)|eˈsis|eseís
αυτοί|they|afˈti|aftoí
εκείνος|that|eˈcino|ekeínos
εδώ|here|eˈðo|edó
εκεί|there|eˈci|ekeí
ποιος|who|pços|poios
τι|what|ti|ti
πού|where|pu|poú
πότε|when|ˈpote|póte
πώς|how|pos|pós
όλοι|all|ˈo§l§i§‹|óloi
πολλοί|many|poˈli|polloí
μερικοί|some|meriˈci|merikoí
λίγοι|few|ˈl§i§ʝ§i§‹|lígoi
άλλοι|other|ˈa§l§‹§i§‹|álloi
ένα|one|ˈe̞.§n§a|éna
δύο|two|ˈð§i.§o|dýo
τρία|three|ˈt§ɾ§i.§a|tría
τέσσερα|four|ˈt§e̞.§s§‹§e̞.§ɾ§a|téssera
πέντε|five|ˈpende|pénte
μεγάλος|big|meˈɣalos|megálos
μακρύς|long|maˈkris|makrýs
πλατύς|wide|plaˈtis|platýs
φαρδύς|wide|farˈðis|fardýs
παχύς|thick|paˈçis|pachýs
χοντρός|thick|xonˈdros|chontrós
βαρύς|heavy|vaˈris|varýs
μικρός|small|m§i§ˈk§r§o̞§s|mikrós
κοντός|short|koˈndos|kontós
στενός|narrow|steˈnos|stenós
λεπτός|thin|leˈptos|leptós
γυναίκα|woman|ʝiˈneka|gynaíka
άνδρας|man (male)|ˈandras|ándras
άνθρωπος|man (human)|ˈa§n̪§θ§r§o§p§o§s|ánthropos
παιδί|child|p§e§‹§ˈð§i|paidí
σύζυγος|wife|ˈsiziɣos|sýzygos
γυναίκα|wife|ʝiˈneka|gynaíka
σύζυγος|husband|ˈsiziɣos|sýzygos
άντρας|husband|ˈandras|ántras
μητέρα|mother|mitéra|miˈtera
μάνα|mother|ˈmana|mána
πατέρας|father|paˈteras|patéras
ζώο|animal|ˈz§o.§o|zóo
ψάρι|fish|ˈps§a.§ɾ§i|psári
πουλί|bird|puˈli|poulí
σκύλος|dog|ˈscilos|skýlos
ψείρα|louse|ˈps§i.§‹§ɾ§a|pseíra
φίδι|snake|ˈf§i§ð§i|fídi
σκουλήκι|worm|skuˈlici|skoulíki
δέντρο|tree|ˈð§e§n.§d§r§o|déntro
δάσος|forest|ˈðasos|dásos
ραβδί|stick|raˈvði|ravdí
βέργα|stick|ˈverɣa|vérga
φρούτο|fruit|ˈfruto|froúto
σπόρος|seed|ˈsporos|spóros
φύλλο|leaf|ˈf§i§l§‹§o|fýllo
ρίζα|root|ˈɾ§i.§z§a|ríza
φλοιός|bark (of a tree)|fliˈos|floiós
λουλούδι|flower|l§u§‹§ˈl§‹§u.§ð§i|louloúdi
χορτάρι|grass|xorˈtari|chortári
σχοινί|rope|sçiˈni|schoiní
δέρμα|skin|ˈðerma|dérma
κρέας|meat|ˈkreas|kréas
αίμα|blood|ˈe.§‹§m§a|aíma
κόκαλο|bone|ˈk§o§k§a§l§o|kókalo
λίπος|fat (noun)|ˈlipos|lípos
αυγό|egg|a§ˈv§ɣ§o|avgó
κέρατο|horn|ˈcerato|kérato
ουρά|tail|uˈra|ourá
πούπουλο|feather|ˈp§u.§‹§p§u.§‹§l§o|poúpoulo
φτερό|feather|fteˈro|fteró
τρίχα|hair|ˈtrixa|trícha 
μαλλιά|hair|maˈʎa|malliá 
κεφάλι|head|ceˈfali|kefáli
αυτί|ear|afˈti|aftí
μάτι|eye|ˈmati|máti
μύτη|nose|ˈmiti|mýti
στόμα|mouth|ˈs§t§o.§m§a|stóma
δόντι|tooth|ˈðondi|dónti
γλώσσα|tongue|ˈɣ§l§o.§s§‹§a|glóssa
νύχι|fingernail|ˈniçi|nýchi
πόδι|leg, foot|ˈp§o.§ð§i|pódi
γόνατο|knee|ˈɣonato|gónato
χέρι|hand|ˈç§e.§ɾ§i|chéri
φτερό|wing|fteˈro|fteró
κοιλιά|belly|ciˈʎa|koiliá
σπλάχνα|guts|ˈsplaxna|spláchna
εντόσθια|guts|eˈndosθia|entósthia
λαιμός|neck|l§e§‹§ˈm§o§s|laimós
πλάτη|back|ˈplati|pláti
στήθος|breast|ˈstiθos|stíthos
καρδιά|heart|k§a§r§ˈð§ʝ§a|kardiá
συκώτι|liver|siˈkoti|sykóti
πίνω|to drink|ˈpino|píno
τρώ[γ]ω|to eat|ˈtro[ɣ]o
δαγκώνω|to bite|ð§a§ŋ§ˈɡ§o§n§o|dagkóno
ρουφώ|to suck|ruˈfo|roufó
φτύνω|to spit|ˈftino|ftýno
ξερνώ|to vomit|kserˈno|xernó
φυσάω|to blow|fiˈsao|fysáo
αναπνέω|to breathe|anaˈpneo|anapnéo
ανασαίνω|to breathe|anaˈseno|anasaíno
γελάω|to laugh|ʝeˈlao|geláo
βλέπω|to see|ˈvlepo|vlépo
ακούω|to hear|aˈkuo|akoúo
ξέρω|to know|ˈksero|xéro
γνωρίζω|to know|ɣnoˈrizo|gnorízo
σκέφτομαι|to think|ˈsceftome|skéftomai
νομίζω|to think|ˈsceftome|nomízo
μυρίζω|to smell|m§i§ˈr§i§z§o|myrízo
φοβάμαι|to fear|foˈvame|fovámai
κοιμάμαι|to sleep|ciˈmame|koimámai
ζω|to live|zo|zo
πεθαίνω|to die|peˈθeno|pethaíno
σκοτώνω|to kill|s§k§o§ˈt§o.§n§o|skotóno
μαλώνω|to fight|maˈlono|malóno
κυνηγώ|to hunt|ciniˈɣo|kynigó
χτυπώ|to hit|xtiˈpo|chtypó
κόβω|to cut|ˈkovo|kóvo
χωρίζω|to split|xoˈrizo|chorízo
μαχαιρώνω|to stab|maçeˈrono|machairóno
ξύνω|to scratch|ˈksino|xýno
σκάβω|to dig|ˈskavo|skávo
κολυμπώ|to swim|k§o.§l§i§m§ˈb§o|kolympó
πετάω|to fly|peˈtao|petáo
περπατώ|to walk|perpaˈto|perpató
έρχομαι|to come|ˈerxome|érchomai
ξαπλώνω|to lie (as in a bed)|ksaˈplono|xaplóno
πλαγιάζω|to lie (as in a bed)|plaˈʝazo|plagiázo
κάθομαι|to sit|ˈkaθome|káthomai
στέκομαι|to stand|ˈstekome|stékomai
γυρίζω|to turn (intransitive)|ʝiˈrizo|gyrízo
πέφτω|to fall|ˈpefto|péfto
δίνω|to give|ˈðino|díno
κρατάω|to hold|kraˈtao|kratáo
ζουλάω|to squeeze|zuˈlao|zouláo
τρίβω|to rub|ˈtrivo|trívo
πλένω|to wash|ˈpleno|pléno
σκουπίζω|to wipe|skuˈpizo|skoupízo
τραβώ|to pull|traˈvo|travó
σπρώχνω|to push|ˈz§b§ɾ§o.§x§n§o|spróchno
ρίχνω|to throw|ˈrixno|ríchno
πετώ|to throw|ˈrixno|petó
δένω|to tie|ˈðeno|déno
ράβω|to sew|ˈravo|rávo
μετράω|to count|meˈtrao|metráo
λέω|to say|ˈleo|léo
τραγουδώ|to sing|traɣuˈðo|tragoudó
παίζω|to play|ˈpezo|paízo
πλέω|to float|ˈpleo|pléo
επιπλέω|to float|epiˈpleo|epipléo
τρέχω|to flow|ˈtrexo|trécho
παγώνω|to freeze|paˈɣono|pagóno
φουσκώνω|to swell|fuˈskono|fouskóno
πρήζομαι|to swell|ˈprizome|prízomai
ήλιος|sun|ˈi.§ʎ§‹§o§s§/ˈi.li.os|ílios
φεγγάρι|moon|f§e§ŋ§ˈɡ§a.§ɾ§i|fengári
Σελήνη|moon|s§e§ˈl§i§n§i|Selíni
αστέρι|star|a§ˈs§t§e.§ɾ§i|astéri
άστρο|star|ˈa§.s§t§ɾ§o|ástro
νερό|water|n§e§ˈr§o|neró
βροχή|rain|v§ɾ§o§ˈç§i|vrochí
ποτάμι|river|p§o§ˈt§a.§m§i|potámi
λίμνη|lake|ˈl§i§m§n§i|límni
θάλασσα|sea|ˈθ§a§l§a§s§‹§a|thálassa
αλάτι|salt|a§ˈl§a§t§i|aláti
πέτρα|stone|ˈp§e§t§r§a|pétra
άμμος|sand|ˈa§m§‹§o§s|ámmos
σκόνη|dust|ˈs§k§o§n§i|skóni
γη|earth|ʝ§i|gi
σύννεφο|cloud|ˈs§i.§‹§n§e.§f§o|sýnnefo
ομίχλη|fog|o§ˈm§i.§x§l§i|omíchli
ουρανός|sky|u.§‹§ɾ§a§ˈn§o§s|ouranós
αέρας|wind|a§ˈe§r§a§s|aéras
χιόνι|snow|ˈç§›§o.§n§i|chióni
πάγος|ice|ˈp§a§ɣ§o§s|págos
καπνός|smoke|k§a§ˈp§n§o§s|kapnós
φωτιά|fire|f§o§ˈt§ç§a|fotiá
στάχτη|ash|ˈs§t§a§x§t§i|stáchti
καίω|to burn|ˈc§e.§‹§o|kaío
δρόμος|road|ˈð§ɾ§o.§m§o§s|drómos
βουνό|mountain|v§›§u§ˈn§o|vounó
κόκκινος|red|ˈk§o§c§‹§i§n§o§s|kókkinos
πράσινος|green|ˈp§r§a§s§i§n§o§s|prásinos
κίτρινος|yellow|ˈc§i§t§r§i§n§o§s|kítrinos
άσπρος|white|ˈa§s§p§r§o§s|áspros
μαύρος|black|ˈm§a§v§r§o§s|mávros
νύχτα|night|ˈnixta|nýchta
μέρα|day|ˈmera|méra
χρόνος|year|ˈx§ɾ§o.§n§o§s|chrónos
ζεστός|warm|zeˈstos|zestós
κρύος|cold|ˈkrios|krýos
γεμάτος|full|ʝeˈmatos|gemátos
καινούργιος|new|ceˈnurʝos|kainoúrgios
παλιός|old|paˈʎos|paliós
καλός|good|k§a§ˈl§o§s|kalós
κακός|bad|kaˈkos|kakós
σάπιος|rotten|ˈsapços|sápios
βρόμικος|dirty|ˈvromikos|vrómikos
ίσιος|straight|ˈisços|ísios
στρογγυλός|round|s§t§r§o§ɲ§ɟ§i§ˈl§o§s|strongylós
κοφτερός|sharp (as a knife)|kofteˈros|kofterós
στομωμένος|dull (as a knife)|stomoˈmenos|stomoménos
λείος|smooth|ˈlios|leíos
βρεγμένος|wet|vreɣˈmenos|vregménos
υγρός|wet|iˈɣros|ygrós
στεγνός|dry|steˈɣnos|stegnós
ξερός|dry|ks§e§ˈr§o§s|xerós
σωστός|correct|soˈstos|sostós
κοντά|near|koˈnda|kontá
μακριά|far|makriˈa|makriá
δεξιά|right|ðeksiˈa|dexiá
αριστερά|left|aristeˈra|aristerá
σε|at|se|se
μέσα|in|ˈmesa se|mésa
με|with|me|me
και|and|ce|kai
εάν|if|eˈan|eán
αν|if|an|an
επειδή|because|e§p§i§‹§ˈð§i|epeidí
γιατί|because|ʝaˈti|giatí
όνομα|name|ˈo.§n§o.§m§a|ónoma

μια|a|m§ɲ§a|mia
βια|violence|ˈvʝa
κοροϊδεύω|to mock|k§o.§ɾ§o§i̯ˈ§ð§e.§v§o|koroïdévo
μποϊκοτάρω|I boycott|–§b§o.§i.§k§o§ˈt§a.§ɾ§o|boïkotáro
αυλός|flute|aˈvlos
Ταΰγετος|Mount Taygetus|t§aː.§ý.§ɡ§e.§t§o§s|Tāǘgetos
μπορώ|to be able to|–§b§o§ˈɾ§o
δεν πάω|I am not going|ðen 
μπύρα|beer|–§ˈb§i§r§a|býra
φάση|phase|ˈf§a§s§i|||x
βάση|base|ˈvasi
μόνος|alone|ˈmonos
νόμος|law|ˈn§o§m§o§s|
τείνω|I tend|ˈtino
ντύνω|I dress|ˈdino
θέμα|topic|ˈθema
δέμα|parcel|ˈðema
σώα|safe|ˈsoa
ζώα|animals|ˈzoa
ρήμα|verb|ˈrima
λίμα|nail file|ˈlima
κόμμα|comma|ˈkoma
χώμα|soil|ˈx§o.§m§a|chóma
γόμα|eraser|ˈɣ§o§m§a|góma
γκάμα|range|ˈɡ§‹§a§m§a|||x
μπροστά|in the front|bɾoˈsta
ντοκιμαντέρ|documentary
νταντά|nanny|daˈda
ντους|shower|–§ˈd§u§‹§s
φαίνομαι|look|ˈfenome
λατομείο|quarry|latoˈmio
εφηύρα|I invented|efˈivra
καϊμάν|caiman|k§a§i§ˈm§a§n|káiman
Ναΐτες|Templars|ˈnaites
ή|or|ˈi
πώς;|how?|ˈpos
πού;|where?|ˈpu
αδελφοί|brothers|a§ð§e§lˈ§f§i§‹|adelfoí
Φίλιππος Βʹ|Philip II (of Macedon)|

κόσμος|world, earth|ˈk§o.§z§m§o§s|kósmos
















































`

