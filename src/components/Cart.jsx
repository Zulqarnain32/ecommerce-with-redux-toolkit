import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import { incrProduct, decrProduct, removeProduct } from '../store/slice/UserSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const [pquantity,SetpQuantity] = useState(0)
  const data = useSelector((state) => {
    return state.products;
  });

  useEffect(() => {
    // Calculate total quantity after each render
    calculateTotalQuantity();
  }, [data]);
  const handleIncrement = (id) => {
    dispatch(incrProduct(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrProduct(id));
  };

  const handleRemove = (id) => {
    dispatch(removeProduct(id));
  };

  const calculateTotalPrice = () => {
    return data.reduce((total, prod) => {
      return total + prod.price * prod.qty;
    }, 0);
  };
  const calculateTotalQuantity = () => {
    let totalQuantity = data.reduce((sum, prod) => sum + prod.qty, 0);
    SetpQuantity(totalQuantity);
  };
 

  return (
    <div className="cart-container">
      {data.map((prod, id) => (
        <div key={id} className="cart-product">
          <img src={prod.img} alt={prod.name} />
          <h2 className="cart-p-name">{prod.name}</h2>
          <div className="incr-btn" onClick={() => handleIncrement(prod.id)}>
            +
          </div>
          <div className="prod-qty">{prod.qty}</div>
          <div className="decr-btn" onClick={() => handleDecrement(prod.id)}>
            -
          </div>
          <h2 className="cart-p-price">RS {prod.price * prod.qty}.00</h2>
          <div className="del-cart-btn" onClick={() => handleRemove(prod.id)}>
            <FaTrash />
          </div>
        </div>
      ))}
      <div className="cart-summary">
        <div className="total-price">Total: {calculateTotalPrice()}</div>
         <p>total Quantity {pquantity}</p>
      </div>
    </div>
  );
};

export default Cart;
