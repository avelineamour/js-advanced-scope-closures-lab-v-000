

function produceDrivingRange(blockRange){
  return function(a, b){
    a.slice(2)
    b.slice(2)
    a = parseInt(a)
    b = parseInt(b)
    if (b - a < blockRange) {
      return `within range by ${b - a}`
    }
    else {
      return `${(b - a) - blockRange} blocks out of range`
    }
  }
}

function produceTipCalculator(percentage) {
  return function(bill){
    return bill * percentage
  }
}
