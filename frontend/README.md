# 📝 Think Board

Think Board is a full-stack note-taking application that allows users to create, edit, and delete notes seamlessly. All notes are stored securely in MongoDB, ensuring persistence across sessions. The application also includes API rate limiting using Upstash Redis to protect the backend from abuse.

## 🚀 Live Demo

🔗 Add your deployed Render URL here

Example:
https://think-board.onrender.com

---

## ✨ Features

- 📝 Create new notes
- ✏️ Edit existing notes
- 🗑️ Delete notes
- 💾 Notes are automatically saved in MongoDB
- ⚡ Fast and responsive UI
- 🔔 Toast notifications for user actions
- 🛡️ API rate limiting using Upstash Redis
- 📱 Responsive design for desktop and mobile devices

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Tailwind CSS
- DaisyUI
- Axios
- React Hot Toast
- Lucide React

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Upstash Redis (Rate Limiting)

### Deployment

- Render

---

## 📂 Project Structure

```bash
Think-Board/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── lib/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── vite.config.js
│
└── README.md
```

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/think-board.git

cd think-board
```

### 2. Install Backend Dependencies

```bash
cd backend

npm install
```

### 3. Configure Environment Variables

Create a `.env` file inside the backend folder:

```env
PORT=5001

MONGO_URI=your_mongodb_connection_string

UPSTASH_REDIS_REST_URL=your_upstash_url

UPSTASH_REDIS_REST_TOKEN=your_upstash_token
```

### 4. Install Frontend Dependencies

```bash
cd ../frontend

npm install
```

### 5. Run the Application

#### Backend

```bash
cd backend

npm run dev
```

#### Frontend

```bash
cd frontend

npm run dev
```

---

## 🔗 API Endpoints

### Get All Notes

```http
GET /api/notes
```

### Create Note

```http
POST /api/notes
```

Request Body:

```json
{
  "title": "My Note",
  "content": "This is my first note."
}
```

### Update Note

```http
PUT /api/notes/:id
```

### Delete Note

```http
DELETE /api/notes/:id
```

---

## 🛡️ Rate Limiting

The backend uses Upstash Redis to implement API rate limiting.

Benefits:

- Prevents API abuse
- Protects server resources
- Improves application reliability
- Helps mitigate spam requests

---

## 📸 Screenshots

Add screenshots of your application here.

### Home Page

![Home Page](./screenshots/home.png)

### Create Note

![Create Note](./screenshots/create-note.png)

---

## 🌐 Deployment

This project is deployed on Render.

### Build Commands

Frontend:

```bash
npm run build
```

Backend:

```bash
npm start
```

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Prem

GitHub: https://github.com/your-github-username
