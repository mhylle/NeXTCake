import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {CakeService} from "../services/cake.service";
import {CakeGiving} from "../CakeGiving";

@Component({
  moduleId: module.id,
  selector: 'nextcake',
  templateUrl: 'cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent implements OnInit {
  private nextCake: Date;

  private hoursRemaining: string;
  private minutesRemaining: string;
  private secondsRemaining: string;
  private cakeGivings: CakeGiving[];

  constructor(private cakeService: CakeService) {
    this.nextCake = this.cakeService.getNextCake();
  }

  ngOnInit() {
    this.cakeService.getCakeGivings().subscribe(cakeGivings => {
      this.cakeGivings = cakeGivings
    });
    let timer = Observable.timer(0, 1000);
    timer.subscribe(t => {
      this.updateTimeToCake(t);
    });
  }

  updateTimeToCake(tick) {
    let nextCake = this.cakeService.getNextCake();
    let now = new Date();
    let difference = nextCake.valueOf() - now.valueOf();
    let seconds = Math.floor(difference / 1000) % 60;
    let minutes = Math.floor((difference / (1000 * 60)) % 60);
    let hours = Math.floor((difference / (1000 * 60 * 60)));
    this.secondsRemaining = seconds < 10 ? "0" + seconds : "" + seconds;
    this.minutesRemaining = minutes < 10 ? "0" + minutes : "" + minutes;
    this.hoursRemaining = "" + hours;
  }
}
