import React, { Component } from 'react'

export default class Total extends Component {
    constructor(props) {
        super (props);
    }

  render() {
      let total = this.props.total.toFixed(2);
     
      let myStyle = {
          borderTop: "1px solid red",
          marginTop: "10px"
      };

    return (
      <div style= {{"marginTop": "30px", "backgroundColor": "gray", "padding": "10px"}}>
        <h3 className="row" style={{ fontWeight:400}}>
        <span className="col-6">Total Price</span>
        <span className="col-6 text-right">P{total}</span></h3>
      </div>
    )
  }
}
