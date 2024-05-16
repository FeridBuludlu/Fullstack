import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="First_section">
        <div className="text">
          <h1>
            Finding Your <br /> Perfect Shoes
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.
            Phasellus at iaculis quam. Integer accumsan <br /> tincidunt
            fringilla.
          </p>
          <button>SHOP NOW</button>
        </div>
      </div>
      <div className="container main_first">
        <div className="row">
          <div className="col-4 first_prob">
            <i class="fa-solid fa-truck"></i>
            <div className="first_prob_text">
              <h3>FREE SHIPPING</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.
              </p>
            </div>
          </div>
          <div className="col-4 first_prob">
            <i class="fa-solid fa-rotate-left"></i>
            <div className="first_prob_text">
              <h3>FREE RETURNS</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.
              </p>
            </div>
          </div>
          <div className="col-4 first_prob">
            <i class="fa-solid fa-circle-question"></i>
            <div className="first_prob_text">
              <h3>CUSTOMER SUPPORT</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-4 second_image">
            <img
              src="https://img-lcwaikiki.mncdn.com/mnresize/1020/1360/pim/productimages/20232/6834859/v1/l_20232-w3gy29z8-cvl-78-61-89-180_a.jpg"
              alt=""
            />
            <div className="collection">
              <p>Collection</p>
              <h2>Women</h2>
            </div>
          </div>
          <div className="col-4 second_image">
            <img
              src="https://media.6media.me/media/catalog/product/s/2/s27946z1-fme_5.jpg"
              alt=""
            />
            <div className="collection">
              <p>Collection</p>
              <h2>Children</h2>
            </div>
          </div>
          <div className="col-4 second_image">
            <img
              src="https://media.6media.me/media/catalog/product/l/c/lcw-w12967z8-lsj_a.jpg"
              alt=""
            />
            <div className="collection">
              <p>Collection</p>
              <h2>Men</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="products">
        <h3>Featured Products</h3>
      </div>
      <div className="discount">
        <h3>Big Sale!</h3>
        <div className="container">
          <div className="row">
            <div className="col-6 image">
              <img src="https://preview.colorlib.com/theme/shoppers/images/blog_1.jpg.webp" alt="" />
            </div>
            <div className="col-6 textt">
              <h4>50% less in all items</h4>
              <span>By Carl Smith </span> • <span>September 3, 2018</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Quisquam iste dolor accusantium facere corporis ipsum animi <br /> deleniti fugiat. Ex, veniam?</p>
              <button>SHOP NOW</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
