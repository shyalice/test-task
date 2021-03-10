import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import CardsBlock from "../redux/containers/CardsBlock";
import About from "./About";
import Contact from "./Contact";
import PokemonInfo from "./PokemonInfo";
 
const Routing = () => (
    <Switch>
        <Route path="/home" component={CardsBlock}/>
        <Route path="/about" exact component={About}/>
        <Route path="/contact" exact component={Contact}/>
        <Route path={`/pokemons/:count/:id`} exact component={PokemonInfo}/>
        <Redirect exact from="/" to="/home"/>
    </Switch>
);

export default Routing;