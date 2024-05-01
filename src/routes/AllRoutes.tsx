import { Routes, Route } from 'react-router-dom';
import { Home, Login, PageNotFound, ProductsPage, Register } from '../pages';
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
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
