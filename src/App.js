import React, { useState, useEffect } from "react";
import About from "./components/About";
import Login from "./components/Login";
import MyContext, { MyProvider } from "./components/MyContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Switch} from 'react-router-dom'

function App() {

  const [data, setData] = useState(null);
  const [count, updateCount] = useState(0);

  function increment() {
    updateCount(count + 1)
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
  }, [])

  return (
    <div>

      <MyContext.Provider value={{ name: 'Charlie', age: 12, count, increment }}>
        {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'JSON placeholder API'}
        <Router>
         <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </Router>
      </MyContext.Provider>

    </div>

  );
}

export default App;
