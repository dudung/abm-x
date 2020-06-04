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
::	20191017
::	Reuse of butiran (textbook)
::	20190605
::	Reuse for abx-x, a LaTeX documentation
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
	c:\texmfs\install\miktex\bin\pdflatex abm-x
	echo.
	echo latex at campus
)

if "%loc%"=="1" (
	i:\texmfs\install\miktex\bin\pdflatex abm-x
	echo.
	echo latex at home
)

:: URL https://stackoverflow.com/a/2340018/9475509 [20190129]
for /f %%i in ('date/T') do set dd=%%i
for /f %%i in ('time/T') do set tt=%%i
echo %dd% %tt% 

echo.
echo Use in Chrome abm-x.pdf#page=50^&zoom=120,140,300

:eof
