import { createFeatureSelector, createSelector } from '@ngrx/store';
import { YearsState } from './year.reducer';


 const getYearFeatureState = createFeatureSelector<YearsState>('yearsState');

export const getYears= createSelector (
    getYearFeatureState,
    (state) =>state.years
)

export const getError= createSelector (
    getYearFeatureState,
    (state) =>state.error
)
