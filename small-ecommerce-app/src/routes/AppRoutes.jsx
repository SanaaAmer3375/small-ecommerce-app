import { Routes, Route } from "react-router-dom";
import LoginPage from "../features/auth/LoginPage";
import ProtectedRoute from "../components/ProtectedRoute";
import ProductsPage from "../features/products/ProductsPage";
import ProductDetailsPage from "../features/products/ProductDetailsPage";
import NotFound from "../pages/NotFound";
import Layout from "../layouts/Layout";
import { Navigate } from "react-router-dom";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route element={<ProtectedRoute />}>
            <Route element={<Layout />}>
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/products/:id" element={<ProductDetailsPage />} />
            </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default AppRoutes;