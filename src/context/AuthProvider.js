import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState({});
    
    const login = (user) => {
        setUser(user);
        setIsAuthenticated(true);
    };
    
    return (
        <AuthContext.Provider
        value={{
            isAuthenticated,
            user,
            login,
        }}
        >
        {children}
        </AuthContext.Provider>
    );
    }

    export default AuthContext;
