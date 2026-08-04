import { createAsyncThunk } from '@reduxjs/toolkit';

const DEMO_EMAIL = 'sanaa@gmail.com';
const DEMO_PASSWORD = '123456';

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({ email, password }, { rejectWithValue }) => {
        await new Promise((resolve) => setTimeout(resolve, 800));
        if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
        const user = { email };
        const token = `fake-jwt-token-${Date.now()}`;
        return { user, token };
        }
        return rejectWithValue('Invalid email or password');
    }
);