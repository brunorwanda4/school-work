import React, { createContext, useReducer, useContext, ReactNode, useEffect } from 'react';

interface User {
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
}

type AuthAction =
  | { type: 'LOGIN'; payload: User }
  | { type: 'LOGOUT' }
  | { type: 'SET_LOADING'; payload: boolean };

const initialAuthState: AuthState = {
  user: JSON.parse(localStorage.getItem('auth_user') || 'null'),
  loading: false,
};

function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('auth_user', JSON.stringify(action.payload));
      return { ...state, user: action.payload, loading: false };
    case 'LOGOUT':
      localStorage.removeItem('auth_user');
      return { ...state, user: null, loading: false };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}

const AuthContext = createContext<{
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
}>({
  state: initialAuthState,
  dispatch: () => null,
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);

  useEffect(() => {
    const user = localStorage.getItem('auth_user');
    if (user) {
      dispatch({ type: 'LOGIN', payload: JSON.parse(user) });
    }
  }, []);

  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
