import HtmlWebpackPlugin from 'html-webpack-plugin'
import template          from 'html-webpack-template'
import { join }          from 'path'

export const mode = 'development'
export const entry = ['./src/index']
export const output = {
  publicPath: '/',
  path: `${__dirname}/dist`,
  filename: 'bundle.js',
}

export const module = {
  rules: [
    {
      test: /\.(ts|js)x?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
      },
    },
  ],
}

export const devServer = {
  contentBase: join(__dirname, 'dist'),
  compress: true,
  port: 9000,
}

export const resolve = {
  extensions: ['.ts', '.tsx', '.js', '.json'],
}

export const plugins = [
  new HtmlWebpackPlugin({
    template,
    devServer: 'http://localhost:9000',
    inject: false,
    appMountId: 'root',
    title: 'Example',
    scripts: ['bundle.js'],
  }),
]
