import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as yearReducer from './../year-store/year.reducer';
import * as makeReducer from './../make-store/make.reducer';


export interface State {
  [yearReducer.yearFeatureKey]: yearReducer.YearsState;
  [makeReducer.makesFeatureKey] :makeReducer.MakersState;
}

export const reducers: ActionReducerMap<State> = {
  [yearReducer.yearFeatureKey]: yearReducer.YearReducer,
  [makeReducer.makesFeatureKey]:makeReducer.MakeReducer
};


// export interface AppState {
//   [SHARED_STATE_NAME]: SharedState;
//   [AUTH_STATE_NAME]: AuthState;
//   router: RouterReducerState;
// }

// export const appReducer = {
//   [SHARED_STATE_NAME]: SharedReducer,
//   [AUTH_STATE_NAME]: AuthReducer,
//   router: routerReducer,
// };


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
