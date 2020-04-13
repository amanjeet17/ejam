import React from 'react';
import './App.css';
import Container from './component/container'
import { Provider } from 'react-redux';
import store from './store';


const App =(props)=> {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}

export default App;
