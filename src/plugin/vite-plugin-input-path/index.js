import fs from 'fs'
import { resolve } from 'path'
export default function inputPath(config = {}) {
  return {
    name: "vite-plugin-input-path",
    enforce: 'pre',
    config(config) {
      let dirNames = fs.readdirSync('src/pages'), input = {}
      dirNames.pop()
      dirNames.forEach((e) => {
        input[e] = resolve('src/pages', `${e}/index.html`)
      });
      return {
        build: {
          rollupOptions: {
            input
          },
        },
      }
    }
  }
}