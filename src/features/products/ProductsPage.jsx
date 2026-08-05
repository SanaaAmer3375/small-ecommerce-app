import { useEffect } from "react";
import { Container, Typography, Box, Pagination, CircularProgress, Alert } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchProducts } from "./productsThunks";
import { setCurrentPage } from "./productsSlice";
import ProductCard from "../../components/ProductCard";
import HeroBanners from "./components/HeroBanners";
import BenefitsBar from "./components/BenefitsBar";
import CategoryGrid from "./components/CategoryGrid";
import FeaturesSection from "./components/FeaturesSection";
import FeatureShowcase from "./components/FeatureShowcase";
import PricingSection from "./components/PricingSection";
import TestimonialsSection from "./components/TestimonialsSection";

function ProductsPage() {
    const dispatch = useAppDispatch();
    const { items, loading, error, currentPage, total, limit } = useAppSelector(
        (state) => state.products
    );

    useEffect(() => {
        dispatch(fetchProducts(currentPage));
    }, [dispatch, currentPage]);

    const pageCount = Math.ceil(total / limit);

    const handlePageChange = (event, value) => {
        dispatch(setCurrentPage(value));
    };

    return (
        <Box>
        <HeroBanners />
        <BenefitsBar />
        <CategoryGrid />

        {/* 4. Featured Products (Dynamic API Data) */}
        <Container maxWidth={false} sx={{ maxWidth: 790, mx: "auto", px: { xs: 2, md: 3.5 }, py: { xs: 6, md: 9 } }}>
            <Box sx={{ textAlign: "center", mb: 5.5 }}>
            <Typography component="h2" sx={{ color: "#111", fontSize: { xs: 24, md: 26 }, fontWeight: 800, letterSpacing: "-0.7px", mb: 0.8 }}>
                Featured products
            </Typography>
            <Typography sx={{ color: "#888", fontSize: 12 }}>
                What's more, we do it right!
            </Typography>
            </Box>

            {error && (
            <Alert severity="error" sx={{ mb: 4 }}>
                {error}
            </Alert>
            )}

            {loading ? (
            <Box sx={{ display: "flex", justifyContent: "center", py: 10 }}>
                <CircularProgress color="success" />
            </Box>
            ) : (
            <Box sx={{ display: "grid", columnGap: { xs: 1.5, md: 2 }, gridTemplateColumns: { xs: "repeat(2, minmax(0, 1fr))", sm: "repeat(4, minmax(0, 1fr))" }, rowGap: { xs: 3.5, md: 4 } }}>
                {items.map((product, index) => (
                <Box key={product.id} sx={items.length === 10 && index === 8 ? { gridColumn: { sm: 2 } } : items.length === 10 && index === 9 ? { gridColumn: { sm: 3 } } : {}}>
                    <ProductCard product={product} index={index} />
                </Box>
                ))}
            </Box>
            )}

            {!loading && pageCount > 1 && (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
                <Pagination
                count={pageCount}
                page={currentPage}
                onChange={handlePageChange}
                sx={{ "& .MuiPaginationItem-root": { borderRadius: "50%", color: "#111", fontSize: 12 }, "& .Mui-selected": { bgcolor: "#2cbd7d !important", color: "#fff" } }}
                shape="rounded"
                />
            </Box>
            )}
        </Container>

        <FeaturesSection />
        <FeatureShowcase />
        <PricingSection />
        <TestimonialsSection />
        </Box>
    );
}

export default ProductsPage;
