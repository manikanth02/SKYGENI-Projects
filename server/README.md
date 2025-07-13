
---

## ✅ `server/README.md` (Backend)

```md
# 🌐 ACV Dashboard - Backend (Node + Express)

This is the backend part of the ACV Dashboard project. It is made using **Node.js** and **Express.js**. The backend serves static JSON data from files and exposes it as API for the frontend to consume.

---

## 📌 Features

- Serves 4 API endpoints:
  - Customer Type data
  - ACV Range data
  - Account Industry data
  - Team data

- Reads `.json` files from the `data` folder
- Sends data as JSON response to frontend
- CORS enabled so React can access API
- Follows **MVC architecture** (Model–View–Controller)

---

## ⚙️ Technologies and Libraries Used

| Package         | Purpose                                        |
|-----------------|------------------------------------------------|
| **Express.js**  | Create REST API routes                         |
| **Cors**        | Allow cross-origin requests from React frontend|
| **Nodemon**     | Auto-restart server on code change (dev only) |
| **JavaScript**  | Programming language used                      |

---

## 📁 Folder Structure
