/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  appDirectory: 'app',
  assetsBuildDirectory: 'public/build',
  publicPath: '/build/',
  // serverModuleFormat: process.env.NODE_ENV === 'development' ? 'cjs' : 'esm',
  serverModuleFormat: 'esm',
  serverPlatform: ' ',
  serverBuildDirectory: 'build',
  devServerBroadcastDelay: 1000,
  ignoredRouteFiles: ['.*'],
};
