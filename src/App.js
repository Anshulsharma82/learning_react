// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react';
import Alert from "./components/Alert"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
//1............................................................
// let obj = {
//   full_name: "Anshul Sharma",
//   age: 26,
//   place: 'Himachal Pradesh'
// }
//.............................................................
function App() {


  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    })

    setTimeout(() => { setAlert(null) }, 2000)
  }

  const greenMode = function () {
    if (mode === 'green') {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert('Light Mode has been enabled!', 'success')
      document.title = 'TextUtils- Light Mode'
    }
    else {
      setMode('green')
      document.body.style.backgroundColor = '#0d4b2e'
      document.body.style.color = 'white'
      showAlert('Green Mode has been enabled!', 'success')
      document.title = 'TextUtils- Green Mode'
    }
  }

  const toggleMode = function () {
    if (mode === "dark") {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert('Light mode has been enabled.', 'success')
      document.title = 'TextUtils- Light Mode'
    }
    else {
      setMode('dark')
      document.body.style.backgroundColor = '#121314'
      document.body.style.color = 'white'
      showAlert('Dark mode has been enabled', 'success')
      document.title = 'TextUtils- Dark Mode'
    }
  }


  //JSX :- means we can use both javascript and html here. 
  // and we can return only one tag like below we are returning only div tag rest tags are inside
  // it(div tag).
  // If we want to return multiple tags then we can use JSX fragment(<>)
  return (
    //1................................................. .................................................
    // <div className="App">
    //   <h1> Hello Everyone. My name is: {obj.full_name}. I'm {obj.age} years old. I live in {obj.place}</h1>
    //   <h2>React is single Page app, and it get reload only once and gather all the data</h2>
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit src/App.js and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="/"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Started Learning React on 23/April/2024
    //     </a>
    //   </header>
    // </div>
    //...................................................................................................

    //2...............................................................................................
    <>
      <Router>
        <Navbar title='Text Utils' aboutText="About Text" contact="Contact Us" mode={mode} toggleMode={toggleMode} greenMode={greenMode} />
        <Alert alert={alert} mode={mode} />
        <Routes>
          <Route exact path='/learning_react/about' element={<About />} />
          <Route exact path='/learning_react' element={< Textform mode={mode} toggleMode={toggleMode} showAlert={showAlert} />} />
        </Routes>
      </Router>
    </>
    //................................................................................................
  );
}

export default App;
