module.exports = function substract(a, b) {
  const res = a - b
  if(res == NaN) {
    throw new Error('Invalid Operation')
  }
  
  return res
}
