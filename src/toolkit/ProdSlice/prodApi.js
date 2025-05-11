import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const prodApi = createApi({
    reducerPath: "prodApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/products" }),
    endpoints: (builder) => ({
        getAllData: builder.query({
            query: () => "",
        }),
    }),
});

export const { useGetAllDataQuery } = prodApi;
export default prodApi;
