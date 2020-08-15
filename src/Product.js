import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

const Product = ({ id, title, image, price, rating }) => {
  const [dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => {
              return (
                <p>
                  <img
                    src="https://m.media-amazon.com/images/G/01/imdb/images/plugins/imdb_star_22x21-2889147855._CB466680980_.png"
                    alt="star"
                  />
                </p>
              );
            })}
        </div>
      </div>
      <img src={image} alt="item__image" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
