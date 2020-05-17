\documentclass{exam}

% Packages
\usepackage{amsthm}

\author{L.A.\ TeX}
\title{Example document setup}

% Possible other definitions, configurations etc. that you need
\theoremstyle{definition}
\newtheorem{theorem}{Theorem}

% Document
\begin{document}

    \maketitle

    \section{Introduction}\label{sec:introduction}
    %\input{introduction}

    \section{Example theorems} \label{sec:exampleTheorem}
    %\input{example-theorems}

Quadratic formula
Roots of $y = ax^2 + bx + c are$

\begin{equation}
x_{1,2} = \frac{-b \pm \sqrt{b^2 - 4ac}{2a}} 
\end{equation}

which makes $y = 0$.

After push https://github.com/settings/installations/8990751

Test push.


\end{document}
