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
  private currentCake: CakeGiving;

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
      for (let i = 0; i < this.cakeGivings.length; i++) {
        let timeOfCake = this.calculateDate(this.cakeGivings[i]);
        let timeDifference = (timeOfCake.valueOf() - now.valueOf());
        if (timeDifference < 0) {
          let minutes = Math.floor((Math.abs(timeDifference) / (1000 * 60)) % 60);
          let hours = Math.floor((Math.abs(timeDifference) / (1000 * 60 * 60)));
          if (minutes <= 30 && hours == 0) {
            console.log("updated currentcake, difference was: hours: " + hours + " " + minutes);
            this.currentCake = this.cakeGivings[i];
            break;
          } else {
            console.log("nullified currentcake!, hours: " + hours + " minutes: " + minutes);
            this.currentCake = null;
          }
        } else {
          this.nextCake = this.cakeGivings[i];
          this.nextCake.datetime = timeOfCake;
          let seconds = Math.floor(timeDifference / 1000) % 60;
          let minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
          let hours = Math.floor((timeDifference / (1000 * 60 * 60)));
          this.secondsRemaining = seconds < 10 ? "0" + seconds : "" + seconds;
          this.minutesRemaining = minutes < 10 ? "0" + minutes : "" + minutes;
          this.hoursRemaining = "" + hours;
          break;
        }
      }
    }
  }

  private calculateDate(cake: CakeGiving) {
    let timeOfCake = new Date();
    timeOfCake.setFullYear(cake.date.year);
    timeOfCake.setMonth(cake.date.month - 1);
    timeOfCake.setDate(cake.date.day);
    timeOfCake.setHours(cake.time.hour);
    timeOfCake.setMinutes(cake.time.minute);
    timeOfCake.setSeconds(cake.time.second);
    return timeOfCake;
  }
}
