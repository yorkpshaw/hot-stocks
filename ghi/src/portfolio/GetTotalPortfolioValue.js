
const getTotalPortfolioValue = (portfolio) => {
    const result = portfolio.reduce((acc, curr) => {
        return acc + (+curr.price || 0) * (+curr.quantity || 0);

    }, 0);
    return result.toFixed(0);
}
