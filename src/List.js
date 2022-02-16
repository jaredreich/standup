import React, { Component } from 'react';
import { List, arrayMove, arrayRemove } from 'react-movable';

const arrayToList = arr => arr.join('\n');
const listToArray = str => str.split('\n');

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#555"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>Remove</title>
    <circle cx="12" cy="12" r="10" />
    <line x1="15" y1="9" x2="9" y2="15" />
    <line x1="9" y1="9" x2="15" y2="15" />
  </svg>
);

class SortableList extends Component {
  state = {
    active: false,
    items: this.props.items
  };

  handleChange = event => {
    this.setState({
      items: listToArray(event.target.value)
    });
  };

  shuffle = () => {
    if (window.confirm('Are you sure you want to shuffle?')) {
      const itemsShuffled = [...this.state.items];
      shuffleArray(itemsShuffled);
      this.setState({
        items: itemsShuffled
      });
    }
  };

  reset = () => {
    if (window.confirm('Are you sure you want to reset?')) {
      this.setState({ items: this.props.items });
    }
  };

  render() {
    return (
      <div className="list-container">
        <div className="column">
          <List
            values={this.state.items}
            onChange={({ oldIndex, newIndex }) =>
              this.setState(prevState => ({
                items: arrayMove(prevState.items, oldIndex, newIndex)
              }))
            }
            renderList={({ children, props, isDragged }) => (
              <ul
                {...props}
                style={{
                  cursor: isDragged ? 'grabbing' : 'inherit',
                  margin: 0,
                  padding: '0em 0em 1em 0em'
                }}
              >
                {children}
              </ul>
            )}
            renderItem={({ value, props, index, isDragged, isSelected }) => {
              const strippedOfTitles = this.state.items.filter(item => item.indexOf('-') !== 0);
              return value.indexOf('-') === 0 ? (
                <div className="separator" key={index}>
                  {value.substr(1)}
                </div>
              ) : (
                <li
                  {...props}
                  className={
                    this.state.active && value === strippedOfTitles[0]
                      ? 'list-item list-item-active'
                      : 'list-item'
                  }
                  style={{
                    ...props.style,
                    boxShadow: isDragged ? '0 0 25px #555' : '',
                    cursor: isDragged ? 'grabbing' : 'grab',
                    listStyleType: 'none'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div style={{ wordBreak: 'break-word' }}>{value}</div>
                    <button
                      className="close-button"
                      style={{ transform: 'translateX(10px)' }}
                      onClick={() => {
                        this.setState(prevProps => ({
                          items: index >= 0 ? arrayRemove(prevProps.items, index) : prevProps.items
                        }));
                      }}
                      onMouseDown={e => e.stopPropagation()}
                      onTouchStart={e => e.stopPropagation()}
                    >
                      <XIcon />
                    </button>
                  </div>
                </li>
              );
            }}
          />
        </div>

        <div className="column">
          {this.props.notes && (
            <div className="notes" dangerouslySetInnerHTML={{ __html: this.props.notes }} />
          )}

          <button onClick={() => this.setState({ active: true })}>Start</button>
          <button onClick={() => this.setState({ active: false })}>Stop</button>
          <button onClick={this.shuffle}>Shuffle</button>
          <button onClick={this.reset}>Reset</button>

          <textarea
            value={arrayToList(this.state.items)}
            onChange={this.handleChange}
            className="list-input"
            placeholder={'Newline-separated, prepend with "-" (e.g. -devs) for a separator'}
          />
        </div>
      </div>
    );
  }
}

export default SortableList;
