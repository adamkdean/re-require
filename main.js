module.exports = function (path) {
  delete require.cache[require.resolve(path)]
  return require(path)
}
