import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import avatarImage from "../assets/avatar.png";
import img7 from "../assets/Icon Button 73.png";
import "../css/Home.css";
import { foodService } from "../services/foodService";

const Home = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate()
  const r = () => {
    navigate('/ingredients')
  }

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const data = await foodService.getAllFoods();
        setFoods(data);
      } catch (error) {
        console.error('Error fetching foods:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);

  // Chia foods thành các nhóm
  const summerRecipes = foods.slice(0, 4);
  const videoRecipes = foods.slice(4, 8);
  const editorsPicks = foods.slice(8, 12);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <main className="home">
      <section className="hero">
        <div className="recipe-card">
          <span className="recipe-tag">Recipe of the day</span>
          <h2 style={{ color: "#ff4081" }}>{foods[0]?.title || "Loading..."}</h2>
          <p>
            {foods[0]?.description || "Loading description..."}
          </p>
          <div className="recipe-author">
            <img
              src={avatarImage}
              alt="Author"
              className="author-avatar"
            />
            <span>{foods[0]?.author || "Loading..."}</span>
          </div>
          <Link  to={`/cooking-guide/${foods[0]?.id || 1}`} className="view-now text-decoration-none" >View now →</Link>
        </div>
      </section>

      {/* Summer Recipes Section */}
      <section className="recipes-section">
        <div className="section-header">
          <h2 style={{ color: "#ff4081" }}>This Summer Recipes</h2>
          <p>We have all your Independence Day sweets covered</p>
        </div>

        <div className="recipe-grid">
          {summerRecipes.map((recipe) => (
            <Link to={`/ingredients`} key={recipe.id} className="recipe-item">
              <img src={recipe.image} alt={recipe.title} />
              <h3>{recipe.title}</h3>
              <h3 style={{ color: "#ff4081" }}>{recipe.time} minutes</h3>
              <button className="save-recipe">
                <img src={img7} alt="Save recipe" />
              </button>
            </Link>
          ))}
        </div>
      </section>

      {/* Video Recipes Section */}
      <section className="recipes-section">
        <div className="section-header">
          <h2 style={{ color: "#ff4081" }}>Recipes With Videos</h2>
          <p>Cooking Up Culinary Creations with Step-by-Step Videos</p>
        </div>

        <div className="recipe-grid">
          {videoRecipes.map((recipe) => (
            <Link to={`/ingredients`} key={recipe.id} className="recipe-item">
              <img src={recipe.image} alt={recipe.title} />
              <h3>{recipe.title}</h3>
              <h3 style={{ color: "#ff4081" }}>{recipe.time} minutes</h3>
              <button className="save-recipe">
                <img src={img7} alt="Save recipe" />
              </button>
            </Link>
          ))}
        </div>
      </section>

      {/* Editor's Pick Section */}
      <section className="editors-pick">
        <div className="section-header">
          <h2 style={{ color: "#ff4081" }}>Editor's pick</h2>
          <p>
            Curated Culinary Delights: Handpicked Favorites by Our Expert
            Editors!
          </p>
        </div>

        <div className="editors-grid">
          {editorsPicks.map((recipe) => (
            <Link to={`/ingredients`} key={recipe.id} className="editor-item">
              <div className="editor-image">
                <img src={recipe.image} alt={recipe.title} />
                <button className="save-recipe">
                  <img src={img7} alt="Save recipe" />
                </button>
              </div>
              <div className="editor-content">
                <div className="recipe-time" style={{ color: "#ff4081" }}>
                  {recipe.time} minutes
                </div>
                <div className="editor-info">
                  <img
                    src={avatarImage}
                    alt={recipe.author || "Author"}
                    className="editor-avatar"
                  />
                  <span>{recipe.author || "Author"}</span>
                </div>
                <h3>{recipe.title}</h3>
                <p>{recipe.description || "No description available"}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
