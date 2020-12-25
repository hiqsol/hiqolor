import React from "react";
import PropTypes from "prop-types";
import chroma from "chroma-js";

export default class HueInput extends React.Component {
  state = {
    colors: {
      black:    0,
      yellow:   1,
      green:    2,
      cyan:     3,
      blue:     4,
      purple:   5,
      red:      6,
      white:    7,
    }
  }

  static propTypes = {
    value: PropTypes.number,
    name: PropTypes.string,
    bold: PropTypes.string,
  }

  name2number(name, bold) {
    if (name in this.state.colors) {
      return (this.state.colors[name] + (bold ? 8 : 0)).toString();
    }
    return bold ? 'Bg' : 'Fg';
  }

  handleChange = (event) => {
    //getComputedStyle(document.documentElement).setProperty(this.getColor());
  }

  getColor() {
    return '--color' + this.getNo();
  }

  getNo() {
    return this.name2number(this.props.name, this.props.bold);
  }

  render() {
    var color = getComputedStyle(document.documentElement).getPropertyValue(this.getColor());
    color = color.substring(1);
    var hsl = chroma(color).hsl();
    var value = Math.round(hsl[0]);
    return (
      <input type="number" min="0" max="359" value={value} onChange={this.handleChange}/>
    )
  }
}
