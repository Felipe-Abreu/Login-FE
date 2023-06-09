import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface AuthContextInterface {
  isAuthenticated: boolean;
  setToken: Function;
  token: any;
  setExpiredToken: Function;
  expiredToken: number | null;
  logout: Function;
}

export const AuthContext = React.createContext<AuthContextInterface>({
  isAuthenticated: false,
  setToken: () => {},
  token: "",
  setExpiredToken: () => {},
  expiredToken: 0,
  logout: () => {},
});

interface Props {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: Props) {
  const [isAuthenticated, SetIsAuthenticated] = React.useState(false);
  const [token, setToken] = useState(localStorage.getItem("myApp-JWT"));
  const [expiredToken, setExpiredToken] = useState<number | null>(
    localStorage.getItem("expired-token")
      ? parseInt(localStorage.getItem("expired-token")!, 10)
      : null
  );
  const [isLogoutByTimeout, setIsLogoutByTimeout] = React.useState(false);

  function logout() {
    setToken("");
    setExpiredToken(null);
    SetIsAuthenticated(false);
    localStorage.removeItem("myApp-JWT");
    localStorage.removeItem("expired-token");
  }

  React.useEffect(() => {
    if (token) {
      SetIsAuthenticated(true);
      localStorage.setItem("myApp-JWT", token);
    } else {
      logout();
    }
  }, [token]);

  useEffect(() => {
    if (expiredToken) {
      const timeout = setTimeout(() => {
        setIsLogoutByTimeout(true);
        logout();
      }, expiredToken);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [expiredToken]);

  useEffect(() => {
    if (isLogoutByTimeout) {
      toast.info("Deslogado por tempo!");
    }
  }, [isLogoutByTimeout]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        token,
        setToken,
        setExpiredToken,
        expiredToken,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
