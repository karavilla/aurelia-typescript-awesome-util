import { HelloWorld } from '../src/models/hello-world';
import { autoinject } from 'aurelia-framework';
@autoinject
export class App {
  public message: string = 'from Aurelia!';

  constructor(private helloWorld: HelloWorld) {
    this.helloWorld = helloWorld;
    this.helloWorld.end();
  }

  clicked() {
    // eslint-disable-next-line no-alert
    alert('A primary button click or a touch');
  }
}
