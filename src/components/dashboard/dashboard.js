import React, { Component } from 'react';
// import News from '../news/newsApi'
// import Reminder from '../reminder/Reminders'
// import WeatherEngine from '../weather/weatherEngine'
// import Stock from '../stock/stock'
import Layout from '../Layout/Layout'
import DashBoardBuilder from './../DashBoardBuilder/DashboardBuilder';
import './dash.css'
// import {Container,Row,Col,Jumbotron} from 'react-bootstrap'




export default class dashboard extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   };
  // }

  state = {
    dbComponents : {
      news: 1,
      stock: 1,
      weather: 1,
      reminder: 1
    }
  }

  render() {
    return (
      <Layout>
        <DashBoardBuilder/>
      </Layout>
    )
  }
}
