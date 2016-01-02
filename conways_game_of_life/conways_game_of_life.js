const get = xs => (y, x) => (xs[y] && xs[y][x]) | 0

const nextGen = grid =>
  grid.map((row, i) => 
    row.map((cell, j) => {
      const at = get(grid)
      
      const neighbors =
        at(i - 1, j - 1) + at(i - 1, j) + at(i - 1, j + 1) +
        at(i, j - 1)                    + at(i, j + 1) +
        at(i + 1, j - 1) + at(i + 1, j) + at(i + 1, j + 1)
        
      return (neighbors === 3 || (neighbors === 2 && cell)) | 0;
    })
  )