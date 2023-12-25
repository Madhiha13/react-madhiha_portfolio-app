import React from "react";
function Profile(){
    const staticImage = require("../components/Profile_img.jpg");
    return (
        <div id="Profile" className="profile-container">
<div className="welcome-info">
    <h2>This  is my Portfolio Website!!</h2>
    <h3>Hi! I'm Madhiha Khanam K-a CS student passionate about front end development.</h3>
</div>
<div className="profile-img">
    <img src={staticImage} alt="" height="200px" width="200px" className="rounded-img"/>
</div>
        </div>
    );
}

export default Profile;