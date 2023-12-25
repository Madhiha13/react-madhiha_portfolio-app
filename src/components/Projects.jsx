import React from "react";
function Projects(){
    const staticImage=require("../components/project1_img.PNG");
    const staticImage1=require("../components/project2_img.PNG");
    const staticImage2=require("../components/project3_img.PNG");
    return (<div id="Projects" className="Projects-container">
                  <h2> MY PROJECTS..!</h2>
       <div className="project">
          
           <img src={staticImage} alt="" height="220px" width="220px"  className="project-img">
           </img>
           <p> <h2> SATVIZ</h2>
           Real-time satellite tracking using PyGLet and PyEphem in Python. 
           Fetches TLE data from www.celestrak.com. 
           Interactive UI with orbit visualization. </p>
       </div>
       <div className="project">
        
        <img src={staticImage1} alt="" height="200px" width="200px" className="project-img"/>
        <p> <h2>My Portfolio</h2>
        Developed a dynamic and interactive portfolio website showcasing my skills and projects.
         Built with React for a seamless user experience, the portfolio features HTML and CSS 
         for structure and styling, and JavaScript for added interactivity.</p>
       </div>
       <div className="project">
       
       <img src={staticImage2} alt="" height="200px" width="200px" className="project-img"/>
       <p><h2>LCMST</h2>
       Developed a Java-based solution for the Least Cost Minimum Spanning Tree (LCMST) problem, 
       optimizing network connectivity by finding the most economical route through a graph.
       </p>
       </div>
    </div>);
}

export default Projects;