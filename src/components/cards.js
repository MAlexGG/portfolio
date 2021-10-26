import React, { Component } from "react";
import Card from "./card";
import EmptyCard from "./emptyCard";

class Cards extends Component{
    render(){
        return(
            <div className="ct-cards">
                {this.props.data.projects.map((card, index) => (
                    <Card key={index} title={card.title} subtitle={card.subtitle} description={card.description} prototype={card.prototype}   website={card.website} repository={card.repository} index={index}></Card>
                ))}
                <EmptyCard/>
            </div>
        );
    }
}

export default Cards;