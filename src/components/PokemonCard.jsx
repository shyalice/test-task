import React, {Component} from "react";
import {Link} from "react-router-dom";
import Sprite from "../components/widgets/Sprite";

const PokemonCard = ({
                        src,
                        name,
                        id
                    }) => (
    <Link to={`/pokemon/${id}`} className="pokemon-card">
        <div className="pokemon-id">#{id.toString().padStart(3,0)}</div>
        <Sprite src={src} alt={name} />
        <h3 className="pokemon-name">{name[0].toUpperCase() + name.slice(1)}</h3>
    </Link>
);

export default PokemonCard