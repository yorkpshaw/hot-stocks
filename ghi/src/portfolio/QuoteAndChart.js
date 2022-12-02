// import React from 'react';
// import Plot from 'react-plotly.js';
// import { useGetStockQuery } from '../rtk-files/stocksApi';
// import { useEffect, useState } from 'react';


// const { data: stocksData, isLoading: stocksLoading } = useGetStockQuery();

// export const DisplayChart = () => {

//     const [stockChartXValues, setStockChartXValues] = useState([]);
//     const [stockChartYValues, setStockChartYValues] = useState([]);

//     };

//     useEffect(() => {
//             useGetStockQuery
//         }, []);


//         const pointerToThis = this;
//         console.log(pointerToThis);
//         const API_KEY = '7WL80KSR62SGQH2Z';
//         let StockSymbol = 'SPY'
//         let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${StockSymbol}&interval=15min&apikey=${API_KEY}`

//         let stockChartXValuesFunction = [];
//         let stockChartYValuesFunction = [];

//         fetch(API_Call)
//             .then(
//                 function(response) {
//                     return response.json();
//                 }
//             )
//             .then(
//                 function(data) {
//                     console.log(data);

//                     for (let key in data['Time Series (15min)']){
//                     // key is the date in the time series data
//                         stockChartXValuesFunction.push(key);
//                         // stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
//                         stockChartYValuesFunction.push(data['Time Series (15min)'][key]['4. close']);
//                         // push y values - price.
//                     }
//                     pointerToThis.setState({
//                         stockChartXValues: stockChartXValuesFunction,
//                         stockChartYValues: stockChartYValuesFunction
//                     });

//                 });


//         return (
//             <div>
//                 <h3> Daily 15 min price </h3>
//                 <Plot
//                     data={[
//                         {
//                         x: this.state.stockChartXValues,
//                         y: this.state.stockChartYValues,
//                         // x: [1, 2, 3],
//                         // y: [2, 6, 3],
//                         type: 'scatter',
//                         mode: 'lines+markers+text',
//                         marker: {color: 'red'},
//                     },
//                     // {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
//                     ]}
//                     layout={{
//                         width: 720,
//                         height: 440,
//                         title: 'Intraday 15 min Scatter Plot of {StockSymbol}'}}
//                 />
//             </div>
//         );
//     };
// export default QuoteAndChart;
