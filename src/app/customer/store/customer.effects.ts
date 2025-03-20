import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CustomerService } from "../customer.service";
import { getCustomers, getCustomersFailure, getCustomersSuccess } from "./customer.actions";
import { catchError, map, mergeMap, of } from "rxjs";

@Injectable()
export class CustomerEffects {
    private actions$ = inject(Actions);
    private customerService = inject(CustomerService);

    get$ = createEffect(() => 
     this.actions$.pipe(
        ofType(getCustomers),
        mergeMap((action) => 
         this.customerService.get(action.token).pipe(
            map((customers: any) => getCustomersSuccess(customers)),
            catchError((error) => of(getCustomersFailure({error: error.message})))
         )
        )
     )
    )
}