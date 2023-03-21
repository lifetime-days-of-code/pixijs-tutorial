import * as PIXI from 'pixi.js';

export class App {
  run() {
    this.app = new PIXI.Application();
    document.body.appendChild(this.app.view);
  }
}