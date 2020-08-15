import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://pbs.twimg.com/media/DczThFyX4AAl5Ij.jpg"
          alt="checkoit"
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Basket is Empty</h2>
            <p>
              You have no items in your basket. To buy one or more items, click
              "Add to Basket" next to the item
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Basket</h2>
            <hr />
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      <div className="checkout__right">
        {basket.length > 0 && (
          <div>
            <Subtotal />
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
