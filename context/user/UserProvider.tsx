import React, { useReducer, useEffect } from "react";
import axiosClient from "../../config/axiosClient";
import { UserContext, userReducer } from "./";

interface Props {
  children: React.ReactNode;
}

export interface UserState {
  token?: string;
}

const USER_INITIAL_STATE: UserState = {
  token: "",
};

const UserProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, USER_INITIAL_STATE);
  
  const getToken = () => {
    let token = localStorage.getItem('token')
    if(!token){
        return token = ''
    }
    dispatch({ type: 'User - Get Token', payload: token })
    return token
  }

  useEffect(() => {
    getToken()
  }, [])
  

  return (
    <UserContext.Provider value={{ ...state, getToken }}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
