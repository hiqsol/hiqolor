import React from "react";

export default class Form extends React.Component {
  state = {
    colors: {
      ground:   'Ground',
      white:    'White',
      black:    'Black',
      yellow:   'Yellow',
      green:    'Green',
      cyan:     'Cyan',
      blue:     'Blue',
      purple:   'Purple',
      red:      'Red',
    }
  };

  render() {
    var colors = this.state.colors;
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
        { Object.entries(colors).map(function ([key, name], i) { return (
          <tr key={i}>
            <th className="text-right">{name}</th>
            <td>
              <input type="number" min="0" />/<input type="number" min="0" />
            </td>
            <td>
              <input type="number" min="0" />/<input type="number" min="0" />
            </td>
            <td>
              <input type="number" min="0" />/<input type="number" min="0" />
            </td>
          </tr>
        )}) }
        </tbody>
      </table>
      </div>
    )
  }
}
