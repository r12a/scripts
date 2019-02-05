var spreadsheet = `
ᮊ	k	k	k	k	consonant				
ᮌ	g	g	g	ɡ	consonant				
ᮍ	n	ŋ	ng	ŋ	consonant				
ᮎ	t	ʧ	c	ʧ	consonant				
ᮏ	d	ʤ	j	ʤ	consonant				
ᮑ	n	ɲ	ny	ɲ	consonant				
ᮒ	t¶	t	t	t	consonant				
ᮓ	d¶	d	d	d	consonant				
ᮔ	n¶	n	n	n	consonant				
ᮕ	p	p	p	p	consonant				
ᮘ	b	b	b	b	consonant				
ᮙ	m	m	m	m	consonant				
ᮚ	y	y	y	j	consonant				
ᮛ	r	r	r	r	consonant				
ᮜ	l	l	l	l	consonant				
ᮝ	w	w	w	w	consonant				
ᮞ	s	s	s	s	consonant				
ᮠ	h	h	h	h	consonant				
									
									
ᮡ	y	y̆	y	j	medial consonant	pamingkal			
ᮢ	r	r̆	r	r	medial consonant	panyakra			
ᮣ	l	l̆	l	l	medial consonant	panyiku			
									
									
ᮀ	n	ŋ̽	ng	ŋ	syllable-final consonant	panayecek			
ᮁ	r	r̽	r	r	syllable-final consonant	panglayar			
ᮂ	h	h̽	h	h	syllable-final consonant	pangwisad			
									
									
ᮋ	q	q	q	q	transliteration consonant				
ᮐ	z	z	z	z	transliteration consonant				
ᮖ	f	f	f	f	transliteration consonant				
ᮗ	v	v	v	v	transliteration consonant				
ᮟ		k͜s	ks	ks	transliteration consonant				
ᮮ	h	ẖ	kh	x	transliteration consonant				
ᮯ	s	š	sy	s	transliteration consonant				
									
									
ᮬ	m	m̆		m	medial consonant		archaic		
ᮭ	w	w̆		w	medial consonant		archaic		
ᮻ	r	r̥		rəu	vocalic		archaic		
ᮼ	l	l̥		ləu	vocalic		archaic		
ᮽ					consonant		archaic		
ᮾ	k	k̽			final consonant		archaic		
ᮿ	m	m̽		m	final consonant		archaic		
									
									
᮪	\	ˣ			vowel killer	pamaéh/patén			
\u1BAB	*	͓			virama		archaic		
									
									
ᮃ	a	ạ	a	a	independent vowel				
ᮄ	i	ị	i	i	independent vowel			ᮤ	
ᮅ	u	ụ	u	u	independent vowel			ᮥ	
ᮆ	e	ẹ́	é	e	independent vowel			ᮦ	
ᮇ	o	ọ	o	o	independent vowel			ᮧ	
ᮈ	e	ə̣	e	ə	independent vowel			ᮨ	
ᮉ	v	ɤ̣	eu	ɤ	independent vowel			ᮩ	
									
									
ᮤ	i	i	i	i	vowel sign	panghulu			ᮄ
ᮥ	u	u	u	u	vowel sign	panyuku			ᮅ
ᮦ	e	é	é	e	vowel sign	panéléng			ᮆ
ᮧ	o	o	o	o	vowel sign	panolong			ᮇ
ᮨ	e	ə	e	ə	vowel sign	pamepet			ᮈ
ᮩ	v	ɤ	eu	ɤ	vowel sign				ᮉ
									
									
ᮺ					archaic sign		archaic		
									
									
᳀					full stop		archaic		
᳁					bindu		archaic		
᳂					bindu		archaic		
᳃					punctuation				
᳄					punctuation				
᳅					punctuation				
᳆					punctuation				
᳇					punctuation				
									
									
᮰	0	0	0		digit				
᮱	1	1	1		digit				
᮲	2	2	2		digit				
᮳	3	3	3		digit				
᮴	4	4	4		digit				
᮵	5	5	5		digit				
᮶	6	6	6		digit				
᮷	7	7	7		digit				
᮸	8	8	8		digit				
᮹	9	9	9		digit				
`

var cols = {
"transLoc": 2,
"ipaLoc": 4,
"typeLoc": 5,
"nnameLoc": 0,
"nameLoc": 6,
"numLoc": 0,
"statusLoc": 7,
"dvowel": 8,
"ivowel": 9,
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