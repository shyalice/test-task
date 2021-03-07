import React from "react";

const PokemonCard = ({name, img, id}) => (
    <div className="pokemon-card">
        <div className="pokemon-id">#{id}</div>
        <div className="pokemon-img">
            <img src={img} alt={name}/>
        </div>
        <h3 className="pokemon-name">{name[0].toUpperCase() + name.slice(1)}</h3>
    </div>
);

export default PokemonCard;