

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderNav from 'components/Header/HeaderNav';
import { AuthContextProvider } from 'components/context/AuthContext';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import NotFound from 'pages/NotFound';
import Home from 'pages/Home';
import AllProducts from 'pages/products/AllProducts';
import MyCart from 'pages/carts/MyCart';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <BrowserRouter>
          <HeaderNav />
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/products" element={<AllProducts />}></Route>
            <Route path="/carts" element={<MyCart />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
        {/* <Outlet /> */}
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
