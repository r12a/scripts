var spreadsheet = `
ꓐ	b	b	b	b	b	consonant	
ꓭ	y	ɣ	y	ɣ	ɣ	consonant/vowel	
ꓚ	t	ʨ	t	ʨ	ʨ	consonant	
ꓛ	t	ʨʰ	t	ʨʰ	ʨʰ	consonant	
ꓓ	d	d	d	d	d	consonant	
ꓝ	t	ʦ	t	ʦ	ʦ	consonant	
ꓞ	t	ʦʰ	t	ʦʰ	ʦʰ	consonant	
ꓖ	g	ɡ	g	ɡ	ɡ	consonant	
ꓨ	h	ɦ	h	ɦ	ɦ	consonant	
ꓧ	x	x	x	x	x	consonant	
ꓙ	d	ʥ	d	ʥ	ʥ	consonant	
ꓩ	f	f	f	f	f	consonant	
ꓗ	k	k	k	k	k	consonant	
ꓘ	k	kʰ	k	kʰ	kʰ	consonant	
ꓡ	l	l	l	l	l	consonant	
ꓟ	m	m	m	m	m	consonant	
ꓠ	n	n	n	n	n	consonant	
ꓑ	p	p	p	p	p	consonant	
ꓒ	p	pʰ	p	pʰ	pʰ	consonant	
ꓣ	z	ʒ	z	ʒ	ʒ	consonant	
ꓤ	z	z	z	z	z	consonant	
ꓢ	s	s	s	s	s	consonant	
ꓔ	t	t	t	t	t	consonant	
ꓕ	t	tʰ	t	tʰ	tʰ	consonant	
ꓪ	w	w	w	w	w	consonant/vowel	
ꓥ	n	ŋ	n	ŋ	ŋ	consonant	
ꓦ	h	h	h	h	h	consonant	
ꓫ	c	ɕ	c	ɕ	ɕ	consonant	
ꓬ	z	ʑ	z	ʑ	ʑ	consonant/vowel	
ꓜ	d	ʣ	d	ʣ	ʣ	consonant	
							
							
ꓮ	a	ɑ	a	ɑ	ɑ	vowel	
ꓯ	e	ɛ	e	ɛ	ɛ	vowel	
ꓷ	e	ə	e	ə	ə	vowel	
ꓰ	e	e	e	e	e	vowel	
ꓱ	o	ø	o	ø	ø	vowel	
ꓲ	i	i	i	i	i	vowel	
ꓶ	u	ɯ	u	ɯ	ɯ	vowel	
ꓳ	o	o	o	o	o	vowel	
ꓴ	u	u	u	u	u	vowel	
ꓵ	y	y	y	y	y	vowel	
ˍ	a	ä	a	ä		vowel	
ʼ	n	ñ	n	ñ		vowel	
							
							
ꓸ	^	¹	^	˥˥	˥˥	pitch 55 tone mark	
ꓹ	^	²	^	˧˥	˧˥	pitch 35 tone mark	
ꓺ	^	³	^	˦˦	˦˦	pitch 44 tone mark	
ꓻ	^	⁴	^	˧˧	˧˧	pitch 33 tone mark	
ꓼ	^	⁵	^	˦˨	˦˨	pitch 42 tone mark	
ꓽ	^	⁶	^	˧˩	˧˩	pitch 31 tone mark	
							
							
꓾	,	,	,	,		comma	
꓿	.	.	.	.		full stop	
《	(	<	(	<		bracket	
》	)	>	)	>		bracket	
`

var cols = {
"transLoc": 2,
"ipaLoc": 5,
"typeLoc": 6,
"nnameLoc": 0,
"nameLoc": 0,
"numLoc": 0,
"statusLoc": 7,
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