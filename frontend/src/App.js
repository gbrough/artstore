import React from 'react';
import { BroswerRouter } from 'react-router-dom';
import Product from './components/Product';
import data from './data';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">Art Store</a>
        </div>
        <div>
        <a href="/cart">Cart</a>   
            <a href="/signin">Login</a>         
        </div>
      </header>
      <main>
        <Route path="/product/:id" component={Product} ></Route>
        <Route path="/" component={HomeScreen} exact> </Route>
        <div>
          <div className="row center">
              {data.products.map(product => (
                <Product key={product._id} product={product}></Product>
                ))}
          </div>
        </div>
      </main>
      <footer className="row center"> All rights reserved. </footer>
    </div>
  </BrowserRouter>
  );
}

export default App;
