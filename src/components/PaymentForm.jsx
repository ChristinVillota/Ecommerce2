import React, { Component } from 'react'
import PropTypes from 'prop-types';
import FaCcVisa from 'react-icons/lib/fa/cc-visa';
import FaCcPaypal from  'react-icons/lib/fa/cc-paypal';
import FaCcMastercard from 'react-icons/lib/fa/cc-mastercard';
import '../css/payment.css';

 class PaymentForm extends Component {
  render() {
    return (

            <div className="row">
            <div className="col-75">
            <br></br>
            <div className="container">
                <form>
                <div className="row">
                    <div className="col-50">
                        <h3>Billing Address</h3>
                        <label for="shortname"><i className="fa fa-user"></i> Full Name </label>
                        <input type="text" name="fullName" placeholder="Christin Villota" onChange={this.props.handleChangeInfo} />

                        <label for="email"><i class="fa fa-envelope"></i> Email</label>
                        <input type="text" name="email" placeholder="tin@example.com" onChange={this.props.handleChangeInfo} />

                        <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
                        <input type="text" name="address" placeholder="2430 Leyte St." onChange={this.props.handleChangeInfo} />

                        <label for="city"><i class="fa fa-institution"></i> City</label>
                        <input type="text" name="city" placeholder="Manila" onChange={this.props.handleChangeInfo} />

                    <div className="row">
                        <div className="col-50">
                            <label for="state">State</label>
                            <input type="text" name="state" placeholder="Philippines" onChange={this.props.handleChangeInfo} />
                        </div>
                    </div>
                    </div>

                    <div className="col-50">
                    <h3>Payment</h3>

                    <label for="ptype">Payment Type</label>
                    <input type="text" name="paymentType" placeholder="Cash, Card, Paypal" onChange={this.props.handleChangeInfo} />

                    
                        <label for="fname">If Card: Accepted Cards</label>
                        <div className="icon-container">
                        <FaCcVisa /> &nbsp;
                        <FaCcPaypal /> &nbsp;
                        <FaCcMastercard />
                        </div>

                        <label for="cname">Name on Card</label>
                        <input type="text" name="cardName" placeholder="Christin Villota" onChange={this.props.handleChangeInfo} />

                        <label for="ccname">Card/Paypal Number</label>
                        <input type="text" name="cardNum" placeholder="1111-2222-3333-4444" onChange={this.props.handleChangeInfo} />

                        <label for="expdate">Expriration Date</label>
                        <input type="text" name="expDate" placeholder="2020-12-12" onChange={this.props.handleChangeInfo} />
                    </div>
                </div>

                <button className="payment-button" type="btn" onClick={this.props.handleAddPayment}>Add</button>
                </form>
            </div>
            </div>
            </div> 
    
    )
  }
}

PaymentForm.propTypes = {
    handleChangeInfo: PropTypes.func,
    handleAddPayment: PropTypes.func
}

export {
    PaymentForm
}

