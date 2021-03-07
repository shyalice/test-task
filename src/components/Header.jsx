import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons'

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            menu: [{caption: "home", to: "home"},
                {caption: "about", to: "about"},
                {caption: "contact", to: "contact"},
                {caption: "services", to: "services"}],
            isOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({isOpen: !this.state.isOpen});
    }

    render(){
        return(
            <headder>
                <nav className="nav">
                    <label className="logo">Pokedex App</label>
                    <div className="menu-icon" onClick={this.toggleNav}>
                        <i><FontAwesomeIcon icon={this.state.isOpen ? faTimes : faBars} size="lg" color="#fff" fixedWidth /></i>
                    </div>
                    <ul className={this.state.isOpen ? "nav-menu active" : "nav-menu"}>
                        {this.state.menu.map((item, index) => (
                            <li key={index}>
                                <NavLink activeClassName="active" to={item.to}>{item.caption}</NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </headder>
        )
    }
}

export default Header;