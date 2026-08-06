import { useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { EmailOutlined, LockOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import { Alert, Box, Button, Checkbox, CircularProgress, Container, FormControlLabel, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { loginUser } from "./authThunks";

function BrandMark() {
    return (
        <Box sx={{ alignItems: "center", display: "flex", gap: 1 }}>
        <Box sx={{ background: "linear-gradient(135deg, #9bf0ce 0 47%, #2dc58a 48% 100%)", clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)", height: 38, position: "relative", width: 38, "&::before": { background: "linear-gradient(55deg, transparent 0 35%, #54d5a1 36% 55%, transparent 56%), linear-gradient(145deg, transparent 0 45%, #d0fae7 46% 66%, transparent 67%)", content: "''", inset: 0, position: "absolute" } }} />
        <Typography sx={{ color: "#111", fontSize: 27, fontWeight: 800, letterSpacing: "-1px" }}>Mina Space</Typography>
        </Box>
    );
}

function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/products";
    const { loading, error, isAuthenticated } = useAppSelector((state) => state.auth);
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({ defaultValues: { rememberMe: false } });

    const onSubmit = async (data) => {
        const result = await dispatch(loginUser(data));
        if (loginUser.fulfilled.match(result)) navigate(from, { replace: true });
    };

    if (isAuthenticated) return <Navigate to="/products" replace />;

    return (
        <Box sx={{ bgcolor: "#fff", display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, minHeight: "100vh" }}>
        <Box sx={{ background: "radial-gradient(circle at 17% 82%, #b9f2d8 0 70px, transparent 71px), radial-gradient(circle at 80% 22%, #d3f9e6 0 130px, transparent 131px), #e8f8f1", display: { xs: "none", md: "flex" }, flexDirection: "column", justifyContent: "space-between", overflow: "hidden", p: { md: 5, lg: 8 }, position: "relative" }}>
            <BrandMark />
            <Box sx={{ maxWidth: 410, position: "relative", zIndex: 1 }}>
            <Typography component="h1" sx={{ color: "#111", fontSize: { md: 40, lg: 52 }, fontWeight: 800, letterSpacing: "-2px", lineHeight: 1.05, mb: 2.2 }}>Create, print, and sell with confidence.</Typography>
            <Typography sx={{ color: "#61756b", fontSize: 16, lineHeight: 1.7 }}>Manage your products and bring your next creative idea to life with Mina Space.</Typography>
            </Box>
            <Typography sx={{ color: "#63776d", fontSize: 13, position: "relative", zIndex: 1 }}>Your ideas. Your products. Your space.</Typography>
            <Box sx={{ border: "18px solid rgba(44, 189, 125, .18)", borderRadius: "50%", bottom: -135, height: 350, position: "absolute", right: -110, width: 350 }} />
        </Box>

        <Box sx={{ alignItems: "center", display: "flex", px: { xs: 2.5, sm: 5, md: 7 }, py: 6 }}>
            <Container disableGutters maxWidth="xs">
            <Box sx={{ display: { xs: "block", md: "none" }, mb: 6 }}><BrandMark /></Box>
            <Typography component="h2" sx={{ color: "#111", fontSize: 32, fontWeight: 800, letterSpacing: "-1.2px", mb: 1 }}>Welcome back</Typography>
            <Typography sx={{ color: "#777", fontSize: 15, mb: 4 }}>Sign in to continue to your Mina Space account.</Typography>

            {error && <Alert severity="error" sx={{ mb: 2.5 }}>{error}</Alert>}

            <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
                <Typography component="label" htmlFor="login-email" sx={{ color: "#222", display: "block", fontSize: 13, fontWeight: 700, mb: 0.8 }}>Email address</Typography>
                <TextField
                id="login-email"
                fullWidth
                placeholder="name@example.com"
                error={Boolean(errors.email)}
                helperText={errors.email?.message}
                {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email address" } })}
                slotProps={{ input: { startAdornment: <InputAdornment position="start"><EmailOutlined sx={{ color: "#8d9993", fontSize: 20 }} /></InputAdornment> } }}
              sx={{
                mb: 2.3,
                "& .MuiOutlinedInput-root": { borderRadius: "8px", height: 52 },
                "& input:-webkit-autofill, & input:-webkit-autofill:hover, & input:-webkit-autofill:focus": {
                  WebkitBoxShadow: "0 0 0 100px #fff inset",
                  WebkitTextFillColor: "#111",
                  caretColor: "#111",
                },
              }}
                />

                <Typography component="label" htmlFor="login-password" sx={{ color: "#222", display: "block", fontSize: 13, fontWeight: 700, mb: 0.8 }}>Password</Typography>
                <TextField
                id="login-password"
                type={showPassword ? "text" : "password"}
                fullWidth
                placeholder="Enter your password"
                error={Boolean(errors.password)}
                helperText={errors.password?.message}
                {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
                slotProps={{ input: { startAdornment: <InputAdornment position="start"><LockOutlined sx={{ color: "#8d9993", fontSize: 20 }} /></InputAdornment>, endAdornment: <InputAdornment position="end"><IconButton onClick={() => setShowPassword((value) => !value)} edge="end" aria-label={showPassword ? "Hide password" : "Show password"}>{showPassword ? <VisibilityOff /> : <Visibility />}</IconButton></InputAdornment> } }}
                sx={{ mb: 1, "& .MuiOutlinedInput-root": { borderRadius: "8px", height: 52 } }}
            />
            <Typography sx={{ color: "#7a8981", fontSize: 12, mb: 3.2 }}>Use your account password to sign in securely.</Typography>
            <FormControlLabel
                control={<Checkbox {...register("rememberMe")} size="small" sx={{ color: "#2cbd7d", p: 0.6, "&.Mui-checked": { color: "#2cbd7d" } }} />}
                label="Remember me on this device"
                sx={{ color: "#526158", display: "flex", fontSize: 13, m: 0, mb: 2.5, "& .MuiFormControlLabel-label": { fontSize: 13 } }}
            />
            <Button type="submit" variant="contained" fullWidth disabled={isSubmitting || loading} sx={{ bgcolor: "#2cbd7d", borderRadius: "8px", fontSize: 15, fontWeight: 700, minHeight: 52, textTransform: "none", "&:hover": { bgcolor: "#22a96d" } }}>
                {loading ? <CircularProgress size={23} color="inherit" /> : "Sign in"}
                </Button>
            </Box>

            <Box sx={{ bgcolor: "#f6fbf8", borderRadius: "8px", mt: 3.2, p: 1.8 }}>
                <Typography sx={{ color: "#65746c", fontSize: 12, lineHeight: 1.65 }}>Demo account: <Box component="span" sx={{ color: "#222", fontWeight: 700 }}>sanaa@gmail.com</Box> &nbsp;·&nbsp; Password: <Box component="span" sx={{ color: "#222", fontWeight: 700 }}>123456</Box></Typography>
            </Box>
            </Container>
        </Box>
        </Box>
    );
}

export default LoginPage;
