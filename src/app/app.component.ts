import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessagesService } from './core';
import { Router, NavigationEnd } from '@angular/router';
import { SpinnerService } from './core';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { filter, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  sub: Subscription;

  constructor(
    public messagesService: MessagesService,
    private router: Router,
    public spinnerService: SpinnerService,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.setPageTitles();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onActivate($event) {
    console.log('Activated Component', $event);
  }
  onDeactivate($event) {
    console.log('Deactivated Component', $event);
  }
  onDisplayMessages(): void {
    this.router.navigate([
      {
        outlets: {
          popup: ['messages'],
        },
      },
    ]);
    this.messagesService.isDisplayed = true;
  }

  private setPageTitles() {
    this.sub = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.router.routerState.root),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter(route => route.outlet === 'primary'),
        switchMap(route => route.data)
      )
      .subscribe(data => this.titleService.setTitle(data['title']));
  }
}
