import {makeAutoObservable} from "mobx";
import chroma from "chroma-js";

class ColorScheme {
  numbers = {
    black:    0,
    red:      1,
    green:    2,
    yellow:   3,
    blue:     4,
    purple:   5,
    cyan:     6,
    white:    7,
  }

  names = {
    ground:   'Ground',
    black:    'Black',
    white:    'White',
    yellow:   'Yellow',
    green:    'Green',
    cyan:     'Cyan',
    blue:     'Blue',
    purple:   'Purple',
    red:      'Red',
  }

  colors = {};

  constructor() {
    makeAutoObservable(this);
    this.loadFromCss();
  }

  loadFromCss() {
    for (const name in this.names) {
      for (let bold=0; bold<2; bold++) {
        var num = this.name2number(name, bold);
        var css = this.cssColor(name, bold);
        var color = getComputedStyle(document.documentElement).getPropertyValue(css);
        color = color.substring(1);
        this.colors[num] = chroma(color);
      }
    }
  }

  get hue() {
    return this.getComponent('hue', 'custom', 1);
  }

  get allColors() {
    return this.colors;
  }

  getComponent(component, name, bold) {
    var color = this.colors[this.name2number(name, bold)];
    if (component==='hex') return chroma(color).hex();
    var num = this.component2number(component);
    var value = chroma(color).hsl()[num];
    if (isNaN(value)) {
      return '';
    }
    if (num>0) value = value * 100;
    return Math.round(value);
  }

  component2number(component) {
    if (component==='saturation') return 1;
    if (component==='value') return 2;
    return 0;
  }

  setHue(name, bold, value) {
    var num = this.name2number(name, bold)
    var color = this.colors[num];
    var hsl = chroma(color).hsl();
    hsl[0] = value;
    color = chroma(hsl).hex();
    this.colors[num] = color;
  }

  cssColor(name, bold) {
    return '--color' + this.name2number(name, bold);
  }

  name2number(name, bold) {
    if (name in this.numbers) {
      return (this.numbers[name] + (bold=="0" ? 0 : 8)).toString();
    }
    return bold=="0" ? 'Fg' : 'Bg';
  }
}

export default ColorScheme;
