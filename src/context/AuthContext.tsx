import React, { createContext, useContext, useState, useEffect } from 'react';

export type AuthAccessTokenContent = {
    accessToken: string,
    setAccessToken: React.Dispatch<React.SetStateAction<string>>
}

export const AuthContext = createContext<AuthAccessTokenContent>({
    accessToken: '',
    setAccessToken: () => {},
});

export const useAuthAccessToken = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState<string>('');

    useEffect(() => {
    }, [accessToken]);

    return (
        <AuthContext.Provider value={{ accessToken, setAccessToken }}>
            {children}
        </AuthContext.Provider>
    );
};
