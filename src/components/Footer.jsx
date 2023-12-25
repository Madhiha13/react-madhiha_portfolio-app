import React from "react";
function Footer(){
    const currentDate=new Date();
    const currentYear=currentDate.getFullYear();
    return <div className="footer-container">
       <p>Copyright @ {currentYear}</p> 
    </div>
}

export default Footer;