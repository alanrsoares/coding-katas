const sum = xs => xs.reduce((a, b) => a + b, 0)

const findEvenIndex = xs => {
  for (let i = 1; i < xs.length; i++)
    if (sum(xs.slice(0, i)) === sum(xs.slice(i + 1))) return i
  return -1
}
