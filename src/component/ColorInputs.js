import React from "react";

const NumberInput = ({component, name, bold, scheme, type='number', max=100}) => {
  const onChange = e => {
    scheme.setComponent(component, name, bold, e.target.value);
  }

  const value = () => {
    return scheme.getComponent(component, name, bold);
  }

  return (
    <input type={type} min="0" max={max} name={name} value={value()} onChange={onChange} />
  )
}

const HueInput = ({name, bold, scheme}) => (
  <NumberInput component="hue" name={name} bold={bold} scheme={scheme} max="359" />
)

const SaturationInput = ({name, bold, scheme}) => (
  <NumberInput component="saturation" name={name} bold={bold} scheme={scheme} />
)

const ValueInput = ({name, bold, scheme}) => (
  <NumberInput component="value" name={name} bold={bold} scheme={scheme}/>
)

const HexInput = ({name, bold, scheme}) => (
  <NumberInput component="hex" name={name} bold={bold} scheme={scheme} type="hex"/>
)

export {HueInput, SaturationInput, ValueInput, HexInput};
