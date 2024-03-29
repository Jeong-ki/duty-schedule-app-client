import {create} from 'zustand';

interface User {
  id: number;
  username: string;
  email: string;
  accessToken: string;
}

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  logout: () => void;
}

export const useUserStore = create<UserStore>(set => ({
  user: null,
  setUser: user => set({user}),
  logout: () => set({user: null}),
}));
