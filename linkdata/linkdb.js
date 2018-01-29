var scriptNotesSet= new Set(['armenian','arabic', 'balinese', 'bengali','buginese', 'cherokee', 'devanagari', 'ethiopic', 'greek', 'han', 'hangul', 'hebrew', 'javanese', 'kana', 'khmer','lao','mandaic','myanmar', 'nko', 'sinhala', 'sundanese', 'syriac', 'tamil', 'thaana', 'thai', 'tibetan', 'tifinagh'])

var charNotesSet= new Set(['arabic','armenian', 'balinese','bengali','buginese', 'cherokee', 'devanagari','ethiopic','greek','hebrew', 'javanese', 'khmer','lao','latin','lisu','malayalam','mandaic','mongolian','myanmar', 'nko', 'sinhala', 'sundanese', 'syriac', 'tamil','thaana', 'thai','tibetan','tifinagh'])

var compChartSet= new Set(['arabic','armenian', 'balinese', 'bengali', 'buginese', 'cherokee', 'cyrillic', 'devanagari', 'ethiopic', 'greek', 'gujarati', 'gurmukhi', 'han', 'hangul', 'hebrew', 'javanese', 'kana', 'kannada', 'khmer', 'lao', 'latin', 'malayalam', 'mandaic', 'mongolian', 'myanmar', 'nko', 'oriya', 'sinhala', 'sundanese', 'syriac', 'tamil', 'telugu', 'thaana', 'thai', 'tibetan', 'tifinagh', 'ucas'])

var examplePhraseSet = new Set(['arabic','armenian','canadian_unified_syllabics','cherokee','cyrillic','devanagari','ethiopic','greek','gurmukhi','han','hebrew','latin','khmer','hangul','mongolian','myanmar','telugu','tifinagh','thai','tibetan'])

var scriptSummarySet = new Set(['arabic','cyrillic','devanagari','greek','han','hangul','hebrew','kana','thai','tibetan'])

var googleFontSet= new Set(['arabic','armenian','avestan','balinese','bamum','batak','bengali','brahmi','buginese','buhid','ucas','carian','cham','cherokee','coptic','cuneiform','cypriot_syllabary','deseret','devanagari','egyptian_hieroglyphs','ethiopic','georgian','glagolitic','gothic','gujarati','gurmukhi','hanunoo','hebrew','aramaic','inscriptional_pahlavi','inscriptional_parthian','javanese','kaithi','kannada','kayah_li','kharoshthi','khmer','lao','lepcha','limbu','linear_b','lisu','lycian','lydian','malayalam','mandaic','meetei_mayek','mongolian','myanmar','nko','new_tai_lue','ogham','ol_chiki','old_italic','old_persian','old_south_arabian','old_turkic','oriya','osage', 'osmanya','phags-pa','phoenician','rejang','runic','samaritan','saurashtra','shavian','sinhala','sundanese','syloti_nagri','syriac','tagalog','tagbanwa','tai_le','tai_tham','tai_viet','tamil','telugu','thaana','thai','tibetan','tifinagh','ugaritic','vai','yi'])

var googleEASet= new Set([])

var gouFonts = { 'greek':'Greek', 'armenian':'Armenian', 'hebrew':'Hebrew', 'arabic':'Arabic', 'syriac':'Syriac', 'thaana':'Thaana', 'nko':'NKo', 'devanagari':'Devanagari', 'bengali':'Bengali', 'gurmukhi':'Gurmukhi', 'gujarati':'Gujarati', 'oriya':'Oriya', 'tamil':'Tamil', 'telugu':'Telugu', 'kannada':'Kannada', 'malayalam':'Malayalam', 'sinhala':'Sinhala', 'thai':'Thai', 'lao':'Lao', 'tibetan':'Tibetan', 'myanmar':'Myanmar', 'georgian':'Georgian', 'ethiopic':'Ethiopic', 'cherokee':'Cherokee', 'ucas':'Canadian', 'ogham':'Ogham', 'runic':'Runic', 'tagalog':'Tagalog', 'hanunoo':'Hanunoo', 'buhid':'Buhid', 'tagbanwa':'Tagbanwa', 'khmer':'Khmer', 'mongolian':'Mongolian', 'limbu':'Limbu', 'tai_le':'TaiLe', 'buginese':'Buginese', 'glagolitic':'Glagolitic', 'coptic':'Coptic', 'tifinagh':'Tifinagh', 'kana':'Japanese', 'yi':'Yi', 'syloti_nagri':'SylotiNagri', 'phags-pa':'Phagspa', 'hangul':'Korean', 'linear_b':'LinearBSyllabary', 'phaistos_disc':'Phaistos', 'old_italic':'OldItalic', 'gothic':'Gothic', 'ugaritic':'Ugaritic', 'deseret':'Deseret', 'shavian':'Shavian', 'osmanya':'Osmanya','linear_a':'Linear_A', 'cypriot':'Cypriot', 'phoenician':'Phoenician', 'kharoshthi':'Kharoshthi', 'ahom':'Ahom'
}

var ssHistory = { 'greek':'wxsx5j4kzt', 'cyrillic':'ngc339csy8', 'armenian':'z35gwmg4ft', 'hebrew':'qek84cbq5u', 'arabic':'hqr6rc9md5', 'syriac':'hlvzdczufr', 'thaana':'n2tj49rr2n', 'nko':'mnqzubphu7', 'samaritan':'qv7wwr9xgp', 'mandaic':'djwvfmuu3h', 'devanagari':'b6c6j63sf5', 'bengali':'f8jrlqwbac', 'gurmukhi':'fd27tquj5j', 'gujarati':'yqug2kbjjr', 'oriya':'znkmblg693', 'tamil':'zw5nedjarb', 'telugu':'sjrwm9ppr3', 'kannada':'ur8y3qj6yk', 'malayalam':'ypvmjurtyg', 'sinhala':'sbwtu85wbv', 'thai':'d877ebfc65', 'lao':'98522835fg', 'tibetan':'mg8ulatcjb', 'myanmar':'vcz6flwzqs', 'georgian':'rbr2wkvu4m', 'ethiopic':'fvp74ug66k', 'cherokee':'nwnmgh2n8j', 'ucas':'c36d846u2d', 'ogham':'d3z382ahas', 'runic':'ha667hekd4', 'tagalog':'76d3376b7c', 'hanunoo':'ga9dbe72a2', 'buhid':'h4446ag538', 'tagbanwa':'d62f48hfad', 'khmer':'2269c7g9ee', 'mongolian':'xluqdp54ts', 'limbu':'a2exgfkrmf', 'tai_le':'76c7d2ch4g', 'new_tai_lue':'37fcf7h92b', 'buginese':'739e2e7g2e', 'tai_tham':'gf97b8ad78', 'balinese':'f2bb6f3bh9', 'sundanese':'3844bc8cea', 'batak':'geb5h358d3', 'lepcha':'g6cv78jn42', 'ol_chiki':'rrkdvn7crf', 'glagolitic':'lbhv6e4efr', 'coptic':'msg4hep5ev', 'tifinagh':'wmx4utrkuc', 'kana':'ly5dbxtthx', 'bopomofo':'tk449c64jh', 'yi':'ejx9jwrd8e', 'lisu':'473c93dddf', 'vai':'z8tk356ua7', 'bamum':'aeg5ah9fbg', 'syloti_nagri':'kylcx42avd', 'phags-pa':'y22gh9p8g2', 'saurashtra':'eqjs45mf8t', 'kayah_li':'enl5dse8jv', 'rejang':'72d3ce3834', 'javanese':'db9724gea9', 'cham':'c4yzafta3f', 'tai_viet':'mn8j2mcblt', 'meetei_mayek':'x29ycx7hp5', 'hangul':'umfm3ftrny', 'linear_b':'by38na5akh', 'lycian':'hsu56mxkr7', 'carian':'kqrxbcekmr', 'old_italic':'uk7vpcchbc', 'gothic':'hj7ztebb5e', 'old_permic':'cqdluhalzh', 'ugaritic':'ffz7nkcxpb', 'old_persian':'pbjd5pecq6', 'deseret':'tdjlnarc8y', 'shavian':'gj5fewb8ed', 'osmanya':'hg53222b9b', 'osage':'gm4pjj3qw7', 'elbasan':'fum3p8xz6v', 'linear_a':'rmvt9u45sq', 'cypriot':'nywfdbys7b', 'aramaic':'ys8lxa9y4j', 'palmyrene':'z3u3jwap6r', 'nabataean':'kcjefvy9uw', 'hatran':'jpekrxh2wn', 'phoenician':'ltk6h5bent', 'lydian':'hsu56mxkr7', 'meroitic':'ssxtjnbc7s', 'kharoshthi':'n974scptwz', 'old_south_arabian':'clvjlzfzv9', 'old_north_arabian':'gw3vnam33r', 'manichaean':'nnf3pjr2v3', 'avestan':'appyvwf4ku', 'inscriptional_parthian':'b7daarfs3a', 'inscriptional_pahlavi':'ssmdqax9mt', 'psalter_pahlavi':'wqytv3ldez', 'old_turkic':'hpmlm9pjev', 'old_hungarian':'fx7n7tnxzt', 'brahmi':'nskejp3py5', 'kaithi':'xa9swfhv9f', 'sora_sompeng':'r4c4bsfy7v', 'chakma':'pdqjuf5k39', 'mahajani':'kuegm6qedh', 'sharada':'spnpfarl4t', 'khojki':'r9e56hvyut', 'multani':'fptnmnhe3c', 'khudawadi':'fykru6vn8h', 'grantha':'qzhwzbsvm7', 'newa':'y53lggbts6', 'tirhuta':'wysbq8bpm4', 'siddham':'fcmrsmpp9f', 'modi':'tx5uz2hvvz', 'takri':'wvh5zdz7jl', 'ahom':'ky6s63f7fx', 'warang_citi':'llvwz8vpn8', 'zanabazar_square':'j7rr9jgtyl', 'soyombo':'lns82rb9hp', 'pau_cin_hau':'t2uqldgjlv', 'bhaiksuki':'mcr57c34fw', 'marchen':'h6ln54mufu', 'masaram_gondi':'vqhk6w3pgq', 'cuneiform':'yqbyb2mdz7', 'egyptian_hieroglyphs':'q7yl4zu8eh', 'anatolian_hieroglyphs':'tasanpp3u9', 'mro':'b6ebw4c6al', 'bassa_vah':'3d6596eh4g', 'pahawh_hmong':'ha2hg6d5b7', 'miao':'cb32gtbj58', 'tangut':'rkw5m9sm64', 'nushu':'v39xawqg64', 'duployan':'sbhfvtwqkl', 'mende_kikakui':'2874g2ehc8', 'adlam':'llp3cqd7gg', 'han':'tsps57x35g'
}

var chapters = { 'greek':'07', 'cyrillic':'07', 'armenian':'07', 'caucasian_albanian':'08','hebrew':'09', 'arabic':'09', 'syriac':'09', 'thaana':'13', 'nko':'19', 'samaritan':'09', 'mandaic':'09', 'devanagari':'12', 'bengali':'12', 'gurmukhi':'12', 'gujarati':'12', 'oriya':'12', 'tamil':'12', 'telugu':'12', 'kannada':'12', 'malayalam':'12', 'sinhala':'13', 'thai':'16', 'lao':'16', 'tibetan':'13', 'myanmar':'16', 'georgian':'07', 'ethiopic':'19', 'cherokee':'20', 'ucas':'20', 'ogham':'08', 'runic':'08', 'tagalog':'17', 'hanunoo':'17', 'buhid':'17', 'tagbanwa':'17', 'khmer':'16', 'mongolian':'13', 'limbu':'13', 'tai_le':'16', 'new_tai_lue':'16', 'buginese':'17', 'tai_tham':'16', 'balinese':'17', 'sundanese':'17', 'batak':'17', 'lepcha':'13', 'ol_chiki':'13', 'glagolitic':'07', 'coptic':'07', 'tifinagh':'19', 'bopomofo':'18', 'yi':'18', 'lisu':'18', 'vai':'19', 'bamum':'19', 'syloti_nagri':'15', 'phags-pa':'14', 'saurashtra':'13', 'kayah_li':'16', 'rejang':'17', 'javanese':'17', 'cham':'16', 'tai_viet':'16', 'meetei_mayek':'13', 'han':'18','hangul':'18', 'kana':'18','linear_b':'08', 'lycian':'08', 'carian':'08', 'old_italic':'08', 'gothic':'08', 'old_permic':'08', 'ugaritic':'11', 'old_persian':'11', 'deseret':'20', 'shavian':'08', 'osmanya':'19', 'osage':'20', 'elbasan':'08', 'linear_a':'08', 'cypriot':'08', 'aramaic':'10', 'palmyrene':'10', 'nabataean':'10', 'hatran':'10', 'phoenician':'10', 'lydian':'08', 'meroitic':'11', 'kharoshthi':'14', 'old_south_arabian':'10', 'old_north_arabian':'10', 'manichaean':'10', 'avestan':'10', 'inscriptional_parthian':'10', 'inscriptional_pahlavi':'10', 'psalter_pahlavi':'10', 'old_turkic':'14', 'old_hungarian':'08', 'brahmi':'14', 'kaithi':'15', 'sora_sompeng':'15', 'chakma':'13', 'mahajani':'15', 'sharada':'15', 'khojki':'15', 'multani':'15', 'khudawadi':'15', 'grantha':'15', 'newa':'13', 'tirhuta':'15', 'siddham':'15', 'modi':'15', 'takri':'15', 'ahom':'15', 'warang_citi':'13', 'zanabazar_square':'14', 'soyombo':'14', 'pau_cin_hau':'16', 'bhaiksuki':'14', 'marchen':'14', 'masaram_gondi':'13', 'cuneiform':'11', 'egyptian_hieroglyphs':'11', 'anatolian_hieroglyphs':'11', 'mro':'13', 'bassa_vah':'19', 'pahawh_hmong':'16', 'miao':'18', 'tangut':'18', 'nushu':'18', 'duployan':'21', 'sutton_signwriting':'21', 'mende_kikakui':'19', 'adlam':'19', 'phaistos_disc':'22'
}

var OSDefaultFontsSet = new Set(['arabic','armenian','bengali','canadian_unified_syllabics','cherokee','devanagari','ethiopic','georgian','gujarati','gurmukhi','hebrew','kana','kannada','khmer','hangul','lao','malayalam','mongolian','myanmar','new_tai_lue','nko','oriya','osmanya','phags-pa','sinhala','syriac','tai_le','tamil','telugu','thaana','thai','tibetan','tifinagh','vai','yi'])

var typographyDocSet =  new Set(['arabic','han','ethiopic','devanagari','kana','hangul','tibetan'])

var w3cTypographySet =  new Set(['arabic','han','ethiopic','hebrew','devanagari','kana','hangul','latin','mongolian','thai','tibetan'])

var w3cTypeSampleSet =  new Set(['arabic','han','cyrillic','ethiopic','greek','hebrew','kana','hangul','mongolian','devanagari','thai','tibetan'])

var blockStart = { 
'basic_latin':'0000', 'latin-1_supplement':'0080', 'latin_extended-a':'0100', 'latin_extended-b':'0180', 'ipa_extensions':'0250', 'spacing_modifier_letters':'02B0', 'combining_diacritical_marks':'0300', 'greek_and_coptic':'0370', 'cyrillic':'0400', 'cyrillic_supplement':'0500', 'armenian':'0530', 'hebrew':'0590', 'arabic':'0600', 'syriac':'0700', 'arabic_supplement':'0750', 'thaana':'0780', 'nko':'07C0', 'samaritan':'0800', 'mandaic':'0840', 'syriac_supplement':'0860', 'arabic_extended-a':'08A0', 'devanagari':'0900', 'bengali':'0980', 'gurmukhi':'0A00', 'gujarati':'0A80', 'oriya':'0B00', 'tamil':'0B80', 'telugu':'0C00', 'kannada':'0C80', 'malayalam':'0D00', 'sinhala':'0D80', 'thai':'0E00', 'lao':'0E80', 'tibetan':'0F00', 'myanmar':'1000', 'georgian':'10A0', 'hangul_jamo':'1100', 'ethiopic':'1200', 'ethiopic_supplement':'1380', 'cherokee':'13A0', 'unified_canadian_aboriginal_syllabics':'1400', 'ogham':'1680', 'runic':'16A0', 'tagalog':'1700', 'hanunoo':'1720', 'buhid':'1740', 'tagbanwa':'1760', 'khmer':'1780', 'mongolian':'1800', 'unified_canadian_aboriginal_syllabics_extended':'18B0', 'limbu':'1900', 'tai_le':'1950', 'new_tai_lue':'1980', 'khmer_symbols':'19E0', 'buginese':'1A00', 'tai_tham':'1A20', 'combining_diacritical_marks_extended':'1AB0', 'balinese':'1B00', 'sundanese':'1B80', 'batak':'1BC0', 'lepcha':'1C00', 'ol_chiki':'1C50', 'cyrillic_extended-c':'1C80', 'sundanese_supplement':'1CC0', 'vedic_extensions':'1CD0', 'phonetic_extensions':'1D00', 'phonetic_extensions_supplement':'1D80', 'combining_diacritical_marks_supplement':'1DC0', 'latin_extended_additional':'1E00', 'greek_extended':'1F00', 'general_punctuation':'2000', 'superscripts_and_subscripts':'2070', 'currency_symbols':'20A0', 'combining_diacritical_marks_for_symbols':'20D0', 'letterlike_symbols':'2100', 'number_forms':'2150', 'arrows':'2190', 'mathematical_operators':'2200', 'miscellaneous_technical':'2300', 'control_pictures':'2400', 'optical_character_recognition':'2440', 'enclosed_alphanumerics':'2460', 'box_drawing':'2500', 'block_elements':'2580', 'geometric_shapes':'25A0', 'miscellaneous_symbols':'2600', 'dingbats':'2700', 'miscellaneous_mathematical_symbols-a':'27C0', 'supplemental_arrows-a':'27F0', 'braille_patterns':'2800', 'supplemental_arrows-b':'2900', 'miscellaneous_mathematical_symbols-b':'2980', 'supplemental_mathematical_operators':'2A00', 'miscellaneous_symbols_and_arrows':'2B00', 'glagolitic':'2C00', 'latin_extended-c':'2C60', 'coptic':'2C80', 'georgian_supplement':'2D00', 'tifinagh':'2D30', 'ethiopic_extended':'2D80', 'cyrillic_extended-a':'2DE0', 'supplemental_punctuation':'2E00', 'cjk_radicals_supplement':'2E80', 'kangxi_radicals':'2F00', 'ideographic_description_characters':'2FF0', 'cjk_symbols_and_punctuation':'3000', 'hiragana':'3040', 'katakana':'30A0', 'bopomofo':'3100', 'hangul_compatibility_jamo':'3130', 'kanbun':'3190', 'bopomofo_extended':'31A0', 'cjk_strokes':'31C0', 'katakana_phonetic_extensions':'31F0', 'enclosed_cjk_letters_and_months':'3200', 'cjk_compatibility':'3300', 'cjk_unified_ideographs_extension_a':'3400', 'yijing_hexagram_symbols':'4DC0', 'cjk_unified_ideographs':'4E00', 'yi_syllables':'A000', 'yi_radicals':'A490', 'lisu':'A4D0', 'vai':'A500', 'cyrillic_extended-b':'A640', 'bamum':'A6A0', 'modifier_tone_letters':'A700', 'latin_extended-d':'A720', 'syloti_nagri':'A800', 'common_indic_number_forms':'A830', 'phags-pa':'A840', 'saurashtra':'A880', 'devanagari_extended':'A8E0', 'kayah_li':'A900', 'rejang':'A930', 'hangul_jamo_extended-a':'A960', 'javanese':'A980', 'myanmar_extended-b':'A9E0', 'cham':'AA00', 'myanmar_extended-a':'AA60', 'tai_viet':'AA80', 'meetei_mayek_extensions':'AAE0', 'ethiopic_extended-a':'AB00', 'latin_extended-e':'AB30', 'cherokee_supplement':'AB70', 'meetei_mayek':'ABC0', 'hangul_syllables':'AC00', 'hangul_jamo_extended-b':'D7B0', 'high_surrogates':'D800', 'high_private_use_surrogates':'DB80', 'low_surrogates':'DC00', 'private_use_area':'E000', 'cjk_compatibility_ideographs':'F900', 'alphabetic_presentation_forms':'FB00', 'arabic_presentation_forms-a':'FB50', 'variation_selectors':'FE00', 'vertical_forms':'FE10', 'combining_half_marks':'FE20', 'cjk_compatibility_forms':'FE30', 'small_form_variants':'FE50', 'arabic_presentation_forms-b':'FE70', 'halfwidth_and_fullwidth_forms':'FF00', 'specials':'FFF0', 'linear_b_syllabary':'10000', 'linear_b_ideograms':'10080', 'aegean_numbers':'10100', 'ancient_greek_numbers':'10140', 'ancient_symbols':'10190', 'phaistos_disc':'101D0', 'lycian':'10280', 'carian':'102A0', 'coptic_epact_numbers':'102E0', 'old_italic':'10300', 'gothic':'10330', 'old_permic':'10350', 'ugaritic':'10380', 'old_persian':'103A0', 'deseret':'10400', 'shavian':'10450', 'osmanya':'10480', 'osage':'104B0', 'elbasan':'10500', 'caucasian_albanian':'10530', 'linear_a':'10600', 'cypriot_syllabary':'10800', 'imperial_aramaic':'10840', 'palmyrene':'10860', 'nabataean':'10880', 'hatran':'108E0', 'phoenician':'10900', 'lydian':'10920', 'meroitic_hieroglyphs':'10980', 'meroitic_cursive':'109A0', 'kharoshthi':'10A00', 'old_south_arabian':'10A60', 'old_north_arabian':'10A80', 'manichaean':'10AC0', 'avestan':'10B00', 'inscriptional_parthian':'10B40', 'inscriptional_pahlavi':'10B60', 'psalter_pahlavi':'10B80', 'old_turkic':'10C00', 'old_hungarian':'10C80', 'rumi_numeral_symbols':'10E60', 'brahmi':'11000', 'kaithi':'11080', 'sora_sompeng':'110D0', 'chakma':'11100', 'mahajani':'11150', 'sharada':'11180', 'sinhala_archaic_numbers':'111E0', 'khojki':'11200', 'multani':'11280', 'khudawadi':'112B0', 'grantha':'11300', 'newa':'11400', 'tirhuta':'11480', 'siddham':'11580', 'modi':'11600', 'mongolian_supplement':'11660', 'takri':'11680', 'ahom':'11700', 'warang_citi':'118A0', 'zanabazar_square':'11A00', 'soyombo':'11A50', 'pau_cin_hau':'11AC0', 'bhaiksuki':'11C00', 'marchen':'11C70', 'masaram_gondi':'11D00', 'cuneiform':'12000', 'cuneiform_numbers_and_punctuation':'12400', 'early_dynastic_cuneiform':'12480', 'egyptian_hieroglyphs':'13000', 'anatolian_hieroglyphs':'14400', 'bamum_supplement':'16800', 'mro':'16A40', 'bassa_vah':'16AD0', 'pahawh_hmong':'16B00', 'miao':'16F00', 'ideographic_symbols_and_punctuation':'16FE0', 'tangut':'17000', 'tangut_components':'18800', 'kana_supplement':'1B000', 'kana_extended-a':'1B100', 'nushu':'1B170', 'duployan':'1BC00', 'shorthand_format_controls':'1BCA0', 'byzantine_musical_symbols':'1D000', 'musical_symbols':'1D100', 'ancient_greek_musical_notation':'1D200', 'tai_xuan_jing_symbols':'1D300', 'counting_rod_numerals':'1D360', 'mathematical_alphanumeric_symbols':'1D400', 'sutton_signwriting':'1D800', 'glagolitic_supplement':'1E000', 'mende_kikakui':'1E800', 'adlam':'1E900', 'arabic_mathematical_alphabetic_symbols':'1EE00', 'mahjong_tiles':'1F000', 'domino_tiles':'1F030', 'playing_cards':'1F0A0', 'enclosed_alphanumeric_supplement':'1F100', 'enclosed_ideographic_supplement':'1F200', 'miscellaneous_symbols_and_pictographs':'1F300', 'emoticons':'1F600', 'ornamental_dingbats':'1F650', 'transport_and_map_symbols':'1F680', 'alchemical_symbols':'1F700', 'geometric_shapes_extended':'1F780', 'supplemental_arrows-c':'1F800', 'supplemental_symbols_and_pictographs':'1F900', 'cjk_unified_ideographs_extension_b':'20000', 'cjk_unified_ideographs_extension_c':'2A700', 'cjk_unified_ideographs_extension_d':'2B740', 'cjk_unified_ideographs_extension_e':'2B820', 'cjk_compatibility_ideographs_supplement':'2F800', 'tags':'E0000', 'variation_selectors_supplement':'E0100', 'supplementary_private_use_area-a':'F0000', 'supplementary_private_use_area-b':'100000'
 }

        
var linkDB = [ 

{ script:"Ahom", code:"Ahom",
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

{ script:"Ahom", 
	info:{ scriptsource:"Ahom", wikipedia:"Ahom_alphabet", omniglot:"ahom" }, 
	unicode:{ historical:"ky6s63f7fx" }, 
	charts:[{ name:"Ahom", uniview:"ahom", unicode:"11700" }],
	fontkey:[{ name:"Scriptsource", url:"Ahom/font" }]
	},

{ script:"Arabic",  code:"Arab",
	info:{ scriptsource:"Arab", wikipedia:"Arabic_script", omniglot:"arabic" }, 
	local:[		],
	unicode:{ 	core:"ch09", historical:"hqr6rc9md5" }, 
	charts:[	"Arabic", "Arabic Supplement", "Arabic Extended-A", "Arabic Presentation Forms-A", "Arabic Presentation Forms-B" ],
	pickers:[	{ name:"Arabic", url:"arabic" },
				{ name:"Arabic Block", url:"arabicblock" },
				{ name:"Uighur", url:"uighur" },
				{ name:"Urdu", url:"urdu" }
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-middle-eastern.html#arabic" }
				],
	layout:[	{ name:"Arabic Layout Requirements", url:"https://w3c.github.io/alreq/" },
				{ name:"Arabic text justification", url:"http://www.tug.org/tugboat/tb27-2/tb87benatia.pdf" },
				{ name:"Justify Just or Just Justify", url:"http://quod.lib.umich.edu/j/jep/3336451.0013.105?view=text;rgn=main" },
				{ name:"Typography questions for HTML & CSS: Arabic", url:"http://rishida.net/blog/?p=1059" },
				{ name:"Rule-based expert system for Urdu nastaleeq justification", url:"http://www.cle.org.pk/Publication/papers/2004/rule-based-expert-system.pdf" }
				]
	},

{ script:"Armenian", code:"Armn",
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

{ script:"Caucasian Albanian", code:"Aghb",
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

{ script:"Cypriot", code:"Cprt",
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

{ script:"Cyrillic", code:"Cyrl",
	info:{ 		wikipedia:"Cyrillic_script", omniglot:"cyrillic" }, 
	local: [	],
	unicode:{ 	core:"ch07", historical:"ngc339csy8" }, 
	charts:[	"Cyrillic", "Cyrillic Supplement", "Cyrillic Extended-A", "Cyrillic Extended-B" ],
	pickers:[	{ name:"Russian", url:"russian" }
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-european.html#cyrillic" }
				],
	layout:[	
				]
	},

{ script:"Duployan", code:"Dupl",
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

{ script:"Elbasan", code:"Elba",
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

{ script:"Georgian", code:"Geor",
	info:{ 		wikipedia:"Georgian_script", omniglot:"georgian" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Georgian", "Georgian Supplement" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-european.html#georgian" }
				],
	layout:[	
				]
	},

{ script:"Glagolitic", code:"Glag",
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

{ script:"Gothic", code:"Goth",
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

{ script:"Greek", code:"Grek",
	info:{ 		wikipedia:"Greek_alphabet", omniglot:"greek" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Greek and Coptic", "Greek Extended", "Ancient Greek Numbers" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-european.html#greek" }
				],
	layout:[	
				]
	},

{ script:"Latin", code:"Latn",
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

{ script:"Linear A", code:"Lina",
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

{ script:"Linear B", code:"Linb",
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

{ script:"Ogham", code:"Ogam",
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

{ script:"Old Hungarian", code:"Hung",
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

{ script:"Old Italic", code:"Ital",
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

{ script:"Old Permic", code:"Perm",
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

{ script:"Phaistos Disc", code:"xPhais",
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

{ script:"Runic", code:"Runr",
	info:{ 		wikipedia:"Runic", omniglot:"runic" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Runic" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-european.html#runic" }
				],
	layout:[	
				]
	},

{ script:"Shavian", code:"Shaw",
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

{ script:"Bamum", code:"Bamu",
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

{ script:"Bassa Vah", code:"Bass",
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

{ script:"Coptic", code:"Copt",
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

{ script:"Egyptian Hieroglyphs", code:"Egyp",
	info:{ 		wikipedia:"Egyptian_hieroglyphs", omniglot:"egyptian" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Egyptian Hieroglyphs" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-african.html#egyptianhieroglyphs" }
				],
	layout:[	
				]
	},

{ script:"Ethiopic", code:"Ethi",
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

{ script:"Mende Kikakui", code:"Mend",
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

{ script:"Meroitic", code:"Merc",
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

{ script:"NKo", code:"Nkoo",
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

{ script:"Osmanya", code:"Osma",
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

{ script:"Tifinagh", code:"Tfng",
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

{ script:"Vai", code:"Vaii",
	info:{ 		wikipedia:"Vai_syllabary", omniglot:"vai" }, 
	local: [	],
	unicode:{ 	}, 
	charts:[	"Vai" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-african.html#vai" }
				],
	layout:[	
				]
	},

{ script:"Anatolian Hieroglyphs", code:"Hluw", name:"Anatolian (Luwian/Hittite) hieroglyphs",
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

{ script:"Aramaic", code:"Armi",
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

{ script:"Avestan", code:"Avst",
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

{ script:"Carian", code:"Cari",
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

{ script:"Cuneiform", code:"Xsux",
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

{ script:"Hatran", code:"Hatr",
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

{ script:"Hebrew", code:"Hebr",
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

{ script:"Lycian", code:"Lyci",
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

{ script:"Lydian", code:"Lydi",
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

{ script:"Mandaic", code:"Mand", name:"",
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


{ script:"Nabataean", code:"Nbat", name:"",
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

{ script:"Old North Arabian", code:"Narb", name:"",
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
	   
{ script:"Old Persian", code:"Xpeo", name:"",
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
	   
{ script:"Old South Arabian", code:"Sarb", name:"",
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
	   
{ script:"Inscriptional Pahlavi", code:"Phli", name:"",
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
	   
{ script:"Psalter Pahlavi", code:"Phlp", name:"",
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
	   
{ script:"Palmyrene", code:"Palm", name:"",
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
	   
{ script:"Inscriptional Parthian", code:"Prti", name:"",
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
	   
{ script:"Phoenician", code:"Phnx", name:"",
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
	   
{ script:"Samaritan", code:"Samr", name:"",
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
	   
{ script:"Syriac", code:"Syrc", name:"",
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
	   
{ script:"Ugaritic", code:"Ugar", name:"",
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
	   
{ script:"Bengali", code:"Beng", name:"",
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
	   
{ script:"Brahmi", code:"Brah", name:"",
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
	   
{ script:"Chakma", code:"Cakm", name:"",
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
	   
{ script:"Devanagari", code:"Deva", name:"",
	info:{ 		wikipedia:"Devanagari", omniglot:"devanagari" }, 
	local: [	{ name:"Introduction to Indic Scripts", url:"indic-overview" }
				],
	unicode:{ 	}, 
	charts:[	"Devanagari", "Devanagari Extended", "Vedic Extensions" ],
	pickers:[	{ name:"Devanagari", url:"devanagari" }
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-south-asian.html#devanagari" }
				],
	layout:[	
				]
	},
	   
{ script:"Grantha", code:"Gran", name:"",
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
	   
{ script:"Gujarati", code:"Gujr", name:"",
	info:{ 		wikipedia:"Gujarati_alphabet", omniglot:"gujarati" }, 
	local: [	{ name:"Introduction to Indic Scripts", url:"indic-overview" }
				],
	unicode:{ 	}, 
	charts:[	"Gujarati" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-south-asian.html#gujarati" }
				],
	layout:[	
				]
	},
	   
{ script:"Gurmukhi", code:"Guru", name:"",
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
	   
{ script:"Kaithi", code:"Kthi", name:"",
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
	   
{ script:"Kannada", code:"Knda", name:"",
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
	   
{ script:"Kharoshthi", code:"Khar", name:"",
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
	   
{ script:"Khojki", code:"Khoj", name:"",
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
	   
{ script:"Khudawadi", code:"Sind", name:"Khudawadi (Sindhi)",
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
	   
{ script:"Lepcha", code:"Lepc", name:"Lepcha (Róng)",
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
	   
{ script:"Limbu", code:"Limb", name:"",
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
	   
{ script:"Mahajani", code:"Mahj", name:"",
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
	   
{ script:"Malayalam", code:"Mlym", name:"",
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
	   
{ script:"Masaram Gondi", code:"Gonm", name:"",
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

{ script:"Meetei Mayek", code:"Mtei", name:"Meetei Mayek (Meithei, Meitei)",
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
	   
{ script:"Modi", code:"Modi", name:"Modi, Moḍī",
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
	   
{ script:"Mro", code:"Mroo", name:"Mro, Mru",
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
	   
{ script:"Multani", code:"Mult", name:"",
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
	   
{ script:"Ol Chiki", code:"Olck", name:"Ol Chiki (Ol Cemet', Ol, Santali)",
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
	   
{ script:"Oriya", code:"Orya", name:"Oriya (Odia)",
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
	   
{ script:"Saurashtra", code:"Saur", name:"",
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
	   
{ script:"Sharada", code:"Shrd", name:"Sharada (Śāradā)",
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
	   
{ script:"Siddham", code:"Sidd", name:"Siddham (Siddhaṃ, Siddhamātṛkā)",
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
	   
{ script:"Sinhala", code:"Sinh", name:"",
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
	   
{ script:"Sora Sompeng", code:"Sora", name:"",
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
	   
{ script:"Syloti Nagri", code:"Sylo", name:"",
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
	   
{ script:"Takri", code:"Takr", name:"Takri (Ṭākrī, Ṭāṅkrī)",
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
	   
{ script:"Tamil", code:"Taml", name:"",
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
	   
{ script:"Telugu", code:"Telu", name:"",
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
	   
{ script:"Thaana", code:"Thaa", name:"",
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
	   
{ script:"Tirhuta", code:"Tirh", name:"",
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
	   
{ script:"Warang Citi", code:"Wara", name:"Warang Citi (Varang Kshiti)",
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
	   
{ script:"Manichaean", code:"Mani", name:"",
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
	   
{ script:"Mongolian", code:"Mong", name:"",
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
	   
{ script:"Old Turkic", code:"Orkh", name:"Old Turkic, Orkhon Runic",
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
	   
{ script:"Phags-Pa", code:"Phag", name:"",
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
	   
{ script:"Soyombo", code:"Soyo", name:"",
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
	   
{ script:"Tibetan", code:"Tibt", name:"",
	info:{ 		wikipedia:"Tibetan_alphabet", omniglot:"tibetan" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Tibetan" ],
	pickers:[	{ name:"Tibetan", url:"tibetan" }
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-central-asian.html#tibetan" }
				],
	layout:[	{ name:"Tibetan emphasis (blog)", url:"http://rishida.net/blog/?p=101" },
				{ name:"Formatting rules for Tibetan text", url:"http://digitaltibetan.org/index.php/Formatting_rules_for_Tibetan_text" }
				],
	other:[		{ name:"Creating and Supporting OpenType Fonts for Tibetan Script", url:"https://www.microsoft.com/typography/OpenTypeDev/tibetan/intro.htm" }
				]
	},
	   
{ script:"Zanabazar Square", code:"Zanb", name:"",
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
	   
{ script:"Cham", code:"Cham", name:"",
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
	   
{ script:"Kayah Li", code:"Kali", name:"",
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
	   
{ script:"Khmer", code:"Khmr", name:"",
	info:{ 		wikipedia:"Khmer_script", omniglot:"khmer" }, 
	local: [	
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
	   
{ script:"Lao", code:"Laoo", name:"",
	info:{ 		wikipedia:"Lao_script", omniglot:"lao" }, 
	local: [	
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
	   
{ script:"Myanmar", code:"Mymr", name:"Myanmar (Burmese)",
	info:{ 		wikipedia:"Burmese_alphabet", omniglot:"burmese" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Myanmar", "Myanmar Extended-A", "Myanmar Extended-B" ],
	pickers:[	{ name:"Burmese", url:"myanmar" }
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-southeast-asian.html#burmese" }
				],
	layout:[	
				],
	other:[		{ name:"Burmese divergence on the Web (blog)", url:"http://rishida.net/blog/?p=1129" }
				]
	},
	   
{ script:"New Tai Lue", code:"Talu", name:"",
	info:{ 		wikipedia:"New_Tai_Lue_alphabet", omniglot:"tailue" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"New Tai Lue" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-southeast-asian.html#newtailue" }
				],
	layout:[	
				],
	other:[		
				]
	},
	   
{ script:"Pahawh Hmong", code:"Hmng", name:"",
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
	   
{ script:"Pau Cin Hau", code:"Pauc", name:"",
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
	   
{ script:"Tai Le", code:"Tale", name:"",
	info:{ 		wikipedia:"Tai_Le_alphabet", omniglot:"tainua" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Tai Le" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-southeast-asian.html#taile" }
				],
	layout:[	
				],
	other:[		
				]
	},
	   
{ script:"Tai Tham", code:"Lana", name:"Tai Tham (Lanna)",
	info:{ 		wikipedia:"Tai_Tham_alphabet", omniglot:"lanna" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Tai Tham" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-southeast-asian.html#taitham" }
				],
	layout:[	
				],
	other:[		
				]
	},
	   
{ script:"Tai Viet", code:"Tavt", name:"",
	info:{ 		wikipedia:"Tai Viet_script", omniglot:"taidam" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Tai Viet" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-southeast-asian.html#taiviet" }
				],
	layout:[	
				],
	other:[		
				]
	},
	   
{ script:"Thai", code:"Thai", name:"",
	info:{ 		wikipedia:"Thai_alphabet", omniglot:"thai" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Thai" ],
	pickers:[	{ name:"Thai", url:"thai" }
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-southeast-asian.html#thai" }
				],
	layout:[	{ name:"Thai line breaking in Firefox", url:"http://rishida.net/blog/?p=106" }
				],
	other:[		
				]
	},
	   
{ script:"Balinese", code:"Bali", name:"",
	info:{ 		wikipedia:"Balinese_script", omniglot:"balinese" }, 
	local: [	
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
	   
{ script:"Batak", code:"Batk", name:"",
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
	   
{ script:"Buginese", code:"Bugi", name:"",
	info:{ 		wikipedia:"Buginese_script", omniglot:"lontara" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Buginese" ],
	pickers:[	
				],
	fontkey:[	{ name:"Alan Wood", url:"http://www.alanwood.net/unicode/fonts-southeast-asian.html#buginese" }
				],
	layout:[	
				],
	other:[		
				]
	},
	   
{ script:"Buhid", code:"Buhd", name:"",
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
	   
{ script:"Hanunoo", code:"Hano", name:"Hanunoo (Hanunóo)",
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
	   
{ script:"Javanese", code:"Java", name:"",
	info:{ 		wikipedia:"Javanese_alphabet", omniglot:"javanese" }, 
	local: [	
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
	   
{ script:"Rejang", code:"Rjng", name:"Rejang (Redjang, Kaganga)",
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
	   
{ script:"Sundanese", code:"Sund", name:"",
	info:{ 		wikipedia:"Sundanese_alphabet", omniglot:"http://www.omniglot.com/writing/sundanese.php" }, 
	local: [	
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
	   
{ script:"Tagalog", code:"Tglg", name:"Tagalog (Baybayin, Alibata)",
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
	   
{ script:"Tagbanwa", code:"Tagb", name:"",
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
	   
{ script:"Bopomofo", code:"Bopo", name:"",
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
	   
{ script:"Han", code:"Hani", name:"Han (Hanzi, Kanji, Hanja)",
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
	   
{ script:"Hangul", code:"Hang", name:"Hangul (Hangŭl, Hangeul)",
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
	   
{ script:"Kana", code:"Jpan", name:"Hiragana &amp; Katakana",
	info:{ 		wikipedia:"Japanese_writing_system", omniglot:"japanese" }, 
	local: [	{ name:"Jukugo ruby (blog)", url:"http://rishida.net/blog/?p=469" }
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
	   
{ script:"Lisu", code:"Lisu", name:"Lisu (Fraser)",
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
	   
{ script:"Miao", code:"Plrd", name:"Miao (Pollard)",
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
	   
{ script:"Nushu", code:"Nshu", name:"Nüshu",
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
	   
{ script:"Yi", code:"Yiii", name:"",
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
	   
{ script:"Cherokee", code:"Cher", name:"",
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
	   
{ script:"Deseret", code:"Dsrt", name:"",
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
	   
{ script:"UCAS", code:"Cans", name:"Unified Canadian Aboriginal Syllabics",
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
	   
{ script:"Osage", code:"Osge", name:"",
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
	   
{ script:"Newa", code:"Newa", name:"Newa (Newar, Newari, Nepāla lipi)",
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
	   
{ script:"Bhaiksuki", code:"Bhks", name:"",
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
	   
{ script:"Marchen", code:"Marc", name:"",
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
	   
{ script:"Tangut", code:"Tang", name:"",
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
	   
{ script:"Adlam", code:"Adlm", name:"",
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
	   
{ script:"Limbu", code:"xxxx", name:"",
	info:{ 		wikipedia:"Limbu_alphabet", omniglot:"limbu" }, 
	local: [	
				],
	unicode:{ 	}, 
	charts:[	"Limbu" ],
	pickers:[	
				],
	fontkey:[	
				],
	layout:[	
				],
	other:[		
				]
	},
	   
	   
]


