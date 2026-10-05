@echo off
setlocal
cd /d "%~dp0"

if /i "%1"=="stop" (
    docker compose down
    goto :eof
)
if /i "%1"=="logs" (
    docker compose logs -f
    goto :eof
)

echo Building and starting portfolio on http://localhost:5183 ...
docker compose up --build -d
if errorlevel 1 (
    echo Docker build/run failed.
    exit /b 1
)
echo.
echo Running at http://localhost:5183
echo Usage: develop.bat [stop ^| logs]
start "" http://localhost:5183
