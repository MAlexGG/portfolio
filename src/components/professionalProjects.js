import React, { Component } from "react";
import Navbar from "./navbar";
import Cards from "./cards";
import data from "../assets/data/professional.json";

class ProfessionalProjects extends Component{

    state = {
        projects: data
    }

    render(){
        return(
            <div className="ct-projects">
                <Navbar filter="img-icoInvert"/>
                <div className="ct-divUp"><div className="img-divInvert"></div></div>
                <Cards data={this.state.projects}/>
                <div className="ct-divDown"><div className="img-divInvert"></div></div>
            </div>
        );
    }
}

export default ProfessionalProjects;