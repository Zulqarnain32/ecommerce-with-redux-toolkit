import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa"
import { useSelector } from 'react-redux'
const Navbar = () => {
  const [pquantity,SetpQuantity] = useState(0)
  const data = useSelector((state) => {
    return state.products;
  });
  useEffect(() => {
    calculateTotalQuantity();
  }, [data]);

  const calculateTotalQuantity = () => {
    let totalQuantity = data.reduce((sum, prod) => sum + prod.qty, 0);
    SetpQuantity(totalQuantity);
  };
  return (
    <>
       <div className="navbar">
           <div className="logo-side"><span className='logo-letter'>Pizza</span> Bank</div>
           <div className="nav-links-side">
              <Link to = "/" className='nav-link'>Home</Link>
              <Link to = "/cart" className='nav-link'><FaShoppingCart /> {pquantity}</Link>
           </div>       
       </div>   
    </>
  )
}

export default Navbar
