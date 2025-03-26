import axios from "axios";
import { create } from "zustand";

export const useProductStore = create((set, get) => ({
  products: [],
  isLoaded: false, // Track if data is loaded
  isLoggedIn: false,
  orgId: "",
  token: "",

  getProducts: async () => {
    if (get().isLoaded) return; // Prevent multiple API calls
    try {
      console.log(get().orgId, typeof get().token);
      const orgIdToPass = get().orgId;
      const bearerToken = get().token;
      const response = await axios.get(
        `http://192.168.6.164:8001/products/orgId/${orgIdToPass}`,
        {
          headers: {
            authorization: `Bearer ${bearerToken}`,
          },
        }
      );
      // console
      set({ products: response.data.Products, isLoaded: true });
    } catch (error) {
      const errorReceived = error.response.data.message;
      if (errorReceived === "No token provided.") alert("Please LogIn First");
      // alert(error);
    }
  },
  setIsLogIN: async () => {
    try {
      set({ isLoggedIn: true });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },
  setOrgId: (orgid, token) => {
    set({ orgId: orgid, token: token });
    // console.log(orgId, token);
  },
}));
