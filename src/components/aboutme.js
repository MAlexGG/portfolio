import React, { Component } from "react";
import refresh from "../assets/img/refresh.svg";
import contact from "../assets/img/contact.svg";
import linkedin from "../assets/img/linkedin.svg";
import cv from "../assets/img/cv.svg";
import pdf from "../assets/pdf/CV_Galarza_Gallardo_EN.pdf";
import github from "../assets/img/github.svg";

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

    render() {
        return (
            <div className = "ct-main" >
                <div className="ct-divUp">
                    <div className="img-div"></div>
                </div>
                <div className="ct-navAbout">
                    <div className="ct-ico-about">
                        <img className="img-refresh" src={refresh} alt="refresh button" onClick={this.goHome} />
                        <p className="bt-label-about left">refresh</p>
                    </div>
                   <div className="ct-navContact">
                        <div className="ct-navContactBlock">
                            <div className="ct-ico-about">
                                <a href="mailto:alexandragalarzag@gmail.com" target="_blank" rel='noopener noreferrer'><img className="img-contact" src={contact} alt="contact button" onClick={this.goMail} /></a> 
                                <p className="bt-label-about right">e-mail</p>
                            </div>
                            <div className="ct-ico-about">
                                <a href="http://www.linkedin.com/in/magalarza" target="_blank" rel='noopener noreferrer'><img className="img-contact" src={linkedin} alt="linkedin profile" /></a>
                                <p className="bt-label-about right">linked-in</p>
                            </div>
                        </div>
                        <div className="ct-navContactBlock">
                            <div className="ct-ico-about">  
                                <a href={pdf} target="_blank" rel="noopener noreferrer" download="CV_Galarza_Gallardo_EN.pdf"><img className="img-contact" src={cv} alt="resume in pdf for download" /></a>
                                <p className="bt-label-about right">resume</p>
                            </div>
                            <div className="ct-ico-about">
                                <a href="https://github.com/MAlexGG" target="_blank" rel='noopener noreferrer'><img className="img-contact" src={github} alt="github link" /></a>
                                <p className="bt-label-about right">github</p>
                            </div>
                        </div>
                   </div>
                </div>
                <div className = "ct-contentAbout">
                    <p className="txt-title">About Me</p>
                    <p className="txt-paragraph">Hi! I'm Alexandra and I'm a Fullstack developer creative and with initiative, interested in the world of programming, I'm passionate about solving problems in an efficient way and with a lot of emphasis on detail, I have more than 10 years of experience as an architect which gives me extensive knowledge in design and user experience, in addition to my studies in UX Design and sustainability that allow me to understand current problems in a global way.< br />With these knowledge, skills and the <button className="bt-tools" onClick={this.goTools}><strong>tools</strong></button> I handle I feel that I can contribute to the needs of society through programming.</p>
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