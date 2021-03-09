import React, {Component} from "react";

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
                    <div>loading</div>
                )}
            </div>
        )
    }
}

export default Sprite;