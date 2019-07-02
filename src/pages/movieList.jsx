import React from 'react'
import Axios from 'axios'


class MovieList extends React.Component{
    state = {data : []}
    
    componentDidMount(){
        this.getDataMovies()
    }

    getDataMovies = () => {
        Axios.get('http://localhost:2000/movies')
        .then((res) => {
            this.setState({data : res.data})
        })
        .catch((err) => {
            alert('masuk')
        })

    }

    renderMovieJsx = () => {
        var jsx = this.state.data.map((val) => {
            return(
                <div className='col-md-3 m-2 mycard' >
                    <img src={val.image} alt="movie" width='100%' />
                    <div className='title ml-3 mt-2'>{val.title} </div>
                    <div className='lang ml-3 mt-2'> {val.sutradara}</div>
                    <div className='genre ml-3 mb-3 mt-2'> {val.genre} </div>
                </div>
            )
        })

        return jsx
    }

    render(){
        console.log(this.state.data)
        return(
            <div className='container mt-5'>   
                <div className='row justify-content-center'>

                {this.renderMovieJsx()}

                

                </div>
            </div>
        )
    }
}

export default MovieList;