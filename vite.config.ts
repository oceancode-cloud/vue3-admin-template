import type { UserConfig, ConfigEnv } from 'vite';
import { loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { OUTPUT_DIR, brotliSize, chunkSizeWarningLimit, terserOptions, rollupOptions } from './build/constant'
import viteCompression from 'vite-plugin-compression'
import { viteMockServe } from 'vite-plugin-mock'
import { wrapperEnv } from './build/utils';
import { createProxy } from './build/proxy';
import { visualizer } from 'rollup-plugin-visualizer'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const viteEnv = wrapperEnv(env);
  const { VITE_PUBLIC_PATH, VITE_DROP_CONSOLE, VITE_PORT, VITE_GLOB_PROD_MOCK, VITE_PROXY } =
    viteEnv;
  const isProduction = mode === 'production'
  return {
    base: VITE_PUBLIC_PATH,
    resolve: {
      alias: [
        {
          find: /\/#\//,
          replacement: pathResolve('types')
        },
        {
          find: '@',
          replacement: pathResolve('src')
        },
        {
          find: 'vue-i18n',
          replacement: 'vue-i18n/dist/vue-i18n.cjs.js' //解决i8n警告
        },
        {
          find:'@oceancode/ocean-ui',
          replacement:'@oceancode/ocean-wui'
        },
        {
          find:'naive-ui',
          replacement: pathResolve('./node_modules/naive-ui')
        }
      ],
      dedupe: ['vue']
    },
    // 全局 css 注册
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: `@import "src/styles/common/style.scss";`
        }
      }
    },
    plugins: [
      vue({
        template: {
          compilerOptions: {
            // 排除 iconify 图标影子组件编译报错
            isCustomElement: tag => tag.startsWith('iconify-icon')
          }
        }
      }),
      Components({
        resolvers: [ 
          NaiveUiResolver(),
          {
            type: 'component',
            resolve: (name: string) => {
              if (name.match(/^(O[A-Z]|o-[a-z])/))
                return { name, from: '@oceancode/ocean-wui' }
            }
          }
        ],
      }),
      viteMockServe({
        mockPath: './mock',
        // 开发打包开关
        localEnabled: true,
        // 生产打包开关
        prodEnabled: false,
        // 打开后，可以读取 ts 文件模块。 请注意，打开后将无法监视.js 文件
        supportTs: true,
        // 监视文件更改
        watchFiles: true
      }),
      // 压缩
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: 'gzip',
        ext: '.gz'
      }),
      visualizer()
    ],
    server: {
      host: true,
      port: VITE_PORT,
      proxy: createProxy(VITE_PROXY),
    },
    build: {
      target: 'es2015',
      outDir: OUTPUT_DIR,
      minify: isProduction ? 'terser': false, // 如果需要用terser混淆，可打开这两行
      terserOptions: isProduction ? terserOptions : undefined,
      rollupOptions: rollupOptions,
      chunkSizeWarningLimit: chunkSizeWarningLimit,
    }
  }
}