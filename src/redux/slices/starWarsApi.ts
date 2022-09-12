// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const starwarsApi = createApi({
  reducerPath: "starwarsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api/" }),
  tagTypes: ["StarWars"],
  endpoints: (builder) => ({
    getCharacters: builder.query<
      any,
      { page?: number; name?: string; id?: string }
    >({
      query: (arg) => {
        const { page, name, id } = arg;
        return {
          url: "character/",
          params: { page, name, id },
        };
      },
    }),
    getCharacterById: builder.query<any, string>({
      query: (id) => `character/${id}`,
    }),
  }),
});

export const { useGetCharactersQuery, useGetCharacterByIdQuery } = starwarsApi;
