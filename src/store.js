import { create } from "zustand";

const useStore = create(
    (set) => ({
        activeMenu: false,
        setActiveMenu: () => set((state) => ({ activeMenu: !state.activeMenu})),
        isLogin:false,
        setIsLogin: () => set((state) => ({ isLogin: !state.isLogin })),
    })
)

export default useStore;