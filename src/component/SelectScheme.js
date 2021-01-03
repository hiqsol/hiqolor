import React from "react";
import {MobXProviderContext, observer} from "mobx-react";

const SelectScheme = observer(() => {
  const {scheme} = React.useContext(MobXProviderContext);
  const cssId = "current-scheme";
  const schemes = {
    old:    'HiQolor Old',
    one:    'HiQolor One',
    two:    'HiQolor Two',
    left:   'HiQolor Left',
    right:  'HiQolor Right',
    bright: 'HiQolor Bright',
    normal: 'HiQolor Normal',
  }

  const handleChange = event => {
    setScheme(event.target.value);
    scheme.loadFromCss();
  };

  const setScheme = name => {
    var link = document.getElementById(cssId);
    if (!link) {
      var head  = document.getElementsByTagName('head')[0];
      link = createCssLink();
      head.appendChild(link);
    }
    link.href = getCssPath(name);
  };

  const createCssLink = () => {
    var link    = document.createElement('link');
    link.id     = cssId;
    link.rel    = 'stylesheet';
    link.type   = 'text/css';
    link.href   = '';
    link.media  = 'all';

    return link;
  };

  const getCssPath = (name) => {
    return '/schemes/' + name + '.css';
  };

  return (
    <select onChange={handleChange} autoFocus>
      { Object.entries(schemes).map(([key, name], i) => <option key={i} value={key}>{name}</option>) }
    </select>
  );
})

export default SelectScheme;
