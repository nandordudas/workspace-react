import type { Options } from 'tsup'

import { dependencies } from './package.json'

const config: Options = {
  clean: true,
  entry: [
    './src/index.ts',
  ],
  external: Object.keys(dependencies),
  minify: true,
  target: 'node16',
}

export default config
