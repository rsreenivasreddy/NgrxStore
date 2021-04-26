
import { LoadYears,LoadYearsFailure, LoadYearsSuccess} from './year.actions';
import { Action, createReducer, on } from '@ngrx/store';

export const yearFeatureKey = 'yearsState';

export interface YearsState {
  years: number[],
  error: string
}

export const initialState: YearsState = {
  years: [],
  error: ''
};

const _reducer = createReducer(
  initialState,
  on(LoadYears, (state) => {
    return  {
      ...state,
    };
  }),
  on(LoadYearsSuccess, (state, action) => {
    return  {
      ...state,
      years : action.years
    };
  }),
  on(LoadYearsFailure, (state, action) => {
    return  {
      ...state,
      years : [],
      error :  action.error
    };
  })
);

export function YearReducer(state:YearsState | undefined , action :Action) :YearsState {
  return _reducer(state, action);
}
