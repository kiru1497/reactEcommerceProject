import { createContext, useMemo, useState } from "react";

export const AuthContext = createContext({
  token: null,
  user: null,
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");

    return savedUser ? JSON.parse(savedUser) : null;
  });

  function login(authData) {
    const newToken = authData.idToken;

    const newUser = {
      id: authData.localId,
      email: authData.email,
    };

    setToken(newToken);
    setUser(newUser);

    localStorage.setItem("token", newToken);
    localStorage.setItem("user", JSON.stringify(newUser));
  }

  function logout() {
    setToken(null);
    setUser(null);

    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

  const contextValue = useMemo(() => {
    return {
      token,
      user,
      login,
      logout,
    };
  }, [token, user]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
