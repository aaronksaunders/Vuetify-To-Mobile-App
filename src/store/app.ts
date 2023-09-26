// Utilities
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: (): {
    showBackButton: boolean;
    isAuthenticated: boolean;
    user: string | null;
  } => ({
    //
    showBackButton: false,
    isAuthenticated: false,
    user: null,
  }),
  actions: {
    setBackButton(value: boolean) {
      this.showBackButton = value;
    },
    async login({
      username,
      password,
    }: {
      username: string;
      password?: string;
    }) {
      if (!username) throw new Error("Invalid Credentials");
      // Implement your login API call here.
      // If the login is successful, set isAuthenticated to true.
      window.localStorage.setItem("USER", username);
      this.isAuthenticated = true;
      this.user = username;
      return true;
    },
    async logout() {
      // Implement your logout API call here.
      // If the logout is successful, set isAuthenticated to false.
      window.localStorage.removeItem("USER");
      this.isAuthenticated = false;
      this.user = null;
      return true;
    },
    async checkAuthentication() {
      return new Promise((resolve) => {
        const user = window.localStorage.getItem("USER");
        this.isAuthenticated = user ? true : false;
        this.user = user;
        resolve(this.isAuthenticated);
      });
    },
  },
});
