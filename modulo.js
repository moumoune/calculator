module.exports = function modulo(a, b) {
  const res = a % b
  if(res == NaN) {
    throw new Error('Invalid Operation')
  }
  
  return res
}
