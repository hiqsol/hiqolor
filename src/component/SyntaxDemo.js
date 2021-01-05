import React, { useEffect } from "react";
import {MobXProviderContext, observer} from "mobx-react";
import HueInput from "./HueInput";

const SyntaxDemo = observer(() => {
  const {scheme} = React.useContext(MobXProviderContext);

  const samples = {
    demo:   'Demo',
    php:    'PHP',
    js:     'JavaScript',
  }

  useEffect(() => {
    loadHtml('demo');
  })

  const handleChange = event => {
    loadHtml(event.target.value);
  }

  async function fetchSample(name) {
    return await (await fetch('/samples/'+name+'.html')).text();
  }

  async function loadHtml(name) {
    const contentDiv = document.getElementById('code-sample');
    contentDiv.innerHTML = await fetchSample(name);
  }

  return (
    <div id="syntax-demo">
      <label for="select-sample">Sample:</label> <select onChange={handleChange} id="select-sample">
        { Object.entries(samples).map(([key, name], i) => <option key={i} value={key}>{name}</option>) }
      </select>
      <br/><br/>
      <div id="code-sample">
      </div>
    </div>
  );
})

export default SyntaxDemo;
