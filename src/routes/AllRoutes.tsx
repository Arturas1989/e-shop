import { Routes, Route } from 'react-router-dom';
import { Cart, Home, Login, PageNotFound, ProductsPage, Register } from '../pages';
import { ProtectedRoute } from './ProtectedRoute';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/products"
        element={
          <ProtectedRoute redirect="/products">
            <ProductsPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/cart"
        element={
          <ProtectedRoute redirect="/cart">
            <Cart />
          </ProtectedRoute>
        }
      />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
