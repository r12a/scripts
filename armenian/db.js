






var spreadsheet = `
բ	b	b	b	b	b pʰ	consonant	bɛn/pʰɛn	բեն	2			Բ
գ	g	g	g	g	ɡ kʰ	consonant	gim/kʰim	գիմ	3			Գ
դ	d	d	d	d	d tʰ	consonant	dɑ/tʰɑ	դա	4			Դ
զ	z	z	z	z	z	consonant	za	զա	6			Զ
թ	t	tʰ	t	t’	tʰ	consonant	tʰo	թո	9			Թ
ժ	z	ʒ	z	ž	ʒ	consonant	ʒɛ	ժե	10			Ժ
լ	l	l	l	l	l	consonant	ljun/lʏn	լյուն	30			Լ
խ	x	x	x	x	χ	consonant	χɛ	խե	40			Խ
ծ	t	ʦ	t	ts	ts dz	consonant	tsɑ/dzɑ	ծա	50			Ծ
կ	k	k	k	k	k ɡ	consonant	kɛn/ɡɛn	կեն	60			Կ
հ	h	h	h	h	h	consonant	ho	հօ	70			Հ
ձ	d	ʣ	d	dz	dz tsʰ	consonant	dzɑ/tsʰɑ	ձա	80			Ձ
ղ	r	ʁ	r	ṙ	ʁ	consonant	ʁɑt/ʁɑd	ղատ	90			Ղ
ճ	t	ʧ	t	tš	ʧ ʤ	consonant	tʃɛ/dʒɛ	ճե	100			Ճ
մ	m	m	m	m	m	consonant	mɛn	մեն	200			Մ
յ	y	y	j	j	h j	consonant	ji/hi	հի	300			Յ
ն	n	n	n	n	n ŋ	consonant	nu	նու	400			Ն
շ	s	ʃ	s	š	ʃ	consonant	ʃɑ	շա	500			Շ
չ	t	ʧʰ	t	tš’	ʧʰ	consonant	ʧʰɑ	չա	700			Չ
պ	p	p	p	p	p b	consonant	pɛ/bɛ	պե	800			Պ
ջ	d	ʤ	d	dž	dʒ tʃʰ	consonant	dʒɛ/tʃʰɛ	ջե	900			Ջ
ռ	r	ṙ	r	r	r ɾ	consonant	rɑ/ɾɑ	ռա	1000			Ռ
ս	s	s	s	s	s	consonant	sɛ	սե	2000			Ս
վ	v	v	v	v	v	consonant	vɛv	վեվ	3000			Վ
տ	t	t	t	t	t d	consonant	tjun/dʏn	տյուն	4000			Տ
ր	r	r	r	r’	ɾ	consonant	ɾɛ	րե	5000			Ր
ց	t	ʦʰ	t	ts’	ʦʰ	consonant	tsʰo	ցո	6000			Ց
ւ	w	w	w	w	v	consonant	hʏn	վյուն	7000			Ւ
փ	p	pʰ	p	p’	pʰ	consonant	pʰjuɾ/pʰʏɾ	փյուր	8000			Փ
ք	k	kʰ	k	k’	kʰ	consonant	kʰɛ	քե	9000			Ք
ֆ	f	f	f	f	f	consonant	fɛ	ֆե				Ֆ
												
Բ	B	ḅ	B	B	b pʰ	consonant	bɛn/pʰɛn	բեն			բ	
Գ	G	g̣	G	G	ɡ kʰ	consonant	gim/kʰim	գիմ			գ	
Դ	D	ḍ	D	D	d tʰ	consonant	dɑ/tʰɑ	դա			դ	
Զ	Z	ẓ	Z	Z	z	consonant	za	զա			զ	
Թ	T	ṭʰ	T	T’	tʰ	consonant	tʰo	թո			թ	
Ժ	Z	ʒ̣	Z	Ž	ʒ	consonant	ʒɛ	ժե			ժ	
Լ	L	ḷ	L	L	l	consonant	ljun/lʏn	լյուն			լ	
Խ	X	x̣	X	X	χ	consonant	χɛ	խե			խ	
Ծ	T	ʦ̣	T	Ts’	ts dz	consonant	tsɑ/dzɑ	ծա			ծ	
Կ	K	ḳ	K	K	k ɡ	consonant	kɛn/ɡɛn	կեն			կ	
Հ	H	ḥ	H	H	h	consonant	ho	հօ			հ	
Ձ	D	ʣ̣	D	Dz	dz tsʰ	consonant	dzɑ/tsʰɑ	ձա			ձ	
Ղ	R	ʁ̣	R	Ṙ	ʁ	consonant	ʁɑt/ʁɑd	ղատ			ղ	
Ճ	T	ʧ̣	T	Tš	ʧ ʤ	consonant	tʃɛ/dʒɛ	ճե			ճ	
Մ	M	ṃ	M	M	m	consonant	mɛn	մեն			մ	
Յ	Y	ỵ	J	J	h j	consonant	ji/hi	հի			յ	
Ն	N	ṇ	N	N	n ŋ	consonant	nu	նու			ն	
Շ	S	ʃ̣	S	Š	ʃ	consonant	ʃɑ	շա			շ	
Չ	T	ʧ̣ʰ	T	Tš’	ʧʰ	consonant	ʧʰɑ	չա			չ	
Պ	P	p̣	P	P	p b	consonant	pɛ/bɛ	պե			պ	
Ջ	D	ʤ̣	D	Dž	dʒ tʃʰ	consonant	dʒɛ/tʃʰɛ	ջե			ջ	
Ռ	R	ṛ̇	R	R	r ɾ	consonant	rɑ/ɾɑ	ռա			ռ	
Ս	S	ṣ	S	S	s	consonant	sɛ	սե			ս	
Վ	V	ṿ	V	V	v	consonant	vɛv	վեվ			վ	
Տ	T	ṭ	T	T	t d	consonant	tjun/dʏn	տյուն			տ	
Ր	R	ṛ	R	R’	ɾ	consonant	ɾɛ	րե			ր	
Ց	T	ʦ̣ʰ	T	Ts’	ʦʰ	consonant	tsʰo	ցո			ց	
Ւ	w	ẉ	W	W	v	consonant	hʏn	վյուն			ւ	
Փ	P	p̣ʰ	P	P’	pʰ	consonant	pʰjuɾ/pʰʏɾ	փյուր			փ	
Ք	K	ḳʰ	K	K’	kʰ	consonant	kʰɛ	քե			ք	
Ֆ	F	f̣	F	F	f	consonant	fɛ	ֆե			ֆ	
												
												
												
												
												
ա	a	a	a	a	ɑ	vowel	ajb/ajpʰ	այբ	1			Ա
ե	e	e	e	e	ɛ jɛ	vowel	jɛtʃʰ	եչ	5			Ե
է	e	ɛ	e	ē	ɛ	vowel	ɛ	է	7			Է
ը	e	ə	e	ë	ə	vowel	ətʰ	ըթ	8			Ը
ի	i	i	i	i	i	vowel	ini	ինի	20			Ի
ո	o	ɔ	o	o	ɔ ʋɔ	vowel	ʋɔ	ո	600			Ո
և	e	eʷ	e	ew	ev jev	vowel	jev	և				
օ	o	o	o	o	o	vowel	o	օ				Օ
												
Ա	A	ạ	A	A	ɑ	vowel	ajb/ajpʰ	այբ			ա	
Ե	E	ẹ	E	E	ɛ jɛ	vowel	jɛtʃʰ	եչ			ե	
Է	E	ɛ̣	E	Ē	ɛ	vowel	ɛ	է			է	
Ը	E	ə̣	E	Ë	ə	vowel	ətʰ	ըթ			ը	
Ի	I	ị	I	I	i	vowel	ini	ինի			ի	
Ո	O	ɔ̣	O	O	ɔ ʋɔ	vowel	ʋɔ	ո			ո	
Օ	O	ọ	O	O	o	vowel	o	օ			օ	
												
												
												
,		,	,	,	,	comma	storaket					
․	:	:	:	:	:	colon	mijaket					
՝	;	;	;	;	;	(semi) colon	bowt’					
։	.	.	.	.	.	full stop	verǰakēt					
«	<	“	<	“	“	quotation mark						
»	>	”	>	”	”	quotation mark						
՞	?	?	?	?	?	question mark	hartsakan nshan					
՜	!	!	!	!	!	exclamation mark	yerkaratsman nshan					
՛	!	!	!	!	!	emphasis mark	shesht					
֊	-	-	-	-	-	soft hyphen	miowt‛jan_gic					
												
												
ﬓ	m	mⁿ	m	mn		ligature						
ﬔ	m	mᵉ	m	me		ligature						
ﬕ	m	mⁱ	m	mi		ligature						
ﬖ	v	vⁿ	v	vn		ligature						
ﬗ	m	mˣ	m	mx		ligature						
												
												
												
ՙ						Do not use.				d		
՚						apostrophe (not recommended)	apat'arts			d		
՟						abbreviation mark	pativ			d		
												
												
֍						symbol						
֎						symbol						
֏	±	¤				currency symbol	dram					
`

var cols = {
"transLoc": 2,
"ipaLoc": 5,
"typeLoc": 6,
"nnameLoc": 8,
"nameLoc": 7,
"numLoc": 0,
"statusLoc": 10,
"dvowel": 0,
"ivowel": 0,
"subj":0,
"ltone":0,
"htone":0,
"numLoc":9,
"meaning":0,
"shape":0,
"lc":11,
"uc":12,
"transcription":4,

"othertranscriptions": [[4, 'ISO 9985']]
}
//replaceStuff('Armenian', 'armenian', spreadsheet, '', 'hy', '', cols, false)





