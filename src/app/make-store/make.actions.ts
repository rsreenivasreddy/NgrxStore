import { createAction, props } from '@ngrx/store';

export enum MakeActionTypes {
  LoadMakes = '[Makeselector] Load Makes',
  LoadMakesSuccess = '[Makeselector] Load Makes Success',
  LoadMakesFailure = '[Makeselector] Load Makes Failure',
}

export const LoadMakes = createAction (MakeActionTypes.LoadMakes,props<{selectedYear:number}>());
export const LoadMakesSuccess = createAction (MakeActionTypes.LoadMakesSuccess,props<{makes:string[]}>());
export const LoadMakesFailure = createAction (MakeActionTypes.LoadMakesFailure,props<{error: string}>());

