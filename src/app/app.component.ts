import {Component, ViewChild} from "@angular/core";
import {ModalComponent} from "ng2-bs3-modal/components/modal";
import {DatePickerOptions, DateModel} from "ng2-datepicker";
import {CakeService} from "./services/cake.service";
import {NgbTimeStruct, NgbTimepickerConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuShown = false;

  @ViewChild('addCake')
  modal: ModalComponent;
  date: DateModel;
  time: NgbTimeStruct = {hour: 13, minute: 30, second: 0};
  location: string = "loungen";
  giver: string;
  options: DatePickerOptions;

  private cardStatus: string;

  constructor(private cakeService: CakeService, timePickerConfig: NgbTimepickerConfig) {
    this.cardStatus = "Ny kage givning";
    this.options = new DatePickerOptions();
    this.options.firstWeekdaySunday = false;
    this.options.style = "normal";
    timePickerConfig.spinners = false;
  }

  toggleMenu() {
    this.menuShown = !this.menuShown;
  }

  doAddCake() {
    this.modal.open();
  }

  closed() {
    let newCakeGiving = {
      date: this.date,
      time: this.time,
      location: this.location,
      giver: this.giver
    };
    this.cakeService.addCakeGiving(newCakeGiving).subscribe(res =>
      res.json());
    console.log("Date chosen: " + this.date);
  }
}
