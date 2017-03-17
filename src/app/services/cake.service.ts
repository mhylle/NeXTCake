import {Injectable} from "@angular/core";
import "rxjs/Rx";

@Injectable()
export class CakeService {
  private nextCake: Date;
  // http: any;
  // patientsUrl: string;

  constructor() {
    this.nextCake = new Date();
    this.nextCake.setDate(21);
    this.nextCake.setHours(13);
    this.nextCake.setMinutes(30);
    // this.http = http;
    // this.patientsUrl = "http://localhost:8080/EventArchitecture/patients/";
  }

  getNextCake() {
    return this.nextCake;
  }
  // getPatients() {
  //   return this.http.get(this.patientsUrl)
  //     .map(res => res.json());
  // }

}
