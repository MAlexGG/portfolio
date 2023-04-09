import React, { Component } from "react";
import Navbar from "./navbar";

class Projects extends Component{

    goPedagogical = e => {
        e.preventDefault();
        this.props.history.push("/pedagogical");
      }

    goProfessional = e => {
        e.preventDefault();
        this.props.history.push("/professional");
      }

    render(){
        return(
            <div className="ct-main">
                <Navbar filter="img-ico-tools" />
                <div className="ct-divUp"><div className="img-div"></div></div>
                <div className="ct-contentProjects">
                    <button className="bt-ctProjects" onClick={this.goPedagogical}>Pedagogical Projects</button>
                    <button className="bt-ctProjects" onClick={this.goProfessional}>Professional & Personal Projects</button>
                </div>
                <div className="ct-divDown"><div className="img-div"></div></div>
            </div>
        );
    }
}

export default Projects;



