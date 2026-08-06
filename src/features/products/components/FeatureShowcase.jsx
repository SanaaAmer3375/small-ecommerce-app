import { AutoAwesomeOutlined, DashboardOutlined, DevicesOutlined, ExtensionOutlined, LaptopMacOutlined, PhoneIphoneOutlined, StorefrontOutlined } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

const features = [
  { icon: AutoAwesomeOutlined, title: "Premium quality shirts" },
  { icon: PhoneIphoneOutlined, title: "Access on any device" },
  { icon: DashboardOutlined, title: "Access on any devices" },
];

function FeatureShowcase() {
  return (
    <Box component="section" sx={{ bgcolor: "background.default", px: { xs: 2, md: 3.5 }, py: { xs: 7, md: 9 } }}>
      <Box sx={{ margin: "0 auto", maxWidth: 830, textAlign: "center" }}>
        <Typography component="h2" sx={{ color: "text.primary", fontSize: 20, fontWeight: 800, letterSpacing: "-0.6px", mb: 0.6 }}>All the features you need</Typography>
        <Typography sx={{ color: "text.secondary", fontSize: 10 }}>You've got the ideas, we've got the tools</Typography>

        <Box sx={{ display: "grid", gap: 1.5, gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" }, mt: 3.2 }}>
          {features.map(({ title, icon: Icon }, index) => (
            <Box key={title} sx={{ bgcolor: "background.paper", border: "1px solid", borderColor: "divider", borderRadius: "5px", minHeight: 208, overflow: "hidden", p: 1.8, textAlign: "left" }}>
              <Box sx={{ alignItems: "center", background: index === 0 ? "linear-gradient(135deg, #dff7ed, #fff)" : index === 1 ? "linear-gradient(135deg, #f0e7fb, #fff)" : "linear-gradient(135deg, #e4fbf1, #fff)", display: "flex", height: 104, justifyContent: "center", mb: 1.4, position: "relative" }}>
                <Icon sx={{ color: index === 1 ? "#a66ad9" : "#2cbd7d", fontSize: 55, transform: index === 1 ? "rotate(-22deg)" : "none" }} />
                {index === 2 && <Box sx={{ bgcolor: "#2cbd7d", borderRadius: 1, height: 36, position: "absolute", right: 16, top: 19, width: 8 }} />}
              </Box>
              <Typography sx={{ color: "text.primary", fontSize: 11, fontWeight: 700, mb: 0.9 }}>{title}</Typography>
              <Typography sx={{ color: "text.secondary", fontSize: 9, lineHeight: 1.5 }}>Lorem ipsum det, adipiscing elit duis nec fringi det, consec tetur adipiscing elit.</Typography>
            </Box>
          ))}
        </Box>

        <Box sx={{ alignItems: "center", bgcolor: "background.paper", border: "1px solid", borderColor: "divider", borderRadius: "6px", display: "grid", gap: 2, gridTemplateColumns: { xs: "1fr", md: "1.25fr 1fr" }, mt: 4, overflow: "hidden", textAlign: "left" }}>
          <Box sx={{ alignItems: "flex-end", background: "radial-gradient(circle at 18% 72%, #91e7c5 0 55px, transparent 56px), linear-gradient(135deg, #e2fbf1, #f8f8f8)", display: "flex", height: 208, justifyContent: "center", pt: 3 }}>
            <Box sx={{ bgcolor: "#fff", borderRadius: "7px 7px 0 0", boxShadow: "0 5px 14px rgba(0,0,0,.12)", height: 145, p: 1.3, transform: "rotate(2deg)", width: "72%" }}>
              <Box sx={{ bgcolor: "#e4f8ed", height: 7, mb: 1.2, width: "40%" }} />
              <Box sx={{ alignItems: "center", display: "flex", gap: 1 }}><LaptopMacOutlined sx={{ color: "#2cbd7d", fontSize: 58 }} /><Box><Box sx={{ bgcolor: "#ddd", height: 7, mb: 0.7, width: 55 }} /><Box sx={{ bgcolor: "#eee", height: 7, width: 72 }} /></Box></Box>
            </Box>
          </Box>
          <Box sx={{ p: { xs: 3, md: 2.8 } }}>
            <Typography sx={{ color: "text.primary", fontSize: 20, fontWeight: 800, lineHeight: 1.05, mb: 1.25 }}>10,000+ of free images, icons, and graphics</Typography>
            <Typography sx={{ color: "text.secondary", fontSize: 9, mb: 2 }}>You've got the ideas, we've got the tools</Typography>
            <Button disableElevation variant="contained" sx={{ bgcolor: "#2cbd7d", borderRadius: "5px", fontSize: 9, minWidth: 78, py: 0.55, textTransform: "none", "&:hover": { bgcolor: "#22a96d" } }}>Get Started</Button>
          </Box>
        </Box>

        <Box sx={{ minHeight: 220, mt: 5.5, position: "relative" }}>
          {[{ Icon: ExtensionOutlined, left: "24%", top: 4, color: "#2cbd7d" }, { Icon: AutoAwesomeOutlined, left: "47%", top: -15, color: "#2f78e8" }, { Icon: DevicesOutlined, right: "21%", top: 18, color: "#8f5ee8" }, { Icon: StorefrontOutlined, left: "18%", bottom: 18, color: "#111" }, { Icon: DashboardOutlined, right: "16%", bottom: 10, color: "#71c946" }].map(({ Icon, color, ...position }, index) => (
            <Box key={index} sx={{ alignItems: "center", bgcolor: "#fff", borderRadius: "50%", boxShadow: "0 6px 17px rgba(0,0,0,.1)", display: { xs: "none", sm: "flex" }, height: 50, justifyContent: "center", position: "absolute", width: 50, ...position }}><Icon sx={{ color, fontSize: 25 }} /></Box>
          ))}
          <Box sx={{ left: "50%", position: "absolute", top: "48%", transform: "translate(-50%, -50%)", width: "100%" }}>
            <Typography sx={{ color: "text.primary", fontSize: 18, fontWeight: 800, lineHeight: 1.12, mb: 0.9 }}>Join the 7,000+<br />companies trusting us</Typography>
            <Typography sx={{ color: "text.secondary", fontSize: 9, mb: 1.6 }}>You've got the ideas, we've got the tools</Typography>
            <Button disableElevation variant="contained" sx={{ bgcolor: "#2cbd7d", borderRadius: "5px", fontSize: 9, minWidth: 78, py: 0.55, textTransform: "none", "&:hover": { bgcolor: "#22a96d" } }}>Get Started</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default FeatureShowcase;
