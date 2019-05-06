import React, { Component } from 'react';
import '../css/Tablerow.css';

class Tablerow extends Component {
   
    
    render() {
        return (
            
            <tr>
                <td>
                    {this.props.obj.pname}
                </td>
                <td>
                    {this.props.obj.pdesc}
                </td>
                <td>
                     {this.props.obj.price}
                </td>  
                <td>
                    <button className="fas fa-cart-plus" onClick ={this.addToCart} />
                </td> 
            </tr>
            
        );
    }
}

export default Tablerow;
