# **React Timer**

A simple and visually appealing timer built using React. This timer allows users to increment or decrement the countdown, start the timer, and stop it at any time. It features a sleek design with functional buttons and resets automatically when the countdown reaches zero.

---

## **Features**

- **Increment/Decrement**: Adjust the timer by increments of 5 seconds.
- **Start/Stop**: Start the countdown or stop it at any time.
- **Auto-Reset**: The timer resets to zero when the countdown finishes.
- **Responsive Design**: Works well on different screen sizes with a modern UI.

---

## **Preview**

Timer Preview

---

## **Technologies Used**

- **React**: Component-based UI development.
- **CSS**: For styling and layout.
- **JavaScript**: Core logic for timer functionality.

---

## **Getting Started**

### **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/tarunjeeth/React-Timer.git
   ```
2. Navigate to the project directory:
   ```bash
   cd React-Timer
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

### **File Structure**
```
react-timer/
├── public/
├── src/
│   ├── App.jsx       # Main component with timer logic
│   ├── main.jsx      # Entry point for rendering the app
│   ├── index.css     # Global styles
├── package.json      # Project metadata and dependencies
├── README.md         # Documentation
└── .gitignore        # Files to ignore in version control
```

---

## **Code Explanation**

### **App.jsx**
This file contains the main logic for the timer:
```javascript
import { useState } from 'react';
import './App.css';

function App() {
  const [number, setNum] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Increase timer by 5 seconds
  function increase() {
    setNum(number + 5);
  }

  // Decrease timer by 5 seconds (minimum value is 0)
  function decrease() {
    const num = Math.max(0, number - 5);
    setNum(num);
  }

  // Start countdown
  function start() {
    if (!isRunning) {
      setIsRunning(true);
      const intervalId = setInterval(() => {
        setNum((prevNum) => {
          if (prevNum <= 0) {
            clearInterval(intervalId);
            setIsRunning(false);
            return 0;
          }
          return prevNum - 1;
        });
      }, 1000);
    }
  }

  // Stop countdown
  function stop() {
    setIsRunning(false);
  }

  return (
    <div className="App">
      <div className="timer-display">{number}</div>
      <div className="controls">
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
        <button onClick={start}>start</button>
        <button onClick={stop}>stop</button>
      </div>
    </div>
  );
}

export default App;
```

### **main.jsx**
The entry point for rendering the app:
```javascript
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

---

## **How to Use**

1. Use the `+` button to add time in increments of 5 seconds.
2. Use the `-` button to decrease time in increments of 5 seconds (minimum is zero).
3. Press `start` to begin the countdown.
4. Press `stop` to pause the countdown.

---
