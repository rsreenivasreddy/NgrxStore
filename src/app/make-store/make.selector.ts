import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MakersState } from './make.reducer';


 const getMakesFeatureState = createFeatureSelector<MakersState>('makesState');

export const getMakes= createSelector (
    getMakesFeatureState,
    (state) =>state.makers
)

export const getError= createSelector (
    getMakesFeatureState,
    (state) =>state.error
)
