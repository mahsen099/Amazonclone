import React from "react";
import Product from "../Product/Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="slider">
          <figure className="sliderbox">
        </figure>
        </div>
        <div className="home__row">
          <Product
            id="12321346"
            title="Pierre-Emerick Aubameyang Arsenal F.C Kids Home Soccer Jersey"
            price={111.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51yqLC6%2BW3L._AC_SL1000_.jpg"
          />
          <Product
            id="49538054"
            title="Inverting The Pyramid: The History of Soccer Tactics"
            price={39.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/719tEQtuWsL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="4903857"
            title="Samsung Galaxy Watch Active 2 (40mm, GPS, Bluetooth) Smart Watch with Advanced Health Monitoring, Fitness Tracking, and Long lasting Battery"
            price={299.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/51bSW9gjoaL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903837"
            title="Barcelona F.C Home Football Soccer T-Shirt Jersey (Lionel Messi 10)"
            price={199.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51iQ85prahL._AC_SL1000_.jpg"
          />
           <Product
            id="4903837"
            title="Face Mask,Pack of 50 Disposable Face Masks,Masks for Women"
            price={20.39}
            rating={3}
            image="https://m.media-amazon.com/images/I/61wGgebyKUL._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="23445934"
            title="Apple iPhone XS Max, 64GB, Gold - For T-Mobile"
            price={698.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81yMd8xSFAL._AC_UY327_QL65_.jpg"
          />
          <Product
            id="3254354349"
            title='Microsoft Surface Laptop 3 – 13.5" Touch-Screen – Intel Core i7 – 16GB Memory - 256GB Solid State Drive (Latest Model)'
            price={1200.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71sW0+vlWHL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829335"
            title="SAMSUNG 85-inch Class QLED Q60T Series - 4K UHD Dual LED Quantum HDR Smart TV with Alexa Built-in"
            price={2094.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/81fkfrkmjSL._AC_UY327_FMwebp_QL65_.jpg"
          />
           <Product
            id="90832335"
            title="3MP Security Camera Outdoor, Dragon Touch 8CH NVR 4pcs Wireless Security Cameras System with Color Night Vision, Cameras for Home Security, AI Human Detection, Remote Access, Waterproof, No Hard Disk"
            price={194.18}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61lj5FPuVwL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90839335"
            title="Sither 13 Pcs Women Rings Set Knuckle Rings Gold Bohemian Rings for Girls Vintage Gem Crystal Rings Joint Knot Ring Sets for Teens Party Daily Fesvital Jewelry Gift(style3)"
            price={294.98}
            rating={5}
            image="https://m.media-amazon.com/images/I/61+2r53-mxL._AC_UL480_FMwebp_QL65_.jpg"
          />
           <Product
            id="90833235"
            title="Vooray 23L Ultra-Durable Flex Cinch Gym Drawstring Backpack Sackpack for Women"
            price={180.58}
            rating={4}
            image="https://m.media-amazon.com/images/I/61McwJDUt8L._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="90833235"
            title="Premium Roses| Real Roses That Last a Year | Fresh Flowers| Roses in a Box (Black Box, Small)"
            price={150.58}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71kgZ4gVIcL._SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
