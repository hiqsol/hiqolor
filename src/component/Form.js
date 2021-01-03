import React from "react";
import {MobXProviderContext, observer} from "mobx-react";
import HueInput from "./HueInput";

const Form = observer(() => {
  const {scheme} = React.useContext(MobXProviderContext);

  return (
    <div>
    <table>
      <thead>
        <tr>
          <th className="text-right">Color</th>
          <th className="text-center">Hue</th>
          <th className="text-center">Saturation</th>
          <th className="text-center">Value</th>
        </tr>
      </thead>
      <tbody>
      { Object.entries(scheme.names).map(function ([name, label], i) { return (
        <tr key={i}>
          <th className="text-right">{label}</th>
          <td>
            <HueInput name={name} bold="0" scheme={scheme} colors={scheme.allColors}/>/<HueInput name={name} bold="1" scheme={scheme} colors={scheme.allColors}/>
          </td>
          <td>
            <input type="number" min="0" />/<input type="number" min="0" />
          </td>
          <td>
            <input type="number" min="0" />/<input type="number" min="0" />
          </td>
        </tr>
      )}) }
        <tr>
          <th className="text-right"></th>
          <td>
            <input type="number" min="0" />/<input type="number" min="0" />
          </td>
          <td>
            <input type="number" min="0" />/<input type="number" min="0" />
          </td>
          <td>
            <input type="number" min="0" value={scheme.getHue('custom', 0)}/>/<input type="number" min="0" />
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  )
})

export default Form;
