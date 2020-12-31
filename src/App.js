import React from "react";
//import Form from "./Form";
import Text from "./Text";
import Form from "./Form";
import SelectScheme from "./SelectScheme";
import "./App.css";

export default class App extends React.Component {
  state = {
    name: 'one',
  };

  render() {
    return (
      <div id="hiqolor" className="container">
        <div className="row">
          <div className="col-sm">
            <Text />
          </div>
          <div className="col-sm">
            <SelectScheme />
            <Form />
          </div>
        </div>
      </div>
    );
  }
}
