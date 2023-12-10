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



autoExpandExamples.ha = `

@ https://en.wiktionary.org/wiki/Appendix:Hausa_Swadesh_list

ʼyar|a little bit|j̰§á§r|ʼyar̃
ʼya|daughter|j̰§áː|ƴā
-anci||
-iyya||
Aʼishatu|Aisha|ʔáː.§›§ʔì.§ʃ§‹§á.§t§ù
Abdulhamid||
Abdullahi||
Abdulƙadir||
Abdurrahim||
Abdussalamu||
Abdu||
Abubakar||
Adamu||
Adam||
Afirka ta Kudu||
Afirka||
Afrilu||
Agusta||
Ahmad||
Ailan||
Alh.||
Alhamis||
Ali||
Allah||
Almasihu||
Altine||
Alƙahira||
Alƙurʼani||
Amina||
Amirka||
Amurka||
Anaca||
Ango||
Ankara||
Asabar||
Asabe||
Asiya||
Attaura||
Audu||
Azumi||
Baba||
Badun||
Bafilatani||
Bafillace||
Bagadaza||
Bagwari||
Bahar Maliya||
Bahar Rum||
Bahaushe||
Baiwa||
Balaraba||
Balarabe||
Bararo||
Barau||
Barbarci||
Barno||
Basakkwace||
Bature||
Bawa||
Baƙo||
Bello||
Bici||
Bini||
Binta||
Binuwai||
Birnin Kudu||
Birnin Ƙudus||
Birtaniya||
Bosniya||
Cadi||
Calawa||
Dala||
Damagaram||
Dauda||
Daura||
Dimashi||
Disamba||
Dogarai||
Dogon Dutsi||
Dogo||
Dutse||
Fabrairu||
Faransanci||
Faransa||
Farisa||
Faruku||
Faruƙu||
Fatakwal||
Faɗimatu||
Fijo||
Filato||
Funtuwa||
Gagarau||
Gajere||
Ganau||
Gana||
Garki||
Giginyu||
Gobir||
Gumal||
Gusau||
Gwaggo||
Gwalkwas||
Gwandu||
Habasha||
Hadizatu||
Hafizu||
Hafsatu||
Halilu||
Halima||
Hamidu||
Haruna||
Hasana||
Hasan||
Hausa||
Hauwa||
Haƙurau||
Haɗeja||
Husaina||
Husaini||
Ibrahim||
Ikko||
Indiya||
Ingila||
Ingilishi||
Iraƙi||
Iraƙ||
Isa||
Isiyaku||
Ismaʼilu||
Israʼila||
Isƙandariya||
Italiya||
Jahun||
Jamusanci||
Jamus||
Janairu||
Japan|Japan|(d)ʒ§à.§p§â§n
Jatau||
Jega||
Jibirilu||
Jibiya||
Jimada Lahir||
Jimada Lawwal||
Jos||
Jummaʼa||
Jummai||
Kaduna||
Kafin Hausa||
Kairo||
Kaita||
Kaka||
Kamaru||
Kano||
Katagum||
Katsina||
Kawu||
Kazaure||
Kibiya||
Kirsimati||
Kura||
Kwango||
Kwara||
Kwiyat||
Kyanada||
Ladi||
Lahadi||
Lahira||
Lakwaja||
Lami||
Landan||
Laraba||
Legas||
Linjila||
Litinin||
Lubayya||
Madina||
Magajiya||
Magaji||
Mahmudu||
Maiduguri||
Maigado||
Maigari||
Maikuɗi||
Maina||
Mairiga||
Maitama||
Maiwada||
Maiɗaki||
Maka||
Makka||
Mantau||
Maraɗi||
Maris||
Maroko||
Maru||
Maryamu||
Masar||
Masoro||
Mayu||
Mirya||
Misira||
Mohammed||
Muhammadiyya||
Muhammadu||
Muharram||
Muhtari||
Musawa||
Musa||
Mustapha||
Na-Allah||
Naijeriya||
Najeriya||
Neja||
Nijeriya||
Nil||
Nuhu||
Nuwamba||
Oktoba||
Pakistan||
Palasɗinu||
Paris||
Pasha||
Pijo||
Rabiʼu Lahir||
Rabiʼu Lawwal||
Rahila||
Rajab||
Ramalan||
Rano||
Rasha||
Rimi||
Ringim||
Rogo||
Ruƙayyatu||
Sabon Gida||
Sabo||
Sadau||
Safar||
Sakkwato||
Saliyo||
Sallau||
Samɓala||
Samɓali||
Santambul||
Saratu||
Sarki||
Satumba||
Saudiyya||
Shaʼaban||
Sham||
Shanono||
Shawwal||
Shekarau||
Sin||
Siriya||
Soba||
Sulemanu||
Ta-Allah||
Takum||
Talata||
Talatu||
Tambutu||
Tanimu||
Tarabulus||
Tasalla||
Tsanyawa||
Tudun Wada||
Tunau||
Turai||
Turanci||
Umaru||
Usaina||
Usumanu||
Uwa||
Wagadugu||
Watari||
Wudil||
Yakubu||
Yalwa||
Yamai||
Yamal||
Yaƙubu||
Yuganda||
Yuli||
Yunananci||
Yunan||
Yuni||
Yusufu||
Zainabu||
Zandar||
Zariya||
Zazzau||
Zubairu||
Zulhajji||
Zulƙida||
abacada|alphabet|ʔàː.§b§àː.§t͡ʃ§àː.§d§âː
abada|always|ʔà.§b§à.§d§âː
abarba||
abiyo||
abjadi||
aboka||
aboki||
abu||
acca|fonio (plant)|ʔá§t.§t͡ʃ§àː
adabi||
adabo||
adadi||
adawa||
addini|religion|ʔà§d.§d§íː.§n§ìː
adduʼa||
adire||
aduwa|date (fruit)|ʔá.§d§ú.§w§àː||Kano: ʔá.dʊ́.wàː
agade||
agogo||
agola||
agushi||
agwado||
agwagwa|duck|ʔà§.ɡʷ§‹§àː.§ɡʷ§‹§áː
aibi||
aibu||
ainun||
ajali||
ajami||
ajuza||
akala||
akara||
akasidan||
akawali||
akawal||
akawu||
akushi||
akuya||
akwasa||
akwati||
alʼada||
alʼajabi||
alʼamari||
alʼaura||
alʼumma|nation, community|ʔà§l.§ʔ§ú§m.§m§àː
alabe||
alade||
alaikum salam||
alama||
alaramma||
alatu||
alawa||
albaras||
albarka||
albarushi||
albasa||
albishir||
alfadari||
alfahari||
alfijir||
algaita||
algashi||
alhaji||
alhaki||
alhali||
alhamdulillahi||
alhanzir||
alheri||
alhudahuda||
alif||
aljabara||
aljani||
aljanna||
aljan||
alkadari||
alkali||
alkama||
alkarya|unwalled town|ʔà§l.§k§á§r.§j§àː
alkawari||
alkyabba|sign of authority|ʔà§l.§c§‹§á§b.§b§àː
allura|needle, injection|ʔà§l.§l§úː.§r§àː
almajiri||
almakashi||
alwala||
alƙalami||
alƙali||
amalanke||
amale||
amana||
amarya||
amawali||
amini||
amin||
amma|but|ʔà§m.§m§áː
amsa||
anabi||
anini||
annabi||
annoba||
annuri|light, brightness|ʔà§n.§n§úː.§r§ìː
anta||
arabiyya|Arabic language|ʔà.§r§à.§b§í§j.§j§àː
aradu||
arbaʼin||
arewa||
aru-aru||
arziki||
ar||
asabari||
asali||
asara||
asawaki||
asham||
ashana||
ashirin||
asibiti||
asiri||
aske||
asubahi||
asuba||
atone-janar|attorney general|ʔà.§t§óː.§n§è.§§(d)ʒ§á.§n§à§r|Kano: ʔà.tóː.nɛ̀.d͡ʒə́.nàr
attajiri||
auduga|cotton|ʔá§u.§d§ù.§ɡ§áː
aure|marriage|ʔá§u.§ɽ§éː
awaza||
awa||
ayaba||
ayari||
aya||
ayis|ice
azaba||
azahariyya||
azahar||
azumi||
azurfa||
azzakari||
a|at, in|
aƙalla||
aƙida||
ba ...|not|
baʼaskare||
baba|father|b§àː.§b§á
babban dutse|mountain
babbar mota|truck, lorry|b§à§b.§b§á§r§ §m§óː.§t§àː
babba|big|b§à§b.§b§á
babur||
bado||
baffa|paternal uncle|b§á§f.§f§à
bahar||
bahili||
baho||
baibai||
baiti||
baitulmali||
baiwa||
bajau||
bajo||
baka||
baki|mouth, beak|b§àː.§k§íː||Kano: bàː.cíː
bakwai||
balaʼi||
balas||
bal||
bana||
banda||
banga||
bango||
bappa||
baram-baram||
bara||
barewa||
bargo||
barka||
barkono||
basasa||
basukur||
bas||
batir||
batta||
bauta||
bawa||
bayan||
baya|back|b§áː.§j§áː
ba|to give|
baƙi|black, dark|b§á.§kʼ§íː||Kano: bə́.cʼíː
bedi||
bel|, seatbelt|b§é§l
bidiʼa||
bif||
bika||
bila haddin||
bil|bill, invoice|b§î§l
bindiga||
bindi||
birgediya||
birjik||
birni||
bisa||
bishiya||
bisimillahi||
bisimilla||
biyar|five|b§ì.§j§á§r||Kano: bɪ̀.jɛ́r
biya||
biyer||
biyu biyu||
biyu|two|b§í.§j§ú||Kano: bɪ́.jʊ́
biza||
boca||
boko||
bonono||
bora||
bori||
boyi||
boɗoɗo||
budum-budum||
budurwa||
buga|to hit|
buguzunzum||
bukka|grass hut|b§ú§k.§k§àː
bura||
buroka||
burɗunɗun||
busa|to blow|
buta|kettle, teapot|b§úː.§t§àː
butsu-butsu||
buƙwi|exposed, bare|b§ù.§kʷʼ§‹§íː
buɗa-baki||
buɗu-buɗu||
buɗuɗu||
caka||
cali||
canko||
can|there|
casaʼin||
cata||
caɓa-caɓa||
caɓaɓa||
ce|to say|
cibi||
cif-cif||
cif||
cikakke|full|
cikin|in|
ciki|stomach, belly|t͡ʃ§í.§k§ìː|Kano: t͡ʃɪ́.cɪ́
cindo||
ciroma||
cir||
citta|ginger root|t͡ʃ§ì§t.§t§á
ciwo||
ciyawa|grass|
ciza|to bite|
ci|to eat|t͡ʃ§í
coci|church|t͡ʃ§óː.§t͡ʃ§ì
coi|very sweet|t͡ʃ§ó§ɪ́
cokali|spoon|t͡ʃ§óː.§k§à.§l§íː
cuku-cuku||
cukun-cukun||
cuku|cheese|t͡ʃ§ú.§k§úː||Kano: t͡ʃɪ́.kʷúː
cukwi|table|t͡ʃ§ú.§kʷ§‹§íː||Kano: t͡ʃɪ́.kʷíː
cuna||
cura||
curi||
cwai|very sweet|t͡ʃʷ§‹§á§i|alt. of coi
da yawa|many|
daʼawa|allegation, claim|d§à.§ʔ§à.§w§áː
daʼira||
dabba|animal|d§á§b.§b§àː
dabino||
dabo|magic trick|d§á.§b§òː
daddawa|sumbala condiment|d§à§d.§d§á.§w§áː
daftari||
daga||
dage||
dahir|reality, truth|d§áː.§h§ì§r
daimon||
daina||
dala||
dalili||
dama|right|
dambe||
dambu||
damisa||
danana||
dandali||
danda||
danga||
dankali||
daraja||
darasi||
dare|night|
dari||
darma||
darni||
daskara|to freeze|
dattijo||
datti||
daula||
dau||
dawa||
da|and, with|
daƙashi||
daƙiƙa||
daƙiƙi||
diʼo||
diflomasiyya||
diga||
dimokuraɗiyya||
dinari||
dina||
diwani||
diyya||
dogara||
dogari||
dogo|long|d§óː.§ɡ§óː||Kano: dóː.ɡʷóː
dokin Allah|d§óː.§k§ì§n§ §ʔá§l.§l§àː§–|praying mantis
doki||
dokta|doctor|d§ó§k.§t§àː||Kano: dɔ́k.tàː
don|because|
dorina||
dososo||
duʼaʼi|supplicatory prayer|d§ú.§ʔ§áː.§ʔ§ìː
dubban||
dubu||
dukiya||
dukuku||
duk|all|
duma||
dumɓu||
duna||
duniya||
duri||
duros||
dushi-dushi|difficult to see, hazy|d§ú.§ʃ§‹§í.§§d§ú.§ʃ§‹§í||Kano: dɪ́.ʃɪ́.dɪ́.ʃɪ́
dutse|stone, mountain|d§úː.§(t)§sʼ§èː
edita|editor|ʔé.§d§í.§t§à||Kano: ʔɛ́.dɪ́.tə̀
eka|acre|ʔéː.§k§àː|
elʼe|local authority|ʔé§l.§ʔ§êː
emti|empty container|ʔé§m.§t§ìː||Kano: ʔɛ́m.tìː
enʼe|native authority|ʔé§n.§ʔ§èː
faʼida||
faca-faca||
fahami||
fahari||
falsafa||
fam||
fangali||
fanke|fried wheat cake|f§à§n.§k§éː||Kano: ɸɛ̀ɲ.céː
fanni||
faraʼa||
farali||
farce|fingernail|f§á§ɽ.§t͡ʃ§èː||Kano: ɸáɽ.t͡ʃèː
farilla||
fari|white|f§á.§ɽ§íː||Kano: ɸə́.ɽíː; fáː.ɽì is beginning, start
fartanya||
fasaʼofis||
fasali||
fasfo|passport|f§à§s.§f§ó
fashe||
fasinja||
fasiƙi||
fata-fata||
fatanya||
fatau||
fata|skin|
fatsa|fishhook|f§á.§(t)§sʼ§á||Kano: ɸə́.sʼə́
fatsi||
fat|bright white|f§á§t
fau||
faƙiri||
faɗi|to fall|
feda||
fensir||
fes|very clean|f§é§s
fetal|open space|f§èː.§t§á§l||Kano: ɸèː.tál
fiʼili||
fidaʼu||
fiffike|wing|
fil azal||
filafili||
filas||
fili||
firamare||
fis||
fitila||
fitina||
fiƙihu||
fom||
funkaso||
fura||
fure|flower|f§ù.§ɽ§éː||Kano: ɸʊ̀.ɽéː
fururu||
gabar||
gabas||
gadara||
gada||
gado||
gadu||
gafara||
gagai||
gahawa||
gaibi||
gaira||
gaiwa||
gajere|short|ɡ§à.§(d)ʒ§éː.§ɽ§éː
gajimare|cloud|
galadima||
galala||
galas|ice|
galau||
galibi||
gam||
gandu||
ganima||
gani|to see|
ganye|leaf|ɡ§á§n.§j§éː|Kano: ɡɛ́ɲ.jéː
garkuwa||
garu||
garwashi||
gashin tsuntsu|feather|
gatari||
gato||
gatsal-gatsal||
gaula||
gawa||
gazet|gazette|ɡ§à.§z§é§t
gemu||
gimbiya||
giris||
girka||
gishiri|salt|
gitta||
giwa||
giya||
giɗi-giɗi||
goba||
goge|one-stringed fiddle|ɡ§òː.§ɡ§éː||Kano: ɡʷòː.ɟéː
goma||
gomiya||
gona||
goro||
guba||
gudana|to flow|
gula||
gulbi||
guma||
gum||
guna||
gunda||
gunus||
gunya||
gurasa||
gurnet||
guru||
gusa||
gusum||
gwaggo|paternal aunt|ɡʷ§‹§á§ɡ.§ɡ§ò
gwaiba||
gwal||
gwamnati||
gwamna||
gwanda|papaya|ɡʷ§‹§á§n.§d§àː
gwangwani||
gwaza||
gwiwa|knee|ɡʷ§‹§íː.§w§àː
hadda||
haddi||
hadisi||
hagu|left|
haila||
hairan||
haja||
haji||
hajji|hajj|h§á§(d).§(d)ʒ§ì
hakimi||
hakiya||
hakkan|surely, truly|h§á§k.§k§à§n
hakki|a right|hák.kìː
halaka||
halal||
halama||
hali||
halwa||
ham-ham||
hamada||
hamayya||
hama||
hamdala||
hamila||
hamsin||
hanci|nose|h§á§n.§t͡ʃ§ìː
hangum||
hanhai|wide open|h§à§n.§h§á§i
haniʼan||
haniya|road|
hani||
hanji|guts|
hannu|hand|
hanta|liver|h§á§n.§t§àː
hanya||
harafi||
haraji||
haram||
harsashi||
harshe|tongue, language|h§á§ɽ.§ʃ§‹§è
har||
hasafi||
hasara||
hasa||
hatimi||
hatta||
hausa|Hausa|h§á§u.§s§á
hau||
hawaʼi||
hawan-ƙaho||
hayaƙi|smoke
haziƙi||
hazo|haze, mist|h§á.§z§óː
haƙa|to dig|
haƙori|tooth|
haɓa||
haɓe||
haɓɓoje||
haɗari||
hidima||
hijabi||
hijira||
hikaya||
hikima||
hisabi||
hoda||
hole||
holo||
homan||
hubbare||
huhu||
hukuma||
hula||
humushi||
humusi||
huntu||
hura|to blow, inflate|h§úː.§ɽ§àː
husufi||
hutsu||
hutu||
huɗuba||
huɗu|four|h§ú.§ɗ§ú
ibada||
ibilis||
iblis||
ice||
idan|if|
idda||
idi||
ido|eye|ʔí.§d§òː
igiya|rope|
ijara||
ilimi||
illa||
ilmi||
imani||
in sha Allahu||
inabi||
ina|where, no movement|
ingarma||
inna||
in|if|
iri|seed|
ishara||
isha||
ishe||
iska|wind|ʔí§s.§k§àː
istihara||
itace|tree|
ita||
iyali||
izifi||
izini||
izni||
jace||
jadawali||
jafaʼi||
jahadi||
jahili||
jaka||
jaki||
jale-jale|going hither and thither|(d)ʒ§à.§l§èː.§§(d)ʒ§á.§l§éː
jamʼiyya||
jamʼi||
jamaʼa|public, community|(d)ʒ§à.§m§á.§ʔ§à
jamhuriya||
jamiʼa||
jamiʼi||
janaʼiza||
janaba||
janar||
jandarma||
jarida||
jarrabawa|test, exam|d͡ʒ§á§r.§r§ə̀.§b§âː.§w§áː
jawabi||
jawur||
jazaʼi||
jazur||
ja|red|(d)ʒ§áː||Kano: d͡ʒáː
jefa|to throw|
jidali||
jif||
jihadi||
jika||
jiki||
jimaʼi||
jimilla||
jimina||
jimla||
jim||
jimɓirɓir||
jini|blood|(d)ʒ§í.§n§íː||Kano: d͡ʒɪ́.níː
jinsi||
jirgin ruwa||
jirgin sama||
jirgin ƙasa||
jirgi||
ji|to hear|
jiƙaƙƙe|wet|
jugum||
juwa||
juya|to turn|
juzuʼi||
kabari||
kabewa||
kabila||
kaca||
kaciya||
kadari||
kada||
kado||
kafa||
kafaɗa||
kafe||
kafin||
kafiri||
kafur||
kaf||
kahuhu||
kaidi|limit, restriction|k§á§i.§d§ìː
kaigama||
kaiwa||
kai|you (singular)|k§á§i||Kano: kéi
kakaki||
kaka||
kalami||
kalma||
kaltibeta||
kam-kam||
kamala|decency, dignity|k§à.§m§áː.§l§àː
kambi||
kamfas||
kamili||
kamin||
kamyo||
kam||
kanar||
kandu||
kango||
kanne||
kanta||
kanti||
kanumfari||
karahiya||
karama||
karanta||
karce|to scratch|
kare|dog|k§à.§ɽ§éː||also kàː.rêː square
karimi||
karkanda||
karuwa||
kasat|cassette|k§áː.§s§à§t
kasa|earth|
kashe|to kill|
kasko||
kaso||
kasuwa||
kasu||
katibi||
katifa||
kati||
kauci||
kawu||
kazaf||
kazar-kazar||
kaza||
kaɗanya||
kaɗan|few|
kaɗo||
keso||
kibiya||
kifa||
kife||
kifi|fish|k§íː.§f§íː||Kano: cíː.ɸíː
kikyu-kikyu|standing alert|k§í.§c§‹§úː.§§k§ì.§c§‹§ùː
kilishi||
kili||
kimsa||
kindirmo||
kirtif||
kissa||
kiyama||
kofi||
kofur||
kogi|river|k§òː.§ɡ§íː||Kano: kʷòː.ɟíː
koka||
koko||
kolo||
koma||
komi||
komo||
kore|green|k§óː.§r§èː||Kano: kʷóː.rèː
kori||
kos||
kotu||
kubbi||
kucaki||
kudaku||
kudu|south|k§ú.§d§ù||Kano: kʷʊ́.dɪ̀
kufai||
kuge||
kukuma||
kullum||
kumallo||
kumama||
kuma|and
kumbura|to swell|
kunama||
kuni||
kunne|ear|k§û§n.§n§éː||Kano: kʷʊ̂n.néː
kunya||
kurkuku||
kurma|deaf person|k§ú§ɽ.§m§áː||Kano: kʷʊ́ɽ.máː
kurmi||
kurwa||
kusa da|near|
kusa||
kuskus||
ku|you (plural)|
kuɓewa||
kuɗi||
kwabo||
kwala||
kwalekwale||
kwal||
kwamfyuta|computer|kʷ§‹§à§m.§fʲ§‹§úː.§t§àː||Kano: kʷàm.ɸʲúː.tàː
kwano|corrugated iron|kʷ§‹§áː.§n§òː
kwanta|to lie (bed)|
kwaram|suddenly|kʷ§‹§á.§ɽ§à§m
kwarkwa|louse|
kwata-kwata||
kwatsam||
kwaɗo|frog, toad|kʷ§‹§àː.§ɗ§óː
kyaftin|captain (rank)|c§‹§á§f.§t§ì§n
kyanwa|cat|c§‹§â§n.§w§áː
kyat|cake|c§‹§â§t
kyau|good|c§‹§â§u||Kano: cɛ̂u
laʼada||
laʼalla||
laʼasariyya||
laʼasar||
laʼifi||
labarin ƙasa||
labari||
laba|pound (weight)|l§áː.§b§àː
labudda||
lacca|lecture|l§á§t.§t͡ʃ§àː
ladabi||
ladani||
ladan||
lada||
lafazi||
lafiya||
lafi||
laifi||
laima|tent, umbrella|l§á§i.§m§àː
laita||
laka||
lakile||
lale||
lalle||
lalo||
lamba||
lambu||
lamiri||
lam||
lardi||
larura|necessity|l§à.§r§úː.§r§àː||Kano: lə̀.rúː.ràː
lasin||
lasisi||
laskofur||
latsa||
launi||
lauya||
lawur||
laya||
lazza|pleasant taste|l§á§z.§z§àː
lemo|orange, soft drink|l§èː.§m§óː
lif||
likita||
limam||
liman||
linzami||
lisha||
lissafi|maths, counting|l§ì§s.§s§áː.§f§ìː
littafi||
loga||
lokaci-lokaci||
lokaci||
lori||
lugga||
lula||
luleti||
lumana||
luwaɗi||
luwul||
lu||
luƙwi|finely ground|l§ú.§kʷʼ§‹§íː
maʼamala||
maʼana||
mabiyi||
mace|woman|m§à.§t͡ʃ§èː||Kano: mə̀.t͡ʃèː
maciji|snake|m§á.§t͡ʃ§ìː.§(d)ʒ§íː
madaidaici|correct|
madubi||
magajiya||
magaji||
magariba||
magini||
mago||
mahalli||
mahawara|debate, discussion|m§à.§h§áː.§w§á.§r§àː
mai dauɗa|dirty|
mai da’ira|round|
mai faɗi|wide|
mai kaifi|sharp|
mai kauri|thick|
mai kyau|good|
mai nauyi|heavy|
mai nisa|far|
mai santsi|smooth|
mai sanyi|cold|
mai ƙunci|narrow|
mai ɗumi|warm|
da’ira|circle|d§áː.§ʔ§ì.§r§áː
maina||
maiso||
maita||
mai|oil, fat|m§â§i
majalisa||
majamiʼa||
majanuni||
makama||
makaranta||
makaɗi||
makero||
makiyayi||
mako||
malaʼika||
malama||
malami||
malam||
mama||
man shanu||
mandiri||
mangariba||
manhaja||
manja||
manjo-janar||
manjo||
manzo||
maraba||
maras kaifi|dull (knife)|
maras kyau|bad|
maras laima|dry|
marhabin||
marili||
mariri||
marke||
maroƙi||
masallaci||
masara||
masaya||
mashahuri||
mashin||
mashi||
masinja||
matalauci||
matala||
mata|wife|m§àː.§t§áː
matsa|to squeeze|
mayani||
maya||
maza||
maƙil||
maƙo-maƙo||
maɗabaʼa||
maɗaci||
mele||
mesa||
mesin||
me|what, interrogative|
miji|husband|m§í.§(d)ʒ§ìː||Kano: mɪ́.d͡ʒìː
mim||
minista||
minti||
misali||
mishi||
miskini||
miski||
miya||
mizani||
miƙaƙƙe|straight|
miƙe tsaye|to stand|
molo||
mota||
mowa||
muʼamala||
muʼujiza||
mubazzari|spendthrift|m§ù.§b§á§z.§z§à.§ríː
muddin||
mugun dawa||
mugu|bad, evil|m§úː.§ɡ§ùː||Kano: múː.ɡʷùː
muhibba||
muhimmi|important|m§ù.§h§í§m.§m§ìː
muhuri||
mujaddadi||
mujalla||
mujiya||
mula||
mulki||
mulukiya||
mumbari||
mumini||
munafuki||
muradi||
murfi||
murhu||
murjani||
murtuk||
murzani||
murza||
mur||
mushe||
mushiriki||
mussa||
musulmi||
mutum|man|m§ù.§t§û§m||Kano: mʊ̀.tɪ̂ŋ
mutu|to die|m§ú.§t§ù||Kano: mʊ́.tɪ̀
muzi||
muzuru||
mu|we|m§úː
naʼam||
naʼibi||
naʼura|machine, computer|n§àː.§ʔ§úː.§r§àː
nafila||
nahawu||
nahiya||
naira||
nama|meat|n§áː.§m§àː
nan|here|
nasaba||
nasara||
nasaru||
nasiha||
nas||
nauʼi||
nazari||
nesa||
niʼima||
nim|neem tree|n§î§m
nishaɗi||
ni|I|níː
nono|milk|n§óː.§n§òː
notis||
noti||
nukus||
nun||
obin|oven|ʔóː.§b§ì§n
ofis|office|ʔóː.§f§ì§s
oga|boss, supervisor|ʔò.§ɡ§áː
omo|detergent, soap powder|ʔóː.§m§òː
oza|ounce|ʔóː.§z§àː
parmi|driver's licence|p§à§r.§m§îː||Niger. Nigeria is lasin.
pasaje|passenger|p§à.§s§à.§(d)ʒ§êː||Niger. Nigeria has fasinja.
pil|battery|p§î§l||Niger. Nigeria has batir.
po|children's toilet|p§ôː
raʼayi||
raʼi||
raba|to split|
raf-raf||
rafani||
ragama||
rahama||
rahusa||
rairai||
rairayi|sand|ɽ§à§i.§ɽ§à.§j§íː||Kano: ɽèi.ɽɛ̀.jíː
rai||
rakaʼa||
rake||
raki||
rama||
rami||
ramɓasɓas||
rana-rana||
rana|day, sun|ɽ§áː.§n§áː
randa||
rashawa||
rawani||
rawaya|yellow|ɽ§àː.§w§á.§j§àː||Kano: ɽàː.wɛ́.jàː
raƙumi||
raɓa|dew|ɽ§áː.§ɓ§áː
raɓe-raɓe||
raɗau||
rema||
rera waƙa|to sing|
reras||
reza||
riba||
ridda||
riga||
rige||
rimi||
riris||
ri||
riƙe|to hold|
rogo||
romo||
ruʼuya||
rubuʼi||
rubuta||
rugu-rugu||
ruhu||
rula||
rututu||
ruwan inabi||
ruwan sama|rain|
ruwan-azurfa||
ruwan-hoda||
ruwan-toka||
ruwan-ƙasa||
ruwa|water|ɽ§ú.§w§áː||Kano: ɽʊ́.wáː
ruɓaɓɓe|rotten|
saʼa||
saʼida||
sabaʼin||
sababi||
sabo|new|s§áː.§b§óː
sadaka||
sadaki||
sada||
sadin||
safara||
safa||
safe||
safi||
sagara||
sage||
sago||
sahani||
sahibi||
sahihi||
sahur||
saiwa|root|
saja||
sakan||
sakarai||
sake||
sako-sako||
sako||
salama||
salamu alaikum||
salati||
salga||
salihi||
salka||
salla||
samanja||
sama|sky|s§á.§m§à||Kano: sə́.mə̀
samɓal||
samɓalɓal||
sanaʼa||
sanata||
sandal||
sanda|stick|s§à§n.§d§á
sanduƙi||
saniya||
sani|to know|s§á.§n§ìː
sanka||
sannu-sannu||
sannu||
sansana|to smell|
santi||
sarai||
sarara||
sarauniya||
sardauna||
sarka||
sarki||
sarƙa||
sata||
sati||
sauna||
sauti||
sau||
saye||
sa||
saɗara||
sef||
shaʼani||
shadda||
shafa|to wipe|
shahada||
shaho||
shaiʼan||
shaihi||
shaiɗan||
shapo|hat|ʃ§‹§à.§p§ôː||Niger.
sharaɗi||
sharhi||
shariʼa||
sharifi||
sharif||
sharo||
sharri||
sharu||
shat|shirt|ʃ§‹§â§t
shayi||
sha|to drink|ʃ§‹§á
shehi||
shehu||
shekara|year|ʃ§‹§èː.§k§á.§ɽ§àː
sheƙeƙe||
shida||
shifta||
shinge||
shinkafa||
shin||
shirim||
shirka||
shiru||
shi|he|ʃí
shuʼumi||
shuka||
shuɗi||
sifiri||
siga||
siket|skirt|s§ì.§k§é§t
sila||
silin||
sili||
sin||
sirdi||
siriri|thin|
sista||
sitampi|postage stamp|s§ì.§t§á§m.§p§ìː
sitam||
sitira||
sito||
sittin||
siyasa||
siɗik||
soci||
soka|to stab|
sol||
somi||
soso||
soye|fried meat|s§òː.§j§éː
sufana||
sujjada|prostration (prayer)|s§ù§(d).§(d)ʒ§á.§d§àː
sukari||
sukuku||
suma|hair|
sumul||
sum||
sunan yanka||
suna|name|s§úː.§n§áː
sunduƙi||
sunna||
sura||
suya||
su|slithering|s§ùː
tabarau||
tabarma||
tabki|lake|
tadawa||
tafki||
tafsiri||
taga||
tagomashi|popularity|t§á.§ɡ§óː.§m§à.§ʃ§‹§íː
taguwa||
tajiri||
takalmi||
takarda||
takila||
takobi||
takunkumi||
takwas||
talaka||
talatin||
taliki||
talla||
talle||
tamanin||
tambaya||
tambur||
tanaka||
tana||
tandu||
tano||
tantabara||
tantakwashi||
tanti||
tara||
tarbiyya||
tarihi||
tarnatsa||
taru||
tasa||
tashi|to fly|
tasi||
taska||
tasku||
taso kan ruwa|to float|
taswira||
tattabara||
tatul||
taubashi||
tauhidi||
tauna||
tauraro|star|t§à§u.§ɽ§áː.§ɽ§òː
taure||
tausa|massage|t§à§u.§s§áː
tautau||
tawada||
taɓo||
tef||
teku|ocean, sea|t§èː.§k§ú||Kano: tèː.kʷʊ́
tela||
tifa||
tif||
tijara||
tik||
tilas||
tilo||
tim||
tire||
tisʼin||
titi||
ti||
tiƙis||
tofa|to spit|
toka|ashes|t§òː.§k§áː
ton|ton|t§ó§n
toshiya||
tozali||
tozo||
tsabga||
tsada||
tsaf|neatly, completely|(t)sʼ§‹§á§p||Kano: sʼáp
tsai||
tsaka|type of gecko|(t)sʼ§‹§á.§k§áː|Kano: sʼə́.káː
tsalala||
tsan-tsan||
tsauni||
tsaya|to stand|
tsere||
tsibiri||
tsigi|type of bird|(t)sʼ§‹§íː.§ɡ§íː
tsila||
tsintsiya||
tsit||
tsoho|old|(t)sʼ§‹§óː.§h§óː|Kano: sʼóː.hóː
tsololo||
tsoro|to fear|
tsotsa|to suck|
tsundum||
tsuntsun Maka||
tsuntsu|bird|(t)sʼ§‹§ú§n.§(t)sʼ§‹§úː||Kano: sʼɪ́n.sʼúː
tsutsa|worm|
tubali||
tubarkalla||
tuhuma||
tukuf||
tulu||
tuntu||
tun||
turare||
tura|to push|
turba||
tururi||
tusa||
tuta||
tutu||
tuwo||
tuɓur-tuɓur|large & round|t§ú.§ɓ§ú§r.§§t§ù.§ɓ§ù§r
uba|father|ʔù.§b§áː
uda||
uku|three|ʔú.§k§ù
ulu||
umra||
ungozoma||
ungulu||
ushira||
ushiri||
usur|whistle|ʔú.§s§ù§r
uwa|mother|ʔú.§w§áː
uzuri|excuse|ʔú.§z§ù.§r§íː
uƙuba|misery, anguish|ʔù.§kʼ§úː.§b§àː
waʼadi||
waʼazi||
wada||
waga||
wahala||
waha||
wakili||
walau||
wala||
waliyyi||
wali||
wallahi||
wal||
walƙiya||
wancan|other, that|
wani||
wanka||
wanke|to wash|
wannan|this|
wanwar||
wanzami||
wanzam||
wanzanci||
wara-wara||
ware||
warwar||
warwas||
warƙa||
wasai||
wasali||
wasa||
wasiyya||
wasiƙa||
wata|moon|w§á.§t§àː
watsal-watsal||
wau||
waziri||
wa|who, interrogative|
waƙafi||
waɗansu|some|
wili||
wofi||
wokaci||
wulik||
wuluk||
wul||
wuni-wuni||
wuridi||
wurin|at|
wuski||
wuta|fire|w§ú.§t§áː
wutsiya|tail|
wuya|neck|w§ú.§j§àː
wuƙa||
wuƙi-wuƙi|children fidgeting|w§ù.§kʼ§ìː.§§w§ú.§kʼ§íː||Kano: wʊ̀.cʼìː.wʊ́.cʼíː
yadda||
yallaɓai||
yalo||
yanka|to cut|
yanki||
yarima|prince|j§à.§r§íː.§m§à
yarinya|girl|j§áː.§ɽ§í§n.§j§àː
yari||
yaro|boy|j§áː.§ɽ§òː
yatsa||
yaushe|when, interrogative|
yautai||
yaya|how, interrogative|
yayyafi|drizzle, light rain|j§á§j.§j§á.§f§íː
yi amai|to vomit|
yi barci|to sleep|
yi dariya|to laugh|
yi farauta|to hunt|
yi faɗa|to fight|
yi iyo|to swim|
yi kwanciya|to lie (bed)|action|
yi numfashi|to breathe|
yi rai|to live|
yi tafiya a ƙas|to walk|
yi tsammani|to think|
yi wasa|to play|
yini|day|
yis||
zaʼida||
zabarjadi||
zafaran||
zahiri||
zaiba||
zaiti||
zaitun||
zaki||
zakka||
zamani||
zamba||
zara||
zare||
zarto||
zauna|to sit|
zau||
zaƙaƙa||
zigidir||
zikiri||
zik||
zinariya||
zinari||
zina||
ziraʼi||
zi||
zololo|tall and thin|z§òː.§l§òː.§l§òː
zomo|hare|z§óː.§m§óː
zo|to come|
zuciya|heart|
zundum||
zunubi||
zuriya||
Ɓaɓura||
Ɗan Altine||
Ɗan Asabe||
Ɗan Azumi||
Ɗan Kaka||
Ɗanjuma||
Ɗanladi||
Ɗanlami||
Ɗantala||
Ƙasar Maka||
Ƙasar Makka||
Ƙosau||
Ƙudus||
ƙaʼida||
ƙaʼimi||
ƙabila||
ƙadangare||
ƙaddara||
ƙafa|foot, leg|kʼ§á.§f§àː||Kano: kʼə́.ɸàː
ƙaho|horn|kʼ§à.§h§óː||Kano: kʼə̀.hóː
ƙala||
ƙal||
ƙamus||
ƙandas||
ƙanƙane||
ƙanƙara|snow|
ƙarami|small|kʼ§à.§ɽ§á.§m§íː
ƙarni||
ƙarƙaf||
ƙasa||
ƙashi|bone|kʼ§à.§ʃ§‹§íː
ƙasida||
ƙas||
ƙato||
ƙauye||
ƙazaf||
ƙazami||
ƙazanta||
ƙerere||
ƙiba|fat (noun)|
ƙidaya|to count|
ƙififiya||
ƙiri-ƙiri||
ƙirin||
ƙirji|chest (body)|kʼ§ì§ɽ.§(d)ʒ§íː||Kano: cʼɪ̀ɽ.d͡ʒíː
ƙissa||
ƙiyasi||
ƙiƙam||
ƙoda|kidney|kʼ§óː.§d§àː
ƙone|to burn|
ƙorama||
ƙosai||
ƙoƙari|effort|kʼ§òː.§kʼ§á.§ɽ§í
ƙoƙiƙoƙi||
ƙube|traditional cap|kʼ§úː.§b§è
ƙugiya|hook|kʼ§úː.§ɡ§ì.§j§áː||Kano: kʷʼúː.ɟɪ̀.jáː
ƙuli-ƙuli||
ƙulumi||
ƙumba||
ƙundu||
ƙungurmin daji|forest|
ƙurar ƙasa|dust|
ƙuriʼa||
ƙursunsun||
ƙurungu||
ƙut||
ƙuƙut||
ƙwai|egg|kʷʼ§‹§á§i||Kano: kʷʼéi
ƙwal-ƙwal|smooth-shaved head|kʷʼ§‹§á§l.§kʷʼ§‹§á§l
ƴar|a little bit|j̰§á§r|
ƴa|daughter|j̰§áː
ɓaga-ɓaga||
ɓakutu|neckless clay pot|ɓ§áː.§k§ú.§t§ú
ɓal-ɓal|sth. thick boiling|ɓ§à§l.§§ɓ§à§l
ɓalo-ɓalo|large, round liquid container|ɓ§á.§l§óː.§§ɓ§à.§l§òː
ɓangwalgwal|solid, round & fleshy|ɓ§à§n.§ɡʷ§‹§à§l.§ɡʷ§‹§à§l
ɓarawo|thief|ɓ§à.§ɽ§áː.§w§òː
ɓaure|fig|ɓ§á§u.§ɽ§éː
ɓawon itace|bark (tree)|
ɓelele|wide-mouthed laughter|ɓ§èː.§l§èː.§l§èː
ɓulla|to appear suddenly|ɓ§ù§l.§l§á
ɓurma|rat trap|ɓ§ú§ɽ.§m§á
ɗaʼa||
ɗabiʼa||
ɗalibi||
ɗan Adam|man (human being)|ɗ§á§n§ §ʔá.§d§à§m||Kano: ɗáŋ ʔá.dàŋ
ɗan sanda||
ɗan shayi||
ɗanye||
ɗan||
ɗar-ɗar||
ɗari||
ɗaura|to tie|
ɗawafi||
ɗawisu||
ɗaya|one|ɗ§á.§j§á||dʼaja
ɗa||
ɗefi||
ɗigo||
ɗim||
ɗinka|to sew|
ɗungum||
ɗu||
ʼyaʼya|children|›§j̰§a§›§j̰§a|
’ya’yan itace|fruit||
ƴaƴa|children|j̰§a§j̰§a|



ƙara|to increase|kʼ§aː§ɽ§aː
kishi|jealousy|c§iː§ʃ§‹§iː









































`

