import {makeAutoObservable} from "mobx";
import ColorScheme from "./ColorScheme.js";

class ColorStore {
  scheme;

  constructor() {
    makeAutoObservable(this);
    this.scheme = new ColorScheme();
  }

  get scheme() {
    return this.scheme;
  }

}

export default ColorStore;
