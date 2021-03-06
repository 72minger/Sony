//引入模块
const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass");
const babel = require("gulp-babel");
const connect = require("gulp-connect");

//制定任务
gulp.task("default", function(){

})

//压缩html
gulp.task("html", () => {
	gulp.src("src/**/*.html")
		.pipe(htmlmin({
			removeComments: true,//清除HTML注释
               collapseWhitespace: true,//压缩HTML
               collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
               removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
               removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
               removeStyleLinkTypeAttributes: true//删除<style>和<link>的type="text/css"
		}))
		.pipe(gulp.dest("dist"))
		.pipe(connect.reload());

})

//压缩js
//ES6转ES5
gulp.task("js", () => {
	gulp.src("src/js/**/*.js")
		.pipe(babel({
			presets: ["@babel/env"]
		}))
		.pipe(uglify())
		.pipe(gulp.dest("dist/js"))
		.pipe(connect.reload());
})

//编译sass
//压缩css
gulp.task("css", () => {
	gulp.src("src/scss/**/*.scss")
		.pipe(sass())
		.pipe(cleanCSS())
		.pipe(gulp.dest("dist/css"))
		.pipe(connect.reload());
})

//开启server
gulp.task("server", () => {
	connect.server({
		port: 1994,
		livereload: true,
		root: "dist"
	})
})

//移动静态资源
gulp.task("images", () => {
	gulp.src("src/images/**/*")
		.pipe(gulp.dest("dist/images"))
		.pipe(connect.reload());
})

//移动libs
gulp.task("libs", () => {
	gulp.src("src/libs/**/*")
		.pipe(gulp.dest("dist/libs"));
})

//监听文件改变
gulp.task("watch" ,() => {
	gulp.watch("src/**/*.html", ["html"]);
	gulp.watch("src/js/**/*.js", ["js"]);
	gulp.watch("src/scss/**/*.scss", ["css"]);
})


gulp.task("default", ["server", "html", "js", "images", "css", "libs", "watch"]);
