import { createContext, useContext, useState } from "react";

const defaultProviderValues = {};

const AuthContext = createContext(defaultProviderValues);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [userRole, setUserRole] = useState("");
  const [userPortfolio, setUserPortfolio] = useState("");
  const [loading, setLoading] = useState(true);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        userRole,
        setUserRole,
        loading,
        setLoading,
        userPortfolio,
        setUserPortfolio,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
