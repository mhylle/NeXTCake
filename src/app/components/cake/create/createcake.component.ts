import {Component, OnInit, ViewChild} from "@angular/core";
import {CakeService} from "../../../services/cake.service";
import {CakeGiving} from "../../../CakeGiving";
import {DatePickerOptions, DateModel} from "ng2-datepicker";
import {ModalComponent} from "ng2-bs3-modal/components/modal";

@Component({
  moduleId: module.id,
  selector: 'createcake',
  templateUrl: 'createcake.component.html',
  styleUrls: ['createcake.component.css']
})
export class CreateCakeComponent implements OnInit {




  constructor(private cakeService: CakeService) {

    // autoApply?: boolean;
    // style?: 'normal' | 'big' | 'bold';
    // locale?: string;
    // minDate?: Date;
    // maxDate?: Date;
    // initialDate?: Date;
    // firstWeekdaySunday?: boolean;
    // format?: string;
    // selectYearText?: string;
    // todayText?: string;
    // clearText?: string;
    // this.nextCake = this.cakeService.getNextCake();
  }

  ngOnInit() {
    // this.cakeService.getCakeGivings().subscribe(cakeGivings => {
    //   this.cakeGivings = cakeGivings
    // });
  }




}
