import React, {Component} from "react";
//Importar Componentes
import ArticlesInfo from "./ArticlesInfo";



class PhoneDetailComponent extends Component{

    render(){

        return(
            <React.Fragment>
                <div>
                    <div className="center">
                        <div id="content">
                            <ArticlesInfo/>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default PhoneDetailComponent;