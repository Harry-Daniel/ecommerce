import { useQuery } from "@tanstack/react-query";

import APIClient from "../services/api-client";


const apiClient = new APIClient('products')

const useProducts = () => useQuery({
    queryKey: ['products'],
    queryFn: apiClient.getAll,
    
})
export default useProducts;