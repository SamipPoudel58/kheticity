import { UserLoginResponse } from '@/pages/login';
import create, { SetState } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserState {
  loginDetail: UserLoginResponse;
  setLoginDetail: (value: UserLoginResponse) => void;
}

let store = (set: SetState<UserState>) => ({
  loginDetail: {} as UserLoginResponse,
  setLoginDetail: (value: UserLoginResponse) => set({ loginDetail: value }),
});

let persistedStore = persist(store, {
  name: 'user-store',
  getStorage: () => sessionStorage,
});

const useUserStore = create<UserState>(persistedStore);

export default useUserStore;
