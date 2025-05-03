import { create } from 'zustand';

type User = {
    name: string;
    email: string;
    memberCode: string;
    phone: string;
    password: string;
};
  
type AuthStore = {
    isLoggedIn: boolean;
    user: User | null;
    setIsLoggedIn: (value: boolean) => void;
    setUser: (user: User | null) => void;
};
  
export const useAuthStore = create<AuthStore>((set) => ({
    isLoggedIn: false,
    user: null,
    setIsLoggedIn: (value) => set({ isLoggedIn: value }),
    setUser: (user) => set({ user }),
}));
