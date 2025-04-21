import { filter, map, tap } from 'rxjs';
import { Component, inject } from '@angular/core';
import { routes } from '../../../app.routes';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [
    AsyncPipe,
    RouterLink,
  ],
  templateUrl: './navbar.component.html',
  styles: ``,
})
export class NavbarComponent {
  router = inject(Router);

  routes = routes.map((route) => ({
    path: route.path,
    title: `${route.title ?? 'Angular Maps'}`,
  })).filter(route => route.path !== '**');

  pageTitle$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    //tap(event => console.log({event})),
    map(event => event.url),
    map(url => routes.find(route => `/${route.path}` === url)?.title ?? 'Maps')
  );
}
