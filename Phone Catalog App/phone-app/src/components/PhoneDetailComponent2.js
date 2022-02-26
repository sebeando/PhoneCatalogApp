import React, {Component} from "react";
//Importar Componentes
import ArticlesInfo2 from "./ArticlesInfo2";



class PhoneDetailComponent2 extends Component{

    render(){

        return(
            <React.Fragment>
                <div>
                    <div className="center">
                        <div id="content">
                            <ArticlesInfo2/>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default PhoneDetailComponent2;