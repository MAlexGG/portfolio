import React, { Component } from "react";
import home from "../assets/img/home.svg";
import tools from "../assets/img/tools.svg";
import back from "../assets/img/back.svg";

class Navbar extends Component{

    goHome = e => {
        e.preventDefault();
        this.props.history.push("/");
      }

    goTools = e => {
        e.preventDefault();
        this.props.history.push("/tools");
      }
    
    /* goBack = e => {
        e.preventDefault();
        this.props.history.push("/tools");
      } */

    render(){
        return(
            <div className="ct-navbar">
                <div className="ct-navbuttons">
                    <button className="bt-ico" onClick={this.goHome}>
                        <img className={this.props.filter} src={home} alt="home button"/>
                    </button>
                    <button className="bt-ico">
                        <img className={this.props.filter} src={tools} alt="tools and technologies button"/>
                    </button>
                </div>
                <button className="bt-ico">
                    <img className={this.props.filter} src={back} alt="go back button"/>
                </button>
            </div>
        );
    }
}

export default Navbar;