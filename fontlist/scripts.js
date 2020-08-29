// hand-crafted list of Unicode blocks
// field[3] is the iso code for the script (used for link to links page)
// field[4] lists characters for which there's a note in the block file
// field[5] is gives the directory name for the character block file (for notes)
// NOTE: scripts must be listed in numerical order


var latin = [
[0x0100, 0x017F, "Latin Extended-A", "latn"],
[0x0180, 0x024F, "Latin Extended-B", "latn"],
[0x2C60, 0x2C7F, "Latin Extended-C", "latn"],
[0xA720, 0xA7FF, "Latin Extended-D", "latn"],
[0xAB30, 0xAB6F, "Latin Extended-E", "latn"],
[0x1E00, 0x1EFF, "Latin Extended Additional", "latn"],
[0x0250, 0x02AF, "IPA Extensions", "latn"],
[0x1D00, 0x1D7F, "Phonetic Extensions", "latn"],
[0x1D80, 0x1DBF, "Phonetic Extensions Supplement", "latn"],
[0xA700, 0xA71F, "Modifier Tone Letters", "latn"],
[0x02B0, 0x02FF, "Spacing Modifier Letters", "latn"],
[0x2070, 0x209F, "Superscripts and Subscripts", "latn"],
[0x0300, 0x036F, "Combining Diacritical Marks", "latn"],
[0x1AB0, 0x1AFF, "Combining Diacritical Marks Extended", "latn"],
[0x1DC0, 0x1DFF, "Combining Diacritical Marks Supplement", "latn"],
[0x20D0, 0x20FF, "Combining Diacritical Marks for Symbols", "latn"],
[0xFE20, 0xFE2F, "Combining Half Marks", "latn"],
]

var european = [
[0x0530, 0x058F, "Armenian", "armn"],
[0x10530, 0x1056F, "Caucasian Albanian", "aghb"],
[0x10800, 0x1083F, "Cypriot Syllabary", "cprt"],
[0x0400, 0x04FF, "Cyrillic", "cyrl"],
[0x0500, 0x052F, "Cyrillic Supplement", "cyrl"],
[0x2DE0, 0x2DFF, "Cyrillic Extended-A", "cyrl"],
[0xA640, 0xA69F, "Cyrillic Extended-B", "cyrl"],
[0x1C80, 0x1C8F, "Cyrillic Extended-C", "cyrl"],
[0x10500, 0x1052F, "Elbasan", "elba"],
[0x10A0, 0x10FF, "Georgian", "geor"],
[0x1C90, 0x1CBF, "Georgian Extended", "geor"],
[0x2D00, 0x2D2F, "Georgian Supplement", "geor"],
[0x2C00, 0x2C5F, "Glagolitic", "glag"],
[0x1E000, 0x1E02F, "Glagolitic Supplement", "glag"],
[0x10330, 0x1034F, "Gothic", "goth"],
[0x0370, 0x03FF, "Greek and Coptic", "grek"],
[0x1F00, 0x1FFF, "Greek Extended", "grek"],
[0x10140, 0x1018F, "Ancient Greek Numbers", "grek"],
[0x10600, 0x1077F, "Linear A", "lina"],
[0x10000, 0x1007F, "Linear B Syllabary", "linb"],
[0x10080, 0x100FF, "Linear B Ideograms", "linb"],
[0x10100, 0x1013F, "Aegean Numbers", "grek"],
[0x1680, 0x169F, "Ogham", "ogam"],
[0x10C80, 0x10CFF, "Old Hungarian", "hung"],
[0x10300, 0x1032F, "Old Italic", "ital"],
[0x10350, 0x1037F, "Old Permic", "perm"],
[0x101D0, 0x101FF, "Phaistos Disc", "xphais"],
[0x16A0, 0x16FF, "Runic", "runr"],
[0x10450, 0x1047F, "Shavian", "shav"],
]


var african = [
[0x1E900, 0x1E95F, "Adlam", "adlm"],
[0xA6A0, 0xA6FF, "Bamum", "bamu"],
[0x16800, 0x16A3F, "Bamum Supplement", "bamu"],
[0x16AD0, 0x16AFF, "Bassa Vah", "bass"],
[0x2C80, 0x2CFF, "Coptic", "copt"],
[0x03E2, 0x03EF, "Coptic in Greek block", "copt"],
 [0x102E0, 0x102FF, "Coptic Epact Numbers", "copt"],
[0x13000, 0x1342F, "Egyptian Hieroglyphs", "egyp"],
[0x13430, 0x1343F, "Egyptian Hieroglyph Format Controls", "egyp"],
[0x1200, 0x137F, "Ethiopic", "ethi"],
[0x1380, 0x139F, "Ethiopic Supplement", "ethi"],
[0x2D80, 0x2DDF, "Ethiopic Extended", "ethi"],
[0xAB00, 0xAB2F, "Ethiopic Extended-A", "ethi"],
[0x16E40, 0x16E9F, "Medefaidrin", "mede"],
[0x1E800, 0x1E8DF, "Mende Kikakui", "mend"],
[0x109A0, 0x109FF, "Meroitic Cursive", "merc"],
[0x10980, 0x1099F, "Meroitic Hieroglyphs", "mero"],
[0x07C0, 0x07FF, "N'Ko", "nkoo"],
[0x10480, 0x104AF, "Osmanya", "osma"],
[0x2D30, 0x2D7F, "Tifinagh", "tfng"],
[0xA500, 0xA63F, "Vai", "vaii"],
]


var westasia = [
[0x14400, 0x1467F, "Anatolian Hieroglyphs", "hluw"],
[0x0600, 0x06FF, "Arabic", "arab"],
[0x0750, 0x077F, "Arabic Supplement", "arab"],
[0x08A0, 0x08FF, "Arabic Extended-A", "arab"],
[0xFB50, 0xFDFF, "Arabic Presentation Forms-A", "arab"],
[0xFE70, 0xFEFF, "Arabic Presentation Forms-B", "arab"],
[0x10B00, 0x10B3F, "Avestan", "avst"],
[0x102A0, 0x102DF, "Carian", "cari"],
[0x12000, 0x123FF, "Cuneiform", "xsux"],
[0x10FB0, 0x10FDF, "Chorasmian", "chrs"],
[0x10FE0, 0x10FFF, "Elymaic", "xsux"],
[0x12480, 0x1254F, "Early Dynastic Cuneiform", "xsux"],
[0x12400, 0x1247F, "Cuneiform Numbers and Punctuation", "xsux"],
[0x108E0, 0x108FF, "Hatran", "hatr"],
[0x0590, 0x05FF, "Hebrew", "hebr"],
[0xFB1D, 0xFB4F, "Hebrew Presentation Forms", "hebr"],
[0x10840, 0x1085F, "Imperial Aramaic", "armi"],
[0x10B60, 0x10B7F, "Inscriptional Pahlavi", "phli"],
[0x10B40, 0x10B5F, "Inscriptional Parthian", "prti"],
[0x10280, 0x1029F, "Lycian", "lyci"],
[0x10920, 0x1093F, "Lydian", "lydi"],
[0x0840, 0x085F, "Mandaic", "mand"],
[0x10880, 0x108AF, "Nabataean", "nbat"],
[0x10A80, 0x10A9F, "Old North Arabian", "sarn"],
[0x103A0, 0x103DF, "Old Persian", "xpeo"],
[0x10A60, 0x10A7F, "Old South Arabian", "sarb"],
[0x10860, 0x1087F, "Palmyrene", "palm"],
[0x10900, 0x1091F, "Phoenician", "phnx"],
[0x10B80, 0x10BAF, "Psalter Pahlavi", "phlp"],
[0x0800, 0x083F, "Samaritan", "samr"],
[0x0700, 0x074F, "Syriac", "syrc"],
[0x0860, 0x086F, "Syriac Supplement", "syrc"],
[0x10380, 0x1039F, "Ugaritic", "ugar"],
[0x10E80, 0x10EBF, "Yezidi", "ugar"],
]


var centralasia = [
[0x10AC0, 0x10AFF, "Manichaean", "mani"],
[0x11C70, 0x11CBF, "Marchen", "marc"],
[0x1800, 0x18AF, "Mongolian", "mong"],
[0x11660, 0x1167F, "Mongolian Supplement", "mong"],
[0x10F00, 0x10F2F, "Old Sogdian", "sogo"],
[0x10C00, 0x10C4F, "Old Turkic", "orhk"],
[0xA840, 0xA87F, "Phags-pa", "phag"],
[0x10F30, 0x10F6F, "Sogdian", "sogd"],
[0x11A50, 0x11AAF, "Soyombo", "soyo"],
[0x0F00, 0x0FFF, "Tibetan", "tibt"],
[0x11A00, 0x11A4F, "Zanabazar Square", "zanb"],
]


var southasia = [
[0x11700, 0x1173F, "Ahom", "ahom"],
[0x0980, 0x09FF, "Bengali", "beng"],
[0x11C00, 0x11C6F, "Bhaiksuki", "bhks"],
[0x11000, 0x1107F, "Brahmi", "brah"],
[0x11100, 0x1114F, "Chakma", "cakm"],
[0x0900, 0x097F, "Devanagari", "deva"],
[0xA8E0, 0xA8FF, "Devanagari Extended", "deva"],
[0x11900, 0x1195F, "Dives Akuru", "diac"],
[0x11800, 0x1184F, "Dogra", "dogr"],
[0x11300, 0x1137F, "Grantha", "gran"],
[0x0A80, 0x0AFF, "Gujarati", "gujr"],
[0x11D60, 0x11DAF, "Gunjala Gondi", "gong"],
[0x0A00, 0x0A7F, "Gurmukhi", "guru"],
[0x11080, 0x110CF, "Kaithi", "kthi"],
[0x0C80, 0x0CFF, "Kannada", "knda"],
[0x10A00, 0x10A5F, "Kharoshthi", "khar"],
[0x11200, 0x1124F, "Khojki", "khoj"],
[0x112B0, 0x112FF, "Khudawadi", "sind"],
[0x1C00, 0x1C4F, "Lepcha", "lepc"],
[0x1900, 0x194F, "Limbu", "limb"],
[0x11150, 0x1117F, "Mahajani", "mahj"],
[0x0D00, 0x0D7F, "Malayalam", "mlym"],
[0x11D00, 0x11D5F, "Masaram Gondi", "gonm"],
[0xABC0, 0xABFF, "Meetei Mayek", "mtei"],
[0xAAE0, 0xAAEF, "Meetei Mayek Extensions", "mtei"],
[0x11600, 0x1165F, "Modi", "modi"],
[0x16A40, 0x16A6F, "Mro", "mroo"],
[0x11280, 0x112AF, "Multani", "mult"],
[0x119A0, 0x119FF, "Nandinagari", "nand"],
[0x11400, 0x1147F, "Newa", "newa"],
[0x1C50, 0x1C7F, "Ol Chiki", "olck"],
[0x0B00, 0x0B7F, "Oriya", "orya"],
[0xA880, 0xA8DF, "Saurashtra", "saur"],
[0x11180, 0x111DF, "Sharada", "shrd"],
[0x11580, 0x115FF, "Siddham", "sidd"],
[0x0D80, 0x0DFF, "Sinhala", "sinh"],
[0x111E0, 0x111FF, "Sinhala Archaic Numbers", "sinh"],
[0x110D0, 0x110FF, "Sora Sompeng", "sora"],
[0xA800, 0xA82F, "Syloti Nagri", "sylo"],
[0x11680, 0x116CF, "Takri", "takr"],
[0x0B80, 0x0BFF, "Tamil", "taml"],
[0x11FC0, 0x11FFF, "Tamil Supplement", "taml"],
[0x0C00, 0x0C7F, "Telugu", "telu"],
[0x0780, 0x07BF, "Thaana", "thaa"],
[0x11480, 0x114DF, "Tirhuta", "tirh"],
[0x1CD0, 0x1CFF, "Vedic Extensions", "deva"],
[0x1E2C0, 0x1E2FF, "Wancho", "wcho"],
[0x118A0, 0x118FF, "Warang Citi", "wara"],
]


var southeastasia = [
[0xAA00, 0xAA5F, "Cham", "cham"],
[0x10D00, 0x10D3F, "Hanifi Rohingya", "rogh"],
[0xA900, 0xA92F, "Kayah Li", "kali"],
[0x1780, 0x17FF, "Khmer", "khmr"],
[0x19E0, 0x19FF, "Khmer Symbols", "khmr"],
[0x0E80, 0x0EFF, "Lao", "laoo"],
[0x1000, 0x109F, "Myanmar", "mymr"],
[0xAA60, 0xAA7F, "Myanmar Extended-A", "mymr"],
[0xA9E0, 0xA9FF, "Myanmar Extended-B", "mymr"],
[0x1980, 0x19DF, "New Tai Lue", "talu"],
[0x16B00, 0x16B8F, "Pahawh Hmong", "hmng"],
[0x11AC0, 0x11AFF, "Pau Cin Hau", "pauc"],
[0x1950, 0x197F, "Tai Le", "tale"],
[0x1A20, 0x1AAF, "Tai Tham", "lana"],
[0xAA80, 0xAADF, "Tai Viet", "tavt"],
[0x0E00, 0x0E7F, "Thai", "thai"],
]


var oceania = [
[0x1B00, 0x1B7F, "Balinese", "bali"],
[0x1BC0, 0x1BFF, "Batak", "batk"],
[0x1A00, 0x1A1F, "Buginese", "bugi"],
[0x1740, 0x175F, "Buhid", "buhd"],
[0x1720, 0x173F, "Hanunoo", "hano"],
[0xA980, 0xA9DF, "Javanese", "java"],
[0x11EE0, 0x11EFF, "Makasar", "maka"],
[0xA930, 0xA95F, "Rejang", "rjng"],
[0x1B80, 0x1BBF, "Sundanese", "sund"],
[0x1CC0, 0x1CCF, "Sundanese Supplement", "sund"],
[0x1700, 0x171F, "Tagalog", "tglg"],
[0x1760, 0x177F, "Tagbanwa", "tagb"],
]


var eastasia = [
[0x3100, 0x312F, "Bopomofo", "bopo"],
[0x31A0, 0x31BF, "Bopomofo Extended", "bopo"],
[0x4E00, 0x4EFF, "CJK Unified Ideographs", "hans"],
[0xF900, 0xFAFF, "CJK Compatibility Ideographs", "hans"],
[0x2F800, 0x2FA1F, "CJK Compatibility Ideographs Supplement", "hans"],
[0x2F00, 0x2FDF, "Kangxi Radicals", "hans"],
[0x2E80, 0x2EFF, "CJK Radicals Supplement", "hans"],
[0x31C0, 0x31EF, "CJK Strokes", "hans"],
[0x2FF0, 0x2FFF, "Ideographic Description Characters", "hans"],
[0x16FE0, 0x16FFF, "Ideographic Symbols and Punctuation", "hans"],
[0xAC00, 0xACFF, "Hangul Syllables", "hang"],
[0x1100, 0x11FF, "Hangul Jamo", "hang"],
[0xA960, 0xA97F, "Hangul Jamo Extended-A", "hang"],
[0xD7B0, 0xD7FF, "Hangul Jamo Extended-B", "hang"],
[0x3130, 0x318F, "Hangul Compatibility Jamo", "hang"],
[0xFFA0, 0xFFDC, "Halfwidth Jamo", "hang"],
[0x3040, 0x309F, "Hiragana", "jpan"],
[0x1B100, 0x1B12F, "Kana Extended-A", "jpan"],
[0x1B000, 0x1B0FF, "Kana Supplement", "jpan"],
[0x1B130, 0x1B16F, "Small Kana Extension", "jpan"],
[0x30A0, 0x30FF, "Katakana", "jpan"],
[0x31F0, 0x31FF, "Katakana Phonetic Extensions", "jpan"],
[0xFF65, 0xFF9F, "Halfwidth Katakana", "jpan"],
[0x3190, 0x319F, "Kanbun", "hans"],
[0xA4D0, 0xA4FF, "Lisu", "lisu"],
[0x11FB0, 0x11FBF, "Lisu Supplement", "lisu"],
[0x18B00, 0x18CFF, "Khitan Small Script", "kits"],
[0x16F00, 0x16F9F, "Miao", "miao"],
[0x1B170, 0x1B2FF, "Nushu", "nshu"],
[0x17000, 0x170FF, "Tangut", "tang"],
[0x18800, 0x18AFF, "Tangut Components", "tang"],
[0x18D00, 0x18D7F, "Tangut Supplement", "tang"],
[0xA000, 0xA48F, "Yi Syllables", "yiii"],
[0xA490, 0xA4CF, "Yi Radicals", "yiii"],
]


var americas = [
[0x13A0, 0x13FF, "Cherokee", "cher"],
[0xAB70, 0xABBF, "Cherokee Supplement", "cher"],
[0x10400, 0x1044F, "Deseret", "dsrt"],
[0x1D2E0, 0x1D2FF, "Mayan Numerals", "????"],
[0x1E100, 0x1E14F, "Nyiakeng Puachue Hmong", "hmnp"],
[0x104B0, 0x104FF, "Osage", "osge"],
[0x1400, 0x167F, "Unified Canadian Aboriginal Syllabics", "cans"],
[0x18B0, 0x18FF, "UCAS Extended", "cans"],
]








var scriptGroups = [


/*
<optgroup label="Other">
[0xFB00, 0xFB4F, "Alphabetic Presentation Forms", ""],
[0xFF00, 0xFFEF, "Halfwidth and Fullwidth Forms", ""],
                </optgroup>
                <optgroup label="Notational Systems">
  [0x2800, 0x28FF, "Braille Patterns", ""],
[0x1D100, 0x1D1FF, "Musical Symbols", ""],
                <option value="2669:266F" class="pb">More Musical Symbols</option>
[0x1D200, 0x1D24F, "Ancient Greek Musical Notation", ""],
[0x1D000, 0x1D0FF, "Byzantine Musical Symbols", ""],
[0x1BC00, 0x1BC9F, "Duployan", ""],
[0x1BCA0, 0x1BCAF, "Shorthand Format Controls", ""],
[0x1D800, 0x1DAAF, "Sutton SignWriting", ""],
                </optgroup>
                <optgroup label="Punctuation">
[0x2000, 0x206F, "General Punctuation", ""],
                <option value="0021:007F" class="pb">ASCII Punctuation</option>
                <option value="00A1:00BF" class="pb">Latin-1 Punctuation</option>
[0x2E00, 0x2E7F, "Supplemental Punctuation", ""],
[0x3000, 0x303F, "CJK Symbols and Punctuation", ""],
                </optgroup>
                <optgroup label="Compatibility punctuation">
[0xFE50, 0xFE6F, "Small Form Variants", ""],
[0xFE30, 0xFE4F, "CJK Compatibility Forms", ""],
                <option value="FF01:FF60" class="pb">Fullwidth ASCII Punctuation</option>
[0xFE10, 0xFE1F, "Vertical Forms", ""],
                </optgroup>
                <optgroup label="Alphanumeric Symbols">
[0x1EE00, 0x1EEFF, "Arabic Mathematical Alphabetic Symbols", ""],
[0x2100, 0x214F, "Letterlike Symbols", ""],
[0x10190, 0x101CF, "Roman Symbols", ""],
[0x1D400, 0x1D7FF, "Mathematical Alphanumeric Symbols", ""],
[0x2460, 0x24FF, "Enclosed Alphanumerics", ""],
[0x1F100, 0x1F1FF, "Enclosed Alphanumeric Supplement", ""],
[0x3200, 0x32FF, "Enclosed CJK Letters and Months", ""],
[0x1F200, 0x1F2FF, "Enclosed Ideographic Supplement", ""],
[0x3300, 0x33FF, "CJK Compatibility", ""],
                </optgroup>
                <optgroup label="Technical Symbols">
[0x2400, 0x243F, "Control Pictures", ""],
[0x2300, 0x23FF, "Miscellaneous Technical", ""],
[0x2440, 0x245F, "Optical Character Recognition", ""],
<option value="1FB00:1FBFF">Symbols for Legacy Computing *</option>
                </optgroup>
                <optgroup label="Numbers and Digits">
[0xA830, 0xA83F, "Common Indic Number Forms", ""],
[0x1D360, 0x1D37F, "Counting Rod Numerals", ""],
[0x12400, 0x1247F, "Cuneiform Numbers and Punctuation", ""],
                <option value="FF10:FF19" class="pb">Fullwidth ASCII Digits</option>
[0x1EC70, 0x1ECBF, "Indic Siyaq Numbers", ""],
[0x1ED00, 0x1ED4F, "Ottoman Siyaq Numbers", ""],
[0x2150, 0x218F, "Number Forms", ""],
[0x10E60, 0x10E7F, "Rumi Numeral Symbols", ""],
[0x2070, 0x209F, "Superscripts and Subscripts", ""],
                </optgroup>
                <optgroup label="Arrows">
[0x2190, 0x21FF, "Arrows", ""],
[0x27F0, 0x27FF, "Supplemental Arrows-A", ""],
[0x2900, 0x297F, "Supplemental Arrows-B", ""],
[0x1F800, 0x1F8FF, "Supplemental Arrows-C", ""],
[0x2B00, 0x2BFF, "Miscellaneous Symbols and Arrows", ""],
                </optgroup>
                <optgroup label="Mathematical Symbols">
[0x1D400, 0x1D7FF, "Mathematical Alphanumeric Symbols", ""],
[0x1EE00, 0x1EEFF, "Arabic Mathematical Alphabetic Symbols", ""],
[0x2100, 0x214F, "Letterlike Symbols", ""],
[0x2200, 0x22FF, "Mathematical Operators", ""],
[0x27C0, 0x27EF, "Miscellaneous Mathematical Symbols-A", ""],
[0x2980, 0x29FF, "Miscellaneous Mathematical Symbols-B", ""],
[0x2A00, 0x2AFF, "Supplemental Mathematical Operators", ""],
                <option value="2308:230B" class="pb">Ceilings and Floors</option>
[0x25A0, 0x25FF, "Geometric Shapes", ""],
[0x1F780, 0x1F7FF, "Geometric Shapes Extended", ""],
[0x2500, 0x257F, "Box Drawing", ""],
[0x2580, 0x259F, "Block Elements", ""],
                </optgroup>
                <optgroup label="Emoji & Pictographs">
  [0x2700, 0x27BF, "Dingbats", ""],
[0x1F650, 0x1F67F, "Ornamental Dingbats", ""],
[0x1F600, 0x1F64F, "Emoticons", ""],
[0x2600, 0x26FF, "Miscellaneous Symbols", ""],
[0x1F300, 0x1F5FF, "Miscellaneous Symbols And Pictographs", ""],
[0x1F900, 0x1F9FF, "Supplemental Symbols &amp; Pictographs", ""],
[0x1FA70, 0x1FAFF, "Symbols and Pictographs Extended-A", ""],
[0x1F680, 0x1F6FF, "Transport And Map Symbols", ""],
                </optgroup>
                <optgroup label="Game Symbols">
                <option value="2654:265F" class="pb">Chess</option>
[0x1FA00, 0x1FA6F, "Chess Symbols", ""],
[0x1F030, 0x1F09F, "Domino Tiles", ""],
                <option value="26C0:26C3" class="pb">Draughts</option>
                <option value="2616:2617" class="pb">Japanese Chess</option>
[0x1F000, 0x1F02F, "Mahjong Tiles", ""],
[0x1F0A0, 0x1F0FF, "Playing Cards", ""],
                <option value="2660:2667" class="pb">Playing Cards</option>
                </optgroup>
                <optgroup label="Other Symbols">
[0x1F700, 0x1F77F, "Alchemical Symbols", ""],
[0x10190, 0x101CF, "Ancient Symbols", ""],
[0x20A0, 0x20CF, "Currency Symbols", ""],
[0x4DC0, 0x4DFF, "Yijing Hexagram Symbols", ""],
                <option value="268A:268F" class="pb">Yijing Mono and Digrams</option>
                <option value="2630:2637" class="pb">Yijing Trigrams</option>
[0x1D300, 0x1D35F, "Tai Xuan Jing Symbols", ""],
*/
]

