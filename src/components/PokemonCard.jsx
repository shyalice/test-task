import React from "react";
import {Link} from "react-router-dom";
import Sprite from "../components/widgets/Sprite";

const PokemonCard = ({
                        src,
                        name,
                        id,
                        count,
                        page
                    }) => (
    <Link to={`/pokemons/${count}/${id}`} className="pokemon-card">
        <div className="id">#{id.toString().padStart(3,0)}</div>
        <Sprite src={src} alt={name} />
        <h3 className="name">{name[0].toUpperCase() + name.slice(1)}</h3>
    </Link>
);

export default PokemonCard