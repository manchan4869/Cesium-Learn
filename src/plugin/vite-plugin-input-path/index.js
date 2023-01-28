import fs from 'fs'
import { resolve } from 'path'
export default function inputPath(config = {}) {
  let pageList = {}
  return {
    name: "vite-plugin-input-path",
    enforce: 'pre',
    config(config) {
      let dirNames = fs.readdirSync('src/pages'), input = {}
      dirNames.forEach((e) => {
        pageList[e] = `pages/${e}/`
        input[e] = resolve('src/pages', `${e}/index.html`)
      });
      return {
        build: {
          rollupOptions: {
            input
          },
        },
      }
    },
    transformIndexHtml(html) {
      let li = ''
      for (const key in pageList) {
        const e = pageList[key];
        li += `<a href="${e}" class="list-group-item list-group-item-action ">${key}</a>`
      }
      return html.replace('{{list}}', li)
    },
    configureServer(server) {
      server.watcher.on("add", handleFileChange);
      server.watcher.on("unlink", handleFileChange);
      function handleFileChange(file) {
        /pages\\\w+\\index\.html/.test(file) ? server.restart() : ''
      }
    }
  }
}