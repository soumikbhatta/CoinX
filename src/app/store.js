import { configureStore } from '@reduxjs/toolkit';
import { coinxApi } from '../services/coinxAPI';
import { NewsApi } from '../services/newsAPI';

export default configureStore({
    reducer: {
        [coinxApi.reducerPath]: coinxApi.reducer,
        [NewsApi.reducerPath]: NewsApi.reducer,
    },

});