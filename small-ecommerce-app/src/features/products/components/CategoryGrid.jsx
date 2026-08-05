import { Box, Button } from "@mui/material";

const categories = [
  {
    background: "#f2eafb",
    image: "https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=700&q=85",
    label: "Shop Hoodies",
    layout: { gridColumn: { md: 1 }, gridRow: { md: 1 } },
  },
  {
    background: "#f7ead0",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=85",
    label: "Shop Tanktop",
    layout: { gridColumn: { md: 1 }, gridRow: { md: 2 } },
  },
  {
    background: "#8ac07e",
    image: "https://images.unsplash.com/photo-1627225924765-552d49cf47ad?auto=format&fit=crop&w=1100&q=85",
    label: "Shop T-Shirt",
    layout: { gridColumn: { md: 2 }, gridRow: { md: "1 / span 2" } },
  },
  {
    background: "#fee8d5",
    image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=700&q=85",
    label: "Shop Sweater",
    layout: { gridColumn: { md: 3 }, gridRow: { md: 1 } },
  },
  {
    background: "#ededed",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=700&q=85",
    label: "Shop Designer",
    layout: { gridColumn: { md: 3 }, gridRow: { md: 2 } },
  },
];

function CategoryGrid() {
  return (
    <Box component="section" sx={{ px: { xs: 2, md: 3.5 }, pt: { xs: 4, md: 5 }, pb: { xs: 4, md: 5 } }}>
      <Box sx={{ display: "grid", gap: 2.25, gridAutoRows: { xs: 260, md: 195 }, gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "1fr 2.05fr 1fr" }, margin: "0 auto", maxWidth: 830, width: "100%" }}>
        {categories.map((category) => (
          <Box
            key={category.label}
            sx={{
              bgcolor: category.background,
              borderRadius: "8px",
              minHeight: { xs: 260, md: 0 },
              overflow: "hidden",
              position: "relative",
              ...category.layout,
            }}
          >
            <Box sx={{ backgroundImage: `url(${category.image})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", inset: 0, position: "absolute" }} />
            <Box sx={{ background: `linear-gradient(180deg, transparent 55%, ${category.background}40 100%)`, inset: 0, position: "absolute" }} />
            <Button
              disableElevation
              variant="contained"
              sx={{ bgcolor: "#fff", borderRadius: "8px", bottom: 18, boxShadow: "none", color: "#111", fontSize: 11, fontWeight: 600, left: "50%", minWidth: { xs: 125, md: 96 }, px: 1.5, position: "absolute", textTransform: "none", transform: "translateX(-50%)", whiteSpace: "nowrap", "&:hover": { bgcolor: "#fff", boxShadow: "none" } }}
            >
              {category.label}
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default CategoryGrid;
