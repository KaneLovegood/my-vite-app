import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/RecipeBox.css";
import { foodService } from "../services/foodService";

const RecipeBox = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 6;

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

  // Tính toán phân trang
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
      <div className="recipe-box-header">
        <h1>Your Recipe Box</h1>
        <p>All your saved recipes in one place</p>
      </div>

      <div className="recipe-filters">
        <button className="filter-btn active">All Recipes</button>
        <button className="filter-btn">Breakfast</button>
        <button className="filter-btn">Lunch</button>
        <button className="filter-btn">Dinner</button>
        <button className="filter-btn">Desserts</button>
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
              <div className="recipe-meta">
                <span className="cooking-time">
                  <i className="bi bi-clock"></i> {recipe.time} minutes
                </span>
                <div className="recipe-rating">
                  {[...Array(5)].map((_, index) => (
                    <i
                      key={index}
                      className={`bi bi-star${index < recipe.rating ? "-fill" : ""}`}
                    ></i>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="pagination">
        <button 
          className="prev-btn" 
          onClick={() => handlePageClick(currentPage > 1 ? currentPage - 1 : 1)}
          disabled={currentPage === 1}
        >
          ←
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={`page-btn ${currentPage === page ? "active" : ""}`}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </button>
        ))}
        <button 
          className="next-btn" 
          onClick={() => handlePageClick(currentPage < totalPages ? currentPage + 1 : totalPages)}
          disabled={currentPage === totalPages}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default RecipeBox;
