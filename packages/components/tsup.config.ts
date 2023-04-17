import svgrPlugin from 'esbuild-plugin-svgr';
import { defineConfig, Options } from 'tsup';
import tsconfig from './tsconfig.json';

const options = defineConfig({
  format: 'esm',
  target: tsconfig.compilerOptions.target as Options['target'],
});

export default defineConfig([
  {
    name: 'components',
    entry: {
      index: 'src/index.ts',
    },
    loader: {
      '.png': 'copy',
    },
    outExtension: () => ({ js: '.js' }),
    external: ['semver'],
    esbuildPlugins: [svgrPlugin({ exportType: 'named' })],
    async onSuccess() {
      // tsup unable generate d.ts for .svg imports https://github.com/egoist/tsup/issues/570
    },
    ...options,
  },
  {
    name: 'next.config',
    entry: ['src/next.config.ts'],
    ...options,
  },
  {
    name: 'dts',
    entry: {
      index: 'src/index.ts',
      'next.config': 'src/next.config.ts',
    },
    dts: {
      only: true,
    },
  },
]);
