import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import li from '../assets/Lab_02/list_filter.png';
import r1 from '../assets/Lab_02/rating_1.png';
import r2 from '../assets/Lab_02/rating_2.png';
import r3 from '../assets/Lab_02/rating_3.png';
import r4 from '../assets/Lab_02/rating_4.png';
import r5 from '../assets/Lab_02/rating_5.png';
import slider from '../assets/Lab_02/slider.png';
import RecipeCard from '../components/RecipeCard';
import '../css/WhatToCook.css';
// Import images
import avocado_salad from '../assets/avacador_salad.png';
import corn_salad from '../assets/corn_salad.png';
import cucumber_salad from '../assets/cucumber_salad_charry_tomatoes.png';
import five_color from '../assets/five_color_salad.png';
import italian_tomato from '../assets/italian_style_tomato_salad.png';
import lotus_salad from '../assets/Lotus delight salad.png';
import potato_salad from '../assets/Potato Salad.png';
import cabbage_shrimp from '../assets/Salad with cabbage.png';
import shrimp_salad from '../assets/salad_with_cabbage_and_shrimp.png';
const ratings = [5, 4, 3, 2, 1];
import {Link} from 'react-router-dom'

const WhatToCook = () => {
  const [currentPage, _setCurrentPage] = useState(1);
  const [selectedTypes, setSelectedTypes] = useState(['grilled', 'roasted']);
  const [timeValue, setTimeValue] = useState(40);
  const [selectedRatings, setSelectedRatings] = useState([3, 2, 1]);
  
  const recipes = [
    { id: 1, title: 'Cucumber salad, cherry tomatoes', time: 32, image: cucumber_salad },
    { id: 2, title: 'Italian-style tomato salad', time: 32, image: italian_tomato },
    { id: 3, title: 'Potato Salad', time: 32, image: potato_salad },
    { id: 4, title: 'Salad with cabbage and shrimp', time: 32, image: shrimp_salad },
    { id: 5, title: 'Five-color salad', time: 32, image: five_color },
    { id: 6, title: 'Corn Salad', time: 32, image: corn_salad },
    { id: 7, title: 'Salad with cabbage and shrimp', time: 32, image: cabbage_shrimp },
    { id: 8, title: 'Lotus delight salad', time: 32, image: lotus_salad },
    { id: 9, title: 'Avocado Salad', time: 32, image: avocado_salad },
  ];

  const cookingTypes = [
    { id: 'pan-fried', label: 'Pan-fried' },
    { id: 'stir-fried', label: 'Stir-fried' },
    { id: 'grilled', label: 'Grilled' },
    { id: 'roasted', label: 'Roasted' },
    { id: 'sauteed', label: 'Sautéed' },
    { id: 'baked', label: 'Baked' },
    { id: 'steamed', label: 'Steamed' },
    { id: 'stewed', label: 'Stewed' }
  ];

  const handleTypeChange = (typeId) => {
    if (selectedTypes.includes(typeId)) {
      setSelectedTypes(selectedTypes.filter(id => id !== typeId));
    } else {
      setSelectedTypes([...selectedTypes, typeId]);
    }
  };

  const handleRatingChange = (rating) => {
    if (selectedRatings.includes(rating)) {
      setSelectedRatings(selectedRatings.filter(r => r !== rating));
    } else {
      setSelectedRatings([...selectedRatings, rating]);
    }
  };

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <Container className="py-5">
      <Row>
        <Col md={3} className='mb-3'>
          <div className="filter-sidebar p-4 rounded-3">
            <div className="d-flex align-items-center mb-4 pb-2">
                <img src={li} className='img-fluid' alt="" />
                <h5 className="m-0 fw-bold">FILTERS</h5>
            </div>

            <div className="filter-section mb-4">
              <h6 className="fw-bold mb-3 d-flex justify-content-between">
                Type <span className="text-muted">▼</span>
              </h6>
              <Form className='row ms-1'>
                {cookingTypes.map(type => (
                  <Form.Check
                    key={type.id}
                    type="checkbox"
                    id={type.id}
                    label={type.label}
                    className="mb-2 col-6"
                  />
                ))}
              </Form>
            </div>

            <div className="filter-section mb-4">
              <h6 className="fw-bold mb-3 d-flex justify-content-between">
                Time <span className="text-muted">▼</span>
              </h6>
              <div>
                <div className="d-flex justify-content-evenly mt-2" style={{fontSize: '0.7rem'}}>
                  <span>30 minutes</span>
                  <span>50 minutes</span>
                </div>
                <img src={slider} className='img-fluid' alt="" />
              </div>
            </div>

            {/* Rating Filter */}
            <div className="filter-section mb-4">
              <h6 className="fw-bold mb-3 d-flex justify-content-between">
                Rating <span className="text-muted">▼</span>
              </h6>
              <Form>
                {ratings.map(rating => (
                  <Form.Check
                    key={rating}
                    type="checkbox"
                    id={`rating-${rating}`}
                    label={
                      <div className="d-flex align-items-center">
                        <img src={rating === 5 ? r5 : rating === 4 ? r4 : rating === 3 ? r3 : rating === 2 ? r2 : r1} alt={`Rating ${rating}`} className="me-2" />
                      </div>
                    }
                    className="mb-2"
                  />
                ))}
              </Form>
            </div>

            <button className="w-100 py-2 text-white border-0 rounded-2" style={{backgroundColor: '#ff4081'}}>
              Apply
            </button>
          </div>
        </Col>
        <Col md={9}>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="mb-0">Salad (32)</h2>
            <Form.Select style={{ width: 'auto' }}>
              <option>A-Z</option>
              <option>Z-A</option>
              <option>Latest</option>
            </Form.Select>
          </div>

          <Row>
            {recipes.map(recipe => (
              <RecipeCard   key={recipe.id} recipe={recipe} />
            ))}
          </Row>

          {/* Pagination */}
          <div className="d-flex justify-content-center mt-4">
            <nav>
              <ul className="pagination">
                <li className="page-item">
                  <button className="page-link">&lt;</button>
                </li>
                {[1, 2, 3, 4, '...', 10, 11].map((page, index) => (
                  <li key={index} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                    <button className="page-link">{page}</button>
                  </li>
                ))}
                <li className="page-item">
                  <button className="page-link">&gt;</button>
                </li>
              </ul>
            </nav>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default WhatToCook;
