import { createAction, props } from '@ngrx/store';

export enum YearActionTypes {
  LoadYears = '[YearSelector] Load Years',
  LoadYearsSuccess = '[YearSelector] Load Years Success',
  LoadYearsFailure = '[YearSelector] Load Years Failure',
}

export const LoadYears = createAction (YearActionTypes.LoadYears);
export const LoadYearsSuccess = createAction (YearActionTypes.LoadYearsSuccess,props<{years:number[]}>());
export const LoadYearsFailure = createAction (YearActionTypes.LoadYearsFailure,props<{error: string}>());

