import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case-pipe';

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

 }
