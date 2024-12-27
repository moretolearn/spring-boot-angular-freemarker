const HtmlWebpackPlugin = require('html-webpack-plugin');
const scriptOrder = ['runtime', 'polyfills', 'styles', 'vendor', 'main'];

module.exports = {
    output: {
        "publicPath": "",
    },
    resolve:{
        aliasFields: ['browser'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/main/app/angular18/src/index.ftlh',
            filename: '../templates/angular18/index.ftlh',
            inject: false,
            hash: false,
            xhtml: true,
			minify:false,
			landPage:'${landPage}',
            chunksSortMode: (lhs, rhs) => scriptOrder.indexOf(lhs) - scriptOrder.indexOf(rhs)
        }),
    ]
}
