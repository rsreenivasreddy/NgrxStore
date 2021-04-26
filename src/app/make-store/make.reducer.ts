
import { LoadMakes,LoadMakesFailure, LoadMakesSuccess} from './make.actions';
import { Action, createReducer, on } from '@ngrx/store';

export const makesFeatureKey = 'makesState';

export interface MakersState {
  makers: string[],
  error: string
}

export const initialState: MakersState = {
  makers: [],
  error: ''
};

const _reducer = createReducer(
  initialState,
  on(LoadMakes, (state) => {
    return  {
      ...state,
    };
  }),
  on(LoadMakesSuccess, (state, action) => {
    return  {
      ...state,
      years : action.makes
    };
  }),
  on(LoadMakesFailure, (state, action) => {
    return  {
      ...state,
      years : [],
      error :  action.error
    };
  })
);

export function MakeReducer(state:MakersState | undefined , action :Action) :MakersState {
  return _reducer(state, action);
}
