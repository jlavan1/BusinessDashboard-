const stockapi = () => {

var googleFinance = require('google-finance');

googleFinance.companyNews({
    symbol: 'NASDAQ:AAPL'
}, function (err, news) {
    console.log(err)
    console.log(news)
});

googleFinance.historical({
    symbol: 'NASDAQ:AAPL',
    from: '2014-01-01',
    to: '2014-12-31'
}, function (err, quotes) {
    console.log(err)
    console.log(quotes)
});

}

export default stockapi;