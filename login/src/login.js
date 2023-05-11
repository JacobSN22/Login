import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export const useLogingStore = create(persist((set) => ({
        loggedIn: false,
        user: "",
        user_id: "",
    
    setLoggedIn : (user) => set(() => ({
        loggedIn : true,
        user: user,
        user_id: user.user_id
    })),
    setLogOut : () => set(() => ({
        loggedIn : false,
        user: "",
        user_id : "",
    }))
}),{name : "token", storage : createJSONStorage(() => localStorage)}));