import React, { Component } from 'react'
import axios from 'axios';
import Forms from './Forms'

export default class Products extends Component {
  constructor(props) {
    super(props)
    this.state = { paymentmethod: [],
  }
 }

componentDidMount(){
  axios.get('http://localhost:8080/OnlineShopping/rest/paymentmethod')
  .then(response => {
    console.log(response)
    this.setState({paymentmethod: response.data})
  })
}


  render() {
      
    return (
      
      <center>
        <form>
            <h2>PAYMENT METHOD</h2>  
            <div className="payment-form">
                <label for="payid">Payment ID</label>
                <div className="col-75">
                    <select name="payid" onChange={this.props.handleChangeInfo} className="form-control">
                    {paymentmethod}
                    </select>
                </div>
            </div>
        </form>    
      </center>  
    );
  }
}