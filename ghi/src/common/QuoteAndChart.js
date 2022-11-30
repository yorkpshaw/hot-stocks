import React from 'react';
import Plot from 'react-plotly.js';



class QuoteAndChart extends React.Component {
    state = {
        stockChartXValues: [],
        stockChartYValues: []
    };

    componentDidMount() {
        this.fetchStock();
    }
    // ticker hardcoded
    fetchStock() {
        const pointerToThis = this;
        console.log(pointerToThis);
        const ALPHAVANTAGE_API_KEY = '7WL80KSR62SGQH2Z';
        let StockSymbol = 'SPY'
        let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${StockSymbol}&interval=5min&apikey=${ALPHAVANTAGE_API_KEY}`
        // let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;

        let stockChartXValuesFunction = [];
        let stockChartYValuesFunction = [];

        fetch(API_Call)
            .then(
                function(response) {
                    return response.json();
                }
            )
            .then(
                function(data) {
                    console.log(data);

                    for (var key in data['Time Series (5 min)']){
                    // key is the date in the time series data
                        stockChartXValuesFunction.push(key);
                        stockChartYValuesFunction.push(data['Time Series (5 min)'][key]['4. close']);
                        // push y values - price.
                    }
                    pointerToThis.setState({
                        stockChartXValues: stockChartXValuesFunction,
                        stockChartYValues: stockChartYValuesFunction
                    });
                }
            )
    }
    render() {
        return (
            <div>
                <h3> Daily 5 min price </h3>
                <Plot
                    data={[
                        {
                        x: this.state.stockChartXValues,
                        y: this.state.stockChartYValues,
                        // x: [1, 2, 3],
                        // y: [2, 6, 3],
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: {color: 'red'},
                    },
                    // {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
                    ]}
                    layout={{width: 720, height: 440, title: 'Daily 5 min Scatter Plot of {StockSymbol}'}}
                />

                {/* <p>x-values: {this.state.stockChartXValues}</p>
                <p>y-values: {this.state.stockChartYValues}</p> */}
            </div>
        );
    };
}


export default QuoteAndChart;
