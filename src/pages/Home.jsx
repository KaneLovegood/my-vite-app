import React from "react";
import avatarImage from "../assets/avatar.png";
import img7 from "../assets/Icon Button 73.png";
import "../css/Home.css";
import img1 from "/Lab_02_b/Italian-styletomato.png";
import img2 from "/Lab_02_b/Lotusdelightsalad.png";
import img3 from "/Lab_02_b/Saladwithcabbage.png";
import img4 from "/Lab_02_b/Snackcakes.png";
import img5 from "/Lab_02_b/Sunny-sideupfriedeggs.png";
import img6 from "/Lab_02_b/Vegetableandshrimpspaghetti.png";

const Home = () => {
  const summerRecipes = [
    {
      id: 1,
      image: img1,
      title: "Italian-style tomato",
      time: "30 minutes",
    },
    {
      id: 2,
      image: img2,
      title: "Spaghetti with vegetables",
      time: "25 minutes",
    },
    {
      id: 3,
      image: img3,
      title: "Lotus delight salad",
      time: "15 minutes",
    },
    {
      id: 4,
      image: img4,
      title: "Snack cakes",
      time: "45 minutes",
    },
  ];

  const videoRecipes = [
    {
      id: 1,
      image: img6,
      title: "Salad with cabbage and shrimp",
      time: "20 minutes",
    },
    {
      id: 2,
      image: img3,
      title: "Salad of cove beans",
      time: "15 minutes",
    },
    {
      id: 3,
      image: img5,
      title: "Sunny-side up fried egg",
      time: "10 minutes",
    },
    {
      id: 4,
      image: img4,
      title: "Lotus delight salad",
      time: "15 minutes",
    },
  ];

  const editorsPicks = [
    {
      id: 1,
      image: img6,
      title: "Stuffed sticky rice ball",
      time: "34 minutes",
      author: "Jennifer King",
      description:
        "Stuffed sticky rice balls: A delightful Asian treat with chewy, glutinous rice and a flavorful surprise filling...",
    },
    {
      id: 2,
      image: img5,
      title: "Strawberry smoothie",
      time: "40 minutes",
      author: "Matthew Martinez",
      description:
        "Savor the refreshing delight of a strawberry smoothie. Made with ripe strawberries, this creamy blend offers...",
    },
    {
      id: 3,
      image: img3,
      title: "Latte Art",
      time: "19 minutes",
      author: "Sarah Hill",
      description:
        "Latte art is the skillful craft of creating captivating designs on the surface of a latte...",
    },
    {
      id: 4,
      image: img2,
      title: "Butter fried noodles",
      time: "16 minutes",
      author: "Julia Lopez",
      description:
        "Butter fried noodles: Savory noodles cooked in butter for a delicious and satisfying meal...",
    },
  ];

  return (
    <main className="home">
      <section className="hero">
        <div className="recipe-card">
          <span className="recipe-tag">Recipe of the day</span>
          <h2 style={{ color: "#ff4081" }}>Salad Caprese</h2>
          <p>
            Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella,
            basil, oil, and balsamic vinegar create a refreshing pair for lunch
            or appetizer
          </p>
          <div className="recipe-author">
            <img
              src={avatarImage}
              alt="Salad Caprese Author"
              className="author-avatar"
            />
            <span>Salad Caprese</span>
          </div>
          <button className="view-now">View now →</button>
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
            <div key={recipe.id} className="recipe-item">
              <img src={recipe.image} alt={recipe.title} />
              <h3>{recipe.title}</h3>
              <h3 style={{ color: "#ff4081" }}>{recipe.time}</h3>
              <button className="save-recipe">
                <img src={img7} alt="Save recipe" />
              </button>
            </div>
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
            <div key={recipe.id} className="recipe-item">
              <img src={recipe.image} alt={recipe.title} />
              <h3>{recipe.title}</h3>
              <h3 style={{ color: "#ff4081" }}>{recipe.time}</h3>
              <button className="save-recipe">
                <img src={img7} alt="Save recipe" />
              </button>
            </div>
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
          {editorsPicks.map((editor) => (
            <div key={editor.id} className="editor-item">
              <div className="editor-image">
                <img src={editor.image} alt={editor.title} />
                <button className="save-recipe">
                  <img src={img7} alt="Save recipe" />
                </button>
              </div>
              <div className="editor-content">
                <div className="recipe-time" style={{ color: "#ff4081" }}>
                  {editor.time}
                </div>
                <div className="editor-info">
                  <img
                    src={avatarImage}
                    alt={editor.author}
                    className="editor-avatar"
                  />
                  <span>{editor.author}</span>
                </div>
                <h3>{editor.title}</h3>
                <p>{editor.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
