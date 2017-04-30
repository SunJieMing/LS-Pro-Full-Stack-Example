import React, { Component } from 'react';
import Users from './Users';
import axios from 'axios';

class NewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      users: [],
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getUsers = this.getUsers.bind(this);
  }

  handleEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  handleFirstName(event) {
    this.setState({
      firstName: event.target.value,
    });
  }

  handleLastName(event) {
    this.setState({
      lastName: event.target.value,
    });
  }

  handleSubmit() {
    const user = {
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    };
    const promise = axios.post('http://localhost:5000/new-user', user);
    promise.then(response => {
      this.getUsers();
    });
  }

  getUsers() {
    const promise = axios.get('http://localhost:5000/users');
    promise.then((response) => {
      this.setState({
        users: response.data,
      });
    });
  }

  render() {
    return (
      <div>
        <input value={this.state.email} onChange={this.handleEmail} />
        <input value={this.state.firstName} onChange={this.handleFirstName} />
        <input value={this.state.lastName} onChange={this.handleLastName} />
        <button onClick={this.handleSubmit} >Submit</button>
        <Users users={this.state.users} />
      </div>
    );
  }

  componentDidMount() {
    this.getUsers();
  }
}

export default NewUser;
