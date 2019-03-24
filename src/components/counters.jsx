import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const {
      onReset,
      onDelete,
      onIncrement,
      counters,
      onDecrement
    } = this.props;
    // console.log("props", this.props);
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.props.onReset}
        >
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            counter={counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
