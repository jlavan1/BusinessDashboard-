import React, { Component } from 'react';

import Plot from 'react-plotly.js';

class Stockapi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stockChartXValues: [],
            stockChartYValues: [],
            stockChartZValues: 'AMZN'
        }
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        console.log(event)
        const data = this.state
        console.log(data)
        this.fetchStock();
    }

    handleChange = (event) => {
        event.preventDefault();
        let value = event.target.value
        console.log(value)
        console.log(event)
        this.setState({ stockChartZValues: value });
    };

  

    componentDidMount(event) {
        //this.setState({ stockChartZValues: event.target.value });
        this.fetchStock();
    }

    fetchStock() {
        const pointerToThis = this;
        const API_KEY = 'Place API_Key here';
        let StockSymbol = 'AMZN'
        let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${this.state.stockChartZValues}&outputsize=compact&apikey=${API_KEY}`;
        let stockChartXValuesFunction = [];
        let stockChartYValuesFunction = [];
        let stockChartZValuesFunction = [];

        fetch(API_Call)
            .then(
                function (response) {
                    return response.json();
                }

            )
            .then(
                function (data) {
                    console.log(data)
                    for (var key in data['Time Series (Daily)']) {
                        stockChartXValuesFunction.push(key);
                        stockChartYValuesFunction.push(data['Time Series (Daily)']
                        [key]['1. open']);

                    }
                    stockChartZValuesFunction.push(data['Meta Data']['2. Symbol']);
                    console.log(stockChartZValuesFunction)

                    //console.log(stockChartXValuesFunction)
                    pointerToThis.setState({
                        stockChartXValues: stockChartXValuesFunction,
                        stockChartYValues: stockChartYValuesFunction,
                        stockChartZValues: stockChartZValuesFunction[0]

                    });
                }
            )

    }

    render() {

        const {stock} = this.state.stockChartZValues;

        //console.log(stockChartZValues)
        return (
            <div>
                
                <p>Stock is: {stock} </p>

                <form onSubmit={this.handleSubmit}>
                <p><input
                    id='id'
                    type='text'
                    placeholder= 'Enter Stock Ticker'
                    value= {this.state.stockChartZValues}
                    onChange={this.handleChange.bind(this)}
                /> </p>
                <p><button>Submit</button></p>
                

                <Plot
                    data={[
                        {
                            x: this.state.stockChartXValues,
                            y: this.state.stockChartYValues,
                            type: 'scatter',
                            mode: 'lines+markers',
                            marker: { color: 'red' },
                        }
                    ]}
                    layout={{
                        width: 520,
                        height: 300,
                        title: {
                            text: this.state.stockChartZValues + ' Stock Analysis',
                            font: {
                                family: 'Courier New, monospace',
                                size: 24
                            }
                        }
                    }}
                />

</form>
            </div>
        )
    }
}

export default Stockapi;