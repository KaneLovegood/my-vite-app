import React from 'react';
import { Card } from 'react-bootstrap';
import archive_check from '../assets/archive_check.png';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <Card as={Link} to='/ingredients' className="recipe-card border-0">
        <div className="position-relative">
          <Card.Img variant="top" src={recipe.image} alt={recipe.title} className="rounded-3" />
          <button className="btn-save position-absolute">
            <img src={archive_check} alt="Save recipe" />
          </button>
        </div>
        <Card.Body className="px-0">
          <Card.Title className="mb-2">{recipe.title}</Card.Title>
          <Card.Text className="text-pink">
            {recipe.time} minutes
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RecipeCard; 