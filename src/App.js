import React, { Component, Fragment } from 'react';

import List from './List';

const commaToArray = str => str.split(',');

class App extends Component {
  constructor(props) {
    super(props);

    const urlParams = new URLSearchParams(window.location.search);
    const notes = urlParams.get('notes') || '';
    const itemsCommaSeparated = urlParams.get('list') || '';
    const items = commaToArray(itemsCommaSeparated);
    const imageTopic = urlParams.get('image') || '';
    const color = urlParams.get('color') || '';

    this.state = {
      color,
      imageTopic,
      items,
      notes,
    };
  }

  render() {
    const { color, imageTopic, items, notes } = this.state

    return (
      <Fragment>
        <div className="container">
          <div className="list">
            <List
              title="dc devs"
              items={items}
              notes={notes}
            />
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          html, body {
            height: 100%;
            ${imageTopic ? `background-image: url("https://source.unsplash.com/daily?${imageTopic}");` : ''}
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            margin: 0;
            padding: 0;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          body, button, input, textarea {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
          }

          button {
            border-radius: 5px;
            border: 2px solid #CCC;
            box-sizing: border-box;
            cursor: pointer;
            font-size: 1rem;
            height: 40px;
            line-height: 1px;
            margin-bottom: 5px;
            margin-right: 5px;
            padding: 1rem 1.5rem;
          }
          button:focus {
            outline: none;
          }
          button:hover {
            border-color: #777;
          }

          .container {
            margin: 0 auto;
            max-width: 1200px;
            padding: 1rem;
          }

          .column {
            padding: 10px;
            width: 300px;
          }

          .list-container {
            display: flex;
            justify-content: center;
          }

          .list {
            padding: 1rem;
          }

          .list-items {
            width: 300px;
          }

          .list-item {
            background-color: #FFF;
            padding: 1.5em;
            border: 2px solid #CCC;
            color: #333;
            border-radius: 5px;
          }
          .list-item:not(:first-child) {
            margin-top: 0.5rem;
          }

          .list-item ~.separator {
            margin-top: 1.5rem;
          }

          .list-item-active {
            animation: blinker 1s linear infinite;
            ${color ? `background-color: ${color};` : ''}
            font-weight: bold;
          }

          .list-input {
            border: 2px solid #ccc;
            border-radius: 5px;
            box-sizing: border-box;
            font-size: 1rem;
            min-height: 400px;
            padding: 1rem;
            resize: vertical;
            width: 100%;
          }
          .list-input:focus {
            outline: 0;
          }

          .notes {
            margin-bottom: 1rem;
            white-space: pre-line;
            word-wrap: break-word;
          }

          .separator {
            font-weight: bold;
            margin-bottom: 1rem;
            text-transform: uppercase;
            width: 100%;
          }

          .close-button {
            border: none;
            margin: 0;
            padding: 0;
            width: auto;
            overflow: visible;
            cursor: pointer;
            background: transparent;
          }
          .close-button:focus {
            outline: 0;
          }

          @keyframes blinker {
            50% {
              opacity: 0.8;
            }
          }
        `}} />
      </Fragment>
    );
  }
}

export default App;
