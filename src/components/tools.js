import React, { Component } from "react";
import Navbar from "./navbar";
import Tool from "./tool";

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
                <Navbar filter="img-ico"/>
                <div className="ct-contentAbout">
                    <p className="txt-title">Technologies and Tools</p>
                    <p className="txt-paragraph">Before studing web development, I have carried out projects empirically linked to programming, as a UX/UI designer, systems conceptualization, and content management. Within the training in front-end and fullstack development that I have carried out at Factoría F5, Barcelona school, we have done pedagogical projects with agile methodologies and applying SOLID concepts developing with TDD and unit tests.<br/> 
                    The technologies and tools that I have been using for development are Adobe Illustrator, Adobe Photoshop, Figma, Trello, Miró, HTML5, CSS3, Bootstrap, Tailwind, Javascript, Jest, Vue.js, Vuex, React.js, Sass, PHP, Laravel, PHPUnit, Xampp, MySQL, Visual Studio Code, Composer, Node.js, Github and more...</p>
                    <Tool/>
                </div>
                <div className="ct-divDown"><div className="img-div"></div></div>
            </div>
        );
    }
}

export default Tools;