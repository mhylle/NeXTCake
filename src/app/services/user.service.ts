import {Injectable} from "@angular/core";
import "rxjs/Rx";
import {Http, Headers} from "@angular/http";

@Injectable()
export class CakeService {
  http: any;
  apiKey: string;
  userUrl: string;

  constructor(http: Http) {
    this.http = http;
    this.apiKey = 'xq37tVdH_5xlvXu9RLsTGQwe3JszAIEc';
    this.userUrl = 'https://api.mlab.com/api/1/databases/cakegivings/collections/users';
  }

  getUsers() {
    return this.http.get(this.userUrl + '?apiKey=' + this.apiKey).map(res => res.json());
  }

  addUser(newUser) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.userUrl + '?apiKey=' + this.apiKey, JSON.stringify(newUser), {headers: headers});
  }
}
