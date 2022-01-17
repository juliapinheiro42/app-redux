import React from 'react';
import Routes from './route';
import { Router } from 'react-router-dom';
import Header from './components/Header';
import { Provider } from 'react-redux';

import history from './services/history';
import store from './store';


export default function App() {
 return (
   <div>
     <Provider store={store}>
     <Router history={history}>
     <Header/>
       <Routes/>
     </Router>
     </Provider>
   </div>
 );
}
