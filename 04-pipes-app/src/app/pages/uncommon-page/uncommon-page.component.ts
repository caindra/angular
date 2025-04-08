import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe } from '@angular/common';

const client1 = {
  name: 'Atlas',
  gender: 'male',
  age: '32',
  address: 'Toronto, Canada'
};

const client2 = {
  name: 'Caindra',
  gender: 'female',
  age: '27',
  address: 'Toronto, Canada',
};

@Component({
  selector: 'app-uncommon-page',
  imports: [
    CardComponent,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    KeyValuePipe,
    TitleCasePipe,
  ],
  templateUrl: './uncommon-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UncommonPageComponent {
  //i18n Select
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
    } else {
      this.client.set(client1);
    }
  }

  //i18n Plural
  clientsMap = signal({
    '=0': 'no hay clientes esperando',
    '=1': 'hay un cliente en espera',
    other: 'hay # clientes esperando',
  });

  clients = signal([
    'Atlas',
    'Caindra',
    'Nova',
    'Orion',
    'Lyra',
    'Ezra',
    'Seren',
    'Aelin',
    'Kael',
    'Nyra',
  ]);

  deleteClient() {
    this.clients.update((prev) => prev.slice(1));
  }

  //KeyValue Pipe
  profile = {
    name: 'Aelin',
    gender: 'female',
    age: '23',
    address: 'Ottawa, Canada',
  };
}
