import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (page, { rejectWithValue }) => {
        try {
        const limit = 10;
        const skip = (page - 1) * limit;
        const response = await axios.get(
            `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
        );
        return response.data;
        } catch (err) {
        return rejectWithValue(err.message);
        }
    }
);