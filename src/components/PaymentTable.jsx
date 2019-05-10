import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PaymentTable extends Component { 

    render() {
        return ( 

<center>

 <div className="container">
      <table className="table table-striped">
      <thead>
        <tr className="table-head">
        <th className='user-table-cell'>NAME</th>
                        <th className='user-table-cell'>EMAIL</th>
                        <th className='user-table-cell'>ADDRESS</th>
                        <th className='user-table-cell'>CITY</th>
                        <th className='user-table-cell'>STATE</th>
                        <th className='user-table-cell'>PAYMENT TYPE</th>
                        <th className='user-table-cell'>CARD NAME</th>
                        <th className='user-table-cell'>CARD NUMBER</th>
                        <th className='user-table-cell'>EXPIRATION DATE</th>
                        <th className='user-table-cell'>Delete Payment</th>
        </tr>
      </thead>
      <tbody className="table-body">
      {
                        this.props.paymentList.map((payment, id) =>{
                            return (
                                <tr className='user-table-row'>
                                  
                                    <th className='user-table-cell'>{payment.fullName}</th>
                                    <th className='user-table-cell'>{payment.email}</th>
                                    <th className='user-table-cell'>{payment.address}</th>
                                    <th className='user-table-cell'>{payment.city}</th>
                                    <th className='user-table-cell'>{payment.state}</th>
                                    <th className='user-table-cell'>{payment.paymentType}</th>
                                    <th className='user-table-cell'>{payment.cardName}</th>
                                    <th className='user-table-cell'>{payment.cardNum}</th>
                                    <th className='user-table-cell'>{payment.expDate}</th>
                                    <th className='user-table-cell'><button type='button' onClick={() => this.props.deletePayment(payment.id)}>Delete</button></th>
                                </tr>
                            )
                    })
                    }
      </tbody>
      </table>
 </div>

  </center>  
        );
    }
}

PaymentTable.propTypes = {
    deletePayment: PropTypes.func,
    paymentList: PropTypes.func
}

export {
    PaymentTable
}