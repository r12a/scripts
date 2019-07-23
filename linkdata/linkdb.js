var scriptNotesSet= new Set(['armn','arab', 'bali', 'beng','bugi', 'cher', 'cyrl', 'deva', 'ethi', 'geor', 'grek', 'gujr', 'guru', 'hani', 'hang', 'hebr', 'java', 'kana', 'khmr', 'laoo', 'lana', 'lisu', 'mand', 'mymr', 'nkoo', 'sinh', 'sund', 'syrc', 'taml', 'tavt', 'thaa', 'thai', 'tibt', 'tfng'])

var scriptNotes= {
    'arab':[['Arabic','arabic/'], 
			['Hausa (ajami)', 'arabic/hausa'],
			['Kashmiri', 'arabic/kashmiri'],
			['Urdu', 'arabic/urdu'], 
			['Uighur', 'arabic/uighur'], 
			], 
    'armn':[['Armenian','armenian/']],
    'bali':[['Balinese', 'balinese/']], 
    'beng':[['Bengali/Bangla', 'bengali/']],
    'bugi':[['Buginese', 'buginese/']],
    'cher':[['Cherokee', 'cherokee/']],
    'cyrl':[['Cyrillic/Russian', 'cyrillic/']],
    'deva':[['Devanagari/Hindi', 'devanagari/'], 
			['Kashmiri', 'devanagari/kashmiri']
			],
    'ethi':[['Ethiopic', 'ethiopic/']],
    'geor':[['Georgian', 'georgian/']],
    'grek':[['Greek', 'greek/']],
    'gujr':[['Gujarati', 'gujarati/']],
    'guru':[['Gurmukhi/Punjabi', 'gurmukhi/']],
    'hani':[['Han/Chinese', 'han/']],
    'hang':[['Hangul/Korean', 'hangul/']],
    'hebr':[['Hebrew', 'hebrew/']],
    'java':[['Javanese', 'javanese/']],
    'jpan':[['Japanese', 'kana/']],
    'khmr':[['Khmer', 'khmer/']],
    'laoo':[['Lao', 'lao/']],
    'lana':[['Tai Tham/Tai Khün', 'taitham/'], 
			['Northern Thai', 'taitham/northernthai']],
    'latn':[['Hausa (boko)', 'latin/hausa']],
    'lisu':[['Lisu', 'lisu/']],
    'mand':[['Mandaic', 'mandaic/']],
    'mlym':[['Malayalam', 'malayalam']],
    'mymr':[['Myanmar/Burmese', 'myanmar']],
    'nkoo':[["N’Ko", 'nko']],
    'sinh':[['Sinhala', 'sinhala/']],
    'sund':[['Sundanese', 'sundanese/']],
    'syrc':[['Syriac', 'syriac/']],
    'tale':[['Tai Le/Tai Nüa', 'taile/']],
    'talu':[['New Tai Lü', 'newtailue/']],
    'taml':[['Tamil', 'tamil/']],
    'tavt':[['Tai Viet/Tai Dam', 'taiviet/']],
    'thaa':[['Thaana/Dhivehi', 'thaana/']],
    'thai':[['Thai', 'thai/']],
    'tibt':[['Tibetan', 'tibetan/']],
    'tfng':[['(Neo-)Tifinagh/Tamazight', 'tifinagh/']],
    'vaii':[['Vai', 'vai/']],
    }

var charNotesSet= new Set(['armn','arab', 'bali', 'beng','bugi', 'cher', 'cyrl', 'deva', 'ethi', 'geor', 'grek', 'gujr', 'guru', 'hani', 'hang', 'hebr', 'java', 'kana', 'khmr','laoo', 'lana', 'maka', 'mand', 'mlym', 'mong', 'mymr', 'nkoo', 'sinh', 'sund', 'syrc', 'tale', 'talu', 'tavt', 'taml', 'thaa', 'thai', 'tibt', 'tfng', 'vaii'])

var charNotesList = {
    'armn':'armenian/block',
    'arab':'arabic/block', 
    'bali':'balinese/block', 
    'beng':'bengali/block',
    'bugi':'buginese/block',
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
    'runr':'runic/block',
    'sinh':'sinhala/block',
    'sund':'sundanese/block',
    'syrc':'syriac/block',
    'tale':'taile/block',
    'talu':'newtailue/block',
    'taml':'tamil/block',
    'tavt':'taiviet/block',
    'thaa':'thaana/block',
    'thai':'thai/block',
    'tibt':'tibetan/block',
    'tfng':'tifinagh/block',
    'vaii':'vai/block'
    }


var charNotesList = {
    'armn':['Armenian', 'armenian/block'],
    'arab':['Arabic', 'arabic/block'], 
    'bali':['Balinese', 'balinese/block'], 
    'beng':['Bengali', 'bengali/block'],
    'bugi':['Buginese', 'buginese/block'],
    'cher':['Cherokee', 'cherokee/block'],
	'currency':['Currency&nbsp;Symbols', 'currency/block'],
    'cyrl':['Cyrillic', 'cyrillic/block'],
    'deva':['Devanagari', 'devanagari/block'],
    'ethi':['Ethiopic', 'ethiopic/block'],
    'geor':['Georgian', 'georgian/block'],
    'grek':['Greek', 'greek/block'],
    'gujr':['Gujarati', 'gujarati/block'],
    'guru':['Gurmukhi', 'gurmukhi/block'],
    'hebr':['Hebrew', 'hebrew/block'],
    'java':['Javanese', 'javanese/block'],
    'khmr':['Khmer', 'khmer/block'],
    'laoo':['Lao', 'lao/block'],
    'lisu':['Lisu', 'lisu/block'],
    'latn':['Latin', 'latin/block'],
    'maka':['Makasar', 'makasar/block'],
    'mlym':['Malayalam', 'malayalam/block'],
    'mand':['Mandaic', 'mandaic/block'],
    'mong':['Mongolian', 'mongolian/block'],
    'mymr':['Myanmar', 'myanmar/block'],
    'talu':['New&nbsp;Tai&nbsp;Lue', 'newtailue/block'],
    'nkoo':['NKo', 'nko/block'],
	'punctuation':['Punctuation', 'punctuation/block'],
    'runr':['Runic', 'runic/block'],
    'sinh':['Sinhala', 'sinhala/block'],
    'sund':['Sundanese', 'sundanese/block'],
    'syrc':['Syriac', 'syriac/block'],
    'tale':['Tai&nbsp;Le', 'taile/block'],
    'lana':['Tai&nbsp;Tham', 'taitham/block'],
    'tavt':['Tai&nbsp;Viet', 'taiviet/block'],
    'taml':['Tamil', 'tamil/block'],
    'thaa':['Thaana', 'thaana/block'],
    'thai':['Thai', 'thai/block'],
    'tibt':['Tibetan', 'tibetan/block'],
    'tfng':['Tifinagh', 'tifinagh/block'],
    'vaii':['Vai', 'vai/block'],
    }


var compChartSet= new Set(['arab','armn', 'bali', 'beng', 'bugi', 'cher', 'cyrl', 'deva', 'ethi', 'grek', 'gujr', 'guru', 'hani', 'hang', 'hebr', 'java', 'kana', 'knda', 'khmr', 'laoo', 'latn', 'mlym', 'mand', 'mong', 'mymr', 'nkoo', 'orya', 'sinh', 'sund', 'syrc', 'taml', 'telu', 'thaa', 'thai', 'tibt', 'tfng', 'cans'])

var examplePhraseSet = new Set(['arab','armn','cans','cher','cyrl','deva','ethi','grek','guru','hani','hebr','latn','khmr','hang','mong','mymr','telu','tfng','thai','tibt'])

var scriptSummarySet = new Set(['arab','cyrl','deva','grek','hani','hang','hebr','kana','thai','tibt'])

var googleFontSet= new Set(['arab','armn','avst','bali','bamum','batk','beng','brah','bugi','buhd','cans','cari','cham','cher','copt','xsux','cprt','dsrt','deva','egyp','ethi','geor','glag','goth','gujr','guru','hano','hebr','armi','inscriptional_pahlavi','phli','java','kait','knda','kali','khar','khmr','laoo','lepcha','limb','linb','lisu','lyci','lydin','mlym','mand','mtei','mong','mymr','nkoo','talu','ogam','olck','ital','xpeo','sarb','orhk','orya','osge', 'osma','phag','phnx','rjng','runi','samr','saur','shaw','sinh','sund','sylo','syrc','tglg','tagb','tale','lana','tavt','taml','telu','thaa','thai','tibt','tfng','ugar','vaii','yiii'])

var googleEASet= new Set([])

var gouFonts = { 'grek':'Greek', 'armn':'Armenian', 'hebr':'Hebrew', 'arab':'Arabic', 'syrc':'Syriac', 'thaa':'Thaana', 'nkoo':'NKo', 'deva':'Devanagari', 'beng':'Bengali', 'guru':'Gurmukhi', 'gujr':'Gujarati', 'orya':'Oriya', 'taml':'Tamil', 'telu':'Telugu', 'knda':'Kannada', 'mlym':'Malayalam', 'sinh':'Sinhala', 'thai':'Thai', 'laoo':'Lao', 'tibt':'Tibetan', 'mymr':'Myanmar', 'georgian':'Georgian', 'ethiopic':'Ethiopic', 'cherokee':'Cherokee', 'ucas':'Canadian', 'ogham':'Ogham', 'runr':'Runic', 'tagalog':'Tagalog', 'hanunoo':'Hanunoo', 'buhid':'Buhid', 'tagb':'Tagbanwa', 'khmr':'Khmer', 'mong':'Mongolian', 'limb':'Limbu', 'tale':'TaiLe', 'bugi':'Buginese', 'glag':'Glagolitic', 'copt':'Coptic', 'tfng':'Tifinagh', 'kana':'Japanese', 'yiii':'Yi', 'sylo':'SylotiNagri', 'phag':'Phagspa', 'hang':'Korean', 'linb':'LinearBSyllabary', 'xphais':'Phaistos', 'ital':'OldItalic', 'goth':'Gothic', 'ugar':'Ugaritic', 'dsrt':'Deseret', 'shaw':'Shavian', 'osma':'Osmanya','lina':'Linear_A', 'cprt':'Cypriot', 'phnx':'Phoenician', 'khar':'Kharoshthi', 'ahom':'Ahom'
}

var ssHistory = { 'grek':'wxsx5j4kzt', 'cyrl':'ngc339csy8', 'armn':'z35gwmg4ft', 'hebr':'qek84cbq5u', 'arab':'hqr6rc9md5', 'syrc':'hlvzdczufr', 'thaa':'n2tj49rr2n', 'nkoo':'mnqzubphu7', 'samr':'qv7wwr9xgp', 'mand':'djwvfmuu3h', 'deva':'b6c6j63sf5', 'beng':'f8jrlqwbac', 'guru':'fd27tquj5j', 'gujr':'yqug2kbjjr', 'orya':'znkmblg693', 'taml':'zw5nedjarb', 'telu':'sjrwm9ppr3', 'knda':'ur8y3qj6yk', 'mlym':'ypvmjurtyg', 'sinh':'sbwtu85wbv', 'thai':'d877ebfc65', 'laoo':'98522835fg', 'tibt':'mg8ulatcjb', 'mymr':'vcz6flwzqs', 'geor':'rbr2wkvu4m', 'ethi':'fvp74ug66k', 'cher':'nwnmgh2n8j', 'cans':'c36d846u2d', 'ogam':'d3z382ahas', 'runi':'ha667hekd4', 'tglg':'76d3376b7c', 'hano':'ga9dbe72a2', 'buhd':'h4446ag538', 'tagb':'d62f48hfad', 'khmr':'2269c7g9ee', 'mong':'xluqdp54ts', 'limb':'a2exgfkrmf', 'tale':'76c7d2ch4g', 'talu':'37fcf7h92b', 'bugi':'739e2e7g2e', 'lana':'gf97b8ad78', 'bali':'f2bb6f3bh9', 'sund':'3844bc8cea', 'batk':'geb5h358d3', 'lepc':'g6cv78jn42', 'olck':'rrkdvn7crf', 'glag':'lbhv6e4efr', 'copt':'msg4hep5ev', 'tfng':'wmx4utrkuc', 'kana':'ly5dbxtthx', 'bopo':'tk449c64jh', 'yiii':'ejx9jwrd8e', 'lisu':'473c93dddf', 'vaii':'z8tk356ua7', 'bamu':'aeg5ah9fbg', 'sylo':'kylcx42avd', 'phag':'y22gh9p8g2', 'saur':'eqjs45mf8t', 'kali':'enl5dse8jv', 'rjng':'72d3ce3834', 'java':'db9724gea9', 'cham':'c4yzafta3f', 'tavt':'mn8j2mcblt', 'mtei':'x29ycx7hp5', 'hang':'umfm3ftrny', 'linb':'by38na5akh', 'lyci':'hsu56mxkr7', 'cari':'kqrxbcekmr', 'ital':'uk7vpcchbc', 'goth':'hj7ztebb5e', 'perm':'cqdluhalzh', 'ugar':'ffz7nkcxpb', 'xpeo':'pbjd5pecq6', 'dsrt':'tdjlnarc8y', 'shaw':'gj5fewb8ed', 'osma':'hg53222b9b', 'osge':'gm4pjj3qw7', 'elba':'fum3p8xz6v', 'lina':'rmvt9u45sq', 'cprt':'nywfdbys7b', 'armi':'ys8lxa9y4j', 'palm':'z3u3jwap6r', 'nbat':'kcjefvy9uw', 'hatr':'jpekrxh2wn', 'phnx':'ltk6h5bent', 'lydi':'hsu56mxkr7', 'mero':'ssxtjnbc7s', 'khar':'n974scptwz', 'sarb':'clvjlzfzv9', 'sarn':'gw3vnam33r', 'mani':'nnf3pjr2v3', 'avst':'appyvwf4ku', 'prti':'b7daarfs3a', 'phli':'ssmdqax9mt', 'phlp':'wqytv3ldez', 'orhk':'hpmlm9pjev', 'hung':'fx7n7tnxzt', 'brah':'nskejp3py5', 'kthi':'xa9swfhv9f', 'sora':'r4c4bsfy7v', 'cakm':'pdqjuf5k39', 'mahj':'kuegm6qedh', 'shrd':'spnpfarl4t', 'khoj':'r9e56hvyut', 'mult':'fptnmnhe3c', 'sind':'fykru6vn8h', 'gran':'qzhwzbsvm7', 'newa':'y53lggbts6', 'tirh':'wysbq8bpm4', 'sidd':'fcmrsmpp9f', 'modi':'tx5uz2hvvz', 'takr':'wvh5zdz7jl', 'ahom':'ky6s63f7fx', 'wara':'llvwz8vpn8', 'zanb':'j7rr9jgtyl', 'soyo':'lns82rb9hp', 'pauc':'t2uqldgjlv', 'bhks':'mcr57c34fw', 'marc':'h6ln54mufu', 'gonm':'vqhk6w3pgq', 'xsux':'yqbyb2mdz7', 'egyp':'q7yl4zu8eh', 'hluw':'tasanpp3u9', 'mroo':'b6ebw4c6al', 'bass':'3d6596eh4g', 'hmng':'ha2hg6d5b7', 'miao':'cb32gtbj58', 'tang':'rkw5m9sm64', 'nshu':'v39xawqg64', 'dupl':'sbhfvtwqkl', 'mend':'2874g2ehc8', 'adlm':'llp3cqd7gg', 'hani':'tsps57x35g', 'mede':'evyd5v7ebg', 'sogd':'xjh6av9y5z', 'sogo':'u9szp2wg4g', 'dogr':'ujs77ahv7k', 'gong':'r3u3b4rjy9', 'rogh':'mj3a6n78t2', 'maka':'wj3ak6u5s2', 'jpan':'lrnzlkagyq', 'elym':'bxzpxkpyu4', 'hmnp':'f6vf3vzlls', 'wcho':'besbhg4q95', 'nand':'pn37qqd7m4'
}

var chapters = { 'latn':'07', 'grek':'07', 'copt':'07', 'cyrl':'07', 'glag':'07', 'armn':'07', 'geor':'07', 'lina':'08', 'linb':'08', 'cprt':'08', 'lyci':'08', 'cari':'08', 'lydi':'08', 'ital':'08', 'runi':'08','hung':'08', 'goth':'08', 'elba':'08', 'aghb':'08', 'perm':'08',  'ogam':'08', 'shaw':'08', 'hebr':'09', 'arab':'09', 'syrc':'09', 'samr':'09', 'mand':'09',  'sarb':'10', 'sarn':'10', 'phnx':'10', 'armi':'10', 'mani':'10', 'prti':'10', 'phli':'10', 'plhp':'10', 'avst':'10', 'nbat':'10', 'palm':'10', 'hatr':'10', 'xsux':'11', 'ugar':'11', 'xpeo':'11', 'egyp':'11', 'mero':'11', 'hluw':'11', 'deva':'12', 'beng':'12', 'guru':'12', 'gujr':'12', 'orya':'12', 'taml':'12', 'telu':'12', 'knda':'12', 'mlym':'12', 'thaa':'13', 'sinh':'13', 'newa':'13', 'tibt':'13', 'mong':'13', 'limb':'13', 'mtei':'13', 'mroo':'13', 'wara':'13', 'olck':'13', 'cakm':'13', 'lepc':'13', 'saur':'13', 'gond':'13', 'gong':'13', 'brah':'14', 'khar':'14', 'bhks':'14', 'phag':'14', 'marc':'14', 'zanb':'14', 'soyo':'14', 'orhk':'14', 'sogd':'14', 'sogo':'14', 'sylo':'15', 'kthi':'15', 'shrd':'15', 'takr':'15', 'sidd':'15', 'mahj':'15', 'khoj':'15', 'sind':'15',  'mult':'15', 'tirh':'15', 'modi':'15', 'gran':'15', 'ahom':'15', 'sora':'15', 'dogr':'15', 'thai':'16', 'laoo':'16', 'mymr':'16', 'khmr':'16', 'tale':'16', 'talu':'16', 'lana':'16', 'tavt':'16', 'kali':'16', 'cham':'16', 'hmng':'16', 'pauc':'16', 'rogh':'16', 'tglg':'17', 'hano':'17', 'buhd':'17', 'tagb':'17', 'bugi':'17', 'bali':'17', 'java':'17', 'rjng':'17', 'batk':'17', 'sund':'17', 'maka':'17', 'hani':'18', 'bopo':'18', 'kana':'18', 'jpan':'18', 'hang':'18',  'yiii':'18', 'nshu':'18', 'lisu':'18', 'miao':'18', 'tang':'18',  'ethi':'19',  'osma':'19', 'tfng':'19', 'nkoo':'19', 'vaii':'19', 'bamu':'19',  'bass':'19', 'mend':'19', 'adlm':'19', 'mede':'19', 'cher':'20', 'cans':'20', 'osge':'20', 'dsrt':'20', 'dupl':'21', 'sutton_signwriting':'21', 'xphais':'22', 'elym':'10', 'hmnp':'16', 'wcho':'13', 'nand':'15' 
}

var OSDefaultFontsSet = new Set(['arab','armn','beng','cans','cher','deva','ethi','geor','gujr','guru','hebr','kana','knda','khmr','hang','laoo','mlym','mong','mymr','talu','nkoo','orya','osma','phag','sinh','syrc','tale','taml','telu','thaa','thai','tibt','tfng','vaii','yiii'])

var typographyDocSet =  new Set(['arab','hani','ethi','deva','kana','hang','tibt'])

var w3cTypographySet =  new Set(['arab','hani','ethi','hebr','deva','kana','hang','latn','mong','thai','tibt'])

var w3cTypeSampleSet =  new Set(['arab','hani','cyrl','ethi','grek','hebr','kana','hang','mong','deva','thai','tibt'])

var blockStart = { 
'basic_latin':'0000', 'latin-1_supplement':'0080', 'latin_extended-a':'0100', 'latin_extended-b':'0180', 'ipa_extensions':'0250', 'spacing_modifier_letters':'02B0', 'combining_diacritical_marks':'0300', 'greek_and_coptic':'0370', 'cyrillic':'0400', 'cyrillic_supplement':'0500', 'armenian':'0530', 'hebrew':'0590', 'arabic':'0600', 'syriac':'0700', 'arabic_supplement':'0750', 'thaana':'0780', 'nko':'07C0', 'samaritan':'0800', 'mandaic':'0840', 'syriac_supplement':'0860', 'arabic_extended-a':'08A0', 'devanagari':'0900', 'bengali':'0980', 'gurmukhi':'0A00', 'gujarati':'0A80', 'oriya':'0B00', 'tamil':'0B80', 'telugu':'0C00', 'kannada':'0C80', 'malayalam':'0D00', 'sinhala':'0D80', 'thai':'0E00', 'lao':'0E80', 'tibetan':'0F00', 'myanmar':'1000', 'georgian':'10A0', 'hangul_jamo':'1100', 'ethiopic':'1200', 'ethiopic_supplement':'1380', 'cherokee':'13A0', 'unified_canadian_aboriginal_syllabics':'1400', 'ogham':'1680', 'runic':'16A0', 'tagalog':'1700', 'hanunoo':'1720', 'buhid':'1740', 'tagbanwa':'1760', 'khmer':'1780', 'mongolian':'1800', 'unified_canadian_aboriginal_syllabics_extended':'18B0', 'limbu':'1900', 'tai_le':'1950', 'new_tai_lue':'1980', 'khmer_symbols':'19E0', 'buginese':'1A00', 'tai_tham':'1A20', 'combining_diacritical_marks_extended':'1AB0', 'balinese':'1B00', 'sundanese':'1B80', 'batak':'1BC0', 'lepcha':'1C00', 'ol_chiki':'1C50', 'cyrillic_extended-c':'1C80', 'sundanese_supplement':'1CC0', 'vedic_extensions':'1CD0', 'phonetic_extensions':'1D00', 'phonetic_extensions_supplement':'1D80', 'combining_diacritical_marks_supplement':'1DC0', 'latin_extended_additional':'1E00', 'greek_extended':'1F00', 'general_punctuation':'2000', 'superscripts_and_subscripts':'2070', 'currency_symbols':'20A0', 'combining_diacritical_marks_for_symbols':'20D0', 'letterlike_symbols':'2100', 'number_forms':'2150', 'arrows':'2190', 'mathematical_operators':'2200', 'miscellaneous_technical':'2300', 'control_pictures':'2400', 'optical_character_recognition':'2440', 'enclosed_alphanumerics':'2460', 'box_drawing':'2500', 'block_elements':'2580', 'geometric_shapes':'25A0', 'miscellaneous_symbols':'2600', 'dingbats':'2700', 'miscellaneous_mathematical_symbols-a':'27C0', 'supplemental_arrows-a':'27F0', 'braille_patterns':'2800', 'supplemental_arrows-b':'2900', 'miscellaneous_mathematical_symbols-b':'2980', 'supplemental_mathematical_operators':'2A00', 'miscellaneous_symbols_and_arrows':'2B00', 'glagolitic':'2C00', 'latin_extended-c':'2C60', 'coptic':'2C80', 'georgian_supplement':'2D00', 'tifinagh':'2D30', 'ethiopic_extended':'2D80', 'cyrillic_extended-a':'2DE0', 'supplemental_punctuation':'2E00', 'cjk_radicals_supplement':'2E80', 'kangxi_radicals':'2F00', 'ideographic_description_characters':'2FF0', 'cjk_symbols_and_punctuation':'3000', 'hiragana':'3040', 'katakana':'30A0', 'bopomofo':'3100', 'hangul_compatibility_jamo':'3130', 'kanbun':'3190', 'bopomofo_extended':'31A0', 'cjk_strokes':'31C0', 'katakana_phonetic_extensions':'31F0', 'enclosed_cjk_letters_and_months':'3200', 'cjk_compatibility':'3300', 'cjk_unified_ideographs_extension_a':'3400', 'yijing_hexagram_symbols':'4DC0', 'cjk_unified_ideographs':'4E00', 'yi_syllables':'A000', 'yi_radicals':'A490', 'lisu':'A4D0', 'vai':'A500', 'cyrillic_extended-b':'A640', 'bamum':'A6A0', 'modifier_tone_letters':'A700', 'latin_extended-d':'A720', 'syloti_nagri':'A800', 'common_indic_number_forms':'A830', 'phags-pa':'A840', 'saurashtra':'A880', 'devanagari_extended':'A8E0', 'kayah_li':'A900', 'rejang':'A930', 'hangul_jamo_extended-a':'A960', 'javanese':'A980', 'myanmar_extended-b':'A9E0', 'cham':'AA00', 'myanmar_extended-a':'AA60', 'tai_viet':'AA80', 'meetei_mayek_extensions':'AAE0', 'ethiopic_extended-a':'AB00', 'latin_extended-e':'AB30', 'cherokee_supplement':'AB70', 'meetei_mayek':'ABC0', 'hangul_syllables':'AC00', 'hangul_jamo_extended-b':'D7B0', 'high_surrogates':'D800', 'high_private_use_surrogates':'DB80', 'low_surrogates':'DC00', 'private_use_area':'E000', 'cjk_compatibility_ideographs':'F900', 'alphabetic_presentation_forms':'FB00', 'arabic_presentation_forms-a':'FB50', 'variation_selectors':'FE00', 'vertical_forms':'FE10', 'combining_half_marks':'FE20', 'cjk_compatibility_forms':'FE30', 'small_form_variants':'FE50', 'arabic_presentation_forms-b':'FE70', 'halfwidth_and_fullwidth_forms':'FF00', 'specials':'FFF0', 'linear_b_syllabary':'10000', 'linear_b_ideograms':'10080', 'aegean_numbers':'10100', 'ancient_greek_numbers':'10140', 'ancient_symbols':'10190', 'phaistos_disc':'101D0', 'lycian':'10280', 'carian':'102A0', 'coptic_epact_numbers':'102E0', 'old_italic':'10300', 'gothic':'10330', 'old_permic':'10350', 'ugaritic':'10380', 'old_persian':'103A0', 'deseret':'10400', 'shavian':'10450', 'osmanya':'10480', 'osage':'104B0', 'elbasan':'10500', 'caucasian_albanian':'10530', 'linear_a':'10600', 'cypriot_syllabary':'10800', 'imperial_aramaic':'10840', 'palmyrene':'10860', 'nabataean':'10880', 'hatran':'108E0', 'phoenician':'10900', 'lydian':'10920', 'meroitic_hieroglyphs':'10980', 'meroitic_cursive':'109A0', 'kharoshthi':'10A00', 'old_south_arabian':'10A60', 'old_north_arabian':'10A80', 'manichaean':'10AC0', 'avestan':'10B00', 'inscriptional_parthian':'10B40', 'inscriptional_pahlavi':'10B60', 'psalter_pahlavi':'10B80', 'old_turkic':'10C00', 'old_hungarian':'10C80', 'rumi_numeral_symbols':'10E60', 'brahmi':'11000', 'kaithi':'11080', 'sora_sompeng':'110D0', 'chakma':'11100', 'mahajani':'11150', 'sharada':'11180', 'sinhala_archaic_numbers':'111E0', 'khojki':'11200', 'multani':'11280', 'khudawadi':'112B0', 'grantha':'11300', 'newa':'11400', 'tirhuta':'11480', 'siddham':'11580', 'modi':'11600', 'mongolian_supplement':'11660', 'takri':'11680', 'ahom':'11700', 'warang_citi':'118A0', 'zanabazar_square':'11A00', 'soyombo':'11A50', 'pau_cin_hau':'11AC0', 'bhaiksuki':'11C00', 'marchen':'11C70', 'masaram_gondi':'11D00', 'cuneiform':'12000', 'cuneiform_numbers_and_punctuation':'12400', 'early_dynastic_cuneiform':'12480', 'egyptian_hieroglyphs':'13000', 'anatolian_hieroglyphs':'14400', 'bamum_supplement':'16800', 'mro':'16A40', 'bassa_vah':'16AD0', 'pahawh_hmong':'16B00', 'miao':'16F00', 'ideographic_symbols_and_punctuation':'16FE0', 'tangut':'17000', 'tangut_components':'18800', 'kana_supplement':'1B000', 'kana_extended-a':'1B100', 'nushu':'1B170', 'duployan':'1BC00', 'shorthand_format_controls':'1BCA0', 'byzantine_musical_symbols':'1D000', 'musical_symbols':'1D100', 'ancient_greek_musical_notation':'1D200', 'tai_xuan_jing_symbols':'1D300', 'counting_rod_numerals':'1D360', 'mathematical_alphanumeric_symbols':'1D400', 'sutton_signwriting':'1D800', 'glagolitic_supplement':'1E000', 'mende_kikakui':'1E800', 'adlam':'1E900', 'arabic_mathematical_alphabetic_symbols':'1EE00', 'mahjong_tiles':'1F000', 'domino_tiles':'1F030', 'playing_cards':'1F0A0', 'enclosed_alphanumeric_supplement':'1F100', 'enclosed_ideographic_supplement':'1F200', 'miscellaneous_symbols_and_pictographs':'1F300', 'emoticons':'1F600', 'ornamental_dingbats':'1F650', 'transport_and_map_symbols':'1F680', 'alchemical_symbols':'1F700', 'geometric_shapes_extended':'1F780', 'supplemental_arrows-c':'1F800', 'supplemental_symbols_and_pictographs':'1F900', 'cjk_unified_ideographs_extension_b':'20000', 'cjk_unified_ideographs_extension_c':'2A700', 'cjk_unified_ideographs_extension_d':'2B740', 'cjk_unified_ideographs_extension_e':'2B820', 'cjk_compatibility_ideographs_supplement':'2F800', 'tags':'E0000', 'variation_selectors_supplement':'E0100', 'supplementary_private_use_area-a':'F0000', 'supplementary_private_use_area-b':'100000',  'medefaidrin':'16E40','sogdian':'10F30', 'old_sogdian':'10F00', 'dogra':'11800', 'gunjala_gondi':'11D60', 'hanifi_rohingya':'10D00', 'makasar':'11EE0', 'georgian_extended':'1C90', 'elymaic':'10FE0', 'nyiakeng_puachue_hmong':'1E100', 'wancho':'1E2C0', 'nandinagari':'119A0'
 }



// NOTES
// current_usage should be empty if the script is in active use by a large number of people, or if the script isn't in use today
// if not, use one of the following labels: limited, endangered, liturgical, notation
// the end field should be empty for scripts that are not historic
// script dates mostly from http://www.worldswritingsystems.org/


        
var linkDB = { 

ahom:{ script:"Ahom", code:"Ahom", dates:"15thC – today", start:"1400", end:"", origin:"South Asia", current_usage:"endangered",
	info:{ 		scriptsource:"Ahom", wikipedia:"Ahom_alphabet", omniglot:"ahom" }, 
	local: [	],
	unicode:{ 	core:"ch15", historical:"ky6s63f7fx" }, 
	charts:[	"Ahom" ],
	pickers:[	
				],
	fontkey:[	
				],
	layout:[	
				]
	},

arab:{ script:"Arabic",  code:"Arab", dates:"6thC – today", start:"500", end:"", origin:"West Asia", current_usage:"",
	info:{ scriptsource:"Arab", wikipedia:"Arabic_script", omniglot:"arabic" }, 
	local:[		],
	unicode:{ 	core:"ch09", historical:"hqr6rc9md5" }, 
	charts:[	"Arabic", "Arabic Supplement", "Arabic Extended-A", "Arabic Presentation Forms-A", "Arabic Presentation Forms-B" ],
	pickers:[	{ name:"Arabic", url:"arabic" },
				{ name:"Arabic Block", url:"arabicblock" },
				{ name:"Persian", url:"persian" },
				{ name:"Uighur", url:"uighur" },
				{ name:"Urdu", url:"urdu" }
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-middle-eastern.html#arabic" }
				],
	layout:[	{ name:"Arabic Layout Requirements", url:"https://w3c.github.io/alreq/" },
				{ name:"Arabic text justification", url:"http://www.tug.org/tugboat/tb27-2/tb87benatia.pdf" },
				{ name:"Justify Just or Just Justify", url:"http://quod.lib.umich.edu/j/jep/3336451.0013.105?view=text;rgn=main" },
				{ name:"Typography questions for HTML & CSS: Arabic", url:"https://r12a.github.io/blog/201110.html#20140523" },
				{ name:"Rule-based expert system for Urdu nastaleeq justification", url:"http://www.cle.org.pk/Publication/papers/2004/rule-based-expert-system.pdf" }
				]
	},

armn:{ script:"Armenian", code:"Armn", dates:"406 – today", start:"406", end:"", origin:"Europe", current_usage:"",
	info:{ 		scriptsource:"Armn", wikipedia:"Armenian_script", omniglot:"armenian" }, 
	local: [	],
	unicode:{ 	core:"ch07", historical:"z35gwmg4ft" }, 
	charts:[	"Armenian" ],
	pickers:[	{ name:"Armenian", url:"armenian" }
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-european.html#armenian" }
				],
	layout:[	
				
				]
	},

aghb:{ script:"Caucasian Albanian", code:"Aghb", dates:"5thC – ?", start:"400", end:"?", origin:"Europe", current_usage:"",
	info:{ 		scriptsource:"Aghb", wikipedia:"Caucasian_Albanian_alphabet", omniglot:"caucasianalbanian" }, 
	local: [	],
	unicode:{ 	core:"ch08", historical:"x2qwvvz9p4" }, 
	charts:[	"Caucasian Albanian" ],
	pickers:[	
				],
	fontkey:[	
				],
	layout:[	
				]
	},

cprt:{ script:"Cypriot", code:"Cprt", dates:"BCE 11thC – BCE 3rdC", start:"-1100", end:"-300", origin:"Europe", current_usage:"",
	info:{ 		wikipedia:"Cypriot_syllabary", omniglot:"cypriot" }, 
	local: [	],
	unicode:{ 	core:"ch08", historical:"nywfdbys7b" }, 
	charts:[	"Cypriot Syllabary" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-european.html#cypriotsyllabary" }
				],
	layout:[	
				]
	},

cyrl:{ script:"Cyrillic", code:"Cyrl", dates:"10thC – today", start:"900", end:"", origin:"Europe", current_usage:"",
	info:{ 		wikipedia:"Cyrillic_script", omniglot:"cyrillic" }, 
	local: [	],
	unicode:{ 	core:"ch07", historical:"ngc339csy8" }, 
	charts:[	"Cyrillic", "Cyrillic Supplement", "Cyrillic Extended-A", "Cyrillic Extended-B" ],
	pickers:[	{ name:"Russian", url:"russian" },
				{ name:"Cyrillic", url:"cyrillic" }
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-european.html#cyrillic" }
				],
	layout:[	
				]
	},

dupl:{ script:"Duployan", code:"Dupl", dates:"1860 – today", start:"1860", end:"", origin:"Europe", current_usage:"notation",
	info:{ 		wikipedia:"Duployan" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Duployan", "Shorthand Format Controls" ],
	pickers:[	
				],
	fontkey:[	
				],
	layout:[	
				]
	},

elba:{ script:"Elbasan", code:"Elba", dates:"1761 – ?", start:"1761", end:"?", origin:"Europe", current_usage:"",
	info:{ 		wikipedia:"Elbasan_alphabet", omniglot:"elbasan" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Elbasan" ],
	pickers:[	
				],
	fontkey:[	
				],
	layout:[	
				]
	},

geor:{ script:"Georgian", code:"Geor", dates:"5thC – today", start:"1400", end:"", origin:"Europe", current_usage:"",
	info:{ 		wikipedia:"Georgian_script", omniglot:"georgian" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Georgian", "Georgian Extended", "Georgian Supplement" ],
	pickers:[	{ name:"Georgian", url:"georgian" }
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-european.html#georgian" }
				],
	layout:[	
				]
	},

glag:{ script:"Glagolitic", code:"Glag", dates:"862 – 1893", start:"862", end:"1893", origin:"Europe", current_usage:"",
	info:{ 		wikipedia:"Glagolitic_script", omniglot:"glagolitic" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Glagolitic" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-european.html#glagolitic" }
				],
	layout:[	
				]
	},

goth:{ script:"Gothic", code:"Goth", dates:"4thC – 9thC", start:"300", end:"900", origin:"Europe", current_usage:"",
	info:{ 		wikipedia:"Gothic_alphabet", omniglot:"gothic" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Gothic" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-european.html#gothic" }
				],
	layout:[	
				]
	},

grek:{ script:"Greek", code:"Grek", dates:"BCE 8thC – today", start:"-800", end:"", origin:"Europe", current_usage:"",
	info:{ 		wikipedia:"Greek_alphabet", omniglot:"greek" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Greek and Coptic", "Greek Extended", "Ancient Greek Numbers" ],
	pickers:[	{ name:"Greek", url:"greek" }
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-european.html#greek" }
				],
	layout:[	
				]
	},

latn:{ script:"Latin", code:"Latn", dates:"BCE 7thC – today", start:"-700", end:"", origin:"Europe", current_usage:"",
	info:{ 		wikipedia:"Latin_script", omniglot:"latin" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Basic Latin", "Latin-1 Supplement", "Latin Extended-A", "Latin Extended-B", "Latin Extended-C", "Latin Extended-D", "Latin Extended-E", "Latin Extended Additional", "Halfwidth and Fullwidth Forms", "IPA Extensions", "Phonetic Extensions", "Phonetic Extensions Supplement" ],
	pickers:[	{ name:"Latin &amp; diacritics", url:"latin" },
				{ name:"Old English", url:"oldenglish" },
				{ name:"Old Norse", url:"oldnorse" },
				{ name:"Tłįchǫ (Dogrib)", url:"tlicho" },
				{ name:"Vietnamese", url:"vietnamese" },
				{ name:"IPA", url:"ipa" }
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-european.html#armenian" }
				],
	layout:[	{ name:"Requirements for Latin Text Layout and Pagination", url:"http://w3c.github.io/dpub-pagination/" }
				]
	},

lina:{ script:"Linear A", code:"Lina", dates:"BCE 18thC – BCE 15thC", start:"-1800", end:"-1500", origin:"Europe", current_usage:"",
	info:{ 		wikipedia:"Linear_a", omniglot:"lineara" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Linear A" ],
	pickers:[	
				],
	fontkey:[	
				],
	layout:[	
				]
	},

linb:{ script:"Linear B", code:"Linb", dates:"BCE 14thC – BCE 12thC", start:"-1400", end:"-1200", origin:"Europe", current_usage:"",
	info:{ 		wikipedia:"Linear_b", omniglot:"linearb" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Linear B Syllabary", "Linear B Ideograms", "Aegean Numbers" ],
	pickers:[	
				],
	fontkey:[	{ name:"Gallery of Unicode Fonts (Ideograms)", url:"http://www.wazu.jp/gallery/Fonts_LinearBIdeograms.html" }
				],
	layout:[	
				]
	},

ogam:{ script:"Ogham", code:"Ogam", dates:"5thC – 7thC", start:"400", end:"700", origin:"Europe", current_usage:"",
	info:{ 		wikipedia:"Ogham", omniglot:"ogham" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Ogham" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-european.html#ogham" }
				],
	layout:[	
				]
	},

hung:{ script:"Old Hungarian", code:"Hung", dates:"9thC – today", start:"800", end:"", origin:"Europe", current_usage:"endangered",
	info:{ 		wikipedia:"Old_Hungarian_alphabet" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Old Hungarian" ],
	pickers:[	
				],
	fontkey:[	
				],
	layout:[	
				]
	},

ital:{ script:"Old Italic", code:"Ital", dates:"BCE 8thC – BCE 1stC", start:"800", end:"-100", origin:"Europe", current_usage:"",
	info:{ 		wikipedia:"Old_Italic_alphabet", omniglot:"olditalic" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Old Italic" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-european.html#olditalic" }
				],
	layout:[	
				]
	},

perm:{ script:"Old Permic", code:"Perm", dates:"1376 – 17thC", start:"1376", end:"1700", origin:"Europe", current_usage:"",
	info:{ 		wikipedia:"Old_Permic", omniglot:"oldpermic" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Old Permic" ],
	pickers:[	
				],
	fontkey:[	
				],
	layout:[	
				]
	},

xphais:{ script:"Phaistos Disc", code:"xPhais", dates:"BCE 18thC – BCE 14thC", start:"-1800", end:"-1400", origin:"Europe", current_usage:"",
	info:{ 		wikipedia:"Phaistos_Disc", omniglot:"phaistos" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Phaistos Disc" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-european.html#phaistosdisc" }
				],
	layout:[	
				]
	},

runr:{ script:"Runic", code:"Runr", dates:"BCE 1stC – 19thC", start:"100", end:"1900", origin:"Europe", current_usage:"",
	info:{ 		wikipedia:"Runic", omniglot:"runic" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Runic" ],
	pickers:[	{ name:"Runic", url:"runic" }
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-european.html#runic" }
				],
	layout:[	
				]
	},

shaw:{ script:"Shavian", code:"Shaw", dates:"1960s – today", start:"1960", end:"", origin:"Europe", current_usage:"notation",
	info:{ 		wikipedia:"Shavian", omniglot:"shavian" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Shavian" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-european.html#shavian" }
				],
	layout:[	
				]
	},

bamu:{ script:"Bamum", code:"Bamu", dates:"1896 – today", start:"1896", end:"", origin:"Africa", current_usage:"endangered",
	info:{ 		wikipedia:"Bamum_script", omniglot:"bamum" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Bamum", "Bamum Supplement" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-african.html#bamum" }
				],
	layout:[	
				]
	},

bass:{ script:"Bassa Vah", code:"Bass", dates:"1907 – today", start:"1907", end:"", origin:"Africa", current_usage:"endangered",
	info:{ 		wikipedia:"Bassa_Vah", omniglot:"bassa" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Bassa Vah" ],
	pickers:[	
				],
	fontkey:[	
				],
	layout:[	
				]
	},

copt:{ script:"Coptic", code:"Copt", dates:"4thC – 14thC", start:"300", end:"1400", origin:"Africa", current_usage:"liturgical",
	info:{ 		wikipedia:"Coptic_script", omniglot:"coptic" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Coptic", "Greek and Coptic", "Coptic Epact Numbers" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-african.html#coptic" }
				],
	layout:[	
				]
	},

egyp:{ script:"Egyptian Hieroglyphs", code:"Egyp", dates:"BCE 30thC – 1stC CE", start:"-3000", end:"100", origin:"Africa", current_usage:"",
	info:{ 		wikipedia:"Egyptian_hieroglyphs", omniglot:"egyptian" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Egyptian Hieroglyphs" ],
	pickers:[	{ name:"Egyptian hieroglyphs", url:"egyptian" }
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-african.html#egyptianhieroglyphs" }
				],
	layout:[	
				]
	},

ethi:{ script:"Ethiopic", code:"Ethi", dates:"BCE 4thC – today", start:"-400", end:"", origin:"Africa", current_usage:"",
	info:{ 		wikipedia:"Ge'ez_script", omniglot:"ethiopic" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Ethiopic", "Ethiopic Supplement", "Ethiopic Extended", "Ethiopic Extended-A" ],
	pickers:[	{ name:"Ethiopic", url:"ethiopic" }
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-african.html#ethiopic" }
				],
	layout:[	{ name:"Ethiopic Layout Requirements", url:"https://w3c.github.io/elreq/" },
				{ name:"Proposal to Reclassify Ethiopic Wordspace as a Space Separator (Zs) Symbol", url:"http://www.unicode.org/L2/L2015/15148-ethiopic-wordspace.pdf" }
				]
	},

mend:{ script:"Mende Kikakui", code:"Mend", dates:"1920 – today", start:"1920", end:"", origin:"Africa", current_usage:"endangered",
	info:{ 		wikipedia:"Mende Kikakui_script", omniglot:"mende" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Mende Kikakui" ],
	pickers:[	
				],
	fontkey:[	
				],
	layout:[	
				]
	},

merc:{ script:"Meroitic", code:"Merc", dates:"BCE 3rdC – 4thC CE", start:"-300", end:"400", origin:"Africa", current_usage:"",
	info:{ 		wikipedia:"Meroitic_alphabet", omniglot:"meroitic" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Meroitic Cursive", "Meroitic Hieroglyphs" ],
	pickers:[	
				],
	fontkey:[	
				],
	layout:[	
				]
	},

nkoo:{ script:"NKo", code:"Nkoo", dates:"1949 – today", start:"1949", end:"", origin:"Africa", current_usage:"",
	info:{ 		wikipedia:"N'Ko_alphabet", omniglot:"nko" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"NKo" ],
	pickers:[	{ name:"N'Ko", url:"nko" }
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-african.html#nko" }
				],
	layout:[	
				]
	},

osma:{ script:"Osmanya", code:"Osma", dates:"1920 – 1973", start:"1920", end:"1973", origin:"Africa", current_usage:"",
	info:{ 		wikipedia:"Osmanya_alphabet", omniglot:"osmanya" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Osmanya" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-african.html#osmanya" }
				],
	layout:[	
				]
	},

tfng:{ script:"Tifinagh", code:"Tfng", dates:"BCE 3rdC – today", start:"-300", end:"", origin:"Africa", current_usage:"",
	info:{ 		wikipedia:"Tifinagh", omniglot:"tifinagh" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Tifinagh" ],
	pickers:[	{ name:"Tifinagh", url:"tifinagh" }
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-african.html#tifinagh" }
				],
	layout:[	
				]
	},

vaii:{ script:"Vai", code:"Vaii", dates:"1830 – today", start:"1830", end:"", origin:"Africa", current_usage:"",
	info:{ 		wikipedia:"Vai_syllabary", omniglot:"vai" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Vai" ],
	pickers:[	{ name:"Vai", url:"vai" }
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-african.html#vai" }
				],
	layout:[	
				]
	},

hluw:{ script:"Anatolian Hieroglyphs", code:"Hluw", name:"Anatolian (Luwian/Hittite) hieroglyphs", dates:"BCE 15thC – BCE 7thC", start:"-1500", end:"-700", origin:"West Asia", current_usage:"",
	info:{ 		wikipedia:"Anatolian_hieroglyphs", omniglot:"luvian" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Anatolian hieroglyphs" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-african.html#armenian" }
				],
	layout:[	
				]
	},

armi:{ script:"Aramaic", code:"Armi", dates:"BCE 8thC – BCE 4thC", start:"-800", end:"-400", origin:"West Asia", current_usage:"",
	info:{ 		wikipedia:"Aramaic_alphabet", omniglot:"aramaic" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Imperial Aramaic" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-middle-eastern.html#imperialaramaic" }
				],
	layout:[	
				]
	},

avst:{ script:"Avestan", code:"Avst", dates:"6thC – today", start:"500", end:"", origin:"West Asia", current_usage:"liturgical",
	info:{ 		wikipedia:"Avestan_alphabet", omniglot:"avestan" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Avestan" ],
	pickers:[	
				],
	fontkey:[	
				],
	layout:[	
				]
	},

cari:{ script:"Carian", code:"Cari", dates:"BCE 7thC – BCE 3rdC", start:"-700", end:"-300", origin:"West Asia", current_usage:"",
	info:{ 		wikipedia:"Carian_script", omniglot:"carian" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Carian" ],
	pickers:[	
				],
	fontkey:[	 { name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-middle-eastern.html#carian" }
				],
	layout:[	
				]
	},

xsux:{ script:"Cuneiform", code:"Xsux", dates:"BCE 29thC – 1stC CE", start:"-2900", end:"100", origin:"West Asia", current_usage:"",
	info:{ 		wikipedia:"Cuneiform_script", omniglot:"cuneiform" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Cuneiform", "Early Dynastic Cuneiform", "Cuneiform Numbers and Punctuation", "Old Persian", "Ugaritic" ],
	pickers:[	
				],
	fontkey:[	{ name:"Gallery of Unicode Fonts", url:"http://www.wazu.jp/#cuneiform" },
			    { name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-middle-eastern.html#akkadian" }
				],
	layout:[	
				]
	},

hatr:{ script:"Hatran", code:"Hatr", dates:"BCE 98 – 240 CE", start:"-98", end:"240", origin:"West Asia", current_usage:"",
	info:{ 		wikipedia:"Aramaic_of_Hatra", omniglot:"" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Hatran" ],
	pickers:[	
				],
	fontkey:[	
				],
	layout:[	
				]
	},

hebr:{ script:"Hebrew", code:"Hebr", dates:"BCE 3rdC – today", start:"-300", end:"", origin:"West Asia", current_usage:"",
	info:{ 		wikipedia:"Hebrew_script", omniglot:"hebrew" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Hebrew" ],
	pickers:[	{ name:"Hebrew", url:"hebrew" }
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-middle-eastern.html#hebrew" }
				],
	layout:[	
				]
	},

lyci:{ script:"Lycian", code:"Lyci", dates:"BCE 5thC – BCE 3rdC", start:"-500", end:"-300", origin:"West Asia", current_usage:"",
	info:{ 		wikipedia:"Lycian_script", omniglot:"http://www.omniglot.com/writing/lycian.php" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Lycian" ],
	pickers:[	
				],
	fontkey:[	 { name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-middle-eastern.html#lycian" }
				],
	layout:[	
				]
	},

lydi:{ script:"Lydian", code:"Lydi", dates:"BCE 8thC – BCE 3rdC", start:"-800", end:"-300", origin:"West Asia", current_usage:"",
	info:{ 		wikipedia:"Lydian_script", omniglot:"http://www.omniglot.com/writing/lydian.php" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Lydian" ],
	pickers:[	
				],
	fontkey:[	 { name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-middle-eastern.html#lydian" }
				],
	layout:[	
				]
	},

mand:{ script:"Mandaic", code:"Mand", name:"", dates:"2ndC – today", start:"100", end:"", origin:"West Asia", current_usage:"small community, liturgical",
	info:{ 		wikipedia:"Mandaic_alphabet", omniglot:"mandaic" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Mandaic" ],
	pickers:[	{ name:"Mandaic", url:"mandaic" }
				],
	fontkey:[	 { name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-middle-eastern.html#mandaic" }
				],
	layout:[	
				]
	},

nbat:{ script:"Nabataean", code:"Nbat", name:"", dates:"BCE 2ndC – 4thC CE", start:"-200", end:"400", origin:"West Asia", current_usage:"",
	info:{ 		wikipedia:"Nabataean_alphabet", omniglot:"nabataean" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Nabataean" ],
	pickers:[	
				],
	fontkey:[	 
				],
	layout:[	
				]
	},

narb:{ script:"Old North Arabian", code:"Narb", name:"", dates:"BCE 550 – 4thC CE", start:"-550", end:"400", origin:"West Asia", current_usage:"",
	info:{ 		wikipedia:"Old_North_Arabian", omniglot:"" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Old North Arabian" ],
	pickers:[	
				],
	fontkey:[	 
				],
	layout:[	
				]
	},
  
xpeo:{ script:"Old Persian", code:"Xpeo", name:"", dates:"BCE 525 – 4thC CE", start:"-525", end:"400", origin:"West Asia", current_usage:"",
	info:{ 		wikipedia:"Old_Persian_cuneiform", omniglot:"opcuneiform" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Old Persian" ],
	pickers:[	
				],
	fontkey:[	 { name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-middle-eastern.html#oldpersian" }
				],
	layout:[	
				]
	},
  
sarb:{ script:"Old South Arabian", code:"Sarb", name:"", dates:"BCE 8thC – 7thC CE", start:"-800", end:"700", origin:"West Asia", current_usage:"",
	info:{ 		wikipedia:"Old South Arabian_alphabet", omniglot:"southarabian" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Old South Arabian" ],
	pickers:[	
				],
	fontkey:[	 { name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-middle-eastern.html#oldsoutharabian" }
				],
	layout:[	
				]
	},
  
phli:{ script:"Inscriptional Pahlavi", code:"Phli", name:"", dates:"2ndC – 5thC", start:"100", end:"500", origin:"West Asia", current_usage:"",
	info:{ 		wikipedia:"Inscriptional_Pahlavi", omniglot:"mpersian" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Inscriptional Pahlavi" ],
	pickers:[	
				],
	fontkey:[	 { name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-middle-eastern.html#inscriptionalpahlavi" }
				],
	layout:[	
				]
	},
  
phlp:{ script:"Psalter Pahlavi", code:"Phlp", name:"", dates:"6thC – 7thC", start:"500", end:"700", origin:"West Asia", current_usage:"",
	info:{ 		wikipedia:"Pahlavi_scripts", omniglot:"mpersian" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Psalter Pahlavi" ],
	pickers:[	
				],
	fontkey:[	 
				],
	layout:[	
				]
	},
  
palm:{ script:"Palmyrene", code:"Palm", name:"", dates:"BCE 1stC – 3rdC CE", start:"-100", end:"200", origin:"West Asia", current_usage:"",
	info:{ 		wikipedia:"Palmyrene_alphabet", omniglot:"" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Palmyrene" ],
	pickers:[	
				],
	fontkey:[	 
				],
	layout:[	
				]
	},
  
prti:{ script:"Inscriptional Parthian", code:"Prti", name:"", dates:"2ndC – 292", start:"100", end:"292", origin:"West Asia", current_usage:"",
	info:{ 		wikipedia:"Inscriptional_Parthian#Written_Parthian", omniglot:"mpersian" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Inscriptional Parthian" ],
	pickers:[	
				],
	fontkey:[	 { name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-middle-eastern.html#inscriptionalparthian" }
				],
	layout:[	
				]
	},
  
phnx:{ script:"Phoenician", code:"Phnx", name:"", dates:"BCE 12thC – BCE 2ndC", start:"1200", end:"200", origin:"West Asia", current_usage:"",
	info:{ 		wikipedia:"Phoenician_alphabet", omniglot:"phoenician" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Phoenician" ],
	pickers:[	
				],
	fontkey:[	 { name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-middle-eastern.html#phoenician" }
				],
	layout:[	
				]
	},
  
samr:{ script:"Samaritan", code:"Samr", name:"", dates:"BCE 3rdC – today", start:"-300", end:"", origin:"West Asia", current_usage:"small community, liturgical",
	info:{ 		wikipedia:"Samaritan_alphabet", omniglot:"samaritan" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Samaritan" ],
	pickers:[	
				],
	fontkey:[	 { name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-middle-eastern.html#samaritan" }
				],
	layout:[	
				]
	},
  
syrc:{ script:"Syriac", code:"Syrc", name:"", dates:"6thC – today", start:"500", end:"", origin:"West Asia", current_usage:"",
	info:{ 		wikipedia:"Syriac_alphabet", omniglot:"syriac" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Syriac", "Syriac Supplement" ],
	pickers:[	{ name:"Syriac", url:"syriac" },
				{ name:"Assyrian Neo-Aramaic", url:"aramaic" }
				],
	fontkey:[	 { name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-middle-eastern.html#syriac" }
				],
	layout:[	
				]
	},
  
ugar:{ script:"Ugaritic", code:"Ugar", name:"", dates:"BCE 14thC – BCE 12thC", start:"-1400", end:"-1200", origin:"West Asia", current_usage:"",
	info:{ 		wikipedia:"Ugaritic_alphabet", omniglot:"ugaritic" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Ugaritic" ],
	pickers:[	
				],
	fontkey:[	 { name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-middle-eastern.html#ugaritic" }
				],
	layout:[	
				]
	},

beng:{ script:"Bengali", code:"Beng", name:"", dates:"11thC – today", start:"1100", end:"", origin:"South Asia", current_usage:"",
	info:{ 		wikipedia:"Bengali_alphabet", omniglot:"bengali" }, 
	local: [	{ name:"Introduction to Indic Scripts", url:"indic-overview" }
				],
	unicode:{ 	}, 
	charts:[	"Bengali" ],
	pickers:[	{ name:"Bengali", url:"bengali" }
				],
	fontkey:[	 { name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-south-asian.html#bengali" }
				],
	layout:[	
				]
	},
  
brah:{ script:"Brahmi", code:"Brah", name:"", dates:"BCE 3rdC – 10thC CE", start:"-300", end:"1000", origin:"South Asia", current_usage:"",
	info:{ 		wikipedia:"Brahmi_script", omniglot:"brahmi" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Brahmi" ],
	pickers:[	
				],
	fontkey:[	
				],
	layout:[	
				]
	},
  
cakm:{ script:"Chakma", code:"Cakm", name:"", dates:"8thC – today", start:"700", end:"", origin:"South Asia", current_usage:"small community, low literacy",
	info:{ 		wikipedia:"Chakma_alphabet", omniglot:"chakma" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Chakma" ],
	pickers:[	
				],
	fontkey:[	
				],
	layout:[	
				]
	},
  
deva:{ script:"Devanagari", code:"Deva", name:"", dates:"11thC – today", start:"1100", end:"", origin:"South Asia", current_usage:"",
	info:{ 		wikipedia:"Devanagari", omniglot:"devanagari" }, 
	local: [	{ name:"Introduction to Indic Scripts", url:"indic-overview" }
				],
	unicode:{ 	}, 
	charts:[	"Devanagari", "Devanagari Extended", "Vedic Extensions" ],
	pickers:[	{ name:"Devanagari", url:"devanagari" },
				{ name:"Hindi", url:"hindi" },
				{ name:"Kashmiri", url:"kashmiri" }
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-south-asian.html#devanagari" }
				],
	layout:[	
				]
	},
  
gran:{ script:"Grantha", code:"Gran", name:"", dates:"7thC – today", start:"700", end:"", origin:"South Asia", current_usage:"liturgical",
	info:{ 		wikipedia:"Grantha_alphabet", omniglot:"grantha" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Grantha" ],
	pickers:[	
				],
	fontkey:[	
				],
	layout:[	
				]
	},
  
gujr:{ script:"Gujarati", code:"Gujr", name:"", dates:"1592 – today", start:"1592", end:"", origin:"South Asia", current_usage:"",
	info:{ 		wikipedia:"Gujarati_alphabet", omniglot:"gujarati" }, 
	local: [	{ name:"Introduction to Indic Scripts", url:"indic-overview" }
				],
	unicode:{ 	}, 
	charts:[	"Gujarati" ],
	pickers:[	{ name:"Gujarati", url:"gujarati" }
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-south-asian.html#gujarati" }
				],
	layout:[	
				]
	},
  
guru:{ script:"Gurmukhi", code:"Guru", name:"", dates:"16thC – today", start:"1500", end:"", origin:"South Asia", current_usage:"",
	info:{ 		wikipedia:"Gurmukhi_alphabet", omniglot:"punjabi" }, 
	local: [	{ name:"Introduction to Indic Scripts", url:"indic-overview" }
				],
	unicode:{ 	}, 
	charts:[	"Gurmukhi" ],
	pickers:[	{ name:"Gurmukhi", url:"gurmukhi" }
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-south-asian.html#gurmukhi" }
				],
	layout:[	
				]
	},
  
kthi:{ script:"Kaithi", code:"Kthi", name:"", dates:"16thC – 20thC", start:"1500", end:"2000", origin:"South Asia", current_usage:"",
	info:{ 		wikipedia:"Kaithi", omniglot:"kaithi" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Kaithi" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-south-asian.html#kaithi" }
				],
	layout:[	
				]
	},
  
knda:{ script:"Kannada", code:"Knda", name:"", dates:"1500 – today", start:"1500", end:"", origin:"South Asia", current_usage:"",
	info:{ 		wikipedia:"Kannada_alphabet", omniglot:"kannada" }, 
	local: [	{ name:"Introduction to Indic Scripts", url:"indic-overview" }
				],
	unicode:{ 	}, 
	charts:[	"Kannada" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-south-asian.html#kannada" }
				],
	layout:[	
				]
	},
  
khar:{ script:"Kharoshthi", code:"Khar", name:"", dates:"BCE 7thC – 3rdC CE", start:"-700", end:"300", origin:"South Asia", current_usage:"",
	info:{ 		wikipedia:"Kharoshthi", omniglot:"kharosthi" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Kharoshthi" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-south-asian.html#kharoshthi" }
				],
	layout:[	
				]
	},
  
khoj:{ script:"Khojki", code:"Khoj", name:"", dates:"16thC – today", start:"1500", end:"", origin:"South Asia", current_usage:"liturgical",
	info:{ 		wikipedia:"Khojki", omniglot:"khojki" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Khojki" ],
	pickers:[	
				],
	fontkey:[	
				],
	layout:[	
				]
	},
  
sind:{ script:"Khudawadi", code:"Sind", name:"Khudawadi (Sindhi)", dates:"1868 – 20thC", start:"1868", end:"2000", origin:"South Asia", current_usage:"",
	info:{ 		wikipedia:"Khudabadi_script", omniglot:"sindhi" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Khudawadi" ],
	pickers:[	
				],
	fontkey:[	
				],
	layout:[	
				]
	},
  
lepc:{ script:"Lepcha", code:"Lepc", name:"Lepcha (Róng)", dates:"1720 – today", start:"1720", end:"", origin:"South Asia", current_usage:"small community",
	info:{ 		wikipedia:"Lepcha_alphabet", omniglot:"lepcha" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Lepcha" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-south-asian.html#lepcha" }
				],
	layout:[	
				]
	},
  
limb:{ script:"Limbu", code:"Limb", name:"", dates:"19thC – today", start:"1800", end:"", origin:"South Asia", current_usage:"small community",
	info:{ 		wikipedia:"Limbu_alphabet", omniglot:"limbu" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Limbu" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-south-asian.html#limbu" }
				],
	layout:[	
				]
	},
  
mahj:{ script:"Mahajani", code:"Mahj", name:"", dates:"19thC – 20thC", start:"1800", end:"2000", origin:"South Asia", current_usage:"",
	info:{ 		wikipedia:"Mahajani", omniglot:"" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Mahajani" ],
	pickers:[	
				],
	fontkey:[	
				],
	layout:[	
				]
	},
  
mlym:{ script:"Malayalam", code:"Mlym", name:"", dates:"13thC – today", start:"1200", end:"", origin:"South Asia", current_usage:"",
	info:{ 		wikipedia:"Malayalam_alphabet", omniglot:"malayalam" }, 
	local: [	{ name:"Introduction to Indic Scripts", url:"indic-overview" }
				],
	unicode:{ 	}, 
	charts:[	"Malayalam" ],
	pickers:[	{ name:"Malayalam", url:"malayalam" }
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-south-asian.html#malayalam" }
				],
	layout:[	
				]
	},
  
gonm:{ script:"Masaram Gondi", code:"Gonm", name:"", dates:"20thC – today", start:"1900", end:"", origin:"South Asia", current_usage:"endangered",
	info:{ 		wikipedia:"Gondi_writing", omniglot:"gondi" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Masaram Gondi" ],
	pickers:[	
				],
	fontkey:[	
				],
	layout:[	
				]
	},

mtei:{ script:"Meetei Mayek", code:"Mtei", name:"Meetei Mayek (Meithei, Meitei)", dates:"11thC – today", start:"1000", end:"", origin:"South Asia", current_usage:"resurgent",
	info:{ 		wikipedia:"Meetei_Mayek", omniglot:"manipuri" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Meetei Mayek", "Meetei Mayek Extensions" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-south-asian.html#meeteimayek" }
				],
	layout:[	
				]
	},
  
modi:{ script:"Modi", code:"Modi", name:"Modi, Moḍī", dates:"17thC – today", start:"1600", end:"", origin:"South Asia", current_usage:"resurgent",
	info:{ 		wikipedia:"Modi_alphabet", omniglot:"modi" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Modi" ],
	pickers:[	
				],
	fontkey:[	
				],
	layout:[	
				]
	},
  
mroo:{ script:"Mro", code:"Mroo", name:"Mro, Mru", dates:"1980s – today", start:"1980", end:"", origin:"South Asia", current_usage:"endangered",
	info:{ 		wikipedia:"Mru_language", omniglot:"mro" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Mro" ],
	pickers:[	
				],
	fontkey:[	
				],
	layout:[	
				]
	},
  
mult:{ script:"Multani", code:"Mult", name:"", dates:"16thC – 20thC", start:"1500", end:"2000", origin:"South Asia", current_usage:"",
	info:{ 		wikipedia:"Multani_alphabet", omniglot:"" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Multani" ],
	pickers:[	
				],
	fontkey:[	
				],
	layout:[	
				]
	},
  
olck:{ script:"Ol Chiki", code:"Olck", name:"Ol Chiki (Ol Cemet', Ol, Santali)", dates:"1920s – today", start:"1920", end:"", origin:"South Asia", current_usage:"",
	info:{ 		wikipedia:"Ol_Chiki_alphabet", omniglot:"santali" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Ol Chiki" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-south-asian.html#olchiki" }
				],
	layout:[	
				]
	},

orya:{ script:"Oriya", code:"Orya", name:"Oriya (Odia)", dates:"1051 – today", start:"1051", end:"", origin:"South Asia", current_usage:"",
	info:{ 		wikipedia:"Odia_alphabet", omniglot:"oriya" }, 
	local: [	{ name:"Introduction to Indic Scripts", url:"indic-overview" }
				],
	unicode:{ 	}, 
	charts:[	"Oriya" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-south-asian.html#oriya" }
				],
	layout:[	
				]
	},
  
saur:{ script:"Saurashtra", code:"Saur", name:"", dates:"19thC – today", start:"1800", end:"", origin:"South Asia", current_usage:"small community",
	info:{ 		wikipedia:"Saurashtra_alphabet", omniglot:"" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Saurashtra" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-south-asian.html#saurashtra" }
				],
	layout:[	
				]
	},
  
shrd:{ script:"Sharada", code:"Shrd", name:"Sharada (Śāradā)", dates:"8thC – 20thC", start:"700", end:"2000", origin:"South Asia", current_usage:"",
	info:{ 		wikipedia:"Sharada_script", omniglot:"sharda" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Sharada" ],
	pickers:[	
				],
	fontkey:[	
				],
	layout:[	
				]
	},
  
sidd:{ script:"Siddham", code:"Sidd", name:"Siddham (Siddhaṃ, Siddhamātṛkā)", dates:"7thC – today", start:"600", end:"", origin:"South Asia", current_usage:"liturgical",
	info:{ 		wikipedia:"Siddham_alphabet", omniglot:"siddham" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Siddham" ],
	pickers:[	
				],
	fontkey:[	
				],
	layout:[	
				]
	},
  
sinh:{ script:"Sinhala", code:"Sinh", name:"", dates:"BCE 3rdC – today", start:"-300", end:"", origin:"South Asia", current_usage:"",
	info:{ 		wikipedia:"Sinhala_alphabet", omniglot:"sinhala" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Sinhala", "Sinhala Archaic Numbers" ],
	pickers:[	{ name:"Sinhala", url:"sinhala" }
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-south-asian.html#sinhala" }
				],
	layout:[	
				]
	},
  
sora:{ script:"Sora Sompeng", code:"Sora", name:"", dates:"1936 – today", start:"1936", end:"", origin:"South Asia", current_usage:"liturgical",
	info:{ 		wikipedia:"Sora Sompeng", omniglot:"sorangsompeng" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Sora Sompeng" ],
	pickers:[	
				],
	fontkey:[	
				],
	layout:[	
				]
	},
  
sylo:{ script:"Syloti Nagri", code:"Sylo", name:"", dates:"14thC – today", start:"1300", end:"", origin:"South Asia", current_usage:"endangered",
	info:{ 		wikipedia:"Syloti Nagri", omniglot:"syloti" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Syloti Nagri" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-south-asian.html#sylotinagri" }
				],
	layout:[	
				]
	},
  
takr:{ script:"Takri", code:"Takr", name:"Takri (Ṭākrī, Ṭāṅkrī)", dates:"17thC – 20thC", start:"1600", end:"2000", origin:"South Asia", current_usage:"",
	info:{ 		wikipedia:"Takri_alphabet", omniglot:"takri" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Takri" ],
	pickers:[	
				],
	fontkey:[	
				],
	layout:[	
				]
	},
  
taml:{ script:"Tamil", code:"Taml", name:"", dates:"7thC – today", start:"600", end:"", origin:"South Asia", current_usage:"",
	info:{ 		wikipedia:"Tamil_script", omniglot:"tamil" }, 
	local: [	{ name:"Introduction to Indic Scripts", url:"indic-overview" }
				],
	unicode:{ 	}, 
	charts:[	"Tamil" ],
	pickers:[	{ name:"Tamil", url:"tamil" }
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-south-asian.html#tamil" }
				],
	layout:[	
				]
	},
  
telu:{ script:"Telugu", code:"Telu", name:"", dates:"13thC – today", start:"1200", end:"", origin:"South Asia", current_usage:"",
	info:{ 		wikipedia:"Telugu_alphabet", omniglot:"telugu" }, 
	local: [	{ name:"Introduction to Indic Scripts", url:"indic-overview" }
				],
	unicode:{ 	}, 
	charts:[	"Telugu" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-south-asian.html#telugu" }
				],
	layout:[	
				]
	},
  
thaa:{ script:"Thaana", code:"Thaa", name:"", dates:"18thC – today", start:"1700", end:"", origin:"South Asia", current_usage:"",
	info:{ 		wikipedia:"Thaana", omniglot:"thaana" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Thaana" ],
	pickers:[	{ name:"Thaana", url:"thaana" }
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-south-asian.html#thaana" }
				],
	layout:[	
				]
	},
  
tirh:{ script:"Tirhuta", code:"Tirh", name:"", dates:"13thC – today", start:"1200", end:"", origin:"South Asia", current_usage:"endangered",
	info:{ 		wikipedia:"Tirhuta", omniglot:"" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Tirhuta" ],
	pickers:[	
				],
	fontkey:[	
				],
	layout:[	
				]
	},
  
wara:{ script:"Warang Citi", code:"Wara", name:"Warang Citi (Varang Kshiti)", dates:"1950s – today", start:"1950", end:"", origin:"South Asia", current_usage:"endangered",
	info:{ 		wikipedia:"Varang_Kshiti", omniglot:"varangkshiti" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Warang Citi" ],
	pickers:[	
				],
	fontkey:[	
				],
	layout:[	
				]
	},
  
mani:{ script:"Manichaean", code:"Mani", name:"", dates:"3rdC – 10thC", start:"200", end:"1000", origin:"Central Asia", current_usage:"",
	info:{ 		wikipedia:"Manichaean_alphabet", omniglot:"http://www.omniglot.com/writing/manichaean.php" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Manichaean" ],
	pickers:[	
				],
	fontkey:[	
				],
	layout:[	
				]
	},
  
mong:{ script:"Mongolian", code:"Mong", name:"", dates:"13thC – today", start:"1200", end:"", origin:"Central Asia", current_usage:"",
	info:{ 		wikipedia:"Mongolian_alphabet", omniglot:"mongolian" }, 
	local: [	{ name:"Mongolian Variant Forms", url:"https://r12a.github.io/mongolian-variants/" }
				],
	unicode:{ 	}, 
	charts:[	"Mongolian" ],
	pickers:[	{ name:"Mongolian", url:"mongolian" }
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-central-asian.html#mongolian" }
				],
	layout:[	
				],
	other:[		{ name:" Traditional Mongolian Script in the ISO/IEC 10646 and Unicode Standards (part 1), part 2, part 3", url:"http://www.babelstone.co.uk/Mongolian/Report170.pdf" },
				{ name:" Quejingzhabu Specification 9.0", url:"http://www.babelstone.co.uk/Mongolian/Specification9.pdf" }
				]
	},
  
orkh:{ script:"Old Turkic", code:"Orkh", name:"Old Turkic, Orkhon Runic", dates:"8thC – 9thC", start:"700", end:"900", origin:"Central Asia", current_usage:"",
	info:{ 		wikipedia:"Old_Turkic_alphabet", omniglot:"orkhon" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Old Turkic" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-central-asian.html#oldturkicfonts" }
				],
	layout:[	
				],
	other:[	
				]
	},
  
phag:{ script:"Phags-Pa", code:"Phag", name:"", dates:"1260 – 1368", start:"1260", end:"1368", origin:"Central Asia", current_usage:"",
	info:{ 		wikipedia:"Phags-pa_script", omniglot:"phagspa" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Phags-Pa" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-central-asian.html#phagspa" }
				],
	layout:[	
				],
	other:[	
				]
	},
  
soyo:{ script:"Soyombo", code:"Soyo", name:"", dates:"17thC", start:"1600", end:"1600", origin:"Central Asia", current_usage:"",
	info:{ 		wikipedia:"Soyombo_alphabet", omniglot:"soyombo" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Soyombo" ],
	pickers:[	
				],
	fontkey:[	
				],
	layout:[	
				],
	other:[	
				]
	},
  
tibt:{ script:"Tibetan", code:"Tibt", name:"", dates:"6thC – today", start:"500", end:"", origin:"Central Asia", current_usage:"",
	info:{ 		wikipedia:"Tibetan_alphabet", omniglot:"tibetan" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Tibetan" ],
	pickers:[	{ name:"Tibetan", url:"tibetan" }
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-central-asian.html#tibetan" }
				],
	layout:[	{ name:"Tibetan emphasis (blog)", 
                url:"https://r12a.github.io/blog/200610.html#20070719" },
				{ name:"Formatting rules for Tibetan text", url:"http://digitaltibetan.org/index.php/Formatting_rules_for_Tibetan_text" }
				],
	other:[		{ name:"Creating and Supporting OpenType Fonts for Tibetan Script", url:"https://www.microsoft.com/typography/OpenTypeDev/tibetan/intro.htm" }
				]
	},
  
zanb:{ script:"Zanabazar Square", code:"Zanb", name:"", dates:"17thC", start:"1700", end:"1800", origin:"Central Asia", current_usage:"",
	info:{ 		wikipedia:"Mongolian_writing_systems", omniglot:"" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Zanabazar Square" ],
	pickers:[	
				],
	fontkey:[	
				],
	layout:[	
				],
	other:[		
				]
	},
  
cham:{ script:"Cham", code:"Cham", name:"", dates:"10thC – today", start:"900", end:"", origin:"Southeast Asia", current_usage:"",
	info:{ 		wikipedia:"Cham_script", omniglot:"cham" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Cham" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-southeast-asian.html#cham" }
				],
	layout:[	
				],
	other:[		
				]
	},
  
kali:{ script:"Kayah Li", code:"Kali", name:"", dates:"1962 – today", start:"1962", end:"", origin:"Southeast Asia", current_usage:"small community",
	info:{ 		wikipedia:"Kayah Li_alphabet", omniglot:"kayahli" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Kayah Li" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-southeast-asian.html#kayahli" }
				],
	layout:[	
				],
	other:[		
				]
	},
  
khmr:{ script:"Khmer", code:"Khmr", name:"", dates:"6thC – today", start:"500", end:"", origin:"Southeast Asia", current_usage:"",
	info:{ 		wikipedia:"Khmer_script", omniglot:"khmer" }, 
	local: [ { name:"Khmer spreadsheet", url:"https://docs.google.com/spreadsheets/d/1gh6d8_Slzcx1JoRNg07cNG9095csaO7V5zeogjxj7v4/edit#gid=0" }
				],
	unicode:{ 	}, 
	charts:[	"Khmer", "Khmer Symbols" ],
	pickers:[	{ name:"Khmer", url:"khmer" }
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-southeast-asian.html#khmer" }
				],
	layout:[	
				],
	other:[		
				]
	},
  
laoo:{ script:"Lao", code:"Laoo", name:"", dates:"16thC – today", start:"1500", end:"", origin:"Southeast Asia", current_usage:"",
	info:{ 		wikipedia:"Lao_script", omniglot:"lao" }, 
	local: [ { name:"Lao spreadsheet", url:"https://docs.google.com/spreadsheets/d/1dKKaAVSsEFBE36-Zfm-kpF1nOe_AEMRQYd0ntfRHUAM/edit#gid=0" }
				],
	unicode:{ 	}, 
	charts:[	"Lao" ],
	pickers:[	{ name:"Lao", url:"lao" }
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-southeast-asian.html#lao" }
				],
	layout:[	
				],
	other:[		
				]
	},
  
mymr:{ script:"Myanmar", code:"Mymr", name:"Myanmar (Burmese)", dates:"11thC – today", start:"1000", end:"", origin:"Southeast Asia", current_usage:"",
	info:{ 		wikipedia:"Burmese_alphabet", omniglot:"burmese" }, 
	local: [ { name:"Burmese spreadsheet", url:"https://docs.google.com/spreadsheets/d/1KsEznv6RtvNPJrVZChvoReeFbPUF06qwKxTXDQ-aJ0s/edit#gid=0" },
		{ name:"Shan spreadsheet", url:"https://docs.google.com/spreadsheets/d/1IrqLDvl72CCj0QuRD1XCmypmwm0HAWmuK1Gl_ia7OpY/edit#gid=0" }],
	unicode:{ 	}, 
	charts:[	"Myanmar", "Myanmar Extended-A", "Myanmar Extended-B" ],
	pickers:[	{ name:"Burmese", url:"myanmar" },
		{ name:"Shan", url:"shan" }
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-southeast-asian.html#burmese" }
				],
	layout:[	
				],
	other:[		{ name:"Burmese divergence on the Web (blog)", url:"https://r12a.github.io/blog/201408.html#20140822" }
				]
	},
  
talu:{ script:"New Tai Lue", code:"Talu", name:"", dates:"20thC – today", start:"1900", end:"", origin:"Southeast Asia", current_usage:"",
	info:{ 		wikipedia:"New_Tai_Lue_alphabet", omniglot:"tailue" }, 
	local: [	{ name:"New Tai Lue spreadsheet", url:"https://docs.google.com/spreadsheets/d/1tAATcuoo9y1H-BbqiZ9VRT8KWzQmQP2JVKEECN0Wlz4/edit#gid=0" }
				],
	unicode:{ 	}, 
	charts:[	"New Tai Lue" ],
	pickers:[	{ name:"New Tai Lue", url:"newtailue" }
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-southeast-asian.html#newtailue" }
				],
	layout:[	
				],
	other:[		
				]
	},
  
hmng:{ script:"Pahawh Hmong", code:"Hmng", name:"", dates:"1959 – today", start:"1959", end:"", origin:"Southeast Asia", current_usage:"",
	info:{ 		wikipedia:"Pahawh Hmong", omniglot:"pahawhhmong" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Pahawh Hmong" ],
	pickers:[	
				],
	fontkey:[	{ name:"Gallery of Unicode Fonts", url:"http://www.wazu.jp/#PahawhHmong" }
				],
	layout:[	
				],
	other:[		
				]
	},
  
pauc:{ script:"Pau Cin Hau", code:"Pauc", name:"", dates:"1902 – today", start:"1902", end:"", origin:"Southeast Asia", current_usage:"liturgical",
	info:{ 		wikipedia:"Pau Cin Hau", omniglot:"" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Pau Cin Hau" ],
	pickers:[	
				],
	fontkey:[	
				],
	layout:[	
				],
	other:[		
				]
	},
  
tale:{ script:"Tai Le", code:"Tale", name:"", dates:"1954 – today", start:"1954", end:"", origin:"Southeast Asia", current_usage:"",
	info:{ 		wikipedia:"Tai_Le_alphabet", omniglot:"tainua" }, 
	local: [	{ name:"Tai Le spreadsheet", url:"https://docs.google.com/spreadsheets/d/16Ziej_ZPHxTOaP2PJTL3cMHXXhTUIjDIc2au4z7N6lE/edit?usp=sharing" }
				],
	unicode:{ 	}, 
	charts:[	"Tai Le" ],
	pickers:[	{ name:"Tai Le", url:"taile" }
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-southeast-asian.html#taile" }
				],
	layout:[	
				],
	other:[		
				]
	},
  
lana:{ script:"Tai Tham", code:"Lana", name:"Tai Tham (Lanna)", dates:"13thC – today", start:"1200", end:"", origin:"Southeast Asia", current_usage:"",
	info:{ 		wikipedia:"Tai_Tham_alphabet", omniglot:"lanna" }, 
	local: [	{ name:"Tai Tham spreadsheet", url:"https://docs.google.com/spreadsheets/d/1BukTNIC7TdPAjMEjEQRmSeTP_atjkA3x62f8nTdOfPE/edit#gid=0" }
				],
	unicode:{ 	}, 
	charts:[	"Tai Tham" ],
	pickers:[	{ name:"Tai Tham", url:"taitham" },
		{ name:"Northern Thai", url:"northernthai" },
		{ name:"Tai Khün", url:"taikhuen" }
		],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-southeast-asian.html#taitham" }
				],
	layout:[	
				],
	other:[		
				]
	},
  
tavt:{ script:"Tai Viet", code:"Tavt", name:"", dates:"16thC – today", start:"1500", end:"", origin:"Southeast Asia", current_usage:"",
	info:{ 		wikipedia:"Tai Viet_script", omniglot:"taidam" }, 
	local: [	{ name:"Tai Viet spreadsheet", url:"https://docs.google.com/spreadsheets/d/1_n0S4ZE27lrZ9cAm_Egem80-dv-CGZhLhUrgyw3nUlU/edit#gid=0" }
				],
	unicode:{ 	}, 
	charts:[	"Tai Viet" ],
	pickers:[	{ name:"Tai Viet", url:"taiviet" }
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-southeast-asian.html#taiviet" }
				],
	layout:[	
				],
	other:[		
				]
	},
  
thai:{ script:"Thai", code:"Thai", name:"", dates:"1283 – today", start:"1283", end:"", origin:"Southeast Asia", current_usage:"",
	info:{ 		wikipedia:"Thai_alphabet", omniglot:"thai" }, 
	local: [ { name:"Thai spreadsheet", url:"https://docs.google.com/spreadsheets/d/1vQDoMAo_gTq9c50P_YshbWVH0zeMIqWWTIEdRNWl-Ow/edit#gid=0" }
				],
	unicode:{ 	}, 
	charts:[	"Thai" ],
	pickers:[	{ name:"Thai", url:"thai" }
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-southeast-asian.html#thai" }
				],
	layout:[	{ name:"Thai line breaking in Firefox", url:"https://r12a.github.io/blog/200707.html#20070717" }
				],
	other:[		
				]
	},
  
bali:{ script:"Balinese", code:"Bali", name:"", dates:"11thC – today", start:"1000", end:"", origin:"Indonesia & Oceania", current_usage:"little used",
	info:{ 		wikipedia:"Balinese_script", omniglot:"balinese" }, 
	local: [ { name:"Balinese spreadsheet", url:"https://docs.google.com/spreadsheets/d/1vQDoMAo_gTq9c50P_YshbWVH0zeMIqWWTIEdRNWl-Ow/edit#gid=0" }
				],
	unicode:{ 	}, 
	charts:[	"Balinese" ],
	pickers:[	{ name:"Balinese", url:"balinese" }
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-southeast-asian.html#balinese" }
				],
	layout:[	
				],
	other:[		
				]
	},
  
batk:{ script:"Batak", code:"Batk", name:"", dates:"14thC – today", start:"1300", end:"", origin:"Indonesia & Oceania", current_usage:"little used",
	info:{ 		wikipedia:"Batak_alphabet", omniglot:"batak" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Batak" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-southeast-asian.html#batak" }
				],
	layout:[	
				],
	other:[		
				]
	},

bugi:{ script:"Buginese", code:"Bugi", name:"", dates:"14thC – today", start:"1300", end:"", origin:"Indonesia & Oceania", current_usage:"",
	info:{ 		wikipedia:"Buginese_script", omniglot:"lontara" }, 
	local: [ { name:"Buginese spreadsheet", url:"https://docs.google.com/spreadsheets/d/1ePNmpZfL3PYtQFgk8IZR_jwF4G4nxIspvLr95oEAFqU/edit#gid=0" }
				],
	unicode:{ 	}, 
	charts:[	"Buginese" ],
	pickers:[	{ name:"Buginese", url:"buginese" }
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-southeast-asian.html#buginese" }
				],
	layout:[	
				],
	other:[		
				]
	},
  
buhd:{ script:"Buhid", code:"Buhd", name:"", dates:"18thC – today", start:"1700", end:"", origin:"Indonesia & Oceania", current_usage:"",
	info:{ 		wikipedia:"Buhid_alphabet", omniglot:"buhid" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Buhid" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-philippine.html#buhid" }
				],
	layout:[	
				],
	other:[		
				]
	},
	   
hano:{ script:"Hanunoo", code:"Hano", name:"Hanunoo (Hanunóo)", dates:"18thC – today", start:"1700", end:"", origin:"Indonesia & Oceania", current_usage:"",
	info:{ 		wikipedia:"Hanun%C3%B3'o_alphabet", omniglot:"hanunoo" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Hanunoo" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-philippine.html#hanunoo" }
				],
	layout:[	
				],
	other:[		
				]
	},
  
java:{ script:"Javanese", code:"Java", name:"", dates:"17thC – today", start:"1600", end:"", origin:"Indonesia & Oceania", current_usage:"endangered",
	info:{ 		wikipedia:"Javanese_alphabet", omniglot:"javanese" }, 
	local: [ { name:"Javanese spreadsheet", url:"https://docs.google.com/spreadsheets/d/1dkVkKt0Fxm3CDOyT90KLzfPsZ4XuchtL71iUyuG6uF0/edit#gid=0" }
				],
	unicode:{ 	}, 
	charts:[	"Javanese" ],
	pickers:[	{ name:"Javanese", url:"javanese" }
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-southeast-asian.html#javanese" }
				],
	layout:[	
				],
	other:[		
				]
	},
  
rjng:{ script:"Rejang", code:"Rjng", name:"Rejang (Redjang, Kaganga)", dates:"18thC – today", start:"1700", end:"", origin:"Indonesia & Oceania", current_usage:"small community",
	info:{ 		wikipedia:"Rejang_alphabet", omniglot:"redjang" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Rejang" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-southeast-asian.html#rejang" }
				],
	layout:[	
				],
	other:[		
				]
	},
  
sund:{ script:"Sundanese", code:"Sund", name:"", dates:"14thC – today", start:"1300", end:"", origin:"Indonesia & Oceania", current_usage:"",
	info:{ 		wikipedia:"Sundanese_alphabet", omniglot:"http://www.omniglot.com/writing/sundanese.php" }, 
	local: [ { name:"Sundanese spreadsheet", url:"https://docs.google.com/spreadsheets/d/1XttEh64YT4c-Js72ljJ2tEuLjyh3Po-VQetVFUboObg/edit#gid=0" }
				],
	unicode:{ 	}, 
	charts:[	"Sundanese", "Sundanese Supplement" ],
	pickers:[	{ name:"Sundanese", url:"sundanese" }
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-southeast-asian.html#sundanese" }
				],
	layout:[	
				],
	other:[		
				]
	},
  
tglg:{ script:"Tagalog", code:"Tglg", name:"Tagalog (Baybayin, Alibata)", dates:"15thC – 18thC", start:"1500", end:"1800", origin:"Indonesia & Oceania", current_usage:"",
	info:{ 		wikipedia:"Tagalog_alphabet", omniglot:"tagalog" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Tagalog" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-philippine.html#tagalog" }
				],
	layout:[	
				],
	other:[		
				]
	},
  
tagb:{ script:"Tagbanwa", code:"Tagb", name:"", dates:"18thC – today", start:"1700", end:"", origin:"Indonesia & Oceania", current_usage:"",
	info:{ 		wikipedia:"Tagbanwa_script", omniglot:"tagbanwa" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Tagbanwa" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-philippine.html#tagbanwa" }
				],
	layout:[	
				],
	other:[		
				]
	},
  
bopo:{ script:"Bopomofo", code:"Bopo", name:"", dates:"1911 – today", start:"1911", end:"", origin:"East Asia", current_usage:"mostly IME/ruby only",
	info:{ 		wikipedia:"Bopomofo", omniglot:"zhuyin" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Bopomofo", "Bopomofo Extended" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-east-asian.html#bopomofo" }
				],
	layout:[	
				],
	other:[		
				]
	},
  
hani:{ script:"Han", code:"Hani", name:"Han (Hanzi, Kanji, Hanja)", dates:"1stC – today", start:"100", end:"", origin:"East Asia", current_usage:"",
	info:{ 		wikipedia:"Chinese_characters", omniglot:"" }, 
	local: [	{ name:"Simplified vs Traditional", url:"http://r12a.github.io/scripts/chinese/" }
				],
	unicode:{ 	}, 
	charts:[	"CJK Unified Ideographs", "CJK Unified Ideographs Extension A", "CJK Unified Ideographs Extension B", "CJK Unified Ideographs Extension C", "CJK Unified Ideographs Extension D", "CJK Unified Ideographs Extension E", "CJK Unified Ideographs Extension F", "CJK Compatibility Ideographs", "CJK Compatibility Ideographs Supplement", "KangXi Radicals", "CJK Radicals Supplement", "CJK Strokes", "Ideographic Description Characters", "CJK Symbols and Punctuation", "Enclosed CJK Letters and Months", "Kanbun" ],
	pickers:[	
				],
	fontkey:[	{ name:"Gallery of Unicode Fonts (Simplified)", url:"http://www.wazu.jp/gallery/Fonts_ChineseSimplified.html" },
				{ name:"Gallery of Unicode Fonts (Traditional)", url:"http://www.wazu.jp/gallery/Fonts_ChineseTraditional.html" },
				{ name:"Alan Wood (Simplified)", url:"http://www.alanwood.net/unicode/fonts-east-asian.html#simplifiedchinese" },
				{ name:"Alan Wood (Traditional)", url:"http://www.alanwood.net/unicode/fonts-east-asian.html#traditionalchinese" },
				{ name:"OS default fonts (Simplified)", url:"/scripts/fontlist/#chinese-s" },
				{ name:"OS default fonts (Traditional)", url:"/scripts/fontlist/#chinese-t" }
				],
	layout:[	{ name:"Chinese Layout Requirements", url:"http://w3c.github.io/clreq/" }
				],
	other:[		
				]
	},
  
hang:{ script:"Hangul", code:"Hang", name:"Hangul (Hangŭl, Hangeul)", dates:"1444 – today", start:"1444", end:"", origin:"East Asia", current_usage:"",
	info:{ 		wikipedia:"Hangul", omniglot:"korean" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Hangul Syllables", "Hangul Jamo", "Hangul Compatibility Jamo", "Hangul Jamo Extended-A", "Hangul Jamo Extended-B" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-east-asian.html#korean" }
				],
	layout:[	{ name:"Hangul Layout Requirements", url:"http://w3c.github.io/klreq/" }
				],
	other:[		
				]
	},
  
jpan:{ script:"Kana", code:"Jpan", name:"Hiragana &amp; Katakana", dates:"8thC – today", start:"700", end:"", origin:"East Asia", current_usage:"",
	info:{ 		wikipedia:"Japanese_writing_system", omniglot:"japanese" }, 
	local: [	{ name:"Jukugo ruby (blog)", url:"https://r12a.github.io/blog/201002.html#20100924" }
				],
	unicode:{ 	}, 
	charts:[	"Hiragana", "Katakana", "Katakana Phonetic Extensions", "Kana Supplement", "Kana Extended-A" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-east-asian.html#japanese" }
				],
	layout:[	{ name:"Japanese Layout Requirements", url:"http://w3c.github.io/jlreq/" }
				],
	other:[		
				]
	},
  
lisu:{ script:"Lisu", code:"Lisu", name:"Lisu (Fraser)", dates:"1915 – today", start:"1915", end:"", origin:"East Asia", current_usage:"",
	info:{ 		wikipedia:"Fraser_alphabet", omniglot:"fraser" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Lisu" ],
	pickers:[	{ name:"Lisu", url:"lisu" }
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-east-asian.html#lisu" }
				],
	layout:[	
				],
	other:[		
				]
	},
  
plrd:{ script:"Miao", code:"Plrd", name:"Miao (Pollard)", dates:"1904 – today", start:"1904", end:"", origin:"East Asia", current_usage:"",
	info:{ 		wikipedia:"Pollard_script", omniglot:"pollardmiao" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Miao" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-east-asian.html#miao" }
				],
	layout:[	
				],
	other:[		
				]
	},
  
nshu:{ script:"Nushu", code:"Nshu", name:"Nüshu", dates:"19thC – today", start:"1800", end:"", origin:"East Asia", current_usage:"endangered",
	info:{ 		wikipedia:"Nüshu_script", omniglot:"" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Nushu" ],
	pickers:[	
				],
	fontkey:[	
				],
	layout:[	
				],
	other:[		
				]
	},
  
yiii:{ script:"Yi", code:"Yiii", name:"", dates:"7thC – today", start:"600", end:"", origin:"East Asia", current_usage:"",
	info:{ 		wikipedia:"Yi_script", omniglot:"yi" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Yi Syllables", "Yi Radicals" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-east-asian.html#yi" }
				],
	layout:[	
				],
	other:[		
				]
	},

cher:{ script:"Cherokee", code:"Cher", name:"", dates:"1821 – today", start:"1821", end:"", origin:"Americas", current_usage:"",
	info:{ 		wikipedia:"Cherokee_script", omniglot:"cherokee" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Cherokee", "Cherokee Supplement" ],
	pickers:[	{ name:"Cherokee", url:"cherokee" }
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-american.html#cherokee" }
				],
	layout:[	
				],
	other:[		
				]
	},

dsrt:{ script:"Deseret", code:"Dsrt", name:"", dates:"1850 – 1869", start:"1850", end:"1869", origin:"Americas", current_usage:"",
	info:{ 		wikipedia:"Deseret_alphabet", omniglot:"deseret" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Deseret" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-american.html#deseret" }
				],
	layout:[	
				],
	other:[		
				]
	},

cans:{ script:"UCAS", code:"Cans", name:"Unified Canadian Aboriginal Syllabics", dates:"1830s – today", start:"1830", end:"", origin:"Americas", current_usage:"",
	info:{ 		wikipedia:"Canadian_Aboriginal_syllabics", omniglot:"ucas" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Unified Canadian Aboriginal Syllabics", "Unified Canadian Aboriginal Syllabics Extended" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-american.html#canadiansyllabics" }
				],
	layout:[	
				],
	other:[		
				]
	},
	   
osge:{ script:"Osage", code:"Osge", name:"", dates:"2006 – today", start:"2006", end:"", origin:"Americas", current_usage:"",
	info:{ 		wikipedia:"Osage_alphabet", omniglot:"http://www.omniglot.com/writing/osage.php" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Osage" ],
	pickers:[	
				],
	fontkey:[	
				],
	layout:[	
				],
	other:[		
				]
	},
	   
newa:{ script:"Newa", code:"Newa", name:"Newa (Newar, Newari, Nepāla lipi)", dates:"10thC – today", start:"900", end:"", origin:"South Asia", current_usage:"",
	info:{ 		wikipedia:"Prachalit_Nepal_alphabet", omniglot:"" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Newa" ],
	pickers:[	
				],
	fontkey:[	
				],
	layout:[	
				],
	other:[		
				]
	},
	   
bhks:{ script:"Bhaiksuki", code:"Bhks", name:"", dates:"11thC – 12thC", start:"1000", end:"1200", origin:"South Asia", current_usage:"",
	info:{ 		wikipedia:"Bhaiksuki_alphabet", omniglot:"" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Bhaiksuki" ],
	pickers:[	
				],
	fontkey:[	
				],
	layout:[	
				],
	other:[		
				]
	},
	   
marc:{ script:"Marchen", code:"Marc", name:"", dates:"16thC – 20thC", start:"1500", end:"2000", origin:"Central Asia", current_usage:"",
	info:{ 		wikipedia:"Zhang-Zhung_language#Scripts", omniglot:"" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Marchen" ],
	pickers:[	
				],
	fontkey:[	
				],
	layout:[	
				],
	other:[		
				]
	},
	   
tang:{ script:"Tangut", code:"Tang", name:"", dates:"1036 – 16thC", start:"1036", end:"1600", origin:"East Asia", current_usage:"",
	info:{ 		wikipedia:"Tangut_script", omniglot:"tangut" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Tangut" ],
	pickers:[	
				],
	fontkey:[	
				],
	layout:[	
				],
	other:[		
				]
	},
	   
adlm:{ script:"Adlam", code:"Adlm", name:"", dates:"1980s – today", start:"1980", end:"", origin:"Africa", current_usage:"",
	info:{ 		wikipedia:"Fula_alphabets#Adlam_alphabet", omniglot:"adlam" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Adlam" ],
	pickers:[	
				],
	fontkey:[	
				],
	layout:[	
				],
	other:[		
				]
	},
	   
medf:{ script:"Medefaidrin", code:"Medf", name:"", dates:"1930s – today", start:"1930", end:"", origin:"Africa", current_usage:"liturgical, small community",
	info:{ 		wikipedia:"Medefaidrin", omniglot:"" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Medefaidrin" ],
	pickers:[	
				],
	fontkey:[	
				],
	layout:[	
				],
	other:[		
				]
	},
   
sogo:{ script:"Old Sogdian", code:"Sogo", name:"", dates:"3rdC – 6thC", start:"200", end:"600", origin:"Central Asia", current_usage:"",
	info:{ 		wikipedia:"Sogdian_alphabet", omniglot:"sogdian" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Old Sogdian" ],
	pickers:[	
				],
	fontkey:[	
				],
	layout:[	
				],
	other:[		
				]
	},
   
sogd:{ script:"Sogdian", code:"Sogd", name:"", dates:"7thC – 14thC", start:"600", end:"1400", origin:"Central Asia", current_usage:"",
	info:{ 		wikipedia:"Sogdian_alphabet", omniglot:"sogdian" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Sogdian" ],
	pickers:[	
				],
	fontkey:[	
				],
	layout:[	
				],
	other:[		
				]
	},
   
'dogr':{ script:"Dogra", code:"Dogr", name:"", dates:"15thC – 20thC", start:"1400", end:"2000", origin:"South Asia", current_usage:"",
	info:{ 		wikipedia:"Dogri_language", omniglot:"" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Dogra" ],
	pickers:[	
				],
	fontkey:[	
				],
	layout:[	
				],
	other:[		
				]
	},
   
'rohg':{ script:"Hanifi Rohingya", code:"Rohg", name:"", dates:"20thC – today", start:"1900", end:"", origin:"Southeast Asia", current_usage:"endangered",
	info:{ 		wikipedia:"Hanifi_Rohingya_script", omniglot:"rohingya.htm#hanifi" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Hanifi Rohingya" ],
	pickers:[	
				],
	fontkey:[	
				],
	layout:[	
				],
	other:[		
				]
	},
   
'gong':{ script:"Gunjala Gondi", code:"Gong", name:"", dates:"18thC", start:"1700", end:"1800", origin:"South Asia", current_usage:"isolated manuscripts",
	info:{ 		wikipedia:"Gunjala_Gondi_Lipi", omniglot:"" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Gunjala Gondi" ],
	pickers:[	
				],
	fontkey:[	
				],
	layout:[	
				],
	other:[		
				]
	},
   
'maka':{ script:"Makasar", code:"Maka", name:"", dates:"18thC – 20thC", start:"1700", end:"2000", origin:"Indonesia & Oceania", current_usage:"",
	info:{ 		wikipedia:"Makasar_(Unicode_block)", omniglot:"" }, 
	local: [ { name:"Makasar spreadsheet", url:"https://docs.google.com/spreadsheets/d/1MsapkSQaa7NWiAWMAhvX6xe8ZCMVhkbJ41NCi-D9aKA/edit#gid=0" }
				],
	unicode:{ 	}, 
	charts:[	"Makasar" ],
	pickers:[	{ name:"Makasar", url:"makasar" }
				],
	fontkey:[	
				],
	layout:[	
				],
	other:[		
				]
	},
   
'nand':{ script:"Nandinagari", code:"Nand", name:"", dates:"8thC – 18thC", start:"800", end:"1800", origin:"South Asia", current_usage:"",
	info:{ 		wikipedia:"Elymaic", omniglot:"" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Nandinagari" ],
	pickers:[	
				],
	fontkey:[	
				],
	layout:[	
				],
	other:[		
				]
	},
   
'elym':{ script:"Elymaic", code:"Elym", name:"", dates:"BCE 5thC – BCE 3rdC", start:"-500", end:"-300", origin:"West Asia", current_usage:"",
	info:{ 		wikipedia:"Elymaic", omniglot:"" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Elymaic" ],
	pickers:[	
				],
	fontkey:[	
				],
	layout:[	
				],
	other:[		
				]
	},
   
'hmnp':{ script:"Nyiakeng Puachue Hmong", code:"Hmnp", name:"", dates:"1980s – today", start:"1980", end:"", origin:"Southeast Asia", current_usage:"small community",
	info:{ 		wikipedia:"https://en.wikipedia.org/wiki/Hmong_writing#Nyiakeng_Puachue_Hmong", omniglot:"" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Nyiakeng_Puachue_Hmong" ],
	pickers:[	
				],
	fontkey:[	
				],
	layout:[	
				],
	other:[		
				]
	},
   
'wcho':{ script:"Wancho", code:"Wcho", name:"", dates:"2001 – today", start:"2001", end:"", origin:"West Asia", current_usage:"small community",
	info:{ 		wikipedia:"Wancho_language", omniglot:"" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Wancho" ],
	pickers:[	
				],
	fontkey:[	
				],
	layout:[	
				],
	other:[		
				]
	},
   
'xxx':{ script:"Limbu", code:"xxxx", name:"", dates:"3rdC – today", start:"300", end:"", origin:"West Asia", current_usage:"",
	info:{ 		wikipedia:"Limbu_alphabet", omniglot:"limbu" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Limbu" ],
	pickers:[	{ name:"Makasar", url:"makasar" }
				],
	fontkey:[	
				],
	layout:[	
				],
	other:[		
				]
	},


}


