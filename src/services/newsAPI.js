import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const NewsHeaders = {
  'x-bingapis-sdk': 'true',
  'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
  'x-rapidapi-key': 'f01062aeafmsh2a022aeb1906a6cp1ed77cjsn4eceab8936f9'
};

const createReq = (url) => ({ url, headers: NewsHeaders });
const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

export const NewsApi = createApi({
  reducerPath: 'NewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: ({ newsCategory, count }) => createReq(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    }),
  }),
});

export const { useGetNewsQuery } = NewsApi;