var spreadsheet = `
ހ	h	h	h	h	h	consonant	haa	ހާ	
ށ	s	ʂ	s	sh	ʂ	consonant	shaviyana	ށަވިޔަނަ	
ނ	n	n	n	n	n	consonant	noonu	ނޫނު	
ރ	r	r	r	r	r	consonant	raa	ރާ	
ބ	b	b	b	b	b	consonant	baa	ބާ	
ޅ	l	ɭ	l	lh	ɭ	consonant	lhaviyani	ޅަވިޔަނި	
ކ	k	k	k	k	k	consonant	kaafu	ކާފު	
އ	{	ʿ	[		∅	vowel support	alifu	އަލިފު	
ވ	v	v	v	v	v	consonant	vaavu	ވާވު	
މ	m	m	m	m	m	consonant	meemu	މީމު	
ފ	f	f	f	f	f	consonant	faafu	ފާފު	
ދ	d	d	d	dh	d	consonant	dhaalu	ދާލު	
ތ	t	t	t	th	t	consonant	thaa	ތާ	
ލ	l	l	l	l	l	consonant	laamu	ލާމު	
ގ	g	g	g	g	ɡ	consonant	gaafu	ގާފު	
ޏ	n	ɲ	g	gn	ɲ	consonant	gnaviyani	ޏަވިޔަނި	
ސ	s	s	s	s	s	consonant	seenu	ސީނު	
ޑ	d	ɖ	d	d	ɖ	consonant	daviyani	ޑަވިޔަނި	
ޒ	z	z	z	z	z	consonant	zaviyani	ޒަވިޔަނި	
ޓ	t	ʈ	t	t	ʈ	consonant	taviyani	ޓަވިޔަނި	
ޔ	y	y	y	y	j	consonant	yaviyani	ޔަވިޔަނި	
ޕ	p	p	p	p	p	consonant	paviyani	ޕަވިޔަނި	
ޖ	j	ɟ	j	j	ɟ	consonant	javiyani	ޖަވިޔަނި	
ޗ	c	c	c	ch	c	consonant	chaviyani	ޗަވިޔަނި	
									
									
ޘ	Q	θ	T	ṯ	ث	arabic consonant	ttaa	ޘާ	
ޙ	H	ħ	H	ḥ	ح	arabic consonant	hhaa	ޙާ	
ޚ	X	x	H	ḫ	خ	arabic consonant	khaa	ޚާ	
ޛ	D	ð	D	ḏ	ذ	arabic consonant	thaalu	ޛާލު	
ޜ	Z	ʒ	£		ʒ	arabic consonant	zaa	ޜާ	
ޝ	S	ʃ	S	š	ش	arabic consonant	sheenu	ޝީނު	
ޞ	S	s̴	S	ṣ	ص	arabic consonant	saadhu	ޞާޑު	
ޟ	D	d̴	D	d̤	ض	arabic consonant	daadhu	ޟާޑު	
ޠ	T	t̴	T	t̤	ط	arabic consonant	to	ޓޮ	
ޡ	Z	z̴	£		ظ	arabic consonant	zo	ޡޮ	
ޢ	{	ʕ	{	ʻ	ع	arabic consonant	aïnu	ޢައިނު	
ޣ	Y	ɣ	G	ǵ	غ	arabic consonant	ghaïnu	ޣައިނު	
ޤ	Q	q	Q	q	ق	arabic consonant	qaafu	ޤާފު	
ޥ	W	w	W	w	و	arabic consonant	waavu	ޥާވު	
ޱ	N	ɳ	N	ṇ	ɳ	arabic consonant	naviyani	ޱަވިޔަނަ	
									
									
ަ	e	ə	a	a	ə	vowel	aba fili	އަބަ ފިލި	
ާ	e	ə̄	a	aa	əː	vowel	aabaa fili	އާބާ ފިލި	
ި	i	i	i	i	i	vowel	ibi fili	އިބި ފިލި	
ީ	i	ī	e	ee	iː	vowel	eebee fili	އީބީ ފިލި	
ު	u	u	u	u	u	vowel	ubu fili	އުބު ފިލި	
ޫ	u	ū	u	oo	uː	vowel	ooboo fili	އޫބޫ ފިލި	
ެ	e	e	e	e	e	vowel	ebe fili	އެބެެ ފިލި	
ޭ	e	ē	e	ey	eː	vowel	eybey fili	އޭބޭ ފިލި	
ޮ	o	o	o	oo	ɔ	vowel	obo fili	އޮބޮ ފިލި	
ޯ	o	ō	o	oa	ɔː	vowel	oaboa fili	އޯބޯ ފިލި	
ް	*	͓	[		∅	vowel killer	sukun	ސުކުނ	

،	,	,	,	,		arabic comma			
؛	;	;	;	;		arabic semicolon			
`

var cols = {
"transLoc": 2,
"ipaLoc": 5,
"typeLoc": 6,
"nnameLoc": 8,
"nameLoc": 7,
"numLoc": 0,
"statusLoc": 9,
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
"transcription":4,

"othertranscriptions": [[4, 'Maldivian Latin']]
}