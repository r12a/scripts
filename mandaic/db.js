var spreadsheet = `
ࡁ	b	b	b	consonant	b	ba			ࡁࡅࡁࡅࡁ ࡁ
ࡂ	g	g	ɡ	consonant	g	ga			ࡂࡅࡂࡅࡂ ࡂ
ࡃ	d	d	d	consonant	d	da			ࡃࡅࡃࡅࡃ ࡃ
ࡄ	h	h	h	consonant	h	ha			ࡄࡅࡄࡅࡄ ࡄ
ࡆ	z	z	z	consonant	z	za			ࡆࡅࡆࡅࡆ ࡆ
ࡇ	h	ẖ	iːʷ ħuᵘ	consonant	ẖ	eh			ࡇࡅࡇࡅࡇ ࡇ
ࡈ	y	ᵵ	ᵵ	consonant	ṭ	ṭa			ࡈࡅࡈࡅࡈ ࡈ
ࡊ	k	k	k	consonant	k	ka			ࡊࡅࡊࡅࡊ ࡊ
ࡋ	l	l	l	consonant	l	la			ࡋࡅࡋࡅࡋ ࡋ
ࡌ	m	m	m	consonant	m	ma			ࡌࡅࡌࡅࡌ ࡌ
ࡍ	n	n	n	consonant	n	na			ࡍࡅࡍࡅࡍ ࡍ
ࡎ	s	s	s	consonant	s	sa			ࡎࡅࡎࡅࡎ ࡎ
ࡐ	p	p	p	consonant	p	pa			ࡐࡅࡐࡅࡐ ࡐ
ࡑ	s	ᵴ	ᵴ	consonant	ṣ	ṣa			ࡑࡅࡑࡅࡑ ࡑ
ࡒ	q	q	q	consonant	q	qa			ࡒࡅࡒࡅࡒ ࡒ
ࡓ	r	r	r	consonant	r	ra			ࡓࡅࡓࡅࡓ ࡓ
ࡔ	s	ʃ	ʃ	consonant	š	ša			ࡔࡅࡔࡅࡔ ࡔ
ࡕ	t¶	t	t	consonant	t	ta			ࡕࡅࡕࡅࡕ ࡕ
ࡖ	d	ḏ	di	consonant	ḏ	dushenna/adu			ࡖࡅࡖࡅࡖ ࡖ
ࡗ	k	k͟d	kḏi	consonant	kḏ	kad			ࡗࡅࡗࡅࡗ ࡗ
ࡘ	{	ʕ	ʕ	consonant	ʕ	ayin			ࡘࡅࡘࡅࡘ ࡘ
									
									
ࡀ	a	ā	aː a	vowel	ā	a			ࡀࡅࡀࡅࡀ ࡀ
ࡅ	u	u	u uː o	vowel	u	wa/ushenna			ࡅࡅࡅࡅࡅ ࡅ
ࡉ	i	i	i iː e	vowel	i	ya			ࡉࡅࡉࡅࡉ ࡉ
ࡏ	e	ʿ	- e i iː u	vowel	ʿ	e			ࡏࡅࡏࡅࡏ ࡏ
									
									
\u0859	/	̤		affrication mark					
\u085B	&	˖		gemination mark					
\u085A	[	̱		vocalisation mark					
									
									
࡞	|	¶		section delimiter					


ࡂ࡙	Y	γ	γ						
ࡃ࡙	D	δ	δ						
ࡄ࡙	H	ḥ	ḥ						
ࡈ࡙	Z	ẓ	ẓ						
ࡊ࡙	X	χ	χ						
ࡐ࡙	F	f	f						
ࡑ࡙	Z	ž	ž						
ࡔ࡙	C	č	č						
ࡕ࡙	Q	θ	θ						
									
									
ࡀ࡚	A	a							
\bࡏࡅ	£	u							
ࡅ࡚	O	o							
ࡏࡉ\b	£	i							
ࡉ࡚	E	e							
`

var cols = {
"transLoc": 2,
"ipaLoc": 3,
"typeLoc": 4,
"nnameLoc": 7,
"nameLoc": 6,
"numLoc": 0,
"statusLoc": 8,
"dvowel": 0,
"ivowel": 0,
"subj":0,
"ltone":0,
"htone":0,
"numLoc":0,
"meaning":0,
"shape":9,
"lc":0,
"uc":0,
"transcription":0,

//"othertranscriptions": [[3, 'Transcription']]
}
