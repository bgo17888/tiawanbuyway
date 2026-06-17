@echo off
setlocal

set ROOT=%~dp0
set OUT_DIR=%ROOT%out
set SERVER_JS=%ROOT%serve-site.js
set BUNDLED_NODE=C:\Users\poke7\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe

if not exist "%OUT_DIR%\index.html" (
  echo [ERROR] Missing file:
  echo %OUT_DIR%\index.html
  pause
  exit /b 1
)

if not exist "%SERVER_JS%" (
  echo [ERROR] Missing file:
  echo %SERVER_JS%
  pause
  exit /b 1
)

if exist "%BUNDLED_NODE%" (
  "%BUNDLED_NODE%" "%SERVER_JS%"
) else (
  node "%SERVER_JS%"
)

endlocal
