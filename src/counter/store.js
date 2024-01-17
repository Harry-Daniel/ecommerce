import { create } from "zustand";

const useCounterStore= create(set => ({
    counter:0,
    increment: () => set(store => ({counter: store.counter+1})),
    reset:()=>set(()=>({counter:0}))
     
}));

export default useCounterStore;