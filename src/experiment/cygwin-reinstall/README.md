# cygwin-reinstall
Reinstall cygwin due to

	line 11: syntax error, unexpected INCLUDE SETUP, expecting $end

while updating cygwin for installing `gnumeric` and `xlsx2csv`.

## Batch file
```batch
::
::	butiran-latex.bat
::	Compile latex at home and campus with different path
::	of portable latex
::	
::	Usage: butiran-latex [n]
::	
::	20190129
::	Start this batch file.
::	20190507
::	Customize for js in src in butiran.
::	20190724
::	Rename to pdflatex.bat.
::  20191017
::  Reuse of butiran (textbook)
::

:: Hide commands
@echo off

:: Verbose usage
if "%1"=="" (
	echo Usage: butiran-latex [n]
	echo n    location 0 campus, 1 home
	goto eof
)

set loc=%1
echo location=%loc%

if "%loc%"=="0" (
	c:\texmfs\install\miktex\bin\pdflatex butiran
	echo.
	echo latex at campus
)

if "%loc%"=="1" (
	i:\texmfs\install\miktex\bin\pdflatex butiran
	echo.
	echo latex at home
)

:: URL https://stackoverflow.com/a/2340018/9475509 [20190129]
for /f %%i in ('date/T') do set dd=%%i
for /f %%i in ('time/T') do set tt=%%i
echo %dd% %tt% 

echo.
echo Use in Chrome fi1101.pdf#page=50^&zoom=120,140,300

:eof
```

## Test $\LaTeX$
Previous batch file is used to compile this file

```latex
% 20181215
% Start this project
% 20181018
% "e:\MikTeX Portable\miktex\bin\pdflatex" butiran
% i:\texmfs\install\miktex\bin\pdflatex butiran
% Use in Chrome butiran.pdf#page=3&zoom=120,140,300
% Download again from https://miktex.org/download for
% portable edition -- not work while updating packages
% It requires proxy and solved through GUI and source of
% installer
% 20190129
% Create butiran-latex.bat for more convenient latexing.
% 20190507
% Start JS introduction for Kakakku
% 20190525
% Start MPSSS project at home
% 20190827 Start fi1101-40 for 2019-1 lecture.

% 20191017
% 1708 Restart butiran (textbook) project

\documentclass[10pt,a4paper,oneside]{book}

\usepackage{array}
\usepackage[dvipsnames]{xcolor}
\usepackage{listings}
\usepackage[hyphenbreaks]{breakurl}
%\usepackage[hyphens]{url}
\usepackage[breaklinks=true,colorlinks=true,urlcolor=blue]
	{hyperref}
\sloppy
\def\UrlBreaks{\do\/\do-}

\definecolor{codegreen}{rgb}{0,0.6,0}
\definecolor{codegray}{rgb}{0.5,0.5,0.5}
\definecolor{codepurple}{rgb}{0.58,0,0.82}
\definecolor{backcolour}{rgb}{0.98,0.98,0.96}

\definecolor{codeblue}{rgb}{0,0,0.8}

 
\lstdefinestyle{granularstyle}{
  backgroundcolor=\color{backcolour},   
  %commentstyle=\color{codegreen},
  keywordstyle=\color{magenta},
  numberstyle=\scriptsize\color{codegray},
  stringstyle=\color{codepurple},
  basicstyle=\small\ttfamily,
	identifierstyle  = \color{black},
  breakatwhitespace=false,         
  breaklines=true,                 
  captionpos=b,                    
  keepspaces=true,                 
  numbers=left,                    
  numbersep=5pt,                  
  showspaces=false,                
  showstringspaces=false,
  showtabs=false,                  
  tabsize=2,
  morekeywords = {var, for, function, return, if, else, using, namespace, case, switch, while, do, class, struct, break, friend},
  morekeywords = [2]{true, false}, % HERE : add remove the parenthesis
  keywordstyle = [2]\color{codeblue},
  morekeywords = [3]{html}, % HERE : add remove the parenthesis
  keywordstyle = [3]\color{codegreen},
  morekeywords = [4]{int, char, double, string, void, const, bool, long, enum},
  keywordstyle = [4]\color{magenta},
  morecomment = [l]{//},
  morecomment = [s]{/*}{*/},
  morecomment = [s]{/**}{*/},
	morecomment = [s]{<!-}{-->},
  commentstyle = \color{gray},
	moredelim = [l][\color{codegreen}]{\#}, % for #include in C++
  morestring = [b]',
  morestring = [b]",
  stringstyle = \color{purple},
	otherkeywords={
		<p>,</p>, <html>,</html>, <head>,</head>, <body>,</body>,
		<title>,</title>, <style>,</style>, <script>,</script>
	},
  keywordstyle = \color{codeblue},
}
\lstset{style=granularstyle}

\usepackage{tikz}

\renewcommand{\contentsname}{Isi}
\renewcommand{\chaptername}{}
\renewcommand{\tablename}{Tabel}
\renewcommand{\figurename}{Gambar}
\renewcommand{\lstlistingname}{Kode}

% 20181221
\usepackage{algorithm}
\usepackage{algpseudocode}
%\renewcommand{\thealgorithm}{Algoritma}
%\makeatletter\renewcommand{\ALG@name}{Algoritma}\makeatother
% 20181222
%\renewcommand\thealgorithm{\thechapter.\arabic{algorithm}} \@addtoreset{algorithm}{chapter} \makeatother
%\makeatletter\renewcommand{\ALG@name}{Algoritma \thechapter.} \@addtoreset{algorithm}{chapter}\makeatother
\renewcommand{\thealgorithm}{\arabic{chapter}.\arabic{algorithm}}

% 201812122
\usepackage[latin1]{inputenc}
\usepackage{tikz}
\usetikzlibrary{shapes,arrows}
\usetikzlibrary{positioning}
% 20181223
\usetikzlibrary{plotmarks}
\usepackage{pgfplots}
%\usepackage{pgfplotstable}
\usepackage{pgfplotstable,filecontents} % 20190108

% url http://www.texample.net/tikz/examples/simple-flow-chart/ [20181222]
% Define block styles
\tikzstyle{decision} = [diamond, draw, fill=yellow!20, text width=3.5em, text badly centered, inner sep=0pt]
\tikzstyle{block} = [rectangle, draw, fill=blue!20, text width=5em, text centered, rounded corners, minimum height=2em]
\tikzstyle{line} = [draw, -latex']
\tikzstyle{cloud} = [draw, ellipse, minimum height=2em]

\tikzstyle{point} = [draw, circle, minimum size=5pt, inner sep=0pt, outer sep=0pt]

% 20181229
\usepackage{multirow}

% 20181224
\usepackage{amssymb}

% 20181215 -- not work
\makeatletter

\def\@listi{%
	% default setting for base LaTeX classes at 10 pt:
	\parsep 4pt plus 2pt minus 1pt
	\topsep 8pt plus 2pt minus 4pt
	\itemsep 4pt plus 2pt minus 1pt
	% your setting
	\parskip 1em plus 1pt minus 1pt
}

\makeatother
% -----

\usepackage{verbatim}

% 20190106 --> \substack{ \\ }
\usepackage{amsmath}
\renewcommand{\algorithmicrequire}{\textbf{Input:}}
\renewcommand{\algorithmicensure}{\textbf{Output:}}

\setlength{\parindent}{0pt}
\setlength{\parskip}{0.5em}

% 20190109
\DeclareMathOperator{\atan}{atan}

% 20190130
% https://tex.stackexchange.com/a/222411
\usepackage{enumerate}
% https://tex.stackexchange.com/a/33798
\algnewcommand{\algorithmicgoto}{\textbf{go to}}%
\algnewcommand{\Goto}[1]{\algorithmicgoto~\ref{#1}}%

% 20190203 -- https://tex.stackexchange.com/a/118217
%\usepackage{mathtools}
%\DeclarePairedDelimiter\ceil{\lceil}{\rceil}
%\DeclarePairedDelimiter\floor{\lfloor}{\rfloor}
% cancel it's not scaled

% 20190217 -- https://tex.stackexchange.com/a/400752/180784
\setlength{\fboxsep}{2pt}

\title{butiran \\ \ \\ {\normalsize \url{https://osf.io/kzs4f/} } }
\author{Sparisoma Viridi}
\date{2019}

% 20190721 -- https://tex.stackexchange.com/a/417698/180784
\def\tmp#1 #2\relax{#1}
\setbox0=\hbox{$\xdef\intfont{%
    \expandafter\tmp\fontname\textfont3\expandafter\space\space\relax}$}
\font\tmp=\intfont\space at10pt\relax
\setbox0=\hbox{$\textfont3=\tmp \displaystyle \int$}
\dimen0=\ht0 \advance\dimen0 by\dp0 \divide\dimen0 by10 
\xdef\intsize{\the\dimen0}

\def\dividedimen (#1/#2){\expandafter\ignorept\the
   \dimexpr\numexpr\number\dimexpr#1\relax
   *65536/\number\dimexpr#2\relax\relax sp\relax
}
{\lccode`\?=`\p \lccode`\!=`\t  \lowercase{\gdef\ignorept#1?!{#1}}}

\def\flexibleint{\def\fxintL{}\def\fxintU{}\futurelet\next\fxintA}
\def\fxintA{\ifx\next_\expandafter\fxintB\else\expandafter\fxintC\fi}
\def\fxintB_#1{\def\fxintL{#1}\fxintC}
\def\fxintC{\futurelet\next\fxintD}
\def\fxintD{\ifx\next^\expandafter\fxintE\else\expandafter\fxintF\fi}
\def\fxintE^#1{\def\fxintU{#1}\fxintF}
\def\fxintF#1{\begingroup
   \setbox0=\hbox{$\displaystyle{#1}$}%
   \dimen0=\ht0 \advance\dimen0 by\dp0
   \setbox1=\hbox{$\vcenter{\copy0}$}%
   \font\tmp=\intfont\space at\dividedimen(\dimen0/\intsize)pt
   \lower\dimexpr\dp0-\dp1\hbox{%
      $\textfont3=\tmp \displaystyle\int_{\fxintL}^{\fxintU}$}
   \box0
   \endgroup
}


\begin{document}

%\maketitle % 20191017 beg, end

\tableofcontents

\frontmatter

\mainmatter

%\include{01/intro}    % 20191017 beg
%\include{02/vector}   % 20191017 beg
%\include{03/projects} % 20191211 beg

\appendix

\backmatter

\end{document}

% References
% 5. LaTeX arrows -- 20190224
% url http://www.sascha-frank.com/Arrow/latex-arrows.html

% 1. tikzpicture file columns -- 20190217
% url https://tex.stackexchange.com/a/30383/180784
% 2. plot every nth point only -- 20190217
% url https://tex.stackexchange.com/a/47800/180784
% 3. Line type -- 20190217
% url https://tex.stackexchange.com/a/327983/180784
% 4. Legend position -- 20190217
% url https://tex.stackexchange.com/a/295571/180784
```

and this file

```latex
% 20190826
% It will be increased by 1 after \chapter
\setcounter{chapter}{0}
% Set this page number
\setcounter{page}{1}


\chapter{Pendahuluan}
Secara umum banyak sistem fisis yang dapat dimodelkan dengan menggunakan butiran-butiran yang saling berinteraksi baik secara permanen (rentang jauh) ataupun hanya sesekali (rentang dekat). Tulisan ini akan membahas hal tersebut yang dilengkapi dengan contoh implementasinya menggunakan pustaka \verb|butiran.js|\footnote{url \url{https://github.com/dudung/butiran.js} [20191017]} yang ditulis dalam bahasa pemrograman JavaScript (JS).


%
\section{Berkas-berkas utama}
Terdapat beberapa berkas yang diperlukan untuk menjalankan pustaka \verb|butiran.js|, yaitu berkas HTML dan JS yang dalam contoh ini bernama \verb|hello.html| dan \verb|hello.js|, serta versi terkompresi dari pustaka tersebut dengan nama berkas \verb|butiran.min.js| yang dapat diperoleh dari folder \verb|dist|.

\lstinputlisting[label={lst:hello.html}, caption={Berkas {\tt hello.html}.}, linerange={1}, firstnumber=1]{01/hello.html}

Kode \ref{lst:hello.html} memerlukan dua berkas yaitu versi terkompresi dari pustaka \verb|butiran.js| dan berkas \verb|hello.js|.

\lstinputlisting[label={lst:hello.js}, caption={Berkas {\tt hello.js}.}, linerange={1}, firstnumber=1]{01/hello.js}

Isi dari berkas \verb|hello.js| diberikan dalam Kode \ref{lst:hello.js}. Beris 18 akan menuliskan frasa "Hello world!" pada konsol perambat internet, e.g. Google Chrome, baris 19 mendefinisikan suatu besaran berjenis \verb|Vect3| dan baris 20 menuliskan isinya. Kelas \verb|Vect3| merupakan bagian dari pustaka \verb|butiran.js| yang bila tidak ada pesan kesalahan menunjukkan bahwa pustaka ini telah sukses disertakan.

\begin{figure}[H]
\centering
\includegraphics[width=10cm]{01/hello.png}
\caption{\label{fig:hello} Tampilan berkas {\tt hello.html} dalam peramban internet Google Chrome.}
\end{figure}

Untuk melihat konsol pada Google Chrome digunakan kombinasi tombol CTRL + SHIFT + J, yang berbeda-beda untuk setiap peramban internet.\footnote{"How to open the developer console", Airtable, url \url{https://support.airtable.com/hc/en-us/articles/232313848-How-to-open-the-developer-console} [20191017].} Dalam Gambar \ref{fig:hello} pada bagian kanan tercantum baris keberapa pada berkas \verb|hello.js| yang menghasilkan keluaran tersebut. Dengan menggunakan informasi ini pengguna dapat melacak hasil keluaran yang diperoleh.

Untuk berikutnya terkait dengan konsol bila tidak benar-benar diperlukan tampilan dalam peramban internet tidak akan ditayangkan, melainkan cukup hanya bagian teksnya tersebut

\begin{lstlisting}[numbers=none]
Hello, world!                                  hello.js:18
a = (0, 0, 0)                                  hello.js:20
\end{lstlisting}

yang ditampilkan.

%
\section{Catatan}
Rujukan, terutama yang yang bersumber dari internet, akan disertakan sebagai catatan kaki.
```

as an example of first chapter. Following messages

```
L:\home\butiran>pdflatex
Usage: butiran-latex [n]
n    location 0 campus, 1 home

L:\home\butiran>pdflatex 1
location=1
This is pdfTeX, Version 3.14159265-2.6-1.40.19 (MiKTeX 2.9.6730)
entering extended mode
(butiran.tex
LaTeX2e <2018-04-01> patch level 5
(i:\texmfs\install\tex\latex\base\book.cls
Document Class: book 2014/09/29 v1.4h Standard LaTeX document class
(i:\texmfs\install\tex\latex\base\bk10.clo))
(i:\texmfs\install\tex\latex\tools\array.sty)
(i:\texmfs\install\tex\latex\xcolor\xcolor.sty
(i:\texmfs\install\tex\latex\graphics-cfg\color.cfg)
(i:\texmfs\install\tex\latex\graphics-def\pdftex.def)
(i:\texmfs\install\tex\latex\graphics\dvipsnam.def))
(i:\texmfs\install\tex\latex\listings\listings.sty
(i:\texmfs\install\tex\latex\graphics\keyval.sty)
(i:\texmfs\install\tex\latex\listings\lstmisc.sty)
(i:\texmfs\install\tex\latex\listings\listings.cfg))
(i:\texmfs\install\tex\latex\breakurl\breakurl.sty
(i:\texmfs\install\tex\latex\xkeyval\xkeyval.sty
(i:\texmfs\install\tex\generic\xkeyval\xkeyval.tex
(i:\texmfs\install\tex\generic\xkeyval\xkvutils.tex)))
(i:\texmfs\install\tex\generic\oberdiek\ifpdf.sty)

Package breakurl Warning: You are using breakurl while processing via pdflatex.

(breakurl)                \burl will be just a synonym of \url.
(breakurl)                 on input line 48.

) (i:\texmfs\install\tex\latex\hyperref\hyperref.sty
(i:\texmfs\install\tex\generic\oberdiek\hobsub-hyperref.sty
(i:\texmfs\install\tex\generic\oberdiek\hobsub-generic.sty))
(i:\texmfs\install\tex\generic\ifxetex\ifxetex.sty)
(i:\texmfs\install\tex\latex\oberdiek\auxhook.sty)
(i:\texmfs\install\tex\latex\oberdiek\kvoptions.sty)
(i:\texmfs\install\tex\latex\hyperref\pd1enc.def)
(i:\texmfs\install\tex\latex\00miktex\hyperref.cfg)
(i:\texmfs\install\tex\latex\url\url.sty))
(i:\texmfs\install\tex\latex\hyperref\hpdftex.def
(i:\texmfs\install\tex\latex\oberdiek\rerunfilecheck.sty))
(i:\texmfs\install\tex\latex\pgf\frontendlayer\tikz.sty
(i:\texmfs\install\tex\latex\pgf\basiclayer\pgf.sty
(i:\texmfs\install\tex\latex\pgf\utilities\pgfrcs.sty
(i:\texmfs\install\tex\generic\pgf\utilities\pgfutil-common.tex
(i:\texmfs\install\tex\generic\pgf\utilities\pgfutil-common-lists.tex))
(i:\texmfs\install\tex\generic\pgf\utilities\pgfutil-latex.def
(i:\texmfs\install\tex\latex\ms\everyshi.sty))
(i:\texmfs\install\tex\generic\pgf\utilities\pgfrcs.code.tex))
(i:\texmfs\install\tex\latex\pgf\basiclayer\pgfcore.sty
(i:\texmfs\install\tex\latex\graphics\graphicx.sty
(i:\texmfs\install\tex\latex\graphics\graphics.sty
(i:\texmfs\install\tex\latex\graphics\trig.sty)
(i:\texmfs\install\tex\latex\graphics-cfg\graphics.cfg)))
(i:\texmfs\install\tex\latex\pgf\systemlayer\pgfsys.sty
(i:\texmfs\install\tex\generic\pgf\systemlayer\pgfsys.code.tex
(i:\texmfs\install\tex\generic\pgf\utilities\pgfkeys.code.tex
(i:\texmfs\install\tex\generic\pgf\utilities\pgfkeysfiltered.code.tex))
(i:\texmfs\install\tex\generic\pgf\systemlayer\pgf.cfg)
(i:\texmfs\install\tex\generic\pgf\systemlayer\pgfsys-pdftex.def
(i:\texmfs\install\tex\generic\pgf\systemlayer\pgfsys-common-pdf.def)))
(i:\texmfs\install\tex\generic\pgf\systemlayer\pgfsyssoftpath.code.tex)
(i:\texmfs\install\tex\generic\pgf\systemlayer\pgfsysprotocol.code.tex))
(i:\texmfs\install\tex\generic\pgf\basiclayer\pgfcore.code.tex
(i:\texmfs\install\tex\generic\pgf\math\pgfmath.code.tex
(i:\texmfs\install\tex\generic\pgf\math\pgfmathcalc.code.tex
(i:\texmfs\install\tex\generic\pgf\math\pgfmathutil.code.tex)
(i:\texmfs\install\tex\generic\pgf\math\pgfmathparser.code.tex)
(i:\texmfs\install\tex\generic\pgf\math\pgfmathfunctions.code.tex
(i:\texmfs\install\tex\generic\pgf\math\pgfmathfunctions.basic.code.tex)
(i:\texmfs\install\tex\generic\pgf\math\pgfmathfunctions.trigonometric.code.tex
) (i:\texmfs\install\tex\generic\pgf\math\pgfmathfunctions.random.code.tex)
(i:\texmfs\install\tex\generic\pgf\math\pgfmathfunctions.comparison.code.tex)
(i:\texmfs\install\tex\generic\pgf\math\pgfmathfunctions.base.code.tex)
(i:\texmfs\install\tex\generic\pgf\math\pgfmathfunctions.round.code.tex)
(i:\texmfs\install\tex\generic\pgf\math\pgfmathfunctions.misc.code.tex)
(i:\texmfs\install\tex\generic\pgf\math\pgfmathfunctions.integerarithmetics.cod
e.tex))) (i:\texmfs\install\tex\generic\pgf\math\pgfmathfloat.code.tex))
(i:\texmfs\install\tex\generic\pgf\basiclayer\pgfcorepoints.code.tex)
(i:\texmfs\install\tex\generic\pgf\basiclayer\pgfcorepathconstruct.code.tex)
(i:\texmfs\install\tex\generic\pgf\basiclayer\pgfcorepathusage.code.tex)
(i:\texmfs\install\tex\generic\pgf\basiclayer\pgfcorescopes.code.tex)
(i:\texmfs\install\tex\generic\pgf\basiclayer\pgfcoregraphicstate.code.tex)
(i:\texmfs\install\tex\generic\pgf\basiclayer\pgfcoretransformations.code.tex)
(i:\texmfs\install\tex\generic\pgf\basiclayer\pgfcorequick.code.tex)
(i:\texmfs\install\tex\generic\pgf\basiclayer\pgfcoreobjects.code.tex)
(i:\texmfs\install\tex\generic\pgf\basiclayer\pgfcorepathprocessing.code.tex)
(i:\texmfs\install\tex\generic\pgf\basiclayer\pgfcorearrows.code.tex)
(i:\texmfs\install\tex\generic\pgf\basiclayer\pgfcoreshade.code.tex)
(i:\texmfs\install\tex\generic\pgf\basiclayer\pgfcoreimage.code.tex
(i:\texmfs\install\tex\generic\pgf\basiclayer\pgfcoreexternal.code.tex))
(i:\texmfs\install\tex\generic\pgf\basiclayer\pgfcorelayers.code.tex)
(i:\texmfs\install\tex\generic\pgf\basiclayer\pgfcoretransparency.code.tex)
(i:\texmfs\install\tex\generic\pgf\basiclayer\pgfcorepatterns.code.tex)))
(i:\texmfs\install\tex\generic\pgf\modules\pgfmoduleshapes.code.tex)
(i:\texmfs\install\tex\generic\pgf\modules\pgfmoduleplot.code.tex)
(i:\texmfs\install\tex\latex\pgf\compatibility\pgfcomp-version-0-65.sty)
(i:\texmfs\install\tex\latex\pgf\compatibility\pgfcomp-version-1-18.sty))
(i:\texmfs\install\tex\latex\pgf\utilities\pgffor.sty
(i:\texmfs\install\tex\latex\pgf\utilities\pgfkeys.sty
(i:\texmfs\install\tex\generic\pgf\utilities\pgfkeys.code.tex))
(i:\texmfs\install\tex\latex\pgf\math\pgfmath.sty
(i:\texmfs\install\tex\generic\pgf\math\pgfmath.code.tex))
(i:\texmfs\install\tex\generic\pgf\utilities\pgffor.code.tex
(i:\texmfs\install\tex\generic\pgf\math\pgfmath.code.tex)))
(i:\texmfs\install\tex\generic\pgf\frontendlayer\tikz\tikz.code.tex
(i:\texmfs\install\tex\generic\pgf\libraries\pgflibraryplothandlers.code.tex)
(i:\texmfs\install\tex\generic\pgf\modules\pgfmodulematrix.code.tex)
(i:\texmfs\install\tex\generic\pgf\frontendlayer\tikz\libraries\tikzlibrarytopa
ths.code.tex))) (i:\texmfs\install\tex\latex\algorithms\algorithm.sty
(i:\texmfs\install\tex\latex\float\float.sty)
(i:\texmfs\install\tex\latex\base\ifthen.sty))
(i:\texmfs\install\tex\latex\algorithmicx\algpseudocode.sty
(i:\texmfs\install\tex\latex\algorithmicx\algorithmicx.sty
Document Style algorithmicx 1.2 - a greatly improved `algorithmic' style
)
Document Style - pseudocode environments for use with the `algorithmicx' style
) (i:\texmfs\install\tex\latex\base\inputenc.sty
(i:\texmfs\install\tex\latex\base\latin1.def))
(i:\texmfs\install\tex\generic\pgf\frontendlayer\tikz\libraries\tikzlibraryshap
es.code.tex
(i:\texmfs\install\tex\generic\pgf\frontendlayer\tikz\libraries\tikzlibraryshap
es.geometric.code.tex
(i:\texmfs\install\tex\generic\pgf\libraries\shapes\pgflibraryshapes.geometric.
code.tex))
(i:\texmfs\install\tex\generic\pgf\frontendlayer\tikz\libraries\tikzlibraryshap
es.misc.code.tex
(i:\texmfs\install\tex\generic\pgf\libraries\shapes\pgflibraryshapes.misc.code.
tex))
(i:\texmfs\install\tex\generic\pgf\frontendlayer\tikz\libraries\tikzlibraryshap
es.symbols.code.tex
(i:\texmfs\install\tex\generic\pgf\libraries\shapes\pgflibraryshapes.symbols.co
de.tex))
(i:\texmfs\install\tex\generic\pgf\frontendlayer\tikz\libraries\tikzlibraryshap
es.arrows.code.tex
(i:\texmfs\install\tex\generic\pgf\libraries\shapes\pgflibraryshapes.arrows.cod
e.tex))
(i:\texmfs\install\tex\generic\pgf\frontendlayer\tikz\libraries\tikzlibraryshap
es.callouts.code.tex
(i:\texmfs\install\tex\generic\pgf\libraries\shapes\pgflibraryshapes.callouts.c
ode.tex))
(i:\texmfs\install\tex\generic\pgf\frontendlayer\tikz\libraries\tikzlibraryshap
es.multipart.code.tex
(i:\texmfs\install\tex\generic\pgf\libraries\shapes\pgflibraryshapes.multipart.
code.tex)))
(i:\texmfs\install\tex\generic\pgf\frontendlayer\tikz\libraries\tikzlibraryarro
ws.code.tex
(i:\texmfs\install\tex\generic\pgf\libraries\pgflibraryarrows.code.tex))
(i:\texmfs\install\tex\generic\pgf\frontendlayer\tikz\libraries\tikzlibraryposi
tioning.code.tex)
(i:\texmfs\install\tex\generic\pgf\frontendlayer\tikz\libraries\tikzlibraryplot
marks.code.tex
(i:\texmfs\install\tex\generic\pgf\libraries\pgflibraryplotmarks.code.tex))
(i:\texmfs\install\tex\latex\pgfplots\pgfplots.sty
(i:\texmfs\install\tex\generic\pgfplots\pgfplots.revision.tex)
(i:\texmfs\install\tex\generic\pgfplots\pgfplots.code.tex
(i:\texmfs\install\tex\generic\pgfplots\pgfplotscore.code.tex
(i:\texmfs\install\tex\generic\pgfplots\sys\pgfplotssysgeneric.code.tex))
(i:\texmfs\install\tex\generic\pgfplots\libs\pgfplotslibrary.code.tex)
(i:\texmfs\install\tex\generic\pgfplots\oldpgfcompatib\pgfplotsoldpgfsupp_loade
r.code.tex (i:\texmfs\install\tex\generic\pgf\libraries\pgflibraryfpu.code.tex)
Package pgfplots: loading complementary arithmetics for your pgf version...

(i:\texmfs\install\tex\generic\pgfplots\oldpgfcompatib\pgfplotsoldpgfsupp_pgfli
braryfpu.code.tex)
(i:\texmfs\install\tex\generic\pgfplots\oldpgfcompatib\pgfplotsoldpgfsupp_pgfma
thfloat.code.tex)
(i:\texmfs\install\tex\generic\pgfplots\oldpgfcompatib\pgfplotsoldpgfsupp_leq.c
ode.tex)) (i:\texmfs\install\tex\generic\pgfplots\util\pgfplotsutil.code.tex
(i:\texmfs\install\tex\generic\pgfplots\liststructure\pgfplotsliststructure.cod
e.tex)
(i:\texmfs\install\tex\generic\pgfplots\liststructure\pgfplotsliststructureext.
code.tex)
(i:\texmfs\install\tex\generic\pgfplots\liststructure\pgfplotsarray.code.tex)
(i:\texmfs\install\tex\generic\pgfplots\liststructure\pgfplotsmatrix.code.tex)
(i:\texmfs\install\tex\generic\pgfplots\numtable\pgfplotstableshared.code.tex)
(i:\texmfs\install\tex\generic\pgfplots\liststructure\pgfplotsdeque.code.tex)
(i:\texmfs\install\tex\generic\pgfplots\util\pgfplotsbinary.code.tex
(i:\texmfs\install\tex\generic\pgfplots\util\pgfplotsbinary.data.code.tex))
(i:\texmfs\install\tex\generic\pgfplots\util\pgfplotsutil.verb.code.tex)
(i:\texmfs\install\tex\generic\pgfplots\libs\pgflibrarypgfplots.surfshading.cod
e.tex
(i:\texmfs\install\tex\generic\pgfplots\sys\pgflibrarypgfplots.surfshading.pgfs
ys-pdftex.def)))
(i:\texmfs\install\tex\generic\pgfplots\util\pgfplotscolormap.code.tex
(i:\texmfs\install\tex\generic\pgfplots\util\pgfplotscolor.code.tex))
(i:\texmfs\install\tex\generic\pgfplots\pgfplotsstackedplots.code.tex)
(i:\texmfs\install\tex\generic\pgfplots\pgfplotsplothandlers.code.tex
(i:\texmfs\install\tex\generic\pgfplots\pgfplotsmeshplothandler.code.tex
(i:\texmfs\install\tex\generic\pgfplots\pgfplotsmeshplotimage.code.tex)))
(i:\texmfs\install\tex\generic\pgfplots\pgfplots.scaling.code.tex)
(i:\texmfs\install\tex\generic\pgfplots\pgfplotscoordprocessing.code.tex)
(i:\texmfs\install\tex\generic\pgfplots\pgfplots.errorbars.code.tex)
(i:\texmfs\install\tex\generic\pgfplots\pgfplots.markers.code.tex)
(i:\texmfs\install\tex\generic\pgfplots\pgfplotsticks.code.tex)
(i:\texmfs\install\tex\generic\pgfplots\pgfplots.paths.code.tex)
(i:\texmfs\install\tex\generic\pgf\frontendlayer\tikz\libraries\tikzlibrarydeco
rations.code.tex
(i:\texmfs\install\tex\generic\pgf\modules\pgfmoduledecorations.code.tex))
(i:\texmfs\install\tex\generic\pgf\frontendlayer\tikz\libraries\tikzlibrarydeco
rations.pathmorphing.code.tex
(i:\texmfs\install\tex\generic\pgf\libraries\decorations\pgflibrarydecorations.
pathmorphing.code.tex))
(i:\texmfs\install\tex\generic\pgf\frontendlayer\tikz\libraries\tikzlibrarydeco
rations.pathreplacing.code.tex
(i:\texmfs\install\tex\generic\pgf\libraries\decorations\pgflibrarydecorations.
pathreplacing.code.tex))))
(i:\texmfs\install\tex\latex\pgfplots\pgfplotstable.sty
(i:\texmfs\install\tex\generic\pgfplots\pgfplots.revision.tex)
(i:\texmfs\install\tex\generic\pgfplots\numtable\pgfplotstable.code.tex
(i:\texmfs\install\tex\generic\pgfplots\numtable\pgfplotstable.coltype.code.tex
))) (i:\texmfs\install\tex\latex\filecontents\filecontents.sty)
(i:\texmfs\install\tex\latex\multirow\multirow.sty)
(i:\texmfs\install\tex\latex\amsfonts\amssymb.sty
(i:\texmfs\install\tex\latex\amsfonts\amsfonts.sty))
(i:\texmfs\install\tex\latex\tools\verbatim.sty)
(i:\texmfs\install\tex\latex\amsmath\amsmath.sty
For additional information on amsmath, use the `?' option.
(i:\texmfs\install\tex\latex\amsmath\amstext.sty
(i:\texmfs\install\tex\latex\amsmath\amsgen.sty))
(i:\texmfs\install\tex\latex\amsmath\amsbsy.sty)
(i:\texmfs\install\tex\latex\amsmath\amsopn.sty))
(i:\texmfs\install\tex\latex\tools\enumerate.sty)
(i:\texmfs\install\tex\latex\amsfonts\umsa.fd)
(i:\texmfs\install\tex\latex\amsfonts\umsb.fd) (butiran.aux)
(i:\texmfs\install\tex\context\base\supp-pdf.mkii
[Loading MPS to PDF converter (version 2006.09.02).]
) (i:\texmfs\install\tex\latex\oberdiek\epstopdf-base.sty
(i:\texmfs\install\tex\latex\oberdiek\grfext.sty))
(i:\texmfs\install\tex\latex\hyperref\nameref.sty
(i:\texmfs\install\tex\generic\oberdiek\gettitlestring.sty)) (butiran.out)
(butiran.out) ABD: EveryShipout initializing macros

Package pgfplots Warning: running in backwards compatibility mode (unsuitable t
ick labels; missing features). Consider writing \pgfplotsset{compat=1.16} into
your preamble.
 on input line 209.

(butiran.toc) [1{i:/texmfs/data/pdftex/config/pdftex.map}] (butiran.aux) )<i:/t
exmfs/install/fonts/type1/public/amsfonts/cm/cmbx12.pfb><i:/texmfs/install/font
s/type1/public/amsfonts/cm/cmr10.pfb>
Output written on butiran.pdf (1 page, 17347 bytes).
Transcript written on butiran.log.

latex at home
2020-06-02 03:51

Use in Chrome fi1101.pdf#page=50&zoom=120,140,300
```

are produced during compilation.

## Cygwin packages
```text
Uninstall ImageMagick 6.9.10.11-1 (automatically added)
Uninstall binutils 2.29-1 (automatically added)
Uninstall ca-certificates 2.32-1 (automatically added)
Uninstall cygwin 3.0.7-1 (automatically added)
Uninstall cygwin-devel 3.0.7-1 (automatically added)
Uninstall ed 1.15-1 (automatically added)
Uninstall gawk 5.0.1-1 (automatically added)
Uninstall gcc-core 7.4.0-1 (automatically added)
Uninstall gcc-fortran 7.4.0-1 (automatically added)
Uninstall gcc-g++ 7.4.0-1 (automatically added)
Uninstall ghostscript 9.27-1 (automatically added)
Uninstall gnuplot 5.2.7-1 (automatically added)
Uninstall info 6.6-1 (automatically added)
Uninstall less 530-1 (automatically added)
Uninstall libMagickC++6_8 6.9.10.11-1 (automatically added)
Uninstall libMagickCore6_6 6.9.10.11-1 (automatically added)
Uninstall libMagickWand6_6 6.9.10.11-1 (automatically added)
Uninstall libX11_6 1.6.8-1 (automatically added)
Uninstall libXpm4 3.5.12-1 (automatically added)
Uninstall libXrender1 0.9.9-1 (automatically added)
Uninstall libatomic1 7.4.0-1 (automatically added)
Uninstall libblkid1 2.33.1-1 (automatically added)
Uninstall libfdisk1 2.33.1-1 (automatically added)
Uninstall libfreetype6 2.9.1-1 (automatically added)
Uninstall libgcc1 7.4.0-1 (automatically added)
Uninstall libgd3 2.2.5-2 (automatically added)
Uninstall libgmp10 6.1.2-1 (automatically added)
Uninstall libgomp1 7.4.0-1 (automatically added)
Uninstall libgraphite2_3 1.3.10-1 (automatically added)
Uninstall libgs9 9.27-1 (automatically added)
Uninstall libharfbuzz-icu0 2.5.3-1 (automatically added)
Uninstall libharfbuzz0 2.5.3-1 (automatically added)
Uninstall libkpathsea6 20190509-1 (automatically added)
Uninstall liblapack0 3.8.0-1 (automatically added)
Uninstall libmpfr6 4.0.2-1 (automatically added)
Uninstall libopenldap2_4_2 2.4.48-1 (automatically added)
Uninstall libopenssl100 1.0.2t-1
Uninstall libp11-kit0 0.23.15-1 (automatically added)
Uninstall libpaper-common 1.1.24-2 (automatically added)
Uninstall libpaper1 1.1.24-2 (automatically added)
Uninstall libpcre1 8.43-1 (automatically added)
Uninstall libpkgconf3 1.6.0-1 (automatically added)
Uninstall libptexenc1 20190509-1 (automatically added)
Uninstall libquadmath0 7.4.0-1 (automatically added)
Uninstall libsasl2_3 2.1.26-11 (automatically added)
Uninstall libsmartcols1 2.33.1-1 (automatically added)
Uninstall libsqlite3_0 3.28.0-1 (automatically added)
Uninstall libssl1.1 1.1.1d-1 (automatically added)
Uninstall libstdc++6 7.4.0-1 (automatically added)
Uninstall libsynctex2 20190509-1 (automatically added)
Uninstall libteckit0 2.5.9-1 (automatically added)
Uninstall libtexlua53_5 20190509-1 (automatically added)
Uninstall libtexluajit2 20190509-1 (automatically added)
Uninstall libuuid-devel 2.33.1-1 (automatically added)
Uninstall libuuid1 2.33.1-1 (automatically added)
Uninstall libxcb-render0 1.13-1 (automatically added)
Uninstall libxcb-shm0 1.13-1 (automatically added)
Uninstall libxcb1 1.13-1 (automatically added)
Uninstall libzzip0.13 0.13.68-1 (automatically added)
Uninstall mintty 3.0.2-1 (automatically added)
Uninstall openssl 1.1.1d-1 (automatically added)
Uninstall p11-kit 0.23.15-1 (automatically added)
Uninstall p11-kit-trust 0.23.15-1 (automatically added)
Uninstall perl 5.26.3-2 (automatically added)
Uninstall perl-Digest-SHA 6.02-1 (automatically added)
Uninstall perl-Encode-Locale 1.05-2 (automatically added)
Uninstall perl-File-Listing 6.04-6 (automatically added)
Uninstall perl-File-Which 1.21-1 (automatically added)
Uninstall perl-HTML-Parser 3.72-2 (automatically added)
Uninstall perl-HTML-Tagset 3.20-6 (automatically added)
Uninstall perl-HTTP-Cookies 6.04-2 (automatically added)
Uninstall perl-HTTP-Daemon 6.06-1 (automatically added)
Uninstall perl-HTTP-Date 6.02-6 (automatically added)
Uninstall perl-HTTP-Message 6.18-1 (automatically added)
Uninstall perl-HTTP-Negotiate 6.01-6 (automatically added)
Uninstall perl-IO-HTML 1.001-3 (automatically added)
Uninstall perl-IO-String 1.08-6 (automatically added)
Uninstall perl-LWP-MediaTypes 6.04-1 (automatically added)
Uninstall perl-Net-HTTP 6.19-1 (automatically added)
Uninstall perl-Socket 2.029-1 (automatically added)
Uninstall perl-Tk 804.034-1 (automatically added)
Uninstall perl-Try-Tiny 0.30-1 (automatically added)
Uninstall perl-URI 1.76-1 (automatically added)
Uninstall perl-WWW-RobotRules 6.02-6 (automatically added)
Uninstall perl-XML-Parser 2.44-3 (automatically added)
Uninstall perl-libwww-perl 6.39-1 (automatically added)
Uninstall perl_autorebase 5.26.3-2 (automatically added)
Uninstall perl_base 5.26.3-2 (automatically added)
Uninstall pkg-config 1.6.0-1 (automatically added)
Uninstall pkgconf 1.6.0-1 (automatically added)
Uninstall poppler-data 0.4.8-1 (automatically added)
Uninstall preview-latex 11.91-1 (automatically added)
Uninstall publicsuffix-list-dafsa 20190717-1 (automatically added)
Uninstall texlive 20190509-1 (automatically added)
Uninstall texlive-collection-basic 20190509-1 (automatically added)
Uninstall texlive-collection-latex 20170520-2 (automatically added)
Uninstall texlive-collection-latexextra 20170520-1 (automatically added)
Uninstall texlive-collection-latexrecommended 20170520-1 (automatically added)
Uninstall texlive-collection-pictures 20170520-1 (automatically added)
Uninstall tzdata 2019c-1 (automatically added)
Uninstall util-linux 2.33.1-1 (automatically added)
Uninstall vim-minimal 8.1.1772-1 (automatically added)
Uninstall w32api-headers 5.0.4-1 (automatically added)
Uninstall w32api-runtime 5.0.4-1 (automatically added)
Install ImageMagick 6.9.10.11-2
Install adwaita-icon-theme 3.26.1-1 (automatically added)
Install at-spi2-core 2.26.2-1 (automatically added)
Install binutils 2.34+1git.de9c1b7cfe-1
Install ca-certificates 2.40-1
Install cygwin 3.1.5-1
Install cygwin-devel 3.1.5-1
Install dconf-service 0.26.1-1 (automatically added)
Install dri-drivers 19.1.6-1 (automatically added)
Install ed 1.16-1
Install gawk 5.1.0-1
Install gcc-core 9.3.0-2
Install gcc-fortran 9.3.0-2
Install gcc-g++ 9.3.0-2
Install gdk-pixbuf2.0-svg 2.40.20-1 (automatically added)
Install ghostscript 9.52-1
Install glib2.0-networking 2.54.1-1 (automatically added)
Install gnumeric 1.12.38-1
Install gnuplot 5.2.8-1
Install gtk-update-icon-cache 3.22.28-1 (automatically added)
Install hicolor-icon-theme 0.15-1 (automatically added)
Install info 6.7-1
Install less 551-1
Install libGL1 19.1.6-1 (automatically added)
Install libMagickC++6_8 6.9.10.11-2
Install libMagickCore6_6 6.9.10.11-2
Install libMagickWand6_6 6.9.10.11-2
Install libX11-xcb1 1.6.9-1 (automatically added)
Install libX11_6 1.6.9-1
Install libXcomposite1 0.4.5-1 (automatically added)
Install libXcursor1 1.2.0-1 (automatically added)
Install libXdamage1 1.1.5-1 (automatically added)
Install libXfixes3 5.0.3-1 (automatically added)
Install libXinerama1 1.1.4-1 (automatically added)
Install libXpm4 3.5.13-1
Install libXrandr2 1.5.2-1 (automatically added)
Install libXrender1 0.9.10-1
Install libXtst6 1.2.3-1 (automatically added)
Install libatk-bridge2.0_0 2.26.1-1 (automatically added)
Install libatk1.0_0 2.26.1-1 (automatically added)
Install libatomic1 9.3.0-2
Install libatspi0 2.26.2-1 (automatically added)
Install libblkid1 2.33.1-2
Install libdbus1_3 1.10.22-1 (automatically added)
Install libedit0 20130712-1 (automatically added)
Install libepoxy0 1.4.3-1 (automatically added)
Install libfdisk1 2.33.1-2
Install libfpx1 1.3.1.4-1
Install libfreetype6 2.10.2-1
Install libfribidi0 0.19.7-1
Install libgcc1 9.3.0-2
Install libgcrypt20 1.8.2-1 (automatically added)
Install libgd3 2.3.0-1
Install libgfortran5 9.3.0-2
Install libglapi0 19.1.6-1 (automatically added)
Install libgmp10 6.2.0-2
Install libgoffice0.10_10 0.10.38-1 (automatically added)
Install libgomp1 9.3.0-2
Install libgpg-error0 1.37-1 (automatically added)
Install libgraphite2_3 1.3.14-1
Install libgs9 9.52-1
Install libgsf-common 1.14.42-1 (automatically added)
Install libgsf1_114 1.14.42-1 (automatically added)
Install libgtk3_0 3.22.28-1 (automatically added)
Install libharfbuzz-icu0 2.6.6-1
Install libharfbuzz0 2.6.6-1
Install libicu65 65.1-1
Install libisl22 0.22.1-2
Install libjson-glib1.0_0 1.4.2-1 (automatically added)
Install libkpathsea6 20200406-1
Install liblapack0 3.9.0-2
Install liblasem0.4_4 0.4.3-1 (automatically added)
Install libllvm8 8.0.1-1 (automatically added)
Install libmpfr6 4.0.2-2p6
Install libopenldap2_4_2 2.4.50-1
Install libp11-kit0 0.23.20-1
Install libpaper-common 1.1.28-1
Install libpaper1 1.1.28-1
Install libpcre1 8.44-1
Install libpkgconf3 1.6.3-1
Install libproxy1 0.4.14-2 (automatically added)
Install libptexenc1 20200406-1
Install libquadmath0 9.3.0-2
Install libraqm0 0.7.0-1
Install librest0.7_0 0.8.1-1 (automatically added)
Install libsasl2_3 2.1.27-1
Install libsmartcols1 2.33.1-2
Install libsoup-gnome2.4_1 2.60.3-1 (automatically added)
Install libsoup2.4_1 2.60.3-1 (automatically added)
Install libspectre1 0.2.8-1 (automatically added)
Install libsqlite3_0 3.30.0-1
Install libssl1.0 1.0.2t-1
Install libssl1.1 1.1.1f-1
Install libstdc++6 9.3.0-2
Install libsynctex2 20200406-1
Install libteckit0 2.5.10-1
Install libtexlua53_5 20200406-1
Install libtexluajit2 20200406-1
Install libuuid-devel 2.33.1-2
Install libuuid1 2.33.1-2
Install libwebpdemux2 0.6.1-2
Install libxcb-glx0 1.14-1 (automatically added)
Install libxcb-render0 1.14-1
Install libxcb-shm0 1.14-1
Install libxcb1 1.14-1
Install libxslt 1.1.29-1 (automatically added)
Install libzzip0.13 0.13.71-1
Install mintty 3.1.6-1
Install openssl 1.1.1f-1
Install p11-kit 0.23.20-1
Install p11-kit-trust 0.23.20-1
Install perl 5.30.2-1
Install perl-Clone 0.45-1
Install perl-Digest-SHA 6.02-2
Install perl-Digest-SHA1 2.13-7
Install perl-Encode-Locale 1.05-3
Install perl-File-Listing 6.04-7
Install perl-File-Which 1.23-2
Install perl-HTML-Parser 3.72-3
Install perl-HTML-Tagset 3.20-7
Install perl-HTTP-Cookies 6.08-1
Install perl-HTTP-Daemon 6.06-2
Install perl-HTTP-Date 6.05-1
Install perl-HTTP-Message 6.24-1
Install perl-HTTP-Negotiate 6.01-7
Install perl-IO-HTML 1.001-4
Install perl-IO-String 1.08-7
Install perl-LWP-MediaTypes 6.04-2
Install perl-Net-HTTP 6.19-2
Install perl-Socket 2.029-2
Install perl-TimeDate 2.33-1
Install perl-Tk 804.035-1
Install perl-Try-Tiny 0.30-2
Install perl-URI 1.76-2
Install perl-WWW-RobotRules 6.02-7
Install perl-XML-Parser 2.46-2
Install perl-libwww-perl 6.44-1
Install perl_autorebase 5.30.2-1
Install perl_base 5.30.2-1
Install pkg-config 1.6.3-1
Install pkgconf 1.6.3-1
Install poppler-data 0.4.9-1
Install preview-latex 11.92-1
Install publicsuffix-list-dafsa 20200326-1
Install python27-cffi 1.12.2-1
Install python27-chardet 3.0.4-1
Install python27-imaging 5.4.1-1
Install python27-olefile 0.46-1
Install python27-ply 3.11-1
Install python27-pycparser 2.19-1
Install python27-pygments 2.3.1-1
Install texlive 20200406-1
Install texlive-collection-basic 20200406-1
Install texlive-collection-fontsrecommended 20200406-1
Install texlive-collection-latex 20200406-1
Install texlive-collection-latexextra 20200406-1
Install texlive-collection-latexrecommended 20200406-1
Install texlive-collection-mathscience 20200406-1
Install texlive-collection-pictures 20200406-1
Install tzdata 2020a-1
Install util-linux 2.33.1-2
Install vim-minimal 8.2.0486-1
Install w32api-headers 7.0.0-1
Install w32api-runtime 7.0.0-1
Install xlsx2csv 0.11+20120814+gitf54ab78-2
```

## Note
`20200602` -- Reinstalled and only `latex` is tested.