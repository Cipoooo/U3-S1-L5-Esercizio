import { Component } from "react";


class FilmGallery extends Component {

        state ={
        movies : [],
        loading : false
     }   
    componentDidMount(){
        this.fetchMovies();
    }
fetchMovies = () => {
      fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=78348494&s=${this.props.genre}`,{
      })
      .then(response => response.json())
      .then(data => { 
        if(data.Response === "True"){
            this.setState({movies: data.Search})
        }else{
            console.log('error in resp.ok')
        }
      })
      .catch(e => console.log('errore catch',e))
    }
    render(){
        const{movies} = this.state;

        return(
            <>
        <section className="pt-3 pb-3">
           <div className="container">
           <p style={{ color: 'white' }} className="h4 pb-2">{this.props.title}</p>{/*Non riesco a trovare la proprietà che fa si che le props property siano off*/}
        </div>
        <div className="container d-flex justify-content-start">
          <div className="row gx-2 gy-4">
            {movies && movies.slice(4).map((movie) =>{
                return(
                    <div key={movie.imdbID} className="col-12 gap-1 col-sm-6 col-md-4 col-lg-2">
                        <img src={movie.Poster} style={{width:"100%", minHeight:"200px"}} alt="" id="images"/>
                    </div>
                )
            })}
            </div>
        </div>
        </section>
        </>
        );
    };
};
export default FilmGallery  