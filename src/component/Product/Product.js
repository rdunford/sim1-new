import React from 'react';
import {Link} from 'react-router-dom';
import './Product.css';

export default function Product(props) {
    return (
        <div className='product'>
            <div className='product-left'>
                <img className='product-image' src={props.item.img} alt='preview'/> 
            </div>

            <div className='product-right'>
            <div className='right-top'>
                <div className='product-title'>{props.item.productname}</div>
                <div className='product-price'>${props.item.price}</div>
            </div>

            <div className='right-bottom'>
                <div className='delete-btn' onClick={()=> props.deleteProduct(props.item.product_id)}>Delete</div>
                <div className='edit-btn'><Link to={`/edit/${props.item.product_id}`}>Edit</Link></div>
            </div>

            </div>

        </div>
    )
}