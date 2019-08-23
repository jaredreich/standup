import React, { Component } from 'react';

import List from './List';

const commaToArray = str => str.split(',');

class App extends Component {
  constructor(props) {
    super(props);

    const urlParams = new URLSearchParams(window.location.search);
    const notes = urlParams.get('notes') || '';
    const itemsCommaSeparated = urlParams.get('list') || '';
    const items = commaToArray(itemsCommaSeparated);

    this.state = {
      items,
      notes,
    };
  }

  render() {
    const { items, notes } = this.state

    return (
      <div className="container">
        <div className="list">
          <List
            title="dc devs"
            items={items}
            notes={notes}
          />
        </div>
      </div>
    );
  }
}

export default App;
