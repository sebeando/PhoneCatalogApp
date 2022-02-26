import React,{Component} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from './components/Header';
import PhoneListContainer from "./components/PhoneListContainer";
import PhoneDetailComponent from "./components/PhoneDetailComponent";
import PhoneDetailComponent2 from "./components/PhoneDetailComponent2";

class Router extends Component{
    render(){
        return(
            <BrowserRouter>
                    <Header/>
                    {/*Rutas*/}
                    <Routes>
                        <Route exact path="/" element={<PhoneListContainer/>}></Route>
                        <Route exact path="/PhoneListContainer" element={<PhoneListContainer/>}></Route>
                        <Route exact path="/PhoneDetailComponent" element={<PhoneDetailComponent/>}></Route>
                        <Route exact path="/PhoneDetailComponent2" element={<PhoneDetailComponent2/>}></Route>

                    </Routes>

            </BrowserRouter>
        );
    }
}

export default Router;