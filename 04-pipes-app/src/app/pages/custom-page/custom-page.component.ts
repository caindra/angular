import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heores.data';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [
    ToggleCasePipe,
    CanFlyPipe,
    HeroColorPipe,
    
  ],
  templateUrl: './custom-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CustomPageComponent {
  name = signal('Caindra');
  upperCase = signal(true);

  heroes = signal(heroes);

 }
