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

export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  },
  {
    condition: (id, { getState }) => getState().products.selectedProduct?.id !== Number(id),
  }
);
