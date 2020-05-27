/*
	js-form-courses.js
	Form for printing in PDF (experimental)
	
	Sparisoma Viridi | https://github.com/dudung/abm-x
	
	20200527
	0943 Move it from PTPB/20200527_Form_SP to js-form.
	
	References
	1. url https://akademik.itb.ac.id/app/ka-tpb+2019-3/kelas
	   /kelas/open [20200527]
*/


// Raw data in TSV format for code, name, credit of courses
var rawmatkul = `
Kode	Nama	SKS
AR1101	Dasar Perencanaan dan Perancangan	3
BI1101	Biologi Dasar	4
BI1201	Pengantar Sains dan Teknologi Hayati	2
EL1200	Pengantar Analisis Rangkaian	2
FA1101	Pengantar Farmasi & Kesehatan	2
FA1102	Biologi Sel Farmasi	2
FA1241	Anatomi dan Fisiologi Manusia I	2
FI1101	Fisika Dasar IA	4
FI1102	Fisika Dasar IB	3
FI1201	Fisika Dasar IIA	4
FI1202	Fisika Dasar IIB	3
IF1210	Dasar Pemrograman	2
KI1002	Kimia Dasar B	4
KI1101	Kimia Dasar IA	3
KI1201	Kimia Dasar IIA	3
KU1001	Olah Raga	2
KU1011	Tata Tulis Karya Ilmiah	2
KU1021	Bahasa Inggris: Pemahaman Teks Akademik	2
KU1022	Bahasa Inggris: Penulisan Teks Akademik	2
KU1023	Bahasa Inggris: Teknik Presentasi	2
KU1024	Bahasa Inggris	2
KU1102	Pengenalan Komputasi	3
KU1160	Pengantar Keilmuan MIPA	2
KU1163	Pengantar Ilmu dan Teknologi Kebumian	2
KU1164	Pengantar Sumberdaya Mineral dan Energi	2
KU1166	Menggambar Teknik	2
KU1202	Pengantar Rekayasa dan Desain	3
KU1267	Menggambar Teknik	2
MA1101	Matematika IA	4
MA1102	Matematika IB	3
MA1103	Matematika Bisnis I	3
MA1201	Matematika IIA	4
MA1202	Matematika IIB	3
MA1203	Matematika Bisnis II	3
MA1204	Matematika IIC	4
MB1101	Pengantar Bisnis	4
MB1102	Seni Pentas dan Penampilan	4
MB1201	Statistika Bisnis	3
MB1203	Kepemimpinan dan Praktek Manajemen	3
MB1212	Kajian Tatanan Masyarakat	4
MS1100	Pengenalan Teknik Mesin, Material, dan Dirgantara	1
MS1200	Gambar Teknik	2
MS1210	Statika Struktur	3
PL1202	Teknik Komunikasi dan Presentasi	3
SR1101	Dasar Seni Rupa dan Desain	2
SR1102	Gambar I	4
SR1103	Rupa Dasar Dua Dimensi I	3
SR1104	Rupa Dasar Tiga Dimensi I	3
SR1201	Kreativita dan Humanita	2
SR1202	Gambar II	4
SR1203	Rupa Dasar Dua Dimensi II	3
SR1204	Rupa Dasar Tiga Dimensi II	3
`;