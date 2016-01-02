const gcd = (a, b) => !b ? a : gcd(b, a % b)
const lcm = (a, b) => (a * b) / gcd(a, b)
const laps = (lcm, x, y) => [lcm / x, lcm / y]
const nbrOfLaps = (x, y) => laps(lcm(x, y), x, y)
