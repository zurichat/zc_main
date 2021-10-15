module.exports = {
    outputDir: '../public',
    chainWebpack: config => {
        config.externals([
            /.*camljs.*/i,
            {
                'zuricontrol': '@zuri/control',
            },
        ])
    },
    css: {
        loaderOptions: {
            sass: {
                implementation: require('sass'),
            },
        },
    }
}