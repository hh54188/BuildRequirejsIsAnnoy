requirejs.config({
	baseUrl: "./src",
	paths: {
		"jQuery": "../lib/jquery"
	}
});

require(["./foo", "./bar", "jQuery"], function (Foo, Bar, $) {
	
});