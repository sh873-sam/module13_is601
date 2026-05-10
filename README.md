# Module 13 IS601 Calculator Application

This project is a FastAPI-based calculator web application that includes user authentication, PostgreSQL database integration, Docker containerization, GitHub Actions CI/CD automation, and automated testing.

The application allows users to register, log in, perform mathematical calculations, and view calculation history through a web dashboard.

---

# Features

- User registration and login
- JWT authentication
- Secure password hashing
- Calculator dashboard
- Addition calculations
- Subtraction calculations
- Multiplication calculations
- Division calculations
- POWER calculation feature
- Calculation history tracking
- PostgreSQL database integration
- Docker containerization
- Docker Compose support
- GitHub Actions CI/CD pipeline
- Automated testing with pytest
- Frontend validation and UI support

---

# Final Project Feature

The final project enhancement added a new POWER calculation feature to the calculator application.

Example:

2 ^ 3 = 8

This feature includes:

- Backend calculation logic updates
- SQLAlchemy model support
- Pydantic schema validation updates
- Frontend dashboard integration
- Form validation support
- Automated unit testing
- Integration testing
- UI workflow testing
- Docker deployment verification
- CI/CD pipeline validation

---

# Technologies Used

- FastAPI
- PostgreSQL
- SQLAlchemy
- Docker
- Docker Compose
- GitHub Actions
- Pytest
- HTML
- CSS
- JavaScript
- JWT Authentication
- Pydantic

---

# Run Application

Run the application using Docker Compose:

```bash
docker compose up --build

Open the application in your browser:

http://localhost:8000

Run Tests

Run automated tests locally:

pytest

Docker Hub Repository

Docker Hub Repository Link:

https://hub.docker.com/r/sh873/module13_is601

Docker Pull Command:

docker pull sh873/module13_is601:latest
GitHub Repository

GitHub Repository Link:

https://github.com/sh873-sam/module13_is601

CI/CD Pipeline

GitHub Actions automatically performs the following tasks:

Runs automated tests
Verifies application functionality
Builds Docker containers
Validates deployment configuration
Confirms CI/CD workflow execution

GitHub Actions workflow status:

Passing successfully
Test Results
100 tests passed
1 test skipped
Docker deployment verified successfully
Application tested locally through browser UI

Application Pages

The application includes:

Home Page
Login Page
Registration Page
Calculator Dashboard
Calculation History Page
Database

This project uses PostgreSQL for persistent database storage.

Database services are managed through Docker Compose
