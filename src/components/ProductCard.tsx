import React from 'react';
import { Heart, ShoppingCart, Plus, Minus } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { Product } from '../models/Product';
import { addToCart, updateQuantity } from '../store/cartSlice';
import { RootState } from '../store/store';
import { useFavorites } from '../hooks/useFavorites';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const { isFavorite, toggleFavorite } = useFavorites();
  const cartItem = useSelector((state: RootState) => 
    state.cart.items.find(item => item.id === product.id)
  );

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleQuantityChange = (newQuantity: number) => {
    dispatch(updateQuantity({ id: product.id, quantity: newQuantity }));
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-200">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-48 object-contain p-4"
        />
        <button
          onClick={() => toggleFavorite(product.id)}
          className="absolute top-2 right-2 p-2 rounded-full bg-white dark:bg-gray-700 shadow-md hover:scale-110 transition-transform"
        >
          <Heart 
            className={`w-5 h-5 ${
              isFavorite(product.id) 
                ? 'fill-red-500 stroke-red-500' 
                : 'stroke-gray-400'
            }`} 
          />
        </button>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 truncate">
          {product.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
            ${product.price.toFixed(2)}
          </span>
          
          {cartItem ? (
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleQuantityChange(cartItem.quantity - 1)}
                className="p-1 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-gray-800 dark:text-white font-medium">
                {cartItem.quantity}
              </span>
              <button
                onClick={() => handleQuantityChange(cartItem.quantity + 1)}
                className="p-1 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={handleAddToCart}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};