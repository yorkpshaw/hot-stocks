import React from 'react'
import Plot from 'react-plotly.js';



class QuoteAndChartClass extends React.Component {
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
        const API_KEY = '7WL80KSR62SGQH2Z';
        let StockSymbol = 'SPY'
        // let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
        let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${StockSymbol}&interval=15min&apikey=${API_KEY}`

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

                    for (var key in data['Time Series (15min)']){
                    // key is the date in the time series data
                        stockChartXValuesFunction.push(key);
                        stockChartYValuesFunction.push(data['Time Series (15min)'][key]['1. open']);
                        // push y values - price.


                        // for (let key in data['Time Series (5 min)']){
                            // key is the date in the time series data
                                // stockChartXValuesFunction.push(key);
                                // stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
                                // stockChartYValuesFunction.push(data['Time Series (5 min)'][key]['4. close']);
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
                <h3> Intraday 15 min price </h3>
                <Plot
                    data={[
                        {
                        x: this.state.stockChartXValues,
                        y: this.state.stockChartYValues,
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: {color: 'red'},
                    }
                    ]}
                    layout={{width: 720, height: 440, title: '15 min Scatter Plot of S&P500: SPY'}}
                />
            </div>
        );
    };
}
export default QuoteAndChartClass;