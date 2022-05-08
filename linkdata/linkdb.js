



// Script summary pages, used by /scripts/links
var scriptNotes= {  
    'adlm':[['Adlam/Pular','adlam/fuf.html']],
    'arab':[['Modern Standard Arabic','arabic/arb.html'], 
			['Hausa (ajami)', 'arabic/ha.html'],
			['Kashmiri', 'arabic/ks.html'],
			['Persian', 'arabic/pes.html'],
			['Urdu', 'arabic/ur.html'], 
			['Uighur', 'arabic/ug.html'], 
			], 
    'armn':[['Armenian','armenian/hy.html']],
    'bali':[['Balinese', 'balinese/ban.html']], 
    'bamu':[['Bamum', 'bamum/bax.html']], 
    'bass':[['Bassa Vah', 'bassavah/bsq.html']], 
    'batk':[['Batak', 'batk/btk.html']], 
    'beng':[['Bengali/Bangla', 'bengali/bn.html']],
    'bugi':[['Buginese', 'buginese/bug.html']],
    'cans':[['Eastern Canadian Inuktitut', 'cans/ike.html'],
    		['Plains Cree', 'cans/crk.html']
    		],
    'cher':[['Cherokee', 'cherokee/chr.html']],
    'cyrl':[['Mongolian', 'cyrillic/mn.html'],
    		['Ukrainian', 'cyrillic/uk.html'],
    		['Russian', 'cyrillic/ru.html']
    		],
    'deva':[['Hindi', 'devanagari/hi.html'], 
			['Kashmiri', 'devanagari/ks.html']
			],
    'ethi':[['Amharic', 'ethiopic/am.html']],
    'geor':[['Georgian', 'georgian/ka.html']],
    'grek':[['Greek', 'greek/el.html']],
    'gujr':[['Gujarati', 'gujarati/gu.html']],
    'guru':[['Punjabi', 'gurmukhi/pa.html']],
    'hani':[['Chinese', 'han/index.html']],
    'hang':[['Hangul/Korean', 'hangul/index.html']],
    'hebr':[['Hebrew', 'hebrew/he.html']],
    'java':[['Javanese', 'javanese/jv.html']],
    'jpan':[['Japanese', 'jpan/index.html']],
    'kali':[['Kayah Li', 'kali/kyu.html']],
    'khmr':[['Khmer', 'khmer/km.html']],
    'laoo':[['Lao', 'lao/lo.html']],
    'lana':[['Tai Khün', 'taitham/kkh.html'], 
			['Northern Thai', 'taitham/nod.html']],
    'latn':[['Bamanan', 'latin/bm.html'],
    		['Fula', 'latin/ff.html'],
    		['Hausa (boko)', 'latin/ha.html']
    		],
    'lisu':[['Lisu', 'lisu/lis.html']],
    'mand':[['Mandaic', 'mandaic/mid.html']],
    'mong':[['Mongolian', 'mongolian/mn.html']],
    'mlym':[['Malayalam', 'malayalam/ml.html']],
    'mymr':[['Myanmar/Burmese', 'myanmar/my.html'],
			['Shan', 'myanmar/shn.html']],
    'newa':[["Newar", 'newa/new.html']],
    'nkoo':[["N’Ko", 'nko/nqo.html']],
    'olck':[["Santali", 'santali/sat.html']],
    'orya':[["Odia (Oriya)", 'oriya/or.html']],
    'osge':[["Osage", 'osage/osa.html']],
    'rohg':[["Hanifi Rohingya", 'rohg/rgh.html']],
    'sinh':[['Sinhala', 'sinhala/si.html']],
    'sund':[['Sundanese', 'sundanese/su.html']],
    'syrc':[['Syriac', 'syriac/syr.html'],
 			['Assyrian Neo-Aramaic', 'syriac/aii.html'],
 			['Turoyo', 'syriac/tru.html']
			],
    'tale':[['Tai Le/Tai Nüa', 'taile/tdd.html']],
    'talu':[['New Tai Lü', 'newtailue/khb.html']],
    'taml':[['Tamil', 'tamil/ta.html']],
    'telu':[['Telugu', 'telugu/te.html']],
    'tavt':[['Tai Viet/Tai Dam', 'taiviet/blt.html']],
    'thaa':[['Thaana/Dhivehi', 'thaana/dv.html']],
    'thai':[['Thai', 'thai/th.html']],
    'tibt':[['Tibetan', 'tibetan/bo.html']],
    'tfng':[['(Neo-)Tifinagh/Tamazight', 'tifinagh/zgh.html']],
    'vaii':[['Vai', 'vai/vai.html']],
    }




// Script summary selector, used by /scripts/#scriptnotes
var scriptNotesByRegion = {  
	'A':[
		['Adlam[', 'adlam/'],
		['Pular]', 'adlam/'],
		['Amharic', 'ethiopic/'],
		['<em>Arabic</em>[','arabic/'],
		['MSA','arabic/'],
		['Persian','arabic/arab-fa'],
		['Urdu]','arabic/urdu'],
		['Armenian','armenian/'],
		['Assyrian Neo-Aramaic', 'syriac/syrc-aii'],
		],
	'B':[
		['Balinese', 'balinese/'],
		['Bamum', 'bamum/'],
		['Bangla', 'bengali/'],
		['Bassa Vah', 'bassavah/'],
		['Batak', 'batk/'],
		['Bengali', 'bengali/'],
		['Buginese', 'buginese/'],
		['Burmese', 'myanmar'],
		],
	'C':[
		['Cherokee', 'cherokee/'],
		['Chinese', 'han/'],
		['Cyrillic', 'cyrillic/'],
		],
	'D':[
		['Devanagari', 'devanagari/'],
		['Dhivehi', 'thaana/'],
		],
	'E':[
		['Eastern Canadian Inuktitut', 'cans/'],
		['Ethiopic', 'ethiopic/'],
		],
	'G':[
		['Georgian', 'georgian/'],
		['Greek', 'greek/'],
		['Gujarati', 'gujarati/'],
		['Gurmukhi', 'gurmukhi/'],
		],
	'H':[
		['Han', 'han/'],
		['Hangul', 'hangul/'],
		['Hanifi Rohingya', 'rohg/'],
		['Hausa (boko)', 'latin/hausa'],
		['Hausa (ajami)', 'arabic/hausa'],
		['Hebrew', 'hebrew/'],
		['Hindi', 'devanagari/'],
		],
	'J':[
		['Japanese', 'jpan/'],
		['Javanese', 'javanese/'],
		],
	'K':[
		['Kashmiri (arab)', 'arabic/kashmiri'],
		['Kashmiri (deva)', 'devanagari/kashmiri'],
		['Kayah LI', 'kali/'],
		['Khmer', 'khmer/'],
		['Korean', 'hangul/'],
		],
	'L':[
		['Lao', 'lao/'],
		['Lisu', 'lisu/'],
		],
	'M':[
		['Malayalam', 'malayalam'],
		['Mandaic', 'mandaic/'],
		['Mongolian (cyrl)', 'cyrillic/mn'],
		['Mongolian (mong)', 'mongolian/'],
		['Myanmar', 'myanmar'],
		],
	'N':[
		["N’Ko", 'nko'],
		['Newa', 'newa/'],
		['New Tai Lü', 'newtailue/'],
		['Northern Thai', 'taitham/northernthai'],
		],
	'O':[
		['Odia (Oriya)', 'oriya/'],
		['Ol Chiki', 'santali/'],
		['Osage', 'osage/'],
		],
	'P':[
		['Plains Cree', 'cans/cans-crk'],
		['Persian', 'arabic/arab-fa'],
		['Pracalit', 'newa/'],
		['Pular', 'adlam/'],
		['Punjabi', 'gurmukhi/'],
		],
	'R':[
		['Rohingya (Hanifi)', 'rohg/'],
		['Russian', 'cyrillic/'],
		],
	'S':[
		['Santali', 'santali/'],
		['Shan', 'myanmar/mymr-shn'],
		['Sinhala', 'sinhala/'],
		['Sundanese', 'sundanese/'],
		['Syriac', 'syriac/'],
		],
	'T':[
		['Tai Dam', 'taiviet/'],
		['Tai Khün', 'taitham/'],
		['Tai Le', 'taile/'],
		['Tai Nüa', 'taile/'],
		['Tai Tham', 'taitham/'],
		['Tai Viet', 'taiviet/'],
		['Tamazight', 'tifinagh/'],
		['Tamil', 'tamil/'],
		['Telugu', 'telugu/'],
		['Thaana', 'thaana/'],
		['Thai', 'thai/'],
		['Tibetan', 'tibetan/'],
		['(Neo-)Tifinagh', 'tifinagh/'],
		['Turoyo', 'syriac/syrc-tru'],
		],
	'U':[
		['UCAS', 'cans/'],
		['Uighur', 'arabic/uighur'],
		['Urdu', 'arabic/urdu'],
		],
	'V':[
		['Vai', 'vai/'],
		],
	}




// Locations of character notes pages,  used by /scripts/links
var charNotesList = {
    'adlm':['Adlam', 'adlam/block.html'],
    'armn':['Armenian', 'armenian/block.html'],
    'arab':['Arabic', 'arabic/block.html'], 
    'bali':['Balinese', 'balinese/block.html'], 
    'bamu':['Bamum', 'bamum/block.html'], 
    'bass':['Bassa Vah', 'bassavah/block.html'], 
    'batk':['Batak', 'batk/block.html'], 
    'beng':['Bengali', 'bengali/block.html'],
    'bugi':['Buginese', 'buginese/block.html'],
    'cher':['Cherokee', 'cherokee/block.html'],
	'currency':['Currency&nbsp;Symbols', 'currency/block.html'],
    'cyrl':['Cyrillic', 'cyrillic/block.html'],
    'deva':['Devanagari', 'devanagari/block.html'],
    'ethi':['Ethiopic', 'ethiopic/block.html'],
    'geor':['Georgian', 'georgian/block.html'],
    'grek':['Greek', 'greek/block.html'],
    'gujr':['Gujarati', 'gujarati/block.html'],
    'guru':['Gurmukhi', 'gurmukhi/block.html'],
    'hani':['Punctuation', 'punctuation/block.html'],
    'hebr':['Hebrew', 'hebrew/block.html'],
    'jpan':['Punctuation', 'punctuation/block.html'],
    'java':['Javanese', 'javanese/block.html'],
    'kali':['Kayah Li', 'kali/block.html'],
    'khmr':['Khmer', 'khmer/block.html'],
    'laoo':['Lao', 'lao/block.html'],
    'lisu':['Lisu', 'lisu/block.html'],
    'latn':['Latin', 'latin/block.html'],
    'maka':['Makasar', 'makasar/block.html'],
    'mlym':['Malayalam', 'malayalam/block.html'],
    'mand':['Mandaic', 'mandaic/block.html'],
    'mong':['Mongolian', 'mongolian/block.html'],
    'mymr':['Myanmar', 'myanmar/block.html'],
    'talu':['New&nbsp;Tai&nbsp;Lue', 'newtailue/block.html'],
    'newa':['Newa', 'newa/block.html'],
    'nkoo':['NKo', 'nko/block.html'],
    'olck':['Ol Chiki', 'santali/block.html'],
    'orya':['Oriya', 'oriya/block.html'],
    'osge':['Osage', 'osage/block.html'],
	'punctuation':['Punctuation', 'punctuation/block.html'],
    'rohg':['Hanifi Rohingya', 'rohg/block.html'],
    'runr':['Runic', 'runic/block.html'],
    'sinh':['Sinhala', 'sinhala/block.html'],
    'sund':['Sundanese', 'sundanese/block.html'],
    'syrc':['Syriac', 'syriac/block.html'],
    'tale':['Tai&nbsp;Le', 'taile/block.html'],
    'lana':['Tai&nbsp;Tham', 'taitham/block.html'],
    'tavt':['Tai&nbsp;Viet', 'taiviet/block.html'],
    'taml':['Tamil', 'tamil/block.html'],
    'telu':['Telugu', 'telugu/block.html'],
    'thaa':['Thaana', 'thaana/block.html'],
    'thai':['Thai', 'thai/block.html'],
    'tibt':['Tibetan', 'tibetan/block.html'],
    'tfng':['Tifinagh', 'tifinagh/block.html'],
    'cans':['UCAS', 'cans/block.html'],
    'vaii':['Vai', 'vai/block.html'],
    }



// orthography comparison table (/scripts/featurelist/) NEW ONE with language data
var orthoChart = {
'adlm':'Pular',
'arab':'MS Arabic, Hausa, Kashmiri, Persian, Urdu, Uighur',
'armn':'Armenian',
'bali':'Balinese',
'bamu':'Bamum',
'bass':'Bassa Vah',
'beng':'Bengali',
'bugi':'Buginese',
'cans':'Eastern Canadian Inuktitut, Plains Cree', 
'cher':'Cherokee',
'cyrl':'Russian, Mongolian',
'deva':'Hindi, Kashmiri',
'ethi':'Amharic',
'geor':'Georgian',
'grek':'Modern Greek',
'gujr':'Gujarati',
'guru':'Punjabi',
'hani':'Mandarin Chinese',
'hang':'Korean',
'hebr':'Hebrew',
'java':'Javanese',
'jpan':'Japanese',
'knda':'Kannada',
'khmr':'Khmer',
'lana':'Khün, Northern Thai',
'laoo':'Lao',
'latn':'Hausa',
'lisu':'Lisua',
'mand':'Neo-Mandaic',
'mlym':'Malayalam',
'mong':'Mongolian (Halh)',
'mymr':'Burmese',
'newa':'Newar',
'nkoo':'N’Ko',
'orya':'Odia',
'osge':'Osage',
'rohg':'Hanifi Rohingya',
'sinh':'Sinhala',
'sund':'Sundanese',
'syrc':'Syriac, Turoyo, Assyrian Neo-Aramaic',
'tale':'Tai Nüa',
'talu':'Tai Lü',
'taml':'Tamil',
'tavt':'Tai Dam',
'telu':'Telugu',
'tfng':'Standard Moroccan Tamazight',
'thaa':'Dhivehi',
'thai':'Thai',
'tibt':'Tibetan',
'vai':'Vai',
}




// URL endings for scriptsource historical bibliograpy, used by /scripts/links
var ssHistory = { 'grek':'wxsx5j4kzt', 'cyrl':'ngc339csy8', 'armn':'z35gwmg4ft', 'hebr':'qek84cbq5u', 'arab':'hqr6rc9md5', 'syrc':'hlvzdczufr', 'thaa':'n2tj49rr2n', 'nkoo':'mnqzubphu7', 'samr':'qv7wwr9xgp', 'mand':'djwvfmuu3h', 'deva':'b6c6j63sf5', 'beng':'f8jrlqwbac', 'guru':'fd27tquj5j', 'gujr':'yqug2kbjjr', 'orya':'znkmblg693', 'taml':'zw5nedjarb', 'telu':'sjrwm9ppr3', 'knda':'ur8y3qj6yk', 'mlym':'ypvmjurtyg', 'sinh':'sbwtu85wbv', 'thai':'d877ebfc65', 'laoo':'98522835fg', 'tibt':'mg8ulatcjb', 'mymr':'vcz6flwzqs', 'geor':'rbr2wkvu4m', 'ethi':'fvp74ug66k', 'cher':'nwnmgh2n8j', 'cans':'c36d846u2d', 'ogam':'d3z382ahas', 'runi':'ha667hekd4', 'tglg':'76d3376b7c', 'hano':'ga9dbe72a2', 'buhd':'h4446ag538', 'tagb':'d62f48hfad', 'khmr':'2269c7g9ee', 'mong':'xluqdp54ts', 'limb':'a2exgfkrmf', 'tale':'76c7d2ch4g', 'talu':'37fcf7h92b', 'bugi':'739e2e7g2e', 'lana':'gf97b8ad78', 'bali':'f2bb6f3bh9', 'sund':'3844bc8cea', 'batk':'geb5h358d3', 'lepc':'g6cv78jn42', 'olck':'rrkdvn7crf', 'glag':'lbhv6e4efr', 'copt':'msg4hep5ev', 'tfng':'wmx4utrkuc', 'jpan':'ly5dbxtthx', 'bopo':'tk449c64jh', 'yiii':'ejx9jwrd8e', 'lisu':'473c93dddf', 'vaii':'z8tk356ua7', 'bamu':'aeg5ah9fbg', 'sylo':'kylcx42avd', 'phag':'y22gh9p8g2', 'saur':'eqjs45mf8t', 'kali':'enl5dse8jv', 'rjng':'72d3ce3834', 'java':'db9724gea9', 'cham':'c4yzafta3f', 'tavt':'mn8j2mcblt', 'mtei':'x29ycx7hp5', 'hang':'umfm3ftrny', 'linb':'by38na5akh', 'lyci':'hsu56mxkr7', 'cari':'kqrxbcekmr', 'ital':'uk7vpcchbc', 'goth':'hj7ztebb5e', 'perm':'cqdluhalzh', 'ugar':'ffz7nkcxpb', 'xpeo':'pbjd5pecq6', 'dsrt':'tdjlnarc8y', 'shaw':'gj5fewb8ed', 'osma':'hg53222b9b', 'osge':'gm4pjj3qw7', 'elba':'fum3p8xz6v', 'lina':'rmvt9u45sq', 'cprt':'nywfdbys7b', 'armi':'ys8lxa9y4j', 'palm':'z3u3jwap6r', 'nbat':'kcjefvy9uw', 'hatr':'jpekrxh2wn', 'phnx':'ltk6h5bent', 'lydi':'hsu56mxkr7', 'mero':'ssxtjnbc7s', 'khar':'n974scptwz', 'sarb':'clvjlzfzv9', 'sarn':'gw3vnam33r', 'mani':'nnf3pjr2v3', 'avst':'appyvwf4ku', 'prti':'b7daarfs3a', 'phli':'ssmdqax9mt', 'phlp':'wqytv3ldez', 'orhk':'hpmlm9pjev', 'hung':'fx7n7tnxzt', 'brah':'nskejp3py5', 'kthi':'xa9swfhv9f', 'sora':'r4c4bsfy7v', 'cakm':'pdqjuf5k39', 'mahj':'kuegm6qedh', 'shrd':'spnpfarl4t', 'khoj':'r9e56hvyut', 'mult':'fptnmnhe3c', 'sind':'fykru6vn8h', 'gran':'qzhwzbsvm7', 'newa':'y53lggbts6', 'tirh':'wysbq8bpm4', 'sidd':'fcmrsmpp9f', 'modi':'tx5uz2hvvz', 'takr':'wvh5zdz7jl', 'ahom':'ky6s63f7fx', 'wara':'llvwz8vpn8', 'zanb':'j7rr9jgtyl', 'soyo':'lns82rb9hp', 'pauc':'t2uqldgjlv', 'bhks':'mcr57c34fw', 'marc':'h6ln54mufu', 'gonm':'vqhk6w3pgq', 'xsux':'yqbyb2mdz7', 'egyp':'q7yl4zu8eh', 'hluw':'tasanpp3u9', 'mroo':'b6ebw4c6al', 'bass':'3d6596eh4g', 'hmng':'ha2hg6d5b7', 'miao':'cb32gtbj58', 'tang':'rkw5m9sm64', 'nshu':'v39xawqg64', 'dupl':'sbhfvtwqkl', 'mend':'2874g2ehc8', 'adlm':'llp3cqd7gg', 'hani':'tsps57x35g', 'mede':'evyd5v7ebg', 'sogd':'xjh6av9y5z', 'sogo':'u9szp2wg4g', 'dogr':'ujs77ahv7k', 'gong':'r3u3b4rjy9', 'rohg':'mj3a6n78t2', 'maka':'wj3ak6u5s2', 'jpan':'lrnzlkagyq', 'elym':'bxzpxkpyu4', 'hmnp':'f6vf3vzlls', 'wcho':'besbhg4q95', 'nand':'pn37qqd7m4', 'rohg':'mj3a6n78t2', 'chrs':'dsrbaeqtxg', 'yezi':'dwz25agleu', 'diak':'zd8qnsls7x', 'kits':'s5y4qyk59q', 'plrd':"cb32gtbj58"
}


// URL endings for endangered alphabets
var endangered = { 
adlm: 'adlam',
ahom: 'ahom',
bali: 'balinese',
bamu: 'bamum',
bass: 'bassa-vah',
bugi: 'lontara',
cans: 'canadian-aboriginal-syllabics',
cakm: 'chakma',
cham: 'cham',
cher: 'cherokee',
copt: 'coptic',
glag: 'glagolitic',
gong: 'gondi',
gonm: 'gondi',
gran: 'grantha',
rohg: 'hanifi-rohingya',
hanu: 'hanunuo',
java: 'javanese',
kali: 'kayah-li',
khoj: 'khojki',
lana: 'lanna-aka-tai-tham',
mand: 'mandaic',
medf: 'medefaidrin',
modi: 'modi',
mong: 'mongolian',
mroo: 'mru',
nkoo: 'nko',
nshu: 'nushu',
hmnp: 'nyiakeng-puachue-hmong',
olck: 'ol-chiki-santali',
osge: 'osage',
hmng: 'pahauh-hmong',
samr: 'samaritan',
shrd: 'sharada',
sidd: 'siddham',
sora: 'sorang-sompeng',
saur: 'sourashtra',
soyo: 'soyombo',
sund: 'sundanese',
sylo: 'syloti-nagri',
syrc: 'syriac',
tavt: 'tai-dam',
tale: 'tai-le',
thaa: 'thaana',
tfng: 'tifinagh',
tirh: 'tirhuta-mithilakshar',
vaii: 'vai',
wcho: 'wancho',
wara: 'warang-citi',
yiii: 'yi'
}


// chapter numbers in Unicode Standard - should be checked after each release
var chapters = { 
'latn':'07', 'grek':'07', 'copt':'07', 'cyrl':'07', 'glag':'07', 'armn':'07', 'geor':'07',
'lina':'08', 'linb':'08', 'cprt':'08', 'lyci':'08', 'cari':'08', 'lydi':'08', 'ital':'08', 'runi':'08','hung':'08', 'goth':'08', 'elba':'08', 'aghb':'08', 'perm':'08', 'ogam':'08', 'shaw':'08',
'hebr':'09', 'arab':'09', 'syrc':'09', 'samr':'09', 'mand':'09', 'yezi':'09',
'sarb':'10', 'sarn':'10', 'phnx':'10', 'armi':'10', 'mani':'10', 'prti':'10', 'phli':'10', 'plhp':'10', 'avst':'10', 'chrs':'10', 'elym':'10', 'nbat':'10', 'palm':'10', 'hatr':'10',
'xsux':'11', 'ugar':'11', 'xpeo':'11', 'egyp':'11', 'mero':'11', 'hluw':'11',
'deva':'12', 'beng':'12', 'guru':'12', 'gujr':'12', 'orya':'12', 'taml':'12', 'telu':'12', 'knda':'12', 'mlym':'12',
'thaa':'13', 'sinh':'13', 'newa':'13', 'tibt':'13', 'mong':'13', 'limb':'13', 'mtei':'13', 'mroo':'13', 'wara':'13', 'olck':'13', 'cakm':'13', 'lepc':'13', 'saur':'13', 'gond':'13', 'gong':'13', 'wcho':'13',
'brah':'14', 'khar':'14', 'bhks':'14', 'phag':'14', 'marc':'14', 'zanb':'14', 'soyo':'14', 'orhk':'14', 'sogd':'14', 'sogo':'14',
'sylo':'15', 'kthi':'15', 'shrd':'15', 'takr':'15', 'sidd':'15', 'mahj':'15', 'khoj':'15', 'sind':'15',  'mult':'15', 'tirh':'15', 'modi':'15', 'nand':'15', 'gran':'15', 'diak':'15', 'ahom':'15', 'sora':'15', 'dogr':'15',
'thai':'16', 'laoo':'16', 'mymr':'16', 'khmr':'16', 'tale':'16', 'talu':'16', 'lana':'16', 'tavt':'16', 'kali':'16', 'cham':'16', 'hmng':'16', 'pauc':'16', 'rohg':'16', 'hmnp':'16',
'tglg':'17', 'hano':'17', 'buhd':'17', 'tagb':'17', 'bugi':'17', 'bali':'17', 'java':'17', 'rjng':'17', 'batk':'17', 'sund':'17', 'maka':'17',
'hani':'18', 'bopo':'18', 'jpan':'18', 'hang':'18', 'yiii':'18', 'nshu':'18', 'lisu':'18', 'plrd':'18', 'tang':'18', 'kits':'18',
'ethi':'19',  'osma':'19', 'tfng':'19', 'nkoo':'19', 'vaii':'19', 'bamu':'19',  'bass':'19', 'mend':'19', 'adlm':'19', 'mede':'19',
'cher':'20', 'cans':'20', 'osge':'20', 'dsrt':'20',
'dupl':'21', 'sutton_signwriting':'21', 'xphais':'22',

}



var blockStart = { 
'basic_latin':'0000', 'latin-1_supplement':'0080', 'latin_extended-a':'0100', 'latin_extended-b':'0180', 'ipa_extensions':'0250', 'spacing_modifier_letters':'02B0', 'combining_diacritical_marks':'0300', 'greek_and_coptic':'0370', 'cyrillic':'0400', 'cyrillic_supplement':'0500', 'armenian':'0530', 'hebrew':'0590', 'arabic':'0600', 'syriac':'0700', 'arabic_supplement':'0750', 'thaana':'0780', 'nko':'07C0', 'samaritan':'0800', 'mandaic':'0840', 'syriac_supplement':'0860', 'arabic_extended-a':'08A0', 'devanagari':'0900', 'bengali':'0980', 'gurmukhi':'0A00', 'gujarati':'0A80', 'oriya':'0B00', 'tamil':'0B80', 'telugu':'0C00', 'kannada':'0C80', 'malayalam':'0D00', 'sinhala':'0D80', 'thai':'0E00', 'lao':'0E80', 'tibetan':'0F00', 'myanmar':'1000', 'georgian':'10A0', 'hangul_jamo':'1100', 'ethiopic':'1200', 'ethiopic_supplement':'1380', 'cherokee':'13A0', 'unified_canadian_aboriginal_syllabics':'1400', 'ogham':'1680', 'runic':'16A0', 'tagalog':'1700', 'hanunoo':'1720', 'buhid':'1740', 'tagbanwa':'1760', 'khmer':'1780', 'mongolian':'1800', 'unified_canadian_aboriginal_syllabics_extended':'18B0', 'limbu':'1900', 'tai_le':'1950', 'new_tai_lue':'1980', 'khmer_symbols':'19E0', 'buginese':'1A00', 'tai_tham':'1A20', 'combining_diacritical_marks_extended':'1AB0', 'balinese':'1B00', 'sundanese':'1B80', 'batak':'1BC0', 'lepcha':'1C00', 'ol_chiki':'1C50', 'cyrillic_extended-c':'1C80', 'sundanese_supplement':'1CC0', 'vedic_extensions':'1CD0', 'phonetic_extensions':'1D00', 'phonetic_extensions_supplement':'1D80', 'combining_diacritical_marks_supplement':'1DC0', 'latin_extended_additional':'1E00', 'greek_extended':'1F00', 'general_punctuation':'2000', 'superscripts_and_subscripts':'2070', 'currency_symbols':'20A0', 'combining_diacritical_marks_for_symbols':'20D0', 'letterlike_symbols':'2100', 'number_forms':'2150', 'arrows':'2190', 'mathematical_operators':'2200', 'miscellaneous_technical':'2300', 'control_pictures':'2400', 'optical_character_recognition':'2440', 'enclosed_alphanumerics':'2460', 'box_drawing':'2500', 'block_elements':'2580', 'geometric_shapes':'25A0', 'miscellaneous_symbols':'2600', 'dingbats':'2700', 'miscellaneous_mathematical_symbols-a':'27C0', 'supplemental_arrows-a':'27F0', 'braille_patterns':'2800', 'supplemental_arrows-b':'2900', 'miscellaneous_mathematical_symbols-b':'2980', 'supplemental_mathematical_operators':'2A00', 'miscellaneous_symbols_and_arrows':'2B00', 'glagolitic':'2C00', 'latin_extended-c':'2C60', 'coptic':'2C80', 'georgian_supplement':'2D00', 'tifinagh':'2D30', 'ethiopic_extended':'2D80', 'cyrillic_extended-a':'2DE0', 'supplemental_punctuation':'2E00', 'cjk_radicals_supplement':'2E80', 'kangxi_radicals':'2F00', 'ideographic_description_characters':'2FF0', 'cjk_symbols_and_punctuation':'3000', 'hiragana':'3040', 'katakana':'30A0', 'bopomofo':'3100', 'hangul_compatibility_jamo':'3130', 'kanbun':'3190', 'bopomofo_extended':'31A0', 'cjk_strokes':'31C0', 'katakana_phonetic_extensions':'31F0', 'enclosed_cjk_letters_and_months':'3200', 'cjk_compatibility':'3300', 'cjk_unified_ideographs_extension_a':'3400', 'yijing_hexagram_symbols':'4DC0', 'cjk_unified_ideographs':'4E00', 'yi_syllables':'A000', 'yi_radicals':'A490', 'lisu':'A4D0', 'vai':'A500', 'cyrillic_extended-b':'A640', 'bamum':'A6A0', 'modifier_tone_letters':'A700', 'latin_extended-d':'A720', 'syloti_nagri':'A800', 'common_indic_number_forms':'A830', 'phags-pa':'A840', 'saurashtra':'A880', 'devanagari_extended':'A8E0', 'kayah_li':'A900', 'rejang':'A930', 'hangul_jamo_extended-a':'A960', 'javanese':'A980', 'myanmar_extended-b':'A9E0', 'cham':'AA00', 'myanmar_extended-a':'AA60', 'tai_viet':'AA80', 'meetei_mayek_extensions':'AAE0', 'ethiopic_extended-a':'AB00', 'latin_extended-e':'AB30', 'cherokee_supplement':'AB70', 'meetei_mayek':'ABC0', 'hangul_syllables':'AC00', 'hangul_jamo_extended-b':'D7B0', 'high_surrogates':'D800', 'high_private_use_surrogates':'DB80', 'low_surrogates':'DC00', 'private_use_area':'E000', 'cjk_compatibility_ideographs':'F900', 'alphabetic_presentation_forms':'FB00', 'arabic_presentation_forms-a':'FB50', 'variation_selectors':'FE00', 'vertical_forms':'FE10', 'combining_half_marks':'FE20', 'cjk_compatibility_forms':'FE30', 'small_form_variants':'FE50', 'arabic_presentation_forms-b':'FE70', 'halfwidth_and_fullwidth_forms':'FF00', 'specials':'FFF0', 'linear_b_syllabary':'10000', 'linear_b_ideograms':'10080', 'aegean_numbers':'10100', 'ancient_greek_numbers':'10140', 'ancient_symbols':'10190', 'phaistos_disc':'101D0', 'lycian':'10280', 'carian':'102A0', 'coptic_epact_numbers':'102E0', 'old_italic':'10300', 'gothic':'10330', 'old_permic':'10350', 'ugaritic':'10380', 'old_persian':'103A0', 'deseret':'10400', 'shavian':'10450', 'osmanya':'10480', 'osage':'104B0', 'elbasan':'10500', 'caucasian_albanian':'10530', 'linear_a':'10600', 'cypriot_syllabary':'10800', 'imperial_aramaic':'10840', 'palmyrene':'10860', 'nabataean':'10880', 'hatran':'108E0', 'phoenician':'10900', 'lydian':'10920', 'meroitic_hieroglyphs':'10980', 'meroitic_cursive':'109A0', 'kharoshthi':'10A00', 'old_south_arabian':'10A60', 'old_north_arabian':'10A80', 'manichaean':'10AC0', 'avestan':'10B00', 'inscriptional_parthian':'10B40', 'inscriptional_pahlavi':'10B60', 'psalter_pahlavi':'10B80', 'old_turkic':'10C00', 'old_hungarian':'10C80', 'rumi_numeral_symbols':'10E60', 'brahmi':'11000', 'kaithi':'11080', 'sora_sompeng':'110D0', 'chakma':'11100', 'mahajani':'11150', 'sharada':'11180', 'sinhala_archaic_numbers':'111E0', 'khojki':'11200', 'multani':'11280', 'khudawadi':'112B0', 'grantha':'11300', 'newa':'11400', 'tirhuta':'11480', 'siddham':'11580', 'modi':'11600', 'mongolian_supplement':'11660', 'takri':'11680', 'ahom':'11700', 'warang_citi':'118A0', 'zanabazar_square':'11A00', 'soyombo':'11A50', 'pau_cin_hau':'11AC0', 'bhaiksuki':'11C00', 'marchen':'11C70', 'masaram_gondi':'11D00', 'cuneiform':'12000', 'cuneiform_numbers_and_punctuation':'12400', 'early_dynastic_cuneiform':'12480', 'egyptian_hieroglyphs':'13000', 'anatolian_hieroglyphs':'14400', 'bamum_supplement':'16800', 'mro':'16A40', 'bassa_vah':'16AD0', 'pahawh_hmong':'16B00', 'miao':'16F00', 'ideographic_symbols_and_punctuation':'16FE0', 'tangut':'17000', 'tangut_components':'18800', 'kana_supplement':'1B000', 'kana_extended-a':'1B100', 'nushu':'1B170', 'duployan':'1BC00', 'shorthand_format_controls':'1BCA0', 'byzantine_musical_symbols':'1D000', 'musical_symbols':'1D100', 'ancient_greek_musical_notation':'1D200', 'tai_xuan_jing_symbols':'1D300', 'counting_rod_numerals':'1D360', 'mathematical_alphanumeric_symbols':'1D400', 'sutton_signwriting':'1D800', 'glagolitic_supplement':'1E000', 'mende_kikakui':'1E800', 'adlam':'1E900', 'arabic_mathematical_alphabetic_symbols':'1EE00', 'mahjong_tiles':'1F000', 'domino_tiles':'1F030', 'playing_cards':'1F0A0', 'enclosed_alphanumeric_supplement':'1F100', 'enclosed_ideographic_supplement':'1F200', 'miscellaneous_symbols_and_pictographs':'1F300', 'emoticons':'1F600', 'ornamental_dingbats':'1F650', 'transport_and_map_symbols':'1F680', 'alchemical_symbols':'1F700', 'geometric_shapes_extended':'1F780', 'supplemental_arrows-c':'1F800', 'supplemental_symbols_and_pictographs':'1F900', 'cjk_unified_ideographs_extension_b':'20000', 'cjk_unified_ideographs_extension_c':'2A700', 'cjk_unified_ideographs_extension_d':'2B740', 'cjk_unified_ideographs_extension_e':'2B820', 'cjk_compatibility_ideographs_supplement':'2F800', 'tags':'E0000', 'variation_selectors_supplement':'E0100', 'supplementary_private_use_area-a':'F0000', 'supplementary_private_use_area-b':'100000',  'medefaidrin':'16E40','sogdian':'10F30', 'old_sogdian':'10F00', 'dogra':'11800', 'gunjala_gondi':'11D60', 'hanifi_rohingya':'10D00', 'makasar':'11EE0', 'georgian_extended':'1C90', 'elymaic':'10FE0', 'nyiakeng_puachue_hmong':'1E100', 'wancho':'1E2C0', 'nandinagari':'119A0',
'chorasmian':'10FB0', 'yezidi':'10E80', 'dives_akuru':'11900', 'khitan_small_script':'18B00'
 }



        
var linkDB = { 


deva:{ script:"Devanagari", code: "Deva", name:"",
dates:"11thC – today", start:"1100", end:"", current_usage:"",
status:"Official script of India. Used for over 120 languages, and Classical Sanskrit.",
origin:"South Asia",
info:{ wikipedia:"Devanagari", omniglot:"devanagari" },
local: [ { name:"Introduction to Indic Scripts", url:"indic-overview"},
          ],
charts: [ "Devanagari", "Devanagari Extended", "Vedic Extensions" ],
layout: [ ],
usedfor: "Gondi, Aheri [esg], Andh [anr], Angika [anp], Asuri [asr], Athpariya [aph], Awadhi [awa], Bagheli [bfy], Bagheli [bfy], Bagri [bgq], Bahing [bhj], Bantawa [bap], Baraamu [brd], Bateri [btv], Belhariya [byw], Bhadrawahi [bhd], Bharia [bha], Bhatri [bgw], Bhilali [bhi], Bhili [bhb], Bhojpuri [bho], Bhujel [byh], Bhunjia [bhu], Bilaspuri [kfs], Birhor [biy], Bodo (India) [brx], Bote-Majhi [bmj], Braj [bra], Buksa [tkb], Bundeli [bns], Byangsi [bee], Camling [rab], Nicobarese, Central [ncb], Chambeali [cdh], Chantyal [chx], Chepang [cdm], Chhattisgarhi [hne], Chhintange [ctn], Chinali [cih], Tharu, Chitwania [the], Churahi [cdj], Maria, Dandami [daq], Tharu, Dangaura [thl], Darai [dry], Deccan [dcc], Dhanwar (Nepal) [dhw], Dhimal [dhi], Dhodia [dho], Dhundari [dhd], Dogri (individual language) [dgo], Dogri (macrolanguage) [doi], Dotyali [dty], Dumi [dus], Dungmali [raa], Dungra Bhil [duh], Duruwa [pci], Eastern Gurung [ggn], Magar, Eastern [mgp], Meohang, Eastern [emg], Tamang, Eastern [taj], Hindi, Fiji [hif], Gaddi [gbk], Kham, Gamale [kgj], Gamit [gbl], Garhwali [gbm], Konkani, Goan [gom], Gondi [gon], Gowli [gok], Gujari [gju], Gurung [gvr], Halbi [hlb], Kinnauri, Harijan [kjo], Haroti [hoj], Haryanvi [bgc], Hindi [hin], Ho [hoc], Hyolmo [scp], Idu-Mishmi [clk], Jaunsari [jns], Jerung [jee], Jirel [jul], Jumli [jml], Kachhi [kfr], Kagate [syw], Kanauji [bjj], Kangri [xnr], Kashmiri [kas], Tharu, Kathoriya [tkt], Khaling [klr], Khandesi [khn], Kharia [khr], Kinnauri [kfk], Tharu, Kochila [thq], Kodaku [ksz], Koi [kkt], Konkani (individual language) [knn], Konkani (macrolanguage) [kok], Korku [kfq], Creole Portuguese, Korlai [vkp], Korwa [kfp], Koya [kff], Kudmali [kyw], Kukna [kex], Pahari, Kullu [kfx], Kulung (Nepal) [kle], Kumaoni [kfy], Kumhali [kra], Kurukh [kru], Lambadi [lmn], Lhomi [lhm], Limbu [lif], Lohorung [lbr], Loke [loy], Magahi [mag], Pahari, Mahasu [bfz], Maithili [mai], Majhi [mjz], Mal Paharia [mkb], Malvi [mup], Manangba [nmm], Mandeali [mjl], Marathi [mar], Maria (India) [mrr], Marwari (India) [rwr], Marwari [mwr], Mawchi [mke], Mewari [mtr], Mewati [wtm], Newar, Middle [nwx], Mising [mrg], Munda [unx], Mundari [unr], Na [nbt], Nachering [ncd], Nepali (individual language) [npi], Nepali (macrolanguage) [nep], Kurux, Nepali [kxl], Newari [new], Nimadi [noe], Noiri [noi], Gondi, Northern [gno], Kolami, Northwestern [kfb], Tamang, Northwestern [tmk], Pali [pli], Palpa [plp], Panchpargania [tdb], Pangwali [pgg], Pankhu [pkh], Pattani [lae], Bareli, Pauri [bfb], Puma [pum], Puroik [suv], Rajasthani [raj], Rajbanshi [rjs], Raji [rji], Garasia, Rajput [gra], Tharu, Rana [thr], Bareli, Rathwi [bgd], Rawat [jnl], Sadri [sck], Sampang [rav], Sanskrit [san], Santali [sat], Saraiki [skr], Sartang [onp], Prākrit, Sauraseni [psu], Saurashtra [saz], Sauria Paharia [mjt], Shekhawati [swv], Sherpa [xsr], Kham, Sheshi [kip], Sindhi [snd], Sirmauri [srx], Ghale, Southern [ghe], Southwestern Tamang [tsf], Bhoti, Stod [sbu], Sunwar [suz], Surgujia [sgj], Surjapuri [sjp], Monpa, Tawang [twm], Monpa, Tawang [twm], Thakali [ths], Thangmi [thf], Thulung [tdh], Tilung [tij], Tinani [lbf], Toto [txo], Varhadi-Nagpuri [vah], Varli [vav], Vasavi [vas], Wagdi [wbr], Wambule [wme], Naga, Wancho [nnp], Wayu [vay], Magar, Western [mrd], Meohang, Western [raf], Muria, Western [mut], Kham, Western Parbate [kjl], Tamang, Western [tdg], Yakha [ybh], Yamphu [ybi]"
},


ahom:{ script:"Ahom", code: "Ahom", name:"", type:"abugida",
dates:"15thC – today", start:"1400", end:"", current_usage:"community, endangered",
status:"Used principally for Tai Ahom language. Very few speakers of Ahom remain, despite attempts at revival in 20th century.",
origin:"South Asia",
info:{ wikipedia:"Ahom_alphabet", omniglot:"ahom" },
local: [ ],
charts: [ "Ahom" ],
layout: [ ],
usedfor: "Ahom [aho]",
},


adlm:{ script:"Adlam", code: "Adlm", name:"", type:"alphabet, cased, RTL",
dates:"1980s – today", start:"1980", end:"", current_usage:"",
status:"Used to write Fulani and other African languages. The Fulani are a large, historically nomadic tribe of  Africa numbering  more than 45  million and spread across Senegambia (Senegal) to the banks of the Nile and the Red Sea.",
origin:"Africa",
info:{ wikipedia:"Fula_alphabets#Adlam_alphabet", omniglot:"adlam" },
local: [ ],
charts: [ "Adlam" ],
layout: [ ],
usedfor:"Fulah [ful], Pular [fuf]",
},


arab:{ script:"Arabic", code: "Arab", name:"", type:"abjad, RTL",
dates:"6thC – today", start:"500", end:"", current_usage:"",
status:"The second most broadly-used script in the world, after the Latin alphabet.",
origin:"West Asia",
info:{ wikipedia:"Arabic_script", omniglot:"arabic" },
local: [ ],
charts: [ "Arabic", "Arabic Supplement", "Arabic Extended-A", "Arabic Presentation Forms-A", "Arabic Presentation Forms-B" ],
layout: [ { name:"Arabic Layout Requirements", url:"https://w3c.github.io/alreq/"},
          { name:"Arabic text justification", url:"http://www.tug.org/tugboat/tb27-2/tb87benatia.pdf"},
          { name:"Justify Just or Just Justify", url:"http://quod.lib.umich.edu/j/jep/3336451.0013.105?view=text;rgn=main"},
          { name:"Typography questions for HTML & CSS: Arabic", url:"https://r12a.github.io/blog/201110.html#20140523"},
          { name:"Rule-based expert system for Urdu nastaleeq justification", url:"http://www.cle.org.pk/Publication/papers/2004/rule-based-expert-system.pdf"},
          ],
usedfor:"Fulfulde, Adamawa [fub], Adyghe [ady], Arabic, Algerian [arq], Andaandi [dgl], Arabic [ara], Ashtiani [atn], Avestan [ave], Azerbaijani [aze], Azerbaijani [aze], Arabic, Baharna [abv], Bakhtiari [bqi], Balangingi [sse], Balanta-Ganja [bjt], Balti [bft], Baluchi [bal], Banjar [bjn], Bedawiyet [bej], Bhadrawahi [bhd], Brahui [brh], Brunei [kxd], Burushaski [bsk], Tamazight, Central Atlas [tzm], Kanuri, Central [knc], Kurdish, Central [ckb], Pashto, Central [pst], Arabic, Chadian [shu], Chittagonian [ctg], Coptic [cop], Arabic, Cypriot [acy], Dameli [dml], Dari [prs], Deccan [dcc], Dezfuli [def], Dhatki [mki], Dogri [dgo], Domari [rmt], Dongxiang [sce], Dyula [dyu], Balochi, Eastern [bgp], Cham, Eastern [cjm], Arabic, Eastern Egyptian Bedawi [avl], Maninkakan, Eastern [emk], Arabic, Egyptian [arz], Fulah [ful], Gazi [gzi], Gilaki [glk], Goaria [gig], Gowro [gwf], Gujari [gju], Arabic, Gulf [afb], Gurani [hac], Gurgula [ggg], Harzani [hrz], Hassaniyya [mey], Hausa [hau], Hazaragi [haz], Arabic, Hijazi [acw], Ida'an [dbj], Indonesian [ind], Kohistani, Indus [mvy], Ingush [inh], Persian, Iranian [pes], Jadgali [jdg], Jahanka [jad], Bozo, Jenaama [bze], Jola-Fonyi [dyo], Arabic, Judeo-Tunisian [ajt], Koli, Kachi [gjk], Kajali [xkj], Kalami [gwc], Kalasha [kls], Kashmiri [kas], Kati [bsh], Kazakh [kaz], Kenzi [xnz], Khorasani Turkish [kmz], Khowar [khw], Khunsari [kfm], Shina, Kohistani [plk], Koti [eko], Kumyk [kum], Kurdish [kur], Kyrgyz [kir], Lahnda [lah], Laki [lki], Lari [lrl], Lasgerdi [lsa], Arabic, Libyan [ayl], Fulfulde, Maasina [ffm], Maba (Chad) [mde], Malay (individual language) [zlm], Malay (macrolanguage) [msa], Malay (macrolanguage) [msa], Malay (macrolanguage) [msa], Malayalam [mal], Maltese [mlt], Mandingo [man], Mandinka [mnk], Kanuri, Manga [kby], Comorian, Maore [swb], Marwari (Pakistan) [mve], Marwari (Pakistan) [mve], Mazanderani [mzn], Arabic, Mesopotamian [acm], Mogofin [mfg], Arabic, Moroccan [ary], Munji [mnj], Mwani [wmw], Nafusi [jbn], Arabic, Najdi [ars], Natanzi [ntz], Nayini [nyq], Comorian, Ndzwani [wni], Comorian, Ngazidja [zdj], Fulfulde, Nigerian [fuv], Nobiin [fia], Azerbaijani, North [azj], Arabic, North Levantine [apc], Arabic, North Mesopotamian [ayp], Hindko, Northern [hno], Kurdish, Northern [kmr], Luri, Northern [lrc], Pashto, Northern [pbu], Uzbek, Northern [uzn], Fars, Northwestern [faz], Od [odk], Arabic, Omani [acx], Ormuri [oru], Turkish, Ottoman (1500-1928) [ota], Pahari-Potwari [phr], Palula [phl], Panjabi [pan], Koli, Parkari [kvx], Parsi-Dari [prd], Malay, Pattani [mfa], Persian [fas], Pulaar [fuc], Pular [fuf], Purik [prx], Pushto [pus], Qashqa'i [qxq], Rohingya [rhg], Rudbari [rdb], Saafi-Saafi [sav], Arabic, Saidi [aec], Samaritan [smp], Arabic, Sanaani [ayn], Sangisari [sgr], Saraiki [skr], Semnani [smy], Serer [srr], Shahrudi [shm], Shina [scl], Shughni [sgh], Sindhi [snd], Somali [som], Soninke [snk], Soqotri [sqt], Azerbaijani, South [azb], Arabic, South Levantine [ajp], Pashai, Southeast [psi], Balochi, Southern [bcc], Hindko, Southern [hnd], Kurdish, Southern [sdh], Luri, Southern [luz], Pashto, Southern [pbt], Uzbek, Southern [uzs], Fars, Southwestern [fay], Arabic, Standard [arb], Malay, Standard [zsm], Arabic, Sudanese [apd], Sundanese [sun], Susu [sus], Swahili (macrolanguage) [swa], Arabic, Ta'izzi-Adeni [acq], Tachawit [shy], Tachelhit [shi], Tadaksahak [dsq], Tagdal [tda], Tamahaq, Tahaggart [thv], Tajik [tgk], Arabic, Tajiki [abh], Takestani [tks], Talysh [tly], Tarifit [rif], Tausug [tsg], Tamajaq, Tawallammat [ttq], Tem [kdh], Bozo, Tiéyaxo [boz], Torwali [trw], Tumzabt [mzb], Arabic, Tunisian [aeb], Turkish [tur], Turkmen [tuk], Urdu [urd], Uyghur [uig], Uzbek [uzb], Vafsi [vaf], Koli, Wadiyara [kxp], Wakhi [wbl], Balochi, Western [bgn], Cham, Western [cja], Maninkakan, Western [mlq], Fulfulde, Western Niger [fuh], Panjabi, Western [pnb], Wolio [wlo], Wolof [wol], Yakan [yka], Yalunka [yal], Yidgha [ydg], Yoruba [yor], Zarma [dje], Zaza [zza], Dari, Zoroastrian [gbz]",
},


armn:{ script:"Armenian", code: "Armn", name:"", type:"alphabet, cased",
dates:"406 – today", start:"406", end:"", current_usage:"",
status:"Standard script for the Armenian language, in the Caucasus and the wide diaspora.",
origin:"Europe",
info:{ wikipedia:"Armenian_script", omniglot:"armenian" },
local: [ ],
charts: [ "Armenian" ],
layout: [ ],
usedfor: "Armenian [hy], Kurdish [kur], Kurdish, Northern [kmr], Armenian, Western [hyw]",
},


aghb:{ script:"Caucasian Albanian", code: "Aghb", name:"",
dates:"5thC – ?", start:"400", end:"?", current_usage:"",
status:"",
origin:"Europe",
info:{ wikipedia:"Caucasian_Albanian_alphabet", omniglot:"caucasianalbanian" },
local: [ ],
charts: [ "Caucasian Albanian" ],
layout: [ ],
},


cprt:{ script:"Cypriot", code: "Cprt", name:"",
dates:"BCE 11thC – BCE 3rdC", start:"-1100", end:"-300", current_usage:"",
status:"",
origin:"Europe",
info:{ wikipedia:"Cypriot_syllabary", omniglot:"cypriot" },
local: [ ],
charts: [ "Cypriot Syllabary" ],
layout: [ ],
},


cyrl:{ script:"Cyrillic", code: "Cyrl", name:"", type:"alphabet, cased",
dates:"10thC – today", start:"900", end:"", current_usage:"",
status:"Traditionally used for writing Slavic languages, of which Russian is the most widely spoken. During the 19th and 20th centuries, particularly under Soviet rule, it was extended to write over 50 languages throughout Eastern Europe and Asia.",
origin:"Europe",
info:{ wikipedia:"Cyrillic_script", omniglot:"cyrillic" },
local: [ ],
charts: [ "Cyrillic", "Cyrillic Supplement", "Cyrillic Extended-A", "Cyrillic Extended-B" ],
layout: [ ],
usedfor: "Abaza [abq], Abkhazian [abk], Adyghe [ady], Aghul [agx], Akhvakh [akv], Sami, Akkala [sia], Alutor [alr], Andi [ani], Archi [aqc], Arin [xrn], Armazic [xrm], Assan [xss], Neo-Aramaic, Assyrian [aii], Avaric [ava], Azerbaijani [aze], Bagvalal [kva], Romani, Balkan [rmn], Romani, Baltic [rml], Bashkir [bak], Belarusian [bel], Bezhta [kap], Bosnian [bos], Botlikh [bph], Bukharic [bhh], Bulgarian [bul], Buriat [bua], Yupik, Central Siberian [ess], Chamalal [cji], Chechen [che], Chukot [ckt], Chulym [clw], Slavonic, Church [chu], Chuvash [chv], Tatar, Crimean [crh], Dargwa [dar], Daur [dta], Dido [ddo], Dolgan [dlg], Dungan [dng], Mari, Eastern [mhr], Erzya [myv], Even [eve], Evenki [evn], Enets, Forest [enf], Gagauz [gag], Ghodoberi [gdo], Gilyak [niv], Mongolian, Halh [khk], Mongolian, Halh [khk], Hinukh [gin], Hunzib [huz], Ingush [inh], Itelmen [itl], Judeo-Tat [jdt], Kabardian [kbd], Kalmyk [xal], Kamas [xas], Kara-Kalpak [kaa], Karachay-Balkar [krc], Karagas [kim], Karaim [kdr], Karata [kpt], Karelian [krl], Kazakh [kaz], Kerek [krk], Ket [ket], Khakas [kjh], Khanty [kca], Khazar [zkz], Khvarshi [khv], Sami, Kildin [sjd], Koibal [zkb], Komi [kom], Komi-Permyak [koi], Komi-Zyrian [kpv], Koryak [kpy], Kott [zko], Krymchak [jct], Kuman (Russia) [qwm], Kumyk [kum], Kurdish [kur], Kyrgyz [kir], Ladino [lad], Lak [lbe], Lezghian [lez], Lingua Franca Nova [lfn], Macedonian [mkd], Mansi [mns], Mari (Russia) [chm], Mator [mtm], Mator [mtm], Aleut, Mednyj [mud], Greek, Modern (1453-) [ell], Moksha [mdf], Buriat, Mongolia [bxm], Mongolian [mon], Montenegrin [cnr], Tat, Muslim [ttt], Nadruvian [ndf], Nanai [gld], Yupik, Naukan [ynk], Negidal [neg], Nenets [yrk], Nganasan [nio], Nogai [nog], Azerbaijani, North [azj], Altai, Northern [atv], Kurdish, Northern [kmr], Sami, Northern [sme], Uzbek, Northern [uzn], Yukaghir, Northern [ykg], Russian, Old [orv], Omok [omk], Oroch [oac], Orok [oaa], Ossetic [oss], Yupik, Pacific Gulf [ems], Pontic [pnt], Pumpokol [xpm], Romanian [ron], Romany [rom], Buriat, Russia [bxr], Russian [rus], Rusyn [rue], Rutul [rut], Selkup [sel], Serbian [srp], Shor [cjs], Shughni [sgh], Tatar, Siberian [sty], Yupik, Sirenik [ysr], Altai, Southern [alt], Yukaghir, Southern [yux], Svan [sva], Tabassaran [tab], Tajik [tgk], Talysh [tly], Tatar [tat], Sami, Ter [sjt], Tindi [tin], Tlingit [tli], Tsakhur [tkr], Enets, Tundra [enh], Turkish [tur], Turkmen [tuk], Tuvinian [tyv], Udi [udi], Udihe [ude], Udmurt [udm], Ukrainian [ukr], Ulch [ulc], Urum [uum], Uyghur [uig], Uyghur [uig], Uzbek [uzb], Uzbek [uzb], Romani, Vlax [rmy], Wakhi [wbl], Balochi, Western [bgn], Mari, Western [mrj], Oirat, Written [xwo], Xibe [sjo], Yagnobi [yai], Yakut [sah], Yazgulyam [yah], Yug [yug]",
},


dupl:{ script:"Duployan", code: "Dupl", name:"",
dates:"1860 – today", start:"1860", end:"", current_usage:"notation",
status:"",
origin:"Europe",
info:{ wikipedia:"Duployan", omniglot:"undefined" },
local: [ ],
charts: [ "Duployan", "Shorthand Format Controls" ],
layout: [ ],
},


elba:{ script:"Elbasan", code: "Elba", name:"",
dates:"1761 – ?", start:"1761", end:"?", current_usage:"",
status:"",
origin:"Europe",
info:{ wikipedia:"Elbasan_alphabet", omniglot:"elbasan" },
local: [ ],
charts: [ "Elbasan" ],
layout: [ ],
},


geor:{ script:"Georgian", code: "Geor", name:"", type:"alphabet",
dates:"5thC – today", start:"1400", end:"", current_usage:"",
status:"The script of the Georgian language, spoken by approximately 4,000,000 people in Georgia and Azerbaijan, Turkey and Iran.",
origin:"Europe",
info:{ wikipedia:"Georgian_script", omniglot:"georgian" },
local: [ ],
charts: [ "Georgian", "Georgian Extended", "Georgian Supplement" ],
layout: [ ],
usedfor:"Abkhaz [abk], Georgian [ka], Laz [lzz], Mingrelian [xmf], Old Avar [oav], Ossetian [oss], Svan [sva]",
},


glag:{ script:"Glagolitic", code: "Glag", name:"",
dates:"862 – 1893", start:"862", end:"1893", current_usage:"",
status:"",
origin:"Europe",
info:{ wikipedia:"Glagolitic_script", omniglot:"glagolitic" },
local: [ ],
charts: [ "Glagolitic" ],
layout: [ ],
},


goth:{ script:"Gothic", code: "Goth", name:"",
dates:"4thC – 9thC", start:"300", end:"900", current_usage:"",
status:"",
origin:"Europe",
info:{ wikipedia:"Gothic_alphabet", omniglot:"gothic" },
local: [ ],
charts: [ "Gothic" ],
layout: [ ],
},


grek:{ script:"Greek", code: "Grek", name:"", type:"alphabet, cased",
dates:"BCE 8thC – today", start:"-800", end:"", current_usage:"",
status:"The script for the Greek language, spoken by around 10,500,000 people in Greece.",
origin:"Europe",
info:{ wikipedia:"Greek_alphabet", omniglot:"greek" },
local: [ ],
charts: [ "Greek and Coptic", "Greek Extended", "Ancient Greek Numbers" ],
layout: [ ],
usedfor:"Albanian [sqi], Greek, Ancient (to 1453) [grc], Albanian, Arbëreshë [aae], Aromanian [rup], Albanian, Arvanitika [aat], Turkish, Balkan Gagauz [bgx], Romani, Balkan [rmn], Greek, Cappadocian [cpg], Coptic [cop], Arabic, Cypriot [acy], Gagauz [gag], Greek, Modern (1453-) [ell], Phrygian [xpg], Pontic [pnt], Albanian, Tosk [als], Tsakonian [tsd], Turkish [tur], Urum [uum]"
},


latn:{ script:"Latin", code: "Latn", name:"", type:"alphabet, cased",
dates:"BCE 7thC – today", start:"-700", end:"", current_usage:"",
status:"",
origin:"Europe",
info:{ wikipedia:"Latin_script", omniglot:"latin" },
local: [ ],
charts: [ "Basic Latin", "Latin-1 Supplement", "Latin Extended-A", "Latin Extended-B", "Latin Extended-C", "Latin Extended-D", "Latin Extended-E", "Latin Extended Additional", "Halfwidth and Fullwidth Forms", "IPA Extensions", "Phonetic Extensions", "Phonetic Extensions Supplement" ],
layout: [ { name:"Requirements for Latin Text Layout and Pagination", url:"http://w3c.github.io/dpub-pagination/"},
          ],
},


lina:{ script:"Linear A", code: "Lina", name:"",
dates:"BCE 18thC – BCE 15thC", start:"-1800", end:"-1500", current_usage:"",
status:"",
origin:"Europe",
info:{ wikipedia:"Linear_a", omniglot:"lineara" },
local: [ ],
charts: [ "Linear A" ],
layout: [ ],
},


linb:{ script:"Linear B", code: "Linb", name:"",
dates:"BCE 14thC – BCE 12thC", start:"-1400", end:"-1200", current_usage:"",
status:"",
origin:"Europe",
info:{ wikipedia:"Linear_b", omniglot:"linearb" },
local: [ ],
charts: [ "Linear B Syllabary", "Linear B Ideograms", "Aegean Numbers" ],
layout: [ ],
},


ogam:{ script:"Ogham", code: "Ogam", name:"",
dates:"5thC – 7thC", start:"400", end:"700", current_usage:"",
status:"",
origin:"Europe",
info:{ wikipedia:"Ogham", omniglot:"ogham" },
local: [ ],
charts: [ "Ogham" ],
layout: [ ],
},


hung:{ script:"Old Hungarian", code: "Hung", name:"", type:"alphabet",
dates:"9thC – today", start:"800", end:"", current_usage:"uptake",
status:"Since 1915 various attempts have been made to revive the script, especially tied to a nationalist subculture and young people. Publications exist in books, magazines, teaching materials, etc, and it is used on road signage in Budapest.",
origin:"Europe",
info:{ wikipedia:"Old_Hungarian_alphabet", omniglot:"undefined" },
local: [ ],
charts: [ "Old Hungarian" ],
layout: [ ],
usedfor: "Old Hungarian [ohu]"
},


ital:{ script:"Old Italic", code: "Ital", name:"",
dates:"BCE 8thC – BCE 1stC", start:"800", end:"-100", current_usage:"",
status:"",
origin:"Europe",
info:{ wikipedia:"Old_Italic_alphabet", omniglot:"olditalic" },
local: [ ],
charts: [ "Old Italic" ],
layout: [ ],
},


perm:{ script:"Old Permic", code: "Perm", name:"",
dates:"1376 – 17thC", start:"1376", end:"1700", current_usage:"",
status:"",
origin:"Europe",
info:{ wikipedia:"Old_Permic", omniglot:"oldpermic" },
local: [ ],
charts: [ "Old Permic" ],
layout: [ ],
},


xphais:{ script:"Phaistos Disc", code: "xPhais", name:"",
dates:"BCE 18thC – BCE 14thC", start:"-1800", end:"-1400", current_usage:"",
status:"",
origin:"Europe",
info:{ wikipedia:"Phaistos_Disc", omniglot:"phaistos" },
local: [ ],
charts: [ "Phaistos Disc" ],
layout: [ ],
},


runr:{ script:"Runic", code: "Runr", name:"",
dates:"BCE 1stC – 19thC", start:"100", end:"1900", current_usage:"",
status:"",
origin:"Europe",
info:{ wikipedia:"Runic", omniglot:"runic" },
local: [ ],
charts: [ "Runic" ],
layout: [ ],
},


shaw:{ script:"Shavian", code: "Shaw", name:"", type:"alphabet",
dates:"1960s – today", start:"1960", end:"", current_usage:"uptake",
status:"Used to publish one book in 1962, but remains of some current interest.",
origin:"Europe",
info:{ wikipedia:"Shavian", omniglot:"shavian" },
local: [ ],
charts: [ "Shavian" ],
layout: [ ],
usedfor: "English [en]"
},


bamu:{ script:"Bamum", code: "Bamu", name:"", type:"syllabary",
dates:"1896 – today", start:"1896", end:"", current_usage:"endangered",
status:"Fell into disuse around 1930, but revival attempted since around 2007. Little used currently. The Bamum Scripts and Archives Project preserves and digitally archive manuscripts written in the script to prevent its total loss.",
origin:"Africa",
info:{ wikipedia:"Bamum_script", omniglot:"bamum" },
local: [ ],
charts: [ "Bamum", "Bamum Supplement" ],
layout: [ ],
usedfor: "Bamun [bax]",
},


bass:{ script:"Bassa Vah", code: "Bass", name:"", type:"alphabet",
dates:"1907 – today", start:"1907", end:"", current_usage:"endangered",
status:"Used for the Bassa language, which has around 700,000 speakers. Some efforts underway to revive the use of the script, but still little used.",
origin:"Africa",
info:{ wikipedia:"Bassa_Vah", omniglot:"bassa" },
local: [ ],
charts: [ "Bassa Vah" ],
layout: [ ],
usedfor: "Bassa [bsq]",
},


copt:{ script:"Coptic", code: "Copt", name:"",
dates:"4thC – 14thC", start:"300", end:"1400", current_usage:"liturgical",
status:"",
origin:"Africa",
info:{ wikipedia:"Coptic_script", omniglot:"coptic" },
local: [ ],
charts: [ "Coptic", "Greek and Coptic", "Coptic Epact Numbers" ],
layout: [ ],
},


egyp:{ script:"Egyptian Hieroglyphs", code: "Egyp", name:"",
dates:"BCE 30thC – 1stC CE", start:"-3000", end:"100", current_usage:"",
status:"",
origin:"Africa",
info:{ wikipedia:"Egyptian_hieroglyphs", omniglot:"egyptian" },
local: [ ],
charts: [ "Egyptian Hieroglyphs" ],
layout: [ ],
},


ethi:{ script:"Ethiopic", code: "Ethi", name:"", type:"featural syllabary",
dates:"BCE 4thC – today", start:"-400", end:"", current_usage:"",
status:"Widely used for writing the Ethiopian and Eritrean Semitic languages such as Tigré, Amharic and Tigrinya.",
origin:"Africa",
info:{ wikipedia:"Ge'ez_script", omniglot:"ethiopic" },
local: [ ],
charts: [ "Ethiopic", "Ethiopic Supplement", "Ethiopic Extended", "Ethiopic Extended-A" ],
layout: [ { name:"Ethiopic Layout Requirements", url:"https://w3c.github.io/elreq/"},
          { name:"Proposal to Reclassify Ethiopic Wordspace as a Space Separator (Zs) Symbol", url:"http://www.unicode.org/L2/L2015/15148-ethiopic-wordspace.pdf"},
          ],
usedfor:"Aari [aiw], Afar [aar], Alaba-K’abeena [alw], Amharic [amh], Anuak [anu], Argobba [agj], Awngi [awn], Basketo [bst], Bench [bcq], Bilin [byn], Oromo, Borana-Arsi-Guji [gax], Boro (Ethiopia) [bwo], Burji [bji], Dawro [dwr], Dirasha [gdl], Dizin [mdx], Gamo [gmv], Gedeo [drs], Geez [gez], Gofa [gof], Gumuz [guk], Hadiyya [hdy], Hamer-Banna [amf], Harari [har], Kafa [kbr], Kambaata [ktb], Kistane [gru], Konso [kxc], Koorete [kqy], Majang [mpe], Male (Ethiopia) [mdy], Me'en [mym], Mursi [muz], Oromo [orm], Qimant [ahg], Saho [ssy], Sebat Bet Gurage [sgw], Sidamo [sid], Silt'e [stv], Suri [suq], Tigre [tig], Tigrinya [tir], Tigrinya [tir], Oromo, West Central [gaz], Wolaytta [wal], Xamtanga [xan], Zaysete [zay]",
},


mend:{ script:"Mende Kikakui", code: "Mend", name:"", type:"syllabary, RTL",
dates:"1920 – today", start:"1920", end:"", current_usage:"endangered",
status:"Used by perhaps less than 500 people, in Sierra Leone.",
origin:"Africa",
info:{ wikipedia:"Mende Kikakui_script", omniglot:"mende" },
local: [ ],
charts: [ "Mende Kikakui" ],
layout: [ ],
usedfor: "Mende [men]",
},


merc:{ script:"Meroitic", code: "Merc", name:"",
dates:"BCE 3rdC – 4thC CE", start:"-300", end:"400", current_usage:"",
status:"",
origin:"Africa",
info:{ wikipedia:"Meroitic_alphabet", omniglot:"meroitic" },
local: [ ],
charts: [ "Meroitic Cursive", "Meroitic Hieroglyphs" ],
layout: [ ],
},


nkoo:{ script:"NKo", code: "Nkoo", name:"", type:"alphabet, RTL",
dates:"1949 – today", start:"1949", end:"", current_usage:"",
status:"Used in Guinea and Côte d'Ivoire as well as Mali, for publications relating to indigenous knowledge, including descriptions of medical rituals, traditional poetry, and philosophical works, as well as textbooks and a transcription of the Qur'an.",
origin:"Africa",
info:{ wikipedia:"N'Ko_alphabet", omniglot:"nko" },
local: [ ],
charts: [ "NKo" ],
layout: [ ],
usedfor:"Bamanankan [bam], Eastern Maninkakan [man], Jula [dyu], N'Ko [nqo]",
},


osma:{ script:"Osmanya", code: "Osma", name:"",
dates:"1920 – 1973", start:"1920", end:"1973", current_usage:"",
status:"",
origin:"Africa",
info:{ wikipedia:"Osmanya_alphabet", omniglot:"osmanya" },
local: [ ],
charts: [ "Osmanya" ],
layout: [ ],
},


tfng:{ script:"Tifinagh", code: "Tfng", name:"", type:"alphabet",
dates:"BCE 3rdC – today", start:"-300", end:"", current_usage:"",
status:"Used to write Berber languages spoken in North Africa. In Morocco, taught to approximately 300,000 pupils in 10,000 schools, mostly primary, and three Moroccan universities offer Berber courses in the Tifinagh script leading to a Master’s degree.",
origin:"Africa",
info:{ wikipedia:"Tifinagh", omniglot:"tifinagh" },
local: [ ],
charts: [ "Tifinagh" ],
layout: [ ],
usedfor:"Tamazight, Central Atlas [tzm], Kabyle [kab], Tamazight, Standard Moroccan [zgh], Tachawit [shy], Tachelhit [shi], Tagdal [tda], Tamahaq, Tahaggart [thv], Tamasheq [taq], Tarifit [rif], Tamajaq, Tawallammat [ttq], Tamajeq, Tayart [thz], Tumzabt [mzb], Zenaga [zen]",
},


vaii:{ script:"Vai", code: "Vaii", name:"", type:"syllabary",
dates:"1830 – today", start:"1830", end:"", current_usage:"",
status:"Used for the Vai language, spoken in coastal areas of western Liberia and eastern Sierra  Leone. The Institute for Liberian Languages publishes in the script. It is also widely used in commerce, as well as for newspapers, tombstones and in traditional rituals.",
origin:"Africa",
info:{ wikipedia:"Vai_syllabary", omniglot:"vai" },
local: [ ],
charts: [ "Vai" ],
layout: [ ],
usedfor:"Vai [vai]",
},


hluw:{ script:"Anatolian Hieroglyphs", code: "Hluw", name:"Anatolian (Luwian/Hittite) hieroglyphs",
dates:"BCE 15thC – BCE 7thC", start:"-1500", end:"-700", current_usage:"",
status:"",
origin:"West Asia",
info:{ wikipedia:"Anatolian_hieroglyphs", omniglot:"luvian" },
local: [ ],
charts: [ "Anatolian hieroglyphs" ],
layout: [ ],
},


armi:{ script:"Aramaic", code: "Armi", name:"",
dates:"BCE 8thC – BCE 4thC", start:"-800", end:"-400", current_usage:"",
status:"",
origin:"West Asia",
info:{ wikipedia:"Aramaic_alphabet", omniglot:"aramaic" },
local: [ ],
charts: [ "Imperial Aramaic" ],
layout: [ ],
},


avst:{ script:"Avestan", code: "Avst", name:"", type:"alphabet, RTL",
dates:"6thC – today", start:"500", end:"", current_usage:"liturgical",
status:"Use for Zoroastrian religious texts.",
origin:"West Asia",
info:{ wikipedia:"Avestan_alphabet", omniglot:"avestan" },
local: [ ],
charts: [ "Avestan" ],
layout: [ ],
usedfor: "Avestan [ave]",
},


cari:{ script:"Carian", code: "Cari", name:"",
dates:"BCE 7thC – BCE 3rdC", start:"-700", end:"-300", current_usage:"",
status:"",
origin:"West Asia",
info:{ wikipedia:"Carian_script", omniglot:"carian" },
local: [ ],
charts: [ "Carian" ],
layout: [ ],
},


xsux:{ script:"Cuneiform", code: "Xsux", name:"",
dates:"BCE 29thC – 1stC CE", start:"-2900", end:"100", current_usage:"",
status:"",
origin:"West Asia",
info:{ wikipedia:"Cuneiform_script", omniglot:"cuneiform" },
local: [ ],
charts: [ "Cuneiform", "Early Dynastic Cuneiform", "Cuneiform Numbers and Punctuation", "Old Persian", "Ugaritic" ],
layout: [ ],
},


hatr:{ script:"Hatran", code: "Hatr", name:"",
dates:"BCE 98 – 240 CE", start:"-98", end:"240", current_usage:"",
status:"",
origin:"West Asia",
info:{ wikipedia:"Aramaic_of_Hatra", omniglot:"" },
local: [ ],
charts: [ "Hatran" ],
layout: [ ],
},


hebr:{ script:"Hebrew", code: "Hebr", name:"", type:"abjad, RTL",
dates:"BCE 3rdC – today", start:"-300", end:"", current_usage:"",
status:"The writing system for the Hebrew language, but also for others.",
origin:"West Asia",
info:{ wikipedia:"Hebrew_script", omniglot:"hebrew" },
local: [ ],
charts: [ "Hebrew" ],
layout: [ ],
usedfor:"Hebrew, Ancient [hbo], Bukharic [bhh], Yiddish, Eastern [ydd], Hebrew [heb], Hebrew [heb], Hulaulá [huy], Judeo-Arabic [jrb], Judeo-Berber [jbe], Arabic, Judeo-Iraqi [yhd], Judeo-Italian [itk], Arabic, Judeo-Moroccan [aju], Judeo-Persian [jpr], Judeo-Tat [jdt], Arabic, Judeo-Tripolitanian [yud], Arabic, Judeo-Tunisian [ajt], Arabic, Judeo-Yemeni [jye], Ladino [lad], Lishán Didán [trg], Lishana Deni [lsd], Lishanid Noshan [aij], Aramaic, Samaritan [sam], Samaritan [smp], Tajik [tgk], Yiddish, Western [yih], Yiddish [yid]",
},


lyci:{ script:"Lycian", code: "Lyci", name:"",
dates:"BCE 5thC – BCE 3rdC", start:"-500", end:"-300", current_usage:"",
status:"",
origin:"West Asia",
info:{ wikipedia:"Lycian_script", omniglot:"http://www.omniglot.com/writing/lycian.php" },
local: [ ],
charts: [ "Lycian" ],
layout: [ ],
},


lydi:{ script:"Lydian", code: "Lydi", name:"",
dates:"BCE 8thC – BCE 3rdC", start:"-800", end:"-300", current_usage:"",
status:"",
origin:"West Asia",
info:{ wikipedia:"Lydian_script", omniglot:"http://www.omniglot.com/writing/lydian.php" },
local: [ ],
charts: [ "Lydian" ],
layout: [ ],
},


mand:{ script:"Mandaic", code: "Mand", name:"", type:"alphabet, RTL",
dates:"2ndC – today", start:"100", end:"", current_usage:"liturgical, endangered",
status:"War over a long period has reduced the language to a severely endangered level. There may be 200 or less first language speakers of Mandaic.",
origin:"West Asia",
info:{ wikipedia:"Mandaic_alphabet", omniglot:"mandaic" },
local: [ ],
charts: [ "Mandaic" ],
layout: [ ],
usedfor: "Classical Mandaic [myz], Mandaic [mid]",
},


nbat:{ script:"Nabataean", code: "Nbat", name:"",
dates:"BCE 2ndC – 4thC CE", start:"-200", end:"400", current_usage:"",
status:"",
origin:"West Asia",
info:{ wikipedia:"Nabataean_alphabet", omniglot:"nabataean" },
local: [ ],
charts: [ "Nabataean" ],
layout: [ ],
},


narb:{ script:"Old North Arabian", code: "Narb", name:"",
dates:"BCE 550 – 4thC CE", start:"-550", end:"400", current_usage:"",
status:"",
origin:"West Asia",
info:{ wikipedia:"Old_North_Arabian", omniglot:"" },
local: [ ],
charts: [ "Old North Arabian" ],
layout: [ ],
},


xpeo:{ script:"Old Persian", code: "Xpeo", name:"",
dates:"BCE 525 – 4thC CE", start:"-525", end:"400", current_usage:"",
status:"",
origin:"West Asia",
info:{ wikipedia:"Old_Persian_cuneiform", omniglot:"opcuneiform" },
local: [ ],
charts: [ "Old Persian" ],
layout: [ ],
},


sarb:{ script:"Old South Arabian", code: "Sarb", name:"",
dates:"BCE 8thC – 7thC CE", start:"-800", end:"700", current_usage:"",
status:"",
origin:"West Asia",
info:{ wikipedia:"Old South Arabian_alphabet", omniglot:"southarabian" },
local: [ ],
charts: [ "Old South Arabian" ],
layout: [ ],
},


phli:{ script:"Inscriptional Pahlavi", code: "Phli", name:"",
dates:"2ndC – 5thC", start:"100", end:"500", current_usage:"",
status:"",
origin:"West Asia",
info:{ wikipedia:"Inscriptional_Pahlavi", omniglot:"mpersian" },
local: [ ],
charts: [ "Inscriptional Pahlavi" ],
layout: [ ],
},


phlp:{ script:"Psalter Pahlavi", code: "Phlp", name:"",
dates:"6thC – 7thC", start:"500", end:"700", current_usage:"",
status:"",
origin:"West Asia",
info:{ wikipedia:"Pahlavi_scripts", omniglot:"mpersian" },
local: [ ],
charts: [ "Psalter Pahlavi" ],
layout: [ ],
},


palm:{ script:"Palmyrene", code: "Palm", name:"",
dates:"BCE 1stC – 3rdC CE", start:"-100", end:"200", current_usage:"",
status:"",
origin:"West Asia",
info:{ wikipedia:"Palmyrene_alphabet", omniglot:"" },
local: [ ],
charts: [ "Palmyrene" ],
layout: [ ],
},


prti:{ script:"Inscriptional Parthian", code: "Prti", name:"",
dates:"2ndC – 292", start:"100", end:"292", current_usage:"",
status:"",
origin:"West Asia",
info:{ wikipedia:"Inscriptional_Parthian#Written_Parthian", omniglot:"mpersian" },
local: [ ],
charts: [ "Inscriptional Parthian" ],
layout: [ ],
},


phnx:{ script:"Phoenician", code: "Phnx", name:"",
dates:"BCE 12thC – BCE 2ndC", start:"1200", end:"200", current_usage:"",
status:"",
origin:"West Asia",
info:{ wikipedia:"Phoenician_alphabet", omniglot:"phoenician" },
local: [ ],
charts: [ "Phoenician" ],
layout: [ ],
},


samr:{ script:"Samaritan", code: "Samr", name:"", type:"abjad, RTL",
dates:"BCE 3rdC – today", start:"-300", end:"", current_usage:"liturgical",
status:"Used in small communities in Israel and the Palestinian Territories, primarily for religious purposes.",
origin:"West Asia",
info:{ wikipedia:"Samaritan_alphabet", omniglot:"samaritan" },
local: [ ],
charts: [ "Samaritan" ],
layout: [ ],
usedfor: "Samaritan Aramaic [sam], Samaritan Hebrew [smp]",
},


syrc:{ script:"Syriac", code: "Syrc", name:"", type:"abjad, RTL",
dates:"6thC – today", start:"500", end:"", current_usage:"",
status:"The script used for several Assyrian communities, and for liturgical use by the Syrian church.",
origin:"West Asia",
info:{ wikipedia:"Syriac_alphabet", omniglot:"syriac" },
local: [ ],
charts: [ "Syriac", "Syriac Supplement" ],
layout: [ ],
usedfor:"Arabic [ara], Neo-Aramaic, Assyrian [aii], Neo-Aramaic, Barzani Jewish [bjf], Neo-Aramaic, Bohtan [bhn], Neo-Aramaic, Chaldean [cld], Syriac, Classical [syc], Hértevin [hrt], Aramaic, Jewish Babylonian (ca. 200-1200 CE) [tmr], Koy Sanjaq Surat [kqd], Mlahsö [lhs], Aramaic, Official (700-300 BCE) [arc], Aramaic, Old (up to 700 BCE) [oar], Aramaic, Samaritan [sam], Senaya [syn], Sogdian [sog], Syriac [syr], Turoyo [tru]",
},


ugar:{ script:"Ugaritic", code: "Ugar", name:"",
dates:"BCE 14thC – BCE 12thC", start:"-1400", end:"-1200", current_usage:"",
status:"",
origin:"West Asia",
info:{ wikipedia:"Ugaritic_alphabet", omniglot:"ugaritic" },
local: [ ],
charts: [ "Ugaritic" ],
layout: [ ],
},


beng:{ script:"Bengali", code: "Beng", name:"", type:"abugida",
dates:"11thC – today", start:"1100", end:"", current_usage:"",
status:"The script used for the Bengali language, which has over 180,000,000 speakers, but also for several others.",
origin:"South Asia",
info:{ wikipedia:"Bengali_alphabet", omniglot:"bengali" },
local: [ { name:"Introduction to Indic Scripts", url:"indic-overview"},
          ],
charts: [ "Bengali" ],
layout: [ ],
usedfor:"Assamese [as], Bengali [bn], Bishnupriya [bpy], Bodo (India) [brx], Chakma [ccp], Chiru [cdf], Chittagonian [ctg], Naga, Chothe [nct], Deori [der], Dimasa [dis], Chin, Falam [cfm], Garo [grt], Hajong [haj], Khasi [kha], Koch [kdq], Koda [cdz], Kok Borok [trp], Kudmali [kyw], Lushai [lus], Manipuri [mni], Naga, Maring [nng], Mising [mrg], Naga, Moyon [nmo], Munda [unx], Mundari [unr], Nyishi [njz], Nyishi [njz], Sadri, Oraon [sdr], Panchpargania [tdb], Puroik [suv], Rabha [rah], Rangpuri [rkt], Sadri [sck], Santali [sat], Sauria Paharia [mjt], Sylheti [syl], Naga, Thangal [nki], Tippera [tpe], Tiwa [lax], Toto [txo], Usui [usi]",
},


brah:{ script:"Brahmi", code: "Brah", name:"",
dates:"BCE 3rdC – 10thC CE", start:"-300", end:"1000", current_usage:"",
status:"",
origin:"South Asia",
info:{ wikipedia:"Brahmi_script", omniglot:"brahmi" },
local: [ ],
charts: [ "Brahmi" ],
layout: [ ],
},


cakm:{ script:"Chakma", code: "Cakm", name:"", type:"abugida",
dates:"8thC – today", start:"700", end:"", current_usage:"uptake",
status:"Introduced to non-governmental schools in Bangladesh, and Indian schools in Mizoram and from 2012 Tripura. Most young Chakma speakers use Bengali or Latin.",
origin:"South Asia",
info:{ wikipedia:"Chakma_alphabet", omniglot:"chakma" },
local: [ ],
charts: [ "Chakma" ],
layout: [ ],
usedfor:"Chakma [ccp], Tangchangya [tnv]",
},


gran:{ script:"Grantha", code: "Gran", name:"", type:"abugida",
dates:"7thC – today", start:"700", end:"", current_usage:"liturgical",
status:"Still taught and used in Gūrūkuls, residential Hindu schools. Used used by Tamil-speaking Hindus for a child's name during the naming ceremony, for the Sanskrit portion of wedding invitations, and for announcements of a person's last rites",
origin:"South Asia",
info:{ wikipedia:"Grantha_alphabet", omniglot:"grantha" },
local: [ ],
charts: [ "Grantha" ],
layout: [ ],
usedfor: "Old Tamil [oty], Sanskrit [sa]",
},


gujr:{ script:"Gujarati", code: "Gujr", name:"", type:"abugida",
dates:"1592 – today", start:"1592", end:"", current_usage:"",
status:"The script used for the Gujarati and Chodri languages, with around 47,000,000 speakers, and several other languages.",
origin:"South Asia",
info:{ wikipedia:"Gujarati_alphabet", omniglot:"gujarati" },
local: [ { name:"Introduction to Indic Scripts", url:"indic-overview"},
          ],
charts: [ "Gujarati" ],
layout: [ ],
usedfor:"Garasia, Adiwasi [gas], Avestan [ave], Bhili [bhb], Chodri [cdi], Dhanki [dhn], Dubli [dub], Dungra Bhil [duh], Gamit [gbl], Gujarati [guj], Kachhi [kfr], Koli, Kachi [gjk], Kukna [kex], Garasia, Rajput [gra], Varli [vav], Vasavi [vas], Koli, Wadiyara [kxp]",
},


guru:{ script:"Gurmukhi", code: "Guru", name:"", type:"abugida",
dates:"16thC – today", start:"1500", end:"", current_usage:"",
status:"The script used for the Punjabi language in India.",
origin:"South Asia",
info:{ wikipedia:"Gurmukhi_alphabet", omniglot:"punjabi" },
local: [ { name:"Introduction to Indic Scripts", url:"indic-overview"},
          ],
charts: [ "Gurmukhi" ],
layout: [ ],
usedfor:"Eastern Punjabi [pan], Saraiki [skr], Sindhi [snd]"
},


kthi:{ script:"Kaithi", code: "Kthi", name:"",
dates:"16thC – 20thC", start:"1500", end:"2000", current_usage:"",
status:"",
origin:"South Asia",
info:{ wikipedia:"Kaithi", omniglot:"kaithi" },
local: [ ],
charts: [ "Kaithi" ],
layout: [ ],
},


knda:{ script:"Kannada", code: "Knda", name:"", type:"abugida",
dates:"1500 – today", start:"1500", end:"", current_usage:"",
status:"The script used for the Kannada language, with around 35,000,000 speakers, and also for other minority languages, some of which have millions of speakers also.",
origin:"South Asia",
info:{ wikipedia:"Kannada_alphabet", omniglot:"kannada" },
local: [ { name:"Introduction to Indic Scripts", url:"indic-overview"},
          ],
charts: [ "Kannada" ],
layout: [ ],
usedfor:"Badaga [bfq], Betta Kurumba [xub], Goan Konkani [gom], Kannada Kurumba [kfi], Kannada [kan], Kodava [kfa], Konkani [knn], Kudiya [kfg], Lambadi [lmn], Paniya [pcg], Ravula [yea], Tulu [tcy]",
},


khar:{ script:"Kharoshthi", code: "Khar", name:"",
dates:"BCE 7thC – 3rdC CE", start:"-700", end:"300", current_usage:"",
status:"",
origin:"South Asia",
info:{ wikipedia:"Kharoshthi", omniglot:"kharosthi" },
local: [ ],
charts: [ "Kharoshthi" ],
layout: [ ],
},


khoj:{ script:"Khojki", code: "Khoj", name:"", type:"abugida",
dates:"16thC – today", start:"1500", end:"", current_usage:"liturgical",
status:"Used by the Nizari Ismaili community of South Asia for recording  religious  literature. Manuscripts and  books are used in Ismaili  ceremonies not only in South Asia, but in east and south Africa",
origin:"South Asia",
info:{ wikipedia:"Khojki", omniglot:"khojki" },
local: [ ],
charts: [ "Khojki" ],
layout: [ ],
usedfor: "Eastern Punjabi [pan], Gujarati [gu], Saraiki [skr], Sindhi [snd], Western Punjabi [lah]",
},


sind:{ script:"Khudawadi", code: "Sind", name:"Khudawadi (Sindhi)",
dates:"1868 – 20thC", start:"1868", end:"2000", current_usage:"",
status:"",
origin:"South Asia",
info:{ wikipedia:"Khudabadi_script", omniglot:"sindhi" },
local: [ ],
charts: [ "Khudawadi" ],
layout: [ ],
},


lepc:{ script:"Lepcha", code: "Lepc", name:"Lepcha (Róng)", type:"abugida",
dates:"1720 – today", start:"1720", end:"", current_usage:"community",
status:"The writing system for the Lepcha language, spoken in Sikkim and in the Darjeeling district of the West Bengal state of India by around 53,000 people.",
origin:"South Asia",
info:{ wikipedia:"Lepcha_alphabet", omniglot:"lepcha" },
local: [ ],
charts: [ "Lepcha" ],
layout: [ ],
usedfor: "Lepcha [lep]",
},


limb:{ script:"Limbu", code: "Limb", name:"", type:"abugida",
dates:"19thC – today", start:"1800", end:"", current_usage:"community",
status:"Used alongside Devanagari by about 2-400,000 people for writing the Limbu language spoken in Nepal and northern India.",
origin:"South Asia",
info:{ wikipedia:"Limbu_alphabet", omniglot:"limbu" },
local: [ ],
charts: [ "Limbu" ],
layout: [ ],
usedfor: "Limbu [lif]",
},


mahj:{ script:"Mahajani", code: "Mahj", name:"",
dates:"19thC – 20thC", start:"1800", end:"2000", current_usage:"",
status:"",
origin:"South Asia",
info:{ wikipedia:"Mahajani", omniglot:"" },
local: [ ],
charts: [ "Mahajani" ],
layout: [ ],
},


mlym:{ script:"Malayalam", code: "Mlym", name:"", type:"abugida",
dates:"13thC – today", start:"1200", end:"", current_usage:"",
status:"The script used for the Malayalam language, with around 35,000,000 speakers, and a number of other minority languages.",
origin:"South Asia",
info:{ wikipedia:"Malayalam_alphabet", omniglot:"malayalam" },
local: [ { name:"Introduction to Indic Scripts", url:"indic-overview"},
          ],
charts: [ "Malayalam" ],
layout: [ ],
usedfor:"Allar [all], Kurumba, Attapady [pkr], Kurumba, Betta [xub], Irula [iru], Kudiya [kfg], Kurichiya [kfh], Malayalam [mal], Mannan [mjv], Muduga [udg], Paniya [pcg], Ravula [yea]",
},


gonm:{ script:"Masaram Gondi", code: "Gonm", name:"", type:"abugida",
dates:"20thC – today", start:"1900", end:"", current_usage:"uptake",
status:"Some use for handwritten and printed materials, as an alternative to Devanagari and Telugu, and but seemingly less interest than for Gunjala Gondi.",
origin:"South Asia",
info:{ wikipedia:"Gondi_writing", omniglot:"gondi" },
local: [ ],
charts: [ "Masaram Gondi" ],
layout: [ ],
usedfor: "Adilabad Gondi [wsg], Aheri Gondi [esg], Northern Gondi [gon]",
},


mtei:{ script:"Meetei Mayek", code: "Mtei", name:"Meetei Mayek (Meithei, Meitei)", type:"abugida",
dates:"11thC – today", start:"1000", end:"", current_usage:"uptake",
status:"Used to write Manipuri, spoken by about 1,400,000 people in India, primarily in the state of Manipur, in Bangladesh, and in Myanmar. Growing in popularity as a replacement for Bengali script.",
origin:"South Asia",
info:{ wikipedia:"Meetei_Mayek", omniglot:"manipuri" },
local: [ ],
charts: [ "Meetei Mayek", "Meetei Mayek Extensions" ],
layout: [ ],
usedfor: "Meitei [mni], Old Manipuri [omp]",
},


modi:{ script:"Modi", code: "Modi", name:"Modi, Moḍī", type:"abugida",
dates:"17thC – today", start:"1600", end:"", current_usage:"endangered",
status:"Since the 1950s, mostly historical, apart from limited personal correspondence.",
origin:"South Asia",
info:{ wikipedia:"Modi_alphabet", omniglot:"modi" },
local: [ ],
charts: [ "Modi" ],
layout: [ ],
usedfor: "Marathi [mar], Old Marathi [omr]"
},


mroo:{ script:"Mro", code: "Mroo", name:"Mro, Mru", type:"alphabet",
dates:"1980s – today", start:"1980", end:"", current_usage:"community",
status:"Used for Mro language, spoken by 30-50,000 people in the Chittagong Hill Tracts of Bangladesh. Taught in schools, and literacy is over 80% in Mru speakers.",
origin:"South Asia",
info:{ wikipedia:"Mru_language", omniglot:"mro" },
local: [ ],
charts: [ "Mro" ],
layout: [ ],
usedfor: "Mru",
},


mult:{ script:"Multani", code: "Mult", name:"",
dates:"16thC – 20thC", start:"1500", end:"2000", current_usage:"",
status:"",
origin:"South Asia",
info:{ wikipedia:"Multani_alphabet", omniglot:"" },
local: [ ],
charts: [ "Multani" ],
layout: [ ],
},


olck:{ script:"Ol Chiki", code: "Olck", name:"Ol Chiki (Ol Cemet', Ol, Santali)", type:"alphabet",
dates:"1920s – today", start:"1920", end:"", current_usage:"",
status:"Used for the Santali language, which has around 6,000,000 speakers, as a proposed replacement for Devanagari, Bengali, Odia, and Latin. Mostly used by the southern dialect speakers.",
origin:"South Asia",
info:{ wikipedia:"Ol_Chiki_alphabet", omniglot:"olchiki" },
local: [ ],
charts: [ "Ol Chiki" ],
layout: [ ],
usedfor:"Santali [sat]",
},


orya:{ script:"Oriya", code: "Orya", name:"Oriya (Odia)", type:"abugida",
dates:"1051 – today", start:"1051", end:"", current_usage:"",
status:"The script for the Odia language, with around 40,000,000 speakers, and several minority languages.",
origin:"South Asia",
info:{ wikipedia:"Odia_alphabet", omniglot:"oriya" },
local: [ { name:"Introduction to Indic Scripts", url:"indic-overview"},
          ],
charts: [ "Oriya" ],
layout: [ ],
usedfor:"Bodo Gadaba [gbj], Bodo Parja [bdv], Bondo [bfw], Dawik [dwk], Desiya [dso], Duruwa [pci], Gara' [gaq], ho [hoc], Juang [jun], Kisan [xis], Koya [kff], Kudmali [kyw], Kui [kxu], Kuvi [kxv], Mirgan [zrg], Mundari [unr], Odia [ory], Pengo [peg], Pottangi Ollar Gadaba [gdb], Sambalpuri [spv], Santhali [sat], Sora [srb]",
},


saur:{ script:"Saurashtra", code: "Saur", name:"", type:"abugida",
dates:"19thC – today", start:"1800", end:"", current_usage:"community",
status:"An alternative to Tamil, Telugu, or Devanagari to write the Saurashtra language, spoken by 130,000 people in southern India. Usage may be declining.",
origin:"South Asia",
info:{ wikipedia:"Saurashtra_alphabet", omniglot:"" },
local: [ ],
charts: [ "Saurashtra" ],
layout: [ ],
usedfor:"Saurashtra [saz]",
},


shrd:{ script:"Sharada", code: "Shrd", name:"Sharada (Śāradā)",
dates:"8thC – 20thC", start:"700", end:"2000", current_usage:"",
status:"",
origin:"South Asia",
info:{ wikipedia:"Sharada_script", omniglot:"sharda" },
local: [ ],
charts: [ "Sharada" ],
layout: [ ],
},


sidd:{ script:"Siddham", code: "Sidd", name:"Siddham (Siddhaṃ, Siddhamātṛkā)", type:"abugida",
dates:"7thC – today", start:"600", end:"", current_usage:"liturgical",
status:"Today, mainly used for ceremonial and ritualistic purposes associated with esoteric Buddhist practices in Japan, where it is called Bonji.",
origin:"South Asia",
info:{ wikipedia:"Siddham_alphabet", omniglot:"siddham" },
local: [ ],
charts: [ "Siddham" ],
layout: [ ],
usedfor:"Sanskrit [san]",
},


sinh:{ script:"Sinhala", code: "Sinh", name:"", type:"abugida",
dates:"BCE 3rdC – today", start:"-300", end:"", current_usage:"",
status:"The script used for the Sinhala language, with around 16,000,000 speakers, and also for Sanskrit and Pali.",
origin:"South Asia",
info:{ wikipedia:"Sinhala_alphabet", omniglot:"sinhala" },
local: [ ],
charts: [ "Sinhala", "Sinhala Archaic Numbers" ],
layout: [ ],
usedfor:"Pali [pli], Sanskrit [sa], Sinhala [sin]",
},


sora:{ script:"Sora Sompeng", code: "Sora", name:"", type:"abugida",
dates:"1936 – today", start:"1936", end:"", current_usage:"liturgical",
status:"Used in religious contexts, and published in a variety of printed materials.",
origin:"South Asia",
info:{ wikipedia:"Sora Sompeng", omniglot:"sorangsompeng" },
local: [ ],
charts: [ "Sora Sompeng" ],
layout: [ ],
usedfor:"Sora [srb]",
},


sylo:{ script:"Syloti Nagri", code: "Sylo", name:"", type:"abugida",
dates:"14thC – today", start:"1300", end:"", current_usage:"endangered",
status:"The script began to decline after the Partition of India in 1947, and by 1970 had fallen almost entirely from use, in favour of Bengali.",
origin:"South Asia",
info:{ wikipedia:"Syloti Nagri", omniglot:"syloti" },
local: [ ],
charts: [ "Syloti Nagri" ],
layout: [ ],
usedfor:"Sylheti [syl]",
},


takr:{ script:"Takri", code: "Takr", name:"Takri (Ṭākrī, Ṭāṅkrī)",
dates:"17thC – 20thC", start:"1600", end:"2000", current_usage:"",
status:"",
origin:"South Asia",
info:{ wikipedia:"Takri_alphabet", omniglot:"takri" },
local: [ ],
charts: [ "Takri" ],
layout: [ ],
},


taml:{ script:"Tamil", code: "Taml", name:"", type:"abugida",
dates:"7thC – today", start:"600", end:"", current_usage:"",
status:"The script used for the Tamil language, with around 65,000,000 speakers, and for several minority languages.",
origin:"South Asia",
info:{ wikipedia:"Tamil_script", omniglot:"tamil" },
local: [ { name:"Introduction to Indic Scripts", url:"indic-overview"},
          ],
charts: [ "Tamil" ],
layout: [ ],
usedfor:"Badaga [bfq], Betta Kurumba [xub], Irula [iru], Kannada Kurumba [kfi], Kota (India) [kfe], Muthuvan [muv], Paniya [pcg], Saurashtra [saz], Tamil [ta], Toda [tcx], Vaagri Booli [vaa], Wayanad Chetti [ctt]",
},


telu:{ script:"Telugu", code: "Telu", name:"", type:"abugida",
dates:"13thC – today", start:"1200", end:"", current_usage:"",
status:"The script used for the Telugu language, with around 70,000,000 speakers, and several other minority languages.",
origin:"South Asia",
info:{ wikipedia:"Telugu_alphabet", omniglot:"telugu" },
local: [ { name:"Introduction to Indic Scripts", url:"indic-overview"},
          ],
charts: [ "Telugu" ],
layout: [ ],
usedfor:"Gondi, Adilabad [wsg], Oriya, Adivasi [ort], Chenchu [cde], Gondi [gon], Ho [hoc], Konda-Dora [kfc], Koya [kff], Kupia [key], Lambadi [lmn], Manna-Dora [mju], Mirgan [zrg], Gadaba, Mudhili [gau], Parenga [pcj], Gadaba, Pottangi Ollar [gdb], Saurashtra [saz], Sora [srb], Kolami, Southeastern [nit], Telugu [tel], Waddar [wbq], Yerukula [yeu]",
},


thaa:{ script:"Thaana", code: "Thaa", name:"", type:"alphabet, RTL",
dates:"18thC – today", start:"1700", end:"", current_usage:"",
status:"The script used for the Dhivehi language, with around 370,000 speakers, in the Maldives.",
origin:"South Asia",
info:{ wikipedia:"Thaana", omniglot:"thaana" },
local: [ ],
charts: [ "Thaana" ],
layout: [ ],
usedfor:"Maldivian [dv]",
},


tirh:{ script:"Tirhuta", code: "Tirh", name:"", type:"abugida",
dates:"13thC – today", start:"1200", end:"", current_usage:"endangered",
status:"Now almost completely replaced by Devanagari, Tirhuta is still sometimes used by religious pundits for writing ceremonial letters and documents. Since the 1950s literary societies, such as the Maithili Akademi and Chetna Samiti, have been publishing literary, educational, and linguistic materials, and it is also used for signage in districts  of  north  Bihar.",
origin:"South Asia",
info:{ wikipedia:"Tirhuta", omniglot:"" },
local: [ ],
charts: [ "Tirhuta" ],
layout: [ ],
usedfor:"Maithili [mai]",
},


wara:{ script:"Warang Citi", code: "Wara", name:"Warang Citi (Varang Kshiti)", type:"abugida",
dates:"1950s – today", start:"1950", end:"", current_usage:"uptake",
status:"Used alongside Devanagari and Odia to write the Ho language, which has around 1,420,000 speakers in Odisha and Jharkhand. The Unicode Standard mentiones a yearly magazine and a biweekly publication.",
origin:"South Asia",
info:{ wikipedia:"Varang_Kshiti", omniglot:"varangkshiti" },
local: [ ],
charts: [ "Warang Citi" ],
layout: [ ],
usedfor:"Ho [hoc]",
},


mani:{ script:"Manichaean", code: "Mani", name:"",
dates:"3rdC – 10thC", start:"200", end:"1000", current_usage:"",
status:"",
origin:"Central Asia",
info:{ wikipedia:"Manichaean_alphabet", omniglot:"http://www.omniglot.com/writing/manichaean.php" },
local: [ ],
charts: [ "Manichaean" ],
layout: [ ],
},


mong:{ script:"Mongolian", code: "Mong", name:"", type:"alphabet, vertical LTR",
dates:"13thC – today", start:"1200", end:"", current_usage:"",
status:"Used alongside Cyrillic for the Mongolian language in Mongolia and China, around 6,500,000 speakers, as well as for a number of other languages.",
origin:"Central Asia",
info:{ wikipedia:"Mongolian_alphabet", omniglot:"mongolian" },
local: [ { name:"Mongolian Variant Forms", url:"https://r12a.github.io/mongolian-variants/"},
          ],
charts: [ "Mongolian" ],
layout: [ ],
usedfor:"Mongolian, Halh [khk], Kalmyk [xal], Manchu [mnc], Buriat [bxm], Mongolian [mon], Old Uighur [oui], Peripheral Mongolian [mvf], Southern Altai [alt], Xibe [sjo], Daur [dta]",
},


orkh:{ script:"Old Turkic", code: "Orkh", name:"Old Turkic, Orkhon Runic",
dates:"8thC – 9thC", start:"700", end:"900", current_usage:"",
status:"",
origin:"Central Asia",
info:{ wikipedia:"Old_Turkic_alphabet", omniglot:"orkhon" },
local: [ ],
charts: [ "Old Turkic" ],
layout: [ ],
},


phag:{ script:"Phags-Pa", code: "Phag", name:"",
dates:"1260 – 1368", start:"1260", end:"1368", current_usage:"",
status:"",
origin:"Central Asia",
info:{ wikipedia:"Phags-pa_script", omniglot:"phagspa" },
local: [ ],
charts: [ "Phags-Pa" ],
layout: [ ],
},


soyo:{ script:"Soyombo", code: "Soyo", name:"",
dates:"17thC", start:"1600", end:"1600", current_usage:"",
status:"",
origin:"Central Asia",
info:{ wikipedia:"Soyombo_alphabet", omniglot:"soyombo" },
local: [ ],
charts: [ "Soyombo" ],
layout: [ ],
},


tibt:{ script:"Tibetan", code: "Tibt", name:"", type:"abugida",
dates:"6thC – today", start:"500", end:"", current_usage:"",
status:"The script used for the Tibetan, Dzongka, and several other languages, in the Himalayas and India. Language speakers number around 6,000,000.",
origin:"Central Asia",
info:{ wikipedia:"Tibetan_alphabet", omniglot:"tibetan" },
local: [ ],
charts: [ "Tibetan" ],
layout: [ { name:"Tibetan emphasis (blog)", url:"https://r12a.github.io/blog/200610.html#20070719"},
          { name:"Formatting rules for Tibetan text", url:"http://digitaltibetan.org/index.php/Formatting_rules_for_Tibetan_text"},
          ],
usedfor:"Adi [adi], Tibetan, Amdo [adx], Balti [bft], Bumthangkha [kjz], Changthang [cna], Dolpo [dre], Dzongkha [dzo], Tamang, Eastern [taj], Gahri [bfu], Mongolian, Halh [khk], Idu-Mishmi [clk], Jiarong [jya], Khamba [kbg], Tibetan, Khams [khg], Khengkha [xkf], Kurtokha [xkz], Ladakhi [lbj], Lepcha [lep], Loke [loy], Manangba [nmm], Mugom [muk], Tibetan, Old [otb], Pattani [lae], Purik [prx], Sherpa [xsr], Sikkimese [sip], Bhoti, Spiti [spt], Bhoti, Stod [sbu], Tibetan [bod], Tinani [lbf], Tshangla [tsj], Walungge [ola], Tamang, Western [tdg], Zangskari [zau]",
},


zanb:{ script:"Zanabazar Square", code: "Zanb", name:"",
dates:"17thC", start:"1700", end:"1800", current_usage:"",
status:"",
origin:"Central Asia",
info:{ wikipedia:"Mongolian_writing_systems", omniglot:"" },
local: [ ],
charts: [ "Zanabazar Square" ],
layout: [ ],
},


cham:{ script:"Cham", code: "Cham", name:"", type:"abugida",
dates:"10thC – today", start:"900", end:"", current_usage:"",
status:"Used for the Cham language, which has around 300,000 speakers, in Vietnam and Cambodia.",
origin:"Southeast Asia",
info:{ wikipedia:"Cham_script", omniglot:"cham" },
local: [ ],
charts: [ "Cham" ],
layout: [ ],
usedfor:"Eastern Cham [cjm], Western Cham [cja]",
},


kali:{ script:"Kayah Li", code: "Kali", name:"", type:"alphabet",
dates:"1962 – today", start:"1962", end:"", current_usage:"",
status:"No usage data. The Kayah languages are spoken by around 500,000 people.",
origin:"Southeast Asia",
info:{ wikipedia:"Kayah Li_alphabet", omniglot:"kayahli" },
local: [ ],
charts: [ "Kayah Li" ],
layout: [ ],
usedfor:"Eastern Kayah [eky], Western Kayah [kyu]"
},


khmr:{ script:"Khmer", code: "Khmr", name:"", type:"abugida",
dates:"6thC – today", start:"500", end:"", current_usage:"",
status:"The script for the Khmer (Cambodian) language, which has around 16,000,000 speakers, and for several minority languages.",
origin:"Southeast Asia",
info:{ wikipedia:"Khmer_script", omniglot:"khmer" },
local: [ { name:"Khmer spreadsheet", url:"https://docs.google.com/spreadsheets/d/1gh6d8_Slzcx1JoRNg07cNG9095csaO7V5zeogjxj7v4/edit#gid=0"},
          ],
charts: [ "Khmer", "Khmer Symbols" ],
layout: [ ],
usedfor:"Mnong, Central [cmo], Jarai [jra], Kavet [krv], Khmer [khm], Krung [krr], Kuy [kdt], Lave [brb], Khmer, Northern [kxm], Tampuan [tpu]",
},


laoo:{ script:"Lao", code: "Laoo", name:"", type:"alphabet",
dates:"16thC – today", start:"1500", end:"", current_usage:"",
status:"The script for the Lao language, with around 4,000,000 speakers, and several minority languages in Laos.",
origin:"Southeast Asia",
info:{ wikipedia:"Lao_script", omniglot:"lao" },
local: [ { name:"Lao spreadsheet", url:"https://docs.google.com/spreadsheets/d/1dKKaAVSsEFBE36-Zfm-kpF1nOe_AEMRQYd0ntfRHUAM/edit#gid=0"},
          ],
charts: [ "Lao" ],
layout: [ ],
usedfor:"Bru, Eastern [bru], Hmong Daw [mww], Mien, Iu [ium], Jeh [jeh], Kataang [kgd], Khmu [kjg], Kriang [ngt], Kuy [kdt], Lamet [lbn], Lao [lao], Lave [brb], Ta'oih, Lower [tto], Katang, Northern [ncq], Pacoh [pac], Phunoi [pho], Sô [sss], Tai Dam [blt], Ta'oih, Upper [tth], Bru, Western [brv], Katu, Western [kuf]",
},


mymr:{ script:"Myanmar", code: "Mymr", name:"Myanmar (Burmese)", type:"abugida",
dates:"11thC – today", start:"1000", end:"", current_usage:"",
status:"The language used for the Burmese language, with around 40,000,000 speakers, but also for a number of other languages, which also have sizeable numbers of speakers, such as Shan, with around 4,500,000.",
origin:"Southeast Asia",
info:{ wikipedia:"Burmese_alphabet", omniglot:"burmese" },
local: [ { name:"Burmese spreadsheet", url:"https://docs.google.com/spreadsheets/d/1KsEznv6RtvNPJrVZChvoReeFbPUF06qwKxTXDQ-aJ0s/edit#gid=0"},
          { name:"Shan spreadsheet", url:"https://docs.google.com/spreadsheets/d/1IrqLDvl72CCj0QuRD1XCmypmwm0HAWmuK1Gl_ia7OpY/edit#gid=0"},
          ],
charts: [ "Myanmar", "Myanmar Extended-A", "Myanmar Extended-B" ],
layout: [ ],
usedfor:"Aiton [aio], Akha [ahk], Chin, Asho [csh], Burmese [mya], Karen, Bwe [bwe], Karen, Geba [kvq], Intha [int], Khamti [kht], Lamkang [lmk], Karen, Manumanaw [kxf], Marma [rmz], Moken [mwt], Mon [mnw], Burmese, Old [obr], Karen, Pa'o [blk], Pali [pli], Phake [phk], Karen, Pwo Eastern [kjp], Karen, Pwo Eastern [kjp], Karen, Pwo Eastern [kjp], Karen, Pwo Western [pwo], Rakhine [rki], Palaung, Ruching [pce], Palaung, Rumai [rbb], Karen, S'gaw [ksw], Sanskrit [san], Shan [shn], Palaung, Shwe [pll], Tai Laing [tjl], Kayah, Western [kyu]",
},


talu:{ script:"New Tai Lue", code: "Talu", name:"", type:"alphabet",
dates:"1950s – today", start:"1900", end:"", current_usage:"",
status:"A script used to write the Lü language in China, which has around 280,000 speakers.",
origin:"Southeast Asia",
info:{ wikipedia:"New_Tai_Lue_alphabet", omniglot:"tailue" },
local: [ { name:"New Tai Lue spreadsheet", url:"https://docs.google.com/spreadsheets/d/1tAATcuoo9y1H-BbqiZ9VRT8KWzQmQP2JVKEECN0Wlz4/edit#gid=0"},
          ],
charts: [ "New Tai Lue" ],
layout: [ ],
usedfor:"Lü [khb]",
},


hmng:{ script:"Pahawh Hmong", code: "Hmng", name:"", type:"inverted abugida",
dates:"1959 – today", start:"1959", end:"", current_usage:"",
status:"A script used alongside Latin to write several Hmong dialects, in Laos, Thailand, Australia, and the United States.",
origin:"Southeast Asia",
info:{ wikipedia:"Pahawh Hmong", omniglot:"pahawhhmong" },
local: [ ],
charts: [ "Pahawh Hmong" ],
layout: [ ],
usedfor:"Hmong Daw [mww], Hmong Njua [hnj], Hmong [hmn], Large Flowery Miao [hmd]",
},


pauc:{ script:"Pau Cin Hau", code: "Pauc", name:"", type:"alphabet",
dates:"1902 – today", start:"1902", end:"", current_usage:"liturgical",
status:"Liturgical script created to convey the teachings of Pau Cin Hau, who founded the Laipian tradition. Its use declined with that of the Laipian religion.",
origin:"Southeast Asia",
info:{ wikipedia:"Pau Cin Hau", omniglot:"" },
local: [ ],
charts: [ "Pau Cin Hau" ],
layout: [ ],
usedfor:"Tedim Chin [ctd]",
},


tale:{ script:"Tai Le", code: "Tale", name:"", type:"abugida",
dates:"1954 – today", start:"1954", end:"", current_usage:"",
status:"Used mainly for the Tai Nüa language, which has around 700,000 speakers.",
origin:"Southeast Asia",
info:{ wikipedia:"Tai_Le_alphabet", omniglot:"tainua" },
local: [ { name:"Tai Le spreadsheet", url:"https://docs.google.com/spreadsheets/d/16Ziej_ZPHxTOaP2PJTL3cMHXXhTUIjDIc2au4z7N6lE/edit?usp=sharing"},
          ],
charts: [ "Tai Le" ],
layout: [ ],
usedfor:"Blang [blr], Shan [shn], Tai Nüa [tdd]",
},


lana:{ script:"Tai Tham", code: "Lana", name:"Tai Tham (Lanna)", type:"abugida",
dates:"13thC – today", start:"1200", end:"", current_usage:"",
status:"Used principally to write Tai Khün, with relatively high literacy for around 100,000 speakers, and Northern Thai, with around 6,000,000 speakers but low literacy in the Tham script. Northern Thai is also written in the Thai script, and Lü is also written in New Tai Lue.",
origin:"Southeast Asia",
info:{ wikipedia:"Tai_Tham_alphabet", omniglot:"lanna" },
local: [ { name:"Tai Tham spreadsheet", url:"https://docs.google.com/spreadsheets/d/1BukTNIC7TdPAjMEjEQRmSeTP_atjkA3x62f8nTdOfPE/edit#gid=0"},
          ],
charts: [ "Tai Tham" ],
layout: [ ],
usedfor:"Khün [kkh], Lü [khb], Northern Thai [nod], Tai Ya [cuu]"
},


tavt:{ script:"Tai Viet", code: "Tavt", name:"", type:"abugida",
dates:"16thC – today", start:"1500", end:"", current_usage:"",
status:"Used principally to write Tai Dam, Tai Dón, and Tai Song, with around 1,300,000 speakers in total.",
origin:"Southeast Asia",
info:{ wikipedia:"Tai Viet_script", omniglot:"taidam" },
local: [ { name:"Tai Viet spreadsheet", url:"https://docs.google.com/spreadsheets/d/1_n0S4ZE27lrZ9cAm_Egem80-dv-CGZhLhUrgyw3nUlU/edit#gid=0"},
          ],
charts: [ "Tai Viet" ],
layout: [ ],
usedfor:"Tai Daeng [tyr], Tai Dam [blt], Tai Dón [twh], Tày Tac [tyt], Thai Song [soa]"
},


thai:{ script:"Thai", code: "Thai", name:"", type:"abugida",
dates:"1283 – today", start:"1283", end:"", current_usage:"",
status:"The script used to write the Thai language, with around 60,000,000 speakers, plus almost 40 other languages.",
origin:"Southeast Asia",
info:{ wikipedia:"Thai_alphabet", omniglot:"thai" },
local: [ { name:"Thai spreadsheet", url:"https://docs.google.com/spreadsheets/d/1vQDoMAo_gTq9c50P_YshbWVH0zeMIqWWTIEdRNWl-Ow/edit#gid=0"},
          ],
charts: [ "Thai" ],
layout: [ { name:"Thai line breaking in Firefox", url:"https://r12a.github.io/blog/200707.html#20070717"},
          ],
usedfor:"Akha [ahk], Bisu [bzi], Blang [blr], Chong [cog], Bru, Eastern [bru], Lawa, Eastern [lwl], Hmong Daw [mww], Hmong Njua [hnj], Mien, Iu [ium], Kataang [kgd], Kensiu [kns], Khmu [kjg], Khuen [khf], Kuy [kdt], Laomian [lwm], Mal [mlf], Mlabri [mra], Moken [mwt], Moklen [mkm], Mpi [mpz], Thai, Northeastern [tts], Khmer, Northern [kxm], Thai, Northern [nod], Nyahkur [cbn], Pali [pli], Malay, Pattani [mfa], Phai [prt], Karen, Phrae Pwo [kjt], Karen, Pwo Eastern [kjp], Karen, Pwo Northern [pww], Shan [shn], Sô [sss], Thai, Southern [sou], Thai Song [soa], Thai [tha], Urak Lawoi' [urk], Bru, Western [brv], Bru, Western [brv], Lawa, Western [lcp]",
},


bali:{ script:"Balinese", code: "Bali", name:"", type:"abugida",
dates:"11thC – today", start:"1000", end:"", current_usage:"uptake",
status:"Significant prevalence in many of the island's traditional ceremonies and strongly associated with the Hindu religion. Mainly used today for copying lontar or palm leaf manuscripts containing religious texts, however traditional literature is published on a limited scale. Used for public signage on roads, at entrances to villages, and on government buildings, and read by community reading groups called Sekaha Pesantian, commonly in song form.",
origin:"Indonesia & Oceania",
info:{ wikipedia:"Balinese_script", omniglot:"balinese" },
local: [ { name:"Balinese spreadsheet", url:"https://docs.google.com/spreadsheets/d/1vQDoMAo_gTq9c50P_YshbWVH0zeMIqWWTIEdRNWl-Ow/edit#gid=0"},
          ],
charts: [ "Balinese" ],
layout: [ ],
usedfor:"Bali [ban], Kawi [kaw], Sasak [sas]",
},


batk:{ script:"Batak", code: "Batk", name:"", type:"abugida",
dates:"14thC – today", start:"1300", end:"", current_usage:"uptake",
status:"Taught in schools mainly for cultural purposes, and used on some signs for shops and government offices.",
origin:"Indonesia & Oceania",
info:{ wikipedia:"Batak_alphabet", omniglot:"batak" },
local: [ ],
charts: [ "Batak" ],
layout: [ ],
usedfor:"Batak Angkola [akb], Batak Dairi [btd], Batak Karo [btx], Batak Mandailing [btm], Batak Simalungun [bts], Batak Toba [bbc]",
},


bugi:{ script:"Buginese", code: "Bugi", name:"", type:"abugida, defective",
dates:"14thC – today", start:"1300", end:"", current_usage:"",
status:"Used for a number of languages in Sulawesi, with speakers numbering around 2,300,000.",
origin:"Indonesia & Oceania",
info:{ wikipedia:"Buginese_script", omniglot:"lontara" },
local: [ { name:"Buginese spreadsheet", url:"https://docs.google.com/spreadsheets/d/1ePNmpZfL3PYtQFgk8IZR_jwF4G4nxIspvLr95oEAFqU/edit#gid=0"},
          ],
charts: [ "Buginese" ],
layout: [ ],
usedfor:"Bugis [bug], Makasar [mak], Mamuju [mqx], Mandar [mdr], Wotu [wtw]",
},


buhd:{ script:"Buhid", code: "Buhd", name:"", type:"abugida",
dates:"18thC – today", start:"1700", end:"", current_usage:"uptake, community",
status:"Used to write the Buhid language, which has about 8,000 speakers, in the Mindoro region of the Philippines. The primary script for the language is Latin.",
origin:"Indonesia & Oceania",
info:{ wikipedia:"Buhid_alphabet", omniglot:"buhid" },
local: [ ],
charts: [ "Buhid" ],
layout: [ ],
usedfor:"Buhid [bku]",
},


hano:{ script:"Hanunoo", code: "Hano", name:"Hanunoo (Hanunóo)", type:"abugida, defective, vertical-bt/horizontal",
dates:"18thC – today", start:"1700", end:"", current_usage:"community",
status:"Used to write the Hanunoo language, which has around 25,000 speakers, and which unusually hasn't resorted to the Latin script. Often written on bamboo.",
origin:"Indonesia & Oceania",
info:{ wikipedia:"Hanun%C3%B3'o_alphabet", omniglot:"hanunoo" },
local: [ ],
charts: [ "Hanunoo" ],
layout: [ ],
usedfor:"Hanunoo [hnn]",
},


java:{ script:"Javanese", code: "Java", name:"", type:"abugida",
dates:"17thC – today", start:"1600", end:"", current_usage:"endangered",
status:"Currently, no newspapers or magazines are being printed in the script, although it is still taught in most elementary schools and some junior high schools in Javanese speaking areas.",
origin:"Indonesia & Oceania",
info:{ wikipedia:"Javanese_alphabet", omniglot:"javanese" },
local: [ { name:"Javanese spreadsheet", url:"https://docs.google.com/spreadsheets/d/1dkVkKt0Fxm3CDOyT90KLzfPsZ4XuchtL71iUyuG6uF0/edit#gid=0"},
          ],
charts: [ "Javanese" ],
layout: [ ],
usedfor:"Bali [ban], Javanese [jv], Osing [osi], Sunda [sun], Tengger [tes]",
},


rjng:{ script:"Rejang", code: "Rjng", name:"Rejang (Redjang, Kaganga)", type:"abugida",
dates:"18thC – today", start:"1700", end:"", current_usage:"community",
status:"Used by the approximately 200,000 speakers of Rejang dialects, who have 50% literacy. The traditional corpus consists chiefly of ritual texts, medical incantations, and poetry.",
origin:"Indonesia & Oceania",
info:{ wikipedia:"Rejang_alphabet", omniglot:"redjang" },
local: [ ],
charts: [ "Rejang" ],
layout: [ ],
usedfor:"Kerinci [kvr], Lampung Api [ljp], Lampung Nyo [abl], Rejang [rej]"
},


sund:{ script:"Sundanese", code: "Sund", name:"", type:"abugida",
dates:"14thC – today", start:"1300", end:"", current_usage:"",
status:"As of 1996, the official script for the Sundanese language, which has around 25,000,000 speakers on the island of Java. Sundanese is also written in the Latin script. It is currently taught in schools and used for public signage.",
origin:"Indonesia & Oceania",
info:{ wikipedia:"Sundanese_alphabet", omniglot:"http://www.omniglot.com/writing/sundanese.php" },
local: [ { name:"Sundanese spreadsheet", url:"https://docs.google.com/spreadsheets/d/1XttEh64YT4c-Js72ljJ2tEuLjyh3Po-VQetVFUboObg/edit#gid=0"},
          ],
charts: [ "Sundanese", "Sundanese Supplement" ],
layout: [ ],
usedfor:"Sunda [sun]",
},


tglg:{ script:"Tagalog", code: "Tglg", name:"Tagalog (Baybayin, Alibata)",
dates:"15thC – 18thC", start:"1500", end:"1800", current_usage:"",
status:"",
origin:"Indonesia & Oceania",
info:{ wikipedia:"Tagalog_alphabet", omniglot:"tagalog" },
local: [ ],
charts: [ "Tagalog" ],
layout: [ ],
},


tagb:{ script:"Tagbanwa", code: "Tagb", name:"", type:"abugida, defective",
dates:"18thC – today", start:"1700", end:"", current_usage:"uptake, community",
status:"Used for the Tagbanwa language, which has around 8,000 speakers, in the Palawan region of the Philippines. Younger generations prefer to use Tagalog, so the script is in decline.",
origin:"Indonesia & Oceania",
info:{ wikipedia:"Tagbanwa_script", omniglot:"tagbanwa" },
local: [ ],
charts: [ "Tagbanwa" ],
layout: [ ],
usedfor:"Calamian Tagbanwa [tbk], Tagbanwa [tbw]"
},


bopo:{ script:"Bopomofo", code: "Bopo", name:"", type:"syllabary",
dates:"1911 – today", start:"1911", end:"", current_usage:"",
status:"Used by books, newspapers and journals in Taiwan, to annotate Chinese Han characters or spell out Taiwanese words for which no character exists. Primary script for writing some of Taiwan's minority languages including Atayal, Taroko, Paiwan and Yami.",
origin:"East Asia",
info:{ wikipedia:"Bopomofo", omniglot:"zhuyin" },
local: [ ],
charts: [ "Bopomofo", "Bopomofo Extended" ],
layout: [ ],
usedfor:"Chinese [zho], Eastern Qiandong Miao [hmq], Ge [hmj], Hmong [hmn], Min Nan Chinese [nan]",
},


hani:{ script:"Han", code: "Hani", name:"Han (Hanzi, Kanji, Hanja)", type:"logo-syllabary",
dates:"1stC – today", start:"100", end:"", current_usage:"",
status:"Used for Chinese, and a number of related languages.",
origin:"East Asia",
info:{ wikipedia:"Chinese_characters", omniglot:"" },
local: [ { name:"Simplified vs Traditional", url:"http://r12a.github.io/scripts/chinese/"},
          ],
charts: [ "CJK Unified Ideographs", "CJK Unified Ideographs Extension A", "CJK Unified Ideographs Extension B", "CJK Unified Ideographs Extension C", "CJK Unified Ideographs Extension D", "CJK Unified Ideographs Extension E", "CJK Unified Ideographs Extension F", "CJK Compatibility Ideographs", "CJK Compatibility Ideographs Supplement", "KangXi Radicals", "CJK Radicals Supplement", "CJK Strokes", "Ideographic Description Characters", "CJK Symbols and Punctuation", "Enclosed CJK Letters and Months", "Kanbun" ],
layout: [ { name:"Chinese Layout Requirements", url:"http://w3c.github.io/clreq/"},
          ],
usedfor:"Bouyei [pcc], Bai, Central [bca], Zhuang, Central Hongshuihe [zch], Zhuang, Dai [zhd], Zhuang, Eastern Hongshuihe [zeh], Zhuang, Guibei [zgb], Zhuang, Guibian [zgn], Honi [how], Mien, Iu [ium], Zhuang, Lianshan [zln], Zhuang, Liujiang [zlj], Zhuang, Liuqian [zlq], Zhuang, Minz [zgm], Zhuang, Nong [zhn], Puyuma [pyu], Zhuang, Qiubei [zqe], Bai, Southern [bfs], Dong, Southern [kmc], Sui [swi], Vietnamese [vie], Zhuang, Yang [zyg], Zhuang, Yongbei [zyb], Zhuang, Yongnan [zyn], Zhuang, Youjiang [zyj], Zhuang [zha], Zhuang, Zuojiang [zzj], <b>Traditional:</b> Atayal [tay], Chinese [zho], Chinese, Gan [gan], Chinese, Hakka [hak], Chinese, Huizhou [czh], Chinese, Jinyu [cjy], Chinese, Literary [lzh], Chinese, Mandarin [cmn], Maonan [mmd], Chinese, Min Dong [cdo], Chinese, Wu [wuu], Chinese, Xiang [hsn], Chinese, Yue [yue], <b>Simplified:</b> Atayal [tay], Chinese [zho], Daur [dta], Chinese, Gan [gan], Chinese, Hakka [hak], Chinese, Huizhou [czh], Chinese, Jinyu [cjy], Chinese, Literary [lzh], Chinese, Mandarin [cmn], Maonan [mmd], Chinese, Min Dong [cdo], Chinese, Min Nan [nan], Chinese, Wu [wuu], Chinese, Xiang [hsn], Chinese, Yue [yue], Zhuang [zha]",
},


hang:{ script:"Hangul", code: "Hang", name:"Hangul (Hangŭl, Hangeul)", type:"featural syllabary",
dates:"1444 – today", start:"1444", end:"", current_usage:"",
status:"Used for the Korean language.",
origin:"East Asia",
info:{ wikipedia:"Hangul", omniglot:"korean" },
local: [ ],
charts: [ "Hangul Syllables", "Hangul Jamo", "Hangul Compatibility Jamo", "Hangul Jamo Extended-A", "Hangul Jamo Extended-B" ],
layout: [ { name:"Hangul Layout Requirements", url:"http://w3c.github.io/klreq/"},
          ],
usedfor:"Cia-cia [cia], Jejueo [jje], Korean [ko]",
},


jpan:{ script:"Kana", code: "Jpan", name:"Japanese", type:"logo-syllabary + 2 syllabic scripts",
dates:"8thC – today", start:"700", end:"", current_usage:"",
status:"Used to write the Japanese language. The Kanji, Hiragana, Katakana, and Latin characters are all mixed together in a sentence.",
origin:"East Asia",
info:{ wikipedia:"Japanese_writing_system", omniglot:"japanese" },
local: [ { name:"Jukugo ruby (blog)", url:"https://r12a.github.io/blog/201002.html#20100924"},
          ],
charts: [ "Hiragana", "Katakana", "Katakana Phonetic Extensions", "Kana Supplement", "Kana Extended-A" ],
layout: [ { name:"Japanese Layout Requirements", url:"http://w3c.github.io/jlreq/"},
          ],
usedfor:"Japanese [ja]",
},


lisu:{ script:"Lisu", code: "Lisu", name:"Lisu (Fraser)", type:"alphabet",
dates:"1915 – today", start:"1915", end:"", current_usage:"",
status:"Used to write the Lisu language, which has 980,000 speakers in China, Myanmar, Thailand, and India. About 360,000 are thought to be literate in the script.",
origin:"East Asia",
info:{ wikipedia:"Fraser_alphabet", omniglot:"fraser" },
local: [ ],
charts: [ "Lisu" ],
layout: [ ],
usedfor:"Lakkia [lbc], Lipo [lpo], Lisu [lis], Naxi [nxq], Zaiwa [atb]",
},


plrd:{ script:"Miao", code: "Plrd", name:"Miao (Pollard)", type:"abugida",
dates:"1904 – today", start:"1904", end:"", current_usage:"",
status:"Used to write Miao dialects, as well as Yi and Lisu. There are 2 variants of the script.",
origin:"East Asia",
info:{ wikipedia:"Pollard_script", omniglot:"pollardmiao" },
local: [ ],
charts: [ "Miao" ],
layout: [ ],
usedfor:"Aluo [yna], Gepo [ygp], Hmong Daw [mww], Hmong Njua [hnj], Kaduo [ktp], Large Flowery Miao [hmd], Lipo [lpo], Sanie [ysy], Sinicized Miao [hmz], Small Flowery Miao [sfm], Wuding-Luquan Yi [ywq]",
},


nshu:{ script:"Nushu", code: "Nshu", name:"Nüshu", type:"logo-syllabary",
dates:"19thC – today", start:"1800", end:"", current_usage:"endangered",
status:"By the late twentieth century, very few women fluent in the script were still alive. National and  international attention around  Nüshu led to active efforts to study and preserve the script.",
origin:"East Asia",
info:{ wikipedia:"Nüshu_script", omniglot:"" },
local: [ ],
charts: [ "Nushu" ],
layout: [ ],
usedfor:"Chinese [zhx], Xiang Chinese [hsn], Yang Zhuang [zyg]",
},


yiii:{ script:"Yi", code: "Yiii", name:"", type:"logo-syllabary",
dates:"7thC – today", start:"600", end:"", current_usage:"",
status:"Used for writing the Nuoso language, with about 2,000,000 speakers, and other languages of the Yi tribes in China.",
origin:"East Asia",
info:{ wikipedia:"Yi_script", omniglot:"yi" },
local: [ ],
charts: [ "Yi Syllables", "Yi Radicals" ],
layout: [ ],
usedfor:"Eastern Nisu [nos], Mantsi [nty], Nuosu [iii], Samatao [ysd], Samei [smh], Sani [ysn], Southern Nisu [nsd], Southwestern Nisu [nsv], Wuding-Luquan Yi [ywq], Wua Nasu [yig]",
},


cher:{ script:"Cherokee", code: "Cher", name:"", type:"syllabary",
dates:"1821 – today", start:"1821", end:"", current_usage:"community",
status:"Among the approximately 1,500 Cherokees who speak the language, the script is widely used for writing letters, recipes, folktales, diaries, and personal record-keeping, as well as some legal, governmental and religious documents and public signage. Knowledge of the script is considered a prerequisite for full Cherokee citizenship.",
origin:"Americas",
info:{ wikipedia:"Cherokee_script", omniglot:"cherokee" },
local: [ ],
charts: [ "Cherokee", "Cherokee Supplement" ],
layout: [ ],
usedfor:"Cherokee [chr]",
},


dsrt:{ script:"Deseret", code: "Dsrt", name:"",
dates:"1850 – 1869", start:"1850", end:"1869", current_usage:"",
status:"",
origin:"Americas",
info:{ wikipedia:"Deseret_alphabet", omniglot:"deseret" },
local: [ ],
charts: [ "Deseret" ],
layout: [ ],
},


cans:{ script:"UCAS", code: "Cans", name:"Unified Canadian Aboriginal Syllabics", type:"syllabary",
dates:"1830s – today", start:"1830", end:"", current_usage:"",
status:"Used by several aboriginal groups throughout Canada, including Algonquian, Inuktitut, and Athapascan  language families, though usage varies across languages.",
origin:"Americas",
info:{ wikipedia:"Canadian_Aboriginal_syllabics", omniglot:"ucas" },
local: [ ],
charts: [ "Unified Canadian Aboriginal Syllabics", "Unified Canadian Aboriginal Syllabics Extended" ],
layout: [ ],
usedfor:"Beaver [bea], Blackfoot [bla], Carrier [crx], Carrier, Southern [caf], Chippewa [ciw], Cree, Plains [crk], Cree, Southern East [crj], Cree, Swampy [csw], Cree, Woods [cwd], Cree, Moose [crm], Cree, Northern East [crl], Dene [chp], Inuktitut, Eastern Canadian [ike], Inuinnaqtun [ikt], Naskapi [nsk], Ojibwa, Eastern [ojg], Ojibwa, Northwestern [ojb], Ojibwa, Western [ojw], Oji-Cree [ojs], Sekani [sek], Slavey, North [scs], Slavey, South [xsl]",
},


osge:{ script:"Osage", code: "Osge", name:"", type:"alphabet",
dates:"2006 – today", start:"2006", end:"", current_usage:"community",
status:"A new orthography promoted by the Osage Nation since 2006. Work is under way to educate people in the script, but the number of users is still low, in an ethnic population of 11,000.",
origin:"Americas",
info:{ wikipedia:"Osage_alphabet", omniglot:"http://www.omniglot.com/writing/osage.php" },
local: [ ],
charts: [ "Osage" ],
layout: [ ],
usedfor:"Osage [osa]",
},


newa:{ script:"Newa", code: "Newa", name:"Newa (Newar, Newari, Nepāla lipi)", type:"abugida",
dates:"10thC – today", start:"900", end:"", current_usage:"uptake",
status:"Largely eclipsed by Devanagari nowadays, this script is used especially for writing the Newar language, but also others. Currently little used, but receiving interest for revival.",
origin:"South Asia",
info:{ wikipedia:"Prachalit_Nepal_alphabet", omniglot:"newa" },
local: [ ],
charts: [ "Newa" ],
layout: [ ],
usedfor:"Bengali [bn], Hindi [hi], Maithili [mai], Newar [new], Sanskrit [sa]",
},


bhks:{ script:"Bhaiksuki", code: "Bhks", name:"",
dates:"11thC – 12thC", start:"1000", end:"1200", current_usage:"",
status:"",
origin:"South Asia",
info:{ wikipedia:"Bhaiksuki_alphabet", omniglot:"" },
local: [ ],
charts: [ "Bhaiksuki" ],
layout: [ ],
},


marc:{ script:"Marchen", code: "Marc", name:"",
dates:"16thC – 20thC", start:"1500", end:"2000", current_usage:"",
status:"",
origin:"Central Asia",
info:{ wikipedia:"Zhang-Zhung_language#Scripts", omniglot:"" },
local: [ ],
charts: [ "Marchen" ],
layout: [ ],
},


tang:{ script:"Tangut", code: "Tang", name:"",
dates:"1036 – 16thC", start:"1036", end:"1600", current_usage:"",
status:"",
origin:"East Asia",
info:{ wikipedia:"Tangut_script", omniglot:"tangut" },
local: [ ],
charts: [ "Tangut" ],
layout: [ ],
},


medf:{ script:"Medefaidrin", code: "Medf", name:"", type:"notation, with case",
dates:"1930s – today", start:"1930", end:"", current_usage:"liturgical",
status:"Only used by the Oberi Okaime church, in the Cross-River State of Nigeria, for Sunday school lessons and prayers or meditation.",
origin:"Africa",
info:{ wikipedia:"Medefaidrin", omniglot:"" },
local: [ ],
charts: [ "Medefaidrin" ],
layout: [ ],
usedfor: "Medefaidrin [dmf]",
},


sogo:{ script:"Old Sogdian", code: "Sogo", name:"",
dates:"3rdC – 6thC", start:"200", end:"600", current_usage:"",
status:"",
origin:"Central Asia",
info:{ wikipedia:"Sogdian_alphabet", omniglot:"sogdian" },
local: [ ],
charts: [ "Old Sogdian" ],
layout: [ ],
},


sogd:{ script:"Sogdian", code: "Sogd", name:"",
dates:"7thC – 14thC", start:"600", end:"1400", current_usage:"",
status:"",
origin:"Central Asia",
info:{ wikipedia:"Sogdian_alphabet", omniglot:"sogdian" },
local: [ ],
charts: [ "Sogdian" ],
layout: [ ],
},


dogr:{ script:"Dogra", code: "Dogr", name:"",
dates:"15thC – 20thC", start:"1400", end:"2000", current_usage:"",
status:"",
origin:"South Asia",
info:{ wikipedia:"Dogri_language", omniglot:"" },
local: [ ],
charts: [ "Dogra" ],
layout: [ ],
},


rohg:{ script:"Hanifi Rohingya", code: "Rohg", name:"", type:"abugida, RTL",
dates:"1980s – today", start:"1900", end:"", current_usage:"uptake",
status:"Used for the publication of books and newspapers, both hand-written and printed.",
origin:"Southeast Asia",
info:{ wikipedia:"Hanifi_Rohingya_script", omniglot:"rohingya.htm#hanifi" },
local: [ ],
charts: [ "Hanifi Rohingya" ],
layout: [ ],
usedfor:"Rohingya [rhg]",
},


gong:{ script:"Gunjala Gondi", code: "Gong", name:"", type:"abugida",
dates:"18thC", start:"1700", end:"", current_usage:"uptake",
status:"Interest growing in revitalisation after discovery of historical documents in Gunjala village in 2010. Some publications, and teaching materials used in some villages with high Gondi population.",
origin:"South Asia",
info:{ wikipedia:"Gunjala_Gondi_Lipi", omniglot:"" },
local: [ ],
charts: [ "Gunjala Gondi" ],
layout: [ ],
usedfor:"Adilabad Gondi [wsg]",
},


maka:{ script:"Makasar", code: "Maka", name:"",
dates:"18thC – 20thC", start:"1700", end:"2000", current_usage:"",
status:"",
origin:"Indonesia & Oceania",
info:{ wikipedia:"Makasar_(Unicode_block)", omniglot:"" },
local: [ { name:"Makasar spreadsheet", url:"https://docs.google.com/spreadsheets/d/1MsapkSQaa7NWiAWMAhvX6xe8ZCMVhkbJ41NCi-D9aKA/edit#gid=0"},
          ],
charts: [ "Makasar" ],
layout: [ ],
},


nand:{ script:"Nandinagari", code: "Nand", name:"",
dates:"8thC – 18thC", start:"800", end:"1800", current_usage:"",
status:"",
origin:"South Asia",
info:{ wikipedia:"Nandinagari", omniglot:"" },
local: [ ],
charts: [ "Nandinagari" ],
layout: [ ],
},


elym:{ script:"Elymaic", code: "Elym", name:"",
dates:"BCE 5thC – BCE 3rdC", start:"-500", end:"-300", current_usage:"",
status:"",
origin:"West Asia",
info:{ wikipedia:"Elymaic", omniglot:"" },
local: [ ],
charts: [ "Elymaic" ],
layout: [ ],
},


hmnp:{ script:"Nyiakeng Puachue Hmong", code: "Hmnp", name:"", type:"alphabet",
dates:"1980s – today", start:"1980", end:"", current_usage:"liturgical",
status:"Used by members of the United Christians Liberty Evangelical church in America for more than 25 years, in printed material and videos.",
origin:"Southeast Asia",
info:{ wikipedia:"https://en.wikipedia.org/wiki/Hmong_writing#Nyiakeng_Puachue_Hmong", omniglot:"" },
local: [ ],
charts: [ "Nyiakeng_Puachue_Hmong" ],
layout: [ ],
usedfor:"White Hmong, Green Hmong [hnj]",
},


wcho:{ script:"Wancho", code: "Wcho", name:"", type:"alphabet",
dates:"2001 – today", start:"2001", end:"", current_usage:"community",
status:"Used for Wancho,  a  Sino-Tibetan language with around 50,000 speakers. Taught in some schools, and one book known.",
origin:"West Asia",
info:{ wikipedia:"Wancho_language", omniglot:"" },
local: [ ],
charts: [ "Wancho" ],
layout: [ ],
usedfor:"Wanch Naga [nnp]",
},


chrs:{ script:"Chorasmian", code: "Chrs", name:"",
dates:"2ndC – 12thC", start:"100", end:"1200", current_usage:"",
status:"",
origin:"West Asia",
info:{ wikipedia:"Khwarezmian_language#Writing_system", omniglot:"" },
local: [ ],
charts: [ "Chorasmian" ],
layout: [ ],
},


yezi:{ script:"Yezidi", code: "Yezi", name:"", type:"alphabet, RTL",
dates:"? – today", start:"?", end:"", current_usage:"liturgical",
status:"In revival by the Spiritual Council of Yezidis in Georgia since 2013, mainly for liturgical use in Kurmanji.",
origin:"West Asia",
info:{ wikipedia:"Kurdish_alphabets#Yezidi", omniglot:"" },
local: [ ],
charts: [ "Yezidi" ],
layout: [ ],
usedfor: "Kurdish [kur]",
},


diak:{ script:"Dives Akuru", code: "Diak", name:"",
dates:"12thC — 18thC", start:"1100", end:"1800", current_usage:"",
status:"",
origin:"South Asia",
info:{ wikipedia:"Dhives_Akuru", omniglot:"dhivesakuru" },
local: [ ],
charts: [ "Dives Akuru" ],
layout: [ ],
},


kits:{ script:"Khitan Small Script", code: "Kits", name:"",
dates:"925 – 1191", start:"925", end:"1191", current_usage:"",
status:"",
origin:"Central Asia",
info:{ wikipedia:"Khitan_small_script", omniglot:"khitan" },
local: [ ],
charts: [ "Khitan Small Script" ],
layout: [ ],
},







// NOTES

xxxx:{ script:"Ahom", code:"Ahom", name:"", 
dates:"15thC – today", start:"1400", end:"", current_usage:"endangered", 
status: "describe_current_status_for_living_scripts",
origin:"South Asia",
info:{ wikipedia:"Ahom_alphabet", omniglot:"ahom" }, 
local: [	],
charts:[ "Arabic", "Arabic Supplement", "Arabic Extended-A" ],
layout:[	]
},


/*

ahom:{ script:"Ahom", code:"Ahom", name:"Ahom (other names)"
SCRIPT: for main title & menu & some links, it is the plain script name
CODE: initial cap, used for scriptsource link
NAME: use this also if there are alternative names

dates:"15thC – today", start:"1400", end:"", current_usage:""
DATES: mostly from http://www.worldswritingsystems.org/
CURRENT_USAGE: 
	empty if the script is in active use by a large number of people
	empty if the script isn't in use today
	otherwise, use one or more of: community, uptake, endangered, liturgical
		community: the target user community is very small
		uptake: low adoption of the script
		endangered: low adoption to the point of danger
		liturgical: used for liturgical purposes
END: empty for scripts that are not historic
	12thC would be 1100

status:""
STATUS: describe the current status for living scripts, in revival? scheduled language? ...

origin:"South Asia",
ORIGIN: See the headings in the script links page *** not sure how this is used

info:{ wikipedia:"Ahom_alphabet", omniglot:"ahom" },
NOTE link end text, unicode & scriptsource info is obtained elsewhere, this is just for wikipedia & omniglot
NOTE occasionally, if it doesn't use a standard url, omniglot may contain a full url

local: 	[ { name:"Introduction to Indic Scripts", url:"indic-overview" }
		],
LOCAL: other useful descriptions on r12a site

charts:[ "Ahom" ],
CHARTS: list of Unicode block names

layout:[	]
LAYOUT: List of links to W3C language enablement docs
},


*/

}


// OBSOLETE STUFF FOLLOWS

// OBSOLETE ??
var scriptNotesSet= new Set(['armn','arab', 'bali', 'beng','bugi', 'cans', 'cher', 'cyrl', 'deva', 'ethi', 'geor', 'grek', 'gujr', 'guru', 'hani', 'hang', 'hebr', 'java', 'jpan', 'khmr', 'laoo', 'lana', 'lisu', 'mand', 'mymr', 'nkoo', 'osge', 'sinh', 'sund', 'syrc', 'taml', 'tavt', 'telu', 'thaa', 'thai', 'tibt', 'tfng'])

// OBSOLETE
var fontListerSet= new Set(['adlm', 'armn', 'arab', 'bali', 'bass', 'beng','bugi', 'buhd', 'cans', 'chakm', 'cher', 'copt', 'cyrl', 'deva', 'ethi', 'geor', 'grek', 'gujr', 'gong', 'guru', 'hani', 'hang', 'hebr', 'java', 'jpan', 'khmr', 'laoo', 'lana', 'lisu', 'mand', 'mymr', 'nkoo', 'osge', 'sinh', 'sund', 'syrc', 'taml', 'tavt', 'telu', 'thaa', 'thai', 'tibt', 'tfng'])

// OBSOLETE ??
var charNotesSet= new Set(['armn','arab', 'bali', 'beng','bugi', 'cans', 'cher', 'cyrl', 'deva', 'ethi', 'geor', 'grek', 'gujr', 'guru', 'hani', 'hang', 'hebr', 'java', 'jpan', 'khmr','laoo', 'lana', 'maka', 'mand', 'mlym', 'mong', 'mymr', 'nkoo', 'osge', 'sinh', 'sund', 'syrc', 'tale', 'talu', 'tavt', 'taml', 'telu', 'thaa', 'thai', 'tibt', 'tfng', 'vaii'])


// OBSOLETE !
var charNotesListX = {
    'adlm':'adlam/block',
    'armn':'armenian/block',
    'arab':'arabic/block', 
    'bali':'balinese/block', 
    'bass':'bassavah/block', 
    'beng':'bengali/block',
    'bugi':'buginese/block',
    'cans':'cans/block',
    'cher':'cherokee/block',
    'cyrl':'cyrillic/block',
    'deva':'devanagari/block',
    'ethi':'ethiopic/block',
    'geor':'georgian/block',
    'grek':'greek/block',
    'gujr':'gujarati/block',
    'guru':'gurmukhi/block',
    'hebr':'hebrew/block',
    'java':'javanese/block',
    'khmr':'khmer/block',
    'lana':'taitham/block',
    'laoo':'lao/block',
    'lisu':'lisu/block',
    'latn':'latin/block',
    'maka':'makasar/block',
    'mand':'mandaic/block',
    'mlym':'malayalam/block',
    'mong':'mongolian/block',
    'mymr':'myanmar/block',
    'nkoo':'nko/block',
    'osge':'osage/block',
    'runr':'runic/block',
    'sinh':'sinhala/block',
    'sund':'sundanese/block',
    'syrc':'syriac/block',
    'tale':'taile/block',
    'talu':'newtailue/block',
    'taml':'tamil/block',
    'telu':'telugu/block',
    'tavt':'taiviet/block',
    'thaa':'thaana/block',
    'thai':'thai/block',
    'tibt':'tibetan/block',
    'tfng':'tifinagh/block',
    'vaii':'vai/block'
    }




// orthography comparison table (/scripts/featurelist/)  OBSOLETE !
var compChartSet= new Set(['adlm','arab','armn', 'bali', 'beng', 'bugi', 'cans', 'cher', 'cyrl', 'deva', 'ethi', 'grek', 'gujr', 'guru', 'hani', 'hang', 'hebr', 'java', 'jpan', 'knda', 'khmr', 'laoo', 'latn', 'mlym', 'mand', 'mong', 'mymr', 'nkoo', 'orya', 'sinh', 'sund', 'syrc', 'taml', 'telu', 'thaa', 'thai', 'tibt', 'tfng', 'cans'])




var scriptSummarySet = new Set(['arab','cyrl','deva','grek','hani','hang','hebr','jpan','thai','tibt'])

var googleFontSet= new Set(['arab','armn','avst','bali','bamum','batk','beng','brah','bugi','buhd','cans','cari','cham','cher','copt','xsux','cprt','dsrt','deva','egyp','ethi','geor','glag','goth','gujr','guru','hano','hebr','armi','inscriptional_pahlavi','phli','java','kait','knda','kali','khar','khmr','laoo','lepcha','limb','linb','lisu','lyci','lydin','mlym','mand','mtei','mong','mymr','nkoo','talu','ogam','olck','ital','xpeo','sarb','orhk','orya','osge', 'osma','phag','phnx','rjng','runi','samr','saur','shaw','sinh','sund','sylo','syrc','tglg','tagb','tale','lana','tavt','taml','telu','thaa','thai','tibt','tfng','ugar','vaii','yiii'])

var googleEASet= new Set([])

var gouFonts = { 'grek':'Greek', 'armn':'Armenian', 'hebr':'Hebrew', 'arab':'Arabic', 'syrc':'Syriac', 'thaa':'Thaana', 'nkoo':'NKo', 'deva':'Devanagari', 'beng':'Bengali', 'guru':'Gurmukhi', 'gujr':'Gujarati', 'orya':'Oriya', 'taml':'Tamil', 'telu':'Telugu', 'knda':'Kannada', 'mlym':'Malayalam', 'sinh':'Sinhala', 'thai':'Thai', 'laoo':'Lao', 'tibt':'Tibetan', 'mymr':'Myanmar', 'georgian':'Georgian', 'ethiopic':'Ethiopic', 'cherokee':'Cherokee', 'ucas':'Canadian', 'ogham':'Ogham', 'runr':'Runic', 'tagalog':'Tagalog', 'hanunoo':'Hanunoo', 'buhid':'Buhid', 'tagb':'Tagbanwa', 'khmr':'Khmer', 'mong':'Mongolian', 'limb':'Limbu', 'tale':'TaiLe', 'bugi':'Buginese', 'glag':'Glagolitic', 'copt':'Coptic', 'tfng':'Tifinagh', 'jpan':'Japanese', 'yiii':'Yi', 'sylo':'SylotiNagri', 'phag':'Phagspa', 'hang':'Korean', 'linb':'LinearBSyllabary', 'xphais':'Phaistos', 'ital':'OldItalic', 'goth':'Gothic', 'ugar':'Ugaritic', 'dsrt':'Deseret', 'shaw':'Shavian', 'osma':'Osmanya','lina':'Linear_A', 'cprt':'Cypriot', 'phnx':'Phoenician', 'khar':'Kharoshthi', 'ahom':'Ahom'
}


var OSDefaultFontsSet = new Set(['arab','armn','beng','cans','cher','deva','ethi','geor','gujr','guru','hebr','jpan','knda','khmr','hang','laoo','mlym','mong','mymr','talu','nkoo','orya','osma','phag','sinh','syrc','tale','taml','telu','thaa','thai','tibt','tfng','vaii','yiii'])

var typographyDocSet =  new Set(['arab','hani','ethi','deva','jpan','hang','tibt'])

var w3cTypographySet =  new Set(['arab','hani','ethi','hebr','deva','jpan','hang','latn','mong','thai','tibt'])

var w3cTypeSampleSet =  new Set(['arab','hani','cyrl','ethi','grek','hebr','jpan','hang','mong','deva','thai','tibt'])

var examplePhraseSet = new Set(['arab','armn','cans','cher','cyrl','deva','ethi','grek','guru','hani','hebr','latn','khmr','hang','mong','mymr','telu','tfng','thai','tibt'])
