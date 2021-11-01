import React, { Component } from "react";

class Pedagogical extends Component{

    redirect = () => {
        setTimeout (() => {
          return this.props.history.push('/pedagogical-projects');
        }, 9000)
      };

    render(){
        this.redirect();
        return(
            <div className="ct-home">
                <div className="ct-pedagogical">
                    <span>P</span>
                    <span>E</span>
                    <span>D</span>
                    <span>A</span>
                    <span>G</span>
                    <span>O</span>
                    <span>G</span>
                    <span>I</span>
                    <span>C</span>
                    <span>A</span>
                    <span>L</span>
                </div>
                <div>
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

export default Pedagogical;