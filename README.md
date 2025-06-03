# ✅ Todo Chrome Extension (React + Chrome APIs)

A modern and beautiful **Todo app** as a Chrome Extension, built using **React.js** and **Chrome Extension APIs**. Tasks are stored using `chrome.storage.local` and managed in a responsive UI with gradient styling.

---

## 🚀 Features

- 📌 Add todo tasks with title and description
- 📋 Two task sections: **Pending** and **Completed**
- ✅ Mark tasks as complete/incomplete
- ✏️ Edit tasks with a pencil icon
- 🗑️ Delete tasks instantly
- 💾 Tasks are saved persistently using `chrome.storage.local`
- 🎨 Clean card UI with gradient background and icon buttons

---

## 🖼️ UI Overview

- **Inputs**: 
  - Task Title (bold in card)
  - Task Description (normal)
- **Task Cards**:
  - Left: Title + Description
  - Right: Action Buttons (Complete, Edit, Delete)
- **Buttons**:
  - ✔️ Green check for marking complete
  - 🔄 Orange revert to mark as pending
  - ✏️ Blue pencil for editing
  - 🗑️ Red trash for deleting

---


---

## 🛠️ Installation & Setup

### 1. Clone and Install

```bash
git clone https://github.com/your-username/todo-chrome-extension.git
cd todo-chrome-extension
npm install
npm run build
```

### 2. Build the App
```bash
npm run build
```
This generates a build/ folder ready to be loaded as a Chrome extension.
---


---

🧪 Load Extension in Chrome
Open chrome://extensions/

Enable Developer Mode

Click "Load unpacked"

Select the build/ folder

Click the puzzle piece (extensions icon) to open your todo popup!

---

### Developement Mode
```bash
npm start
```
⚠️ Note: Chrome APIs like chrome.storage do not work in localhost mode. Use npm run build and load the extension via chrome://extensions for full functionality.
---


🔒 Permissions
This extension uses:

storage — for saving your todos persistently, action, background — to enable popup and background features (as declared in manifest.json)
---

🙌 Credits
Built with React

Icons from react-icons

Gradient background via UI Gradients

---



📬 Contact
Have feedback or suggestions?


Feel free to open an issue or reach out via GitHub!