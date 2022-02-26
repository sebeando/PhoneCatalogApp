import React, {Component} from "react";
import { NavLink } from "react-router-dom";
//import logo from '../assets/img/react.svg';
import logo from '../logo.svg';

class Header extends Component{

    render(){
        return(
            <header id="header">
            <div className="center">
                {/*Logo*/}
                <div id="logo">
                <img src={logo} className="App-logo" alt="logo" />
                    <span id="brand">
                        <strong>Phone</strong>App
                    </span>
                </div>
            </div>
        </header>
        );
    }
}

export default Header;