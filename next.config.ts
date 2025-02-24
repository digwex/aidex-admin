import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev'
import type { NextConfig } from 'next'

// import webpack from 'webpack'

const nextConfig: NextConfig = {
  basePath: process.env.BASEPATH,
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/en/dashboard',
        permanent: true,
        locale: false
      },
      {
        source: '/:lang(en|fr|ar)',
        destination: '/:lang/dashboard',
        permanent: true,
        locale: false
      },
      {
        source: '/((?!(?:en|fr|ar|front-pages|favicon.ico)\\b)):path',
        destination: '/en/:path',
        permanent: true,
        locale: false
      }
    ]
  }

  // webpack: config => {
  //   ;(config.resolve.fallback = {
  //     querystring: require.resolve('querystring-es3'),
  //     crypto: require.resolve('crypto-browserify'),
  //     stream: require.resolve('stream-browserify'),
  //     assert: require.resolve('assert'),
  //     util: require.resolve('util'),
  //     http: require.resolve('stream-http'),
  //     https: require.resolve('https-browserify'),
  //     vm: require.resolve('vm-browserify')
  //   }),
  //     config.plugins.push(
  //       new webpack.ProvidePlugin({
  //         process: 'process/browser'
  //       })
  //     )

  //   return config
  // }
}

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform()
}

export default nextConfig
