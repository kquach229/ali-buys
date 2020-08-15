import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/101a6e64048273.5ac52bda04c3a.jpg"
        alt="image__home"
      />
      <div className="home__products">
        <div className="home__productsRow">
          <Product
            id="123123450"
            title="Call of Duty, Modern Warfare"
            price={56.99}
            rating={5}
            image="https://cdn.cdkeys.com/500x706/media/catalog/product/c/o/cod-modern-warfare-std-xbox-one-cd-keys.jpg"
          />
          <Product
            id="123123451"
            title="Xbox One"
            price={199.99}
            rating={4}
            image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6415/6415222_sd.jpg;maxHeight=640;maxWidth=550"
          />
          <Product
            id="123123452"
            title="Pro Display XDR"
            price={119.99}
            rating={4}
            image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5999/5999003_sd.jpg;maxHeight=640;maxWidth=550"
          />
        </div>
        <div className="home__productsRow">
          <Product
            id="1231234532"
            title="The Backpack - Sand Nylon"
            price={186.99}
            rating={5}
            image="https://assets.awaytravel.com/spree/products/10251/original/p.jpeg?format=webp&quality=75&width=2400"
          />
          <Product
            id="123123458"
            title="Simple Desk"
            price={196.99}
            rating={3}
            image="https://images.homedepot-static.com/productImages/f9fab5b1-7a15-4d44-adb6-d4785170daf8/svn/oak-structure-tvilum-writing-desks-80122ak-64_600.jpg"
          />
        </div>
        <div className="home__productsRow">
          <Product
            id="1231234599"
            title="Sole F63 Treadmill"
            price={956.99}
            rating={5}
            image="https://ik.imagekit.io/solefitness/WebImages/tr:w-700,q-100/F63_right-new-2020.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
