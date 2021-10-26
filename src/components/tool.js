import React, { Component } from "react";
import data from "../assets/data/tools.json";

class Tool extends Component{
    render(){
    const tools = data.tools;
    const img = imageName => (require(`../assets/img/logos/${imageName}`).default);
        return(
            <div className="ct-tools">
                {tools.map((tool, index) => (
                <a key={index} className="a-tool" href={tool.website} rel="noreferrer" target="_blank"><img className="img-logo" src={img(tool.src)} alt={tool.name}/></a>
                ))}
            </div>
        );
    }
}

export default Tool;
