import React from "react";
import { Star, StarFill } from "react-bootstrap-icons";
import { Link, useParams } from "react-router-dom";
import authorAvatar from "../assets/avatar.png";
import banhDau from '../assets/banhDau.png';
import button from "../assets/Button 96.png";
import recipes from '../data/recipes.json';

const CookingGuide = () => {
  const { id } = useParams();
  const recipe = recipes.recipes.find(r => r.id === parseInt(id)) || recipes.recipes[0];

  // Function to get image source
  const getImageSource = (imagePath) => {
    try {
      if (imagePath === "../assets/banhDau.png") return banhDau;
      if (imagePath === "../assets/avatar.png") return authorAvatar;
      return banhDau; // Default image
    } catch (error) {
      console.error("Error loading image:", error);
      return banhDau; // Fallback to default image
    }
  };

  return (
    <div className="container mt-4">
      {/* Breadcrumb */}
      <div className="d-flex flex-row align-items-center gap-2 mb-4">
        <span>Home</span>
        <img src={button} alt="arrow" style={{ width: "20px", height: "20px" }} />
        <Link className="text-decoration-none" style={{color: "#ff69b4"}}>Cooking guide</Link>
      </div>

      <div className="row">
        {/* Left Column - Recipe Info */}
        <div className="col-md-6">
          <h1 className="mb-4 fw-bold" style={{ fontSize: '2.5rem' }}>{recipe.title}</h1>
          
          <p className="text-muted">
            {recipe.description}
          </p>

          {/* Author Info */}
          <div className="d-flex align-items-center gap-3 mb-4">
            <img 
              src={getImageSource(recipe.author.avatar)}
              alt={recipe.author.name} 
              className="rounded-circle"
              style={{ width: "40px", height: "40px", objectFit: "cover" }}
            />
            <span>{recipe.author.name}</span>
            <button 
              className="btn rounded-pill" 
              style={{ 
                borderColor: '#ff69b4', 
                color: '#ff69b4',
                '&:hover': {
                  backgroundColor: '#ff69b4',
                  color: 'white'
                }
              }}
            >
              <i className="bi bi-bookmark"></i>
            </button>
          </div>

          {/* Recipe Meta Info */}
          <div className="d-flex gap-5 mb-4">
            <div>
              <p className="text-muted mb-1">Time:</p>
              <p className="fw-bold">{recipe.time}</p>
            </div>
            <div>
              <p className="text-muted mb-1">Notes</p>
              <p className="fw-bold">{recipe.notes} community notes</p>
            </div>
            <div>
              <p className="text-muted mb-1">Rating</p>
              <div className="d-flex">
                {[...Array(5)].map((_, index) => (
                  index < recipe.rating ? 
                    <StarFill key={index} className="text-warning" /> : 
                    <Star key={index} className="text-warning" />
                ))}
              </div>
            </div>
          </div>

          {/* Ingredients */}
          <div className="p-4 border rounded mb-4 bg-white" style={{ borderColor: '#eee' }}>
            <h3 className="mb-3 fw-bold">Ingredients</h3>
            <ul className="list-unstyled">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="mb-2">- {ingredient}</li>
              ))}
            </ul>
            <button 
              className="btn rounded-pill w-100" 
              style={{ 
                backgroundColor: '#ff69b4', 
                color: 'white',
                '&:hover': {
                  backgroundColor: '#ff1493'
                }
              }}
            >
              Add to Your Grocery List
            </button>
          </div>
        </div>

        {/* Right Column - Steps */}
        <div className="col-md-6">
          <div className="steps-container">
            {recipe.steps.map((step, index) => (
              <div key={index} className="step-item mb-5">
                <img 
                  src={getImageSource(step.image)}
                  alt={`Step ${index + 1}`} 
                  className="img-fluid rounded mb-4"
                  style={{ width: "100%", height: "auto" }}
                />
                <h3 className="mb-4 fw-bold" style={{ color: '#333' }}>{step.title}</h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="mb-4 fw-bold">Cooking Notes</h3>
        <div className="form-group">
          <textarea 
            className="form-control" 
            rows="4" 
            placeholder="Share your thoughts about this recipe"
            style={{ resize: 'none' }}
          ></textarea>
          <div className="text-end mt-3">
            <button 
              className="btn" 
              style={{ 
                backgroundColor: '#ff69b4', 
                color: 'white',
                paddingLeft: '2rem',
                paddingRight: '2rem'
              }}
            >
              Send
            </button>
          </div>
        </div>

        <div className="d-flex gap-4 border-bottom mb-4">
          <button className="btn border-0 position-relative pb-2" style={{ color: '#ff69b4', borderBottom: '2px solid #ff69b4' }}>
            All Notes ({recipe.comments.length})
          </button>
          <button className="btn border-0 text-muted pb-2">
            Most Helpful (20)
          </button>
          <button className="btn border-0 text-muted pb-2">
            Private (1)
          </button>
        </div>

        {/* Comments List */}
        <div className="comments-list">
          {recipe.comments.map((comment, index) => (
            <div key={index} className="d-flex gap-3 mb-4">
              <img 
                src={getImageSource(comment.avatar)} 
                alt={comment.author} 
                className="rounded-circle" 
                style={{ width: "40px", height: "40px" }} 
              />
              <div className="flex-grow-1">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h6 className="mb-0">{comment.author}</h6>
                  <span className="text-muted small">{comment.time}</span>
                </div>
                <p className="mb-2">{comment.content}</p>
                <div className="d-flex gap-3">
                  <button className="btn btn-sm text-muted p-0">
                    <i className="bi bi-hand-thumbs-up me-1"></i>
                  </button>
                  <button className="btn btn-sm text-muted p-0">Reply</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CookingGuide;
