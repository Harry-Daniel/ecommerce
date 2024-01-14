import { useQuery } from "@tanstack/react-query";

import APIClient from "../services/api-client";


const apiClient = new APIClient('products')

const useProducts = () => useQuery({
    queryKey: ['products'],
    queryFn: apiClient.getAll,
    staleTime: 24*60*60*1*1000,
    
})
export default useProducts;