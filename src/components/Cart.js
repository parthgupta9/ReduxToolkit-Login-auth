import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/Cartslce';
import './cart.css';

const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart.items);
    const handleRemove =(productId) => {
          dispatch(remove(productId))
    }
  return (
    <div >
        <h3 className="main">Cart</h3>
        <div className="cartwrapper">
            {
               products.map((product) => (
                    <div key={product.id} className='cartcard'>
                        <img src={product.images} style={{height:'100px',width:'100px'}}></img>
                        <h5>{product.title}</h5>
                        <h5>{product.description}</h5>
                        <div className="flex">
              <h4>Pricing-{product.price}</h4>
              <h4>Ratings-{product.rating}</h4>
            </div>
                        <button className='bttn' onClick={() => handleRemove(product.id)}>Remove</button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Cart