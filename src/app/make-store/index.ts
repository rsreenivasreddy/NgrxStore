// import {
//     ActionReducer,
//     ActionReducerMap,
//     createFeatureSelector,
//     createSelector,
//     MetaReducer
//   } from '@ngrx/store';
//   import { environment } from '../../environments/environment';
//   import * as reducer from './make.reducer';
  
  
//   export interface State {
//     [reducer.vehicleFeatureKey]: reducer.MakersState;
//   }
  
//   export const reducers: ActionReducerMap<State> = {
//     [reducer.vehicleFeatureKey]: reducer.YearReducer,
//   };
  
  
//   export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
  