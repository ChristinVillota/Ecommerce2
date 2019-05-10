import React, { Component } from 'react';
import '../css/Tablerow.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FaApple from 'react-icons/lib/fa/apple';


class Tablerow extends Component { 

    constructor(props) {
        super(props)

        this.state = {
            id: '',
            cart: {
                pname: '',
                price: ''
            },
            tempCart: [],
            wholecart: []
        }
       
        this.addToCart = this.addToCart.bind(this);
    };


    addToCart(event)
    {        
        // let tempcart = this.state.tempCart;
        let cart = this.state.cart;

        cart.pname = this.props.obj.pname;
        cart.price = this.props.obj.price;

        // this.state.tempCart.push(cart);
        this.state.wholecart.push(cart);

        this.setState({
            wholecart: [
                ...this.state.wholecart,
                cart
            ]
        });
        // console.log(event.target.dataset.id);
        // <Cart id={this.state.id} />
        //    this.set(this.state.id)

        console.log(cart);
        // console.log(this.state.wholecart);
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

        // this.setState({id: this.props.id});

        this.setState.id = this.props.id;
        // console.log(this.state.id);

        return (
       
            <tr >
                <td>
                    {this.props.obj.pname}
                </td>
                <td>
                     P {this.props.obj.price}
                </td>  
                <td>
                <Button onClick={this.toggleModal.bind(this)}>
                
                        <FaApple className="my-icon"/>
                     
                </Button>
                <Modal isOpen={this.state.modalIsOpen}>
                <ModalHeader toggle={this.toggleModal.bind(this)}>{this.props.obj.pname}</ModalHeader>
                <ModalBody>
                <center>
                    <img src="https://cnet3.cbsistatic.com/img/neLbs059DWMEZSz0j9VEGLY2s1w=/2018/09/17/84430c77-b39e-48bd-b3ed-752e4b54ea43/07-iphone-xs-and-iphone-xs-max.jpg"
                 alt="iphoneX" width="445" height="250"/>
                    
                    <div className="text-box">
                         {this.props.obj.pdesc}
                    </div></center>
                </ModalBody>
                <ModalFooter>
                    {/* <Button color="primary" id={this.props.id} onClick={this.addToCart}>Add to Cart</Button> */}
                    <Button color="primary" id={this.props.id} onClick={this.addToCart}>Add to Cart</Button>
                    <Button color="secondary" onClick={this.toggleModal.bind(this)}>Back</Button>
                </ModalFooter>
                </Modal>
                    {/* <button className="fas fa-cart-plus" onClick ={this.addToCart} /> */}
                </td> 
                
            </tr>
           
            
        );
    }
}

export default Tablerow;
