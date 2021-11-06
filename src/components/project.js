import React, { Component } from "react";

class Project extends Component{
    render(){
        const {data} = this.props.location;
        const loadImage = image => (require(`../assets/img/ui/${data.img}`).default);
        return(
            <div className="ct-project">
                <div className="ct-projectImg">
                    <img className="" src={loadImage("image.jpg")} alt="design UI"/> 
                </div>
                <div>
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                </div>
            </div>
        );
    }
}

export default Project;