import logo from './logo.svg';
import React from "react"
import './App.css';

function App() {
  const [theme, setTheme] = React.useState("light")
  function changeTheme(){
    if(theme === "light"){
      setTheme("dark")
    }
    if(theme === "dark"){
      setTheme("light")
    }
  }
  return (
    <div className={`App ${theme}`}>
      <button onClick={changeTheme}>CHANGE THEME</button>
    </div>
  );
}

export default App;
