/** @type {import('next').NextConfig} */
const { withFederatedSidecar, federationLoader } = require('@module-federation/nextjs-mf');
const deps = require('./package.json').dependencies;
let merge = require('webpack-merge');


module.exports = {
  webpack: (config, options) => {
    config.plugins.push(
      new options.webpack.container.ModuleFederationPlugin({
        remoteType: "var",
        remotes: {
          remote: "remote",
        },
        shared: {
          react: {
            eager: true,
            singleton: true,
            requiredVersion: false,
          }
        },
      })
    );

    config.module.rules.push({
      test: /_app.js/,
      loader: "@module-federation/nextjs-mf/lib/federation-loader.js",
    });

    return config;
  },
}