import React ,{useState} from "react";
import Header from "../src/components/Header";
import Skills from "../src/components/Skills";
import Profile from "../src/components/Profile";
import About from "../src/components/About";
import Projects from "../src/components/Projects";
import Contacts from "../src/components/Contacts";
import Footer from "../src/components/Footer";
function App(){
  return <div className="container">
    <Header />
    <Profile />
    <About />
    <Skills /> 
    <Projects />
    <Contacts />
    <Footer />
  </div>;
}


export default App;