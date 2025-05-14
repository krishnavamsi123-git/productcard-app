import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { useProducts } from './hooks/useProducts';
import { ProductCard } from './components/ProductCard';
import { ThemeToggle } from './components/ThemeToggle';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';

const queryClient = new QueryClient();

function ProductGrid() {
  const { data: products, isLoading, error } = useProducts();
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500 text-center">
          <h2 className="text-2xl font-bold mb-2">Error</h2>
          <p>Failed to load products. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products?.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

function App() {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
        <ThemeToggle />
        <ProductGrid />
      </div>
    </div>
  );
}

function WrappedApp() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  );
}

export default WrappedApp;