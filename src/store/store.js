import { create } from "zustand";

const useProductStore= create(set => ({
    cart:[],
    addToCart: (data) => set(store => ({cart: [...store.cart,data]})),
    reset:()=>set(()=>({counter:0}))
     
}));

export default useProductStore;