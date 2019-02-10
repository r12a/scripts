var spreadsheet = `
Α	A	A	a	vowel	alpha	άλφα	α	
Β	V	V	v	consonant	beta	βήτα	β	
Γ	Y	Ɣ	ɣ ʝ	consonant	gamma	γάμμα	γ	
Δ	D	Ð	ð	consonant	delta	δέλτα	δ	
Ε	E	E	e	vowel	epsilon	έψιλον	ε	
Ζ	Z	Z	z	consonant	zeta	ζήτα	ζ	
Η	I	İ	i	vowel	eta	ήτα	η	
Θ	Q	Θ	θ	consonant	theta	θήτα	θ	
Ι	I	I	i ç ʝ ɲ	vowel	iota	ιώτα	ι	
Κ	K	K	k c	consonant	kappa	κάππα	κ	
Λ	L	L	l	consonant	la(m)bda	λά(μ)βδα	λ	
Μ	M	M	m	consonant	mu	μυ	μ	
Ν	N	N	n	consonant	nu	νυ	ν	
Ξ	K	K͡S	ks	consonant	xi	ξι	ξ	
Ο	O	O	o	vowel	omicron	όμικρον	ο	
Π	P	P	p	consonant	pi	πι	π	
Ρ	R	R	r	consonant	rho	ρώ	ρ	
Σ	S	S	s z	consonant	sigma	σίγμα	σ	
Τ	T	T	t	consonant	tau	ταυ	τ	
Υ	Y	Y	i	vowel	upsilon	ύψιλον	υ	
Φ	F	F	f	consonant	phi	φι	φ	
Χ	X	X	x ç	consonant	chi	χι	χ	
Ψ	P	P͡S	ps	consonant	psi	ψι	ψ	
Ω	O	Ȯ	o	vowel	omega	ωμέγα	ω	
								
α	a	a	a	vowel	alpha	άλφα		Α
β	v	v	v	consonant	beta	βήτα		Β
γ	y	ɣ	ɣ ʝ	consonant	gamma	γάμμα		Γ
δ	d	ð	ð	consonant	delta	δέλτα		Δ
ε	e	e	e	vowel	epsilon	έψιλον		Ε
ζ	z	z	z	consonant	zeta	ζήτα		Ζ
η	i	i	i	vowel	eta	ήτα		Η
θ	q	θ	θ	consonant	theta	θήτα		Θ
ι	i	ı	i ç ʝ ɲ	consonant	iota	ιώτα		Ι
κ	k	k	k c	consonant	kappa	κάππα		Κ
λ	l	l	l	consonant	la(m)bda	λά(μ)βδα		Λ
μ	m	m	m	consonant	mu	μυ		Μ
ν	n	n	n	consonant	nu	νυ		Ν
ξ	k	k͡s	ks	consonant	xi	ξι		Ξ
ο	o	o	o	vowel	omicron	όμικρον		Ο
π	p	p	p	consonant	pi	πι		Π
ρ	r	r	r	consonant	rho	ρώ		Ρ
σ	s	s	s z	consonant	sigma	σίγμα		Σ
ς	s	s̽	s z	consonant	final sigma	σίγμα		
τ	t	t	t	consonant	tau	ταυ		Τ
υ	y	y	i	vowel	upsilon	ύψιλον		Υ
φ	f	f	f	consonant	phi	φι		Φ
χ	x	x	x ç	consonant	chi	χι		Χ
ψ	p	p͡s	ps	consonant	psi	ψι		Ψ
ω	o	ȯ	o	vowel	omega	ωμέγα		Ω
								
								
Ά	A	Á	a	vowel + tonos			ά	
Έ	E	É	e	vowel + tonos			έ	
Ή	I	Í	i	vowel + tonos			ή	
Ί	O	Ô	o	vowel + tonos			ί	
Ό	O	Ó	o	vowel + tonos			ό	
Ύ	Y	Ý	i	vowel + tonos			ύ	
Ώ	O	Õ	o	vowel + tonos			ώ	
Ϊ	I	Ï	i	vowel + dialytika			ϊ	
Ϋ	Y	Ÿ	i	vowel + dialytika			ϋ	
								
ά	a	á	a	vowel + tonos				Ά
έ	e	é	e	vowel + tonos				Έ
ή	i	í	i	vowel + tonos				Ή
ί	o	ô	o	vowel + tonos				Ί
ό	o	ó	o	vowel + tonos				Ό
ύ	y	ý	i	vowel + tonos				Ύ
ώ	o	õ	o	vowel + tonos				Ώ
ΐ	i	ḯ	i	vowel				
ϊ	i	ï	i	vowel + dialytika				Ϊ
ϋ	y	ÿ	i	vowel + dialytika				Ϋ
ΰ	y	ÿ́	i	vowel + dialytika + tonos				
								
								
\u037E	?	?		question mark				
\u0387	;	;		semicolon				
								
								
\u0301	[	ˊ		acute accent				
\u0308	[	¨		diaeresis				
`

var cols = {
"transLoc": 2,
"ipaLoc": 3,
"typeLoc": 4,
"nnameLoc": 6,
"nameLoc": 5,
"numLoc": 0,
"statusLoc": 0,
"lc": 7,
"uc": 8,
"dvowel": 0,
"ivowel": 0,
"subj":0,
"ltone":0,
"htone":0,
"numLoc":0,
"meaning":0,
"shape":0,
"transcription":0,

//"othertranscriptions": [[4, 'ISO 9985']]
}