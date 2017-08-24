import {Component, OnInit, ViewChild} from "@angular/core";
import {ModalComponent} from "ng2-bs3-modal/components/modal";
import {DateModel, DatePickerOptions} from "ng2-datepicker";
import {CakeService} from "./services/cake.service";
import {NgbTimepickerConfig, NgbTimeStruct} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  menuShown = false;

  @ViewChild('addCake')
  addCakeModal: ModalComponent;
  @ViewChild('deleteCake')
  deleteCakeModal: ModalComponent;
  date: DateModel;
  time: NgbTimeStruct = {hour: 13, minute: 30, second: 0};
  location: string = "loungen";
  giver: string;
  options: DatePickerOptions;

  cakeId: string;

  private cardStatus: string;
  private cakes: any[];

  constructor(private cakeService: CakeService, timePickerConfig: NgbTimepickerConfig) {
    this.cardStatus = "Ny kage givning";
    this.options = new DatePickerOptions();
    this.options.firstWeekdaySunday = false;
    this.options.style = "normal";
    timePickerConfig.spinners = false;
  }


  ngOnInit(): void {
    this.cakeService.getCakeGivings().subscribe(res => {
      this.cakes = res;
    })
  }

  toggleMenu() {
    this.menuShown = !this.menuShown;
  }

  doAddCake() {
    this.addCakeModal.open();
  }

  doDeleteCake() {
    this.deleteCakeModal.open();
  }

  addCakeclosed() {
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

  deleteCake(cakeId: string) {
    this.cakeService.removeCakeGiving(cakeId).subscribe(res => {
      console.log("deletecake" + res.json());
      res.json();
    })
  }
}
