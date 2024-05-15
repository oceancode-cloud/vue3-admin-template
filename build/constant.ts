import path from 'path'
export const OUTPUT_DIR = 'dist'

// chunk 警告大小
export const chunkSizeWarningLimit = 2000

// 禁用 brotliSize 压缩大小报告
export const brotliSize = false

// eslint-disable-next-line no-control-regex
const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;

// 分包
export const rollupOptions = {
  brotliSize: brotliSize,
  output: {
    chunkFileNames: 'static/js/[name]-[hash].js',
    entryFileNames: 'static/js/[name]-[hash].js',
    assetFileNames: (chunkInfo) => {
      if (['.png', '.jpg', '.jpeg'].includes(path.extname(chunkInfo.name))) {
        return `static/[ext]/[name].[ext]`
      }
      return `static/[ext]/[name]-[hash].[ext]`
    },

    // 解决github后文件`_plugin-vue_export-helper`访问不到
    sanitizeFileName(name) {
      const match = DRIVE_LETTER_REGEX.exec(name);
      const driveLetter = match ? match[0] : "";
      // A `:` is only allowed as part of a windows drive letter (ex: C:\foo)
      // Otherwise, avoid them because they can refer to NTFS alternate data streams.
      return (
        driveLetter +
        name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "")
      );
    },
    manualChunks: {

    }
  }
}

// 去除开发代码
export const terserOptions = {
  compress: {
    keep_infinity: true,
    drop_console: true,
    drop_debugger: true
  }
}
