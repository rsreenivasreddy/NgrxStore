
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { LoadMakes,LoadMakesFailure, LoadMakesSuccess} from './make.actions';
import { CarMakersService } from '../services/car-makers.service';


@Injectable()
export class MakeEffects {

  constructor(private actions$: Actions, private carMakersService: CarMakersService) { }
  
  loadYears$= createEffect(() =>{
     return this.actions$.pipe(
      ofType(LoadMakes),
      mergeMap(
        action => this.carMakersService.getMakers(action.selectedYear).pipe(
          map(response => (LoadMakesSuccess({ makes: response.make }))),
          catchError(err => of(LoadMakesFailure({ error: err })))
        )
      )
     )});
 
}
