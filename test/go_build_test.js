var ctx = require('./context.js');

exports.copy = {

  testBuild: function (test) {
    var task = ctx.newTask(['build', 'myapp']);

    var result = task.execute(true);
    test.notEqual(result, false);
    test.equals(result.cmd, 'go build -o myapp .');

    test.done();
  },

  testBuildWithCustomOutput: function (test) {
    var task = ctx.newTask(['build', 'myapp'], {
      output: 'server'
    });

    var result = task.execute(true);
    test.notEqual(result, false);
    test.equals(result.cmd, 'go build -o server .');

    test.done();
  },

  testBuildWithCustomOutput2: function (test) {
    var task = ctx.newTask(['build', 'myapp'], {
      build_flags: ['-o', 'server']
    });

    var result = task.execute(true);
    test.notEqual(result, false);
    test.equals(result.cmd, 'go build -o server .');

    test.done();
  },

  testBuildWithCustomPackages: function (test) {
    var task = ctx.newTask(['build', 'myapp'], {
      build_pckgs: ['mypckg']
    });

    var result = task.execute(true);
    test.notEqual(result, false);
    test.equals(result.cmd, 'go build -o myapp mypckg');

    test.done();
  },

  testBuildWithTags: function (test) {
    var task = ctx.newTask(['build', 'myapp'], {
      build_flags: ['-tags', 'myflag']
    });

    var result = task.execute(true);
    test.notEqual(result, false);
    test.equals(result.cmd, 'go build -o myapp -tags myflag .');

    test.done();
  },

};