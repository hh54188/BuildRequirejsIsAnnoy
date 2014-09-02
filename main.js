/*
	这是main.js的config配置文件
	但同时也要作为build.js的打包用的配置文件

	但是作为独立文件，如何与main.js结合起来？
	方法1：
		require(["./config"], function () {
			require([], function () {
	
			});
		});

	方法2：
		把config文件的内容在main.js中复制一份
 */


// // 方法一：把config.js的内容再复制一遍
// requirejs.config({
// 	baseUrl: "./src",
// 	paths: {
// 		"jQuery": "../lib/jquery"
// 	}
// });
// require(["./foo", "./bar", "jQuery"], function (Foo, Bar, $) {});



// 方法二：把config.js作为模块进行require
// 但是这么做的话打包的时候就没有办法打包其他模块(foo, bar, jQuery)了
require(["./config"], function () {
	require(["./foo", "./bar", "jQuery"], function (Foo, Bar, $) {

	})
})
