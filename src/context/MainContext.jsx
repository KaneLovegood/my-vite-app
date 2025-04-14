import { createContext, useContext, useEffect, useState } from 'react';
import { foodService } from '../services/foodService';

const MainContext = createContext();

export const MainProvider = ({ children }) => {
  // State quản lý món ăn
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // State quản lý giỏ hàng
  const [cart, setCart] = useState([]);

  // Fetch dữ liệu món ăn
  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const data = await foodService.getAllFoods();
        setFoods(data);
        setError(null);
      } catch (err) {
        setError('Không thể tải dữ liệu món ăn');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);

  // Hàm lấy thông tin món ăn theo ID
  const getFoodById = async (id) => {
    try {
      const food = await foodService.getFoodById(id);
      return food;
    } catch (err) {
      console.error('Lỗi khi lấy thông tin món ăn:', err);
      return null;
    }
  };

  // Hàm thêm món ăn vào giỏ hàng
  const addToCart = (food) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === food.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === food.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...food, quantity: 1 }];
    });
  };

  // Hàm xóa món ăn khỏi giỏ hàng
  const removeFromCart = (foodId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== foodId));
  };

  // Hàm cập nhật số lượng món ăn trong giỏ hàng
  const updateQuantity = (foodId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(foodId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === foodId ? { ...item, quantity } : item
      )
    );
  };

  // Tính tổng số lượng sản phẩm trong giỏ hàng
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Tính tổng giá trị giỏ hàng
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const value = {
    // State và hàm liên quan đến món ăn
    foods,
    loading,
    error,
    getFoodById,
    
    // State và hàm liên quan đến giỏ hàng
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalItems,
    getTotalPrice
  };

  return (
    <MainContext.Provider value={value}>
      {children}
    </MainContext.Provider>
  );
};

export const useMain = () => {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error('useMain must be used within a MainProvider');
  }
  return context;
};
