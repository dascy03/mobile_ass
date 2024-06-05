import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import BASE_URL from "../env";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: null,
    authenticated: null,
  });

  const onRegister = async (email, password, name) => {
    // Your implementation for registration
    try {
      const response = await axios.post(`${BASE_URL}/users/register`, {
        email,
        password,
        name,
      });
      console.log("register", name);
      console.log(response);
      return response;
    } catch (error) {
      console.log("error", error.response.data);
      return { error };
      //console.error("Failed to login:", error);
    }
  };

  const onLogin = async (email, password) => {
    // Your implementation for login
    try {
      console.log("login", email);
      const response = await axios.post(`${BASE_URL}/users/login`, {
        email,
        password,
      });
      const token = response.data.data.accessToken;
      console.log("token", token);
      setAuthState({ token, authenticated: true });
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      await SecureStore.setItemAsync("token", token);
      return response;
    } catch (error) {
      console.log("error", error.response);
      return { error };
      //console.error("Failed to login:", error);
    }
  };

  const onLogout = async () => {
    // Your implementation for logout
    setAuthState({ token: null, authenticated: false });
    axios.defaults.headers.common["Authorization"] = null;
    await SecureStore.deleteItemAsync("token");
  };

  useEffect(() => {
    const loadAuthState = async () => {
      try {
        const token = await SecureStore.getItemAsync("token");
        if (token) {
          setAuthState({ token, authenticated: true });
        } else {
          setAuthState({ token: null, authenticated: false });
        }
      } catch (error) {
        console.error("Failed to load authentication state:", error);
      }
    };

    loadAuthState();
  }, []);

  return (
    <AuthContext.Provider value={{ authState, onRegister, onLogin, onLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
