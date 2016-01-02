const reverse = (a) => 
  a.reduceRight((xs, x) => xs.concat(x), [])