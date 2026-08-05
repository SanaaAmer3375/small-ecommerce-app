import { ArrowForward } from "@mui/icons-material";
import { Box, IconButton, InputBase, Stack, Typography } from "@mui/material";

const informationLinks = ["About us", "Our Blog", "Start a Return", "Contact Us"];
const usefulLinks = ["My Account", "Print Provider", "Become a Partner", "Custom Products"];

function FooterLinks({ title, links }) {
    return (
        <Box>
        <Typography sx={{ color: "#111", fontSize: 18, fontWeight: 700, mb: 2.1 }}>{title}</Typography>
        <Stack spacing={1.65}>
            {links.map((link) => (
            <Typography key={link} sx={{ color: "#777", cursor: "pointer", fontSize: 15, "&:hover": { color: "#28b979" } }}>
                {link}
            </Typography>
            ))}
        </Stack>
        </Box>
    );
}

function Footer() {
    return (
        <Box component="footer" sx={{ bgcolor: "#f7f7f7", mt: 6, px: { xs: 2, md: 3.5 }, py: { xs: 7, md: 10 } }}>
        <Box sx={{ maxWidth: 1250, mx: "auto" }}>
            <Box sx={{ columnGap: { xs: 5, md: 9 }, display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "1.2fr 1fr 1fr 1.2fr" }, rowGap: { xs: 5, md: 0 } }}>
            <Box>
                <Stack direction="row" spacing={0.75} alignItems="center" sx={{ mb: 2.3 }}>
                <Box sx={{ background: "linear-gradient(135deg, #9bf0ce 0 47%, #2dc58a 48% 100%)", clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)", height: 29, position: "relative", width: 29 }} />
                <Typography sx={{ color: "#111", fontSize: 22, fontWeight: 800, letterSpacing: "-0.7px" }}>Mina Space</Typography>
                </Stack>
                <Stack spacing={1.45}>
                <Typography sx={{ color: "#777", fontSize: 15 }}>hello@minaspace.io</Typography>
                <Typography sx={{ color: "#111", fontSize: 16, fontWeight: 700 }}>+02 036 038 3996</Typography>
                <Typography sx={{ color: "#777", fontSize: 15, lineHeight: 1.8 }}>3665 Paseo Place, Suite 0960<br />San Diego</Typography>
                </Stack>
            </Box>

            <FooterLinks title="Information" links={informationLinks} />
            <FooterLinks title="Useful links" links={usefulLinks} />

            <Box>
                <Typography sx={{ color: "#111", fontSize: 18, fontWeight: 700, mb: 2.1 }}>Newsletter</Typography>
                <Typography sx={{ color: "#777", fontSize: 15, lineHeight: 1.65, mb: 2.8 }}>Get the latest news, events &amp; more delivered to your inbox.</Typography>
                <Box component="form" onSubmit={(event) => event.preventDefault()} sx={{ alignItems: "center", bgcolor: "#fff", borderRadius: "12px", boxShadow: "0 10px 22px rgba(0, 0, 0, 0.05)", display: "flex", height: 50, pl: 2.4, pr: 0.75 }}>
                <InputBase placeholder="Your email address" sx={{ color: "#111", flex: 1, fontSize: 14 }} />
                <IconButton type="submit" aria-label="Subscribe to newsletter" sx={{ color: "#111" }}><ArrowForward fontSize="small" /></IconButton>
                </Box>
            </Box>
            </Box>

            <Box sx={{ alignItems: "center", display: "flex", flexDirection: "column", gap: 3.3, mt: { xs: 7, md: 8 }, width: "100%" }}>
            <Box sx={{ alignItems: "center", display: "flex", gap: 1, justifyContent: "center" }}>
                <Box sx={{ bgcolor: "#2776c9", borderRadius: "2px", color: "#fff", fontSize: 10, fontWeight: 800, px: 0.7, py: 0.45 }}>AMEX</Box>
                <Box sx={{ bgcolor: "#5b45df", borderRadius: "3px", color: "#fff", fontSize: 12, fontWeight: 700, px: 0.7, py: 0.4 }}>Pay</Box>
                <Box sx={{ bgcolor: "#fff", borderRadius: "3px", color: "#1941a5", fontSize: 12, fontStyle: "italic", fontWeight: 800, px: 0.7, py: 0.4 }}>VISA</Box>
            </Box>
            <Typography sx={{ color: "#777", fontSize: 14 }}>{String.fromCharCode(169)} 2022 MinaSpace. All rights reserved.</Typography>
            </Box>
        </Box>
        </Box>
    );
}

export default Footer;
