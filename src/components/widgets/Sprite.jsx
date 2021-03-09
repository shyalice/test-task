import React, {Component} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';

class Sprite extends Component{
    constructor(props){
        super(props);
        this.state = {
            loaded: false
        }
        this.onImgLoaded = this.onImgLoaded.bind(this);
    }

    onImgLoaded(){
        this.setState({loaded: true})
    }
        
    render(){
        return(
            <div className="img">
                <img src={this.props.src} alt={this.props.alt} onLoad={this.onImgLoaded}/>
                {!this.state.loaded && (
                    <div className="loading">
                        <FontAwesomeIcon icon={faSpinner} size="lg" fixedWidth spin />
                    </div>
                )}
            </div>
        )
    }
}

export default Sprite;