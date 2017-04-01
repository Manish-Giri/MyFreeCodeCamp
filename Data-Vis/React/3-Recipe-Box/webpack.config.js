/**
 * Created by manishgiri on 3/31/17.
 */
/**
 * Created by manishgiri on 3/12/17.
 */
var path = require('path');
/*module.exports = {
 entry: './public/app.js',
 output: {
 path: __dirname,
 filename: './public/bundle.js'
 },
 resolve: {
 extensions: ['.js', '.jsx', '']
 }
 }; */

module.exports = {
    entry: './public/scripts/app.jsx',
    output: {
        path: __dirname,
        filename: './public/scripts/bundle.js'
    },
    resolve: {
        //root: __dirname,
        alias: {
            //Greeter: 'public/components/Greeter.jsx',

        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    }
};


