import * as React from 'react';
import { useEffect, useState } from 'react';


export function PortfolioStocks(props) {

    const [portfolioStocks, setPortfolioStocks] = useState([]);

    useEffect(() => {
        async function getPortfolioStocks() {
            const url = `http://localhost:8000/api/portfolio_stocks`;
            const response = await fetch(url);
            console.log(response);
            if (response.ok) {
                const data = await response.json();
                setPortfolioStocks(data);
            }
        }
        getPortfolioStocks();
    }, [setPortfolioStocks]);

    return (
        <div>
            hello
        </div>
      );
}
