// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

import fs from 'fs/promises'

/**
 * @function
 * @name exportConfig
 * @returns {import('snowpack').SnowpackUserConfig}
 * @async
 */

async function exportConfig() {
  return {
    mode: process.env.NODE_ENV ?? 'development',
    root: '.',
    workspaceRoot: '.',
    // install: [], // Deprecated! Moved to packageOptions.knownEntrypoints
    exclude: [
      '**/node_modules/**/*',
      '**/dist/**/*'
    ],
    mount: {},
    env: {},
    alias: {
      '@src': './src',
      '@components': './src/components',
      '@pages': './src/pages',
      '@layouts': './src/layouts',
      '@public': './public',
    },
    plugins: [
      '@snowpack/plugin-dotenv',
      '@snowpack/plugin-optimize',
    ],
    devOptions: {
      secure: await checkSSL(),
      output: 'dashboard',
    },
    packageOptions: {
      external: [],
      source: 'local',
      knownEntrypoints: [],
      polyfillNode: true,
      env: {},
      packageLookupFields: [],
      packageExportLookupFields: [],
      rollup: {}
    },
    buildOptions: {
      out: 'dist',
      baseUrl: '/',
      clean: true,
      cacheDirPath: '.cache',
      sourcemap: false,
      watch: true,
      htmlFragments: true
    },
  }
};

async function checkSSL() {
  try {
    return {
      cert: await fs.readFile('localhost.crt'),
      key: await fs.readFile('localhost.key')
    }
  } catch (error) {
    return false
  }
}

export default exportConfig()
