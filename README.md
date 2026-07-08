# 📝 AI Notes Summarizer

An AI-powered web application that transforms lengthy notes into short, easy-to-understand summaries using Generative AI. Built with the MERN stack, the application provides a clean interface, fast response time, and an intuitive user experience.

---

## 🚀 Live Demo

🔗 **Frontend:** *Add your deployed frontend URL here*

🔗 **Backend API:** *Add your backend URL here*

---

## 📸 Screenshots

### 🏠 Home Page

![Home](./screenshots/home.png)

### ✨ AI Generated Summary

![Summary](./screenshots/summary.png)

### 📱 Responsive Design

![Mobile](./screenshots/mobile.png)

---

## ✨ Features

* 🤖 AI-powered note summarization
* 📝 Paste long notes and get concise summaries
* ⚡ Fast API response
* 🎨 Clean and responsive UI
* 📋 One-click clear notes
* 🔒 Secure backend architecture
* 🌐 REST API integration
* 📱 Mobile-friendly design

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript (ES6)

### Backend

* Node.js
* Express.js

### AI

* Google Gemini API

### Database *(Optional if used)*

* MongoDB Atlas

### Version Control

* Git
* GitHub

---

## 📂 Project Structure

```text
AI-Notes-Summarizer/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── screenshots/
│   ├── home.png
│   ├── summary.png
│   └── mobile.png
│
├── README.md
└── .gitignore
```

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/yourusername/AI-Notes-Summarizer.git
```

```bash
cd AI-Notes-Summarizer
```

---

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

---

### 3. Create Environment Variables

Create a `.env` file inside the **backend** folder.

```env
GEMINI_API_KEY=YOUR_API_KEY
PORT=5000
```

---

### 4. Start Backend

```bash
npm start
```

or

```bash
node server.js
```

---

### 5. Run Frontend

Open `frontend/index.html`

or use

```bash
Live Server
```

---

## 📡 API Endpoint

### POST `/api/summarize`

#### Request

```json
{
  "notes": "Artificial Intelligence is the simulation of human intelligence..."
}
```

#### Response

```json
{
  "summary": "Artificial Intelligence enables machines to perform tasks requiring human intelligence."
}
```

---

## 💡 Future Improvements

* User Authentication
* Notes History
* Download Summary as PDF
* Copy Summary Button
* Multiple AI Models
* Dark Mode
* Voice Input
* File Upload (PDF/DOCX)
* Multi-language Support

---

## 🧠 How It Works

1. User enters notes.
2. Frontend sends a POST request to the backend.
3. Backend communicates with the Gemini API.
4. AI generates a concise summary.
5. Backend returns the summary.
6. Frontend displays the summarized text.

---

## 📈 Learning Outcomes

This project helped in understanding:

* REST APIs
* Express.js Routing
* Environment Variables
* Async JavaScript
* API Integration
* Error Handling
* Frontend & Backend Communication
* Git & GitHub Workflow

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes.
4. Push the branch.
5. Open a Pull Request.

---

## 👨‍💻 Author

**Avanish Maurya**

**MERN Stack Developer | Java & DSA | AI Enthusiast**

GitHub: https://github.com/YOUR_USERNAME

LinkedIn: https://linkedin.com/in/YOUR_PROFILE

Portfolio: https://YOUR_PORTFOLIO

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub. It motivates me to build more open-source projects!

---

## 📄 License

This project is licensed under the MIT License.

Feel free to use, modify, and distribute this project.
