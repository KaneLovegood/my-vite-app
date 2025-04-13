import React, { useState } from "react";
import welcomeImage2 from "../assets/Image 73.png";
import welcomeImage3 from "../assets/Image 93.png";
import "../css/Dialog.css";

const slides = [
  {
    title: "Discover Chefify",
    description:
      "Easy and delicious cooking instructions right here. Start exploring now!",
    image: welcomeImage2,
  },
  {
    title: "Cook Like a Pro",
    description:
      "Learn from expert chefs and master the art of cooking with our detailed recipes.",
    image: welcomeImage2,
  },
  {
    title: "Join Our Community",
    description:
      "Share your recipes, connect with other food lovers, and explore new cuisines!",
    image: welcomeImage3,
  },
];

const Dialog = ({ isOpen, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!isOpen) return null;

  const handleNext = () => {
    if (currentSlide === slides.length - 1) {
      onClose(); 
    } else {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  return (
    <div className="dialog-overlay">
      <div className="dialog">
        <button className="close-button" onClick={onClose}>
          ×
        </button>

        <div className="dialog-content">
          <h2>{slides[currentSlide].title}</h2>
          <p>{slides[currentSlide].description}</p>

          <div className="dialog-image">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="slide-image"
            />
          </div>

          <div className="dialog-navigation">
            <div className="dots">
              {slides.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${currentSlide === index ? "active" : ""}`}
                  onClick={() => setCurrentSlide(index)}
                ></span>
              ))}
            </div>
            <button className="next-button" onClick={handleNext}>
              {currentSlide === slides.length - 1 ? "Get Started" : "Next"}
            </button>
          </div>
          <button className="skip-button" onClick={onClose}>
            Skip
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
