# U2 Fisika Komputasi | Kelompok 7

Nama anggota kelompok :

1. 10217032 - Hanifil Fikri
2. 10217039 - Casimiro Rino K
4. 10217040 - Anggi Maulana Adi Saputra
1. 10217051 - Hilman Fikry
5. 10217056 - Nadif Fadlurrahman Wahdi
2. 10217087 - Matthew Putro A.

***

# Soal 1

#### Nomor a

```
Pendulum dengan panjang tali tegang $l$ memiliki ujung berbentuk bola dengan massa $m$ dan diameter $D$, disimpangkan dengan sudut $\theta$ dari sumbu-$y$ di sistem dengan udara berviskositas $\eta$. Pendulum tersebut mengalami percepatan gravitasi 

\begin{equation}
\label{eqn:percepatan-g}
\vec{g} = - g \hat{y}
\end{equation}

Gaya berat yang dialami oleh bola pada pendulum adalah

\begin{equation}
\label{eqn:gayaberat}
\vec{F}_g = - m \vec{g}
\end{equation}

Gaya tegangan tali dialami oleh pendulum

\begin{equation}
\label{eqn:gayategangantali}
\vec{F}_T = |-\vec{F}_g|\cos\theta \hat{l} = m g \cos\theta \hat{l}
\end{equation}

Serta gaya sentrifugal yang dialami oleh pendulum adalah

\begin{equation}
\label{eqn:gayasentrifugal}
\vec{F}_s = - \frac{m|\vec{v}|^2}{l}  \hat{l}
\end{equation}

Karena udara pada sistem ini memiliki viskositas $\eta$, gaya gesek udara pada sistem ini dapat diperoleh menggunakan hukum Stokes

\begin{equation}
\label{eqn:gayagesek}
\vec{F}_S = -3 \pi \eta D \vec{v}
\end{equation}

Persamaan untuk Hukum II Newton adalah

\begin{equation}
\label{eqn:hukum2newton}
\Sigma{\vec{F}} = m \vec{\ddot{r}}
\end{equation}

Dari persamaan \eqref{eqn:gayaberat}, \eqref{eqn:gayategangantali}, \eqref{eqn:gayasentrifugal}, dan \eqref{eqn:gayagesek}, persamaan \eqref{eqn:hukum2newton} menjadi

\[
\vec{F}_g + \vec{F}_T + \vec{F}_s + \vec{F}_S = m \vec{\ddot{r}} \\
- m \vec{g} + m g \cos\theta \hat{l} - \frac{m}{l}{\dot{r}}^2 \hat{l} - 3 \pi \eta D \vec{\dot{r}} = m \vec{\ddot{r}}\]
\begin{equation}
\label{eqn:persamaangerak}
- g \hat{y} +  g \cos\theta (-\sin(\theta) \hat{x} + \cos(\theta) \hat{y}) - \frac{1}{l} (\dot{x}^2 + \dot{y}^2) (-\sin(\theta) \hat{x} + \cos(\theta) \hat{y}) - \frac{3 \pi \eta D}{m} (\dot{x} \hat{x} + \dot{y} \hat{y}) = \ddot{x} \hat{x} - \ddot{y} \hat{y}
\end{equation}

Dengan menggunakan perbandingan trigonometri, didapatkan nilai $\cos\theta = \frac{y}{l}$ dan $\sin\theta = \frac{x}{l}$, persamaan gerak pada arah-$x$ didapat dari \eqref{eqn:persamaangerak} adalah

\[
-  g \cos\theta \sin\theta + \frac{1}{l} \left(\dot{x}^2 + \dot{y}^2\right) \sin(\theta) - \left(\frac{3 \pi \eta D}{m}\right) \dot{x} = \ddot{x}
\]
\begin{equation}
\label{eqn:gerakx}
\ddot{x} +  \left(\frac{g}{l^2}\right) xy - \frac{x}{l^2} \left(\dot{x}^2 + \dot{y}^2\right) + \left(\frac{3 \pi \eta D}{m}\right) \dot{x} = 0
\end{equation}

Sedangkan, untuk persamaan gerak pada arah-$y$ adalah

\[
- g -  g \cos\theta \cos\theta + \frac{1}{l} \left(\dot{x}^2 + \dot{y}^2\right) \cos(\theta) - \left(\frac{3 \pi \eta D}{m}\right) \dot{y} = -\ddot{y}
\]
\begin{equation}
\label{eqn:geraky}
\ddot{y} +  \left(\frac{g}{l^2}\right) y^2 - \frac{y}{l^2} \left(\dot{x}^2 + \dot{y}^2\right) + \left(\frac{3 \pi \eta D}{m}\right) \dot{y} = g
\end{equation}
```

#### Nomor b
```
Kita tinjau dulu persamaan gerak pada sumbu-$x$.
<br></br>
Pada persamaan (8), suku $\frac{g}{l}xy$ menunjukkan gaya tegangan tali yang dialami oleh pendulum, sedangkan suku $\frac{x}{l^2}(\dot{x}^2+\dot{y}^2)$ menunjukkan gaya sentrifugal yang dialami oleh pendulum.
<br></br>
Sedangkan, untuk arah sumbu-$y$, pada persamaan (9), suku-sukunya menunjukkan gaya yang sama kecuali pada ruas kanan terdapat $g$ karena pada arah-$y$ pendulum dipengaruhi oleh gaya berat benda yang arahnya $-\hat{y}$.
```

#### Nomor c
```
Karena tidak ada hambatan udara, maka $\eta=0$. Sehingga persamaan (8) dan (9) pada nomor 1a menjadi seperti berikut.
<br/><br/>

Untuk sumbu $x$ :

\begin{equation}
\label{eqn:gerakx}
\ddot{x} +  \left(\frac{g}{l^2}\right) xy - \frac{x}{l^2} \left(\dot{x}^2 + \dot{y}^2\right) = 0
\end{equation}

Untuk sumbu $y$ :

\begin{equation}
\label{eqn:geraky}
\ddot{y} +  \left(\frac{g}{l^2}\right) y^2 - \frac{y}{l^2} \left(\dot{x}^2 + \dot{y}^2\right) = g
\end{equation}

Sistem hanya bergantung pada percepatan sentripetal.
```

#### Nomor d
```
Apabila pendulum disimpangkan denngan simpangan yang cukup kecil, berlaku $\sin\theta\approx\theta$ dan $\cos\theta\approx 1$. Sistem tidak mengalami gesekan udara ($\eta = 0$) sehingga pada arah-$x$, persamaan (8) soal no. 1a, menjadi

\begin{equation}
\label{eq:nofriction-x}
\ddot{x} +  \theta g - \frac{\theta}{l} \left(\dot{x}^2 + \dot{y}^2\right)  = 0
\end{equation}

Sedangkan untuk arah-$y$, persamaan (9) soal no. 1a, menjadi

\begin{equation}
\label{eq:nofriction-y}
\ddot{y} - \frac{1}{l} \left(\dot{x}^2 + \dot{y}^2\right) = 0
\end{equation}

```

# Soal 2

#### Nomor a
```
Dengan menggunakan sistem bandul dalam soal nomor 1 dapat pula dipilih
sistem koordinat polar $r$ dan $\theta$ yang dalam hal ini akan terpenuhi
$\dot{r} = 0$ karena tali tidak mulur atau $r = l$.
<br></br>

kemudian untuk arah $\theta$, pada sistem bandul tersebut terdapat gaya pemulih yakni 

\begin{equation}
\label{eqn:gayapemulih}
\vec{F}_p = - m g \sin\theta
\end{equation}

kemudian kita gunakan Hukum Newton II

\[
\Sigma \vec{F} = m \vec{a}\\
- m g \sin\theta = m \vec{a}\\
- g \sin\theta = \vec{a}\]
\begin{equation}
\label{eqn:1}
- g \sin\theta = \frac{d^2x}{dt}
\end{equation}

Karena $x=l\theta$, maka persamaan \eqref{eqn:1} menjadi

\[
-g \sin \theta = l \frac{d^2\theta}{dt^2}\\
g \sin \theta +  l \frac{d^2\theta}{dt^2} = 0\\
\frac{g}{l} \sin \theta + \frac{d^2\theta}{dt^2} = 0
\]
\begin{equation}
\label{eqn:2}
\ddot{\theta} + \frac{g}{l} \sin \theta = 0
\end{equation}

Sedangkan gaya-gaya yang berkerja pada arah $\hat{r}$ 

\[
\Sigma F_r = m a_r
\]
\begin{equation}
\label{eqn:fr}
m g \cos \theta - T = m a_r 
\end{equation}

Untuk mencari nilai $a_r$, terlebih dahulu kita mencari nilai $\vec{a}$ pada koordinat polar yang didapat dari turunan kedua dari $\vec{r} = r \hat{r} + \theta \hat{\theta}$, yaitu

\begin{equation}
\label{eqn:ar}
\vec{a} = \frac{d^2\vec{r}}{dt^2} = \left( \ddot{r} - r \dot{\theta} \right) \hat{r} + \left(2 \dot{r} \dot{\theta} + r \ddot{\theta} \right) \hat{\theta}
\end{equation}

Karena tali tidak mulur ($\dot{r} = 0$) dan panjang tali $r = l$, maka persamaan \eqref{eqn:ar} menjadi

\begin{equation}
\label{eqn:ar2}
\vec{a} = \frac{d^2\vec{r}}{dt^2} = \left( l \dot{\theta} \right) \hat{r} + \left(l \ddot{\theta} \right) \hat{\theta}
\end{equation}

Dari persamaan \eqref{eqn:ar2}, didapat nilai $a_r = l\dot{\theta}$, sehingga persamaan \eqref{eqn:fr} menjadi

\[
m g \cos \theta - T = m l \dot{\theta}
\]
\begin{equation}
\label{eqn:final}
\frac{g}{l} \cos \theta - \dot{\theta} = \frac{T}{ml}
\end{equation}
```

#### Nomor b
```
Untuk kasus $\theta$ kecil, maka berlaku $\sin \theta \approx \theta$, sehingga persamaan (2) pada nomor 2a menjadi

\[
\ddot{\theta} + \frac{g}{l} \theta = 0
\]
\begin{equation}
\label{eqn:eq-1}
\ddot{\theta}  = - \frac{g}{l} \theta 
\end{equation}

Misalkan $\omega^2 = \frac{g}{l}$, persamaan \eqref{eqn:eq-1} menjadi

\begin{equation}
\label{eqn:eq-2}
\ddot{\theta}  = - \omega^2 \theta 
\end{equation}

Solusi umum dari persamaan diferensial diatas adalah 

\begin{equation}
\label{eqn:solusiumum}
\theta (t) = C_1 \cos \omega t + C_2 \sin \omega t
\end{equation}

Sedangkan untuk nilai $T$, untuk kasus $\theta$ kecil berlaku $\cos\theta \approx 1$, sehingga dari persamaan (7) pada nomor 2a, didapat

\[
\frac{g}{l} - \frac{d\theta}{dt} = \frac{T}{ml}
\]
\begin{equation}
\label{eqn:eq-3}
m g - ml\frac{d\theta}{dt} = T
\end{equation}

Nilai $\dot{\theta}$ diperoleh dari turunan pertama solusi umum pada persamaan \eqref{eqn:solusiumum}

\begin{equation}
\label{eqn:dottheta}
\frac{d\theta}{dt} = \frac{d}{dt}\left( C_1 \cos \omega t + C_2 \sin \omega t \right) = C_2 \omega \cos \omega t - C_1 \omega \sin \omega t
\end{equation}

Substitusikan nilai $\frac{d\theta}{dt}$ ke persamaan \eqref{eqn:eq-3}, didapat

\begin{equation}
\label{eqn:eq-4}
T = m g - m l C_2 \omega \cos \omega t + m l C_1 \omega \sin \omega t
\end{equation}
```

#### Nomor c
Hasil numerik menggunakan algoritma untuk simpangan dengan perbedaan theta kecil dan theta besar

<div>
    <a href="https://plotly.com/~ndffw/4/?share_key=bm4djddtzmQpXCGKCEAwOz" target="_blank" title="Simpangan (Euler)" style="display: block; text-align: center;"><img src="https://plotly.com/~ndffw/4.png?share_key=bm4djddtzmQpXCGKCEAwOz" alt="Simpangan (Euler)" style="max-width: 100%;width: 600px;"  width="600" onerror="this.onerror=null;this.src='https://plotly.com/404.png';" /></a>
</div>
source : https://plotly.com/~ndffw/4/

Sedangkan hasil numerik menggunakan algoritma untuk kecepatan dengan perbedaan theta kecil dan theta besar

<div>
    <a href="https://plotly.com/~ndffw/5/?share_key=F0aUuQ4gxS4vRGtQdPhfD3" target="_blank" title="Kecepatan (Euler)" style="display: block; text-align: center;"><img src="https://plotly.com/~ndffw/5.png?share_key=F0aUuQ4gxS4vRGtQdPhfD3" alt="Kecepatan (Euler)" style="max-width: 100%;width: 600px;"  width="600" onerror="this.onerror=null;this.src='https://plotly.com/404.png';" /></a>
</div>
source : https://plotly.com/~ndffw/5/

#### Nomor d
Sintaks program untuk mencari solusi numerik dengan algoritma euler adalah sebagai berikut
```cpp
//Soal 2d
#include <iostream>
#include <cmath>
using namespace std;

float g = 9.8; //gravitasi
float l = 1; //panjang bandul

/* asumsi penulisan dalam code ini adalah
    \theta-double-dot = a(t) = v'(t)
    \theta-dot = v(t) = x'(t)
    \theta = x(t)
*/

//fungsi v'(t) = a(t) untuk sudut besar
float f1 (float x) {
	float result1 = -(g/l)*sin(x);
	return (result1);
}

//fungsi v'(t) = a(t) untuk sudut kecil
float f2 (float x) {
	float result2 = -(g/l)*x;
	return (result2);
}

int main () {
	float x_old_b, x_new_b, v_old_b, v_new_b; //deklarasi variabel untuk sudut besar
	float x_old_k, x_new_k, v_old_k, v_new_k; //deklarasi variabel untuk sudut kecil
	float t_old, t_new; //deklarasi variabel domain waktu
	float dt, L, uplimit;
	
	dt = 0.01; //interval
	t_old = 0; 
	x_old_b = 0.5; v_old_b = 0; 
	x_old_k = 0.5; v_old_k = 0; 
	L = 9; //batas atas domain
	t_new = t_old;
	uplimit = t_old + L;
	cout << fixed; cout.precision(3);
	cout << "t\tx_num_b\tv_num_b\tx_num_k\tv_num_k\n";
	cout << t_old << "\t" << x_old_b << "\t"<< v_old_b << "\t" << x_old_k << "\t"<< v_old_k << "\n";
	
	//LOOP Euler Method
	while (t_new < uplimit) {
		t_new = t_old + dt;
		
		//Untuk sudut besar
		v_new_b = v_old_b + (dt*f1(x_old_b)); //kecepatan
		x_new_b = x_old_b + dt*v_old_b; //posisi
		
		//Untuk sudut keci
		v_new_k = v_old_k + (dt*f2(x_old_k)); //kecepatan
		x_new_k = x_old_k + dt*v_old_k; //posisi
		
		//OUTPUT
		cout << t_new << "\t" << x_new_b << "\t" << v_new_b << "\t" << x_new_k << "\t"  << v_new_k <<  "\n";
		t_old = t_new; 
		x_old_b = x_new_b; v_old_b = v_new_b;
		x_old_k = x_new_k; v_old_k = v_new_k;
	}
	
	return 0;
}
```

# Soal 3

Program untuk menjalankan soal ini https://github.com/nadifwahdi/u2-fiskom/blob/master/src.rar

#### Nomor a

Langkah-langkah yang dilakukan adalah sebagai berikut. Awalnya, data table dalam soal diimpor ke dalam bentuk txt yang digunakan sebagai input training model neural network. Dalam program bahasa c++ yang telah dilampirkan dalam file jawaban, dilakukan cara coba-coba mulai dari jumlah neuron dan jumlah layer yang paling sedikit sampai mendapatkan hasil prediksi yang sesuai dengan kelas pada table soal. Dalam program tersebut dilakukan feed forward dan back propagation. Pada akhirnya, diperoleh hasil prediksi yang paling mendekati nilai aslinya, yaitu JST dengan 
* Jumlah neuron pada layer input N1 = 2
* Jumlah neuron pada hidden layer 1 N2 = 4
* Jumlah neuroan pada hidden layer 2 N3 = 2
* Jumlah neuron pada layer output N4 = 1

File input .txt ditulis dalam format berikut (topology diisi dengan jumlah neuron di setiap layer yang akan digunakan untuk training) :

```
topology: 2 4 2 1
in: 0.02 0.176
out: 0
in: 0.274 0.498
out: 0
in: 0.341 0.591
out: 0
in: 0.273 0.612
out: 0
in: 0.482 0.49
out: 0
in: 0.047 0.329
out: 0
in: 0.499 0.796
out: 0
in: 0.201 0.794
out: 0
in: 0.237 0.161
out: 0
in: 0.481 0.314
out: 0
in: 0.739 0.654
out: 1
in: 0.942 0.663
out: 1
in: 0.785 0.358
out: 1
in: 0.584 0.787
out: 1
in: 0.838 0.412
out: 1
in: 0.818 0.252
out: 1
in: 0.556 0.339
out: 1
in: 0.854 0.425
out: 1
in: 0.937 0.659
out: 1
in: 0.544 0.684
out: 1
```

Hasil prediksi beserta error yang diperoleh sebagai berikut :

```
Pass1: Inputs : 0.02 0.176 
Outputs: 0.125236 
Targets: 0 
Net recent average error: 0.00123996

Pass2: Inputs : 0.274 0.498 
Outputs: 0.0799054 
Targets: 0 
Net recent average error: 0.00201883

Pass3: Inputs : 0.341 0.591 
Outputs: 0.0253849 
Targets: 0 
Net recent average error: 0.00225017

Pass4: Inputs : 0.273 0.612 
Outputs: -0.0119736 
Targets: 0 
Net recent average error: 0.00234645

Pass5: Inputs : 0.482 0.49 
Outputs: -0.0258426 
Targets: 0 
Net recent average error: 0.00257908

Pass6: Inputs : 0.047 0.329 
Outputs: -0.0219801 
Targets: 0 
Net recent average error: 0.00277117

Pass7: Inputs : 0.499 0.796 
Outputs: -0.0131032 
Targets: 0 
Net recent average error: 0.00287347

Pass8: Inputs : 0.201 0.794 
Outputs: -0.00269326 
Targets: 0 
Net recent average error: 0.00287168

Pass9: Inputs : 0.237 0.161 
Outputs: 0.0043503 
Targets: 0 
Net recent average error: 0.00288632

Pass10: Inputs : 0.481 0.314 
Outputs: 0.00537945 
Targets: 0 
Net recent average error: 0.00291101

Pass11: Inputs : 0.739 0.654 
Outputs: 0.00347133 
Targets: 1 
Net recent average error: 0.0127488

Pass12: Inputs : 0.942 0.663 
Outputs: 0.378651 
Targets: 1 
Net recent average error: 0.0187746

Pass13: Inputs : 0.785 0.358 
Outputs: 0.664727 
Targets: 1 
Net recent average error: 0.0219082

Pass14: Inputs : 0.584 0.787 
Outputs: 0.796122 
Targets: 1 
Net recent average error: 0.0237099

Pass15: Inputs : 0.838 0.412 
Outputs: 0.848219 
Targets: 1 
Net recent average error: 0.0249779

Pass16: Inputs : 0.818 0.252 
Outputs: 0.872859 
Targets: 1 
Net recent average error: 0.0259894

Pass17: Inputs : 0.556 0.339 
Outputs: 0.887081 
Targets: 1 
Net recent average error: 0.0268501

Pass18: Inputs : 0.854 0.425 
Outputs: 0.897035 
Targets: 1 
Net recent average error: 0.0276037

Pass19: Inputs : 0.937 0.659 
Outputs: 0.90413 
Targets: 1 
Net recent average error: 0.0282796

Pass20: Inputs : 0.544 0.684 
Outputs: 0.907455 
Targets: 1 
Net recent average error: 0.0289159
```

#### Nomor b

Langkah yang dilakukan sama dengan yang dilakukan di bagian a, hanya saja, dibutuhkan JST yang lebih kompleks karena persebaran datanya tidak merata. Pada akhirnya, diperoleh hasil prediksi yang paling mendekati nilai aslinya, yaitu JST dengan 

* Jumlah neuron pada layer input N1 = 2
* Jumlah neuron pada hidden layer 1 N2 = 1
* Jumlah neuron pada hidden layer 2 N3 = 2
* Jumlah neuron pada hidden layer 3 N4 = 1
* Jumlah neuron pada hidden layer 4 N5 = 2
* Jumlah neuron pada layer output N6 = 1

Hasil prediksi beserta errornya diperoleh sebagai berikut

```
Pass1: Inputs : 0.903 0.408 
Outputs: 0.30804 
Targets: 0 
Net recent average error: 0.0030499

Pass2: Inputs : 0.492 0.714 
Outputs: 0.219203 
Targets: 1 
Net recent average error: 0.0107504

Pass3: Inputs : 0.556 0.019 
Outputs: 0.404359 
Targets: 0 
Net recent average error: 0.0146475

Pass4: Inputs : 0.779 0.202 
Outputs: 0.393812 
Targets: 0 
Net recent average error: 0.0184016

Pass5: Inputs : 0.691 0.081 
Outputs: 0.286837 
Targets: 0 
Net recent average error: 0.0210594

Pass6: Inputs : 0.497 0.272 
Outputs: 0.144603 
Targets: 0 
Net recent average error: 0.0222826

Pass7: Inputs : 0.131 0.728 
Outputs: 0.0233415 
Targets: 1 
Net recent average error: 0.0317318

Pass8: Inputs : 0.271 0.821 
Outputs: 0.283547 
Targets: 1 
Net recent average error: 0.0385113

Pass9: Inputs : 0.586 0.54 
Outputs: 0.573367 
Targets: 0 
Net recent average error: 0.0438069

Pass10: Inputs : 0.264 0.297 
Outputs: 0.603502 
Targets: 1 
Net recent average error: 0.0472988

Pass11: Inputs : 0.52 0.4 
Outputs: 0.669988 
Targets: 0 
Net recent average error: 0.0534641

Pass12: Inputs : 0.155 0.02 
Outputs: 0.626022 
Targets: 0 
Net recent average error: 0.059133

Pass13: Inputs : 0.538 0.729 
Outputs: 0.513712 
Targets: 1 
Net recent average error: 0.0633622

Pass14: Inputs : 0.663 0.598 
Outputs: 0.541791 
Targets: 0 
Net recent average error: 0.0680991

Pass15: Inputs : 0.016 0.149 
Outputs: 0.456876 
Targets: 1 
Net recent average error: 0.0728024

Pass16: Inputs : 0.247 0.27 
Outputs: 0.525725 
Targets: 1 
Net recent average error: 0.0767773

Pass17: Inputs : 0.56 0.618 
Outputs: 0.634606 
Targets: 1 
Net recent average error: 0.0796349

Pass18: Inputs : 0.235 0.036 
Outputs: 0.71909 
Targets: 0 
Net recent average error: 0.0859662

Pass19: Inputs : 0.179 0.203 
Outputs: 0.698212 
Targets: 1 
Net recent average error: 0.088103

Pass20: Inputs : 0.062 0.641 
Outputs: 0.715572 
Targets: 1 
Net recent average error: 0.0900468
```

#### Nomor c

Langkah yang dilakukan sama dengan yang dilakukan di bagian a, hanya saja, dibutuhkan JST yang lebih kompleks karena persebaran datanya tidak merata. Pada akhirnya, diperoleh hasil prediksi yang paling mendekati nilai aslinya, yaitu JST dengan 

* Jumlah neuron pada layer input N1 = 2
* Jumlah neuron pada hidden layer 1 N2 = 6
* Jumlah neuron pada hidden layer 2 N3 = 1
* Jumlah neuron pada hidden layer 3 N4 = 1
* Jumlah neuron pada layer output N5 = 1

Hasil prediksi beserta erornya diperoleh sebagai berikut:

```
Pass1: Inputs : 0.624 0.355 
Outputs: 0.759802 
Targets: 0 
Net recent average error: 0.00752279

Pass2: Inputs : 0.159 0.958 
Outputs: 0.727438 
Targets: 1 
Net recent average error: 0.0101469

Pass3: Inputs : 0.774 0.905 
Outputs: 0.724904 
Targets: 1 
Net recent average error: 0.0127702

Pass4: Inputs : 0.62 0.434 
Outputs: 0.734699 
Targets: 0 
Net recent average error: 0.019918

Pass5: Inputs : 0.875 0.59 
Outputs: 0.704067 
Targets: 1 
Net recent average error: 0.0226508

Pass6: Inputs : 0.479 0.107 
Outputs: 0.695632 
Targets: 1 
Net recent average error: 0.0254401

Pass7: Inputs : 0.024 0.927 
Outputs: 0.722906 
Targets: 1 
Net recent average error: 0.0279317

Pass8: Inputs : 0.661 0.246 
Outputs: 0.743293 
Targets: 1 
Net recent average error: 0.0301968

Pass9: Inputs : 0.6 0.32 
Outputs: 0.7669 
Targets: 0 
Net recent average error: 0.0374909

Pass10: Inputs : 0.49 0.417 
Outputs: 0.745784 
Targets: 0 
Net recent average error: 0.0445037

Pass11: Inputs : 0.481 0.582 
Outputs: 0.697141 
Targets: 0 
Net recent average error: 0.0509655

Pass12: Inputs : 0.684 0.514 
Outputs: 0.620359 
Targets: 0 
Net recent average error: 0.056603

Pass13: Inputs : 0.291 0.606 
Outputs: 0.514874 
Targets: 0 
Net recent average error: 0.0611404

Pass14: Inputs : 0.222 0.659 
Outputs: 0.3894 
Targets: 1 
Net recent average error: 0.0665806

Pass15: Inputs : 0.624 0.309 
Outputs: 0.414378 
Targets: 0 
Net recent average error: 0.0700241

Pass16: Inputs : 0.596 0.246 
Outputs: 0.36497 
Targets: 1 
Net recent average error: 0.0756182

Pass17: Inputs : 0.201 0.795 
Outputs: 0.441937 
Targets: 1 
Net recent average error: 0.0803949

Pass18: Inputs : 0.327 0.082 
Outputs: 0.536284 
Targets: 1 
Net recent average error: 0.0841902

Pass19: Inputs : 0.196 0.912 
Outputs: 0.642727 
Targets: 1 
Net recent average error: 0.086894

Pass20: Inputs : 0.619 0.563 
Outputs: 0.708295 
Targets: 0 
Net recent average error: 0.0930465
```

#### Nomor d

Persebaran data pada table 1 lebih sederhana dibandingkan table 2 dan 3 sehingga model arsitektur JST yang digunakan juga dapat lebih sederhana (hanya memerlukan sedikit layer dan neuron). Arsitektur JST perlu dibatasi paling sederhana karena apabila terlalu kompleks dapat menyebabkan overfitting model dan waktu processing yang dibutuhkan juga lebih lama.

# Soal 4

#### Nomor a
```js
// Get interpretation of position and group from chromosome
function getValues() {
 p = arguments[0];
 
 xs = p.slice(0, 3);
 ys = p.slice(3, 6);
 gs = p.slice(6);
 
 console.log("p = ", p);
 console.log("x = ", xs);
 console.log("y = ", ys);
 console.log("g = ", gs);
}
```

#### Nomor b
```js
function fitness(a, b) {  
  return(Math.sqrt(Math.pow((a - 111), 2) + Math.pow((b - 111),2)));
}
```

#### Nomor c
```js
//nilai X0 dan Y0 dibuat = 111

// Execute main funtion
main();

// Define main function
function main() {
    var p = "0010110";
    [xs, ys, gs] = getValues(p);
    var val = 1/(1+fitness(xs,ys));   
    
    console.log("p =", p);
    console.log("x =", xs);
    console.log("y =", ys);
    console.log("kelas =", gs);
    console.log("val = ", val);
}

function getValues() {
    var p = arguments[0];
    var xs = p.slice(0, 3);
    var ys = p.slice(3, 6);
    var gs = p.slice(6);
    return [xs, ys, gs];
}

function fitness(a, b) {  
  return(Math.sqrt(Math.pow((a - 111), 2) + Math.pow((b - 111),2)));
}
```

#### Nomor d

Script JS
```JS
//nilai X0 dan Y0 dibuat = 111

// Execute main funtion
main();

// Define main function
function main() {
    var p = "0010110";
    [xs, ys, gs] = getValues(p);
    var val = 1/(1+fitness(xs,ys));   
    
    console.log("p =", p);
    console.log("x =", xs);
    console.log("y =", ys);
    console.log("kelas =", gs);
    console.log("val = ", val);
}

function getValues() {
    var p = arguments[0];
    var xs = p.slice(0, 3);
    var ys = p.slice(3, 6);
    var gs = p.slice(6);
    return [xs, ys, gs];
}

function fitness(a, b) {  
  return(Math.sqrt(Math.pow((a - 111), 2) + Math.pow((b - 111),2)));
}
```

`var p` diganti dengan 4 kromosom yang tersedia, dan didapat hasil

```
p = 0010110
VM114:13 x = 001
VM114:14 y = 011
VM114:15 kelas = 0
VM114:16 val =  0.006681781414235262

p = 1111111
VM72:13 x = 111
VM72:14 y = 111
VM72:15 kelas = 1
VM72:16 val =  1

p = 0010111
VM160:13 x = 001
VM160:14 y = 011
VM160:15 kelas = 1
VM160:16 val =  0.006681781414235262

p = 1101111
VM199:13 x = 110
VM199:14 y = 111
VM199:15 kelas = 1
VM199:16 val =  0.5

```

2 kromosom yang memiliki nilai fitness yang paling tinggi adalah 

```
p = 1111111
VM72:13 x = 111
VM72:14 y = 111
VM72:15 kelas = 1
VM72:16 val =  1

p = 1101111
VM199:13 x = 110
VM199:14 y = 111
VM199:15 kelas = 1
VM199:16 val =  0.5
```

# Soal 5

## Pendahuluan

### Tujuan
Pada kajian ini membahas sebuah permasalahan gerakan osilasi pegas yang tidak diketahui nilai kelajuan awalnya, lalu menggunakan shooting method untuk syarat batas dan menggunakan metode Euler untuk mencari solusi persamaan differensialnya.

### Rumusan Masalah
Menentukan kelajuan awal pada permasalahan gerakan osilasi pegas dengan shooting method dan metode Euler.

## Metode

Dalam fisika, gerakan osilasi pegas menjadi dasar dalam berbagai persoalaan fisika, seperti dalam getaran partikel akibat radiasi. Ini dapat dimodelkan sebagai gerakan osilasi pegas. Gerakan osilasi pegas ini dinyatakan dalam persamaan diferensial. Oleh karena itu, diperlukan komputasi untuk menghitung gerakan osilasi ini secara numerik.

Metode numerik yang digunakan untuk menyelesaikan persamaan diferensial ini adalah dengan menggunakan metode Euler. Namun, apabila syarat awal yang digunakan tidak diketahui secara lengkap maka diperlukan metode lain. Misalnya, dapat dimanfaatkan syarat batas yang diberikan sebagai pengganti syarat awal. Dengan menggunakan shooting method, maka dapat ditentukan syarat awalnya melalui metode pencarian akar, seperti bisection. Dengan demikian, untuk menyelesaikan permasalahan gerakan osilasi pegas ini, dibutuhkan metode Euler dan shooting method melalui teknik pencarian akar (root finding)

### Metode Euler 

Dari definisi turunan, diketahui bahwa
```
$\frac{dy(x)}{dx} = \lim_{\Delta x \to 0} \frac{y ( \Delta x + x) - y(x)}{\Delta x}$
```
Dengan demikian, persamaan diferensial dapat ditulis sebagai
```
$y(\Delta x + x) = y(x) + \Delta x f(x,y)$
```
Melalui persamaan ini, y setiap saat dapat ditentukan dengan syarat y dan f(x,y) awal.

### Shooting Method

Shooting method merupakan suatu metode yang dapat digunakan untuk menyelesaikan PDB dengan mengubah suatu permasalahan nilai batas (boundary value problem) dengan mereduksinya menjadi permasalahan nilai awal (initial value problem) yang sama. Shooting method ini digunakan untuk mencari nilai awal (z) yang paling tepat agar syarat-syarat batas dapat terpenuhi. Konsepnya adalah dengan menebak terlebih dahulu nilai awal (z).

Nilai pada batas akhir (g_1 (x_1 ,z)) bergantung oleh nilai awal (z) dan nilainya belum tentu tepat pada nilai batas (y(x_1) = \beta). Fungsi selisih antara nilai pada batas akhir (g_1 (x_1,z)) dan nilai pada batas akhir didefinisikan seperti berikut

```
$\phi(z) = g_1 (x_1 , z ) - \beta$
```

Nilai awal ($z$) yang tepat akan memberikan ($g_1(x)1,z)=\beta$) sehingga didapat $\phi(z)$ mendekati 0. Fungsi $\phi(z)$ dibuat bernilai mendekati nol dengan cara mengupdate nilai ($z$). Proses penggantian nilai awal ini memanfaatkan metode pencarian akar dari fungsi ($z$) secara numerik, seperti metode bisection.

### Bisection 

Metode Bisection atau metode bagi dua pada prinsipnya metode ini adalah mencari nilai rata – rata dari nilai estimasi tebakan awal yang mengapit nilai akar sebenarnya untuk menentukkan nilai akar persamaan yang dimaksud. Pada metode ini diperlukan setidaknya 2 buah nilai tebakan awal dan untuk mendapatkan nilai akar yang sesungguhnya. Untuk mengetahui apakah nilai tebakan kita sudah berada diantara nilai akar yang sesungguhnya dilakukan langkah sebagai berikut : Apabila f(x) real dan kontinu pada interval [a,b] serta f(a) dan f(b) memiliki nilai berlainan tanda atau dengan kata lain: f(a) x f(b) < 0 , maka setidaknya terdapat satu buah akar real pada interval tersebut. Apabila kondisi tersebut telah terpenuhi, untuk mencari nilai taksiran baru x_1 adalah

```
$x_1 = \frac{a + b}{2}$
```

Kemudian langkah selanjutnya, nilai x_1 ini akan digunakan untuk mengganti salah satu nilai atau untuk mempersempit interval taksiran.

Dalam menentukan nilai mana yang akan diganti, perlu diperhatikan kondisi-kondisi berikut :
```
1. Apabila $(a) \cdot f(x_1) < 0$ maka akar berada pada interval bawah $[a,x_1]$, set $b = x_1$ kemudian lanjutkan iterasi perhitungan.
2. Apabila $(a) \cdot f(x_1) > 0$ maka akar berada pada interval atas $[b,x_1]$, set $a = x_1$ kemudian lanjutkan iterasi perhitungan.
3. Apabila $(a) \cdot f(x_1) = 0$ maka akar persamaan adalah $x_1$, hentikan perhitungan.
```
## Hasil

Dilakukan _running_ program dan didapatkan hasil

No | dt (s) | v awal (m/s) 
--- | --- | ---
1 | 0.01 | -2.779
2 | 0.001 | 1.436
3 | 0.0001 | 1.4546

Kecepatan secara analitik : 1.454 m/s

| No | dt (s)     | galat (%) |
| ---- | ---------- | ---------------- |
| 1 | 0.01 |  291.1279 |
| 2 | 0.001 |  1.237964 |
| 3 | 0.0001 |  0.041265 |

## Analisis

Program dimulai dengan terlebih dahulu menebak nilai kecepatan awal $v_0$. Kemudian dari nilai kecepatan awal tersebut, dapat diketahui posisi benda pada saat t=9 sekon, kemudian dibandingkan dengan kondisi awal sebenarnya. Dalam program ini, nilai z dicari dengan menggunakan metode Bisection, yaitu dengan terlebih dahulu menebak sebanyak 2 buah nilai kecepatan awal. Jika di antara dua nilai tersebut tidak terdapat solusi yang menyebabkan selisih nilai x(9) terhadap beta sama dengan nol, maka program akan meminta user untuk menginput nilai selang yang baru. Setelah mendapat selang yang sesuai, iterasi dilakukan program untuk memperoleh solusi nilai $v_0$ yang sesuai. Solusi ini diperoleh dengan menggunakan algoritma euler.

## Referensi

Frankin, J. (2013). _Computational Methods for Physics_. CUP.

Press, et al. (2007). _Numerical Recipes The Art of Scientific Computing_. CUP.

Vesely, F. J. (2001). _Computational Physics An Introduction_. Springer.
