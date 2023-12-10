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




autoExpandExamples.mid = `

@ wiktionary

-ࡖ|of||ḏ-
ࡀࡃࡀࡌ ࡓࡁࡀ|soul, mind||adām rba
ࡀࡃࡀࡌ|Adam||adām
ࡀࡃࡅࡍࡀࡉ|title for the sun||adunay
ࡀࡃࡌ|Adam||adam
ࡀࡋࡀࡄࡀ|God||alaha
ࡀࡋࡌࡀ ࡖࡄࡔࡅࡊࡀ|World of Darkness||alma d-hšuka
ࡀࡋࡌࡀ ࡖࡍࡄࡅࡓࡀ|World of Light||alma d-nhura
ࡀࡋࡌࡀ|world||alma
ࡀࡌࡓࡀ|Amram||amrā
ࡀࡍࡀࡔࡀ|person, human||anaša
ࡀࡍࡅࡔ|Enoch||anōš
ࡀࡐࡀ|father, ancestor||aba
ࡀࡐࡀࡓࡀ|lead (metal)||abara
ࡁࡀࡁࡉࡋ|Babylon||bābīl
ࡁࡀࡂࡀࡋ|mule||baglal
ࡁࡉࡋ|Bel; Jupiter||bīl
ࡁࡉࡋࡀࡅࡓ|crystal||bīlawr
ࡁࡉࡕ ࡌࡉࡒࡃࡀࡔࡅࡀ|Jerusalem Temple||bīt mīqdāšia
ࡁࡉࡕ|house||bīt
ࡁࡓ|son||b'r
ࡁࡓࡀࡄࡉࡌ|Abraham||brahim
ࡂࡉࡍࡆࡀ|treasure||ginza
ࡃࡓࡀࡔࡀ|sermon||draša
ࡄࡀࡁࡔࡀࡁࡀ|Sunday||habšaba
ࡄࡉࡁࡅࡋ|Abel||hibil
ࡄࡉࡉࡀ ࡒࡀࡃࡌࡀࡉࡉࡀ|First Life||haiyi qadmaiyi
ࡄࡉࡉࡀ ࡓࡁࡉࡀ|Great Life||haije rabia
ࡄࡉࡉࡀ|life||haije
ࡆࡀࡓࡅࡀࡍ|Ahura Mazda||zarvan
ࡆࡉࡃࡒࡀ|righteousness||zidqa
ࡉࡀࡄࡁࡀ|Judaism||yahba
ࡉࡀࡄࡅࡃࡉࡋࡀࡏࡉࡋ|Judea||yahwdyla'yl
ࡉࡅࡔࡀࡌࡉࡍ|Yoshamin||Yōšamin
ࡊࡀࡄࡍࡀ|Jewish priest||kahna
ࡊࡋࡀࡕࡀ|three|k§l§ɒː§θ§ɒ|klɔ̄ṯɔ
ࡋࡉࡁ࡛ࡀ|heart||lib˖ā
ࡌࡀࡋࡊࡀ ࡖࡍࡄࡅࡓࡀ|King of Light||malka d-nhura
ࡌࡀࡋࡊࡀ|king||malka
ࡌࡀࡍࡀ ࡓࡁࡀ|Great Mind||mana rba
ࡌࡀࡍࡀ|mind||mana
ࡌࡀࡍࡃࡀ ࡖࡄࡉࡉࡀ||
ࡌࡀࡍࡃࡀ|knowledge||manda
ࡌࡀࡍࡃࡉࡉࡀࡍࡀ|Mandaeism||mandeyānā
ࡌࡀࡑࡁࡅࡕࡀ|baptism||maṣwetta
ࡌࡀࡓࡀ ࡖࡄࡔࡅࡊࡀ|Lord of Darkness||mara d-hšuka
ࡌࡀࡓࡀ ࡖࡓࡀࡁࡅࡕࡀ|Lord of Greatness||mara d-rabuta
ࡌࡀࡓࡀ|lord||mara
ࡌࡅࡒࡃࡀࡎ|Jerusalem||muqdas
ࡌࡉࡀ|water||mya
ࡌࡉࡓࡉࡀࡉ|Mary||miryai
ࡌࡉࡔࡀ|Moses||mīšā
ࡍࡀࡑࡅࡓࡀࡉࡀ|initiate||naṣuraia
ࡍࡅ|Noah||nū
ࡍࡉࡎࡓࡀࡕ|Nazareth||nisrat
ࡍࡉࡔࡉࡌࡕࡀ|soul||nišimta
ࡎࡉࡍࡀࡉ|Sinai||sinai
ࡏࡅࡓࡀࡔࡋࡀࡌ|Jerusalem||urašlām
ࡏࡅࡕࡓࡀ|angel||uthra
ࡏࡔࡅ|Jesus||’šu/īšū
ࡐࡀࡂࡓࡀ|body||pagra
ࡒࡀࡃࡅࡔ|Ephitet of Adonai||qādūš
ࡒࡀࡃࡅࡔࡀࡍ|angel||qādūšān
ࡓࡁࡉࡀ|master||rabia
ࡔࡀࡃࡀࡉ||
ࡔࡀࡃࡀࡍࡀ|Jewish name for God||šidana
ࡔࡅࡁࡀ|seven||šuba
ࡔࡅࡌ|Shem||šum
ࡕࡀࡓࡌࡉࡃࡀ|disciple, priest||tarmida
ࡕࡉࡁࡉࡋ|world||tibil
ࡕࡓࡉࡎࡀࡓ|twelve||trisar


























`

