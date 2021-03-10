import React, {Component} from "react";
import {NavLink, Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons'

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            menu: [{caption: "home", to: "home"},
                {caption: "about", to: "about"},
                {caption: "contact", to: "contact"}],
            isOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
        this.wrapperRef = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            this.setState({isOpen: false});
        }
    }

    toggleNav(){
        this.setState({isOpen: !this.state.isOpen});
    }

    render(){
        return(
            <nav className="nav" ref={this.wrapperRef}>
                <div className="logo" onClick={() => this.setState({isOpen: false})}>
                    <Link to="/home">Pokedex</Link>
                </div>
                <div className="menu-icon" onClick={this.toggleNav}>
                    <i><FontAwesomeIcon icon={this.state.isOpen ? faTimes : faBars} size="lg" color="#fff" fixedWidth /></i>
                </div>
                <ul className={this.state.isOpen ? "nav-menu active" : "nav-menu"}>
                    {this.state.menu.map((item, index) => (
                        <li key={index}>
                            <NavLink activeClassName="active" to={`/${item.to}`} onClick={this.toggleNav}>{item.caption}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        )
    }
}

export default Header;