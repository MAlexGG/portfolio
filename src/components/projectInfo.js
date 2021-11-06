import React, { Component } from "react";

class ProjectInfo extends Component{
    render(){
        const {data} = this.props.location;
        return(
            <div className="ct-projectInfo">
                <h2>{data.title}</h2>
                <p>{data.description}</p>
            </div>
        );
    }
}

export default ProjectInfo;