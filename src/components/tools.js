import React, { Component } from "react";
import Navbar from "./navbar";

class Tools extends Component{
    goTools = e => {
        e.preventDefault();
        this.props.history.push("/tools");
      }
    
    goProjects = e => {
        e.preventDefault();
        this.props.history.push("/projects");
      }

    render(){
        return(
            <div className="ct-main">
                <div className="ct-divUp"><div className="img-div"></div></div>
                <Navbar filter="img-ico-tools"/>
                <div className="ct-contentAbout">
                    <p className="txt-title">Technologies and Tools</p>
                    <p className="txt-paragraph">I have studied several bootcamps and courses. I learned to do projects with agile methodologies and applying SOLID developing with TDD, unit and feature tests. Also I completed a certificate in UX Design, and now I'm studing Green Digital Skills because green codign is something that I'm interested in.</p> 
                    <p className="txt-paragraph">The tools that I have been using for UX/UI are Adobe Illustrator, Adobe Photoshop, Figma, Adobe XD. For agile methodologies are Trello, Miró, Bitbucket. The technologies for develoment that I work on are HTML5, CSS3, Bootstrap, Tailwind, Sass, Javascript, React.js, Styled Components, Vue, PHP, Laravel, MySQL, Composer, Node.js, Axios, Json-server and more... For testing I use Jest, React Library Testing, PHPUnit, Mock Service Worker and almost all of my projects are in Github.</p>
                </div>
                <div className="ct-divDown"><div className="img-div"></div></div>
            </div>
        );
    }
}

export default Tools;