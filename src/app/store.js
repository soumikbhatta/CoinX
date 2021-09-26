import { configureStore } from '@reduxjs/toolkit';
import { coinxApi } from '../services/coinxAPI';

export default configureStore({
    reducer: {
        [coinxApi.reducerPath]: coinxApi.reducer,
    },

});