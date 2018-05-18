import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Form.css';

import axios from 'axios';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imgUrl: '',
            productname: '',
            price: 0,
            isEditing: false,
            selectedProductId: 0
        }
        this.clear = this.clear.bind(this);
        this.saveProduct = this.saveProduct.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.createProduct = this.createProduct.bind(this);
    }

    componentDidMount() {
        if(this.props.match.path === '/edit/:id'){
            this.getProductForEdit();
        }else if(this.props.match.url === '/add'){
            this.clear();
        }
    }

    componentDidUpdate(){
        if(this.props.match.url === '/add' && this.state.isEditing === true){
            this.clear();
        }
    }

    getProductForEdit(){
        if (this.props.match.params.id > 0) {
            axios.get(`/api/inventory/${this.props.match.params.id}`).then(response => {
                this.setState({
                    imgUrl: response.data[0].img,
                    productname: response.data[0].productname,
                    price: response.data[0].price,
                    isEditing: true,
                    selectedProductId: response.data[0].product_id,
                })
            }).catch(err => console.log('Error retrieving specific product: ', err))
        } 
    }

    handleChange(e) {
        let name = e.target.name;
        let value = e.target.value;

        this.setState({
            [name]: value
        });
    }

    clear() {
        this.setState({
            imgUrl: '',
            productname: '',
            price: 0,
            selectedProductId: 0,
            isEditing: false
        });
    }

    saveProduct(id) {
        let body = {
            img: this.state.imgUrl,
            productname: this.state.productname,
            price: this.state.price,
        }
        return axios.put(`/api/product/${id}`, body).then(response => {
            this.clear();
        }).catch(err => console.log('Error sending changes to product: ', err));
    }

    createProduct() {
        let body = {
            img: this.state.imgUrl,
            productname: this.state.productname,
            price: this.state.price,
        }
        return axios.post(`/api/product/`, body).then(response => {
            this.clear();
        }).catch(err => console.log('Error sending created product: ', err));
    }

    render() {
        return (
            <div className="form-space">

                <div className='form'>

                    <div className='top-form'>
                        <div className='photo'> <img className='photoview' src={this.state.imgUrl || ''} alt='preview'></img></div>
                    </div>

                    <div className='middle-form'>
                        <div className='input-title'>Image URL:</div>
                        <input name='imgUrl' className='img-input' value={this.state.imgUrl || ''} onChange={e => this.handleChange(e)} />

                        <div className='input-title'>Product Name:</div>
                        <input name='productname' className='name-input' value={this.state.productname || ''} onChange={e => this.handleChange(e)} />

                        <div className='input-title'>Price:</div>
                        <input name='price' className='price-input' value={this.state.price || 0} onChange={e => this.handleChange(e)} />
                    </div>

                    <div className='bottom-form'>
                        <div className='cancel-btn' onClick={() => this.clear()}><Link to='/'>Cancel</Link></div>
                        {this.state.isEditing ? <div className='addto-btn' onClick={() => this.saveProduct(this.state.selectedProductId)}><Link to='/'>Save Changes</Link></div> : <div className='addto-btn' onClick={() => this.createProduct()}><Link to='/'>Add to Inventory</Link></div>}
                    </div>
                </div>

            </div>
        )
    }
}

export default Form;