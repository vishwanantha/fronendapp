import axios from "axios";
import {  fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const ApiService=axios.create(
   {
        baseQuery : fetchBaseQuery({ baseUrl : `${import.meta.env.VITE_API_URL}`}),
        endpoints : builder => ({
            // get categories
            getCategories : builder.query({
               
                query: () => '/api/create',
                providesTags: ['categories']
            }),
    
            // get labels
            getLabels : builder.query({
              
                query : () => '/api/transaction/labels',
                providesTags: ['transaction']
            }),
    
            // add new Transaction
            addTransaction : builder.mutation({
                query : (initialTransaction) => ({
                  
                    url: '/api/transaction',
                    method: "POST",
                    body: initialTransaction
                }),
                invalidatesTags: ['transaction']
            }),
    
          
            deleteTransaction : builder.mutation({
                query : recordId => ({
                    
                    url : '/api/transaction',
                    method : "DELETE",
                    body : recordId
                }),
                invalidatesTags: ['transaction']
            })
    
        })
    })


   
   

 

   

 export default ApiService



   
