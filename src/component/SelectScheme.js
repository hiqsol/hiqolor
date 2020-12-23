import React from "react";

export default class SelectScheme extends React.Component {
  state = {
    cssId: "current-scheme",
    current: "",
    schemes: {
      one:    'HiQolor One',
      old:    'HiQolor Old',
      two:    'HiQolor Two',
      left:   'HiQolor Left',
      right:  'HiQolor Right',
      bright: 'HiQolor Bright',
      normal: 'HiQolor Normal',
    }
  };

  handleChange = (event) => {
    this.setScheme(event.target.value);
  };

  setScheme(name) {
    var link = document.getElementById(this.cssId);
    if (!link) {
      var head  = document.getElementsByTagName('head')[0];
      link = this.createCssLink();
      head.appendChild(link);
    }
    link.href = this.getCssPath(name);
  };

  createCssLink() {
    var link    = document.createElement('link');
    link.id     = this.cssId;
    link.rel    = 'stylesheet';
    link.type   = 'text/css';
    link.href   = '';
    link.media  = 'all';

    return link;
  };

  getCssPath(name) {
    return '/schemes/' + name + '.css';
  };

  render() {
    var schemes = this.state.schemes;
    this.setScheme('one');
    return (
      <select onChange={this.handleChange} autoFocus>
        { Object.entries(schemes).map(([key, name], i) => <option key={i} value={key}>{name}</option>) }
      </select>
    );
  }
}
