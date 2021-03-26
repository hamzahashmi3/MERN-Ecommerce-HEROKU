import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ShowImage from '../ShowImage';
import moment from 'moment';
import { addItem, updateItem, removeItem } from '../CartHelpers';


const CartProducts = ({
  product,
  showViewProductButton = true,
  showAddToCartButton = true,
  cartUpdate = false,
  showRemoveProductButton = false,
  setRun = f => f,
  run = undefined
  // changeCartSize
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);

  const showViewButton = showViewProductButton => {
    return (
      showViewProductButton && (
        <Link to={`/product/${product._id}`} className="mr-2">
          <li><a><i class="fa fa-image" style={{color:"black"}}></i></a></li>
        </Link>
      )
    );
  };
  const addToCart = () => {
    // console.log('added');
    addItem(product, setRedirect(true));
  };

  const shouldRedirect = redirect => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const showAddToCartBtn = showAddToCartButton => {
    return (
      showAddToCartButton && (
        <li onClick={addToCart}><a><i class="fa fa-shopping-cart"></i></a></li>
      )
    );
  };

  const showStock = quantity => {
    // console.log("product",quantity)
    return quantity > 0 ? (
      <span className="badge badge-primary badge-pill"> In Stock </span>
    ) : (
      <span className="badge badge-primary badge-pill"> Out of Stock </span>
    );
  };

  const handleChange = productId => event => {
    setRun(!run); // run useEffect in parent Cart
    setCount(event.target.value < 1 ? 1 : event.target.value);
    if (event.target.value >= 1) {
      updateItem(productId, event.target.value);
    }
  };

  const showCartUpdateOptions = cartUpdate => {
    return (
      cartUpdate && (
        <div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Adjust Quantity</span>
            </div>
            <input type="number" className="form-control" value={count} onChange={handleChange(product._id)} />
          </div>
        </div>
      )
    );
  };
  const showRemoveButton = showRemoveProductButton => {
    return (
      showRemoveProductButton && (
        <a className="icon_close" onClick={() => {
          removeItem(product._id);
          setRun(!run); // run useEffect in parent Cart
        }}></a>
      )
    );
  };
  return (
    <div>
         <thead>
            <tr>
                <th className="shoping__product">Products</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Remove</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="shoping__cart__item">
                    {shouldRedirect(redirect)}
                    <ShowImage item={product} url="product" style = {{width:"101px", height:"100px"}}/>
                    <h5 className="pt-1">{product.name}</h5>
                </td>
                <td className="shoping__cart__price">
                    Rs {product.price}
                </td>
                <td className="shoping__cart__quantity">
                    <div className="quantity">
                    {showCartUpdateOptions(cartUpdate)}
                    </div>
                </td>
                <td className="shoping__cart__item__close">
                    <span >{showRemoveButton(showRemoveProductButton)}</span>
                </td>
            </tr>
            
        </tbody></div>
  );
};

export default CartProducts;
