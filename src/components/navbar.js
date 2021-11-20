import React, { Component } from "react";
import home from "../assets/img/home.svg";
import tools from "../assets/img/tools.svg";
import back from "../assets/img/back.svg";
import projects from "../assets/img/projects.svg";
import {withRouter} from 'react-router-dom';


class Navbar extends Component{

    goHome = e => {
        e.preventDefault();
        this.props.history.push("/aboutme");
    }

    goTools = e => {
        e.preventDefault();
        this.props.history.push("/tools");
    }

    goProjects = e => {
        e.preventDefault();
        this.props.history.push("/projects");
    }

    goBack = e => {
        e.preventDefault();
        this.props.history.goBack();
    }

    render(){
        return(
            <div className="ct-navbar">
                <div className="ct-navbuttons">
                    <button className="bt-ico" onClick={this.goHome}>
                        <img className={this.props.filter} src={home} alt="home button"/>
                    </button>
                    
                    <button className="bt-ico" onClick={this.goTools}>
                        <img className={this.props.filter} src={tools} alt="tools and technologies button"/>
                    </button>
                </div>
                <div className="ct-navbuttons">
                    <button className="bt-ico" onClick={this.goProjects}>
                        <img className={this.props.filter} src={projects} alt="projects button"/>
                    </button>
                    <button className="bt-ico" onClick={this.goBack}>
                        <img className={this.props.filter} src={back} alt="go back button"/>
                    </button>
                </div>
            </div>
        );
    }
}

export default withRouter(Navbar);


