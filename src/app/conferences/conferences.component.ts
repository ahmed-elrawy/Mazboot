import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-conferences',
  templateUrl: './conferences.component.html',
  styleUrls: ['./conferences.component.css']
})
export class ConferencesComponent implements OnInit, OnChanges {
  public conferences: object[];
  @Input() childMessage: number;
  constructor(private service: ServicesService) { }

  ngOnInit() {
  }
  ngOnChanges() {

    const data = this.service.conferences[this.childMessage]
    const flattened = [].concat.apply([], data)
    this.conferences = flattened
    for (let con of this.conferences) {
      console.log(con)
    }



  }
}
