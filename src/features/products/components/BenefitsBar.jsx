import { AutoFixHighOutlined, CheckroomOutlined, Inventory2Outlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const benefits = [
  {
    description: "Lorem ipsum det, consec tetur adipiscing elit duis nec fringi",
    icon: AutoFixHighOutlined,
    title: "Top quality",
  },
  {
    description: "Lorem ipsum det, adipiscing elit duis nec fringi consec tetur",
    icon: CheckroomOutlined,
    title: "Mix and match",
  },
  {
    description: "Lorem ipsum det, duis nec fringi consec tetur adipiscing elit",
    icon: Inventory2Outlined,
    title: "Shipping worldwide",
  },
];

function BenefitsBar() {
  return (
    <Box component="section" sx={{ bgcolor: "background.default", px: { xs: 2, md: 3.5 }, pt: { xs: 5, md: 7 }, pb: { xs: 4, md: 4 } }}>
      <Box sx={{ display: "grid", gap: { xs: 4, md: 7 }, gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, margin: "0 auto", maxWidth: 830, width: "100%" }}>
        {benefits.map(({ title, description, icon: Icon }) => (
          <Box key={title} sx={{ alignItems: "flex-start", display: "flex", gap: 2.4 }}>
            <Icon sx={{ color: "#27bf7c", flexShrink: 0, fontSize: 39, mt: 0.25 }} />
            <Box>
              <Typography component="h2" sx={{ color: "text.primary", fontSize: 16, fontWeight: 700, lineHeight: 1.25, mb: 1 }}>{title}</Typography>
              <Typography sx={{ color: "text.secondary", fontSize: 12, lineHeight: 1.55, maxWidth: 190 }}>{description}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default BenefitsBar;
