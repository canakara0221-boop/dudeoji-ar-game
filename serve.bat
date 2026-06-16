@echo off
cd /d "%~dp0"
echo.
echo  두더지 잡기 서버 시작!
echo  브라우저에서 열기:  http://localhost:8000
echo  (끄려면 이 창에서 Ctrl+C)
echo.
python -m http.server 8000
