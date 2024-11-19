import { defineConfig } from '@rslib/core';

export default defineConfig({
  lib: [
    {
      format: 'esm',
      syntax: 'es2021',
    },
  ],
  source: {
    entry: {
      index: './src/index.ts',
      foo: './src/foo.ts'
    }
  }
});
