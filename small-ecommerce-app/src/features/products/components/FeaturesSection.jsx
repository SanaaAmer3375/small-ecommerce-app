import { Add, CloudUploadOutlined, FormatColorTextOutlined, ImageOutlined } from "@mui/icons-material";
import { Box, Divider, Typography } from "@mui/material";

const steps = [
  "Choose from 412 custom products in our catalog",
  "Customize your design with graphics, text or your own uploaded images.",
  "Order prints by selecting your preferred T-shirt size, style, and quantity.",
  "Get your order sent to your door with free standard shipping.",
];

function FeaturesSection() {
  return (
    <Box component="section" sx={{ bgcolor: "#f7f7f7", mt: { xs: 6, md: 9 }, px: { xs: 2, md: 3.5 }, py: { xs: 7, md: 8 } }}>
      <Box sx={{ margin: "0 auto", maxWidth: 900, textAlign: "center" }}>
        <Typography component="h2" sx={{ color: "#111", fontSize: { xs: 23, md: 25 }, fontWeight: 800, letterSpacing: "-0.8px", mb: 0.8 }}>
          T-shirt printing made easy.
        </Typography>
        <Typography sx={{ color: "#888", fontSize: 11 }}>Let us show you how your product come to life.</Typography>

        <Box sx={{ alignItems: "center", display: "grid", gap: { xs: 5, md: 4 }, gridTemplateColumns: { xs: "1fr", md: "1fr 1.3fr 0.18fr" }, mt: { xs: 6, md: 6.5 }, textAlign: "left" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.7 }}>
            {steps.map((step, index) => (
              <Box key={step} sx={{ alignItems: "flex-start", display: "flex", gap: 1.15 }}>
                <Box sx={{ alignItems: "center", bgcolor: index === 0 ? "#28bd7d" : "#fff", border: index === 0 ? "none" : "1px solid #d8eee4", borderRadius: "50%", color: index === 0 ? "#fff" : "#28bd7d", display: "flex", flex: "0 0 auto", fontSize: 10, height: 20, justifyContent: "center", mt: 0.1, width: 20 }}>{index + 1}</Box>
                <Typography sx={{ color: "#222", fontSize: 10, fontWeight: 600, lineHeight: 1.35, maxWidth: 190 }}>{step}</Typography>
              </Box>
            ))}
          </Box>

          <Box sx={{ filter: "drop-shadow(0 11px 14px rgba(0,0,0,.13))", mx: "auto", position: "relative", width: { xs: "100%", md: 360 } }}>
            <Box sx={{ bgcolor: "#fff", border: "6px solid #e8e8e8", borderRadius: "12px", height: 218, p: 2.1 }}>
              <Box sx={{ display: "grid", gap: 1.35, gridTemplateColumns: "1.05fr 1fr", height: "100%" }}>
                <Box sx={{ alignItems: "center", bgcolor: "#ededed", display: "flex", justifyContent: "center", overflow: "hidden" }}>
                  <Box
                    component="img"
                    src="https://images.unsplash.com/photo-1627225924765-552d49cf47ad?auto=format&fit=crop&w=1100&q=85"
                    alt="T-shirt product preview"
                    sx={{ height: "100%", objectFit: "cover", width: "100%" }}
                  />
                </Box>
                <Box>
                  <Box sx={{ bgcolor: "#dedede", borderRadius: 2, height: 8, mb: 1, width: "72%" }} />
                  <Box sx={{ bgcolor: "#dedede", borderRadius: 2, height: 7, mb: 2.2, width: "100%" }} />
                  <Divider sx={{ mb: 1.6 }} />
                  <Box sx={{ display: "flex", gap: 0.7, mb: 1.8 }}><Box sx={{ bgcolor: "#caf1e0", borderRadius: 1, height: 20, width: 20 }} /><Box sx={{ bgcolor: "#f7dfd7", borderRadius: 1, height: 20, width: 20 }} /><Box sx={{ bgcolor: "#c8edf4", borderRadius: 1, height: 20, width: 20 }} /></Box>
                  <Box sx={{ bgcolor: "#2cbd7d", borderRadius: 1, height: 14, width: "100%" }} />
                </Box>
              </Box>
            </Box>
            <Box sx={{ bgcolor: "#e8e8e8", borderRadius: "50%", height: 7, left: "18%", position: "absolute", top: -17, width: "64%" }} />
          </Box>

          <Box sx={{ alignItems: "center", bgcolor: "#2cbd7d", borderRadius: "0 7px 7px 0", boxShadow: "0 6px 12px rgba(0,0,0,.12)", color: "#fff", display: "flex", flexDirection: "column", gap: 1.8, justifyContent: "center", minHeight: 126, py: 1, width: 36 }}>
            <CloudUploadOutlined sx={{ fontSize: 17 }} />
            <FormatColorTextOutlined sx={{ fontSize: 16 }} />
            <ImageOutlined sx={{ fontSize: 16 }} />
            <Add sx={{ fontSize: 16 }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default FeaturesSection;
