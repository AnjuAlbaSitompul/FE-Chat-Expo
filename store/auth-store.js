import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";


const tokenStore = create((set) => ({
    token: null,
    setToken: (getToken) => {
        set({ token: getToken });
        AsyncStorage.setItem("token", getToken);
    },
    removeToken: () => set({ token: null })
}))

const userStore = create((set) => ({
    user: {
        username: null,
    },
    setUser: (user) => {
        set({ user });
    }
}))

const chatStore = create((set) => ({
    chat: [],
    setChat: (chat) => {
        set({ chat });
    },
    removeChat: () => set({ chat: [] })
}))

export {
    tokenStore,
    userStore,
    chatStore
}