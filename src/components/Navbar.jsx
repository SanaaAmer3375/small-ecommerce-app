import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Button,
    IconButton,
    InputBase,
    Badge,
    Paper,
    Stack,
} from "@mui/material";
import { useContext } from "react";
import {
    DarkModeOutlined,
    Search,
    ShoppingBagOutlined,
    KeyboardArrowDown,
    StarBorderOutlined,
    Twitter,
    Facebook,
    Instagram,
    LightModeOutlined,
    YouTube,
} from "@mui/icons-material";
import { useAppDispatch } from "../app/hooks";
import { logout } from "../features/auth/authSlice";
import { ColorModeContext } from "../theme";

function Navbar() {
    const dispatch = useAppDispatch();
    const navLinks = ["HOME", "MINASPACE", "SHOP", "BLOG", "CONTACT"];
    const { mode, toggleColorMode } = useContext(ColorModeContext);
    const isDark = mode === "dark";
    const surface = isDark ? "#18221d" : "#fff";
    const mutedSurface = isDark ? "#111914" : "#f9f9f9";
    const textColor = isDark ? "#f5fbf7" : "#111";
    
    return (
        <Box component="header" sx={{ width: "100%" }}>
        {/* 1. Top Announcement Bar */}
        <Box sx={{ bgcolor: mutedSurface, py: 1.15, borderBottom: `1px solid ${isDark ? "#2b3931" : "#f0f0f0"}`, px: { xs: 2, md: 3.5 } }}>
            <Box
            sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "minmax(180px, 1fr) auto minmax(180px, 1fr)" },
                alignItems: "center",
                maxWidth: 1250,
                mx: "auto",
                width: "100%",
            }}
            >
            {/* Social Icons (Left) */}
            <Stack direction="row" spacing={2.25} sx={{ color: "#9b9b9b", display: { xs: "none", md: "flex" }, justifyContent: "flex-start" }}>
                <Twitter sx={{ fontSize: 16, cursor: "pointer", "&:hover": { color: "#1DA1F2" } }} />
                <Facebook sx={{ fontSize: 16, cursor: "pointer", "&:hover": { color: "#4267B2" } }} />
                <Instagram sx={{ fontSize: 16, cursor: "pointer", "&:hover": { color: "#E1306C" } }} />
                <YouTube sx={{ fontSize: 16, cursor: "pointer", "&:hover": { color: "#FF0000" } }} />
            </Stack>

            {/* Announcement Message (Center) */}
            <Typography
                variant="caption"
                fontWeight={600}
                sx={{ color: textColor, fontSize: { xs: 12, sm: 16 }, overflow: "hidden", textAlign: "center", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
            >
                🔥 Free shipping on all U.S. orders $50+
            </Typography>

          {/* Auth Actions (Right) */}
            <Stack direction="row" spacing={2} alignItems="center" sx={{ display: { xs: "none", md: "flex" }, justifyContent: "flex-end", ml: "auto" }}>
                <IconButton onClick={toggleColorMode} size="small" aria-label={`Switch to ${isDark ? "light" : "dark"} theme`} sx={{ color: textColor }}>
                    {isDark ? <LightModeOutlined fontSize="small" /> : <DarkModeOutlined fontSize="small" />}
                </IconButton>
                <Button
                disableElevation
                size="small"
                onClick={() => dispatch(logout())}
                sx={{
                bgcolor: "#000",
                borderRadius: "6px",
                color: "#fff",
                fontWeight: 600,
                textTransform: "none",
                fontSize: 13,
                px: 2,
                py: 0.5,
                "&:hover": { bgcolor: "#222" }
                }}
            >
                Logout
            </Button>
            </Stack>
            </Box>
        </Box>

        {/* 2. Main Navigation Bar */}
        <AppBar position="static" color="inherit" elevation={0} sx={{ bgcolor: surface, px: { xs: 2, md: 3.5 } }}>
            <Toolbar disableGutters sx={{ display: "grid", gridTemplateAreas: { xs: '"brand actions"', lg: '"nav brand actions"' }, gridTemplateColumns: { xs: "minmax(0, 1fr) auto", lg: "minmax(420px, 1fr) auto minmax(320px, 1fr)" }, gap: { xs: 1, lg: 0 }, maxWidth: 1250, minHeight: { xs: 62, md: 86 }, mx: "auto", width: "100%" }}>
            
            {/* Left Nav Links */}
            <Stack direction="row" spacing={3.25} alignItems="center" justifyContent="flex-start" sx={{ display: { xs: "none", lg: "flex" }, gridArea: "nav" }}>
                {navLinks.map((link, idx) => (
                <Box
                    key={link}
                    sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    color: idx === 0 ? "#12b76a" : textColor,
                    fontWeight: 700,
                    fontSize: 13.5,
                    letterSpacing: "0.5px",
                    "&:hover": { color: "#12b76a" },
                    }}
                >
                    {link}
                    {link !== "HOME" && <KeyboardArrowDown sx={{ fontSize: 16, ml: 0.2 }} />}
                </Box>
                ))}
            </Stack>

            {/* Center Brand Logo */}
            <Box
                sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                justifyContent: "center",
                cursor: "pointer",
                gridArea: "brand",
                justifySelf: { xs: "start", lg: "center" },
                }}
            >
                <Box
                sx={{
                    width: { xs: 32, md: 42 },
                    height: { xs: 32, md: 42 },
                    position: "relative",
                    overflow: "hidden",
                    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    background: "linear-gradient(135deg, #9bf0ce 0 47%, #2dc58a 48% 100%)",
                    "&::before": {
                    content: "''",
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(55deg, transparent 0 35%, #54d5a1 36% 55%, transparent 56%), linear-gradient(145deg, transparent 0 45%, #d0fae7 46% 66%, transparent 67%)",
                    },
                }}
                />
                <Typography variant="h5" sx={{ color: textColor, fontFamily: "Arial, Helvetica, sans-serif", fontSize: { xs: 25, md: 31 }, fontWeight: 800, letterSpacing: "-1.25px", lineHeight: 1, whiteSpace: "nowrap" }}>
                Mina Space
                </Typography>
            </Box>

            {/* Right Search Input & Icons */}
            <Stack direction="row" spacing={{ xs: 0.25, sm: 2 }} alignItems="center" sx={{ gridArea: "actions", justifyContent: "flex-end" }}>
                <Paper
                component="form"
                elevation={0}
                sx={{
                    p: "9px 12px",
                    display: { xs: "none", md: "flex" },
                    alignItems: "center",
                    bgcolor: surface,
                    border: `1px solid ${isDark ? "#405148" : "#e4e7ec"}`,
                    borderRadius: "8px",
                    width: 230,
                }}
                >
                <Search sx={{ color: "#667085", fontSize: 20, mr: 1 }} />
                <InputBase
                    placeholder="Search..."
                    sx={{ fontSize: 13, flex: 1, color: textColor }}
                />
                </Paper>

                <IconButton size="small" sx={{ display: { xs: "none", md: "inline-flex" } }}>
                <Badge
                    badgeContent={0}
                    showZero
                    sx={{
                    "& .MuiBadge-badge": {
                        bgcolor: "#12b76a",
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: 10,
                        height: 18,
                        minWidth: 18,
                    },
                    }}
                >
                    <StarBorderOutlined sx={{ color: "#111", fontSize: 22 }} />
                </Badge>
                </IconButton>

                <IconButton size="small" sx={{ display: { xs: "none", md: "inline-flex" } }}>
                <Badge
                    badgeContent={0}
                    showZero
                    sx={{
                    "& .MuiBadge-badge": {
                        bgcolor: "#12b76a",
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: 10,
                        height: 18,
                        minWidth: 18,
                    },
                    }}
                >
                <ShoppingBagOutlined sx={{ color: "#111", fontSize: 22 }} />
                </Badge>
                </IconButton>
            <IconButton onClick={toggleColorMode} size="small" aria-label={`Switch to ${isDark ? "light" : "dark"} theme`} sx={{ color: textColor, display: { xs: "inline-flex", md: "none" } }}>
                {isDark ? <LightModeOutlined fontSize="small" /> : <DarkModeOutlined fontSize="small" />}
            </IconButton>
            <Button
                disableElevation
                onClick={() => dispatch(logout())}
                size="small"
                sx={{ bgcolor: "#000", borderRadius: "6px", color: "#fff", display: { xs: "inline-flex", md: "none" }, fontSize: 11, fontWeight: 700, minWidth: "auto", px: 1.35, py: 0.65, textTransform: "none", "&:hover": { bgcolor: "#222" } }}
                >
                Logout
            </Button>
            </Stack>

            </Toolbar>
        </AppBar>
        </Box>
    );
}

export default Navbar;
