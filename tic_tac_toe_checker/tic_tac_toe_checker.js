const { find, flatten, identity } = require('lodash')

const eq = xs => xs.reduce((acc, x) => acc && x && x === xs[0], true)
const cols = xs => xs.map((_, i) => xs.map((_, j) => xs[j][i]))
const diag = xs => [identity, (x) => xs.length - 1 - x].map(f => xs.map((_, i) => xs[f(i)][i]))
const isTie = xs => !flatten(xs).filter(x => !x).length

const findWinner = xs =>
  Math.max(...[identity, cols, diag].map(f => (find(f(xs), eq) || [-1])[0]))

const isSolved = xs => isTie(xs) ? 0 : findWinner(xs)