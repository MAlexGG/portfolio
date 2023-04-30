import React, { Component } from "react";
import Navbar from "./navbar";
import GreenHost from "../assets/img/green_host.png";
import {WebsiteCarbonBadge} from 'react-websitecarbon-badge';

class Sustainability extends Component{
    goTools = e => {
        e.preventDefault();
        this.props.history.push("/tools");
      }
    
    goProjects = e => {
        e.preventDefault();
        this.props.history.push("/projects");
      }

    render(){
        return(
            <div className="ct-main">
                <div className="ct-divUp"><div className="img-div"></div></div>
                <Navbar filter="img-ico-tools"/>
                <div className="ct-contentAbout">
                    <p className="txt-title">Sustainability</p>
                    <p className="txt-paragraph">For me it is important to be on this planet and take care of it, with all the complexity it has, seeing my life as a whole and being in harmony with everything that surrounds us, we know that reaching this level in the system in which we live is very difficult but not impossible, steps can be taken and change the way we relate to our environment. Technologies together with the internet are very polluting and I want to prove to myself that it is possible to generate a minimum impact with the software we develop.</p> 
                    <p className="txt-paragraph">I have calculated this page with different tools that measure the carbon footprint of web pages and the results of my portfolio are the following:</p>
                </div>
                <div className="ct-green">
                    <img className="img-greenHost " src={GreenHost} alt="This website is hosted Green - checked by thegreenwebfoundation.org"/>
                </div>
               <WebsiteCarbonBadge url="https://malexgg-github-io-portfolio/" co2="0.03" percentage="97"/>
                <div className="ct-divDown"><div className="img-div"></div></div>
            </div>
        );
    }
}

export default Sustainability;