import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MenuComponent } from './components/menu/menu.component';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  
  title = 'client-angular';

  @ViewChild('menu') menu: MenuComponent;

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    this.router.events.pipe(
      filter((event: RouterEvent | any) => event instanceof NavigationEnd)
    ).subscribe(() => {
      if (this.menu) {
        this.menu.getLogged();
      }
    });
  }
}
