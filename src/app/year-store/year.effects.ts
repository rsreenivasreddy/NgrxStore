
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { LoadYears,LoadYearsFailure, LoadYearsSuccess} from './year.actions';
import { CalenderYearService } from '../services/calender-years.service';


@Injectable()
export class YearEffects {

  constructor(private actions$: Actions, private calenderYearService: CalenderYearService) { }
  
  loadYears$= createEffect(() =>{
     return this.actions$.pipe(
      ofType(LoadYears),
      mergeMap(
        action => this.calenderYearService.getYears().pipe(
          map(response => (LoadYearsSuccess({ years: response.year }))),
          catchError(err => of(LoadYearsFailure({ error: err })))
        )
      )
     )});
 
}
