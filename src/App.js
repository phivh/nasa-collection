import React, { Component, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
//import HomeContainer from './containers/homeContainer'
import './App.scss';

const HomeContainer = lazy(() => import('./containers/homeContainer'));
const SearchContainer = lazy(() => import('./containers/searchContainer'));
const DetailContainer = lazy(() => import('./containers/detailContainer'));
const ModalContainer = lazy(() => import('./containers/modalContainer'));

class App extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={<div>loading...</div>}>
          <Route path="/edit/:id" render={(props) => <ModalContainer {...props} />} />
          <Route path="/add/:id" render={(props) => <ModalContainer {...props} />} />
          <Route path="/search" render={(props) => <SearchContainer {...props} />} />
          <Route path="/detail/:id" render={(props) => <DetailContainer {...props} />} />
          <Route path="/" render={(props) => <HomeContainer {...props} />} />
        </Suspense>
      </div>
    );
  }
}

export default App;
