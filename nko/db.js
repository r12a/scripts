var spreadsheet = `
ߒ	n	ŋ	ŋ	n'	nasal syllable	
ߓ	b	b	b	b	consonant	
ߔ	p	p	p	p	consonant	
ߕ	t	t	t	t	consonant	
ߖ	d	ʤ	ʤ	j	consonant	
ߗ	t	ʧ	ʧ	ch	consonant	
ߘ	d	d	d	d	consonant	
ߙ	r	r	r	r	consonant	
ߚ	r	ṙ	rː	rr	consonant	
ߛ	s	s	s	s	consonant	
ߜ	g	gᵇ	ɡ͡b	gb	consonant	
ߝ	f	f	f	f	consonant	
ߞ	k	k	k	k	consonant	
ߟ	l	l	l	l	consonant	
ߠ	l	ł	ł	nw	abstract consonant	
ߡ	m	m	m	m	consonant	
ߢ	n	ɲ	ɲ	ny	consonant	
ߣ	n	n	n	n	consonant	
ߤ	h	h	h	h	consonant	
ߥ	w	w	w	w	consonant	
ߦ	y	y	j	y	consonant	
ߧ	j	j	ñ	yw	abstract consonant	
						
						
ߨ					consonant	archaic
ߩ					consonant	archaic
ߪ					consonant	archaic
						
						
ߊ	a	a	a	a	vowel	
ߋ	e	e	e	ee	vowel	
ߌ	i	i	i	y	vowel	
ߍ	e	ɛ	ɛ	e	vowel	
ߎ	i	u	u	u	vowel	
ߏ	o	o	o	oo	vowel	
ߐ	o	ɔ	ɔ	o	vowel	
ߑ	*	ˣ			vowel killer	
						
						
߫	^	¹			tone mark	
߬	^	²			tone mark	
߭	^	³			tone mark	
߮	^	⁴			tone mark	
߯	^	⁵			tone mark	
߰	^	⁶			tone mark	
߱	^	⁷			tone mark	
ߴ	^	⁸			tone mark	
ߵ	^	⁹			tone mark	
						
						
߸	,,	,			comma	
߹	!	!			exclamation mark	
ߺ	_	_			baseline extender	
						
،	,,	,			arabic comma	
؛	;	;			arabic semicolon	
؟	?	?			arabic question mark	
٪	%	%			arabic percent sign	
						
						
߲	[	x̃			nasalisation mark	
߳	/	x̣			transliteration symbol	
						
						
߶					symbol	
߷					symbol	
						
						
߀	0	0		0	digit	
߁	1	1		1	digit	
߂	2	2		2	digit	
߃	3	3		3	digit	
߄	4	4		4	digit	
߅	5	5		5	digit	
߆	6	6		6	digit	
߇	7	7		7	digit	
߈	8	8		8	digit	
߉	9	9		9	digit	
						
						
						
						
						
						
ߛ߫	S	s¹	ᵴ	ᵴ	ص	
ߜ߫	Y	gᵇ¹	ɣ	ɣ	غ	
ߞ߫	Q	k¹	q	q	ق	
ߓ߭	B	b³	bʰ	bʰ		
ߕ߭	T	t³	ᵵ	ᵵ	ط	
ߖ߭	Z	ʤ³	z	z		
ߗ߭	D	ʧ³	ð, ʒ	ð, ʒ	ذ	
ߘ߭	D	d³	đ	đ		
ߙ߭	R	r³	ʀ	ʀ		
ߛ߭	S	s³	ʃ	ʃ	ش	
ߜ߭	G	gᵇ³	ɡ	ɡ		
ߝ߭	V	f³	v	v		
ߞ߭	X	k³	x	x		
ߟ߭	J	l³	lʰ	lʰ		
ߡ߭	M	m³	mʰ	mʰ		
ߢ߭	N	ɲ³	nʰ	nʰ		
ߤ߭	H	h³	ḥ	ḥ		
ߦ߭	Y	y³	yʰ	yʰ		
ߖ߳	Z	ʤx̣	ƶ	ƶ	ظ	
ߙ߳	D	rx̣	dʰ	dʰ		
ߛ߳	Q	sx̣	θ	θ	ث	
ߜ߳	K	gᵇx̣	kp	kp		
						
						
ߊ߳	A	ax̣	ʕa	عَ		
ߋ߳	E	ex̣	ǝ			
ߎ߳	U	ux̣	y			
`

var cols = {
"transLoc": 2,
"ipaLoc": 3,
"typeLoc": 5,
"nnameLoc": 0,
"nameLoc": 0,
"numLoc": 0,
"statusLoc": 6,
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
"transcription":3,

"othertranscriptions": [[3, 'Transcription']]
}