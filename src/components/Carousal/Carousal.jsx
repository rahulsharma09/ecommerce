import React from "react";
import "./Carousal.css";

const Carousal = () => {
  let activeLink = "https://images-eu.ssl-images-amazon.com/images/G/31/img23/IN/OHL/GW/April/BVD/HERO/Unrec/PC_Hero_3000x1200_3_2x._CB592081458_.jpg"
  let imageLinks = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/apratf23/bvdunrec/MA_TSHIRT_3000._CB592117152_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Consumables/AprilBVD/Store/Cons_UnrecPC_hero_3000x1200_Revised._CB592131128_.jpg",
    "https://m.media-amazon.com/images/I/51ovs76vmtL._SX3000_.jpg",
  ];
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100 slide-image"
            src={activeLink}
            alt="First slide"
          />
        </div>
        {imageLinks.map((link, index) => {
          return (
            <div className="carousel-item">
              <img
                className="d-block w-100 slide-image"
                src={link}
                alt="First slide"
              />
            </div>
          );
        })}
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousal;
