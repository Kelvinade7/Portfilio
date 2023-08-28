import Navbar from "./components/Navbar";
import'./App.css'
import Nav from "./components/Nav";
import { useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
function App() {
const[o,so] =useState(true)
function off(){
  so(o=>!o)
}
let N = o ? <Navbar off={off} />:<Nav off={off}/>
  return (
    <div className="App" style={{background:'#08192f'}}>
      {N}<br/>
      <Home/> 
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
    </div>     
  );
}
export default App;
