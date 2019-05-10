import React, { Component } from 'react'
import '../css/payment.css';
import axios from 'axios';
import { PaymentForm } from './PaymentForm';
import { PaymentTable } from './PaymentTable';
// import {Link} from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FaChevronCircleUp from 'react-icons/lib/fa/chevron-circle-up';

export default class PaymentMethod extends Component {
constructor (props) {
  super (props)
  this.state = {
    paymentList: [],

    payment: {
    payid: '',
    fullName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    paymentType: '',
    cardName: '',
    cardNum: '',
    expDate: ''
  }
};
  // this.handleSubmit = this.handleSubmit.bind(this)
}

  handleChangeInfo = e => {
    const {name, value} = e.target;

    this.setState((prevState) => ({
      payment: {
        ...prevState.payment,
        [name]: value
      }
    }));
  }

  handleAddPayment = pay => {
        
    let payment = this.state.payment;
    let paymentList = [...this.state.paymentList];

    paymentList.push(payment);
    this.setState({paymentList : paymentList});

    pay.preventDefault();

    console.log("POST");
    console.log(payment);

    let headers = {'Content-Type' : 'application/json',}
    
    axios.post('http://localhost:8080/OnlineShopping/rest/paymentmethod', payment, {headers: headers}).then(res => {
      console.log(res.data);
    });
  }
  

  deletePayment = rowIndex => {

    let paymentList = [...this.state.paymentList];

    paymentList.splice(rowIndex, 1);

    this.setState({paymentList: paymentList});

    axios.delete(`http://localhost:8080/OnlineShopping/rest/paymentmethod${rowIndex}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }


    state = {
      visible: true,
      modalIsOpen: false
    }
    toggleAlert() {
      this.setState({
        visible: ! this.state.visible
      });
    }
    toggleModal() {
      this.setState({
        modalIsOpen: ! this.state.modalIsOpen
      });
    }
  render() {
    return (
      
      <div className="App">
        
          <div className='forms-panel'>
          <br></br>
          <center> <h2>PAYMENT METHOD</h2></center>
            <PaymentForm 
              handleChangeInfo={this.handleChangeInfo} 
              handleAddPayment={this.handleAddPayment} 
            />
          </div>
          <br/>
          <div className='table-panel'>   
            <PaymentTable paymentList={this.state.paymentList} deletePayment={this.deletePayment} />
          </div>


        <center>
        <Button onClick={this.toggleModal.bind(this)}>
                
                <FaChevronCircleUp width="20" height="30"/> &nbsp; Continue Checkout
             
        </Button>

        <Modal isOpen={this.state.modalIsOpen}>
        <ModalHeader toggle={this.toggleModal.bind(this)}>Order Status</ModalHeader>
        <ModalBody>
        <center>
            {/* <img src="https://cnet3.cbsistatic.com/img/neLbs059DWMEZSz0j9VEGLY2s1w=/2018/09/17/84430c77-b39e-48bd-b3ed-752e4b54ea43/07-iphone-xs-and-iphone-xs-max.jpg" */}
         {/* alt="iphoneX" width="445" height="250"/> */}
            
            <div className="text-box">
                <h3>Information sent!</h3>
                <h5>Your order is being processed!</h5>
            </div></center>
        </ModalBody>
        <ModalFooter>
            
            <Button color="secondary" onClick={this.toggleModal.bind(this)}>Close</Button>
        </ModalFooter>
        </Modal>

         {/* <Link to="/checkout">
              <btn type="btn" class="btn btn-sm">Checkout</btn>
         </Link> */}
         </center>
      </div>

    );
  }
}