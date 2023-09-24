import React, { Component } from "react";
import Navbar from "./navbar";
import GreenHost from "../assets/img/green_host.png";
import {WebsiteCarbonBadge} from 'react-websitecarbon-badge';
import digitalBeacon from '../assets/img/digitalBeacon.jpg';
import pageSpeed from '../assets/img/pageSpeed.jpg';
import carbonCalculator from '../assets/img/websiteCarbonCalculator.jpg';

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
                    <p className="txt-title">Green Software</p>
                    <p className="txt-paragraph-sustainability">For me it's important to be on this planet and take care of it, with all the complexity it has, seeing my life as a whole and being in harmony with everything that surrounds us. We know that reaching this level in the system in which we live is very difficult but not impossible, steps can be taken and change the way we relate to our environment. Technologies and internet are very polluting and I want to prove to myself that it's possible to generate a minimum impact with the software we develop.</p>
                    <p className="txt-paragraph-sustainability">I have calculated this page with different tools that measure the carbon footprint of web pages and the results of my portfolio are the following:</p>
                </div>
                <div className="ct-green">
                    <img className="img-footprint" src={digitalBeacon} alt="Digital Beacon rate is that this website is amazing when it comes to its carbon footprint" />
                    <img className="img-footprint" src={pageSpeed} alt="page speed insights result" />
                    <img className="img-footprint" src={GreenHost} alt="This website is hosted Green - checked by thegreenwebfoundation.org"/>
                    <div className="ct-websitecarbon">
                        <img className="img-footprint" src={carbonCalculator} alt="website carbon calculator rate" />
                        <WebsiteCarbonBadge url="https://malexgg-github-io-portfolio/" co2="0.03" percentage="97"/>
                    </div>
                    
                    
                </div>
                <div className="ct-divDown"><div className="img-div"></div></div>
            </div>
        );
    }
}

export default Sustainability;