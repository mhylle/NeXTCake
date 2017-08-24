import {Injectable} from "@angular/core";
import "rxjs/Rx";
import {Http, Headers} from "@angular/http";
import {UserService} from "./user.service";

@Injectable()
export class CakeService {
  http: any;
  apiKey: string;
  cakeGivingsUrl: string;
  private nextCake: Date;

  constructor(http: Http, private userService: UserService) {
    this.nextCake = new Date();
    this.nextCake.setDate(21);
    this.nextCake.setHours(13);
    this.nextCake.setMinutes(30);
    this.http = http;
    this.apiKey = 'xq37tVdH_5xlvXu9RLsTGQwe3JszAIEc';
    this.cakeGivingsUrl = 'https://api.mlab.com/api/1/databases/cakegivings/collections/cakegivings';
  }

  getCakeGivings() {
    return this.http.get(this.cakeGivingsUrl + '?apiKey=' + this.apiKey).map(res => res.json());
  }

  addCakeGiving(newCakeGiving) {
    // let user = this.userService.getUser(newCakeGiving.giver);
    // if (!user) {
    //   this.userService.addUser(newCakeGiving.giver);
    // }

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.cakeGivingsUrl + '?apiKey=' + this.apiKey, JSON.stringify(newCakeGiving), {headers: headers});
  }

  removeCakeGiving(cakeId) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.delete(this.cakeGivingsUrl + '?apiKey=' + this.apiKey, JSON.stringify(cakeId), {headers: headers});
  }
}
