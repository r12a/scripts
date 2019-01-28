var spreadsheet = `
а	a	a	a	a	a	vowel	a	а			А
б	b	b	b	b	b bʲ	consonant	bɛ	бэ			Б
в	v	v	v	v	v vʲ	consonant	vɛ	вэ			В
г	g	g	g	g	ɡ ɡʲ	consonant	ɡɛ	гэ			Г
д	d	d	d	d	d dʲ	consonant	dɛ	дэ			Д
е	e	e	e	e	je ʲe e	vowel	je	е			Е
ж	z	ʐ	z	ž	ʐ	consonant	ʐɛ	жэ			Ж
з	z	z	z	z	z zʲ	consonant	zɛ	зэ			З
и	i	i	i	i	i ʲi ɨ	vowel	i	и			И
й	y	y	ĭ	ī	j	vowel	i kratkəjɪ	и краткое			Й
к	k	k	k	k	k kʲ	consonant	ka	ка			К
л	l	l	l	l	ɫ lʲ	consonant	ɛlʲ	эль			Л
м	m	m	m	m	m mʲ	consonant	ɛm	эм			М
н	n	n	n	n	n nʲ	consonant	ɛn	эн			Н
о	o	o	o	o	o	vowel	o	о			О
п	p	p	p	p	p pʲ	consonant	pɛ	пэ			П
р	r	r	r	r	r rʲ	consonant	ɛr	эр			Р
с	s	s	s	s	s sʲ	consonant	ɛs	эс			С
т	t	t	t	t	t tʲ	consonant	tɛ	тэ			Т
у	u	u	u	u	u	vowel	u	у			У
ф	f	f	f	f	f fʲ	consonant	ɛf	эф			Ф
х	x	x	h	h	x xʲ	consonant	xa	ха			Х
ц	t	ʦ	ch	c	ʦ	consonant	ʦɛ	цэ			Ц
ч	t	ʨ	ch	č	ʨ	consonant	ʨɛ	чэ			Ч
ш	s	ʂ	s	š	ʂ	consonant	ʂa	шæ			Ш
щ	s	ʂ̂	s	ŝ	ɕɕ ɕʨ	consonant	ɕɕæ	ща			Щ
ъ	"	ʺ	"	ʺ 	∅	hard sign	tvʲɵrdɨj znak	твёрдый знак			Ъ
ы	i	ɨ	y	y	ɨ	vowel	ɨ	ы			Ы
ь	ʹ	ʹ		ʹ	ʲ	soft sign	ˈmʲæxʲkʲɪj znak	мягкий знак			Ь
э	e	ɛ	e	è 	ɛ	vowel	ɛ	э			Э
ю	j	jᵘ	u	û	ju	vowel	ju	ю			Ю
я	j	jᵃ	a	â	ja	vowel	ja	я			Я
											
А	a	A	a	a	a	vowel	a	а		а	
Б	b	B	b	b	b bʲ	consonant	bɛ	бэ		б	
В	v	V	v	v	vvʲ	consonant	vɛ	вэ		в	
Г	g	G	g	g	ɡɡʲ	consonant	ɡɛ	гэ		г	
Д	d	D	d	d	d dʲ	consonant	dɛ	дэ		д	
Е	e	E	e	e	je ʲe e	vowel	je	е		е	
Ж	z	ʐ	z	ž	ʐ	consonant	ʐɛ	жэ		ж	
З	z	Z	z	z	z zʲ	consonant	zɛ	зэ		з	
И	i	I	i	i	i ʲi ɨ	vowel	i	и		и	
Й	y	Y	ĭ	ī	j	vowel	i kratkəjɪ	и краткое		й	
К	k	K	k	k	k kʲ	consonant	ka	ка		к	
Л	l	L	l	l	ɫ lʲ	consonant	ɛlʲ	эль		л	
М	m	M	m	m	m mʲ	consonant	ɛm	эм		м	
Н	n	N	n	n	n nʲ	consonant	ɛn	эн		н	
О	o	O	o	o	o	vowel	o	о		о	
П	p	P	p	p	p pʲ	consonant	pɛ	пэ		п	
Р	r	R	r	r	r rʲ	consonant	ɛr	эр		р	
С	s	S	s	s	s sʲ	consonant	ɛs	эс		с	
Т	t	T	t	t	t tʲ	consonant	tɛ	тэ		т	
У	u	U	u	u	u	vowel	u	у		у	
Ф	f	F	f	f	f fʲ	consonant	ɛf	эф		ф	
Х	x	X	h	h	x xʲ	consonant	xa	ха		х	
Ц	t	ʦ	ch	c	ʦ	consonant	ʦɛ	цэ		ц	
Ч	t	ʨ	ch	č	ʨ	consonant	ʨɛ	чэ		ч	
Ш	s	Ʂ	s	š	ʂ	consonant	ʂa	шæ		ш	
Щ	s	Ʂ̂	s	ŝ	ɕɕ ɕʨ	consonant	ɕɕæ	ща		щ	
Ъ	"	ʺ	"	ʺ 	∅	hard sign	tvʲɵrdɨj znak	твёрдый знак		ъ	
Ы	i	Ɨ	y	y	ɨ	vowel	ɨ	ы		ы	
Ь	ʹ	ʹ		ʹ	ʲ	soft sign	ˈmʲæxʲkʲɪj znak	мягкий знак		ь	
Э	e	Ɛ	e	è 	ɛ	vowel	ɛ	э		э	
Ю	j	Û	u	Û	ju	vowel	ju	ю		ю	
Я	j	Â	a	Â	ja	vowel	ja	я		я	
											
											
											
											
											
											
ӑ			a	ă		vowel					
ӓ			a	ä		vowel					
ӕ			a	æ		vowel					
ӗ			a	ĕ		vowel					
ѐ						vowel					
ё	j	jᵒ	e	ë	jo ʲo	vowel	ё	jo			
ә			e	a̋		vowel					
ӛ			e	à		vowel					
і		ī	i	ì		vowel					
ї			i	ï		vowel					
ѝ						vowel					
ҋ						vowel					
ӣ			i	ī		vowel					
ӥ			i	î		vowel					
ӧ			o	ö		vowel					
ө			o	ô		vowel					
ӫ			o	ő		vowel					
ӯ			u	ū		vowel					
ӱ			u	ü		vowel					
ӳ			u	ű		vowel					
ў			u	ŭ		vowel					
ү			u	ù		consonant					
ұ			u	u̇		consonant					
ӹ			y	ÿ		vowel					
є			e	ê		consonant					
ӭ						vowel					
ѓ			g	ǵ		consonant					
ґ						consonant					
ғ			g	ġ		consonant					
ӷ						consonant					
ҕ			g	ğ		consonant					
җ			z	ž̦		consonant					
ӂ			z	z̆		consonant					
ӝ			z	z̄		consonant					
ҙ						consonant					
ӟ			z	z̈		consonant					
ӡ			z	ź		consonant					
ќ			k	ḱ		consonant					
қ			k	k̦		consonant					
ҝ			k	k̂		consonant					
ҟ			k	k̄		consonant					
қ			k	k̀		consonant					
ӄ						consonant					
ӆ						consonant					
љ			i	l̂		consonant					
ӎ						consonant					
њ			n	n̂		consonant					
ң			n	n̦		consonant					
ҥ			n	ṅ		consonant					
ӈ			n	ň		consonant					
ӊ			n	ṇ		consonant					
һ						consonant					
ћ						consonant					
ђ						consonant					
ҧ			p	ṕ		consonant					
ҏ						consonant					
ҫ			s	ș		consonant					
ҽ			c	c̆		consonant					
ҿ			c	c̨̆		consonant					
ҭ			t	ț		consonant					
ҵ			c	c̄		consonant					
џ			d	d̂		consonant					
ѕ		ż				consonant					
ј						consonant					
ҩ						consonant					
ҳ			h	h̦		consonant					
ҷ			c	c̦		consonant					
ҹ			c	ĉ		consonant					
ӌ			c	c̣		consonant					
ӵ			c	c̈		consonant					
ӏ			|	‡		consonant					
ҍ						semi-soft sign					

ѡ						vowel?					
ѣ		i͡e				consonant?					
ѥ						vowel					
ѧ		ę				vowel					
ѩ		i͡ę				vowel					
ѫ		ǫ				vowel					
ѭ		i͡ǫ				vowel					
ѯ		k͡s				consonant					
ѱ		p͡s				consonant					
ѳ		ḟ				consonant					
ѵ		ẏ				consonant					
ѷ						consonant					
ѹ						digraph					
ѻ						vowel					
ѽ						vowel					
ѿ						vowel					
ҁ						consonant?					
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
"lc":10,
"uc":11,
"transcription":4,

"othertranscriptions": [[4, 'ISO 9:1995']]
}