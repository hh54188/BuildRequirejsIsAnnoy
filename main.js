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
requirejs.config({
	baseUrl: "./src",
	paths: {
		"jQuery": "../lib/jquery"
	}
});
require(["./foo", "./bar", "jQuery"], function (Foo, Bar, $) {

	// 下面的这种加载方式需要注意
	// 虽然访问这个页面是第一次就能加载
	// 但是在打包是是会被忽略的
	// 这也否定了下下的config方法
	require(["./baz"], function (Baz) {

	});
});



// 方法二：把config.js作为模块进行require
// 但是这么做的话打包的时候就没有办法打包其他模块(foo, bar, jQuery)了
// 因为在打包文件看来，主要的依赖就是config.js，工厂函数里面的依赖被忽略了（?）
// 比如考虑下面这种情况 body.onclick = function () {require("xxx", fn)}
// 也就是说build.js无法确定在内部require的是是否是需要提前打包的
// require(["./config"], function () {
// 	require(["./foo", "./bar", "jQuery"], function (Foo, Bar, $) {

// 	})
// })
