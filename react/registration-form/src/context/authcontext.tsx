import React, { createContext, useReducer, ReactNode, useContext } from 'react';

// Define the user type
interface User {
  name: string;
  email: string;
}

// Define the state and action types
interface AuthState {
  user: User | null;
}

type AuthAction = { type: 'LOGIN'; payload: User } | { type: 'LOGOUT' };

// Define the initial state
const initialAuthState: AuthState = {
  user: null,
};

// Reducer function to manage state changes
function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload };
    case 'LOGOUT':
      return { user: null };
    default:
      return state;
  }
}

// Create Context
const AuthContext = createContext<{
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
}>({
  state: initialAuthState,
  dispatch: () => null,
});

// AuthProvider component to wrap around the app
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);

  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>;
};

// Custom hook to use the Auth context
export const useAuth = () => useContext(AuthContext);
