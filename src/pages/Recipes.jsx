import React from "react";
import food_img from '../assets/dish.png';
import "../css/Recipes.css";

const Recipes = ({ user, onLoginClick }) => {
  return (
    <div className="recipes-page">
      {!user ? (
        <>
          <div className="subscription-notice">
            <div className="notice-content">
              <h2>This recipe is exclusively available to subscribers</h2>
              <h3>Join now to access effortless, hassle-free recipes</h3>
              <div className="pricing">
                <h3>0.25USD / Week</h3>
                <p>Billed as $1 every 4 weeks for the first year</p>
              </div>
              <button className="subscribe-button" onClick={onLoginClick}>
                Subscribe Now
              </button>
              <p className="cancel-notice">Cancel or Pause any time</p>
            </div>

            <div className="subscription-image">
              <img src={food_img} alt="Delicious food spread" />
            </div>
          </div>

          <div className="features-section">
            <h2>An All Access subscription includes</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h3>Cooking</h3>
                <p>Access to recipes and guides for any occasion</p>
              </div>
              <div className="feature-card">
                <h3>Wirecutter</h3>
                <p>Reviews and recommendations for products</p>
              </div>
              <div className="feature-card">
                <h3>Games</h3>
                <p>Access to Wordle, The Crossword</p>
              </div>
              <div className="feature-card">
                <h3>The Athletic</h3>
                <p>Premium sports journalism</p>
              </div>
            </div>
          </div>

          <div className="cooking-subscription">
            <div className="logo">Chefify</div>
            <h2>Subscribe to Chefify Cooking only</h2>
            <p>Get unlimited access to recipes plus cooking guides and tips</p>
            <div className="subscription-options">
              <label className="option">
                <input type="radio" name="subscription" value="monthly" defaultChecked />
                <span>$2/month (billed every 4 weeks)</span>
              </label>
              <label className="option">
                <input type="radio" name="subscription" value="yearly" />
                <span>$20/year (billed annually)</span>
              </label>
            </div>
            <button className="subscribe-button" onClick={onLoginClick}>
              Subscribe Now
            </button>
            <p className="cancel-notice">Cancel or Pause any time</p>
          </div>
        </>
      ) : (
        <div className="recipes-content">
          <div className="subscription-notice">
            <div className="notice-content">
              <h2>Welcome to Chefify Premium</h2>
              <h3>Explore our collection of delicious recipes</h3>
              <div className="pricing">
                <h3>Premium Member</h3>
                <p>You have full access to all recipes</p>
              </div>
            </div>
            <div className="subscription-image">
              <img src={food_img} alt="Delicious food spread" />
            </div>
          </div>

          <div className="features-section">
            <h2>Your Premium Benefits</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h3>All Recipes</h3>
                <p>Access to our complete recipe collection</p>
              </div>
              <div className="feature-card">
                <h3>Meal Planning</h3>
                <p>Create and save your weekly meal plans</p>
              </div>
              <div className="feature-card">
                <h3>Shopping Lists</h3>
                <p>Auto-generated shopping lists for your recipes</p>
              </div>
              <div className="feature-card">
                <h3>Recipe Box</h3>
                <p>Save and organize your favorite recipes</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recipes;
