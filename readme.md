
# Laboratory Assistant Management Tool (LAMT)

## Overview

The **Laboratory Assistant Management Tool (LAMT)** is a web-based platform built with **Node.js** and **MongoDB** to streamline the planning, execution, and verification of engineering laboratory sessions.

It assists  **instructors** ,  **lab technicians** , and **students** by digitizing laboratory operations — from scheduling experiments to verifying practical results and maintaining lab records.

---

## Objectives

* Simplify the organization and scheduling of laboratory sessions.
* Provide a workspace for recording and verifying practical activities.
* Allow instructors to create and distribute lab sessions digitally.
* Enable students to access, complete, and submit experiments online.
* Improve collaboration between instructors, technicians, and students.

---

## Key Features

| Role                     | Capabilities                                                                                   |
| ------------------------ | ---------------------------------------------------------------------------------------------- |
| **Instructor**     | Create and manage lab sessions, upload experiment guides, and review student submissions.      |
| **Lab Technician** | Record experimental data, verify practical work, and manage laboratory equipment or resources. |
| **Student**        | Access assigned experiments, input observations, and submit practical reports.                 |
| **Admin**          | Manage users, roles, and system configuration.                                                 |

Additional features:

* Role-based user authentication and access control.
* Real-time updates for lab assignments and submissions.
* Automated session sharing and progress tracking.
* Integration with MongoDB for persistent data storage.
* Simple, responsive web interface.

---

## System Architecture

The system follows a modular client-server structure:

```
Frontend (Web App) --> RESTful API (Node.js + Express) --> MongoDB Database
```

* **Frontend:** Can be built using React.js or a templating engine (e.g., EJS).
* **Backend:** Node.js + Express handles routes, authentication, and API logic.
* **Database:** MongoDB stores experiment data, user accounts, and verification logs.

---

## Technology Stack

| Component                          | Technology                |
| ---------------------------------- | ------------------------- |
| **Backend**                  | Node.js (Express)         |
| **Database**                 | MongoDB (Mongoose ORM)    |
| **Authentication**           | JSON Web Tokens (JWT)     |
| **Frontend (optional)**      | React.js or EJS Templates |
| **Visualization (optional)** | Chart.js or Plotly.js     |
| **Deployment**               | Docker, Render, or Heroku |
| **Version Control**          | Git and GitHub            |

---

## Installation and Setup

### Prerequisites

* Node.js version 18 or higher
* MongoDB (local or cloud instance such as MongoDB Atlas)
* Git installed

### Clone the Repository

```bash
git clone https://github.com/yourusername/LAMT.git
cd LAMT
```

### Install Dependencies

```bash
npm install
```

### Environment Configuration

Create a `.env` file in the project root with the following variables:

```
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/LAMT
JWT_SECRET=your_secret_key
```

### Start the Application

```bash
npm start
```

The server will run on:

```
http://localhost:5000
```

---

## Folder Structure

```
LAMT/
├── src/
│   ├── config/          # Database and environment setup
│   ├── controllers/     # Route logic and data handling
│   ├── models/          # MongoDB schemas (User, Session, Experiment, etc.)
│   ├── routes/          # API routes
│   ├── middleware/      # Authentication and validation
│   └── app.js           # Express app entry point
├── public/              # Static files (if any)
├── .env                 # Environment variables
├── package.json
└── README.md
```

---

## Usage

1. **Instructor Login** – Create lab sessions, assign experiments, and upload documents.
2. **Technician Login** – Record and verify student experiments.
3. **Student Login** – Access lab guides, input readings, and submit reports.
4. **Admin** – Manage users and overall system setup.

---

## Example Workflow

1. Instructor creates a lab session (e.g., “Electrical Circuits – Ohm’s Law”).
2. Students receive the experiment details automatically.
3. Lab technicians verify data submissions and mark attendance.
4. Instructor reviews and approves student reports.
5. All data is stored in MongoDB for record keeping.

---

## API Endpoints (Sample)

| Method | Endpoint                        | Description                     |
| ------ | ------------------------------- | ------------------------------- |
| POST   | `/api/auth/register`          | Register new user               |
| POST   | `/api/auth/login`             | User login                      |
| POST   | `/api/labs`                   | Create a new lab session        |
| GET    | `/api/labs`                   | Fetch all lab sessions          |
| POST   | `/api/experiments/:id/verify` | Verify student experiment       |
| GET    | `/api/users`                  | Retrieve all users (admin only) |

---

## Future Enhancements

* AI-powered lab report validation and grading.
* IoT integration for real-time sensor data input.
* Enhanced analytics dashboards.
* Support for multiple departments and campuses.
* Automated PDF/Excel report exports.

---

## Contributing

Contributions are welcome. To contribute:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to your branch and open a pull request.

---

## License

This project is licensed under the  **MIT License** .

You are free to use, modify, and distribute it with attribution.

---

## Acknowledgments

This project was developed to address the challenges faced in managing engineering laboratory activities, where manual verification and record-keeping can be inefficient.

LAMT aims to provide a modern digital solution that improves coordination, accountability, and learning outcomes in laboratory environments.
