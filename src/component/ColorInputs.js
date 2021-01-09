import React from "react";
import chroma from "chroma-js";

const HueInput = ({name, bold, scheme}) => {
  const onChange = e => {
    scheme.setHue(name, bold, e.target.value);
  }

  const getHue = () => {
    var color = scheme.colors[scheme.name2number(name, bold)];
    var hue = chroma(color).hsl()[0];
    if (isNaN(hue)) {
      return '';
    }
    return Math.round(hue);
  }

  return (
    <input type="number" min="0" max="359" name={name} value={getHue()} onChange={onChange} />
  )
}

export default HueInput;
