import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import CardsBlock from "./redux/components/CardsBlock";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./assets/index.scss";
 
class App extends Component{
    render(){
        return(
            <>
                <Header/>
                <CardsBlock/>
                <Footer/>
            </>
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