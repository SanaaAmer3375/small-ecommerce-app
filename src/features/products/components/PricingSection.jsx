import { CheckCircle } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

const plans = [
  { name: "Personal", price: "12.99", features: ["Free licensed icons", "Fast and free standard shipping", "No credit card required", "Friendly supports"] },
  { name: "Professional", price: "59.99", popular: true, features: ["Full access to all features", "Fast and free standard shipping", "No credit card required", "Use on unlimited projects", "Team collaboration feature.", "Friendly supports"] },
  { name: "Enterprise", price: "99.99", features: ["All features in Pro Plan.", "Use on unlimited projects", "Team collaboration feature.", "Friendly supports"] },
];

function PricingSection() {
  return (
    <Box component="section" sx={{ background: "radial-gradient(circle at 50% 45%, #ead9f4 0 170px, transparent 171px), #f5eafb", px: { xs: 2, md: 3.5 }, py: { xs: 7, md: 8.5 } }}>
      <Box sx={{ margin: "0 auto", maxWidth: 570, textAlign: "center" }}>
        <Typography component="h2" sx={{ color: "#111", fontSize: 20, fontWeight: 800, letterSpacing: "-0.6px", mb: 0.65 }}>Simple pricing for everyone</Typography>
        <Typography sx={{ color: "#888", fontSize: 9 }}>Choose a plan and get started</Typography>

        <Box sx={{ alignItems: "center", display: "grid", gap: { xs: 2, md: 5 }, gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, mt: 3.7, textAlign: "left" }}>
          {plans.map((plan) => (
            <Box key={plan.name} sx={{ bgcolor: "#fff", borderRadius: "6px", boxShadow: plan.popular ? "0 12px 20px rgba(0,0,0,.14)" : "none", minHeight: plan.popular ? 250 : 220, p: 1.6, position: "relative", transform: plan.popular ? "scale(1.08)" : "none", zIndex: plan.popular ? 1 : 0 }}>
              {plan.popular && <Box sx={{ bgcolor: "#111", borderRadius: "2px", color: "#fff", fontSize: 7, fontWeight: 700, px: 0.8, py: 0.35, position: "absolute", right: 8, top: 8 }}>Popular</Box>}
              <Typography sx={{ fontSize: 10, mb: 1.5, textAlign: "center" }}>{plan.name}</Typography>
              <Box sx={{ alignItems: "baseline", display: "flex", justifyContent: "center", mb: 2.15 }}><Typography component="span" sx={{ fontSize: 23, fontWeight: 800 }}>${plan.price}</Typography><Typography component="span" sx={{ color: "#888", fontSize: 8, ml: 0.35 }}>/team</Typography></Box>
              <Box sx={{ borderTop: "1px solid #eee", mb: 1.6, pt: 1.55 }}>
                {plan.features.map((feature) => (
                  <Box key={feature} sx={{ alignItems: "center", display: "flex", gap: 0.65, mb: 0.85 }}><CheckCircle sx={{ color: "#58d5ad", fontSize: 11 }} /><Typography sx={{ color: "#333", fontSize: 7 }}>{feature}</Typography></Box>
                ))}
              </Box>
              <Button disableElevation fullWidth variant="contained" sx={{ bgcolor: plan.popular ? "#2cbd7d" : "#e4f6ee", borderRadius: "5px", color: plan.popular ? "#fff" : "#111", fontSize: 8, fontWeight: 700, minHeight: 25, textTransform: "none", "&:hover": { bgcolor: plan.popular ? "#22a96d" : "#d8eee4" } }}>Get Started</Button>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default PricingSection;
