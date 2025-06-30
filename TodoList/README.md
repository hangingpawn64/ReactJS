📝 Get It Together - React To-Do List with Voice Input
Get It Together is a stylish, responsive To-Do List web app built with React, featuring:

✅ Modern responsive UI
✅ Local Storage for persistent tasks
✅ Task editing & deletion
✅ Speech-to-text task entry (using Web Speech API)
✅ Dynamic time display
✅ Dark/Light/Gradient theme options

🚀 Features
🎤 Voice Input: Add tasks using your voice with the Speech Recognition API.

💾 Local Storage: Your tasks stay saved even after refreshing or closing the browser.

✏️ Edit Tasks: Quickly edit existing tasks.

🗑️ Delete Tasks: Remove completed or unwanted tasks.

✅ Mark Complete: Checkbox to mark tasks as done, with strikethrough effect.

⏰ Live Clock: Displays current time (Asia/Kolkata timezone).

🎨 Themes: Switch between Light, Gradient, and Dark modes.

📂 Project Structure
pgsql <br>
Copy  <br>
Edit <br>
├── public <br>
├── src <br>
│   ├── App.jsx         // Main To-Do logic with state handling <br>
│   ├── components <br>
│   │   ├── Header.jsx  // Navigation bar with theme controls <br>
│   │   ├── time.jsx    // Live clock component  <br>
│   ├── assets <br>
│   ├── App.css <br>
│   └── index.jsx <br>
├── package.json <br>
└── README.md <br>
⚙️ Setup & Installation <br>
Clone the repo

bash
Copy
Edit
git clone <repository-url>
cd get-it-together
Install dependencies

bash
Copy
Edit
npm install
Start development server

bash
Copy
Edit
npm run dev
Open http://localhost:5173 in your browser.

🛠️ Tech Stack
React

Vite

TailwindCSS (for responsive styling)

Web Speech API (for voice input)

Local Storage (persistent tasks)

🎤 How Voice Input Works
Click the microphone icon beside the task input.

Speak your task clearly.

The text field auto-fills with your spoken words.

ℹ️ Voice input works best on supported browsers like Chrome.

✨ Improvements Ideas

Task filtering (All / Active / Completed)

Theme preference saving

Better error handling for unsupported browsers

Task due dates or reminders

💡 Author
Made with 💙 by Akshit Tupkar

📄 License
Open-source project — feel free to use and contribute!
