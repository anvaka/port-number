module.exports = getRandomPortBasedOnPath;

function getRandomPortBasedOnPath(seed) {
  if (seed === undefined) seed = 1024;

  // yeah, very silly hash algorithm:
  var sillyHash = getHash(__dirname);
  return Math.round(seed + sillyHash);
}

function getHash(str) {
  var result = 0;
  for (var i = 0; i < str.length; ++i) {
    result += str.charCodeAt(i);
  }

  return result;
}
