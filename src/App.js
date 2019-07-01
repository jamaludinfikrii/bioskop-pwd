import React from 'react';
import Header from './components/header'
import MovieList from './pages/movieList'

import { Route } from 'react-router-dom'

import './App.css';

class App extends React.Component {

  render(){
    return (
      <div>
        <Header/>
        <Route path='/' component= {MovieList} />
      </div>
    );
  }
}

export default App;
