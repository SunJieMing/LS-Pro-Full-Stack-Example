import React, { Component } from 'react';

class Users extends Component {
  render() {
    return(
      <div>
        <h2>Users</h2>
        <ul>
          {this.props.users.map((user, i) => {
            return (
              <li key={i}>
                {user.firstName}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Users;
