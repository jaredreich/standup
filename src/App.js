import React, { Component } from 'react';

import List from './List';

const commaToArray = str => str.split(',');

class App extends Component {
  constructor(props) {
    super(props);

    const urlParams = new URLSearchParams(window.location.search);
    const itemsCommaSeparated = urlParams.get('list') || '';
    const items = commaToArray(itemsCommaSeparated);

    this.state = {
      items
    };
  }

  render() {
    return (
      <div className="container">
        <div className="list">
          <List title="dc devs" items={this.state.items} />
        </div>
      </div>
    );
  }
}

export default App;
