const path = require('path');


module.exports ={
  mode: 'development',
  entry:'./js/main.js',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'bundle.js'
  },
  module:{
    rules:[{
      test:/\.js$/,
      exclude:/node_modules/,
      use:{
        loader:'babel-loader',
        options:{
          presets:['react']
        }
      }
    },{
      test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader'
    ]
    }]
  }
}
