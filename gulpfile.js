
let gulp = require("gulp");
let shell = require("gulp-shell");
const mocha = require("gulp-mocha");

gulp.task("default", ["test", "reto1", "reto2"]);
gulp.task("test", () =>
        gulp.src("babel-node ./test/tests.js", {read: false})
        .pipe(mocha({reporter: "nyan"}))
);

gulp.task("reto1", shell.task("node main.js inputs/input.json"));

gulp.task("reto2", shell.task("node main.js inputs/input2.json"));
