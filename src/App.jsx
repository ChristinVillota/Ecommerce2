import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Cart from './components/Cart';
// import PaymentMethod from './components/PaymentMethod';

function App() {
  return (
    <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/cart" component={Cart} />
          {/* <Route path="/paymentmethod" component={[PaymentMethod]} /> */}
        </Switch>
      </React.Fragment>
  );
}

export default App;
