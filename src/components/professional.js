import React, { Component } from "react";

class Professional extends Component{

    redirect = () => {
        setTimeout (() => {
          return this.props.history.push('/professional-projects');
        }, 7000)
      };

    render(){
        this.redirect();
        return(
            <div className="ct-home">
                <div className="ct-pedagogical">
                    <span>P</span>
                    <span>R</span>
                    <span>O</span>
                    <span>F</span>
                    <span>E</span>
                    <span>S</span>
                    <span>S</span>
                    <span>I</span>
                    <span>O</span>
                    <span>N</span>
                    <span>A</span>
                    <span>L &nbsp;</span>
                    <span>&</span>
                </div>
                <div>
                    <span>P</span>
                    <span>E</span>
                    <span>R</span>
                    <span>S</span>
                    <span>O</span>
                    <span>N</span>
                    <span>A</span>
                    <span>L &nbsp;</span>
                    <span>P</span>
                    <span>R</span>
                    <span>O</span>
                    <span>J</span>
                    <span>E</span>
                    <span>C</span>
                    <span>T</span>
                    <span>S</span>
                </div>
            </div>
        );
    }
}

export default Professional;

