import React, { Component } from 'react'
import WeatherEngine from '../WeatherCard/WeatherEngine';

export default class ComponentSelect extends Component {
  state = {
    on: false,
  }

  toggle = () => {
    this.setState({
      on: !this.state.on
    })
  }


  render() {
    const { Render } = this.props;
    return (
  
      <div>
        {Render({
          on: this.state.on,
          toggle: this.toggle,
        })}
      </div>
    )
  }
}
