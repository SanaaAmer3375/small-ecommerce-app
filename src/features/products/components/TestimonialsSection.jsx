import { Box, Typography } from "@mui/material";

const testimonials = [
  { name: "Dean D.", role: "Director", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=85", text: "Great quality products - Flags, programs for exceptional capacities, birthday, and occasion welcome are largely still mainstream on paper." },
  { name: "Cristian L.", role: "Manager", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=85", text: "Best services ever - Flags, programs for exceptional capacities, birthday, and are largely still mainstream on paper occasion welcome." },
  { name: "Leonel R.", role: "Designer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=85", text: "Top notch support - Flags, programs for birthday, and occasion welcome are largely still mainstream on paper exceptional capacities." },
];

function TestimonialsSection() {
  return (
    <Box component="section" sx={{ bgcolor: "background.default", overflow: "hidden", position: "relative", px: { xs: 2, md: 3.5 }, py: { xs: 7, md: 8.5 } }}>
      <Box aria-hidden="true" sx={{ background: "linear-gradient(173deg, transparent 0 39%, #e4f8ef 39.2% 41.5%, transparent 41.7%), linear-gradient(173deg, transparent 0 45%, #dfc2f4 45.2% 48%, transparent 48.2%)", inset: 0, position: "absolute" }} />
      <Box sx={{ margin: "0 auto", maxWidth: 850, position: "relative", textAlign: "center", zIndex: 1 }}>
        <Typography component="h2" sx={{ color: "text.primary", fontSize: { xs: 27, md: 31 }, fontWeight: 800, letterSpacing: "-1.1px", mb: 0.9 }}>What People Are Saying</Typography>
        <Typography sx={{ color: "text.secondary", fontSize: 12 }}>We provide support for more than 15K+ Businesses.</Typography>

        <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, mt: 4.8, textAlign: "left" }}>
          {testimonials.map((testimonial) => (
            <Box key={testimonial.name} sx={{ bgcolor: "background.paper", border: "1px solid", borderColor: "divider", borderRadius: "8px", boxShadow: "0 2px 7px rgba(0,0,0,.07)", minHeight: 198, p: 2.6 }}>
              <Box sx={{ alignItems: "center", display: "flex", gap: 1.3, mb: 2.2 }}>
                <Box sx={{ backgroundImage: `url(${testimonial.image})`, backgroundPosition: "center", backgroundSize: "cover", borderRadius: "50%", height: 43, width: 43 }} />
                <Typography sx={{ color: "text.primary", fontSize: 11, fontWeight: 800 }}>{testimonial.name}<Box component="span" sx={{ color: "text.secondary", fontSize: 9, fontWeight: 400, ml: 0.55 }}>{testimonial.role}</Box></Typography>
              </Box>
              <Box sx={{ bgcolor: "#f9e8bf", height: "1px", mb: 2, width: 59 }} />
              <Typography sx={{ color: "text.primary", fontSize: 13, lineHeight: 1.65 }}>“ {testimonial.text} ”</Typography>
            </Box>
          ))}
        </Box>

        <Box sx={{ alignItems: "center", display: "flex", gap: 1, justifyContent: "center", mt: 2.4 }}><Box sx={{ border: "1px solid", borderColor: "text.primary", borderRadius: "50%", height: 8, width: 8 }} /><Box sx={{ bgcolor: "text.primary", borderRadius: "50%", height: 6, width: 6 }} /></Box>
      </Box>
    </Box>
  );
}

export default TestimonialsSection;
