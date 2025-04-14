import React, { useContext, useState } from 'react';
import { FoodContext } from '../contexts/FoodContext';

const WhatToCook = () => {
  const { foods } = useContext(FoodContext);
  const [timeRange, setTimeRange] = useState([30, 50]);
  const [sortBy, setSortBy] = useState('a-z');
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedSections, setExpandedSections] = useState({
    type: true,
    time: true,
    rating: true,
  });
  const [filters, setFilters] = useState({
    'Pan-fried': false,
    'Stir-fried': false,
    'Grilled': true,
    'Roasted': true,
    'Sautéed': false,
    'Baked': false,
    'Steamed': false,
    'Stewed': false,
  });

  // Pagination logic
  const itemsPerPage = 6;
  const totalItems = foods?.length || 25;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const getCurrentPageItems = () => {
    if (!foods) return Array(6).fill(null);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const items = foods.slice(startIndex, endIndex);
    while (items.length < 6) {
      items.push(null);
    }
    return items;
  };

  // Xử lý khi click vào tiêu đề section
  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Xử lý chuyển trang
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Header */}
        <div className="text-center py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Món ăn hôm nay</h1>
          <p className="text-gray-600">Khám phá các món ăn phù hợp với sở thích của bạn</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Section */}
          <div className="w-full md:w-[320px] flex-shrink-0">
            <div className="p-4 border border-gray-200 rounded">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-pink-500">☰</span>
                <h2 className="font-bold text-gray-700 uppercase">FILTERS</h2>
              </div>

              {/* Type Section */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2" onClick={() => toggleSection('type')}>
                  <h3 className="font-medium text-gray-800">Type</h3>
                  <span className="text-pink-500">{expandedSections.type ? '▼' : '▲'}</span>
                </div>
                {expandedSections.type && (
                  <div className="grid grid-cols-2 gap-y-2">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={filters['Pan-fried']}
                        onChange={() => setFilters({...filters, 'Pan-fried': !filters['Pan-fried']})}
                        className="form-checkbox h-4 w-4"
                      />
                      <span className="text-sm">Pan-fried</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={filters['Stir-fried']}
                        onChange={() => setFilters({...filters, 'Stir-fried': !filters['Stir-fried']})}
                        className="form-checkbox h-4 w-4"
                      />
                      <span className="text-sm">Stir-fried</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={filters['Grilled']}
                        onChange={() => setFilters({...filters, 'Grilled': !filters['Grilled']})}
                        className="form-checkbox h-4 w-4"
                      />
                      <span className="text-sm">Grilled</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={filters['Roasted']}
                        onChange={() => setFilters({...filters, 'Roasted': !filters['Roasted']})}
                        className="form-checkbox h-4 w-4"
                      />
                      <span className="text-sm">Roasted</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={filters['Sautéed']}
                        onChange={() => setFilters({...filters, 'Sautéed': !filters['Sautéed']})}
                        className="form-checkbox h-4 w-4"
                      />
                      <span className="text-sm">Sautéed</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={filters['Baked']}
                        onChange={() => setFilters({...filters, 'Baked': !filters['Baked']})}
                        className="form-checkbox h-4 w-4"
                      />
                      <span className="text-sm">Baked</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={filters['Steamed']}
                        onChange={() => setFilters({...filters, 'Steamed': !filters['Steamed']})}
                        className="form-checkbox h-4 w-4"
                      />
                      <span className="text-sm">Steamed</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={filters['Stewed']}
                        onChange={() => setFilters({...filters, 'Stewed': !filters['Stewed']})}
                        className="form-checkbox h-4 w-4"
                      />
                      <span className="text-sm">Stewed</span>
                    </label>
                  </div>
                )}
              </div>

              {/* Time Section */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2" onClick={() => toggleSection('time')}>
                  <h3 className="font-medium text-gray-800">Time</h3>
                  <span className="text-pink-500">{expandedSections.time ? '▼' : '▲'}</span>
                </div>
                {expandedSections.time && (
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>{timeRange[0]} minutes</span>
                      <span>{timeRange[1]} minutes</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full relative">
                      <div 
                        className="absolute h-2 bg-pink-500 rounded-full"
                        style={{
                          left: `${(timeRange[0] / 60) * 100}%`,
                          right: `${100 - (timeRange[1] / 60) * 100}%`
                        }}
                      ></div>
                      <input
                        type="range"
                        min="0"
                        max="60"
                        value={timeRange[0]}
                        onChange={(e) => setTimeRange([parseInt(e.target.value), timeRange[1]])}
                        className="absolute w-full h-2 opacity-0 cursor-pointer"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Rating Section */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2" onClick={() => toggleSection('rating')}>
                  <h3 className="font-medium text-gray-800">Rating</h3>
                  <span className="text-pink-500">{expandedSections.rating ? '▼' : '▲'}</span>
                </div>
                {expandedSections.rating && (
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="form-checkbox h-4 w-4" />
                      <div className="flex text-yellow-400">
                        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                      </div>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="form-checkbox h-4 w-4" />
                      <div className="flex">
                        <span className="text-yellow-400">★</span>
                        <span className="text-yellow-400">★</span>
                        <span className="text-yellow-400">★</span>
                        <span className="text-yellow-400">★</span>
                        <span className="text-gray-300">★</span>
                      </div>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="form-checkbox h-4 w-4" />
                      <div className="flex">
                        <span className="text-yellow-400">★</span>
                        <span className="text-yellow-400">★</span>
                        <span className="text-yellow-400">★</span>
                        <span className="text-gray-300">★</span>
                        <span className="text-gray-300">★</span>
                      </div>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="form-checkbox h-4 w-4" />
                      <div className="flex">
                        <span className="text-yellow-400">★</span>
                        <span className="text-yellow-400">★</span>
                        <span className="text-gray-300">★</span>
                        <span className="text-gray-300">★</span>
                        <span className="text-gray-300">★</span>
                      </div>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="form-checkbox h-4 w-4" />
                      <div className="flex">
                        <span className="text-yellow-400">★</span>
                        <span className="text-gray-300">★</span>
                        <span className="text-gray-300">★</span>
                        <span className="text-gray-300">★</span>
                        <span className="text-gray-300">★</span>
                      </div>
                    </label>
                  </div>
                )}
              </div>

              <button className="w-full bg-pink-500 text-white py-3 rounded font-medium hover:bg-pink-600 transition-colors">
                Apply Filters
              </button>
            </div>
          </div>

          {/* Food List Section */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-medium">Món ăn <span className="text-pink-500">({totalItems})</span></h2>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Sắp xếp:</span>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-200 rounded px-3 py-1"
                >
                  <option value="a-z">A-Z</option>
                  <option value="z-a">Z-A</option>
                  <option value="rating">Rating</option>
                  <option value="time">Time</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {getCurrentPageItems().map((food, index) => (
                <div key={index} className={`bg-gray-50 rounded overflow-hidden ${!food ? 'opacity-0' : ''}`}>
                  {food && (
                    <>
                      <div className="relative">
                        <img
                          src={food?.image || 'https://source.unsplash.com/random/300x200/?food'}
                          alt={food?.name || 'Food Image'}
                          className="w-full h-48 object-cover"
                        />
                        <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-pink-50">
                          <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button>
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium mb-2">Món ăn</h3>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center text-pink-500">
                            <span className="mr-1">⏱</span>
                            <span className="text-sm text-gray-600">30 minutes</span>
                          </div>
                          <div className="flex text-yellow-400">
                            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-6">
              <button className="text-gray-500 px-2">Previous</button>
              <div className="flex items-center">
                <span className="text-gray-500">Page {currentPage} of {totalPages}</span>
              </div>
              <button className="text-gray-500 px-2">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatToCook;
