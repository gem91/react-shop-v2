

import './App.css';
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from 'components/context/AuthContext';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import NotFound from 'pages/NotFound';
import Home from 'pages/Home';
import AllProducts from 'pages/products/AllProducts';
import MyCart from 'pages/MyCart';
import ProtectedRouter from 'pages/ProtectedRouter';
import NewProdut from 'pages/products/NewProduct';
import ProdeuctDetail from 'pages/products/ProdeuctDetail';
import HeaderNav from 'components/Header';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
          <HeaderNav />
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/products" element={<AllProducts />}></Route>
            <Route path="/products/new" element={
               <ProtectedRouter requireAdmin={true} >
                <NewProdut />
              </ProtectedRouter>
            }></Route>
            <Route path="/products/:id" element={
                <ProdeuctDetail />
            }></Route>
            <Route path="/carts" element={
              <ProtectedRouter>
                <MyCart />
              </ProtectedRouter>
            }></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
