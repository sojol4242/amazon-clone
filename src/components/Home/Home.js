import React from "react";
import Product from "../Product/Product";
import "./home.css";
import fakeData from "../../fakeData";
import Carousel from "react-bootstrap/Carousel";
function Home() {
  const data1 = fakeData.slice(0, 2);
  const data2 = fakeData.slice(2, 5);
  const data3 = fakeData.slice(5, 7);

  const homeSlider = [
    {
      img:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg",
      interval: 1500,
    },
    {
      img:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg",
      interval: 3000,
    },
    {
      img:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg",
      interval: 2000,
    },
    {
      img:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg",
      interval: 2000,
    },
    {
      img:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg",
      interval: 2000,
    },
  ];

  return (
    <div id="home" className="home">
      <div className="home-container">
      <Carousel className="home-image">
          {homeSlider.map((slider, idx) => (
            <Carousel.Item key={idx} interval={slider.interval}>
              {/* <strong className="text-white pt-5">
                <span style={{ color: " #ff9d09" }}>{slider.text}</span>
              </strong> */}
              {/* <img
                className="carousel-img-height d-block w-50 mx-auto my-5 img-fluid"
                src={slider.img}
                alt={slider.name}
              /> */}
              <img className="home-image" src={slider.img} alt="banner" />
            </Carousel.Item>
          ))}
        </Carousel>
        {/* <img
          className="home-image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          alt="banner"
        /> */}
        <div className="home-row">
          {data1.map((product) => (
            <Product product={product} />
          ))}
        </div>
        <div className="home-row">
          {data2.map((product) => (
            <Product product={product} />
          ))}
        </div>
        <div className="home-row">
          {data3.map((product) => (
            <Product product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
