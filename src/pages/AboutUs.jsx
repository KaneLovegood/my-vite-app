import React, { useState, useEffect } from "react";
import "../css/AboutUs.css";
import { Share, PersonCircle } from "react-bootstrap-icons";
import profileImage from "/Lab_02_b/avatar.png";
// import img1 from "/Lab_02_b/Italian-styletomato.png";
// import img2 from "/Lab_02_b/Lotusdelightsalad.png";
// import img3 from "/Lab_02_b/Saladwithcabbage.png";
// import img4 from "/Lab_02_b/Snackcakes.png";
// import img5 from "/Lab_02_b/Sunny-sideupfriedeggs.png";
// import img6 from "/Lab_02_b/Vegetableandshrimpspaghetti.png";

const AboutUs = ({ user, onLoginClick }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Thêm useEffect để xử lý sự kiện keydown
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        handlePrevClick();
      } else if (event.key === "ArrowRight") {
        handleNextClick();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup function
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentPage]); // Thêm currentPage vào dependencies

  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("https://67f4df19913986b16fa2227d.mockapi.io/api/v1/food")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error("Lỗi khi fetch dữ liệu:", err));
  }, []);
  // const recipes = [
  //   {
  //     id: 1,
  //     title: 'Italian-style tomato salad',
  //     image: img1,
  //     time: '14 minutes'
  //   },
  //   {
  //     id: 2,
  //     title: 'Vegetable and shrimp spaghetti',
  //     image: img6,
  //     time: '15 minutes'
  //   },
  //   {
  //     id: 3,
  //     title: 'Lotus delight salad',
  //     image: img2,
  //     time: '20 minutes'
  //   },
  //   {
  //     id: 4,
  //     title: 'Snack cakes',
  //     image: img4,
  //     time: '21 minutes'
  //   },
  //   {
  //     id: 5,
  //     title: 'Salad with cabbage and shrimp',
  //     image: img3,
  //     time: '32 minutes'
  //   },
  //   {
  //     id: 6,
  //     title: 'Bean, shrimp, and potato salad',
  //     image: img5,
  //     time: '32 minutes'
  //   },
  //   {
  //     id: 7,
  //     title: 'Sunny-side up fried eggs',
  //     image: img5,
  //     time: '32 minutes'
  //   },
  //   {
  //     id: 8,
  //     title: 'Lotus delight salad',
  //     image: img2,
  //     time: '32 minutes'
  //   },
  //   {
  //     id: 9,
  //     title: 'Lotus delight salad',
  //     image: img2,
  //     time: '32 minutes'
  //   },
  //   {
  //     id: 10,
  //     title: 'Lotus delight salad',
  //     image: img2,
  //     time: '32 minutes'
  //   },
  //   {
  //     id: 11,
  //     title: 'Lotus delight salad',
  //     image: img2,
  //     time: '32 minutes'
  //   },
  //   {
  //     id: 12,
  //     title: 'Lotus delight salad',
  //     image: img2,
  //     time: '32 minutes'
  //   },
  //   {
  //     id: 13,
  //     title: 'Lotus delight salad',
  //     image: img2,
  //     time: '32 minutes'
  //   },
  //   {
  //     id: 14,
  //     title: 'Lotus delight salad',
  //     image: img2,
  //     time: '32 minutes'
  //   },
  //   {
  //     id: 15,
  //     title: 'Lotus delight salad',
  //     image: img2,
  //     time: '32 minutes'
  //   },
  //   {
  //     id: 16,
  //     title: 'Lotus delight salad',
  //     image: img2,
  //     time: '32 minutes'
  //   },
  //   {
  //     id: 17,
  //     title: 'Lotus delight salad',
  //     image: img2,
  //     time: '32 minutes'
  //   },
  //   {
  //     id: 18,
  //     title: 'Lotus delight salad',
  //     image: img2,
  //     time: '32 minutes'
  //   },
  //   {
  //     id: 19,
  //     title: 'Lotus delight salad',
  //     image: img2,
  //     time: '32 minutes'
  //   },
  //   {
  //     id: 20,
  //     title: 'Lotus delight salad',
  //     image: img2,
  //     time: '32 minutes'
  //   },
  //   {
  //     id: 21,
  //     title: 'Lotus delight salad',
  //     image: img2,
  //     time: '32 minutes'
  //   },
  //   {
  //     id: 22,
  //     title: 'Lotus delight salad',
  //     image: img2,
  //     time: '32 minutes'
  //   },
  //   {
  //     id: 23,
  //     title: 'Lotus delight salad',
  //     image: img2,
  //     time: '32 minutes'
  //   },
  //   {
  //     id: 24,
  //     title: 'Lotus delight salad',
  //     image: img2,
  //     time: '32 minutes'
  //   },
  //   {
  //     id: 25,
  //     title: 'Lotus delight salad',
  //     image: img2,
  //     time: '32 minutes'
  //   },
  //   {
  //     id: 26,
  //     title: 'Lotus delight salad',
  //     image: img2,
  //     time: '32 minutes'
  //   },
  //   {
  //     id: 27,
  //     title: 'Lotus delight salad',
  //     image: img2,
  //     time: '32 minutes'
  //   },
  //   {
  //     id: 28,
  //     title: 'Lotus delight salad',
  //     image: img2,
  //     time: '32 minutes'
  //   },
  //   {
  //     id: 29,
  //     title: 'Lotus delight salad',
  //     image: img2,
  //     time: '32 minutes'
  //   }
  // ];

  const recipesPerPage = 4;
  // Tính toán số trang
  const totalPages = Math.ceil(recipes.length / recipesPerPage);

  // Lấy recipes cho trang hiện tại
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  // Tạo mảng số trang
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Xử lý chuyển trang
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const handlePrevClick = () => {
    const newPage = currentPage === 1 ? totalPages : currentPage - 1;
    setCurrentPage(newPage);
    window.scrollTo(0, 0);
  };

  const handleNextClick = () => {
    const newPage = currentPage === totalPages ? 1 : currentPage + 1;
    setCurrentPage(newPage);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        handlePrevClick();
      } else if (event.key === "ArrowRight") {
        handleNextClick();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentPage]);

  // Render số trang
  const renderPageNumbers = () => {
    const pageButtons = [];

    if (totalPages <= 7) {
      // Hiển thị tất cả các số trang nếu tổng số trang <= 7
      for (let i = 1; i <= totalPages; i++) {
        pageButtons.push(
          <button
            key={i}
            className={`page-btn ${currentPage === i ? "active" : ""}`}
            onClick={() => handlePageClick(i)}
          >
            {i}
          </button>
        );
      }
    } else {
      // Hiển thị dấu ... nếu tổng số trang > 7
      if (currentPage <= 3) {
        // Trang đầu
        for (let i = 1; i <= 4; i++) {
          pageButtons.push(
            <button
              key={i}
              className={`page-btn ${currentPage === i ? "active" : ""}`}
              onClick={() => handlePageClick(i)}
            >
              {i}
            </button>
          );
        }
        pageButtons.push(
          <span key="ellipsis1" className="ellipsis">
            ...
          </span>
        );
        pageButtons.push(
          <button
            key={totalPages}
            className={`page-btn ${currentPage === totalPages ? "active" : ""}`}
            onClick={() => handlePageClick(totalPages)}
          >
            {totalPages}
          </button>
        );
      } else if (currentPage >= totalPages - 2) {
        // Trang cuối
        pageButtons.push(
          <button
            key={1}
            className={`page-btn ${currentPage === 1 ? "active" : ""}`}
            onClick={() => handlePageClick(1)}
          >
            1
          </button>
        );
        pageButtons.push(
          <span key="ellipsis2" className="ellipsis">
            ...
          </span>
        );
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageButtons.push(
            <button
              key={i}
              className={`page-btn ${currentPage === i ? "active" : ""}`}
              onClick={() => handlePageClick(i)}
            >
              {i}
            </button>
          );
        }
      } else {
        // Trang giữa
        pageButtons.push(
          <button
            key={1}
            className={`page-btn ${currentPage === 1 ? "active" : ""}`}
            onClick={() => handlePageClick(1)}
          >
            1
          </button>
        );
        pageButtons.push(
          <span key="ellipsis1" className="ellipsis">
            ...
          </span>
        );
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageButtons.push(
            <button
              key={i}
              className={`page-btn ${currentPage === i ? "active" : ""}`}
              onClick={() => handlePageClick(i)}
            >
              {i}
            </button>
          );
        }
        pageButtons.push(
          <span key="ellipsis2" className="ellipsis">
            ...
          </span>
        );
        pageButtons.push(
          <button
            key={totalPages}
            className={`page-btn ${currentPage === totalPages ? "active" : ""}`}
            onClick={() => handlePageClick(totalPages)}
          >
            {totalPages}
          </button>
        );
      }
    }
    return pageButtons;
  };

  if (!user) {
    return (
      <div className="not-logged-in">
        <div className="not-logged-in-content">
          <PersonCircle className="login-icon" />
          <h2>Please log in to view profile information</h2>
          <p>You need to be logged in to view and manage recipe collections.</p>
          <button className="login-button" onClick={onLoginClick}>
            Login Now
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="about-us">
      <div className="profile-section">
        <div className="profile-header">
          <h1>Emma Gonzalez's Recipe Box</h1>
        </div>

        <div className="profile-info">
          <div className="profile-image">
            <img src={profileImage} alt="Emma Gonzalez" />
          </div>
          <div className="profile-details">
            <p>
              Emma Gonzalez is a deputy editor at Chefify, bringing her
              expertise as a former cooking editor at The Los Angeles Times. She
              is also an accomplished author, contributing to numerous cookbooks
              and food publications. Originally from East Los Angeles, Emma now
              resides in New York City, where she explores a wide range of
              culinary delights.
            </p>
            <div className="profile-stats">
              <span className="subscribers">6.5k Subscribes</span>
              <button className="share-btn">
                <Share /> Share
              </button>
            </div>
          </div>
        </div>

        <div className="profile-nav">
          <button className="nav-btn active">Saved Recipes</button>
          <button className="nav-btn">Folders</button>
          <button className="nav-btn">Recipes by Genevieve</button>
        </div>
      </div>

      <div className="recipes-grid">
        {currentRecipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <div className="recipe-image">
              <img src={recipe.image} alt={recipe.title} />
              <button className="bookmark-btn">
                <span className="bookmark-icon">♥</span>
              </button>
            </div>
            <div className="recipe-info">
              <h3>{recipe.title}</h3>
              <span className="cooking-time">{recipe.time}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button className="prev-btn" onClick={() => handlePrevClick()}>
          ←
        </button>
        {renderPageNumbers()}
        <button className="next-btn" onClick={() => handleNextClick()}>
          →
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
