import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://rickandmortyapi.com/api/character';


export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  endpoints: builder => ({
    getCharacter: builder.query({
      query: id => `/${id}`
    }),
    getAllCharacters: builder.query({
      query: page => `/?page=${page}`
    })
  })
})

export const {useGetCharacterQuery, useGetAllCharactersQuery} = apiSlice;