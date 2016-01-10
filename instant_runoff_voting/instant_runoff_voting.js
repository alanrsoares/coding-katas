function runoff(voters) {
  if (!voters.length || !voters[0].length) return

  let min = Number.MAX_VALUE

  const counts = {}

  for (let voter of voters)
    counts[voter[0]] = (counts[voter[0]] || 0) + 1

  for (let key in counts) {
    min = Math.min(counts[key], min)
    if (counts[key] * 2 > voters.length) return key
  }

  return runoff(voters.map(xs => xs.filter(x => counts[x] > min)))
}
