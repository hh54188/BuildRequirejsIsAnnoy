/*

	requirejs的打包过程简直就是一个坑：
	举例1：
	如果main.js和其他的文件不在同一个目录的话(*但注意，大多数情况下, main.js应该
	是和其他js文件放在同一个目录中的*)：


	Project:
	|--build.js
	|--main.js
	|--src
	    |--foo.js
	    |--bar.js
	
	那么build.js你可能会这么写
	({
	    baseUrl: './',
	    name: "./main",
	    out: "./main-built.js"
	})
	
	因为打包时总是以baseUrl为基本路径查找文件
	r.js能够在当前目录(./)根据baseUrl找到main.js，但是它找不到其他的js，所以会报错

	如果你这么写：
	({
	    baseUrl: './src/',
	    name: "./main",
	    out: "./main-built.js"
	})	

	那么r.js默认就会去src目录下面找main.js当然也找不到，还是会报错

	**main和它的依赖必须要在一个文件夹中吗？

 */
({
	// 顺序是没有影响的
    mainConfigFile: './config.js',
    paths: {
    	"main": '../main',// 比如进行指定，否则它会去config.js中配置的baseUrl进行main.js进行查找
    	"config": '../config'
    },
    name: "main",
    out: "main-built.js" // 注意：out与dir,modules等参数不兼容，out主要用于单个元素的合并
})