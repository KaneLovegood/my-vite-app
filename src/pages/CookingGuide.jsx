import React from "react";
import { Star, StarFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import authorAvatar from "../assets/avatar.png";
import banhDau from '../assets/banhDau.png';
import banhDau2 from '../assets/banhDau2.png';
import banhDau3 from '../assets/banhDau3.png';
import banhDau4 from '../assets/banhDau4.png';
import button from "../assets/Button 96.png";

const CookingGuide = () => {
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
          <h1 className="mb-4 fw-bold" style={{ fontSize: '2.5rem' }}>How to make a Strawberry Shortcake</h1>
          
          <p className="text-muted">
            It seems like there was the same misunderstanding. If you're making how to use
            can make a Strawberry Shortcake, the process would be identical to the
            recipe I shared earlier. It involves preparing the strawberries, making the
            shortcakes, preparing whipped cream, and finally assembling the shortcake.
          </p>

          {/* Author Info */}
          <div className="d-flex align-items-center gap-3 mb-4">
            <img 
              src={authorAvatar}
              alt="Emma Gonzalez" 
              className="rounded-circle"
              style={{ width: "40px", height: "40px", objectFit: "cover" }}
            />
            <span>Emma Gonzalez</span>
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
              <p className="fw-bold">45 minutes</p>
            </div>
            <div>
              <p className="text-muted mb-1">Notes</p>
              <p className="fw-bold">352 community notes</p>
            </div>
            <div>
              <p className="text-muted mb-1">Rating</p>
              <div className="d-flex">
                <StarFill className="text-warning" />
                <StarFill className="text-warning" />
                <StarFill className="text-warning" />
                <StarFill className="text-warning" />
                <Star className="text-warning" />
              </div>
            </div>
          </div>

          {/* Ingredients */}
          <div className="p-4 border rounded mb-4 bg-white" style={{ borderColor: '#eee' }}>
            <h3 className="mb-3 fw-bold">Ingredients</h3>
            <ul className="list-unstyled">
              <li className="mb-2">- Yield: 4 generous servings</li>
              <li className="mb-2">- 2 pints ripe, well-rinsed strawberries</li>
              <li className="mb-2">- 1/2 cup sugar, or more to taste</li>
              <li className="mb-2">- 4 cups flour</li>
              <li className="mb-2">- 3 tablespoons sugar</li>
              <li className="mb-2">- 1/4 teaspoon salt</li>
              <li className="mb-2">- 5 teaspoons baking powder</li>
              <li className="mb-2">- 1 1/4 cups butter</li>
              <li className="mb-2">- 3 cups whipping cream</li>
              <li className="mb-2">- 1/4 teaspoon vanilla extract</li>
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
            {/* Step 1 */}
            <div className="step-item mb-5">
              <img 
                src={banhDau}
                alt="Step 1: Preparing strawberries" 
                className="img-fluid rounded mb-4"
                style={{ width: "100%", height: "auto" }}
              />
              <h3 className="mb-4 fw-bold" style={{ color: '#333' }}>Step 1</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Pick over and hull strawberries. Cut in half or slice, depending on size. Gently crush about a quarter 
                of the berries with a fork to release their juices. Mix with remaining berries and the 1/2 cup of sugar, 
                adding more sugar if necessary. Set aside, covered, for about half an hour to develop flavor.
              </p>
            </div>

            {/* Step 2 */}
            <div className="step-item mb-5">
              <img 
                src={banhDau2}
                alt="Step 2: Assembling shortcake" 
                className="img-fluid rounded mb-4"
                style={{ width: "100%", height: "auto" }}
              />
              <h3 className="mb-4 fw-bold" style={{ color: '#333' }}>Step 2</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Preheat oven to 425 degrees.
              </p>
            </div>

            {/* Step 3 */}
            <div className="step-item mb-5">
              <img 
                src={banhDau3}
                alt="Step 3: Preparing dough" 
                className="img-fluid rounded mb-4"
                style={{ width: "100%", height: "auto" }}
              />
              <h3 className="mb-4 fw-bold" style={{ color: '#333' }}>Step 3</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Into a large mixing bowl, sift together flour, 3 tablespoons sugar, salt and baking powder. Add ½ cup 
                of softened butter, and rub into dry ingredients as for pastry. Add 1½ cups cream, and mix to a soft 
                dough. Knead the dough for one minute on a lightly floured pastry board, then roll it out to about 
                ½-inch thickness. Using a 3-inch biscuit cutter, cut an even number of rounds - 2 rounds per serving.
              </p>
            </div>

            {/* Step 4 */}
            <div className="step-item">
              <img 
                src={banhDau4}
                alt="Step 4: Final presentation" 
                className="img-fluid rounded mb-4"
                style={{ width: "100%", height: "auto" }}
              />
              <h3 className="mb-4 fw-bold" style={{ color: '#333' }}>Step 4</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Knead and roll out the remaining dough to cut more shortcakes. Place the rounds on ungreased baking sheets and 
                bake for 10 to 15 minutes, until golden brown.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookingGuide;
