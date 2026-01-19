import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

/**
 * ১. Auth Store: এটি লোকাল স্টোরেজে ডাটা সেভ রাখবে (Persisted)
 */
export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,

      login: (userData, token) => set({
        user: userData,
        token: token,
        isAuthenticated: true,
      }),

      updateProfile: (updates) => set((state) => ({
        user: state.user ? { ...state.user, ...updates } : updates,
      })),

      logout: () => {
        set({ user: null, token: null, isAuthenticated: false });
      },
    }),
    {
      name: 'autopro-auth-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

/**
 * ২. Loading Store: এটি শুধু মেমোরিতে থাকবে (Not Persisted)
 * এক পেজ থেকে অন্য পেজে যাওয়ার সময় এটি ব্যবহার করবেন।
 */
export const useLoadingStore = create((set) => ({
  isLoading: false,
  setIsLoading: (val) => set({ isLoading: val }),
}));