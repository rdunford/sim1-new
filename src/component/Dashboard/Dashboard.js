import React, { Component } from 'react';
import './Dashboard.css';
import axios from 'axios';
import Product from '../Product/Product';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inventoryList: []
        }

        this.deleteProduct = this.deleteProduct.bind(this);
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: `/api/inventory/`
        }).then(res => {
            this.setState({
                inventoryList: res.data
            })
        }).catch(err => console.log('Error retrieving products ->', err));
    }

    getInventory() {
        return axios({
            method: 'get',
            url: `/api/inventory/`
        }).then(res => {
            this.setState({
                inventoryList: res.data
            })
        }).catch(err => console.log('Error retrieving products ->', err));
    }

    deleteProduct(id) {
        axios.delete(`/api/product/${id}`).then(response => {
            this.setState({
                inventoryList: response.data
            })
        }).catch(err => console.log('Error sending delete request: ', err));
    }

    render() {
        let products = this.state.inventoryList.map((element, index) => {
            return (
                <Product item={element} key={index} deleteProduct={this.deleteProduct} />
            )
        })
        return (
            <div className='dashboard'>
                {products}
            </div>
        )
    }
}

export default Dashboard;