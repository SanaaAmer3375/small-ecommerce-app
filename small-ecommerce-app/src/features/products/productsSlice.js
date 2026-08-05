import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './productsThunks';

const initialState = {
    items: [],
    loading: false,
    error: null,
    currentPage: 1,
    total: 0,
    limit: 10,
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
        state.currentPage = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload.products;
            state.total = action.payload.total;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Failed to fetch products';
        });
    },
});

export const { setCurrentPage } = productsSlice.actions;
export default productsSlice.reducer;