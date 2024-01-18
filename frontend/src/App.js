import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(0);
  const [currentDate, setCurrentDate] = useState(0);
  useEffect(() => {
  fetch(' http://127.0.0.1:80/').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
      setCurrentDate(data.date);
      document.title = 'react';
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
      <p>Hello from react</p>
      <p>The date is {currentDate} and the time is {currentTime}.</p> <br/>

      </header>
    </div>
  );
}

export default App;