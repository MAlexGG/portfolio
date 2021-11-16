import React, { Component } from "react";
import Card from "./card";
import EmptyCard from "./emptyCard";

class Cards extends Component{
    render(){
        return(
            <div className="ct-cards">
                <EmptyCard/>
                {this.props.data.projects.map((card, index) => (
                    <Card to={`/project/${index}`} key={index} title={card.title} subtitle={card.subtitle} description={card.description} team={card.team} img={card.img} prototype={card.prototype} website={card.website} repository={card.repository} index={index}></Card>
                )).reverse()}
            </div>
        );
    }
}

export default Cards;