import { createReducer, on } from '@ngrx/store';
import { loginSuccess, loginFailure } from './auth.actions';

export interface AuthState {
  token: string | null,
  isLoggedIn: boolean,
  error: string | null,
}

export const initialAuthState: AuthState = {
  token: null,
  isLoggedIn: false,
  error: null,
};

export const authReducer = createReducer(
  initialAuthState,
  on(loginSuccess, (state, { token }) => ({
    ...state,
    token,
    isLoggedIn: true,
    error: null,
  })),
  on(loginFailure, (state, { error }) => ({
    ...state,
    error,
    isLoggedIn: false,
  }))
);