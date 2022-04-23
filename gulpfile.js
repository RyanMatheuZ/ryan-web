const { src, dest, series } = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const cssnano = require("gulp-cssnano");
const sass = require("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const rename = require("gulp-rename");

const compileSCSS = () =>
	src("./assets/scss/*.scss")
		.pipe(sass())
		.pipe(dest("./assets/css/"));

const optmizeCSS = () =>
	src("./assets/css/*.css")
		.pipe(autoprefixer({
			overrideBrowserslist: ["last 4 version"],
			cascade: false
		}))
		.pipe(cssnano())
		.pipe(concat("bundle.css"))
		.pipe(rename(path => path.extname = ".min.css"))
		.pipe(dest("./dist/css"));


const optmizeJavaScript = () =>
	src("./assets/js/*.js")
		.pipe(uglify())
		.pipe(concat("bundle.js"))
		.pipe(rename(path => path.extname = ".min.js"))
		.pipe(dest("./dist/js"));

exports.buildDev = compileSCSS;
exports.buildProd = series(compileSCSS, optmizeCSS, optmizeJavaScript); 