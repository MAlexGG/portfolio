import React, { Component } from "react";
import back from "../assets/img/back.svg";

class NotFound extends Component {

    goBack = e => {
        e.preventDefault();
        this.props.history.goBack();
    }

    render() {
        return (
            <div className="ct-home">
                <button className = "bt-ico bt-notFoundBack" onClick = { this.goBack }>
                    <img className = "img-icoInvert" src = { back } alt = "go back button" />
                </button>
                <div className="ct-notFound">
                    <p className="txt-notFound">Page not found</p>
                    <p className="txt-error" > error 404 </p>
                </div>
                
            </div>
        );
    }
}

export default NotFound;