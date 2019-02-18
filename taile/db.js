var spreadsheet = `
ᥐ	key	k	ka	consonant	
ᥠ	key	kʰ	kʰ	consonant	
ᥒ	n	ŋ	ŋa	consonant	
					
ᥓ	c	ʦ	ʦa	consonant	
ᥡ	c	ʦʰ	ʦʰa	consonant	
					
ᥖ	t	t	ta	consonant	
ᥗ	t	tʰ	tʰa	consonant	
ᥢ	n¶	n	na	consonant	
					
ᥙ	p	p	pa	consonant	
ᥚ	p	pʰ	pʰa	consonant	
ᥛ	m	m	ma	consonant	
					
ᥕ	y	y	ja	consonant	
ᥘ	l	l	la	consonant	
ᥝ	w	v	v ʷ	consonant	
					
ᥞ	h	h	ha	consonant	
ᥑ	x	x	xa	consonant	
ᥔ	s	s	sa	consonant	
ᥜ	f	f	fa	consonant	
					
ᥟ	}	ʔ	ʔa	consonant	
					
					
					
ᥣ	a	a	aː	vowel	
ᥥ	e	e	e	vowel	
ᥫ	e	ə	ə	vowel	
ᥦ	e	ɛ	ɛ ia	vowel	
ᥤ	i	i	i	vowel	
ᥪ	u	ɯ	ɯ	vowel	
ᥩ	o	ɔ	ɔ ua	vowel	
ᥨ	o	o	o	vowel	
ᥧ	u	u	u	vowel	
					
ᥬ	a	aᵚ	aɯ	dipthong	
ᥭ	j	ʲ	j	semivowel	
					
					
ᥰ	^	²̱	˨˦	tone letter	
ᥱ	^	³̱		tone letter	
ᥲ	^	⁴̱		tone letter	
ᥳ	^	⁵̱		tone letter	
ᥴ	^	⁶̱		tone letter	


̈	^	²	˥˥	tone mark	
̌	^	³	˩˩	tone mark	
̀	^	⁴	˧˩	tone mark	
̇	^	⁵	˥˧	tone mark	
́	^	⁶	˨˦	tone mark	

၀	§	0̣	0	myanmar digit
၁	§	1̣	1	myanmar digit
၂	§	2̣	2	myanmar digit
၃	§	3̣	3	myanmar digit
၄	§	4̣	4	myanmar digit
၅	§	5̣	5	myanmar digit
၆	§	6̣	6	myanmar digit
၇	§	7̣	7	myanmar digit
၈	§	8̣	8	myanmar digit
၉	§	9̣	9	myanmar digit


`

var cols = {
"transLoc": 2,
"ipaLoc": 3,
"typeLoc": 4,
"nameLoc": 0,
"nnameLoc": 0,
"numLoc": 0,
"statusLoc": 5,
"dvowel": 0,
"ivowel": 0,
"subj":0,
"ltone":0,
"htone":0,
"numLoc":0,
"meaning":0,
"shape":0,
"lc":0,
"uc":0,
"transcription":0,

//"othertranscriptions": [[3, 'Transcription']]
}