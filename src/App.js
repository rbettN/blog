import React, { Component } from 'react';
/*Enabling routing by wrapping the part of the application that should be able to render/read
routes with a component (BrowserRouter) we can import from 'react-router-dom' package*/
import { BrowserRouter } from 'react-router-dom';
import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      /*It is possible to use routing in any component wrapped by the wrapping <BrowserRouter> component*/
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
