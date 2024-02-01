import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost/api/test/')
    .then(response => response.json())
    .then(data => {
      setData(data[0]);
      console.log(data[0])
    })
    .catch(error => {
      console.error(error);
    });
  })



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>An Awesome Code time </h1>
        <h3>On Django, React, Postgres, and Docker </h3>

        {data && <p>{data}</p>}
      </header>
    </div>
  );
}

export default App;