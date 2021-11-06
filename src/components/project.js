import React, { Component } from "react";
import close from "../assets/img/close.svg";

class Project extends Component{

    goBack = e => {
        e.preventDefault();
        this.props.history.goBack();
    }

    render(){
        const {data} = this.props.location;
        const loadImage = image => (require(`../assets/img/ui/${data.img}`).default);
        return(
            <div className="ct-project">
                <button className="bt-ico bt-projectClose" onClick={this.goBack}><img className="img-ico" src={close} alt="close button" /></button>
                <div className="ct-projectImg">
                    <img className="img-projectImg" src={loadImage("image.jpg")} alt="design UI"/> 
                </div>
                <div className="ct-projectTxt">
                    <h2 className="txt-projectTitle">{data.title}</h2>
                    <p className="txt-projectDesc">{data.description}</p>
                </div>
            </div>
        );
    }
}

export default Project;