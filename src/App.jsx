import React, {Component} from "react";
import {BrowserRouter} from "react-router-dom"
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import CardsBlock from "./redux/components/CardsBlock";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./assets/index.scss";
 
class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <div className="wrapper">
                    <Header/>
                    <CardsBlock/>
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