# 🎨 Color Manager

Color Manager is a full-stack application for managing colors. It allows creating, editing, deleting, and searching for colors. The frontend is built with React.js + TailwindCSS, while the backend uses Express.js + MongoDB.
## 🚀 Technologies
- **Frontend:** React.js (Vite), TypeScript, Tailwind CSS, Axios, Heroicons
- **Backend:** Node.js, Express.js, MongoDB (Mongoose)
- **Dodatno:** React Toastify (notifikacije)

---

## 🛠️ ** How to Run the Project**

### 📌 1. **Clone the Repository**
```sh
git clone 
cd color-manager
```

### 📌 2. **Start the Backend:**
```sh
cd backend
npm install
npm start
```
🔹 The server will run on http://localhost:5001

### 📌 3. **Start the Frontend:**
```sh
cd frontend
npm install
npm run dev
```
🔹 The application will be available at http://localhost:5173

---

## 🎯 **API Dokumentacija**

| Method  | Route	               | Description                       |
|--------|--------------------|---------------------------|
| GET    | `/api/colors`      | Fetch all colors        |
| POST   | `/api/colors`      | Create a new color         |
| PUT    | `/api/colors/:id`  | Update a color by ID     |
| DELETE | `/api/colors/:id`  | Delete a color by ID      |

---

## ✅ **Features**

✔ Add, edit, and delete colors
✔ Search colors by name or HEX code
✔ Responsive design (TailwindCSS)
✔ Notifications for actions (React Toastify)
✔ Input validation (disabled buttons for invalid data)
✔ Optimized code (modular and reusable components)

---
