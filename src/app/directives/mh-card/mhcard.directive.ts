import {Component, OnInit, Input} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'mhcard',
  templateUrl: 'mhcard.directive.html',
  styleUrls: ['mhcard.directive.css'],

})
export class MhCardComponent implements OnInit {
  @Input()
  cardStatus: string;
  @Input()
  cardName: string;
  @Input()
  active: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
