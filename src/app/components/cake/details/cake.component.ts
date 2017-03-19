import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {CakeService} from "../../../services/cake.service";
import {CakeGiving} from "../../../CakeGiving";
import * as _ from "underscore";

@Component({
  moduleId: module.id,
  selector: 'nextcake',
  templateUrl: 'cake.component.html',
  styleUrls: ['cake.component.css']
})
export class CakeComponent implements OnInit {
  nextCake: CakeGiving;
  private hoursRemaining: string;
  private minutesRemaining: string;
  private secondsRemaining: string;
  private cakeGivings: CakeGiving[];

  constructor(private cakeService: CakeService) {
  }

  ngOnInit() {
    this.cakeService.getCakeGivings().subscribe((cakeGivings:CakeGiving[])=> {
      this.cakeGivings = _.sortBy(cakeGivings, function (o) {
        let timeOfCake = new Date();
        timeOfCake.setFullYear(o.date.year);
        timeOfCake.setMonth(o.date.month - 1);
        timeOfCake.setDate(o.date.day);
        timeOfCake.setHours(o.time.hour);
        timeOfCake.setMinutes(o.time.minute);
        timeOfCake.setSeconds(o.time.second);
        return timeOfCake.getTime();
      });
    });

    let timer = Observable.timer(0, 1000);
    timer.subscribe(t => {
      this.updateTimeToCake(t);
    });
  }

  updateTimeToCake(tick) {
    let now = new Date();
    if (this.cakeGivings && this.cakeGivings.length > 0) {
      this.nextCake = this.cakeGivings[0];
      let timeOfCake = new Date();
      timeOfCake.setFullYear(this.nextCake.date.year);
      timeOfCake.setMonth(this.nextCake.date.month - 1);
      timeOfCake.setDate(this.nextCake.date.day);
      timeOfCake.setHours(this.nextCake.time.hour);
      timeOfCake.setMinutes(this.nextCake.time.minute);
      timeOfCake.setSeconds(this.nextCake.time.second);
      this.nextCake.datetime = timeOfCake;
      let difference = timeOfCake.valueOf() - now.valueOf();
      let seconds = Math.floor(difference / 1000) % 60;
      let minutes = Math.floor((difference / (1000 * 60)) % 60);
      let hours = Math.floor((difference / (1000 * 60 * 60)));
      this.secondsRemaining = seconds < 10 ? "0" + seconds : "" + seconds;
      this.minutesRemaining = minutes < 10 ? "0" + minutes : "" + minutes;
      this.hoursRemaining = "" + hours;
    }
  }
}
