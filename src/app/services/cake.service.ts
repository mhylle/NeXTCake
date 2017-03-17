import {Injectable} from "@angular/core";
import "rxjs/Rx";
import {FirebaseListObservable, AngularFire} from "angularfire2";
import {CakeGiving} from "../CakeGiving";

@Injectable()
export class CakeService {
  private nextCake: Date;
  cakeGivings: FirebaseListObservable<CakeGiving[]>;

  constructor(private _af: AngularFire) {
    this.nextCake = new Date();
    this.nextCake.setDate(21);
    this.nextCake.setHours(13);
    this.nextCake.setMinutes(30);
  }

  getNextCake() {
    return this.nextCake;
  }

  getCakeGivings() {
    this.cakeGivings = this._af.database.list('/cakegivings') as FirebaseListObservable<CakeGiving[]>;
    return this.cakeGivings;
  }

  addCakeGiving(newCakeGiving) {
    return this.cakeGivings.push(newCakeGiving);
  }
}
