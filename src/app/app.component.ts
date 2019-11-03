import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoadingService } from './servies/loading.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  public loading: boolean = false;
  private subscriptions: Subscription[] = [];

  title = 'Mazboot';

  constructor(

    private loadingService: LoadingService,

  ) { }
  ngOnInit() {

    this.subscriptions.push(
      this.loadingService.isLoading.subscribe(isLoading => {
        this.loading = isLoading
      })
    )

  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe)
  }
}