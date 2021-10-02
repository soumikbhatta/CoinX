import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// var options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/exchanges',
//     headers: {
//       'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//       'x-rapidapi-key': 'f01062aeafmsh2a022aeb1906a6cp1ed77cjsn4eceab8936f9'
//     }
//   };

const CoinApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'f01062aeafmsh2a022aeb1906a6cp1ed77cjsn4eceab8936f9'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';
const createReq = (url) => ({ url, headers: CoinApiHeaders})

export const coinxApi = createApi({
    reducer: 'coinxApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCoins: builder.query({
            query: (count) => createReq( `/coins?limit=${count}`),
        })
    })
})

export const {
    useGetCoinsQuery,
} = coinxApi;

// make store.js
// pass that store variable to a Provider
// crete a api to fetch api data from rapidapi
// connect api to store