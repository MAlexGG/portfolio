import React, { Component } from "react";
import Cards from "./cards";
import data from "../assets/data/pedagogical.json";
import Navbar from "./navbar";

class PedagogicalProjects extends Component{

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

export default PedagogicalProjects;