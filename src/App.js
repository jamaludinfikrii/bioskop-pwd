import React from 'react';
import Header from './components/header'
import MovieList from './pages/movieList'
import Bebas from './pages/admin/manageMovie'

import { Route } from 'react-router-dom'

import './App.css';

class App extends React.Component {

  render(){
    return (
      <div>
        <Header/>
        <Route exact path='/' component= {MovieList} />
        <Route path='/manage' component={Bebas} />
      </div>
    );
  }
}

export default App;
