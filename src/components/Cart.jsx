import React, { Component } from 'react';
import '../css/Cart.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productList: [],
            products: {
                pname: '',
                price: ''
            },
        count: 1,
        total: 2,
        isInCash: false
      }
      this.handleClick=this.handleClick.bind(this)
      this.handleClick2=this.handleClick2.bind(this)
    }

    handleClick(){
       this.setState(prevState => {
           return {
               count: prevState.count + 1           
            }
       })
    }

    handleClick2() {
        if(this.setState.count===1){
            this.setState.count= 1
        } else {
            this.setState(prevState => {
                return {
                    count: prevState.count - 1
                }
            })
        }
    }
    handleTotal(){
        const {count}=this.state.count
        this.setState(prevTotal =>{
            return {
                total: count + prevTotal
            }
        })
    }

      componentDidMount() {
        axios.get('http://localhost:8080/OnlineShopping/rest/products')
        .then(response => {
          console.log(response)
          this.setState({products: response.data});
        })
      }

    render() {

        return (
            
            <div className='cart-body'> 
            <br></br>
                <div className='container'>  
                    <div className="row">
                        <div className="column">
                        <center>
                            <h2>My Cart</h2>
                            <button onClick={this.handleClick2}>-</button> {this.state.count} &nbsp;
                            <button onClick={this.handleClick}>+</button> &nbsp;
                            <button>Delete</button>


                            {/* <h3>{this.props.pid}</h3> */}
                        </center>
                        
                        </div>
                        <div className="column">

             <center>
             <h2>Total:</h2>
            <div className="btn-btn">
            <Link to="/paymentmethod">
            <button type="button" class="btn btn-sm">Payment</button>
             </Link>
             </div>

             </center>

                 </div>
                 
            </div>  
            
     </div>
                    
 </div>
           
           
        );
    }
}


export default Cart;