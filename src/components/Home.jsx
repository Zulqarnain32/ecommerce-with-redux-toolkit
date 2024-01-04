import React from 'react'
import { food } from './Foods'
import { useDispatch } from 'react-redux'
import { addProduct } from '../store/slice/UserSlice';

const Home = () => {
  const dispatch = useDispatch();

  const handleAddProduct = (id) => {
    // console.log("add btn clicked");
    dispatch(addProduct(food[id]));  // Pass the entire product object
  }
  return (
    <div className='home-container'>
       {
        food.map((product,id) => (
          <div key={id} className='single-product-container'>
            <img src={product.img} />
              <h4>{product.name}</h4>
              <p>{product.desc.slice(0,140)}</p>
              <h5>RS {product.price}.00</h5>
              <button className='add-btn' onClick={() => handleAddProduct(id)}>Add To Cart</button>
          </div> 
        ))
       }
    </div>
  )
}

export default Home
 