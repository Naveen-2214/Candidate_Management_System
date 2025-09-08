Project Description:

The Candidate Management System is a full-stack application designed to help recruiters store, manage, and organize candidate information. The system provides a clean interface to add, view, edit, and delete candidates. The backend is built with FastAPI + SQLite, and the frontend uses React + Vite.
This project demonstrates a complete CRUD application, integration between frontend and backend, and includes API documentation and unit testing.

Technology Stack:
Frontend: React, Vite, JavaScript, Axios
Backend: FastAPI, Python, SQLAlchemy, SQLite
Testing: Pytest (Backend), React Testing Library / Vitest (Frontend)
API Documentation: Swagger / OpenAPI (built-in FastAPI)

Setup Instructions:
1. Backend (FastAPI + SQLite)
  Navigate to the backend folder: cd backend
  Install Python dependencies: pip install -r requirements.txt
  Start the backend server: uvicorn main:app --reload
  Verify API is running: Open http://127.0.0.1:8000/docs for Swagger UI
                         Open http://127.0.0.1:8000/redoc for Redoc UI

2. Frontend (React + Vite):
  Navigate to the frontend folder: cd frontend
  Install dependencies: npm install
  Start the frontend server: npm run dev
  Open in browser: http://localhost:5173
                   Ensure api.js points to http://127.0.0.1:8000/api/candidates

API Overview:
Endpoints
Method	  Endpoint	             Description
GET	     /api/candidates	       Retrieve all candidates
POST	   /api/candidates	       Add a new candidate
PUT	     /api/candidates/{id}	   Update an existing candidate
DELETE	 /api/candidates/{id}	   Delete a candidate

Request Example (POST /api/candidates):
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone_number": "1234567890",
  "current_status": "Applied",
  "resume_link": "http://example.com/resume.pdf"
}

Response Example:
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "phone_number": "1234567890",
  "current_status": "Applied",
  "resume_link": "http://example.com/resume.pdf"
}

Testing:
  Backend Tests (FastAPI + Pytest):
    Example test file: backend/test_main.py
    Run: pytest backend/test_main.py

  Frontend Tests (React + Vitest / React Testing Library):
    Example test file: frontend/src/components/CandidateForm.test.jsx
    Run: npm run test

Project Features:

Full CRUD functionality for candidates

Interactive frontend with React

API documentation via Swagger UI

Unit tests for backend and frontend

CORS enabled for frontend-backend communication
