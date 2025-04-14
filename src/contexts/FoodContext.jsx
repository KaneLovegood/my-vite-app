import React, { createContext, useContext, useEffect, useState } from 'react';
import { foodService } from '../services/foodService';

export const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        setLoading(true);
        const data = await foodService.getAllFoods();
        setFoods(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);

  const addFood = async (newFood) => {
    try {
      const addedFood = await foodService.addFood(newFood);
      setFoods(prev => [...prev, addedFood]);
      return addedFood;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const updateFood = async (id, updatedFood) => {
    try {
      const updated = await foodService.updateFood(id, updatedFood);
      setFoods(prev => prev.map(food => food.id === id ? updated : food));
      return updated;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const deleteFood = async (id) => {
    try {
      await foodService.deleteFood(id);
      setFoods(prev => prev.filter(food => food.id !== id));
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const value = {
    foods,
    loading,
    error,
    addFood,
    updateFood,
    deleteFood
  };

  return (
    <FoodContext.Provider value={value}>
      {children}
    </FoodContext.Provider>
  );
};

export const useFood = () => {
  const context = useContext(FoodContext);
  if (!context) {
    throw new Error('useFood must be used within a FoodProvider');
  }
  return context;
}; 