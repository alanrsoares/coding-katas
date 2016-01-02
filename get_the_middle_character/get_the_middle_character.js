const getMiddle = s => 
  s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 ? 1 : 2)