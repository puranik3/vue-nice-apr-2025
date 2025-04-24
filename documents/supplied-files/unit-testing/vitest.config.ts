import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

// Reference for including Vuetify in unit tests: https://vuetifyjs.com/en/getting-started/unit-testing/#usage

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      setupFiles: './src/setupTests.ts',
      css: {
        include: /.+/
      },
      server: {
        deps: {
          inline: [/vuetify/]
        }
      }
    }
  })
)
