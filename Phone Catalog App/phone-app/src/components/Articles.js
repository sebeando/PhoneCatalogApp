import react, {Component} from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

class Articles extends Component{

    state = {
        articles: [],
        status: null
    }

    //Cargar antes de todo
    componentWillMount(){
        this.getArticles();
    }

    getArticles = () =>{
        axios.get("http://localhost:3900/api/articles")
        .then(res => {
            this.setState({
                articles: res.data.articles,
                status: 'success'
            });
        });
    }

    render(){

        if(this.state.articles.length >= 1){
            var listArticles = this.state.articles.map((article) =>{
                if(article._id === "62196191a01aa0d2964f3da4"){
                    return(
                        <article className="article-item" id="article-template">
                            <div className="image-wrap">
                            <img src={'http://localhost:3900/api//get-image/' + article.image} alt={article.image} />
                            </div>
    
                            <div className="cont">
                                <h1 key={article._id} className="subheader">Buy {article.title}</h1>
                                <h2>From {article.price}</h2>
                                <h3>{article.description}</h3>
                                <h4>Color: {article.color}</h4>

                                <button id="bt1">
                                    <NavLink to="/PhoneDetailComponent">Quick View</NavLink>
                                </button>
                            </div>
    
                            <div className="clearfix"></div>
                        </article>
                    );
                }
                if(article._id === "621961d9a01aa0d2964f3da7"){
                    return(
                        <article className="article-item" id="article-template">
                            <div className="image-wrap">
                            <img src={'http://localhost:3900/api//get-image/' + article.image} alt={article.image} />
                            </div>
    
                            <div className="cont">
                                <h1 key={article._id} className="subheader">Buy {article.title}</h1>
                                <h2>From {article.price}</h2>
                                <h3>{article.description}</h3>
                                <h4>Color: {article.color}</h4>
                                <button id="bt2">
                                    <NavLink to="/PhoneDetailComponent2">Quick View</NavLink>
                                </button>
                            </div>
    
                            <div className="clearfix"></div>
                        </article>
                    );
                }
            });

            return(
                <div id="articles">
                    {listArticles}
                </div>
            );

        }else if(this.state.articles.length === 0 && this.state.status === 'success'){
            return(
            <div id="articles">
                <h2 className="subheader">No hay articulos que mostrar</h2>
            </div>
            );
        }else{
            return(
                <div id="articles">
                    <h2 className="subheader">Loading...</h2>
                </div>
                );
        }
    }
}

export default Articles;