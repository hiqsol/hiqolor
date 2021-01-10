import React from "react";
import {MobXProviderContext, observer} from "mobx-react";
import {HueInput, SaturationInput, ValueInput, HexInput} from "./ColorInputs";

const Form = observer(() => {
  const {scheme} = React.useContext(MobXProviderContext);

  return (
    <div id="form">
    <table>
      <thead>
        <tr>
          <th className="text-right">Name</th>
          <th className="text-center">Color</th>
          <th className="text-center">Hue</th>
          <th className="text-center">Saturation</th>
          <th className="text-center">Value</th>
          <th className="text-center">Hex</th>
        </tr>
      </thead>
      <tbody>
      { Object.entries(scheme.names).map(function ([name, label], i) { return (
        <tr key={i}>
          <th className="text-right">{label}</th>
          <td>
            <input type="color" name={name} bold="0" value={scheme.getComponent('hex', name, 0)} />/
            <input type="color" name={name} bold="1" value={scheme.getComponent('hex', name, 1)} />
          </td>
          <td>
            <HueInput name={name} bold="0" scheme={scheme} />/<HueInput name={name} bold="1" scheme={scheme} />
          </td>
          <td>
            <SaturationInput name={name} bold="0" scheme={scheme} />/<SaturationInput name={name} bold="1" scheme={scheme} />
          </td>
          <td>
            <ValueInput name={name} bold="0" scheme={scheme} />/<ValueInput name={name} bold="1" scheme={scheme} />
          </td>
          <td>
            <HexInput name={name} bold="0" scheme={scheme} />/<HexInput name={name} bold="1" scheme={scheme} />
          </td>
        </tr>
      )}) }
        <tr>
          <th className="text-right"></th>
          <td></td>
          <td>
            <input type="number" min="0" />/<input type="number" min="0" />
          </td>
          <td>
            <input type="number" min="0" />/<input type="number" min="0" />
          </td>
          <td>
            <input type="number" min="0" defaultValue={scheme.hue}/>/<input type="number" min="0" />
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  )
})

export default Form;
