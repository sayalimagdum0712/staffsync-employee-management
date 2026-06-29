# staffsync-employee-management
# StaffSync - Employee Management System

## Overview

StaffSync is a containerized Employee Management System built to demonstrate backend development, containerization, cloud deployment, and DevOps practices.

The application provides REST APIs to manage employee records and is deployed using Docker containers on AWS EC2.

---

## Features

* Add Employee
* View All Employees
* View Employee by ID
* Update Employee Details
* Delete Employee
* Health Check Endpoint

### Employee Details Stored

* Employee ID
* Name
* Email
* Department
* Designation
* Salary
* Created Timestamp

---

## Tech Stack

| Layer            | Technology     |
| ---------------- | -------------- |
| Backend          | Node.js        |
| Framework        | Express.js     |
| Database         | MySQL 8        |
| Containerization | Docker         |
| Orchestration    | Docker Compose |
| Cloud Platform   | AWS EC2        |
| Operating System | Ubuntu Linux   |
| Version Control  | Git & GitHub   |

---

## Project Structure

```text
staffsync/
│
├── backend/
│   ├── Dockerfile
│   ├── db.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│
├── docker-compose.yml
│
└── README.md
```

---

## API Endpoints

### Health Check

```http
GET /health
```

### Get All Employees

```http
GET /api/employees
```

### Get Employee By ID

```http
GET /api/employees/:id
```

### Create Employee

```http
POST /api/employees
```

Example Request:

```json
{
  "name": "Sayali Magdum",
  "email": "sayali@example.com",
  "department": "DevOps",
  "designation": "Cloud Engineer",
  "salary": 80000
}
```

### Update Employee

```http
PUT /api/employees/:id
```

### Delete Employee

```http
DELETE /api/employees/:id
```

---

## Running the Project

### Start Containers

```bash
docker compose up -d --build
```

### Check Running Containers

```bash
docker ps
```

### View Logs

```bash
docker logs staffsync-backend
```

### Stop Containers

```bash
docker compose down
```

---

## Sample Output

```json
[
  {
    "id": 1,
    "name": "Sayali Magdum",
    "email": "sayali@example.com",
    "department": "DevOps",
    "designation": "Cloud Engineer",
    "salary": "80000.00"
  }
]
```

---

## DevOps Concepts Demonstrated

* Docker Containerization
* Docker Compose Orchestration
* Environment Variables Management
* Container Networking
* Persistent Storage with Docker Volumes
* REST API Development
* AWS EC2 Deployment
* Linux Server Administration
* Git Version Control
* GitHub Repository Management

---

## Future Enhancements

* React Frontend
* Authentication and Authorization
* Jenkins CI/CD Pipeline
* Nginx Reverse Proxy
* Docker Hub Integration
* Monitoring using Prometheus and Grafana

---

## Author

**Sayali Magdum**

DevOps and Cloud Engineering Enthusiast
