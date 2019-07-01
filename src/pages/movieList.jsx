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
            console.log(err)
        })

    }

    render(){
        return(
            <div className='container mt-5'>   
                <div className='row'>

                    <div className='col-md-3 mycard' >
                        <img src="https://media.21cineplex.com/webcontent/gallery/pictures/156074568118284_452x647.jpg" alt="movie image" width='100%' />
                        <p>Ini Title</p>
                    </div>

                </div>
            </div>
        )
    }
}

export default MovieList;