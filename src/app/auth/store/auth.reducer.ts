import { createReducer, on } from '@ngrx/store';
import { loginSuccess, loginFailure, clearLogin } from './auth.actions';

export interface AuthState {
  role: string | null,
  token: any,
  isLoggedIn: boolean,
  error: string | null,
}

export const initialAuthState: AuthState = {
  role: null,
  token: null,
  isLoggedIn: false,
  error: null,
};

export const authReducer = createReducer(
  initialAuthState,
  on(loginSuccess, (state, { token, role }) => ({
    ...state,
    role: role,
    token: token,
    isLoggedIn: true,
    error: null,
  })),

  on(loginFailure, (state, { error }) => ({
    ...state,
    error,
    role: null,
    token: null,
    isLoggedIn: false,
  })),

  on(clearLogin, (state) => ({
    ...state,
    isLoggedIn: false,
  }))
);