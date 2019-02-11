var spreadsheet = `
ᠠ	a	a	a	a	а	ɑ	a ə
ᠡ	e	e	e	e	є	ə	i e ə ∅
ᠢ	i	i	i	i	и й ы ь	i ɪ	i ə ∅
ᠣ	o	ɔ	o	o	о	ɔ	ɔ ə ∅
ᠤ	u	ʊ	u	u	у	ʊ	ʊ ə ∅
ᠥ	O	o	O	ö	ө	o	o ə ∅
ᠦ	U	u	U	ü	ү	u	u ə
ᠧ	E	ə	E	ë	э	ə	i e ə
							
							
ᠨ	n	n	n	n	н	n ŋ	n
ᠩ	N	ŋ	N	ng	нг	ŋ	ŋ
ᠪ	b	b	b	b	б	b	p w
ᠫ	p	p	p	p	п	p	pʰ
ᠬ	x	x	q	x	х	x	x
ᠭ	g	g	g	g	г	ɣ g	ɢ g
ᠮ	m	m	m	m	м	m	m
ᠯ	l	l	l	l	л	l	ɮ
ᠰ	s	s	s	s	с	s ʃ	s ʃ
ᠱ	S	ʃ	s	š	ш	ʃ	ʃ
ᠲ	t	t	t	t	т	t	t
ᠳ	d	d	d	d	д	d	t tʰ
ᠴ	c	č	c	č	ч ц	ʧʰ	ʧʰ tsʰ
ᠵ	D	ʤ	j	ǰ	ж з	ʤ	ʤ dz
ᠶ	y	y	y	y	-й е* ё* ю* я*	j	j
ᠷ	r	r	r	r	р	r	r
							
							
ᠸ	v	v	v	w	в	w v	
ᠹ	f	f	f	f	ф	f	
ᠺ	k	k̇	k	k	к	k	
ᠻ	k	k̇		ḳ			
ᠼ	t	ʦ	c	c	ц	ʦ	
ᠽ	d	ʣ	z	z	з	ʣ	
ᠾ	h	h	h	h	х	x	
ᠿ	z	ʐ	r	ž	ж	ʐ	
ᡀ	l	lʰ	l	lh	лх	lh	
ᡁ	z	ʑ	z	ẑ	з	ʈʂɻ	
ᡂ	c	ɕ	c	ĉ	ч	ʈʂʰɻ	
ᡛ			n	ń			
							
							
᠀	|	¶		&			
᠅	|	#		#			
᠁	.	…		…			
᠂	,	,	,	,			
᠃	.	\u002E	.	.			
᠄	:	:	:	:			
᠊	_	_	_	"–
"			
( 	(	(					
)	)	)					
〈	(	<					
〉	)	>					
《	(	{					
》	)	}					
〔	(	[					
〕	)	]					
							
\u180E	[	·	[	_			
\u202F	]	-	]	-			
							
							
\u180B	^	¹	^	\u0027			
\u180C	^	²	^	"			
\u180D	^	³	^	\u0060			
\u200D	=	˖	=	*			
\u200C	=	ˣ	=	^			
							
numbers							
᠐	0	0	0	0			
᠑	1	1	1	1			
᠒	2	2	2	2			
᠓	3	3	3	3			
᠔	4	4	4	4			
᠕	5	5	5	5			
᠖	6	6	6	6			
᠗	7	7	7	7			
᠘	8	8	8	8			
᠙	9	9	9	9			
`

var cols = {
"transLoc": 2,
"ipaLoc": 6,
"typeLoc": 7,
"nnameLoc": 0,
"nameLoc": 0,
"numLoc": 0,
"statusLoc": 0,
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
"transcription2":5,

"othertranscriptions": [[4, 'Joint Sino-Mongolian'],[5, 'Cyrillic']]
}