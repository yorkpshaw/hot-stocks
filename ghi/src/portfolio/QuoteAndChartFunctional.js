// import React from 'react';
// import Plot from 'react-plotly.js';
// import { useGetStockQuery } from '../rtk-files/stocksApi';
// import { useEffect, useState } from 'react';


// const { data: stocksData, isLoading: stocksLoading } = useGetStockQuery();

// function DisplayChart (props) {

//     const [stockChartXValues, setStockChartXValues] = useState([]);
//     const [stockChartYValues, setStockChartYValues] = useState([]);

//     };

//     useEffect(() => {

//         const fetchData = async () => {
//             try {
//                 const response = await fetch(useGetStockQuery)
//                 const data = await response.json();
//                 setStockChartXValues(data),
//                 setStockChartYValues([data]);
//             } catch (err) {
//                 console.log(err);
//             }

//             for (let key in data['Time Series (15min)']){
//                 // key is the date in the time series data
//                     stockChartXValuesFunction.push(key);
//                     // stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
//                     stockChartYValuesFunction.push(data['Time Series (15min)'][key]['4. close']);
//                     // push y values - price.
//                 }
//                 // this.setState({
//                 // pointerToThis.setState({
//                     setStockChartXValues(stockChartXValuesFunction),
//                     setStockChartYValues(stockChartYValuesFunction);
//                 };

//             fetchData();

//         }, [])


//         return (
//         <div>
//             <h3> Daily 15 min price </h3>
//             <Plot
//                 data={[
//                     {
//                     x: setStockChartXValues,
//                     y: setStockChartYValues,
//                     type: 'scatter',
//                     mode: 'lines+markers+text',
//                     marker: {color: 'red'},
//                 },

//                 ]}
//                 layout={{
//                     width: 720,
//                     height: 440,
//                     title: 'Intraday 15 min Scatter Plot of {StockSymbol}'}}
//             />
//         </div>
//     )
// };

// export default DisplayChart;
