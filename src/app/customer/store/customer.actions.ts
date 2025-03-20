import { createAction, props } from '@ngrx/store';

export const getCustomers = createAction(
    '[Customer] Get Customers',
    props<{token: string}>()
);

export const getCustomersSuccess = createAction(
    '[Customer] Get Customers Success',
    props<{customers: any}>()
);

export const getCustomersFailure = createAction(
    '[Customer] Get Customers Failure',
    props<{ error: string }>()
);