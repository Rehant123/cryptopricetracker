export function fetchTrendingCoins(currency){
    return `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=order_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`
}

export function fetchList(currency)
{
    return `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`
}


export const HistoricalChart = (id, days = 365, currency) =>{
    return `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

}
  
export const SingleCoin = (id) =>{

    return `https://api.coingecko.com/api/v3/coins/${id}`;
}

