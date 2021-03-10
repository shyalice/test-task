import React, {Component} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom"

class SearchPokemon extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: ""
        }
        this.onInput = this.onInput.bind(this);
    }

    onInput(value){
        this.setState({value: value})
    }

    handleKeyPress(event){
        switch(event.key){
            case 'Enter':
                if(!!this.state.value) document.location.replace(`/pokemons/${this.props.count}/${parseInt(this.state.value, 10)}`);
                break;
            default:
                break;
        }
    }

    render(){
        return(
            <div className="search-block">
                <input
                    className="search"
                    type="number"
                    placeholder="Type here the ID of pokemon"
                    onChange={e => this.onInput(e.target.value)}
                    onKeyDown={e => this.handleKeyPress(e)}/>
                {!!this.state.value && (
                    <Link className="search-ico" to={`/pokemons/${this.props.count}/${parseInt(this.state.value, 10)}`}>
                        <FontAwesomeIcon icon={faSearch} size="lg" fixedWidth />
                    </Link>
                )}
            </div>
        )
    }
}


export default SearchPokemon;