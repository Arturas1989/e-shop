import { Routes, Route } from "react-router-dom";
import { Home, Login, PageNotFound, Products, Register } from "../pages";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='products' element={<Products />} />
      <Route path='register' element={<Register />} />
      <Route path='login' element={<Login />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
};

