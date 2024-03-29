import { create } from "zustand";

const useProductStore= create(set => ({
    total:0,
    cart:[],
    addToCart: (data) => set(store => ({cart: [...store.cart,data]})),
    totaling: (individualtotal) => set(store => ({total:store.total+individualtotal})),
    reset:()=>set(()=>({counter:0})),
    removeFromCart: (data) =>set(store=>({cart:store.cart.filter(cart=>cart.data.data.id!==data)})),
     
}));

export default useProductStore;