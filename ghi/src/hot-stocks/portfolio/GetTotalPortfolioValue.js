
const getTotalPortfolioValue = (portfolio) => {
    const result = portfolio.reduce((get_all_saved_stocks) => {
        return get_all_saved_stocks + (+cost_current || 0) * (+num_shares || 0);

    }, 0);
    return result.toFixed(0);
}

export {
    getTotalPortfolioValue
}
