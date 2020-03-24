import React, { Component } from 'react';
import Reminder from './reminder'

export default class Reminders extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
   <div><Reminder/></div>
    );
  }
}
