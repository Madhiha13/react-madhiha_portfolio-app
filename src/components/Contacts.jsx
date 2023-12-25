import React from "react";

function Contacts(){
    
    return <div id="Contacts" className="Contacts-container">
        <h2><b>CONTACT DETAILS</b></h2>
        <div className="contact_div1">
            <div className="div_nest1">
              <div><i class="fa-solid fa-envelope" ></i>
                <a  className="id" href="mailto:madhihakhanamsk13@gmail.com">madhihakhanamsk13@gmail.com</a></div>
            <div><i  class="fa-brands fa-linkedin"></i>
            <a className="id" href="https://www.linkedin.com/in/madhihakhanam13?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">madhihakhanam13</a>
            </div> 
            </div>
            <div className="div_nest2">
            <div>
                <i  class="fa-brands fa-github"></i>
                <a className="id"href="https://github.com/Madhiha13">Madhiha13</a>
            </div>
            <div>
                <i  class="fa-solid fa-phone"> </i>
                <a href="91 6382201873">+91 6382201873</a> 
                </div>
            </div>
              
              </div>
        </div>

   
}
export default Contacts;