#!/bin/bash

echo "Starting My Work Profile Application..."
echo

echo "Starting Backend (Spring Boot)..."
cd backend
./gradlew bootRun &
BACKEND_PID=$!

echo "Waiting for backend to start..."
sleep 10

echo "Starting Frontend (React)..."
cd ../frontend
npm start &
FRONTEND_PID=$!

echo
echo "Application is starting..."
echo "Backend will be available at: http://localhost:8080"
echo "Frontend will be available at: http://localhost:3000"
echo "H2 Database Console: http://localhost:8080/h2-console"
echo
echo "Press Ctrl+C to stop both servers"

# Wait for user to stop the application
trap "echo 'Stopping servers...'; kill $BACKEND_PID $FRONTEND_PID; exit" INT
wait 