import { Component } from '@angular/core';

const log = (...messages: string[]) => {
  console.log(
    `${messages[0]} %c${messages.slice(1).join(', ')}`,
    'color: #bada55'
  );
};

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.component.html',
  styles: ``,
})
export class HomePageComponent {
  constructor() {
    console.log(`Constructor llamado`);
  }

  ngOnInit() {
    console.log(
      `ngOnInit: Runs once after Angular has initialized all the component's inputs.`
    );
  }

  ngOnChanges() {
    console.log(
      `ngOnChanges: Runs once after Angular has initialized all the component's inputs.`
    );
  }

  ngDoCheck() {
    console.log(
      `ngDoCheck: Runs every time this component is checked for changes.`
    );
  }

  ngAfterContentInit() {
    console.log(
      `ngAfterContentInit: Runs once after the component's content has been initialized.`
    );
  }

  ngAfterContentChecked() {
    console.log(
      `ngAfterContentChecked: Runs every time this component content has been checked for changes.`
    );
  }

  ngAfterViewInit() {
    console.log(
      `ngAfterViewInit: Runs once after the component's view has been initialized.`
    );
  }

  ngAfterViewChecked() {
    console.log(
      `ngAfterViewChecked: Runs every time the component's view has been checked for changes.`
    );
  }
}
