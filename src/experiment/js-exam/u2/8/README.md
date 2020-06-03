# Ujian kelompok 8


## Anggota
Terdapat lima orang anggota pada kelompok 8 ini dengan fraksi kontribusinya pada pengerjaan tiap soal dapat dilihat dalam tabel berikut.

| NIM      | Nama                  | Peran pada soal (dan fraksi kontribusinya)   |
|----------|-----------------------|----------------------------------------------|
|          |                       |                                              |
| 10217003 | Ima Rahmadanti        | 1 (0.00) 2 (0.30) 3 (0.80) 4 (0.00) 5 (0.10) |
| 10217013 | Alika Rahma G.        | 1 (0.00) 2 (0.70) 3 (0.00) 4 (0.00) 5 (0.00) |
| 10217018 | Johnson Fernando      | 1 (0.75) 2 (0.00) 3 (0.20) 4 (0.00) 5 (0.00) |
| 10217057 | Ighfar Hasbi A.       | 1 (0.00) 2 (0.00) 3 (0.00) 4 (0.00) 5 (0.90) |
| 10217065 | Pangeran Niti K.      | 1 (0.25) 2 (0.00) 3 (0.00) 4 (1.00) 5 (0.00) |
|          |                       |                                              |
|          | Total                 | 1 (1.00) 2 (1.00) 3 (1.00) 4 (1.00) 5 (1.00) |



# Jawaban

## Soal 1 | Sistem bandul dengan sistem koordinat kartesian

### a

Jawaban berikut akan lebih jelas dilihat dalam [editor](https://rawcdn.githack.com/dudung/jsxphys/4220729be109df8b94729ca4605562caa6d7596b/0.0.2/editor.html).

	Didapatkan persamaan dalam setiap arah gerak bandul sebagai berikut,
	untuk gerak sumbu $x$:

	\begin{equation}
	\label{eqn:law-newton-1-x}
	\sum F_x = m \ddot{x}
	\end{equation}

	Pertama-tama, dapat ditemukan hubungan

	\begin{equation}
	\label{eqn:law-newton-2-x}
	T \cos \theta - F_{viskox} = m \ddot{x}
	\end{equation}

	Jika dianalisa gaya searah dengan vektor dari r, maka

	\begin{equation}
	\label{eqn:tension}
	T = m g \sin \theta + \frac{m (\dot{x}^2 + \dot{y}^2)^2}{l}
	\end{equation}	

	Substitusikan persamaan $F_{viskox} = 3 \eta \pi D \ddot{x}$ dan
	\eqref{eqn:tension} ke dalam persamaan \eqref{eqn:law-newton-2-x}, maka

	\begin{equation}
	\label{eqn:law-newton-3-x}
	- m g \sin \theta \cos \theta + \left(\frac{m v^2}{l} \right) \cos \theta 
	- 3 \eta \pi \D \dot{x} = m \ddot{x}
	\end{equation}

	Substitusikan $\cos \theta = \frac{x}{l}$ dan $\sin \theta = \frac{y}{l}$
	ke dalam persamaan \eqref{eqn:law-newton-3-x} sehingga akan didapat

	\begin{equation}
	\label{eqn:nlode-x}
	\ddot{x} + \left( \frac{3 \pi \eta D}{m} \right) \dot{x} - \left(\frac{1}
	{l^2}\right) (\dot{x}^2 + \dot{y}^2) x + \left( \frac{g}{l^2}\right) xy = 0
	\end{equation}

	Selanjutnya, akan diturunkan persamaan gerak untuk sumbu y, dimana

	\begin{equation}
	\label{eqn:law-newton-1-y}
	\sum F_y = m \ddot{y}
	\end{equation}

	Dapat dilihat gaya yang bekerja di sumbu y adalah

	\begin{equation}
	\label{eqn:law-newton-2-y}
	T \sin \theta - mg - F_{viskoy} = m \ddot{x}
	\end{equation}

	Substitusikan persamaan $F_{viskoy} = 3 \eta \pi D \ddot{y}$, \eqref{eqn:tension},
	dan $\sin \theta = \frac{y}{l}$, sehingga akan didapat

	\begin{equation}
	\label{eqn:nlode-y}
	\ddot{y} + \left( \frac{3 \pi \eta D}{m} \right) \dot{y} + \left(\frac{1}{l^2}
	\right) (\dot{x}^2 + \dot{y}^2) y - \left( \frac{g}{l^2}\right) y^2 = -g.
	\end{equation}

### b

Jawaban pada soal berikut akan lebih jelas dilihat dalam [editor](https://rawcdn.githack.com/dudung/jsxphys/4220729be109df8b94729ca4605562caa6d7596b/0.0.2/editor.html).

	Persamaan diferensial non-linier memiliki beberapa suku yang menyebabkan persamaan
	diferensial yang didapatkan tidak linier. Pada suku turunan pertama ($\dot{x}$ dan
	$\dot{y}$), didapati koefisien berupa besaran gaya gesek udara yang artinya nilai percepatan
	bandul sangat dipengaruhi oleh besarnya gesekan udara. Pada suku selanjutnya, yaitu suku
	dengan koefisien $\left(\frac{1}{l^2} \right) (\dot{x}^2 + \dot{y}^2)$, maka suku ini
	berhubungan dengan panjang tali serta nilai kecepatan pada sumbu x dan sumbu y. Adapun pada
	suku terakhir, persamaan diferensial non-linear pada $x$ berupa $\left( \frac{g}{l^2}\right)
	xy$ dan pada $y$ berupa $- \left( \frac{g}{l^2}\right) y^2 + g$ sebenarnya merupakan nilai
	konstanta yang dipengaruhi oleh perubahan sudut simpangan yang diberikan.

### c

Jawaban pada soal berikut akan lebih jelas dilihat dalam [editor](https://rawcdn.githack.com/dudung/jsxphys/4220729be109df8b94729ca4605562caa6d7596b/0.0.2/editor.html).

	Untuk benda jatuh bebas, maka nilai $\sin \theta \approx 1$ sehingga $l \approx y$.
	Hal ini dikarenakan nilai $\theta$ dapat dianggap sebesar $\frac{\pi}{2}$.
	<br /><br />
	
	Karena benda bergerak tanpa mengalami gaya gesekan udara, maka nilai 
	$\eta = 0$. Hal ini dikarenakan viskositas berbanding lurus dengan
	gaya gesek.
	<br /><br />
	
	Dengan demikian, maka didapatkan persamaan differensial non-linear pada arah $x$
		
	\begin{equation}
	\label{eqn:nlode-x}
	\ddot{x} = \left(\frac{1}{y} \right) \left(\frac{(\dot{x}^2 + \dot{y}^2)}{y} +
	g \right) x
	\end{equation}

	dan $y$

	\begin{equation}
	\label{eqn:nlode-y}
	\ddot{y} = - \left(\frac{1}{y} \right) (\dot{x}^2 + \dot{y}^2)
	\end{equation}

### d

Jawaban pada soal berikut akan lebih jelas dilihat dalam [editor](https://rawcdn.githack.com/dudung/jsxphys/4220729be109df8b94729ca4605562caa6d7596b/0.0.2/editor.html).

	Untuk bandul dengan simpangan kecil ($\theta \approx 0$), maka nilai $\sin \theta
	\approx \theta$.
	<br /><br />
	
	Karena benda bergerak tanpa mengalami gaya gesekan udara, maka nilai 
	$\eta = 0$. Hal ini dikarenakan viskositas berbanding lurus dengan
	gaya gesek.
	<br /><br />
	
	Dengan demikian, maka didapatkan persamaan differensial non-linear pada arah $x$
		
	\begin{equation}
	\label{eqn:nlode-x}
	\ddot{x} = \left(\frac{1}{l} \right) \left(\frac{(\dot{x}^2 + \dot{y}^2)}{l} +
	g \theta \right) x
	\end{equation}

	dan $y$

	\begin{equation}
	\label{eqn:nlode-y}
	\ddot{y} = \left(\frac{\theta}{l}\right) (\dot{x}^2 + \dot{y}^2) + (\theta^2 - 1) g
	\end{equation}
	
	

## Soal 2 | Bandul dengan sistem koordinat polar

### a

Jawaban pada soal berikut akan lebih jelas dilihat dalam [editor](https://rawcdn.githack.com/dudung/jsxphys/4220729be109df8b94729ca4605562caa6d7596b/0.0.2/editor.html).

	Persamaan diferensial sistem bandul pada arah $\theta$ didapatkan sebagai berikut.

	\begin{equation}
	\label{eqn:law-newton-1-theta}
	\sum F = m a
	\\
	\sum F = W = -mg \sin \theta
	\\
	m a = - m g \sin \theta
	\end{equation}

	sehingga didapatkan sebagai berikut.

	\begin{equation}
	\label{eqn:law-newton-2-theta}
	a = - g \sin \theta
	\end{equation}

	Diketahui bahwa $s$ adalah jalur bandul yang didapatkan melalui hubungan $s=l \theta$,
	dengan $l$ adalah panjang tali, dan $\theta$ adalah sudut yang yang dibentuk oleh tali
	dan garis vertikal (sumbu y).
	<br /><br />
	
	Jalur bandul $s$, dapat menghasilkan persamaan sebagai berikut.

	\begin{equation}
	\label{eqn:law-newton-3-theta}
	s=l\theta
	\\
	v=\frac{ds}{dt}=l\frac{d\theta}{dt}
	\\
	a=\frac{d^2 s}{dt^2}=l\frac{d^2 \theta}{dt^2}
	\end{equation}

	Subsitusi percepatan $a$ pada persamaan \eqref{eqn:law-newton-3-theta} ke ersamaan
	\eqref{eqn:law-newton-2-theta} menghasilkan sebagai berikut.

	\begin{equation}
	\label{eqn:law-newton-4-theta}
	l\frac{d^2 \theta}{dt^2}=-g\sin\theta
	\\
	\frac{d^2 \theta}{dt^2}+\frac{g}{l}\sin\theta=0
	\end{equation}

	dan dihasilkan persamaan diferensial sistem bandul pada arah $\theta$.

	\begin{equation}
	\label{eqn:law-newton-5-theta}
	\ddot{\theta} + \left( \frac{g}{l} \right) \sin \theta = 0
	\end{equation}

	Sedangkan persamaan diferensial sistem bandul pada arah $r$ didapatkan sebagai berikut.

	\begin{equation}
	\label{eqn:law-newton-6-theta}
	\sum F_r = 0
	\\
	\frac{m v^2}{l}+lg\cos\theta-\frac{Tl}{m}=0
	\end{equation}

	Diketahui bahwa $v=\ddot{\theta}$, sehingga persamaan \eqref{eqn:law-newton-6-theta}
	dapat dituliskan sebagai berikut.

	\begin{equation}
	\label{eqn:nlode-theta}
	l^2 \dot{\theta}^2 + lg\cos\theta - \frac{Tl}{m}=0
	\\
	\dot{\theta}^2 + \frac{g}{l}\cos\theta - \frac{T}{lm}=0
	\end{equation}

	Dan dihasilkan persamaan diferensial sistem bandul pada arah $r$.

	\begin{equation}
	\label{eqn:nlode-r}
	\dot{\theta}^2 + \frac{g}{l}\cos\theta = \frac{T}{lm}
	\end{equation}

### b

Jawaban pada soal berikut akan lebih jelas dilihat dalam [editor](https://rawcdn.githack.com/dudung/jsxphys/4220729be109df8b94729ca4605562caa6d7596b/0.0.2/editor.html).

	Untuk nilai $\theta$ yang kecil, $\sin \theta \approx \theta$.
	Maka persamaan diferensial pada $\theta$ dapat dituliskan sebagai berikut.

	\begin{equation}
	\label{eqn:theta-1}
	\ddot{\theta} + \left( \frac{g}{l} \right) \theta = 0
	\\
	\ddot{\theta} = - \left( \frac{g}{l} \right) \theta
	\\
	\frac {d^2\theta} {dt^2} = - \left( \frac{g}{l} \right) \theta
	\end{equation}

	Persamaan \eqref{eqn:theta-1} memiliki solusi sebagai berikut.

	\begin{equation}
	\label{eqn:theta-2}
	\theta(t) = \theta_0 \cos \left( \sqrt \frac{g}{l} t + \delta \right)
	\end{equation}

	dengan $\theta_0$ dan $\delta$ adalah suatu konstanta yang bergantung pada kondisi
	awal. $\theta_0$ adalah amplitudo, dan $\delta$ adalah konstanta fasa.
	<br /><br />
	
	Persamaan diferensial pada $\theta$ untuk nilai $\theta$ kecil, dapat pula dituliskan
	sebgai berikut.

	\begin{equation}
	\label{eqn:t-1}
	\ddot{\theta} + \left( \frac{g}{l} \right) \theta = 0
	\\
	\ddot{\theta} + \omega^2 \theta = 0
	\end{equation}

	dengan $\omega$ adalah $\sqrt \frac{g}{l}$, maka didapatkan sebagai berikut.

	\begin{equation}
	\label{eqn:t-2}
	T = \frac {2 \pi}{\omega} = 2 \pi \sqrt \frac{l}{g}
	\end{equation}

### c

Jawaban pada soal berikut akan lebih jelas dilihat dalam [editor](https://rawcdn.githack.com/dudung/jsxphys/4220729be109df8b94729ca4605562caa6d7596b/0.0.2/editor.html).

	Deret Taylor untuk $t \equiv t_0$ dinyatakan pada persamaan di bawah.

	\begin{equation}
	\label{eqn:taylor-1}
	f(t+\triangle t)=f(t) + \triangle t \frac{df(t)}{dt} + \frac{1}{2} \triangle t^2 \frac{d^2 f(t)}{dt^2}+O(\triangle t^3)
	\end{equation}

	Bila posisi $\theta (t)$ merupakan $f(t)$ pada Deret Taylor di atas, maka dapat dituliskan bahwa

	\begin{equation}
	\label{eqn:taylor-2}
	\theta (t+\triangle t)=\theta (t) + \dot{\theta} (t) \triangle t + \frac{1}{2} \ddot{\theta} (t) \triangle t^2 +O(\triangle t^2)
	\end{equation}

	dan

	\begin{equation}
	\label{eqn:taylor-3}
	\dot{\theta} (t+\triangle t)=\dot{\theta} (t) + \ddot{\theta} \triangle t + O(\triangle t^3)
	\end{equation}

	yang merupakan solusi numerik dengan Algoritma Euler untuk sembarang nilai $\theta$.

### d
Kode program berikut

```C++
*Tidak dikerjakan*
```

dapat dijalankan secara daring menggunakan [http://cpp.sh/](http://cpp.sh/) atau aplikasi lainnya.

## Soal 3 | Jaringan saraf tiruan dengan aplikasi TensorFlow


### a

Pada soal JST dengan aplikasi TensorFlow, untuk mengetahui notasi arsitektur dari JST agar dapat terklasifikasi dengan baik dalam dua kelas. Dimulai dengan memisalkan input dimana pada TensorFlow terihat X1 dan X2 dimisalkan sebagi X dan Y pada data yang diberikan didalam soal, asumsi pula bahwa biru adalah X dan jingga adalah Y. Selanjutnya memvariasikan hidden layer agar sukses dalam klasifikasi dua kelas. Keberhasilan dalam klasifikasi ini dapat terlihat dengan adanya arrange biru di titik biru dan jingga di titik jingga.

Adapun hasil dari perlakuan tersebut sebagai berikut

![alt text](https://github.com/johnsonfernando/Ujian2Fiskom/blob/master/3a.png "3a")

### b

Pada soal JST dengan aplikasi TensorFlow, untuk mengetahui notasi arsitektur dari JST agar dapat terklasifikasi dengan baik dalam dua kelas. Dimulai dengan memisalkan input dimana pada TensorFlow terihat X1 dan X2 dimisalkan sebagi X dan Y pada data yang diberikan didalam soal, asumsi pula bahwa biru adalah X dan jingga adalah Y. Selanjutnya memvariasikan hidden layer agar sukses dalam klasifikasi dua kelas. Keberhasilan dalam klasifikasi ini dapat terlihat dengan adanya arrange biru di titik biru dan jingga di titik jingga.

Adapun hasil dari perlakuan tersebut sebagai berikut

![alt text](https://github.com/johnsonfernando/Ujian2Fiskom/blob/master/3b.png "3b")

### c

Pada soal JST dengan aplikasi TensorFlow, untuk mengetahui notasi arsitektur dari JST agar dapat terklasifikasi dengan baik dalam dua kelas. Dimulai dengan memisalkan input dimana pada TensorFlow terihat X1 dan X2 dimisalkan sebagi X dan Y pada data yang diberikan didalam soal, asumsi pula bahwa biru adalah X dan jingga adalah Y. Selanjutnya memvariasikan hidden layer agar sukses dalam klasifikasi dua kelas. Keberhasilan dalam klasifikasi ini dapat terlihat dengan adanya arrange biru di titik biru dan jingga di titik jingga.

Adapun hasil dari perlakuan tersebut sebagai berikut

![alt text](https://github.com/johnsonfernando/Ujian2Fiskom/blob/master/3c.png "3c")


### d

*Tidak dikerjakan*

## Soal 4 | Algoritma genetik sederhana dengan JS

### a
Fungsi yang dimaksud adalah

```JavaScript
main();						//Fungsi utama didefinisikan
function main() {
    var p = "0011110";
    [xs, ys, cs] = getValues(p);
    console.log("p =",p);
    console.log("x =",xs);
    console.log("y =",ys);
    console.log("c =",cs);
}
function getValues() {
    var p = arguments[0];
    var xs = p.slice(0, 3);
    var ys = p.slice(3, 6);
    var cs = p.slice(6);

    return [xs, ys, cs];
}
```

dengan hasil yang diperoleh sebagai berikut

![alt text](https://github.com/johnsonfernando/Ujian2Fiskom/blob/master/4a.png "4a")

### b

Fungsi yang dimaksud adalah

```JavaScript
main();
// Fungsi Utama didefinisikan
function main() {
    var p = "1101110";
    [xs, ys, cs] = getValues(p);
    var hasil = 1/(1+fitness(xs,ys));		//Fungsi Fitting
    console.log("p =",p);
    console.log("x =",xs);
    console.log("y =",ys);
    console.log("c =",cs);
    console.log("hasil = ",hasil);
}

function getValues() {
    var p = arguments[0];
    var xs = p.slice(0, 3);
    var ys = p.slice(3, 6);
    var cs = p.slice(6);
    return [xs, ys, cs];
}

function fitness(a, b) {			//Fungsi Fitting Bagian Akar
  return(Math.sqrt(Math.pow((a - 111), 2) + Math.pow((b - 111),2)));
}
```

### c

Fungsi yang dimaksud adalah

```JavaScript
main();
//Fungsi utama di definisikan
function main() 
{ var p = "1000110"; //variabel kromosom yang akan diperiksa
var q = "1011111"; 
var r = "1111001"; 
var s = "1100110"; 
var t = "1011101"; 
 var threshold= 0.5;
[x1, y1, c1] = getValues(p); 
[x2, y2, c2] = getValues(q); 
[x3, y3, c3] = getValues(r); 
[x4, y4, c4] = getValues(s); 
[x5, y5, c5] = getValues(t); 
var h1 = 1/(1+fitness(x1,y1));
var seleksi1 = selection(threshold, h1, p)
console.log("p =",p); 
console.log("x =",x1); 
console.log("y =",y1); 
console.log("c =",c1);
console.log("h = ",h1);
console.log("seleksi = ",p," ",  seleksi1);
var h2 = 1/(1+fitness(x2,y2));
var seleksi2 = selection(threshold, h2, q)
console.log("q =",q); 
console.log("x =",x2); 
console.log("y =",y2); 
console.log("c =",c2); 
console.log("h = ",h2);
console.log("seleksi = ",q," ",  seleksi2);
var h3 = 1/(1+fitness(x3,y3));
var seleksi3 = selection(threshold, h3, r)
console.log("r =",r); 
console.log("x =",x3); 
console.log("y =",y3); 
console.log("c =",c3); 
console.log("h = ",h3);
console.log("seleksi = ",r," ",  seleksi3);
var h4 = 1/(1+fitness(x4,y4));
var seleksi4 = selection(threshold, h4, s)
console.log("s =",s); 
console.log("x =",x4); 
console.log("y =",y4); 
console.log("c =",c4); 
console.log("h = ",h4);
console.log("seleksi = ",s," ", seleksi4);
var h5 = 1/(1+fitness(x5,y5));
var seleksi5 = selection(threshold, h5, t)
console.log("t =",t); 
console.log("x =",x5); 
console.log("y =",y5); 
console.log("c =",c5); 
console.log("hasil = ",h5);
console.log("seleksi = ",t," ", seleksi5);
}

function getValues() 
{ var p = arguments[0];
var xs = p.slice(0, 3); 
var ys = p.slice(3, 6); 
var cs = p.slice(6);
return [xs, ys, cs]; 
}
function fitness(a, b) 
{ return(Math.sqrt(Math.pow((a - 111), 2) + Math.pow((b - 111),2))); 
}

function selection(threshold, a, p)          
//fungsi seleksi nilai kromosom dengan threshold nilai fitness >= 0,5
{ if (a>=threshold) { result="pass the selection";
} else { result="didnt pass the selection";
}
return (result);
}
```

Adapun hasil yang didapatkan sebagai berikut

![alt text](https://github.com/johnsonfernando/Ujian2Fiskom/blob/master/4c1.png "4c1")

![alt text](https://github.com/johnsonfernando/Ujian2Fiskom/blob/master/4c2.png "4c2")

![alt text](https://github.com/johnsonfernando/Ujian2Fiskom/blob/master/4c3.png "4c3")

![alt text](https://github.com/johnsonfernando/Ujian2Fiskom/blob/master/4c4.png "4c4")

![alt text](https://github.com/johnsonfernando/Ujian2Fiskom/blob/master/4c5.png "4c5")

### d 

Adapun program yang dimaksud sebagai berikut

```JavaScript
main();

// Fungsi utama didefiniskan
function main() {
    var p = "1001101";    //Masukkan angka kromosom yang ingin diuji
    [xs, ys, cs] = getValues(p);
    var hasil = 1/(1+fitness(xs,ys));
    console.log("p =",p);
    console.log("x =",xs);
    console.log("y =",ys);
    console.log("c =",cs);
    console.log("hasil = ",hasil);

}

function getValues() {
    var p = arguments[0];

    var xs = p.slice(0, 3);
    var ys = p.slice(3, 6);
    var cs = p.slice(6);

    return [xs, ys, cs];
}

function fitness(a, b) {
return(Math.sqrt(Math.pow((a - 101), 2) + Math.pow((b - 100),2)));	//Nilai dalam akar disesuaikan untuk kromoson referensi
}
```
Adapun hasil yang didapatkan dari pengecekan variasi kromosom sebagai berikut

![alt text](https://github.com/johnsonfernando/Ujian2Fiskom/blob/master/4d1.png "4d1")

![alt text](https://github.com/johnsonfernando/Ujian2Fiskom/blob/master/4d2.png "4d2")

![alt text](https://github.com/johnsonfernando/Ujian2Fiskom/blob/master/4d3.png "4d3")

![alt text](https://github.com/johnsonfernando/Ujian2Fiskom/blob/master/4d4.png "4d4")

![alt text](https://github.com/johnsonfernando/Ujian2Fiskom/blob/master/4d5.png "4d5")

Kromosom dengan hasil maksimal adalah kromoson 1011001 karena sama dengan kromoson *threshold* memiliki *fitness* 1 dan kromoson yang paling mendekati 1011001 adalah kromoson 1001101 dengan nilai *fitness* 0,09 dari 5 percobaan yang dilakukan.

## Soal 5 | Research based learning

### a Tujuan

Menentukan nilai π menggunakan metode Monte Carlo.

### b Rumusan masalah

Bagaimana pengaruh banyaknya titik uji terhadap ketelitian hasil nilai π.

### c Metode

- Membandingkan titik uji yang masuk dalam interval M dengan titik uji total N.
- Misalkan terdapat sebuah lingkaran dalam sebuah persegi seperti gambar berikut:

![alt text](https://github.com/johnsonfernando/Ujian2Fiskom/blob/master/5c1.png "5c1")

Adapun perhitungan pada bahasan berikut akan lebih jelas dilihat dalam [editor](https://rawcdn.githack.com/dudung/jsxphys/4220729be109df8b94729ca4605562caa6d7596b/0.0.2/editor.html).

	Adapun luas lingkaran sebesar $\pi R^2$ dan luas persegi sebesar $4 R^2$,
	maka perbandingan luas lingkaran dengan luas persegi adalah
	
	\begin{equation}
	\label{eqn:circle-square}
	\frac{L_lingkaran}{L_persegi} = \frac{\pi}{4}
	\end{equation}
	
	Adapun hubungan perbandingan luas kedua bangun dengan perbandingan antara
	M dan N adalah
	
	\begin{equation}
	\label{eqn:circle-square-M-N}
	\frac{\pi}{4} = \frac{M}{N}
	\\
	\pi = 4 \left(\frac{M}{N} \right)
	\end{equation}

Adapun diagram alirnya sebagai berikut

![alt text](https://github.com/johnsonfernando/Ujian2Fiskom/blob/master/5c2.png "5c2")

### d Hasil dan diskusi

Semakin banyak titik uji N yang digunakan, maka hasil π yang diperoleh akan mendekati nilai 3,1415926. Hal ini  terjadi karena semakin banyak titik uji N maka peluang titik acak M yang berada dalam lingkaran akan semakin besar dan akhirnya mendekati nilai π.

### e Referensi
1. Michael Jay Schillaci, Ph.D., "A Monte-Carlo Calculation of Pi", Departemen of Computer Science, Mathematics and Physics Roberts Wesleyan Collage, Rochester, NY.
