import React from "react";

 function Header(){
    return (<div id="Home" className="row1" >
     <div className="heading"><h3>MADHIHA's PORTFOLIO</h3></div>
     <div className="side-contents">
       <ul>
         <li><a className="Home" href="#Home">HOME</a></li>
         <li><a className="About" href="#About">ABOUT</a></li>
         <li><a className="Skills" href="#Skills">SKILLS</a></li>
         <li><a className="Projects" href="#Projects">PROJECTS</a></li>
         <li><a className="Contacts" href="#Contacts">CONTACTS</a></li>
       </ul>
     
     </div>
    </div> );
 }

 export default Header;