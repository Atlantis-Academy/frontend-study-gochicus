import HTMLWebpackPlugin from 'html-webpack-plugin'
import template          from 'html-webpack-template'
import path              from 'path'
import PnpWebpackPlugin  from 'pnp-webpack-plugin'

export const mode = 'development'
export const entry = './app/src/index.tsx'
export const output = {
  path: `${__dirname}/dist`,
}
export const plugins = [
  new HTMLWebpackPlugin({
    inject: false,
    template,
    mobile: true,
    appMountId: 'root',
    devServer: 'http://localhost:9000',
    title: 'My diary',
    scripts: ['main.js'],
  }),
]

export const module = {
  rules: [
    {
      test: /\.(ts|js)x?$/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
      },
    },
    {
      test: /\.(png|jp(e*)g|svg|gif)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'images/[hash]-[name].[ext]',
          },
        },
      ],
    },
  ],
}
export const resolve = {
  extensions: ['.ts', '.json', '.tsx', '.js'],
  plugins: [
    PnpWebpackPlugin,
  ],
}
export const resolveLoader ={
  plugins: [
    PnpWebpackPlugin.moduleLoader(module),
  ],
}
export const devServer = {
  contentBase: path.join(__dirname, 'dist'),
  compress: true,
  port: 9000,
  open: true,
}
