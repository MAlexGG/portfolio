import React, { Component } from "react";
import ProjectInfo from "./projectInfo";

class ProjectsInfo extends Component{

    render(){
        return(
            <div className="ct-cards">
                {this.props.data.pedagogical.map((card, index) => (
                    <ProjectInfo key={index} title={card.title} description={card.description} index={index}></ProjectInfo>
                ))}
            </div>
        );
    }
}

export default ProjectsInfo;