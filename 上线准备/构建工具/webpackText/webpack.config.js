const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin= require('clean-webpack-plugin');
module.exports = {
    entry:{
        //多文件入口 webpack搜索这个文件进行打包
        app:'./app/js/main.js'
    },
    devServer:{
        //静态文件在何处输出
        contentBase:path.join(__dirname,'dist'),
        //gzip压缩
        compress:true,
        //端口号9000
        port:9000,
    },
    module:{
        //loaders是个数组 什么样的文件用什么样的解析器
        rules:[{
            //识别文件的正则表达式
            test:/\.html&/,
            loader:'html-loader'
        },
        {
            test:/\.vue&/,
            loader:'vue-loader'
        },
        {
            test:/\.scss&/,
            //webpack串行解析 顺序从右向左
            //sass-loader解析完之后传给css-loader解析再交给style-loader
            loader:'style-loader!css-loader!sass-loader'
        },        
        ]
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new htmlWebpackPlugin({
            templet:'./app/views/index.html'
        })
    ],
    //输出
    output:{
        //输出文件名 name是固定的不能瞎写
        filename:'[name].min.js',
        //输出文件名的目录
        //webpack基于node环境 node下的path
        //resolve相对路径
        //__dirname node环境变量 当前路径
        //'dist'创建__dirname下的文件夹的名字
        //输出文件在当前文件下的dist目录里
        path:path.resolve(__dirname,'dist')
    }
}