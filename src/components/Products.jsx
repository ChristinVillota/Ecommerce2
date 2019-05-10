import React, {Component} from 'react';
import axios from 'axios';
// import Tables from './Tables';
import Tablerow from './Tablerow';
import '../css/Tablerow.css';

export default class Products extends Component {

  constructor(props) {
    super(props)
    this.state = { 
      products: [
        
      ]
      }
    };
    
componentDidMount() {
  axios.get('http://localhost:8080/OnlineShopping/rest/products')
  .then(response => {
    console.log(response)
    this.setState({products: response.data});
    this.setState({wholecart: []});
  })
}



  tabRow() {
    return this.state.products.map(function(products, i){
      return <Tablerow obj={products} key={i} id={products.pid} />;
    });
  }


  render() {
    return (
      
      
      <center>
        <div className="title">
        <h3 className="title-name">Products</h3>

         <div className="container">
              <table className="table table-striped">
              <thead>
                <tr className="table-head">
                  <td>Name</td>
                  <td>Price</td>
                  <td>Description</td>
                </tr>
              </thead>
              <tbody className="table-body">
              
                {this.tabRow()}
              </tbody>
              </table>
         </div>
         </div> 
          </center>  
    );
  }
}