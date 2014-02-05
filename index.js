var createPattern = function(path) {
  return { pattern: path, included: true, served: true, watched: false };
};

var initBenchmark = function(files) {
  files.unshift(createPattern(__dirname + '/adapter.js'));
  files.unshift(createPattern(__dirname + '/lib/lodash.js'));
  files.unshift(createPattern(__dirname + '/lib/benchmark.js'));
};

initBenchmark.$inject = ['config.files'];

module.exports = {
  'framework:benchmark': ['factory', initBenchmark]
};