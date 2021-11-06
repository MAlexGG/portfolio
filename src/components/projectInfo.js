import React, { Component } from "react";

class ProjectInfo extends Component{
    handleClick = () => {
        this.props.toggle();
    };
    
    render(){
        return(
            <div className="ct-projectInfo">
                <div className="ct-home">
                    <p className="" onClick={this.handleClick}>x</p>
                    <p>I'm A Pop Up!!!</p>
                </div>
            </div>
        );
    }
}

export default ProjectInfo;