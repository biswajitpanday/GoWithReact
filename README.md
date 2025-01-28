
# GoWithReact

**GoWithReact** is a foundational full-stack project combining a **Go** backend with a **React** frontend. It demonstrates token-based authentication and efficient routing, making it a great starting point for building scalable web applications.

---

## Features
- **Backend (Go)**:
  - REST API with JWT authentication using `golang-jwt/jwt/v4`
  - MongoDB integration with `go.mongodb.org/mongo-driver`
  - Configurable environment variables using `joho/godotenv`
- **Frontend (React)**:
  - Intuitive user interface with React Router
  - Interaction with secure backend APIs

---

## Technologies Used
- **Backend**: Go, Gin framework, MongoDB, JWT
- **Frontend**: React, React Router
- **Authentication**: JSON Web Tokens (JWT)

---

## Prerequisites
- Go (v1.19+)
- Node.js (v14+)
- npm or yarn

---

## Setup

### Backend (Go)
1. Clone the repository:
   ```bash
   git clone https://github.com/biswajitpanday/GoWithReact.git
   cd GoWithReact/backend
   ```
2. Install dependencies:
   ```bash
   go mod tidy
   ```
3. Create a `.env` file with the necessary configurations (example below):
   ```env
   MONGO_URI=mongodb://localhost:27017
   JWT_SECRET=your_secret_key
   ```
4. Run the server:
   ```bash
   go run main.go
   ```
   The server will start on [http://localhost:3200](http://localhost:3200).

### Frontend (React)
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React app:
   ```bash
   npm start
   ```
   Access the application at [http://localhost:3000](http://localhost:3000).

---

## Usage
- Register for a new account.
- Log in using your credentials.
- Test secure routes and API interactions between the React frontend and Go backend.

---

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes and push them:
   ```bash
   git push origin feature-name
   ```
4. Submit a pull request.

---

## License
This project is licensed under the **MIT License**. Feel free to use and modify it as needed.

---

## Contact
Created by **Biswajit Panday**.  
For questions or feedback, reach out at:  
- Email: biswajitmailid@gmail.com  
- GitHub: [@biswajitpanday](https://github.com/biswajitpanday)

---

Enjoy coding with **GoWithReact**! 🚀
