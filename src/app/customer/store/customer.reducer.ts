import { createReducer, on } from "@ngrx/store";
import { getCustomersFailure, getCustomersSuccess } from "./customer.actions";

export interface CustomerState {
    customers: [],
    isLoading: boolean,
    error: string | null,
}

export const initialCustomerState: CustomerState = {
    customers: [],
    isLoading: true,
    error: null
};

export const customerReducer = createReducer(
    initialCustomerState,
    on(getCustomersSuccess, (state, {customers}) => ({
        ...state,
        customers,
        isLoading: false,
        error: null
    })),
    on(getCustomersFailure, (state, {error}) => ({
        ...state,
        isLoading: false,
        error,
        
    }))
)