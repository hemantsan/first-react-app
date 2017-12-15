import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {qty: 0};
        this.buyNow = this.buyNow.bind(this);
        this.show = this.show.bind(this);
    }

    show() {
        this.props.handleShow(this.props.name);
    }

    buyNow() {
        this.setState({
            qty: this.state.qty + 1
        });
    }

    render() {
        return (
                <div class="col-sm-4">
                    <h3>{this.props.name} | 15,999 INR</h3>
                    <button class="btn btn-light btn-sm mb-2" onClick={this.buyNow}>Buy Now</button> 
                    <button class="btn btn-light btn-sm mb-2 ml-2" onClick={this.show}>Show</button>
                    <h5>Qty : {this.state.qty}</h5>
                </div>
            );
        }
    }

export default App;
