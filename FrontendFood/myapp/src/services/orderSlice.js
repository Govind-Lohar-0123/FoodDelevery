import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const orderSlice = createApi({
    reducerPath: "orderApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/orderApi" }),
    endpoints: builder => ({

        getOrder: builder.query({
            query: () => ({
                url: "/getorder",
                method: "GET",
            })
        }),

        addOrder: builder.mutation({
            query: (order_data) => ({
                url: "/addorder",
                method: "PUT",
                body: order_data
            })
        })

    })


})
export const { useGetOrderQuery,useAddOrderMutation } = orderSlice;
export default orderSlice;