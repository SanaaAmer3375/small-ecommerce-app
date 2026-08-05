import { Box, Button, Typography } from "@mui/material";

const banners = [
  {
    background: "#e4f6f0",
    button: "Create a T-shirt",
    description: "Create your design for your online business easily and fast.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=85",
    imagePosition: "center",
    title: "T-shirt printing\nmade easy.",
  },
  {
    background: "#f0eafb",
    button: "Shop Now",
    description: "Print shirts for yourself or your creative works.",
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=1200&q=85",
    imagePosition: "center",
    title: "Marina\nTest",
  },
];

function HeroBanners() {
  return (
    <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" }, maxWidth: 1440, mx: "auto", overflow: "hidden", width: "100%" }}>
      {banners.map((banner) => (
        <Box
          key={banner.title}
          sx={{
            bgcolor: banner.background,
            minHeight: { xs: 460, md: 535 },
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Box
            aria-hidden="true"
            sx={{
              backgroundImage: `url(${banner.image})`,
              backgroundPosition: banner.imagePosition,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              inset: 0,
              opacity: 0.9,
              position: "absolute",
              "&::after": {
                background: `linear-gradient(90deg, ${banner.background} 2%, ${banner.background}cc 30%, transparent 67%)`,
                content: "''",
                inset: 0,
                position: "absolute",
              },
            }}
          />
          <Box sx={{ bottom: { xs: 48, md: 55 }, left: { xs: 28, md: 56 }, maxWidth: 245, position: "absolute", zIndex: 1 }}>
            <Typography component="h1" sx={{ color: "#111", fontSize: { xs: 28, md: 30 }, fontWeight: 800, letterSpacing: "-1px", lineHeight: 1.14, mb: 2.1, whiteSpace: "pre-line" }}>
              {banner.title}
            </Typography>
            <Typography sx={{ color: "#777", fontSize: 14, lineHeight: 1.65, mb: 3.5 }}>
              {banner.description}
            </Typography>
            <Button disableElevation variant="contained" sx={{ bgcolor: "#2cbd7d", borderRadius: "9px", fontSize: 12, fontWeight: 700, minHeight: 42, px: 3.4, textTransform: "none", "&:hover": { bgcolor: "#21a96c" } }}>
              {banner.button}
            </Button>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default HeroBanners;
