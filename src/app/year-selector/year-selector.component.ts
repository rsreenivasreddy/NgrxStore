import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { MakersState } from '../make-store/make.reducer';
import { LoadYears} from '../year-store/year.actions';
import { YearsState } from '../year-store/year.reducer';
import * as YearSelectors from '../year-store/year.selector';
import * as MakeSelectors from '../make-store/make.selector';
import { LoadMakes} from '../make-store/make.actions';

@Component({
  selector: 'app-year-selector',
  templateUrl: './year-selector.component.html',
  styleUrls: ['./year-selector.component.css']
})
export class YearSelectorComponent implements OnInit {

  years:number[];
  makes:string[];
  errorMessage:string='';
  showYears:boolean =false;
  showMakes:boolean =false;

  selectedYear :number ;
  selectedMake :string ;
  constructor(private yearsStore:Store<YearsState>,private makesStore:Store<MakersState>) { }

  ngOnInit(): void {

   
  }
  getYears() {
    console.log("getYears");
    this.yearsStore.dispatch(LoadYears());
    this.yearsStore.pipe(select(YearSelectors.getYears)).subscribe(
      res=>{
        this.years = res;
        this.showYears =true;
      }
    )
  }
  canShow(index){
    return index< this.years.length;
  }

  selectYear(selectedYear:number){
    this.selectedYear = selectedYear;
    this.makesStore.dispatch(LoadMakes({'selectedYear':this.selectedYear}));
    this.makesStore.pipe(select(MakeSelectors.getMakes)).subscribe(
      res=>{
        this.makes = res;
        this.showMakes = true;
        this.showYears =false;
      }
    )
  }
  selectMake(selectedMake:string){
    this.selectedMake = selectedMake;
    // this.makesStore.dispatch(LoadMakes({'selectedYear':this.selectedYear}));
    // this.makesStore.pipe(select(MakeSelectors.getMakes)).subscribe(
    //   res=>{
    //     this.makes = res;
    //     this.showMakes = true;
    //     this.showYears =false;
    //   }
    // )
  }

}
