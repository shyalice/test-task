import React, {Component} from "react";
import {BrowserRouter} from "react-router-dom"
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import Routing from "./components/Routing";
import Header from "./redux/containers/Header";
import Footer from "./components/Footer";
import "./assets/index.scss";
 
class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <div className="wrapper">
                    <Header/>
                    <div className="container">
                        <Routing/>
                    </div>
                    <Footer/>
                </div>  
            </BrowserRouter>
        );
    }
}
const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);