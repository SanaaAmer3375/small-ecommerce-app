import { useEffect, useState } from "react";
import { ArrowBack, CheckCircle, LocalShippingOutlined, Star, StarBorder } from "@mui/icons-material";
import { Alert, Box, Button, CircularProgress, Container, Divider, IconButton, Rating, Stack, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchProductById } from "./productsThunks";

function ProductDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { selectedProduct: product, detailsError, detailsLoading } = useAppSelector((state) => state.products);
  const [activeImage, setActiveImage] = useState(0);
  const numericId = Number(id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });

    if (Number.isInteger(numericId) && numericId > 0) {
      dispatch(fetchProductById(numericId));
    }
  }, [dispatch, numericId]);

  if (!Number.isInteger(numericId) || numericId < 1) {
    return <Alert severity="error" sx={{ m: 5 }}>Invalid product ID.</Alert>;
  }

  if (detailsError) {
    return <Container maxWidth="sm" sx={{ py: 10 }}><Alert severity="error">{detailsError}</Alert></Container>;
  }

  if (detailsLoading || !product || product.id !== numericId) {
    return <Box sx={{ display: "flex", justifyContent: "center", py: 16 }}><CircularProgress sx={{ color: "#2cbd7d" }} /></Box>;
  }

  const images = product.images?.length ? product.images : [product.thumbnail];
  const image = images[Math.min(activeImage, images.length - 1)];
  const discountPrice = product.discountPercentage ? product.price * (1 - product.discountPercentage / 100) : product.price;

  return (
    <Box sx={{ bgcolor: "#fff", py: { xs: 4, md: 8 } }}>
      <Container maxWidth={false} sx={{ maxWidth: 1120, mx: "auto", px: { xs: 2, md: 3.5 } }}>
        <Button startIcon={<ArrowBack />} onClick={() => navigate("/products")} sx={{ color: "#111", fontSize: 13, fontWeight: 700, mb: { xs: 3, md: 5 }, textTransform: "none" }}>
          Back to products
        </Button>

        <Box sx={{ display: "grid", gap: { xs: 4, md: 7 }, gridTemplateColumns: { xs: "1fr", md: "1.05fr 0.95fr" } }}>
          <Box>
            <Box sx={{ alignItems: "center", bgcolor: "#f4f4f4", borderRadius: "14px", display: "flex", height: { xs: 360, md: 510 }, justifyContent: "center", overflow: "hidden", p: 3 }}>
              <Box component="img" src={image} alt={product.title} sx={{ height: "100%", objectFit: "contain", width: "100%" }} />
            </Box>
            {images.length > 1 && (
              <Stack direction="row" spacing={1.2} sx={{ mt: 1.5, overflowX: "auto", pb: 0.5 }}>
                {images.map((item, index) => (
                  <IconButton key={item} onClick={() => setActiveImage(index)} sx={{ bgcolor: "#f4f4f4", border: activeImage === index ? "2px solid #2cbd7d" : "2px solid transparent", borderRadius: "8px", height: 68, p: 0.5, width: 68 }}>
                    <Box component="img" src={item} alt={`${product.title} ${index + 1}`} sx={{ height: "100%", objectFit: "contain", width: "100%" }} />
                  </IconButton>
                ))}
              </Stack>
            )}
          </Box>

          <Box sx={{ alignSelf: "center" }}>
            <Typography sx={{ color: "#2cbd7d", fontSize: 12, fontWeight: 800, letterSpacing: "1px", mb: 1, textTransform: "uppercase" }}>{product.category}</Typography>
            <Typography component="h1" sx={{ color: "#111", fontSize: { xs: 31, md: 42 }, fontWeight: 800, letterSpacing: "-1.5px", lineHeight: 1.08, mb: 2 }}>{product.title}</Typography>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2.4 }}>
              <Rating value={Number(product.rating) || 0} precision={0.1} readOnly emptyIcon={<StarBorder fontSize="inherit" />} icon={<Star fontSize="inherit" />} sx={{ color: "#f7b843", fontSize: 21 }} />
              <Typography sx={{ color: "#777", fontSize: 13 }}>{Number(product.rating || 0).toFixed(1)} rating</Typography>
            </Stack>
            <Typography sx={{ color: "#666", fontSize: 15, lineHeight: 1.75, mb: 3 }}>{product.description}</Typography>
            <Stack direction="row" alignItems="baseline" spacing={1.2} sx={{ mb: 2.5 }}>
              <Typography sx={{ color: "#111", fontSize: 30, fontWeight: 800 }}>${discountPrice.toFixed(2)}</Typography>
              {product.discountPercentage > 0 && <Typography sx={{ color: "#aaa", fontSize: 15, textDecoration: "line-through" }}>${Number(product.price).toFixed(2)}</Typography>}
              {product.discountPercentage > 0 && <Typography sx={{ bgcolor: "#e6f8ef", borderRadius: "5px", color: "#1a9c63", fontSize: 11, fontWeight: 800, px: 0.8, py: 0.35 }}>-{Math.round(product.discountPercentage)}%</Typography>}
            </Stack>
            <Divider sx={{ mb: 2.5 }} />
            <Stack spacing={1.25} sx={{ mb: 3.2 }}>
              <Typography sx={{ color: "#555", fontSize: 14 }}><Box component="span" sx={{ color: "#111", fontWeight: 700 }}>Brand:</Box> {product.brand || "Mina Space"}</Typography>
              <Typography sx={{ color: product.stock > 0 ? "#1aa568" : "#d45151", fontSize: 14, fontWeight: 700 }}><CheckCircle sx={{ fontSize: 17, mr: 0.7, verticalAlign: "-3px" }} />{product.stock > 0 ? `In stock (${product.stock} available)` : "Out of stock"}</Typography>
            </Stack>
            <Button disabled={product.stock < 1} fullWidth variant="contained" sx={{ bgcolor: "#2cbd7d", borderRadius: "8px", fontSize: 15, fontWeight: 700, minHeight: 49, textTransform: "none", "&:hover": { bgcolor: "#22a96d" } }}>Add to cart</Button>
            <Stack direction="row" alignItems="center" spacing={1} sx={{ color: "#777", justifyContent: "center", mt: 2.2 }}><LocalShippingOutlined sx={{ fontSize: 19 }} /><Typography sx={{ fontSize: 12 }}>Free standard shipping on orders over $50</Typography></Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default ProductDetailsPage;
