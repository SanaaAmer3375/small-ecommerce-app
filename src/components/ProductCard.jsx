import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ProductCard({ product, index }) {
    const navigate = useNavigate();
    const originalPrice = (product.price * 1.25).toFixed(2);
    const label = index % 4 === 0 ? "Sale!" : index % 5 === 0 ? "Hot" : null;

    return (
        <Card
        sx={{
            bgcolor: "transparent",
            borderRadius: 0,
            boxShadow: "none",
            overflow: "visible",
            "&:hover img": { transform: "scale(1.035)" },
        }}
        >
        <Box sx={{ bgcolor: "action.hover", borderRadius: "7px", overflow: "hidden", position: "relative" }}>
            {label && (
            <Box sx={{ bgcolor: label === "Hot" ? "#ff9159" : "#31bc7a", borderRadius: "2px", color: "#fff", fontSize: 9, fontWeight: 700, left: 5, lineHeight: 1, px: 0.55, py: 0.35, position: "absolute", top: 5, zIndex: 1 }}>
                {label}
            </Box>
            )}
            <CardMedia
            component="img"
            image={product.thumbnail}
            alt={product.title}
            sx={{ aspectRatio: "0.76 / 1", display: "block", objectFit: "contain", p: 0.5, transition: "transform 0.25s ease", width: "100%" }}
            />
        </Box>
        <Box sx={{ pt: 1.2, textAlign: "center" }}>
            <Typography noWrap sx={{ color: "text.primary", fontSize: 11, fontWeight: 700, lineHeight: 1.2, mb: 0.65 }}>{product.title}</Typography>
            <Typography sx={{ color: "text.primary", fontSize: 10, fontWeight: 700 }}>
            <Box component="span" sx={{ color: "text.secondary", fontWeight: 400, mr: 0.45, textDecoration: "line-through" }}>${originalPrice}</Box>
            ${Number(product.price).toFixed(2)}
            </Typography>
            <Button
            onClick={() => navigate(`/products/${product.id}`)}
            size="small"
            variant="outlined"
            sx={{ borderColor: "divider", borderRadius: "6px", color: "text.primary", fontSize: 10, fontWeight: 700, mt: 1.3, px: 1.4, py: 0.35, textTransform: "none", "&:hover": { borderColor: "#2cbd7d", color: "#2cbd7d" } }}
            >
            View Details
            </Button>
        </Box>
        </Card>
    );
}

export default ProductCard;
