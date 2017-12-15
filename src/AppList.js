import React, { Component } from 'react';
import App from './App';
import HeaderComponent from './Header/HeaderComponent';

class AppList extends Component {
    constructor() {
        super();
        this.state = {productList: [
                {name: "Motorola Moto G5s", price: "12,999"},
                {name: "New Nokia 6", price: "16,999"},
                {name: "OnePlus 5t - Star Wars Edition", price: "32,999"}
            ]
        };
    }

    showProduct(name) {
        alert('you selected ' + name + '.');
    }

    render() {
        var self = this;
        var products = this.state.productList.map((product) => {
            return (
                <App name={product.name} handleShow={self.showProduct}/>
            );
        });
        return (
            <div>
                <HeaderComponent/>
                <div class="row">
                    {products} 
                </div>  
            </div>
        );
    }
}

export default AppList;