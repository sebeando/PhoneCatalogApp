import React, {Component} from "react";
//Importar Componentes
import Articles from "./Articles";


class PhoneListContainer extends Component{

    render(){

        return(
            <React.Fragment>
                <div id="blog">
                    <div className="center">
                        <div id="content">
                            {/*Listado que vendra desde el api*/}
                            <Articles/>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default PhoneListContainer;