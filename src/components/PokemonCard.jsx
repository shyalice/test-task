import React, {Component} from "react";
import {Link} from "react-router-dom";

class PokemonCard extends Component{
    render(){
        return(
            <Link to={`/pokemon/${this.props.id}`} className="pokemon-card">
                <div className="pokemon-id">#{this.props.id.toString().padStart(3,0)}</div>
                <div className="pokemon-img">
                    <img src={this.props.img} alt={this.props.name}/>
                </div>
                <h3 className="pokemon-name">{this.props.name[0].toUpperCase() + this.props.name.slice(1)}</h3>
            </Link>
        )
    }
}

export default PokemonCard