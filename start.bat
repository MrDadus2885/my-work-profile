@echo off
echo Starting My Work Profile Application...
echo.

echo Starting Backend (Spring Boot)...
start "Backend" cmd /k "cd backend && gradlew.bat bootRun"

echo Waiting for backend to start...
timeout /t 10 /nobreak > nul

echo Starting Frontend (React)...
start "Frontend" cmd /k "cd frontend && npm start"

echo.
echo Application is starting...
echo Backend will be available at: http://localhost:8080
echo Frontend will be available at: http://localhost:3000
echo H2 Database Console: http://localhost:8080/h2-console
echo.
pause 