import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ServicesService } from '../services.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-conferences',
  templateUrl: './conferences.component.html',
  styleUrls: ['./conferences.component.css']
})
export class ConferencesComponent implements OnInit, OnChanges {
  public conferences: Data[];
  @Input() childMessage: number;
  constructor(private service: ServicesService) { }

  ngOnInit() {
  }
  ngOnChanges() {

    const data = this.service.conferences[this.childMessage];
    console.log("test1" + data);
    const flattened = [].concat.apply([], data);
    console.log("test2" + flattened);
    this.conferences = data;
    for (let con of flattened) {
      console.log(con)
    }



  }
}
