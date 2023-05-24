import React,{useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css';
import './assets/css/Style.css';




// import Navbar from './components/Navbar';
import Home from './pages/Home';


function App() {
  useEffect(() => {
    AOS.init({
        offset: 300
    });
}, [])
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Home />
    </div>
  );
}

export default App;
