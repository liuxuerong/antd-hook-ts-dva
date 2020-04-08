/*
 * @Author: lxr
 * @Date: 2020-04-08 13:45:46
 * @LastEditTime: 2020-04-08 17:14:54
 * @LastEditors: Do not edit
 * @Description: 
 */
const {
  override,
  fixBabelImports,
  addLessLoader,
  addDecoratorsLegacy,
  addWebpackAlias,
} = require ('customize-cra');

const path = require ('path');
const ProgressBarPlugin = require ('progress-bar-webpack-plugin'); //打包进度条
const WebpackBuildNotifierPlugin = require ('webpack-build-notifier'); //打包完成桌面提醒
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');//加快构建

const myPlugin = [
  //添加webpack插件
  new ProgressBarPlugin (),
  new WebpackBuildNotifierPlugin ({
    title: '打包打包！',
    logo: path.resolve ('./src/logo.svg'),
    suppressSuccess: true,
  }),
  new HardSourceWebpackPlugin()
];
module.exports = override (
  fixBabelImports ('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addDecoratorsLegacy (), //使用装饰器
  addWebpackAlias ({
    //路径别名
    '@': path.resolve (__dirname, 'src'),
  }),
  addLessLoader ({
    javascriptEnabled: true,
    modifyVars: {'@primary-color': '#1DA57A'},
  }),
  config => {
    config.plugins = [...config.plugins, ...myPlugin];
    return config;
  }
);
