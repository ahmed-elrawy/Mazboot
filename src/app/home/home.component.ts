import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingService } from '../servies/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  parentMessage: number;

  conferences = [
    { id: 1, name: "conference 1" },
    { id: 2, name: "conference 2" },
    { id: 3, name: "conference 3" },
    { id: 4, name: "conference 4" },
    { id: 5, name: "conference 5" }
  ];
  constructor(private loaddingService: LoadingService) { }

  ngOnInit() {

  }

  onSubmit(form: NgForm) {
    this.loaddingService.isLoading.next(true)
    setTimeout(() => {
      this.loaddingService.isLoading.next(false)
      console.log(form.value.select)
      this.parentMessage = form.value.select
    }, 2000)

  }

}
