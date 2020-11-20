const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');
module.exports = {
    entry:"./src/index",
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname+"/build")
    },
    mode:"none",
    resolve:{
        extensions:['.tsx', '.ts','.js','.jsx'],
    },
    module:{
        rules:[
            {
                test:/\.html$/,
                use:[
                    {
                        loader:"html-loader",
                        options:{minimize:false}
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: "/node_modules",
                use: ['babel-loader'],
            },
            {
                test:/\.tsx?$/,
                use:'ts-loader',
                exclude:"/node_modules/",
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
          template: './public/index.html', // public/index.html 파일을 읽는다.
          filename: 'index.html' // output으로 출력할 파일은 index.html 이다.
        }),
        new Dotenv()
    ]
}