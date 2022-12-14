import { createContext } from 'react';

interface ContextProps {
    token?: string;

    getToken: () => string;
}

export const UserContext = createContext({} as ContextProps)