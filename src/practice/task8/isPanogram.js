// const str = 'The quick brown fox jumps over the lazy dog';
/**
 *
 * @param {string} str
 *
 * @returns {Boolean}
 */

function isPangram(str) {
  if (typeof str !== 'string') return false;
  const testA = 'abcdefghijklmnopqrstuvwxyz'
  if(str.length < 1) return false
  for(const ch of testA){
    if(str.toLowerCase().indexOf(ch) === -1) return false
  }
  return true
}
module.exports = isPangram;



