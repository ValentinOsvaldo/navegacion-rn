import React, {createContext, useReducer} from 'react';
import {authReducer} from './authReducer';

// Definir como luce la información
export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

// Estado Inicial
export const authInitialState: AuthState = {
  isLoggedIn: false,
};

// Lo usaremos para decirle a React cómo luce y que expone el context
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  changeIcon: (icon: string) => void;
  logout: () => void;
  setName: (username: string) => void;
}

// Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

interface Props {
  children: JSX.Element | JSX.Element[];
}

// Componente proveedor del estado
export const AuthProvider = ({children}: Props) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({
      type: 'signIn',
    });
  };

  const logout = () => {
    dispatch({type: 'logout'});
  };

  const changeIcon = (iconName: string) => {
    dispatch({
      type: 'Change Favorite Icon',
      payload: iconName,
    });
  };

  const setName = (username: string) => {
    dispatch({type: 'setName', payload: username});
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        changeIcon,
        logout,
        setName
      }}>
      {children}
    </AuthContext.Provider>
  );
};
