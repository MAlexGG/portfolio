import React, { Component } from "react";
import refresh from "../assets/img/refresh.svg";
import contact from "../assets/img/contact.svg";

class Aboutme extends Component {

    goTools = e => {
        e.preventDefault();
        this.props.history.push("/tools");
    }

    goProjects = e => {
        e.preventDefault();
        this.props.history.push("/projects");
    }

    goHome = e => {
        e.preventDefault();
        this.props.history.push("/");
    }

    goHome = e => {
        e.preventDefault();
        this.props.history.push("/");
    }

    render() {
        return (
            <div className = "ct-main" >
                <div className="ct-divUp">
                    <div className="img-div"></div>
                </div>
                <div className="ct-navAbout">
                   <img className="img-refresh" src={refresh} alt="refresh button" onClick={this.goHome} />
                    <a href="mailto:alexandragalarzag@gmail.com"><img className="img-contact" src={contact} alt="contact button" onClick={this.goMail} /></a> 
                </div>
                
                <div className = "ct-contentAbout">
                    <p className="txt-title">About Me</p>
                    <p className="txt-paragraph">I 'm a Fullstack developer creative and with initiative, interested in the world of programming, I'm passionate about solving problems in an efficient way and with a lot of emphasis on detail, I have more than 10 years of experience as an architect which gives me extensive knowledge in design and user experience, in addition to my studies in sustainability that allow me to understand current problems in a global way.< br />With these knowledge, skills and the <button className="bt-tools" onClick={this.goTools}><strong>tools</strong></button> I handle I feel that I can contribute to the needs of society through programming.</p>
                    <button className="bt-projects" onClick={this.goProjects}>Projects</button>
                </div >
                <div className="ct-divDown">
                    < div className="img-div"></div>
                </div>
            </div>
        );
    }
}

export default Aboutme;