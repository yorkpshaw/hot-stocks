import * as React from 'react';
import { useEffect, useState } from 'react';


export function Portfolio(props) {

    const [portfolioStocks, setPortfolio] = useState([]);

    useEffect(() => {
        const getPortfolio = async () => {
            const url = `http://localhost:8000/api/portfolio_stocks`;
            const response = await fetch(url);
            console.log(response);
            if (response.ok) {
                const data = await response.json();
                setPortfolio(data);
            }
        }
        getPortfolio();
    }, [setPortfolio]);

    return (
        <div>
            hello
        </div>
      );
}
