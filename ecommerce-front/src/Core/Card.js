import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ShowImage from './ShowImage';
import moment from 'moment';
import { addItem, updateItem, removeItem } from './CartHelpers';

const Card = ({
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
        <li><a  onClick={() => {
          removeItem(product._id);
          setRun(!run); // run useEffect in parent Cart
        }}><i class="fa fa-remove" style={{color:"black"}}></i></a></li>
      )
    );
  };
  return (

    // <div class="col-lg-3 col-md-4 col-sm-6">
        <div class="featured__item">
            <div class="featured__item__pic set-bg" data-setbg="">
              {shouldRedirect(redirect)}
              <ShowImage item={product} url="product" />
                <ul class="featured__item__pic__hover">
                    <li><a><i class="fa fa-heart"></i></a></li>
                    {showViewButton(showViewProductButton)}
                    {showAddToCartBtn(showAddToCartButton)}
                    {showRemoveButton(showRemoveProductButton)}
                    {showCartUpdateOptions(cartUpdate)}
                </ul>
            </div>
            <span>{showStock(product.quantity)}</span>
            <span>
              <div class="featured__item__text">
                  <h6><a>{product.name}</a></h6>
                  <h5>Rs {product.price}</h5>
              </div>
            </span>
        {/* </div> */}
    {/* ------------------------------------------------------------------- */}
    {/* <div className="card ">
      <div className="card-header card-header-1 ">{product.name}</div>
      <div className="card-body">
        {shouldRedirect(redirect)}
        <ShowImage item={product} url="product" />
        <p className="card-p  mt-2">{product.description.substring(0, 100)} </p>
        <p className="card-p black-10">$ {product.price}</p>
        <p className="black-9">Category: {product.category && product.category.name}</p>
        <p className="black-8">Added on {moment(product.createdAt).fromNow()}</p>
        {showStock(product.quantity)}
        <br />

        {showViewButton(showViewProductButton)}

        {showAddToCartBtn(showAddToCartButton)}

        {showRemoveButton(showRemoveProductButton)}

        {showCartUpdateOptions(cartUpdate)}
      </div>
    </div> */}
    </div>
  );
};

export default Card;
