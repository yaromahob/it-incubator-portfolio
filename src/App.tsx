import React, {useState} from 'react';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import './App.css';

function App() {
  const [active, setActive] = useState(false);
  const appFullClass = active ? `App active` : 'App';
  const activeCallback = (isActive: boolean) => {
    setActive(isActive);
  };
  
  return (
    <div className={appFullClass}>
      <Header active={active} activeCallback={activeCallback}/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
