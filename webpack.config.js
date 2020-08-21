const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
      entry: './app/index.js', // point of entry, root of tree
      output: {
            path: path.resolve(__dirname, 'dist'), // resolves to absolute path
            filename: 'index_bundle.js' // file name for bundle
      },
      module: {
            rules: [
                  {test: /\.(js)$/, use: 'babel-loader'}, // use babel loader transformation on any js script
                  {test: /\.css$/, use: ['style-loader', 'css-loader']} // use css loader: look for any css imports, webpack will load css into the index_bundle.js as javascript code, style-loader: will inject as style tags into the html DOM.
            ]
      },
      mode: 'development', // mimified code, have evals and so on
      plugins: [
            new HtmlWebpackPlugin({ // generate a new html file with the script of src: index_bundle.js inside the dist folder. This folder will be used for the hosting company.
                  template: 'app/index.html' // take the template from this file
            })
      ]

}
