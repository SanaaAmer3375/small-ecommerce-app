import { useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import {
    Box,
    TextField,
    Button,
    Typography,
    Container,
    InputAdornment,
    IconButton,
    Alert,
    CircularProgress,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { loginUser } from "./authThunks";

function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/products";
    const { loading, error, isAuthenticated } = useAppSelector((state) => state.auth);
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async (data) => {
        const result = await dispatch(loginUser(data));
        if (loginUser.fulfilled.match(result)) {
        navigate(from, { replace: true });
        }
    };

    const handleTogglePassword = () => {
        setShowPassword((prev) => !prev);
    };

    if (isAuthenticated) {
        return <Navigate to="/products" replace />;
    }

    return (
        <Container maxWidth="xs" sx={{ mt: 8 }}>
        <Typography variant="h5" component="h1" gutterBottom>
            Login
        </Typography>

        {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
            {error}
            </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <TextField
            label="Email"
            fullWidth
            margin="normal"
            error={!!errors.email}
            helperText={errors.email?.message}
            {...register("email", {
                required: "Email is required",
                pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
                },
            })}
            />

            <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            fullWidth
            margin="normal"
            error={!!errors.password}
            helperText={errors.password?.message}
            {...register("password", {
                required: "Password is required",
                minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
                },
            })}
            slotProps={{
                input: {
                endAdornment: (
                    <InputAdornment position="end">
                    <IconButton
                        onClick={handleTogglePassword}
                        edge="end"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                    </InputAdornment>
                ),
                },
            }}
            />

            <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={isSubmitting || loading}
            sx={{ mt: 2 }}
            >
            {loading ? <CircularProgress size={24} color="inherit" /> : "Login"}
            </Button>
        </Box>
        </Container>
    );
}

export default LoginPage;
