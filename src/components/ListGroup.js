import React, { Component } from "react";

class ListGroup extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h6>
          {this.props.name}
          <span className="badge badge-secondary">
            {this.props.items &&
              this.props.items.length
            }
          </span>
        </h6>
        {this.props.items &&
          <ul className="list-group">
            {this.props.items &&
              this.props.items.map(item => (
                <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                  <a href={item.html_url}>{item.name}</a>
                </li>
              ))}
          </ul>
        }
      </div>
    );
  }
}
export default ListGroup;
