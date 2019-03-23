import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.value,
    //tags: ["tag1", "tag2", "tag3"]
    tags: []
  };
  render() {
    return (
      <div>
        <h4>
          Counter#
          {this.props.id}
        </h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.handleIncrement({ id: 1 })}
        >
          Increment
        </button>
        {this.renderTags()}
      </div>
    );
  }

  handleIncrement = product => {
    console.log(product);
    console.log("Increment button clicked");
    this.setState({ value: this.state.value + 1 });
  };

  renderTags() {
    if (this.state.tags.length === 0) {
      // return <p>There are no tags</p>;
    } else {
      return (
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      );
    }
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
