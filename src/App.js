import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Menu from './component/Menu'
import Home from './component/Home'
import Contact from "./component/Contact";
import Education from "./component/Education";
import Skills from "./component/Skills";
import About from "./component/About";
import Projects from "./component/Projects";

function App(){
  return(
    <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path={`/`} element={<Home/>} />
      <Route path={`/Contact`} element={<Contact/>} />
      <Route path={`/Education`} element={<Education/>} />
      <Route path={`/Skills`} element={<Skills/>} />
      <Route path={`/projects`} element={<Projects/>}/>
      <Route path={`/About`} element={<About/>} />

    </Routes>
    </BrowserRouter>
  )
}
export default App;
