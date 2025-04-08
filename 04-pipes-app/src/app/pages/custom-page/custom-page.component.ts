import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case-pipe';
import { heroes } from '../../data/heores.data';

@Component({
  selector: 'app-custom-page',
  imports: [
    ToggleCasePipe,
  ],
  templateUrl: './custom-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CustomPageComponent {
  name = signal('Caindra');
  upperCase = signal(true);

  heroes = signal(heroes);

 }
