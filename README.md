# 📝 Task Management System

A simple task management system built with **HTML, CSS, JavaScript**, and **Electron** to run as a desktop application.

![DemoImage] TaskAppSS.png

---

## 🚀 Getting Started

### **1️⃣ Install Node.js**
Make sure you have **Node.js** installed on your system.  
🔗 [Download Node.js](https://nodejs.org/)

### **2️⃣ Clone the Repository**
Open a terminal and run:
```sh
git clone https://github.com/kkavinkk/Task-Management-System.git
cd Task-Management-System
```

### **3️⃣ Install Dependencies**
Run this command to install Electron:
```sh
npm install --save-dev electron
```

### **4️⃣ Start the App**
To launch the Electron app, run:
```sh
npm start
```

---

## 🛠 Project Structure

```
/Task-Management-System
  ├── index.html        # Main UI
  ├── style.css         # Stylesheet
  ├── script.js         # Frontend logic
  ├── main.js           # Electron main process
  ├── package.json      # Project metadata & dependencies
  ├── .gitignore        # Ignores node_modules
```

---

## 📦 Packaging the App (Optional)
To package the app as a desktop application:
```sh
npm install --save-dev electron-packager
npx electron-packager . "TaskApp" --platform=win32 --arch=x64 --out=dist
```
Replace `win32` with `darwin` for macOS or `linux` for Linux.

---

## 📜 License
This project is **open-source**. Feel free to modify and improve it! 🚀



