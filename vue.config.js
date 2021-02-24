const TimeStamp = new Date().getTime();

module.exports = {
	lintOnSave: false,
	productionSourceMap: false,
	devServer: {
		port: 8081,
		// If you want to turn on the proxy, please remove the mockjs /src/main.jsL11
		// proxy: {
		//   '/': {
		//     target: 'https://school.fengniaotuangou.cn',
		//     ws: true,
		//     changeOrigin: true
		//   }
		// }
	},
	configureWebpack: {
		externals: {
			// 'vue': 'Vue',
			// 'element': 'ElementUI',
			'TMap': 'TMap',
		},
		output: { // 输出重构  打包编译后的 文件名称  【模块名称.时间戳.js】
			filename: `js/[name].${TimeStamp}.js`,
			chunkFilename: `js/[name].${TimeStamp}.js`
		}
	}
}
