import React, { Component } from "react";
import home from "../assets/img/home.svg";
import tools from "../assets/img/tools.svg";
import projects from "../assets/img/projects.svg";
import green from "../assets/img/green.svg";
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

    goGreen = e => {
        e.preventDefault();
        this.props.history.push("/sustainability");
    }

    render(){
        return(
            <div className="ct-navbar">
                <div className="ct-navbuttons">
                    <button className="bt-ico" onClick={this.goHome}>
                        <img className={this.props.filter} src={home} alt="home button"/>
                        <p className={`${this.props.filter} bt-label left`}>Home</p>
                    </button>
                    
                    <button className="bt-ico" onClick={this.goTools}>
                        <img className={this.props.filter} src={tools} alt="tools and technologies button"/>
                        <p className={`${this.props.filter} bt-label left`}>Tools</p>
                    </button>

                    <button className="bt-ico" onClick={this.goGreen}>
                        <img className={this.props.filter} src={green} alt="sustainability button"/>
                        <p className={`${this.props.filter} bt-label left`}>Sustainability</p>
                    </button>
                </div>
                <div className="ct-navbuttons">
                    <button className="bt-ico" onClick={this.goProjects}>
                        <img className={this.props.filter} src={projects} alt="projects button"/>
                        <p className={`${this.props.filter} bt-label right`}>Projects</p>
                    </button>
                </div>
            </div>
        );
    }
}

export default withRouter(Navbar);


