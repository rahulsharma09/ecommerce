import React, { useEffect } from "react";
import "./MultipleCard.css";
import { useState } from "react";

const MultipleCard = ({ multipleItemProducts }) => {
  const [card, setCard] = useState(multipleItemProducts);
  useEffect(() => {
    setCard(card);
  }, []);
  return (
    <div className="multiple-section">
      {card.map((elem, index) => {
        return (
          <div className="multiple-card mb-4" key={index}>
            <h5 className="mb-3">{elem.title}</h5>
            <div className="item-section">
              {elem.images.map((image, count) => {
                return (
                  <div className="image-div">
                    <img className="multiple-image" src={image.link} alt="" />
                    <p>{image.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MultipleCard;
