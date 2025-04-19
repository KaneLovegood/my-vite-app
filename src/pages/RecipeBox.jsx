import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/RecipeBox.css";
import { foodService } from "../services/foodService";
import avatar from '../assets/avatar.png'
const RecipeBox = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("Saved Recipes");
  const recipesPerPage = 8;

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await foodService.getAllFoods();
        setRecipes(data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
  const totalPages = Math.ceil(recipes.length / recipesPerPage);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="recipe-box">
      <div className="profile-section">
        <div className="profile-image">
          <img src={avatar} alt="Profile" />
        </div>
        <div className="profile-info">
          <h1>Emma Gonzalez's Recipe Box</h1>
          <p>Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as a former cooking editor at The Los Angeles Times. She is also an accomplished author, contributing to numerous cookbooks and food publications. Originally from East Los Angeles, Emma now resides in New York City, where she explores a wide range of culinary delights.</p>
          <div className="profile-stats">
            <span>6.5k Subscribes</span>
            <button className="share-button">Share</button>
          </div>
        </div>
      </div>

      <div className="recipe-tabs">
        <button 
          className={`tab ${activeTab === "Saved Recipes" ? "active" : ""}`}
          onClick={() => setActiveTab("Saved Recipes")}
        >
          Saved Recipes
        </button>
        <button 
          className={`tab ${activeTab === "Folders" ? "active" : ""}`}
          onClick={() => setActiveTab("Folders")}
        >
          Folders
        </button>
        <button 
          className={`tab ${activeTab === "Recipes by Genevieve" ? "active" : ""}`}
          onClick={() => setActiveTab("Recipes by Genevieve")}
        >
          Recipes by Genevieve
        </button>
      </div>

      <div className="recipes-grid">
        {currentRecipes.map((recipe) => (
          <Link to={`/cooking-guide/${recipe.id}`} key={recipe.id} className="recipe-card">
            <div className="recipe-image">
              <img src={recipe.image} alt={recipe.title} />
              <button className="bookmark-btn">
                <span className="bookmark-icon">♥</span>
              </button>
            </div>
            <div className="recipe-info">
              <h3>{recipe.title}</h3>
              <span className="cooking-time">{recipe.time} minutes</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="pagination">
        <button 
          className="prev-btn" 
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ←
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i + 1}
            className={`page-btn ${currentPage === i + 1 ? "active" : ""}`}
            onClick={() => handlePageClick(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button 
          className="next-btn" 
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default RecipeBox;
