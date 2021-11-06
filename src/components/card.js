import React, { Component } from "react";
import { Link } from "react-router-dom";

class Card extends Component{

    constructor(props) {
        super(props);
        this.state = {
            close: true,
        };
    }

    flip = () => {
        this.setState({
            close: !this.state.close,
        });
    };

    render(){
        const {close} = this.state;
        let data = this.props;
        return(
            <div className={close ? "flip-container" : "flip-container clicked"} onClick={this.flip}>
                <div className="flipper">
                    <div className="front">
                        <h3 className="txt-titleCard">{this.props.title}</h3>
                        <p className="txt-card">{this.props.subtitle}</p>
                    </div>
                    <div className="back">
                        <Link to={{pathname: this.props.to, data: data}}>
                            <button className="bt-info">i</button>
                        </Link>

                        {this.props.prototype ? <a className="a-card" href={this.props.prototype} rel="noreferrer" target="_blank">
                        <button className="bt-cardStroke">PROTOTYPE</button></a> : <button className="bt-cardStrokeOops">PROTOTYPE NOT READY</button>}

                        {this.props.website ? <a className="a-card" href={this.props.website} rel="noreferrer" target="_blank"><button className="bt-cardFill">WEBSITE</button></a> : <button className="bt-cardFillOops">WEBSITE NOT READY</button>}
                
                        {this.props.repository ? <a className="a-card" href={this.props.repository} rel="noreferrer" target="_blank"><button className="bt-cardStroke">REPOSITORY</button></a> : <button className="bt-cardStrokeOops">REPOSITORY NOT READY</button>}
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;


