const { range } = require('lodash')

const reducer = (a, i) => a + 1 / (1 + i * 3)

const SeriesSum = (n) => range(n).reduce(reducer, 0).toFixed(2)