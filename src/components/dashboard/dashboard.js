import React, {Component} from 'react';
import Stock from './../stock/stock';
import Plot from 'react-plotly.js';

class dashboard extends Component {
    render(){
        return <Stock/>
    }
}

export default dashboard;