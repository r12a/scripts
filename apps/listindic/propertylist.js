rawPropertyListStr = `
# IndicSyllabicCategory-13.0.0.txt
# Date: 2019-07-22, 19:55:00 GMT [KW, RP]
# © 2019 Unicode®, Inc.
# Unicode and the Unicode Logo are registered trademarks of Unicode, Inc. in the U.S. and other countries.
# For terms of use, see http://www.unicode.org/terms_of_use.html
#
# For documentation, see UAX #44: Unicode Character Database,
# at http://www.unicode.org/reports/tr44/
#
# This file defines the following property:
#
#    Indic_Syllabic_Category     enumerated property
#
# Scope: This property is aimed at two general problem
# areas involving the analysis and processing of Indic scripts:
#
#   1. Specification of syllabic structure.
#   2. Specification of segmentation rules.
#
# Both of these problem areas may benefit from having defined subtypes
# of Indic script characters which are relevant to how Indic
# syllables (or aksaras) are constructed. Note that rules for
# syllabic structure in Indic scripts may differ significantly
# from how phonological syllables are defined.
#
# Format:
#    Field 0  Unicode code point value or range of code point values
#    Field 1  Indic_Syllabic_Category property value
#
# Field 1 is followed by a comment field, starting with the number sign '#',
# which shows the General_Category property value, the Unicode character name
# or names, and, in lines with ranges of code points, the code point count in
# square brackets.
#
# The scripts assessed as Indic in the structural sense used for the
# Indic_Syllabic_Category are the following:
#
# Ahom, Balinese, Batak, Bengali, Bhaiksuki, Brahmi, Buginese, Buhid,
# Chakma, Cham, Devanagari, Dives Akuru, Dogra, Grantha, Gujarati,
# Gunjala Gondi, Gurmukhi, Hanunoo, Javanese, Kaithi, Kannada,
# Kayah Li, Kharoshthi, Khmer, Khojki, Khudawadi, Lao, Lepcha, Limbu,
# Mahajani, Makasar, Malayalam, Marchen, Masaram Gondi, Meetei Mayek,
# Modi, Multani, Myanmar, Nandinagari, Newa, New Tai Lue, Oriya,
# Phags-pa, Rejang, Saurashtra, Sharada, Siddham, Sinhala, Soyombo,
# Sundanese, Syloti Nagri, Tagalog, Tagbanwa, Tai Le, Tai Tham,
# Tai Viet, Takri, Tamil, Telugu, Thai, Tibetan, Tirhuta, and
# Zanabazar Square.
#
# All characters for all other scripts not in that list
# take the default value for this property, unless they
# are individually listed in this data file.
#

# ================================================

# Property: Indic_Syllabic_Category
#
#  All code points not explicitly listed for Indic_Syllabic_Category
#  have the value Other.
#
# @missing: 0000..10FFFF; Other

# ================================================

# Indic_Syllabic_Category=Bindu

# Bindu/Anusvara (nasalization or -n)

# [Not derivable]

0900..0902    ; Bindu # Mn   [3] DEVANAGARI SIGN INVERTED CANDRABINDU..DEVANAGARI SIGN ANUSVARA
0981          ; Bindu # Mn       BENGALI SIGN CANDRABINDU
0982          ; Bindu # Mc       BENGALI SIGN ANUSVARA
09FC          ; Bindu # Lo       BENGALI LETTER VEDIC ANUSVARA
0A01..0A02    ; Bindu # Mn   [2] GURMUKHI SIGN ADAK BINDI..GURMUKHI SIGN BINDI
0A70          ; Bindu # Mn       GURMUKHI TIPPI
0A81..0A82    ; Bindu # Mn   [2] GUJARATI SIGN CANDRABINDU..GUJARATI SIGN ANUSVARA
0B01          ; Bindu # Mn       ORIYA SIGN CANDRABINDU
0B02          ; Bindu # Mc       ORIYA SIGN ANUSVARA
0B82          ; Bindu # Mn       TAMIL SIGN ANUSVARA
0C00          ; Bindu # Mn       TELUGU SIGN COMBINING CANDRABINDU ABOVE
0C01..0C02    ; Bindu # Mc   [2] TELUGU SIGN CANDRABINDU..TELUGU SIGN ANUSVARA
0C04          ; Bindu # Mn       TELUGU SIGN COMBINING ANUSVARA ABOVE
0C80          ; Bindu # Lo       KANNADA SIGN SPACING CANDRABINDU
0C81          ; Bindu # Mn       KANNADA SIGN CANDRABINDU
0C82          ; Bindu # Mc       KANNADA SIGN ANUSVARA
0D00..0D01    ; Bindu # Mn   [2] MALAYALAM SIGN COMBINING ANUSVARA ABOVE..MALAYALAM SIGN CANDRABINDU
0D02          ; Bindu # Mc       MALAYALAM SIGN ANUSVARA
0D04          ; Bindu # Lo       MALAYALAM LETTER VEDIC ANUSVARA
0D81          ; Bindu # Mn       SINHALA SIGN CANDRABINDU
0D82          ; Bindu # Mc       SINHALA SIGN ANUSVARAYA
0E4D          ; Bindu # Mn       THAI CHARACTER NIKHAHIT
0ECD          ; Bindu # Mn       LAO NIGGAHITA
0F7E          ; Bindu # Mn       TIBETAN SIGN RJES SU NGA RO
0F82..0F83    ; Bindu # Mn   [2] TIBETAN SIGN NYI ZLA NAA DA..TIBETAN SIGN SNA LDAN
1036          ; Bindu # Mn       MYANMAR SIGN ANUSVARA
17C6          ; Bindu # Mn       KHMER SIGN NIKAHIT
1932          ; Bindu # Mn       LIMBU SMALL LETTER ANUSVARA
1A74          ; Bindu # Mn       TAI THAM SIGN MAI KANG
1B00..1B02    ; Bindu # Mn   [3] BALINESE SIGN ULU RICEM..BALINESE SIGN CECEK
1B80          ; Bindu # Mn       SUNDANESE SIGN PANYECEK
1C34..1C35    ; Bindu # Mc   [2] LEPCHA CONSONANT SIGN NYIN-DO..LEPCHA CONSONANT SIGN KANG
A80B          ; Bindu # Mn       SYLOTI NAGRI SIGN ANUSVARA
A873          ; Bindu # Lo       PHAGS-PA LETTER CANDRABINDU
A880          ; Bindu # Mc       SAURASHTRA SIGN ANUSVARA
A8C5          ; Bindu # Mn       SAURASHTRA SIGN CANDRABINDU
A8F2..A8F3    ; Bindu # Lo   [2] DEVANAGARI SIGN SPACING CANDRABINDU..DEVANAGARI SIGN CANDRABINDU VIRAMA
A980..A981    ; Bindu # Mn   [2] JAVANESE SIGN PANYANGGA..JAVANESE SIGN CECAK
10A0E         ; Bindu # Mn       KHAROSHTHI SIGN ANUSVARA
11000         ; Bindu # Mc       BRAHMI SIGN CANDRABINDU
11001         ; Bindu # Mn       BRAHMI SIGN ANUSVARA
11080..11081  ; Bindu # Mn   [2] KAITHI SIGN CANDRABINDU..KAITHI SIGN ANUSVARA
11100..11101  ; Bindu # Mn   [2] CHAKMA SIGN CANDRABINDU..CHAKMA SIGN ANUSVARA
11180..11181  ; Bindu # Mn   [2] SHARADA SIGN CANDRABINDU..SHARADA SIGN ANUSVARA
111CF         ; Bindu # Mn       SHARADA SIGN INVERTED CANDRABINDU
11234         ; Bindu # Mn       KHOJKI SIGN ANUSVARA
112DF         ; Bindu # Mn       KHUDAWADI SIGN ANUSVARA
11300..11301  ; Bindu # Mn   [2] GRANTHA SIGN COMBINING ANUSVARA ABOVE..GRANTHA SIGN CANDRABINDU
11302         ; Bindu # Mc       GRANTHA SIGN ANUSVARA
1135E..1135F  ; Bindu # Lo   [2] GRANTHA LETTER VEDIC ANUSVARA..GRANTHA LETTER VEDIC DOUBLE ANUSVARA
11443..11444  ; Bindu # Mn   [2] NEWA SIGN CANDRABINDU..NEWA SIGN ANUSVARA
1145F         ; Bindu # Lo       NEWA LETTER VEDIC ANUSVARA
114BF..114C0  ; Bindu # Mn   [2] TIRHUTA SIGN CANDRABINDU..TIRHUTA SIGN ANUSVARA
115BC..115BD  ; Bindu # Mn   [2] SIDDHAM SIGN CANDRABINDU..SIDDHAM SIGN ANUSVARA
1163D         ; Bindu # Mn       MODI SIGN ANUSVARA
116AB         ; Bindu # Mn       TAKRI SIGN ANUSVARA
11837         ; Bindu # Mn       DOGRA SIGN ANUSVARA
1193B..1193C  ; Bindu # Mn   [2] DIVES AKURU SIGN ANUSVARA..DIVES AKURU SIGN CANDRABINDU
119DE         ; Bindu # Mc       NANDINAGARI SIGN ANUSVARA
11A35..11A38  ; Bindu # Mn   [4] ZANABAZAR SQUARE SIGN CANDRABINDU..ZANABAZAR SQUARE SIGN ANUSVARA
11A96         ; Bindu # Mn       SOYOMBO SIGN ANUSVARA
11C3C..11C3D  ; Bindu # Mn   [2] BHAIKSUKI SIGN CANDRABINDU..BHAIKSUKI SIGN ANUSVARA
11CB5..11CB6  ; Bindu # Mn   [2] MARCHEN SIGN ANUSVARA..MARCHEN SIGN CANDRABINDU
11D40         ; Bindu # Mn       MASARAM GONDI SIGN ANUSVARA
11D95         ; Bindu # Mn       GUNJALA GONDI SIGN ANUSVARA

# ================================================

# Indic_Syllabic_Category=Visarga

# Visarga (-h)
# Excludes letters for jihvamuliya and upadhmaniya, which are
#   related, but structured somewhat differently.

# [Not derivable]

0903          ; Visarga # Mc       DEVANAGARI SIGN VISARGA
0983          ; Visarga # Mc       BENGALI SIGN VISARGA
0A03          ; Visarga # Mc       GURMUKHI SIGN VISARGA
0A83          ; Visarga # Mc       GUJARATI SIGN VISARGA
0B03          ; Visarga # Mc       ORIYA SIGN VISARGA
0C03          ; Visarga # Mc       TELUGU SIGN VISARGA
0C83          ; Visarga # Mc       KANNADA SIGN VISARGA
0D03          ; Visarga # Mc       MALAYALAM SIGN VISARGA
0D83          ; Visarga # Mc       SINHALA SIGN VISARGAYA
0F7F          ; Visarga # Mc       TIBETAN SIGN RNAM BCAD
1038          ; Visarga # Mc       MYANMAR SIGN VISARGA
17C7          ; Visarga # Mc       KHMER SIGN REAHMUK
1B04          ; Visarga # Mc       BALINESE SIGN BISAH
1B82          ; Visarga # Mc       SUNDANESE SIGN PANGWISAD
A881          ; Visarga # Mc       SAURASHTRA SIGN VISARGA
A983          ; Visarga # Mc       JAVANESE SIGN WIGNYAN
AAF5          ; Visarga # Mc       MEETEI MAYEK VOWEL SIGN VISARGA
10A0F         ; Visarga # Mn       KHAROSHTHI SIGN VISARGA
11002         ; Visarga # Mc       BRAHMI SIGN VISARGA
11082         ; Visarga # Mc       KAITHI SIGN VISARGA
11102         ; Visarga # Mn       CHAKMA SIGN VISARGA
11182         ; Visarga # Mc       SHARADA SIGN VISARGA
11303         ; Visarga # Mc       GRANTHA SIGN VISARGA
11445         ; Visarga # Mc       NEWA SIGN VISARGA
114C1         ; Visarga # Mc       TIRHUTA SIGN VISARGA
115BE         ; Visarga # Mc       SIDDHAM SIGN VISARGA
1163E         ; Visarga # Mc       MODI SIGN VISARGA
116AC         ; Visarga # Mc       TAKRI SIGN VISARGA
11838         ; Visarga # Mc       DOGRA SIGN VISARGA
119DF         ; Visarga # Mc       NANDINAGARI SIGN VISARGA
11A39         ; Visarga # Mc       ZANABAZAR SQUARE SIGN VISARGA
11A97         ; Visarga # Mc       SOYOMBO SIGN VISARGA
11C3E         ; Visarga # Mc       BHAIKSUKI SIGN VISARGA
11D41         ; Visarga # Mn       MASARAM GONDI SIGN VISARGA
11D96         ; Visarga # Mc       GUNJALA GONDI SIGN VISARGA

# ================================================

# Indic_Syllabic_Category=Avagraha

# Avagraha (elision of initial a- in sandhi)

# [Not derivable]

093D          ; Avagraha # Lo       DEVANAGARI SIGN AVAGRAHA
09BD          ; Avagraha # Lo       BENGALI SIGN AVAGRAHA
0ABD          ; Avagraha # Lo       GUJARATI SIGN AVAGRAHA
0B3D          ; Avagraha # Lo       ORIYA SIGN AVAGRAHA
0C3D          ; Avagraha # Lo       TELUGU SIGN AVAGRAHA
0CBD          ; Avagraha # Lo       KANNADA SIGN AVAGRAHA
0D3D          ; Avagraha # Lo       MALAYALAM SIGN AVAGRAHA
0F85          ; Avagraha # Po       TIBETAN MARK PALUTA
17DC          ; Avagraha # Lo       KHMER SIGN AVAKRAHASANYA
1BBA          ; Avagraha # Lo       SUNDANESE AVAGRAHA
111C1         ; Avagraha # Lo       SHARADA SIGN AVAGRAHA
1133D         ; Avagraha # Lo       GRANTHA SIGN AVAGRAHA
11447         ; Avagraha # Lo       NEWA SIGN AVAGRAHA
114C4         ; Avagraha # Lo       TIRHUTA SIGN AVAGRAHA
119E1         ; Avagraha # Lo       NANDINAGARI SIGN AVAGRAHA
11A9D         ; Avagraha # Lo       SOYOMBO MARK PLUTA
11C40         ; Avagraha # Lo       BHAIKSUKI SIGN AVAGRAHA

# ================================================

# Indic_Syllabic_Category=Nukta

# Nukta (diacritic for borrowed consonants or other consonant
# modifications). Note that while the resulting sound is typically a
# consonant, the base letter a nukta follows may be an independent
# vowel. For example, <U+0A85 GUJARATI LETTER A, U+0AFD GUJARATI
# SIGN THREE-DOT NUKTA ABOVE> is used to transcribe ARABIC LETTER
# AIN.

# [Not derivable]

093C          ; Nukta # Mn       DEVANAGARI SIGN NUKTA
09BC          ; Nukta # Mn       BENGALI SIGN NUKTA
0A3C          ; Nukta # Mn       GURMUKHI SIGN NUKTA
0ABC          ; Nukta # Mn       GUJARATI SIGN NUKTA
0AFD..0AFF    ; Nukta # Mn   [3] GUJARATI SIGN THREE-DOT NUKTA ABOVE..GUJARATI SIGN TWO-CIRCLE NUKTA ABOVE
0B3C          ; Nukta # Mn       ORIYA SIGN NUKTA
0CBC          ; Nukta # Mn       KANNADA SIGN NUKTA
0F39          ; Nukta # Mn       TIBETAN MARK TSA -PHRU
1B34          ; Nukta # Mn       BALINESE SIGN REREKAN
1BE6          ; Nukta # Mn       BATAK SIGN TOMPI
1C37          ; Nukta # Mn       LEPCHA SIGN NUKTA
A9B3          ; Nukta # Mn       JAVANESE SIGN CECAK TELU
10A38..10A3A  ; Nukta # Mn   [3] KHAROSHTHI SIGN BAR ABOVE..KHAROSHTHI SIGN DOT BELOW
110BA         ; Nukta # Mn       KAITHI SIGN NUKTA
11173         ; Nukta # Mn       MAHAJANI SIGN NUKTA
111CA         ; Nukta # Mn       SHARADA SIGN NUKTA
11236         ; Nukta # Mn       KHOJKI SIGN NUKTA
112E9         ; Nukta # Mn       KHUDAWADI SIGN NUKTA
1133B..1133C  ; Nukta # Mn   [2] COMBINING BINDU BELOW..GRANTHA SIGN NUKTA
11446         ; Nukta # Mn       NEWA SIGN NUKTA
114C3         ; Nukta # Mn       TIRHUTA SIGN NUKTA
115C0         ; Nukta # Mn       SIDDHAM SIGN NUKTA
116B7         ; Nukta # Mn       TAKRI SIGN NUKTA
1183A         ; Nukta # Mn       DOGRA SIGN NUKTA
11943         ; Nukta # Mn       DIVES AKURU SIGN NUKTA
11D42         ; Nukta # Mn       MASARAM GONDI SIGN NUKTA

# ================================================

# Indic_Syllabic_Category=Virama

# Virama (killing of inherent vowel in consonant sequence
#         or consonant stacker)
# Only includes characters that can act both as visible killer viramas
# and consonant stackers. Separate property values exist for characters
# that can only act as pure killers or only as consonant stackers.

# [Derivation: (ccc=9) - (InSC=Pure_Killer) - (InSC=Invisible_Stacker)
#  - (InSC=Number_Joiner) - 2D7F]

094D          ; Virama # Mn       DEVANAGARI SIGN VIRAMA
09CD          ; Virama # Mn       BENGALI SIGN VIRAMA
0A4D          ; Virama # Mn       GURMUKHI SIGN VIRAMA
0ACD          ; Virama # Mn       GUJARATI SIGN VIRAMA
0B4D          ; Virama # Mn       ORIYA SIGN VIRAMA
0BCD          ; Virama # Mn       TAMIL SIGN VIRAMA
0C4D          ; Virama # Mn       TELUGU SIGN VIRAMA
0CCD          ; Virama # Mn       KANNADA SIGN VIRAMA
0D4D          ; Virama # Mn       MALAYALAM SIGN VIRAMA
0DCA          ; Virama # Mn       SINHALA SIGN AL-LAKUNA
1B44          ; Virama # Mc       BALINESE ADEG ADEG
A806          ; Virama # Mn       SYLOTI NAGRI SIGN HASANTA
A8C4          ; Virama # Mn       SAURASHTRA SIGN VIRAMA
A9C0          ; Virama # Mc       JAVANESE PANGKON
11046         ; Virama # Mn       BRAHMI VIRAMA
110B9         ; Virama # Mn       KAITHI SIGN VIRAMA
111C0         ; Virama # Mc       SHARADA SIGN VIRAMA
11235         ; Virama # Mc       KHOJKI SIGN VIRAMA
1134D         ; Virama # Mc       GRANTHA SIGN VIRAMA
11442         ; Virama # Mn       NEWA SIGN VIRAMA
114C2         ; Virama # Mn       TIRHUTA SIGN VIRAMA
115BF         ; Virama # Mn       SIDDHAM SIGN VIRAMA
1163F         ; Virama # Mn       MODI SIGN VIRAMA
116B6         ; Virama # Mc       TAKRI SIGN VIRAMA
11839         ; Virama # Mn       DOGRA SIGN VIRAMA
119E0         ; Virama # Mn       NANDINAGARI SIGN VIRAMA
11C3F         ; Virama # Mn       BHAIKSUKI SIGN VIRAMA

# ================================================

# Indic_Syllabic_Category=Pure_Killer

# Pure killer (killing of inherent vowel in consonant sequence,
#              with no consonant stacking behavior)

# [Not derivable]

0D3B..0D3C    ; Pure_Killer # Mn   [2] MALAYALAM SIGN VERTICAL BAR VIRAMA..MALAYALAM SIGN CIRCULAR VIRAMA
0E3A          ; Pure_Killer # Mn       THAI CHARACTER PHINTHU
0E4E          ; Pure_Killer # Mn       THAI CHARACTER YAMAKKAN
0EBA          ; Pure_Killer # Mn       LAO SIGN PALI VIRAMA
0F84          ; Pure_Killer # Mn       TIBETAN MARK HALANTA
103A          ; Pure_Killer # Mn       MYANMAR SIGN ASAT
1714          ; Pure_Killer # Mn       TAGALOG SIGN VIRAMA
1734          ; Pure_Killer # Mn       HANUNOO SIGN PAMUDPOD
17D1          ; Pure_Killer # Mn       KHMER SIGN VIRIAM
1A7A          ; Pure_Killer # Mn       TAI THAM SIGN RA HAAM
1BAA          ; Pure_Killer # Mc       SUNDANESE SIGN PAMAAEH
1BF2..1BF3    ; Pure_Killer # Mc   [2] BATAK PANGOLAT..BATAK PANONGONAN
A82C          ; Pure_Killer # Mn       SYLOTI NAGRI SIGN ALTERNATE HASANTA
A953          ; Pure_Killer # Mc       REJANG VIRAMA
ABED          ; Pure_Killer # Mn       MEETEI MAYEK APUN IYEK
11134         ; Pure_Killer # Mn       CHAKMA MAAYYAA
112EA         ; Pure_Killer # Mn       KHUDAWADI SIGN VIRAMA
1172B         ; Pure_Killer # Mn       AHOM SIGN KILLER
1193D         ; Pure_Killer # Mc       DIVES AKURU SIGN HALANTA
11A34         ; Pure_Killer # Mn       ZANABAZAR SQUARE SIGN VIRAMA
11D44         ; Pure_Killer # Mn       MASARAM GONDI SIGN HALANTA

# ================================================

# Indic_Syllabic_Category=Invisible_Stacker

# Invisible stacker (invisible consonant stacker virama).
#
# Note that in some scripts, such as Kharoshthi and Masaram Gondi, an invisible
# stacker may have a second function, changing the shape and/or location of the
# consonant preceding it, even when there is no consonant following the
# invisible stacker.

# [Not derivable]

1039          ; Invisible_Stacker # Mn       MYANMAR SIGN VIRAMA
17D2          ; Invisible_Stacker # Mn       KHMER SIGN COENG
1A60          ; Invisible_Stacker # Mn       TAI THAM SIGN SAKOT
1BAB          ; Invisible_Stacker # Mn       SUNDANESE SIGN VIRAMA
AAF6          ; Invisible_Stacker # Mn       MEETEI MAYEK VIRAMA
10A3F         ; Invisible_Stacker # Mn       KHAROSHTHI VIRAMA
11133         ; Invisible_Stacker # Mn       CHAKMA VIRAMA
1193E         ; Invisible_Stacker # Mn       DIVES AKURU VIRAMA
11A47         ; Invisible_Stacker # Mn       ZANABAZAR SQUARE SUBJOINER
11A99         ; Invisible_Stacker # Mn       SOYOMBO SUBJOINER
11D45         ; Invisible_Stacker # Mn       MASARAM GONDI VIRAMA
11D97         ; Invisible_Stacker # Mn       GUNJALA GONDI VIRAMA

# ================================================

# Indic_Syllabic_Category=Vowel_Independent

# Independent Vowels (contrasted with matras)

# [Not derivable]

0904..0914    ; Vowel_Independent # Lo  [17] DEVANAGARI LETTER SHORT A..DEVANAGARI LETTER AU
0960..0961    ; Vowel_Independent # Lo   [2] DEVANAGARI LETTER VOCALIC RR..DEVANAGARI LETTER VOCALIC LL
0972..0977    ; Vowel_Independent # Lo   [6] DEVANAGARI LETTER CANDRA A..DEVANAGARI LETTER UUE
0985..098C    ; Vowel_Independent # Lo   [8] BENGALI LETTER A..BENGALI LETTER VOCALIC L
098F..0990    ; Vowel_Independent # Lo   [2] BENGALI LETTER E..BENGALI LETTER AI
0993..0994    ; Vowel_Independent # Lo   [2] BENGALI LETTER O..BENGALI LETTER AU
09E0..09E1    ; Vowel_Independent # Lo   [2] BENGALI LETTER VOCALIC RR..BENGALI LETTER VOCALIC LL
0A05..0A0A    ; Vowel_Independent # Lo   [6] GURMUKHI LETTER A..GURMUKHI LETTER UU
0A0F..0A10    ; Vowel_Independent # Lo   [2] GURMUKHI LETTER EE..GURMUKHI LETTER AI
0A13..0A14    ; Vowel_Independent # Lo   [2] GURMUKHI LETTER OO..GURMUKHI LETTER AU
0A85..0A8D    ; Vowel_Independent # Lo   [9] GUJARATI LETTER A..GUJARATI VOWEL CANDRA E
0A8F..0A91    ; Vowel_Independent # Lo   [3] GUJARATI LETTER E..GUJARATI VOWEL CANDRA O
0A93..0A94    ; Vowel_Independent # Lo   [2] GUJARATI LETTER O..GUJARATI LETTER AU
0AE0..0AE1    ; Vowel_Independent # Lo   [2] GUJARATI LETTER VOCALIC RR..GUJARATI LETTER VOCALIC LL
0B05..0B0C    ; Vowel_Independent # Lo   [8] ORIYA LETTER A..ORIYA LETTER VOCALIC L
0B0F..0B10    ; Vowel_Independent # Lo   [2] ORIYA LETTER E..ORIYA LETTER AI
0B13..0B14    ; Vowel_Independent # Lo   [2] ORIYA LETTER O..ORIYA LETTER AU
0B60..0B61    ; Vowel_Independent # Lo   [2] ORIYA LETTER VOCALIC RR..ORIYA LETTER VOCALIC LL
0B85..0B8A    ; Vowel_Independent # Lo   [6] TAMIL LETTER A..TAMIL LETTER UU
0B8E..0B90    ; Vowel_Independent # Lo   [3] TAMIL LETTER E..TAMIL LETTER AI
0B92..0B94    ; Vowel_Independent # Lo   [3] TAMIL LETTER O..TAMIL LETTER AU
0C05..0C0C    ; Vowel_Independent # Lo   [8] TELUGU LETTER A..TELUGU LETTER VOCALIC L
0C0E..0C10    ; Vowel_Independent # Lo   [3] TELUGU LETTER E..TELUGU LETTER AI
0C12..0C14    ; Vowel_Independent # Lo   [3] TELUGU LETTER O..TELUGU LETTER AU
0C60..0C61    ; Vowel_Independent # Lo   [2] TELUGU LETTER VOCALIC RR..TELUGU LETTER VOCALIC LL
0C85..0C8C    ; Vowel_Independent # Lo   [8] KANNADA LETTER A..KANNADA LETTER VOCALIC L
0C8E..0C90    ; Vowel_Independent # Lo   [3] KANNADA LETTER E..KANNADA LETTER AI
0C92..0C94    ; Vowel_Independent # Lo   [3] KANNADA LETTER O..KANNADA LETTER AU
0CE0..0CE1    ; Vowel_Independent # Lo   [2] KANNADA LETTER VOCALIC RR..KANNADA LETTER VOCALIC LL
0D05..0D0C    ; Vowel_Independent # Lo   [8] MALAYALAM LETTER A..MALAYALAM LETTER VOCALIC L
0D0E..0D10    ; Vowel_Independent # Lo   [3] MALAYALAM LETTER E..MALAYALAM LETTER AI
0D12..0D14    ; Vowel_Independent # Lo   [3] MALAYALAM LETTER O..MALAYALAM LETTER AU
0D5F..0D61    ; Vowel_Independent # Lo   [3] MALAYALAM LETTER ARCHAIC II..MALAYALAM LETTER VOCALIC LL
0D85..0D96    ; Vowel_Independent # Lo  [18] SINHALA LETTER AYANNA..SINHALA LETTER AUYANNA
1021..102A    ; Vowel_Independent # Lo  [10] MYANMAR LETTER A..MYANMAR LETTER AU
1052..1055    ; Vowel_Independent # Lo   [4] MYANMAR LETTER VOCALIC R..MYANMAR LETTER VOCALIC LL
1700..1702    ; Vowel_Independent # Lo   [3] TAGALOG LETTER A..TAGALOG LETTER U
1720..1722    ; Vowel_Independent # Lo   [3] HANUNOO LETTER A..HANUNOO LETTER U
1740..1742    ; Vowel_Independent # Lo   [3] BUHID LETTER A..BUHID LETTER U
1760..1762    ; Vowel_Independent # Lo   [3] TAGBANWA LETTER A..TAGBANWA LETTER U
17A3..17B3    ; Vowel_Independent # Lo  [17] KHMER INDEPENDENT VOWEL QAQ..KHMER INDEPENDENT VOWEL QAU
1A4D..1A52    ; Vowel_Independent # Lo   [6] TAI THAM LETTER I..TAI THAM LETTER OO
1B05..1B12    ; Vowel_Independent # Lo  [14] BALINESE LETTER AKARA..BALINESE LETTER OKARA TEDUNG
1B83..1B89    ; Vowel_Independent # Lo   [7] SUNDANESE LETTER A..SUNDANESE LETTER EU
1BE4..1BE5    ; Vowel_Independent # Lo   [2] BATAK LETTER I..BATAK LETTER U
A800..A801    ; Vowel_Independent # Lo   [2] SYLOTI NAGRI LETTER A..SYLOTI NAGRI LETTER I
A803..A805    ; Vowel_Independent # Lo   [3] SYLOTI NAGRI LETTER U..SYLOTI NAGRI LETTER O
A882..A891    ; Vowel_Independent # Lo  [16] SAURASHTRA LETTER A..SAURASHTRA LETTER AU
A8FE          ; Vowel_Independent # Lo       DEVANAGARI LETTER AY
A984..A988    ; Vowel_Independent # Lo   [5] JAVANESE LETTER A..JAVANESE LETTER U
A98C..A98E    ; Vowel_Independent # Lo   [3] JAVANESE LETTER E..JAVANESE LETTER O
AA00..AA05    ; Vowel_Independent # Lo   [6] CHAM LETTER A..CHAM LETTER O
AAE0..AAE1    ; Vowel_Independent # Lo   [2] MEETEI MAYEK LETTER E..MEETEI MAYEK LETTER O
ABCE..ABCF    ; Vowel_Independent # Lo   [2] MEETEI MAYEK LETTER UN..MEETEI MAYEK LETTER I
ABD1          ; Vowel_Independent # Lo       MEETEI MAYEK LETTER ATIYA
11005..11012  ; Vowel_Independent # Lo  [14] BRAHMI LETTER A..BRAHMI LETTER AU
11083..1108C  ; Vowel_Independent # Lo  [10] KAITHI LETTER A..KAITHI LETTER AU
11103..11106  ; Vowel_Independent # Lo   [4] CHAKMA LETTER AA..CHAKMA LETTER E
11183..11190  ; Vowel_Independent # Lo  [14] SHARADA LETTER A..SHARADA LETTER AU
11200..11207  ; Vowel_Independent # Lo   [8] KHOJKI LETTER A..KHOJKI LETTER AU
11280..11283  ; Vowel_Independent # Lo   [4] MULTANI LETTER A..MULTANI LETTER E
112B0..112B9  ; Vowel_Independent # Lo  [10] KHUDAWADI LETTER A..KHUDAWADI LETTER AU
11305..1130C  ; Vowel_Independent # Lo   [8] GRANTHA LETTER A..GRANTHA LETTER VOCALIC L
1130F..11310  ; Vowel_Independent # Lo   [2] GRANTHA LETTER EE..GRANTHA LETTER AI
11313..11314  ; Vowel_Independent # Lo   [2] GRANTHA LETTER OO..GRANTHA LETTER AU
11360..11361  ; Vowel_Independent # Lo   [2] GRANTHA LETTER VOCALIC RR..GRANTHA LETTER VOCALIC LL
11400..1140D  ; Vowel_Independent # Lo  [14] NEWA LETTER A..NEWA LETTER AU
11481..1148E  ; Vowel_Independent # Lo  [14] TIRHUTA LETTER A..TIRHUTA LETTER AU
11580..1158D  ; Vowel_Independent # Lo  [14] SIDDHAM LETTER A..SIDDHAM LETTER AU
115D8..115DB  ; Vowel_Independent # Lo   [4] SIDDHAM LETTER THREE-CIRCLE ALTERNATE I..SIDDHAM LETTER ALTERNATE U
11600..1160D  ; Vowel_Independent # Lo  [14] MODI LETTER A..MODI LETTER AU
11680..11689  ; Vowel_Independent # Lo  [10] TAKRI LETTER A..TAKRI LETTER AU
11800..11809  ; Vowel_Independent # Lo  [10] DOGRA LETTER A..DOGRA LETTER AU
11900..11906  ; Vowel_Independent # Lo   [7] DIVES AKURU LETTER A..DIVES AKURU LETTER E
11909         ; Vowel_Independent # Lo       DIVES AKURU LETTER O
119A0..119A7  ; Vowel_Independent # Lo   [8] NANDINAGARI LETTER A..NANDINAGARI LETTER VOCALIC RR
119AA..119AD  ; Vowel_Independent # Lo   [4] NANDINAGARI LETTER E..NANDINAGARI LETTER AU
11A00         ; Vowel_Independent # Lo       ZANABAZAR SQUARE LETTER A
11A50         ; Vowel_Independent # Lo       SOYOMBO LETTER A
11C00..11C08  ; Vowel_Independent # Lo   [9] BHAIKSUKI LETTER A..BHAIKSUKI LETTER VOCALIC L
11C0A..11C0D  ; Vowel_Independent # Lo   [4] BHAIKSUKI LETTER E..BHAIKSUKI LETTER AU
11D00..11D06  ; Vowel_Independent # Lo   [7] MASARAM GONDI LETTER A..MASARAM GONDI LETTER E
11D08..11D09  ; Vowel_Independent # Lo   [2] MASARAM GONDI LETTER AI..MASARAM GONDI LETTER O
11D0B         ; Vowel_Independent # Lo       MASARAM GONDI LETTER AU
11D60..11D65  ; Vowel_Independent # Lo   [6] GUNJALA GONDI LETTER A..GUNJALA GONDI LETTER UU
11D67..11D68  ; Vowel_Independent # Lo   [2] GUNJALA GONDI LETTER EE..GUNJALA GONDI LETTER AI
11D6A..11D6B  ; Vowel_Independent # Lo   [2] GUNJALA GONDI LETTER OO..GUNJALA GONDI LETTER AU

# ================================================

# Indic_Syllabic_Category=Vowel_Dependent

# Dependent Vowels (contrasted with independent vowels and/or with
# complex placement). Known as matras in Indic scripts. Also
# includes vowel modifiers that follow dependent (and sometimes
# independent) vowels.

# [Not derivable]

093A          ; Vowel_Dependent # Mn       DEVANAGARI VOWEL SIGN OE
093B          ; Vowel_Dependent # Mc       DEVANAGARI VOWEL SIGN OOE
093E..0940    ; Vowel_Dependent # Mc   [3] DEVANAGARI VOWEL SIGN AA..DEVANAGARI VOWEL SIGN II
0941..0948    ; Vowel_Dependent # Mn   [8] DEVANAGARI VOWEL SIGN U..DEVANAGARI VOWEL SIGN AI
0949..094C    ; Vowel_Dependent # Mc   [4] DEVANAGARI VOWEL SIGN CANDRA O..DEVANAGARI VOWEL SIGN AU
094E..094F    ; Vowel_Dependent # Mc   [2] DEVANAGARI VOWEL SIGN PRISHTHAMATRA E..DEVANAGARI VOWEL SIGN AW
0955..0957    ; Vowel_Dependent # Mn   [3] DEVANAGARI VOWEL SIGN CANDRA LONG E..DEVANAGARI VOWEL SIGN UUE
0962..0963    ; Vowel_Dependent # Mn   [2] DEVANAGARI VOWEL SIGN VOCALIC L..DEVANAGARI VOWEL SIGN VOCALIC LL
09BE..09C0    ; Vowel_Dependent # Mc   [3] BENGALI VOWEL SIGN AA..BENGALI VOWEL SIGN II
09C1..09C4    ; Vowel_Dependent # Mn   [4] BENGALI VOWEL SIGN U..BENGALI VOWEL SIGN VOCALIC RR
09C7..09C8    ; Vowel_Dependent # Mc   [2] BENGALI VOWEL SIGN E..BENGALI VOWEL SIGN AI
09CB..09CC    ; Vowel_Dependent # Mc   [2] BENGALI VOWEL SIGN O..BENGALI VOWEL SIGN AU
09D7          ; Vowel_Dependent # Mc       BENGALI AU LENGTH MARK
09E2..09E3    ; Vowel_Dependent # Mn   [2] BENGALI VOWEL SIGN VOCALIC L..BENGALI VOWEL SIGN VOCALIC LL
0A3E..0A40    ; Vowel_Dependent # Mc   [3] GURMUKHI VOWEL SIGN AA..GURMUKHI VOWEL SIGN II
0A41..0A42    ; Vowel_Dependent # Mn   [2] GURMUKHI VOWEL SIGN U..GURMUKHI VOWEL SIGN UU
0A47..0A48    ; Vowel_Dependent # Mn   [2] GURMUKHI VOWEL SIGN EE..GURMUKHI VOWEL SIGN AI
0A4B..0A4C    ; Vowel_Dependent # Mn   [2] GURMUKHI VOWEL SIGN OO..GURMUKHI VOWEL SIGN AU
0ABE..0AC0    ; Vowel_Dependent # Mc   [3] GUJARATI VOWEL SIGN AA..GUJARATI VOWEL SIGN II
0AC1..0AC5    ; Vowel_Dependent # Mn   [5] GUJARATI VOWEL SIGN U..GUJARATI VOWEL SIGN CANDRA E
0AC7..0AC8    ; Vowel_Dependent # Mn   [2] GUJARATI VOWEL SIGN E..GUJARATI VOWEL SIGN AI
0AC9          ; Vowel_Dependent # Mc       GUJARATI VOWEL SIGN CANDRA O
0ACB..0ACC    ; Vowel_Dependent # Mc   [2] GUJARATI VOWEL SIGN O..GUJARATI VOWEL SIGN AU
0AE2..0AE3    ; Vowel_Dependent # Mn   [2] GUJARATI VOWEL SIGN VOCALIC L..GUJARATI VOWEL SIGN VOCALIC LL
0B3E          ; Vowel_Dependent # Mc       ORIYA VOWEL SIGN AA
0B3F          ; Vowel_Dependent # Mn       ORIYA VOWEL SIGN I
0B40          ; Vowel_Dependent # Mc       ORIYA VOWEL SIGN II
0B41..0B44    ; Vowel_Dependent # Mn   [4] ORIYA VOWEL SIGN U..ORIYA VOWEL SIGN VOCALIC RR
0B47..0B48    ; Vowel_Dependent # Mc   [2] ORIYA VOWEL SIGN E..ORIYA VOWEL SIGN AI
0B4B..0B4C    ; Vowel_Dependent # Mc   [2] ORIYA VOWEL SIGN O..ORIYA VOWEL SIGN AU
0B55..0B56    ; Vowel_Dependent # Mn   [2] ORIYA SIGN OVERLINE..ORIYA AI LENGTH MARK
0B57          ; Vowel_Dependent # Mc       ORIYA AU LENGTH MARK
0B62..0B63    ; Vowel_Dependent # Mn   [2] ORIYA VOWEL SIGN VOCALIC L..ORIYA VOWEL SIGN VOCALIC LL
0BBE..0BBF    ; Vowel_Dependent # Mc   [2] TAMIL VOWEL SIGN AA..TAMIL VOWEL SIGN I
0BC0          ; Vowel_Dependent # Mn       TAMIL VOWEL SIGN II
0BC1..0BC2    ; Vowel_Dependent # Mc   [2] TAMIL VOWEL SIGN U..TAMIL VOWEL SIGN UU
0BC6..0BC8    ; Vowel_Dependent # Mc   [3] TAMIL VOWEL SIGN E..TAMIL VOWEL SIGN AI
0BCA..0BCC    ; Vowel_Dependent # Mc   [3] TAMIL VOWEL SIGN O..TAMIL VOWEL SIGN AU
0BD7          ; Vowel_Dependent # Mc       TAMIL AU LENGTH MARK
0C3E..0C40    ; Vowel_Dependent # Mn   [3] TELUGU VOWEL SIGN AA..TELUGU VOWEL SIGN II
0C41..0C44    ; Vowel_Dependent # Mc   [4] TELUGU VOWEL SIGN U..TELUGU VOWEL SIGN VOCALIC RR
0C46..0C48    ; Vowel_Dependent # Mn   [3] TELUGU VOWEL SIGN E..TELUGU VOWEL SIGN AI
0C4A..0C4C    ; Vowel_Dependent # Mn   [3] TELUGU VOWEL SIGN O..TELUGU VOWEL SIGN AU
0C55..0C56    ; Vowel_Dependent # Mn   [2] TELUGU LENGTH MARK..TELUGU AI LENGTH MARK
0C62..0C63    ; Vowel_Dependent # Mn   [2] TELUGU VOWEL SIGN VOCALIC L..TELUGU VOWEL SIGN VOCALIC LL
0CBE          ; Vowel_Dependent # Mc       KANNADA VOWEL SIGN AA
0CBF          ; Vowel_Dependent # Mn       KANNADA VOWEL SIGN I
0CC0..0CC4    ; Vowel_Dependent # Mc   [5] KANNADA VOWEL SIGN II..KANNADA VOWEL SIGN VOCALIC RR
0CC6          ; Vowel_Dependent # Mn       KANNADA VOWEL SIGN E
0CC7..0CC8    ; Vowel_Dependent # Mc   [2] KANNADA VOWEL SIGN EE..KANNADA VOWEL SIGN AI
0CCA..0CCB    ; Vowel_Dependent # Mc   [2] KANNADA VOWEL SIGN O..KANNADA VOWEL SIGN OO
0CCC          ; Vowel_Dependent # Mn       KANNADA VOWEL SIGN AU
0CD5..0CD6    ; Vowel_Dependent # Mc   [2] KANNADA LENGTH MARK..KANNADA AI LENGTH MARK
0CE2..0CE3    ; Vowel_Dependent # Mn   [2] KANNADA VOWEL SIGN VOCALIC L..KANNADA VOWEL SIGN VOCALIC LL
0D3E..0D40    ; Vowel_Dependent # Mc   [3] MALAYALAM VOWEL SIGN AA..MALAYALAM VOWEL SIGN II
0D41..0D44    ; Vowel_Dependent # Mn   [4] MALAYALAM VOWEL SIGN U..MALAYALAM VOWEL SIGN VOCALIC RR
0D46..0D48    ; Vowel_Dependent # Mc   [3] MALAYALAM VOWEL SIGN E..MALAYALAM VOWEL SIGN AI
0D4A..0D4C    ; Vowel_Dependent # Mc   [3] MALAYALAM VOWEL SIGN O..MALAYALAM VOWEL SIGN AU
0D57          ; Vowel_Dependent # Mc       MALAYALAM AU LENGTH MARK
0D62..0D63    ; Vowel_Dependent # Mn   [2] MALAYALAM VOWEL SIGN VOCALIC L..MALAYALAM VOWEL SIGN VOCALIC LL
0DCF..0DD1    ; Vowel_Dependent # Mc   [3] SINHALA VOWEL SIGN AELA-PILLA..SINHALA VOWEL SIGN DIGA AEDA-PILLA
0DD2..0DD4    ; Vowel_Dependent # Mn   [3] SINHALA VOWEL SIGN KETTI IS-PILLA..SINHALA VOWEL SIGN KETTI PAA-PILLA
0DD6          ; Vowel_Dependent # Mn       SINHALA VOWEL SIGN DIGA PAA-PILLA
0DD8..0DDF    ; Vowel_Dependent # Mc   [8] SINHALA VOWEL SIGN GAETTA-PILLA..SINHALA VOWEL SIGN GAYANUKITTA
0DF2..0DF3    ; Vowel_Dependent # Mc   [2] SINHALA VOWEL SIGN DIGA GAETTA-PILLA..SINHALA VOWEL SIGN DIGA GAYANUKITTA
0E30          ; Vowel_Dependent # Lo       THAI CHARACTER SARA A
0E31          ; Vowel_Dependent # Mn       THAI CHARACTER MAI HAN-AKAT
0E32..0E33    ; Vowel_Dependent # Lo   [2] THAI CHARACTER SARA AA..THAI CHARACTER SARA AM
0E34..0E39    ; Vowel_Dependent # Mn   [6] THAI CHARACTER SARA I..THAI CHARACTER SARA UU
0E40..0E45    ; Vowel_Dependent # Lo   [6] THAI CHARACTER SARA E..THAI CHARACTER LAKKHANGYAO
0E47          ; Vowel_Dependent # Mn       THAI CHARACTER MAITAIKHU
0EB0          ; Vowel_Dependent # Lo       LAO VOWEL SIGN A
0EB1          ; Vowel_Dependent # Mn       LAO VOWEL SIGN MAI KAN
0EB2..0EB3    ; Vowel_Dependent # Lo   [2] LAO VOWEL SIGN AA..LAO VOWEL SIGN AM
0EB4..0EB9    ; Vowel_Dependent # Mn   [6] LAO VOWEL SIGN I..LAO VOWEL SIGN UU
0EBB          ; Vowel_Dependent # Mn       LAO VOWEL SIGN MAI KON
0EC0..0EC4    ; Vowel_Dependent # Lo   [5] LAO VOWEL SIGN E..LAO VOWEL SIGN AI
0F71..0F7D    ; Vowel_Dependent # Mn  [13] TIBETAN VOWEL SIGN AA..TIBETAN VOWEL SIGN OO
0F80..0F81    ; Vowel_Dependent # Mn   [2] TIBETAN VOWEL SIGN REVERSED I..TIBETAN VOWEL SIGN REVERSED II
102B..102C    ; Vowel_Dependent # Mc   [2] MYANMAR VOWEL SIGN TALL AA..MYANMAR VOWEL SIGN AA
102D..1030    ; Vowel_Dependent # Mn   [4] MYANMAR VOWEL SIGN I..MYANMAR VOWEL SIGN UU
1031          ; Vowel_Dependent # Mc       MYANMAR VOWEL SIGN E
1032..1035    ; Vowel_Dependent # Mn   [4] MYANMAR VOWEL SIGN AI..MYANMAR VOWEL SIGN E ABOVE
1056..1057    ; Vowel_Dependent # Mc   [2] MYANMAR VOWEL SIGN VOCALIC R..MYANMAR VOWEL SIGN VOCALIC RR
1058..1059    ; Vowel_Dependent # Mn   [2] MYANMAR VOWEL SIGN VOCALIC L..MYANMAR VOWEL SIGN VOCALIC LL
1062          ; Vowel_Dependent # Mc       MYANMAR VOWEL SIGN SGAW KAREN EU
1067..1068    ; Vowel_Dependent # Mc   [2] MYANMAR VOWEL SIGN WESTERN PWO KAREN EU..MYANMAR VOWEL SIGN WESTERN PWO KAREN UE
1071..1074    ; Vowel_Dependent # Mn   [4] MYANMAR VOWEL SIGN GEBA KAREN I..MYANMAR VOWEL SIGN KAYAH EE
1083..1084    ; Vowel_Dependent # Mc   [2] MYANMAR VOWEL SIGN SHAN AA..MYANMAR VOWEL SIGN SHAN E
1085..1086    ; Vowel_Dependent # Mn   [2] MYANMAR VOWEL SIGN SHAN E ABOVE..MYANMAR VOWEL SIGN SHAN FINAL Y
109C          ; Vowel_Dependent # Mc       MYANMAR VOWEL SIGN AITON A
109D          ; Vowel_Dependent # Mn       MYANMAR VOWEL SIGN AITON AI
1712..1713    ; Vowel_Dependent # Mn   [2] TAGALOG VOWEL SIGN I..TAGALOG VOWEL SIGN U
1732..1733    ; Vowel_Dependent # Mn   [2] HANUNOO VOWEL SIGN I..HANUNOO VOWEL SIGN U
1752..1753    ; Vowel_Dependent # Mn   [2] BUHID VOWEL SIGN I..BUHID VOWEL SIGN U
1772..1773    ; Vowel_Dependent # Mn   [2] TAGBANWA VOWEL SIGN I..TAGBANWA VOWEL SIGN U
17B6          ; Vowel_Dependent # Mc       KHMER VOWEL SIGN AA
17B7..17BD    ; Vowel_Dependent # Mn   [7] KHMER VOWEL SIGN I..KHMER VOWEL SIGN UA
17BE..17C5    ; Vowel_Dependent # Mc   [8] KHMER VOWEL SIGN OE..KHMER VOWEL SIGN AU
17C8          ; Vowel_Dependent # Mc       KHMER SIGN YUUKALEAPINTU
1920..1922    ; Vowel_Dependent # Mn   [3] LIMBU VOWEL SIGN A..LIMBU VOWEL SIGN U
1923..1926    ; Vowel_Dependent # Mc   [4] LIMBU VOWEL SIGN EE..LIMBU VOWEL SIGN AU
1927..1928    ; Vowel_Dependent # Mn   [2] LIMBU VOWEL SIGN E..LIMBU VOWEL SIGN O
193A          ; Vowel_Dependent # Mn       LIMBU SIGN KEMPHRENG
19B0..19C0    ; Vowel_Dependent # Lo  [17] NEW TAI LUE VOWEL SIGN VOWEL SHORTENER..NEW TAI LUE VOWEL SIGN IY
1A17..1A18    ; Vowel_Dependent # Mn   [2] BUGINESE VOWEL SIGN I..BUGINESE VOWEL SIGN U
1A19..1A1A    ; Vowel_Dependent # Mc   [2] BUGINESE VOWEL SIGN E..BUGINESE VOWEL SIGN O
1A1B          ; Vowel_Dependent # Mn       BUGINESE VOWEL SIGN AE
1A61          ; Vowel_Dependent # Mc       TAI THAM VOWEL SIGN A
1A62          ; Vowel_Dependent # Mn       TAI THAM VOWEL SIGN MAI SAT
1A63..1A64    ; Vowel_Dependent # Mc   [2] TAI THAM VOWEL SIGN AA..TAI THAM VOWEL SIGN TALL AA
1A65..1A6C    ; Vowel_Dependent # Mn   [8] TAI THAM VOWEL SIGN I..TAI THAM VOWEL SIGN OA BELOW
1A6D..1A72    ; Vowel_Dependent # Mc   [6] TAI THAM VOWEL SIGN OY..TAI THAM VOWEL SIGN THAM AI
1A73          ; Vowel_Dependent # Mn       TAI THAM VOWEL SIGN OA ABOVE
1B35          ; Vowel_Dependent # Mc       BALINESE VOWEL SIGN TEDUNG
1B36..1B3A    ; Vowel_Dependent # Mn   [5] BALINESE VOWEL SIGN ULU..BALINESE VOWEL SIGN RA REPA
1B3B          ; Vowel_Dependent # Mc       BALINESE VOWEL SIGN RA REPA TEDUNG
1B3C          ; Vowel_Dependent # Mn       BALINESE VOWEL SIGN LA LENGA
1B3D..1B41    ; Vowel_Dependent # Mc   [5] BALINESE VOWEL SIGN LA LENGA TEDUNG..BALINESE VOWEL SIGN TALING REPA TEDUNG
1B42          ; Vowel_Dependent # Mn       BALINESE VOWEL SIGN PEPET
1B43          ; Vowel_Dependent # Mc       BALINESE VOWEL SIGN PEPET TEDUNG
1BA4..1BA5    ; Vowel_Dependent # Mn   [2] SUNDANESE VOWEL SIGN PANGHULU..SUNDANESE VOWEL SIGN PANYUKU
1BA6..1BA7    ; Vowel_Dependent # Mc   [2] SUNDANESE VOWEL SIGN PANAELAENG..SUNDANESE VOWEL SIGN PANOLONG
1BA8..1BA9    ; Vowel_Dependent # Mn   [2] SUNDANESE VOWEL SIGN PAMEPET..SUNDANESE VOWEL SIGN PANEULEUNG
1BE7          ; Vowel_Dependent # Mc       BATAK VOWEL SIGN E
1BE8..1BE9    ; Vowel_Dependent # Mn   [2] BATAK VOWEL SIGN PAKPAK E..BATAK VOWEL SIGN EE
1BEA..1BEC    ; Vowel_Dependent # Mc   [3] BATAK VOWEL SIGN I..BATAK VOWEL SIGN O
1BED          ; Vowel_Dependent # Mn       BATAK VOWEL SIGN KARO O
1BEE          ; Vowel_Dependent # Mc       BATAK VOWEL SIGN U
1BEF          ; Vowel_Dependent # Mn       BATAK VOWEL SIGN U FOR SIMALUNGUN SA
1C26..1C2B    ; Vowel_Dependent # Mc   [6] LEPCHA VOWEL SIGN AA..LEPCHA VOWEL SIGN UU
1C2C          ; Vowel_Dependent # Mn       LEPCHA VOWEL SIGN E
A802          ; Vowel_Dependent # Mn       SYLOTI NAGRI SIGN DVISVARA
A823..A824    ; Vowel_Dependent # Mc   [2] SYLOTI NAGRI VOWEL SIGN A..SYLOTI NAGRI VOWEL SIGN I
A825..A826    ; Vowel_Dependent # Mn   [2] SYLOTI NAGRI VOWEL SIGN U..SYLOTI NAGRI VOWEL SIGN E
A827          ; Vowel_Dependent # Mc       SYLOTI NAGRI VOWEL SIGN OO
A8B5..A8C3    ; Vowel_Dependent # Mc  [15] SAURASHTRA VOWEL SIGN AA..SAURASHTRA VOWEL SIGN AU
A8FF          ; Vowel_Dependent # Mn       DEVANAGARI VOWEL SIGN AY
A947..A94E    ; Vowel_Dependent # Mn   [8] REJANG VOWEL SIGN I..REJANG VOWEL SIGN EA
A9B4..A9B5    ; Vowel_Dependent # Mc   [2] JAVANESE VOWEL SIGN TARUNG..JAVANESE VOWEL SIGN TOLONG
A9B6..A9B9    ; Vowel_Dependent # Mn   [4] JAVANESE VOWEL SIGN WULU..JAVANESE VOWEL SIGN SUKU MENDUT
A9BA..A9BB    ; Vowel_Dependent # Mc   [2] JAVANESE VOWEL SIGN TALING..JAVANESE VOWEL SIGN DIRGA MURE
A9BC          ; Vowel_Dependent # Mn       JAVANESE VOWEL SIGN PEPET
A9E5          ; Vowel_Dependent # Mn       MYANMAR SIGN SHAN SAW
AA29..AA2E    ; Vowel_Dependent # Mn   [6] CHAM VOWEL SIGN AA..CHAM VOWEL SIGN OE
AA2F..AA30    ; Vowel_Dependent # Mc   [2] CHAM VOWEL SIGN O..CHAM VOWEL SIGN AI
AA31..AA32    ; Vowel_Dependent # Mn   [2] CHAM VOWEL SIGN AU..CHAM VOWEL SIGN UE
AAB0          ; Vowel_Dependent # Mn       TAI VIET MAI KANG
AAB1          ; Vowel_Dependent # Lo       TAI VIET VOWEL AA
AAB2..AAB4    ; Vowel_Dependent # Mn   [3] TAI VIET VOWEL I..TAI VIET VOWEL U
AAB5..AAB6    ; Vowel_Dependent # Lo   [2] TAI VIET VOWEL E..TAI VIET VOWEL O
AAB7..AAB8    ; Vowel_Dependent # Mn   [2] TAI VIET MAI KHIT..TAI VIET VOWEL IA
AAB9..AABD    ; Vowel_Dependent # Lo   [5] TAI VIET VOWEL UEA..TAI VIET VOWEL AN
AABE          ; Vowel_Dependent # Mn       TAI VIET VOWEL AM
AAEB          ; Vowel_Dependent # Mc       MEETEI MAYEK VOWEL SIGN II
AAEC..AAED    ; Vowel_Dependent # Mn   [2] MEETEI MAYEK VOWEL SIGN UU..MEETEI MAYEK VOWEL SIGN AAI
AAEE..AAEF    ; Vowel_Dependent # Mc   [2] MEETEI MAYEK VOWEL SIGN AU..MEETEI MAYEK VOWEL SIGN AAU
ABE3..ABE4    ; Vowel_Dependent # Mc   [2] MEETEI MAYEK VOWEL SIGN ONAP..MEETEI MAYEK VOWEL SIGN INAP
ABE5          ; Vowel_Dependent # Mn       MEETEI MAYEK VOWEL SIGN ANAP
ABE6..ABE7    ; Vowel_Dependent # Mc   [2] MEETEI MAYEK VOWEL SIGN YENAP..MEETEI MAYEK VOWEL SIGN SOUNAP
ABE8          ; Vowel_Dependent # Mn       MEETEI MAYEK VOWEL SIGN UNAP
ABE9..ABEA    ; Vowel_Dependent # Mc   [2] MEETEI MAYEK VOWEL SIGN CHEINAP..MEETEI MAYEK VOWEL SIGN NUNG
10A01..10A03  ; Vowel_Dependent # Mn   [3] KHAROSHTHI VOWEL SIGN I..KHAROSHTHI VOWEL SIGN VOCALIC R
10A05..10A06  ; Vowel_Dependent # Mn   [2] KHAROSHTHI VOWEL SIGN E..KHAROSHTHI VOWEL SIGN O
10A0C..10A0D  ; Vowel_Dependent # Mn   [2] KHAROSHTHI VOWEL LENGTH MARK..KHAROSHTHI SIGN DOUBLE RING BELOW
11038..11045  ; Vowel_Dependent # Mn  [14] BRAHMI VOWEL SIGN AA..BRAHMI VOWEL SIGN AU
110B0..110B2  ; Vowel_Dependent # Mc   [3] KAITHI VOWEL SIGN AA..KAITHI VOWEL SIGN II
110B3..110B6  ; Vowel_Dependent # Mn   [4] KAITHI VOWEL SIGN U..KAITHI VOWEL SIGN AI
110B7..110B8  ; Vowel_Dependent # Mc   [2] KAITHI VOWEL SIGN O..KAITHI VOWEL SIGN AU
11127..1112B  ; Vowel_Dependent # Mn   [5] CHAKMA VOWEL SIGN A..CHAKMA VOWEL SIGN UU
1112C         ; Vowel_Dependent # Mc       CHAKMA VOWEL SIGN E
1112D..11132  ; Vowel_Dependent # Mn   [6] CHAKMA VOWEL SIGN AI..CHAKMA AU MARK
11145..11146  ; Vowel_Dependent # Mc   [2] CHAKMA VOWEL SIGN AA..CHAKMA VOWEL SIGN EI
111B3..111B5  ; Vowel_Dependent # Mc   [3] SHARADA VOWEL SIGN AA..SHARADA VOWEL SIGN II
111B6..111BE  ; Vowel_Dependent # Mn   [9] SHARADA VOWEL SIGN U..SHARADA VOWEL SIGN O
111BF         ; Vowel_Dependent # Mc       SHARADA VOWEL SIGN AU
111CB..111CC  ; Vowel_Dependent # Mn   [2] SHARADA VOWEL MODIFIER MARK..SHARADA EXTRA SHORT VOWEL MARK
111CE         ; Vowel_Dependent # Mc       SHARADA VOWEL SIGN PRISHTHAMATRA E
1122C..1122E  ; Vowel_Dependent # Mc   [3] KHOJKI VOWEL SIGN AA..KHOJKI VOWEL SIGN II
1122F..11231  ; Vowel_Dependent # Mn   [3] KHOJKI VOWEL SIGN U..KHOJKI VOWEL SIGN AI
11232..11233  ; Vowel_Dependent # Mc   [2] KHOJKI VOWEL SIGN O..KHOJKI VOWEL SIGN AU
112E0..112E2  ; Vowel_Dependent # Mc   [3] KHUDAWADI VOWEL SIGN AA..KHUDAWADI VOWEL SIGN II
112E3..112E8  ; Vowel_Dependent # Mn   [6] KHUDAWADI VOWEL SIGN U..KHUDAWADI VOWEL SIGN AU
1133E..1133F  ; Vowel_Dependent # Mc   [2] GRANTHA VOWEL SIGN AA..GRANTHA VOWEL SIGN I
11340         ; Vowel_Dependent # Mn       GRANTHA VOWEL SIGN II
11341..11344  ; Vowel_Dependent # Mc   [4] GRANTHA VOWEL SIGN U..GRANTHA VOWEL SIGN VOCALIC RR
11347..11348  ; Vowel_Dependent # Mc   [2] GRANTHA VOWEL SIGN EE..GRANTHA VOWEL SIGN AI
1134B..1134C  ; Vowel_Dependent # Mc   [2] GRANTHA VOWEL SIGN OO..GRANTHA VOWEL SIGN AU
11357         ; Vowel_Dependent # Mc       GRANTHA AU LENGTH MARK
11362..11363  ; Vowel_Dependent # Mc   [2] GRANTHA VOWEL SIGN VOCALIC L..GRANTHA VOWEL SIGN VOCALIC LL
11435..11437  ; Vowel_Dependent # Mc   [3] NEWA VOWEL SIGN AA..NEWA VOWEL SIGN II
11438..1143F  ; Vowel_Dependent # Mn   [8] NEWA VOWEL SIGN U..NEWA VOWEL SIGN AI
11440..11441  ; Vowel_Dependent # Mc   [2] NEWA VOWEL SIGN O..NEWA VOWEL SIGN AU
114B0..114B2  ; Vowel_Dependent # Mc   [3] TIRHUTA VOWEL SIGN AA..TIRHUTA VOWEL SIGN II
114B3..114B8  ; Vowel_Dependent # Mn   [6] TIRHUTA VOWEL SIGN U..TIRHUTA VOWEL SIGN VOCALIC LL
114B9         ; Vowel_Dependent # Mc       TIRHUTA VOWEL SIGN E
114BA         ; Vowel_Dependent # Mn       TIRHUTA VOWEL SIGN SHORT E
114BB..114BE  ; Vowel_Dependent # Mc   [4] TIRHUTA VOWEL SIGN AI..TIRHUTA VOWEL SIGN AU
115AF..115B1  ; Vowel_Dependent # Mc   [3] SIDDHAM VOWEL SIGN AA..SIDDHAM VOWEL SIGN II
115B2..115B5  ; Vowel_Dependent # Mn   [4] SIDDHAM VOWEL SIGN U..SIDDHAM VOWEL SIGN VOCALIC RR
115B8..115BB  ; Vowel_Dependent # Mc   [4] SIDDHAM VOWEL SIGN E..SIDDHAM VOWEL SIGN AU
115DC..115DD  ; Vowel_Dependent # Mn   [2] SIDDHAM VOWEL SIGN ALTERNATE U..SIDDHAM VOWEL SIGN ALTERNATE UU
11630..11632  ; Vowel_Dependent # Mc   [3] MODI VOWEL SIGN AA..MODI VOWEL SIGN II
11633..1163A  ; Vowel_Dependent # Mn   [8] MODI VOWEL SIGN U..MODI VOWEL SIGN AI
1163B..1163C  ; Vowel_Dependent # Mc   [2] MODI VOWEL SIGN O..MODI VOWEL SIGN AU
11640         ; Vowel_Dependent # Mn       MODI SIGN ARDHACANDRA
116AD         ; Vowel_Dependent # Mn       TAKRI VOWEL SIGN AA
116AE..116AF  ; Vowel_Dependent # Mc   [2] TAKRI VOWEL SIGN I..TAKRI VOWEL SIGN II
116B0..116B5  ; Vowel_Dependent # Mn   [6] TAKRI VOWEL SIGN U..TAKRI VOWEL SIGN AU
11720..11721  ; Vowel_Dependent # Mc   [2] AHOM VOWEL SIGN A..AHOM VOWEL SIGN AA
11722..11725  ; Vowel_Dependent # Mn   [4] AHOM VOWEL SIGN I..AHOM VOWEL SIGN UU
11726         ; Vowel_Dependent # Mc       AHOM VOWEL SIGN E
11727..1172A  ; Vowel_Dependent # Mn   [4] AHOM VOWEL SIGN AW..AHOM VOWEL SIGN AM
1182C..1182E  ; Vowel_Dependent # Mc   [3] DOGRA VOWEL SIGN AA..DOGRA VOWEL SIGN II
1182F..11836  ; Vowel_Dependent # Mn   [8] DOGRA VOWEL SIGN U..DOGRA VOWEL SIGN AU
11930..11935  ; Vowel_Dependent # Mc   [6] DIVES AKURU VOWEL SIGN AA..DIVES AKURU VOWEL SIGN E
11937..11938  ; Vowel_Dependent # Mc   [2] DIVES AKURU VOWEL SIGN AI..DIVES AKURU VOWEL SIGN O
119D1..119D3  ; Vowel_Dependent # Mc   [3] NANDINAGARI VOWEL SIGN AA..NANDINAGARI VOWEL SIGN II
119D4..119D7  ; Vowel_Dependent # Mn   [4] NANDINAGARI VOWEL SIGN U..NANDINAGARI VOWEL SIGN VOCALIC RR
119DA..119DB  ; Vowel_Dependent # Mn   [2] NANDINAGARI VOWEL SIGN E..NANDINAGARI VOWEL SIGN AI
119DC..119DD  ; Vowel_Dependent # Mc   [2] NANDINAGARI VOWEL SIGN O..NANDINAGARI VOWEL SIGN AU
119E4         ; Vowel_Dependent # Mc       NANDINAGARI VOWEL SIGN PRISHTHAMATRA E
11A01..11A0A  ; Vowel_Dependent # Mn  [10] ZANABAZAR SQUARE VOWEL SIGN I..ZANABAZAR SQUARE VOWEL LENGTH MARK
11A51..11A56  ; Vowel_Dependent # Mn   [6] SOYOMBO VOWEL SIGN I..SOYOMBO VOWEL SIGN OE
11A57..11A58  ; Vowel_Dependent # Mc   [2] SOYOMBO VOWEL SIGN AI..SOYOMBO VOWEL SIGN AU
11A59..11A5B  ; Vowel_Dependent # Mn   [3] SOYOMBO VOWEL SIGN VOCALIC R..SOYOMBO VOWEL LENGTH MARK
11C2F         ; Vowel_Dependent # Mc       BHAIKSUKI VOWEL SIGN AA
11C30..11C36  ; Vowel_Dependent # Mn   [7] BHAIKSUKI VOWEL SIGN I..BHAIKSUKI VOWEL SIGN VOCALIC L
11C38..11C3B  ; Vowel_Dependent # Mn   [4] BHAIKSUKI VOWEL SIGN E..BHAIKSUKI VOWEL SIGN AU
11CB0         ; Vowel_Dependent # Mn       MARCHEN VOWEL SIGN AA
11CB1         ; Vowel_Dependent # Mc       MARCHEN VOWEL SIGN I
11CB2..11CB3  ; Vowel_Dependent # Mn   [2] MARCHEN VOWEL SIGN U..MARCHEN VOWEL SIGN E
11CB4         ; Vowel_Dependent # Mc       MARCHEN VOWEL SIGN O
11D31..11D36  ; Vowel_Dependent # Mn   [6] MASARAM GONDI VOWEL SIGN AA..MASARAM GONDI VOWEL SIGN VOCALIC R
11D3A         ; Vowel_Dependent # Mn       MASARAM GONDI VOWEL SIGN E
11D3C..11D3D  ; Vowel_Dependent # Mn   [2] MASARAM GONDI VOWEL SIGN AI..MASARAM GONDI VOWEL SIGN O
11D3F         ; Vowel_Dependent # Mn       MASARAM GONDI VOWEL SIGN AU
11D43         ; Vowel_Dependent # Mn       MASARAM GONDI SIGN CANDRA
11D8A..11D8E  ; Vowel_Dependent # Mc   [5] GUNJALA GONDI VOWEL SIGN AA..GUNJALA GONDI VOWEL SIGN UU
11D90..11D91  ; Vowel_Dependent # Mn   [2] GUNJALA GONDI VOWEL SIGN EE..GUNJALA GONDI VOWEL SIGN AI
11D93..11D94  ; Vowel_Dependent # Mc   [2] GUNJALA GONDI VOWEL SIGN OO..GUNJALA GONDI VOWEL SIGN AU
11EF3..11EF4  ; Vowel_Dependent # Mn   [2] MAKASAR VOWEL SIGN I..MAKASAR VOWEL SIGN U
11EF5..11EF6  ; Vowel_Dependent # Mc   [2] MAKASAR VOWEL SIGN E..MAKASAR VOWEL SIGN O

# ================================================

# Indic_Syllabic_Category=Vowel

# (Other) Vowels (reanalyzed as ordinary alphabetic letters or marks)

# [Not derivable]

1963..196D    ; Vowel # Lo  [11] TAI LE LETTER A..TAI LE LETTER AI
A85E..A861    ; Vowel # Lo   [4] PHAGS-PA LETTER I..PHAGS-PA LETTER O
A866          ; Vowel # Lo       PHAGS-PA LETTER EE
A922..A925    ; Vowel # Lo   [4] KAYAH LI LETTER A..KAYAH LI LETTER OO
A926..A92A    ; Vowel # Mn   [5] KAYAH LI VOWEL UE..KAYAH LI VOWEL O
11150..11154  ; Vowel # Lo   [5] MAHAJANI LETTER A..MAHAJANI LETTER O

# ================================================

# Indic_Syllabic_Category=Consonant_Placeholder

# Consonant Placeholder
# This includes generic placeholders used for
# Indic script layout (NBSP and dotted circle), as well as a few script-
# specific vowel-holder characters which are not technically
# consonants, but serve instead as bases for placement of vowel marks.

# [Not derivable]

002D          ; Consonant_Placeholder # Pd       HYPHEN-MINUS
00A0          ; Consonant_Placeholder # Zs       NO-BREAK SPACE
00D7          ; Consonant_Placeholder # Sm       MULTIPLICATION SIGN
0980          ; Consonant_Placeholder # Lo       BENGALI ANJI
0A72..0A73    ; Consonant_Placeholder # Lo   [2] GURMUKHI IRI..GURMUKHI URA
104B          ; Consonant_Placeholder # Po       MYANMAR SIGN SECTION
104E          ; Consonant_Placeholder # Po       MYANMAR SYMBOL AFOREMENTIONED
1900          ; Consonant_Placeholder # Lo       LIMBU VOWEL-CARRIER LETTER
1CFA          ; Consonant_Placeholder # Lo       VEDIC SIGN DOUBLE ANUSVARA ANTARGOMUKHA
2010..2014    ; Consonant_Placeholder # Pd   [5] HYPHEN..EM DASH
25CC          ; Consonant_Placeholder # So       DOTTED CIRCLE
AA74..AA76    ; Consonant_Placeholder # Lo   [3] MYANMAR LOGOGRAM KHAMTI OAY..MYANMAR LOGOGRAM KHAMTI HM
11A3F         ; Consonant_Placeholder # Po       ZANABAZAR SQUARE INITIAL HEAD MARK
11A45         ; Consonant_Placeholder # Po       ZANABAZAR SQUARE INITIAL DOUBLE-LINED HEAD MARK
11EF2         ; Consonant_Placeholder # Lo       MAKASAR ANGKA

# ================================================

# Indic_Syllabic_Category=Consonant

# Consonant (ordinary abugida consonants, with inherent vowels)

# [Not derivable]

0915..0939    ; Consonant # Lo  [37] DEVANAGARI LETTER KA..DEVANAGARI LETTER HA
0958..095F    ; Consonant # Lo   [8] DEVANAGARI LETTER QA..DEVANAGARI LETTER YYA
0978..097F    ; Consonant # Lo   [8] DEVANAGARI LETTER MARWARI DDA..DEVANAGARI LETTER BBA
0995..09A8    ; Consonant # Lo  [20] BENGALI LETTER KA..BENGALI LETTER NA
09AA..09B0    ; Consonant # Lo   [7] BENGALI LETTER PA..BENGALI LETTER RA
09B2          ; Consonant # Lo       BENGALI LETTER LA
09B6..09B9    ; Consonant # Lo   [4] BENGALI LETTER SHA..BENGALI LETTER HA
09DC..09DD    ; Consonant # Lo   [2] BENGALI LETTER RRA..BENGALI LETTER RHA
09DF          ; Consonant # Lo       BENGALI LETTER YYA
09F0..09F1    ; Consonant # Lo   [2] BENGALI LETTER RA WITH MIDDLE DIAGONAL..BENGALI LETTER RA WITH LOWER DIAGONAL
0A15..0A28    ; Consonant # Lo  [20] GURMUKHI LETTER KA..GURMUKHI LETTER NA
0A2A..0A30    ; Consonant # Lo   [7] GURMUKHI LETTER PA..GURMUKHI LETTER RA
0A32..0A33    ; Consonant # Lo   [2] GURMUKHI LETTER LA..GURMUKHI LETTER LLA
0A35..0A36    ; Consonant # Lo   [2] GURMUKHI LETTER VA..GURMUKHI LETTER SHA
0A38..0A39    ; Consonant # Lo   [2] GURMUKHI LETTER SA..GURMUKHI LETTER HA
0A59..0A5C    ; Consonant # Lo   [4] GURMUKHI LETTER KHHA..GURMUKHI LETTER RRA
0A5E          ; Consonant # Lo       GURMUKHI LETTER FA
0A95..0AA8    ; Consonant # Lo  [20] GUJARATI LETTER KA..GUJARATI LETTER NA
0AAA..0AB0    ; Consonant # Lo   [7] GUJARATI LETTER PA..GUJARATI LETTER RA
0AB2..0AB3    ; Consonant # Lo   [2] GUJARATI LETTER LA..GUJARATI LETTER LLA
0AB5..0AB9    ; Consonant # Lo   [5] GUJARATI LETTER VA..GUJARATI LETTER HA
0AF9          ; Consonant # Lo       GUJARATI LETTER ZHA
0B15..0B28    ; Consonant # Lo  [20] ORIYA LETTER KA..ORIYA LETTER NA
0B2A..0B30    ; Consonant # Lo   [7] ORIYA LETTER PA..ORIYA LETTER RA
0B32..0B33    ; Consonant # Lo   [2] ORIYA LETTER LA..ORIYA LETTER LLA
0B35..0B39    ; Consonant # Lo   [5] ORIYA LETTER VA..ORIYA LETTER HA
0B5C..0B5D    ; Consonant # Lo   [2] ORIYA LETTER RRA..ORIYA LETTER RHA
0B5F          ; Consonant # Lo       ORIYA LETTER YYA
0B71          ; Consonant # Lo       ORIYA LETTER WA
0B95          ; Consonant # Lo       TAMIL LETTER KA
0B99..0B9A    ; Consonant # Lo   [2] TAMIL LETTER NGA..TAMIL LETTER CA
0B9C          ; Consonant # Lo       TAMIL LETTER JA
0B9E..0B9F    ; Consonant # Lo   [2] TAMIL LETTER NYA..TAMIL LETTER TTA
0BA3..0BA4    ; Consonant # Lo   [2] TAMIL LETTER NNA..TAMIL LETTER TA
0BA8..0BAA    ; Consonant # Lo   [3] TAMIL LETTER NA..TAMIL LETTER PA
0BAE..0BB9    ; Consonant # Lo  [12] TAMIL LETTER MA..TAMIL LETTER HA
0C15..0C28    ; Consonant # Lo  [20] TELUGU LETTER KA..TELUGU LETTER NA
0C2A..0C39    ; Consonant # Lo  [16] TELUGU LETTER PA..TELUGU LETTER HA
0C58..0C5A    ; Consonant # Lo   [3] TELUGU LETTER TSA..TELUGU LETTER RRRA
0C95..0CA8    ; Consonant # Lo  [20] KANNADA LETTER KA..KANNADA LETTER NA
0CAA..0CB3    ; Consonant # Lo  [10] KANNADA LETTER PA..KANNADA LETTER LLA
0CB5..0CB9    ; Consonant # Lo   [5] KANNADA LETTER VA..KANNADA LETTER HA
0CDE          ; Consonant # Lo       KANNADA LETTER FA
0D15..0D3A    ; Consonant # Lo  [38] MALAYALAM LETTER KA..MALAYALAM LETTER TTTA
0D9A..0DB1    ; Consonant # Lo  [24] SINHALA LETTER ALPAPRAANA KAYANNA..SINHALA LETTER DANTAJA NAYANNA
0DB3..0DBB    ; Consonant # Lo   [9] SINHALA LETTER SANYAKA DAYANNA..SINHALA LETTER RAYANNA
0DBD          ; Consonant # Lo       SINHALA LETTER DANTAJA LAYANNA
0DC0..0DC6    ; Consonant # Lo   [7] SINHALA LETTER VAYANNA..SINHALA LETTER FAYANNA
0E01..0E2E    ; Consonant # Lo  [46] THAI CHARACTER KO KAI..THAI CHARACTER HO NOKHUK
0E81..0E82    ; Consonant # Lo   [2] LAO LETTER KO..LAO LETTER KHO SUNG
0E84          ; Consonant # Lo       LAO LETTER KHO TAM
0E86..0E8A    ; Consonant # Lo   [5] LAO LETTER PALI GHA..LAO LETTER SO TAM
0E8C..0EA3    ; Consonant # Lo  [24] LAO LETTER PALI JHA..LAO LETTER LO LING
0EA5          ; Consonant # Lo       LAO LETTER LO LOOT
0EA7..0EAE    ; Consonant # Lo   [8] LAO LETTER WO..LAO LETTER HO TAM
0EDC..0EDF    ; Consonant # Lo   [4] LAO HO NO..LAO LETTER KHMU NYO
0F40..0F47    ; Consonant # Lo   [8] TIBETAN LETTER KA..TIBETAN LETTER JA
0F49..0F6C    ; Consonant # Lo  [36] TIBETAN LETTER NYA..TIBETAN LETTER RRA
1000..1020    ; Consonant # Lo  [33] MYANMAR LETTER KA..MYANMAR LETTER LLA
103F          ; Consonant # Lo       MYANMAR LETTER GREAT SA
1050..1051    ; Consonant # Lo   [2] MYANMAR LETTER SHA..MYANMAR LETTER SSA
105A..105D    ; Consonant # Lo   [4] MYANMAR LETTER MON NGA..MYANMAR LETTER MON BBE
1061          ; Consonant # Lo       MYANMAR LETTER SGAW KAREN SHA
1065..1066    ; Consonant # Lo   [2] MYANMAR LETTER WESTERN PWO KAREN THA..MYANMAR LETTER WESTERN PWO KAREN PWA
106E..1070    ; Consonant # Lo   [3] MYANMAR LETTER EASTERN PWO KAREN NNA..MYANMAR LETTER EASTERN PWO KAREN GHWA
1075..1081    ; Consonant # Lo  [13] MYANMAR LETTER SHAN KA..MYANMAR LETTER SHAN HA
108E          ; Consonant # Lo       MYANMAR LETTER RUMAI PALAUNG FA
1703..170C    ; Consonant # Lo  [10] TAGALOG LETTER KA..TAGALOG LETTER YA
170E..1711    ; Consonant # Lo   [4] TAGALOG LETTER LA..TAGALOG LETTER HA
1723..1731    ; Consonant # Lo  [15] HANUNOO LETTER KA..HANUNOO LETTER HA
1743..1751    ; Consonant # Lo  [15] BUHID LETTER KA..BUHID LETTER HA
1763..176C    ; Consonant # Lo  [10] TAGBANWA LETTER KA..TAGBANWA LETTER YA
176E..1770    ; Consonant # Lo   [3] TAGBANWA LETTER LA..TAGBANWA LETTER SA
1780..17A2    ; Consonant # Lo  [35] KHMER LETTER KA..KHMER LETTER QA
1901..191E    ; Consonant # Lo  [30] LIMBU LETTER KA..LIMBU LETTER TRA
1950..1962    ; Consonant # Lo  [19] TAI LE LETTER KA..TAI LE LETTER NA
1980..19AB    ; Consonant # Lo  [44] NEW TAI LUE LETTER HIGH QA..NEW TAI LUE LETTER LOW SUA
1A00..1A16    ; Consonant # Lo  [23] BUGINESE LETTER KA..BUGINESE LETTER HA
1A20..1A4C    ; Consonant # Lo  [45] TAI THAM LETTER HIGH KA..TAI THAM LETTER LOW HA
1A53..1A54    ; Consonant # Lo   [2] TAI THAM LETTER LAE..TAI THAM LETTER GREAT SA
1B13..1B33    ; Consonant # Lo  [33] BALINESE LETTER KA..BALINESE LETTER HA
1B45..1B4B    ; Consonant # Lo   [7] BALINESE LETTER KAF SASAK..BALINESE LETTER ASYURA SASAK
1B8A..1BA0    ; Consonant # Lo  [23] SUNDANESE LETTER KA..SUNDANESE LETTER HA
1BAE..1BAF    ; Consonant # Lo   [2] SUNDANESE LETTER KHA..SUNDANESE LETTER SYA
1BBB..1BBD    ; Consonant # Lo   [3] SUNDANESE LETTER REU..SUNDANESE LETTER BHA
1BC0..1BE3    ; Consonant # Lo  [36] BATAK LETTER A..BATAK LETTER MBA
1C00..1C23    ; Consonant # Lo  [36] LEPCHA LETTER KA..LEPCHA LETTER A
1C4D..1C4F    ; Consonant # Lo   [3] LEPCHA LETTER TTA..LEPCHA LETTER DDA
A807..A80A    ; Consonant # Lo   [4] SYLOTI NAGRI LETTER KO..SYLOTI NAGRI LETTER GHO
A80C..A822    ; Consonant # Lo  [23] SYLOTI NAGRI LETTER CO..SYLOTI NAGRI LETTER HO
A840..A85D    ; Consonant # Lo  [30] PHAGS-PA LETTER KA..PHAGS-PA LETTER A
A862..A865    ; Consonant # Lo   [4] PHAGS-PA LETTER QA..PHAGS-PA LETTER GGA
A869..A870    ; Consonant # Lo   [8] PHAGS-PA LETTER TTA..PHAGS-PA LETTER ASPIRATED FA
A872          ; Consonant # Lo       PHAGS-PA SUPERFIXED LETTER RA
A892..A8B3    ; Consonant # Lo  [34] SAURASHTRA LETTER KA..SAURASHTRA LETTER LLA
A90A..A921    ; Consonant # Lo  [24] KAYAH LI LETTER KA..KAYAH LI LETTER CA
A930..A946    ; Consonant # Lo  [23] REJANG LETTER KA..REJANG LETTER A
A989..A98B    ; Consonant # Lo   [3] JAVANESE LETTER PA CEREK..JAVANESE LETTER NGA LELET RASWADI
A98F..A9B2    ; Consonant # Lo  [36] JAVANESE LETTER KA..JAVANESE LETTER HA
A9E0..A9E4    ; Consonant # Lo   [5] MYANMAR LETTER SHAN GHA..MYANMAR LETTER SHAN BHA
A9E7..A9EF    ; Consonant # Lo   [9] MYANMAR LETTER TAI LAING NYA..MYANMAR LETTER TAI LAING NNA
A9FA..A9FE    ; Consonant # Lo   [5] MYANMAR LETTER TAI LAING LLA..MYANMAR LETTER TAI LAING BHA
AA06..AA28    ; Consonant # Lo  [35] CHAM LETTER KA..CHAM LETTER HA
AA60..AA6F    ; Consonant # Lo  [16] MYANMAR LETTER KHAMTI GA..MYANMAR LETTER KHAMTI FA
AA71..AA73    ; Consonant # Lo   [3] MYANMAR LETTER KHAMTI XA..MYANMAR LETTER KHAMTI RA
AA7A          ; Consonant # Lo       MYANMAR LETTER AITON RA
AA7E..AA7F    ; Consonant # Lo   [2] MYANMAR LETTER SHWE PALAUNG CHA..MYANMAR LETTER SHWE PALAUNG SHA
AA80..AAAF    ; Consonant # Lo  [48] TAI VIET LETTER LOW KO..TAI VIET LETTER HIGH O
AAE2..AAEA    ; Consonant # Lo   [9] MEETEI MAYEK LETTER CHA..MEETEI MAYEK LETTER SSA
ABC0..ABCD    ; Consonant # Lo  [14] MEETEI MAYEK LETTER KOK..MEETEI MAYEK LETTER HUK
ABD0          ; Consonant # Lo       MEETEI MAYEK LETTER PHAM
ABD2..ABDA    ; Consonant # Lo   [9] MEETEI MAYEK LETTER GOK..MEETEI MAYEK LETTER BHAM
10A00         ; Consonant # Lo       KHAROSHTHI LETTER A
10A10..10A13  ; Consonant # Lo   [4] KHAROSHTHI LETTER KA..KHAROSHTHI LETTER GHA
10A15..10A17  ; Consonant # Lo   [3] KHAROSHTHI LETTER CA..KHAROSHTHI LETTER JA
10A19..10A35  ; Consonant # Lo  [29] KHAROSHTHI LETTER NYA..KHAROSHTHI LETTER VHA
11013..11037  ; Consonant # Lo  [37] BRAHMI LETTER KA..BRAHMI LETTER OLD TAMIL NNNA
1108D..110AF  ; Consonant # Lo  [35] KAITHI LETTER KA..KAITHI LETTER HA
11107..11126  ; Consonant # Lo  [32] CHAKMA LETTER KAA..CHAKMA LETTER HAA
11144         ; Consonant # Lo       CHAKMA LETTER LHAA
11147         ; Consonant # Lo       CHAKMA LETTER VAA
11155..11172  ; Consonant # Lo  [30] MAHAJANI LETTER KA..MAHAJANI LETTER RRA
11191..111B2  ; Consonant # Lo  [34] SHARADA LETTER KA..SHARADA LETTER HA
11208..11211  ; Consonant # Lo  [10] KHOJKI LETTER KA..KHOJKI LETTER JJA
11213..1122B  ; Consonant # Lo  [25] KHOJKI LETTER NYA..KHOJKI LETTER LLA
11284..11286  ; Consonant # Lo   [3] MULTANI LETTER KA..MULTANI LETTER GA
11288         ; Consonant # Lo       MULTANI LETTER GHA
1128A..1128D  ; Consonant # Lo   [4] MULTANI LETTER CA..MULTANI LETTER JJA
1128F..1129D  ; Consonant # Lo  [15] MULTANI LETTER NYA..MULTANI LETTER BA
1129F..112A8  ; Consonant # Lo  [10] MULTANI LETTER BHA..MULTANI LETTER RHA
112BA..112DE  ; Consonant # Lo  [37] KHUDAWADI LETTER KA..KHUDAWADI LETTER HA
11315..11328  ; Consonant # Lo  [20] GRANTHA LETTER KA..GRANTHA LETTER NA
1132A..11330  ; Consonant # Lo   [7] GRANTHA LETTER PA..GRANTHA LETTER RA
11332..11333  ; Consonant # Lo   [2] GRANTHA LETTER LA..GRANTHA LETTER LLA
11335..11339  ; Consonant # Lo   [5] GRANTHA LETTER VA..GRANTHA LETTER HA
1140E..11434  ; Consonant # Lo  [39] NEWA LETTER KA..NEWA LETTER HA
1148F..114AF  ; Consonant # Lo  [33] TIRHUTA LETTER KA..TIRHUTA LETTER HA
1158E..115AE  ; Consonant # Lo  [33] SIDDHAM LETTER KA..SIDDHAM LETTER HA
1160E..1162F  ; Consonant # Lo  [34] MODI LETTER KA..MODI LETTER LLA
1168A..116AA  ; Consonant # Lo  [33] TAKRI LETTER KA..TAKRI LETTER RRA
116B8         ; Consonant # Lo       TAKRI LETTER ARCHAIC KHA
11700..1171A  ; Consonant # Lo  [27] AHOM LETTER KA..AHOM LETTER ALTERNATE BA
1180A..1182B  ; Consonant # Lo  [34] DOGRA LETTER KA..DOGRA LETTER RRA
1190C..11913  ; Consonant # Lo   [8] DIVES AKURU LETTER KA..DIVES AKURU LETTER JA
11915..11916  ; Consonant # Lo   [2] DIVES AKURU LETTER NYA..DIVES AKURU LETTER TTA
11918..1192F  ; Consonant # Lo  [24] DIVES AKURU LETTER DDA..DIVES AKURU LETTER ZA
119AE..119D0  ; Consonant # Lo  [35] NANDINAGARI LETTER KA..NANDINAGARI LETTER RRA
11A0B..11A32  ; Consonant # Lo  [40] ZANABAZAR SQUARE LETTER KA..ZANABAZAR SQUARE LETTER KSSA
11A5C..11A83  ; Consonant # Lo  [40] SOYOMBO LETTER KA..SOYOMBO LETTER KSSA
11C0E..11C2E  ; Consonant # Lo  [33] BHAIKSUKI LETTER KA..BHAIKSUKI LETTER HA
11C72..11C8F  ; Consonant # Lo  [30] MARCHEN LETTER KA..MARCHEN LETTER A
11D0C..11D30  ; Consonant # Lo  [37] MASARAM GONDI LETTER KA..MASARAM GONDI LETTER TRA
11D6C..11D89  ; Consonant # Lo  [30] GUNJALA GONDI LETTER YA..GUNJALA GONDI LETTER SA
11EE0..11EF1  ; Consonant # Lo  [18] MAKASAR LETTER KA..MAKASAR LETTER A

# ================================================

# Indic_Syllabic_Category=Consonant_Dead

# Dead Consonant (special consonant with killed vowel)

# [Not derivable]

09CE          ; Consonant_Dead # Lo       BENGALI LETTER KHANDA TA
0D54..0D56    ; Consonant_Dead # Lo   [3] MALAYALAM LETTER CHILLU M..MALAYALAM LETTER CHILLU LLL
0D7A..0D7F    ; Consonant_Dead # Lo   [6] MALAYALAM LETTER CHILLU NN..MALAYALAM LETTER CHILLU K
1CF2..1CF3    ; Consonant_Dead # Lo   [2] VEDIC SIGN ARDHAVISARGA..VEDIC SIGN ROTATED ARDHAVISARGA

# ================================================

# Indic_Syllabic_Category=Consonant_With_Stacker

# Consonants that may make stacked ligatures with the next consonant
# without the use of a virama

# [Not derivable]

0CF1..0CF2    ; Consonant_With_Stacker # Lo   [2] KANNADA SIGN JIHVAMULIYA..KANNADA SIGN UPADHMANIYA
1CF5..1CF6    ; Consonant_With_Stacker # Lo   [2] VEDIC SIGN JIHVAMULIYA..VEDIC SIGN UPADHMANIYA
11003..11004  ; Consonant_With_Stacker # Lo   [2] BRAHMI SIGN JIHVAMULIYA..BRAHMI SIGN UPADHMANIYA
11460..11461  ; Consonant_With_Stacker # Lo   [2] NEWA SIGN JIHVAMULIYA..NEWA SIGN UPADHMANIYA

# ================================================

# Indic_Syllabic_Category=Consonant_Prefixed

# Cluster-initial consonants

# [Not derivable]

111C2..111C3  ; Consonant_Prefixed # Lo   [2] SHARADA SIGN JIHVAMULIYA..SHARADA SIGN UPADHMANIYA
1193F         ; Consonant_Prefixed # Lo       DIVES AKURU PREFIXED NASAL SIGN
11A3A         ; Consonant_Prefixed # Lo       ZANABAZAR SQUARE CLUSTER-INITIAL LETTER RA
11A84..11A89  ; Consonant_Prefixed # Lo   [6] SOYOMBO SIGN JIHVAMULIYA..SOYOMBO CLUSTER-INITIAL LETTER SA

# ================================================

# Indic_Syllabic_Category=Consonant_Preceding_Repha

# Repha Form of RA (reanalyzed in some scripts), when preceding the main
# consonant.

# [Not derivable]

0D4E          ; Consonant_Preceding_Repha # Lo       MALAYALAM LETTER DOT REPH
11941         ; Consonant_Preceding_Repha # Lo       DIVES AKURU INITIAL RA
11D46         ; Consonant_Preceding_Repha # Lo       MASARAM GONDI REPHA

# ================================================

# Indic_Syllabic_Category=Consonant_Initial_Postfixed

# Consonants that succeed the main consonant in character sequences, but are
# pronounced before it.

# [Not derivable]

1A5A          ; Consonant_Initial_Postfixed # Mn       TAI THAM CONSONANT SIGN LOW PA

# ================================================

# Indic_Syllabic_Category=Consonant_Succeeding_Repha

# Repha Form of RA (reanalyzed in some scripts), when succeeding the main
# consonant.

# [Not derivable]

17CC          ; Consonant_Succeeding_Repha # Mn       KHMER SIGN ROBAT
1B03          ; Consonant_Succeeding_Repha # Mn       BALINESE SIGN SURANG
1B81          ; Consonant_Succeeding_Repha # Mn       SUNDANESE SIGN PANGLAYAR
A982          ; Consonant_Succeeding_Repha # Mn       JAVANESE SIGN LAYAR

# ================================================

# Indic_Syllabic_Category=Consonant_Subjoined

# Subjoined Consonant (C2 form subtending a base consonant in Tibetan, etc.)

# [Not derivable]

0F8D..0F97    ; Consonant_Subjoined # Mn  [11] TIBETAN SUBJOINED SIGN LCE TSA CAN..TIBETAN SUBJOINED LETTER JA
0F99..0FBC    ; Consonant_Subjoined # Mn  [36] TIBETAN SUBJOINED LETTER NYA..TIBETAN SUBJOINED LETTER FIXED-FORM RA
1929..192B    ; Consonant_Subjoined # Mc   [3] LIMBU SUBJOINED LETTER YA..LIMBU SUBJOINED LETTER WA
1A57          ; Consonant_Subjoined # Mc       TAI THAM CONSONANT SIGN LA TANG LAI
1A5B..1A5E    ; Consonant_Subjoined # Mn   [4] TAI THAM CONSONANT SIGN HIGH RATHA OR LOW PA..TAI THAM CONSONANT SIGN SA
1BA1          ; Consonant_Subjoined # Mc       SUNDANESE CONSONANT SIGN PAMINGKAL
1BA2..1BA3    ; Consonant_Subjoined # Mn   [2] SUNDANESE CONSONANT SIGN PANYAKRA..SUNDANESE CONSONANT SIGN PANYIKU
1BAC..1BAD    ; Consonant_Subjoined # Mn   [2] SUNDANESE CONSONANT SIGN PASANGAN MA..SUNDANESE CONSONANT SIGN PASANGAN WA
1C24..1C25    ; Consonant_Subjoined # Mc   [2] LEPCHA SUBJOINED LETTER YA..LEPCHA SUBJOINED LETTER RA
A867..A868    ; Consonant_Subjoined # Lo   [2] PHAGS-PA SUBJOINED LETTER WA..PHAGS-PA SUBJOINED LETTER YA
A871          ; Consonant_Subjoined # Lo       PHAGS-PA SUBJOINED LETTER RA
11C92..11CA7  ; Consonant_Subjoined # Mn  [22] MARCHEN SUBJOINED LETTER KA..MARCHEN SUBJOINED LETTER ZA
11CA9         ; Consonant_Subjoined # Mc       MARCHEN SUBJOINED LETTER YA
11CAA..11CAF  ; Consonant_Subjoined # Mn   [6] MARCHEN SUBJOINED LETTER RA..MARCHEN SUBJOINED LETTER A

# ================================================

# Indic_Syllabic_Category=Consonant_Medial

# Medial Consonant (medial liquid, occurring in clusters)

# [Not derivable]

0A75          ; Consonant_Medial # Mn       GURMUKHI SIGN YAKASH
0EBC          ; Consonant_Medial # Mn       LAO SEMIVOWEL SIGN LO
0EBD          ; Consonant_Medial # Lo       LAO SEMIVOWEL SIGN NYO
103B..103C    ; Consonant_Medial # Mc   [2] MYANMAR CONSONANT SIGN MEDIAL YA..MYANMAR CONSONANT SIGN MEDIAL RA
103D..103E    ; Consonant_Medial # Mn   [2] MYANMAR CONSONANT SIGN MEDIAL WA..MYANMAR CONSONANT SIGN MEDIAL HA
105E..1060    ; Consonant_Medial # Mn   [3] MYANMAR CONSONANT SIGN MON MEDIAL NA..MYANMAR CONSONANT SIGN MON MEDIAL LA
1082          ; Consonant_Medial # Mn       MYANMAR CONSONANT SIGN SHAN MEDIAL WA
1A55          ; Consonant_Medial # Mc       TAI THAM CONSONANT SIGN MEDIAL RA
1A56          ; Consonant_Medial # Mn       TAI THAM CONSONANT SIGN MEDIAL LA
A8B4          ; Consonant_Medial # Mc       SAURASHTRA CONSONANT SIGN HAARU
A9BD          ; Consonant_Medial # Mn       JAVANESE CONSONANT SIGN KERET
A9BE..A9BF    ; Consonant_Medial # Mc   [2] JAVANESE CONSONANT SIGN PENGKAL..JAVANESE CONSONANT SIGN CAKRA
AA33..AA34    ; Consonant_Medial # Mc   [2] CHAM CONSONANT SIGN YA..CHAM CONSONANT SIGN RA
AA35..AA36    ; Consonant_Medial # Mn   [2] CHAM CONSONANT SIGN LA..CHAM CONSONANT SIGN WA
1171D..1171F  ; Consonant_Medial # Mn   [3] AHOM CONSONANT SIGN MEDIAL LA..AHOM CONSONANT SIGN MEDIAL LIGATING RA
11940         ; Consonant_Medial # Mc       DIVES AKURU MEDIAL YA
11942         ; Consonant_Medial # Mc       DIVES AKURU MEDIAL RA
11A3B..11A3E  ; Consonant_Medial # Mn   [4] ZANABAZAR SQUARE CLUSTER-FINAL LETTER YA..ZANABAZAR SQUARE CLUSTER-FINAL LETTER VA
11D47         ; Consonant_Medial # Mn       MASARAM GONDI RA-KARA

# ================================================

# Indic_Syllabic_Category=Consonant_Final

# Final Consonant (special final forms which do not take vowels)

# [Not derivable]

1930..1931    ; Consonant_Final # Mc   [2] LIMBU SMALL LETTER KA..LIMBU SMALL LETTER NGA
1933..1938    ; Consonant_Final # Mc   [6] LIMBU SMALL LETTER TA..LIMBU SMALL LETTER LA
1939          ; Consonant_Final # Mn       LIMBU SIGN MUKPHRENG
19C1..19C7    ; Consonant_Final # Lo   [7] NEW TAI LUE LETTER FINAL V..NEW TAI LUE LETTER FINAL B
1A58..1A59    ; Consonant_Final # Mn   [2] TAI THAM SIGN MAI KANG LAI..TAI THAM CONSONANT SIGN FINAL NGA
1BBE..1BBF    ; Consonant_Final # Lo   [2] SUNDANESE LETTER FINAL K..SUNDANESE LETTER FINAL M
1BF0..1BF1    ; Consonant_Final # Mn   [2] BATAK CONSONANT SIGN NG..BATAK CONSONANT SIGN H
1C2D..1C33    ; Consonant_Final # Mn   [7] LEPCHA CONSONANT SIGN K..LEPCHA CONSONANT SIGN T
A94F..A951    ; Consonant_Final # Mn   [3] REJANG CONSONANT SIGN NG..REJANG CONSONANT SIGN R
A952          ; Consonant_Final # Mc       REJANG CONSONANT SIGN H
AA40..AA42    ; Consonant_Final # Lo   [3] CHAM LETTER FINAL K..CHAM LETTER FINAL NG
AA43          ; Consonant_Final # Mn       CHAM CONSONANT SIGN FINAL NG
AA44..AA4B    ; Consonant_Final # Lo   [8] CHAM LETTER FINAL CH..CHAM LETTER FINAL SS
AA4C          ; Consonant_Final # Mn       CHAM CONSONANT SIGN FINAL M
AA4D          ; Consonant_Final # Mc       CHAM CONSONANT SIGN FINAL H
ABDB..ABE2    ; Consonant_Final # Lo   [8] MEETEI MAYEK LETTER KOK LONSUM..MEETEI MAYEK LETTER I LONSUM
11A8A..11A95  ; Consonant_Final # Mn  [12] SOYOMBO FINAL CONSONANT SIGN G..SOYOMBO FINAL CONSONANT SIGN -A

# ================================================

# Indic_Syllabic_Category=Consonant_Head_Letter

# Head Letter (Tibetan)

# [Not derivable]

0F88..0F8C    ; Consonant_Head_Letter # Lo   [5] TIBETAN SIGN LCE TSA CAN..TIBETAN SIGN INVERTED MCHU CAN

# ================================================

# Indic_Syllabic_Category=Modifying_Letter

# Reanalyzed letters not participating in the abugida structure, but
# serving to modify the sound of an adjacent vowel or consonant.
# Note that this is not the same as General_Category=Modifier_Letter.

# [Not derivable]

0B83          ; Modifying_Letter # Lo       TAMIL SIGN VISARGA

# ================================================

# Indic_Syllabic_Category=Tone_Letter

# Tone Letter (spacing lexical tone mark with status as a letter)

# [Not derivable]

1970..1974    ; Tone_Letter # Lo   [5] TAI LE LETTER TONE-2..TAI LE LETTER TONE-6
AAC0          ; Tone_Letter # Lo       TAI VIET TONE MAI NUENG
AAC2          ; Tone_Letter # Lo       TAI VIET TONE MAI SONG

# ================================================

# Indic_Syllabic_Category=Tone_Mark

# Tone Mark (nonspacing or spacing lexical tone mark)

# [Not derivable]

0E48..0E4B    ; Tone_Mark # Mn   [4] THAI CHARACTER MAI EK..THAI CHARACTER MAI CHATTAWA
0EC8..0ECB    ; Tone_Mark # Mn   [4] LAO TONE MAI EK..LAO TONE MAI CATAWA
1037          ; Tone_Mark # Mn       MYANMAR SIGN DOT BELOW
1063..1064    ; Tone_Mark # Mc   [2] MYANMAR TONE MARK SGAW KAREN HATHI..MYANMAR TONE MARK SGAW KAREN KE PHO
1069..106D    ; Tone_Mark # Mc   [5] MYANMAR SIGN WESTERN PWO KAREN TONE-1..MYANMAR SIGN WESTERN PWO KAREN TONE-5
1087..108C    ; Tone_Mark # Mc   [6] MYANMAR SIGN SHAN TONE-2..MYANMAR SIGN SHAN COUNCIL TONE-3
108D          ; Tone_Mark # Mn       MYANMAR SIGN SHAN COUNCIL EMPHATIC TONE
108F          ; Tone_Mark # Mc       MYANMAR SIGN RUMAI PALAUNG TONE-5
109A..109B    ; Tone_Mark # Mc   [2] MYANMAR SIGN KHAMTI TONE-1..MYANMAR SIGN KHAMTI TONE-3
19C8..19C9    ; Tone_Mark # Lo   [2] NEW TAI LUE TONE MARK-1..NEW TAI LUE TONE MARK-2
1A75..1A79    ; Tone_Mark # Mn   [5] TAI THAM SIGN TONE-1..TAI THAM SIGN KHUEN TONE-5
A92B..A92D    ; Tone_Mark # Mn   [3] KAYAH LI TONE PLOPHU..KAYAH LI TONE CALYA PLOPHU
AA7B          ; Tone_Mark # Mc       MYANMAR SIGN PAO KAREN TONE
AA7C          ; Tone_Mark # Mn       MYANMAR SIGN TAI LAING TONE-2
AA7D          ; Tone_Mark # Mc       MYANMAR SIGN TAI LAING TONE-5
AABF          ; Tone_Mark # Mn       TAI VIET TONE MAI EK
AAC1          ; Tone_Mark # Mn       TAI VIET TONE MAI THO
ABEC          ; Tone_Mark # Mc       MEETEI MAYEK LUM IYEK

# ================================================

# Indic_Syllabic_Category=Gemination_Mark

# Gemination Mark (doubling of the preceding or following consonant)

# [Not derivable]

0A71          ; Gemination_Mark # Mn       GURMUKHI ADDAK
11237         ; Gemination_Mark # Mn       KHOJKI SIGN SHADDA
11A98         ; Gemination_Mark # Mn       SOYOMBO GEMINATION MARK

# ================================================

# Indic_Syllabic_Category=Cantillation_Mark

# Cantillation Mark (recitation marks, such as svara markers for the Samaveda)

# [Not derivable]

0951..0952    ; Cantillation_Mark # Mn   [2] DEVANAGARI STRESS SIGN UDATTA..DEVANAGARI STRESS SIGN ANUDATTA
0A51          ; Cantillation_Mark # Mn       GURMUKHI SIGN UDAAT
0AFA..0AFC    ; Cantillation_Mark # Mn   [3] GUJARATI SIGN SUKUN..GUJARATI SIGN MADDAH
1CD0..1CD2    ; Cantillation_Mark # Mn   [3] VEDIC TONE KARSHANA..VEDIC TONE PRENKHA
1CD4..1CE0    ; Cantillation_Mark # Mn  [13] VEDIC SIGN YAJURVEDIC MIDLINE SVARITA..VEDIC TONE RIGVEDIC KASHMIRI INDEPENDENT SVARITA
1CE1          ; Cantillation_Mark # Mc       VEDIC TONE ATHARVAVEDIC INDEPENDENT SVARITA
1CF4          ; Cantillation_Mark # Mn       VEDIC TONE CANDRA ABOVE
1CF7          ; Cantillation_Mark # Mc       VEDIC SIGN ATIKRAMA
1CF8..1CF9    ; Cantillation_Mark # Mn   [2] VEDIC TONE RING ABOVE..VEDIC TONE DOUBLE RING ABOVE
20F0          ; Cantillation_Mark # Mn       COMBINING ASTERISK ABOVE
A8E0..A8F1    ; Cantillation_Mark # Mn  [18] COMBINING DEVANAGARI DIGIT ZERO..COMBINING DEVANAGARI SIGN AVAGRAHA
1123E         ; Cantillation_Mark # Mn       KHOJKI SIGN SUKUN
11366..1136C  ; Cantillation_Mark # Mn   [7] COMBINING GRANTHA DIGIT ZERO..COMBINING GRANTHA DIGIT SIX
11370..11374  ; Cantillation_Mark # Mn   [5] COMBINING GRANTHA LETTER A..COMBINING GRANTHA LETTER PA

# ================================================

# Indic_Syllabic_Category=Register_Shifter

# Register Shifter (shifts register for consonants, akin to a tone mark)

# [Not derivable]

17C9..17CA    ; Register_Shifter # Mn   [2] KHMER SIGN MUUSIKATOAN..KHMER SIGN TRIISAP

# ================================================

# Indic_Syllabic_Category=Syllable_Modifier

# Syllable Modifier (miscellaneous combining characters that modify
# something in the orthographic syllable they succeed)

# [Not derivable]

00B2..00B3    ; Syllable_Modifier # No   [2] SUPERSCRIPT TWO..SUPERSCRIPT THREE
09FE          ; Syllable_Modifier # Mn       BENGALI SANDHI MARK
0F35          ; Syllable_Modifier # Mn       TIBETAN MARK NGAS BZUNG NYI ZLA
0F37          ; Syllable_Modifier # Mn       TIBETAN MARK NGAS BZUNG SGOR RTAGS
0FC6          ; Syllable_Modifier # Mn       TIBETAN SYMBOL PADMA GDAN
17CB          ; Syllable_Modifier # Mn       KHMER SIGN BANTOC
17CE..17D0    ; Syllable_Modifier # Mn   [3] KHMER SIGN KAKABAT..KHMER SIGN SAMYOK SANNYA
17D3          ; Syllable_Modifier # Mn       KHMER SIGN BATHAMASAT
17DD          ; Syllable_Modifier # Mn       KHMER SIGN ATTHACAN
193B          ; Syllable_Modifier # Mn       LIMBU SIGN SA-I
1A7B..1A7C    ; Syllable_Modifier # Mn   [2] TAI THAM SIGN MAI SAM..TAI THAM SIGN KHUEN-LUE KARAN
1A7F          ; Syllable_Modifier # Mn       TAI THAM COMBINING CRYPTOGRAMMIC DOT
1C36          ; Syllable_Modifier # Mn       LEPCHA SIGN RAN
1DFB          ; Syllable_Modifier # Mn       COMBINING DELETION MARK
2074          ; Syllable_Modifier # No       SUPERSCRIPT FOUR
2082..2084    ; Syllable_Modifier # No   [3] SUBSCRIPT TWO..SUBSCRIPT FOUR
111C9         ; Syllable_Modifier # Mn       SHARADA SANDHI MARK
1145E         ; Syllable_Modifier # Mn       NEWA SANDHI MARK
11A33         ; Syllable_Modifier # Mn       ZANABAZAR SQUARE FINAL CONSONANT MARK

# ================================================

# Indic_Syllabic_Category=Consonant_Killer

# Consonant Killer (signifies that the previous consonant or consonants are
# not pronounced)

# [Not derivable]

0E4C          ; Consonant_Killer # Mn       THAI CHARACTER THANTHAKHAT
17CD          ; Consonant_Killer # Mn       KHMER SIGN TOANDAKHIAT

# ================================================

# Indic_Syllabic_Category=Non_Joiner

# Non_Joiner (Zero Width Non-Joiner)

# [Not derivable]

200C          ; Non_Joiner # Cf       ZERO WIDTH NON-JOINER

# ================================================

# Indic_Syllabic_Category=Joiner

# Joiner (Zero Width Joiner)

# [Not derivable]

200D          ; Joiner # Cf       ZERO WIDTH JOINER

# ================================================

# Indic_Syllabic_Category=Number_Joiner

# Number_Joiner (forms ligatures between numbers for multiplication)

# [Not derivable]

1107F         ; Number_Joiner # Mn       BRAHMI NUMBER JOINER

# ================================================

# Indic_Syllabic_Category=Number

# Number (can be used as vowel-holders like consonant placeholders)
# Note: A number may even hold subjoined consonants which may in turn
# have been formed using a virama or a stacker, e.g. the sequence
# <U+1A93, U+1A60, U+1A34> where THAI THAM LETTER LOW TA is subjoined to
# TAI THAM THAM DIGIT THREE using an invisible stacker.

# [Not derivable]

0030..0039    ; Number # Nd  [10] DIGIT ZERO..DIGIT NINE
0966..096F    ; Number # Nd  [10] DEVANAGARI DIGIT ZERO..DEVANAGARI DIGIT NINE
09E6..09EF    ; Number # Nd  [10] BENGALI DIGIT ZERO..BENGALI DIGIT NINE
0A66..0A6F    ; Number # Nd  [10] GURMUKHI DIGIT ZERO..GURMUKHI DIGIT NINE
0AE6..0AEF    ; Number # Nd  [10] GUJARATI DIGIT ZERO..GUJARATI DIGIT NINE
0B66..0B6F    ; Number # Nd  [10] ORIYA DIGIT ZERO..ORIYA DIGIT NINE
0BE6..0BEF    ; Number # Nd  [10] TAMIL DIGIT ZERO..TAMIL DIGIT NINE
0C66..0C6F    ; Number # Nd  [10] TELUGU DIGIT ZERO..TELUGU DIGIT NINE
0CE6..0CEF    ; Number # Nd  [10] KANNADA DIGIT ZERO..KANNADA DIGIT NINE
0D66..0D6F    ; Number # Nd  [10] MALAYALAM DIGIT ZERO..MALAYALAM DIGIT NINE
0DE6..0DEF    ; Number # Nd  [10] SINHALA LITH DIGIT ZERO..SINHALA LITH DIGIT NINE
0E50..0E59    ; Number # Nd  [10] THAI DIGIT ZERO..THAI DIGIT NINE
0ED0..0ED9    ; Number # Nd  [10] LAO DIGIT ZERO..LAO DIGIT NINE
0F20..0F29    ; Number # Nd  [10] TIBETAN DIGIT ZERO..TIBETAN DIGIT NINE
0F2A..0F33    ; Number # No  [10] TIBETAN DIGIT HALF ONE..TIBETAN DIGIT HALF ZERO
1040..1049    ; Number # Nd  [10] MYANMAR DIGIT ZERO..MYANMAR DIGIT NINE
1090..1099    ; Number # Nd  [10] MYANMAR SHAN DIGIT ZERO..MYANMAR SHAN DIGIT NINE
17E0..17E9    ; Number # Nd  [10] KHMER DIGIT ZERO..KHMER DIGIT NINE
1946..194F    ; Number # Nd  [10] LIMBU DIGIT ZERO..LIMBU DIGIT NINE
19D0..19D9    ; Number # Nd  [10] NEW TAI LUE DIGIT ZERO..NEW TAI LUE DIGIT NINE
19DA          ; Number # No       NEW TAI LUE THAM DIGIT ONE
1A80..1A89    ; Number # Nd  [10] TAI THAM HORA DIGIT ZERO..TAI THAM HORA DIGIT NINE
1A90..1A99    ; Number # Nd  [10] TAI THAM THAM DIGIT ZERO..TAI THAM THAM DIGIT NINE
1B50..1B59    ; Number # Nd  [10] BALINESE DIGIT ZERO..BALINESE DIGIT NINE
1BB0..1BB9    ; Number # Nd  [10] SUNDANESE DIGIT ZERO..SUNDANESE DIGIT NINE
1C40..1C49    ; Number # Nd  [10] LEPCHA DIGIT ZERO..LEPCHA DIGIT NINE
A8D0..A8D9    ; Number # Nd  [10] SAURASHTRA DIGIT ZERO..SAURASHTRA DIGIT NINE
A900..A909    ; Number # Nd  [10] KAYAH LI DIGIT ZERO..KAYAH LI DIGIT NINE
A9D0..A9D9    ; Number # Nd  [10] JAVANESE DIGIT ZERO..JAVANESE DIGIT NINE
A9F0..A9F9    ; Number # Nd  [10] MYANMAR TAI LAING DIGIT ZERO..MYANMAR TAI LAING DIGIT NINE
AA50..AA59    ; Number # Nd  [10] CHAM DIGIT ZERO..CHAM DIGIT NINE
ABF0..ABF9    ; Number # Nd  [10] MEETEI MAYEK DIGIT ZERO..MEETEI MAYEK DIGIT NINE
10A40..10A48  ; Number # No   [9] KHAROSHTHI DIGIT ONE..KHAROSHTHI FRACTION ONE HALF
11066..1106F  ; Number # Nd  [10] BRAHMI DIGIT ZERO..BRAHMI DIGIT NINE
11136..1113F  ; Number # Nd  [10] CHAKMA DIGIT ZERO..CHAKMA DIGIT NINE
111D0..111D9  ; Number # Nd  [10] SHARADA DIGIT ZERO..SHARADA DIGIT NINE
111E1..111F4  ; Number # No  [20] SINHALA ARCHAIC DIGIT ONE..SINHALA ARCHAIC NUMBER ONE THOUSAND
112F0..112F9  ; Number # Nd  [10] KHUDAWADI DIGIT ZERO..KHUDAWADI DIGIT NINE
11450..11459  ; Number # Nd  [10] NEWA DIGIT ZERO..NEWA DIGIT NINE
114D0..114D9  ; Number # Nd  [10] TIRHUTA DIGIT ZERO..TIRHUTA DIGIT NINE
11650..11659  ; Number # Nd  [10] MODI DIGIT ZERO..MODI DIGIT NINE
116C0..116C9  ; Number # Nd  [10] TAKRI DIGIT ZERO..TAKRI DIGIT NINE
11730..11739  ; Number # Nd  [10] AHOM DIGIT ZERO..AHOM DIGIT NINE
1173A..1173B  ; Number # No   [2] AHOM NUMBER TEN..AHOM NUMBER TWENTY
11950..11959  ; Number # Nd  [10] DIVES AKURU DIGIT ZERO..DIVES AKURU DIGIT NINE
11C50..11C59  ; Number # Nd  [10] BHAIKSUKI DIGIT ZERO..BHAIKSUKI DIGIT NINE
11C5A..11C6C  ; Number # No  [19] BHAIKSUKI NUMBER ONE..BHAIKSUKI HUNDREDS UNIT MARK
11D50..11D59  ; Number # Nd  [10] MASARAM GONDI DIGIT ZERO..MASARAM GONDI DIGIT NINE
11DA0..11DA9  ; Number # Nd  [10] GUNJALA GONDI DIGIT ZERO..GUNJALA GONDI DIGIT NINE

# ================================================

# Indic_Syllabic_Category=Brahmi_Joining_Number

# Brahmi Joining Number (similar to Number in that in can be used as
# vowel-holders like Consonant_Placeholder, but may also be joined by
# a Number_Joiner of the same script, e.g. in Brahmi)

# [Not derivable]

11052..11065  ; Brahmi_Joining_Number # No  [20] BRAHMI NUMBER ONE..BRAHMI NUMBER ONE THOUSAND

# EOF
`