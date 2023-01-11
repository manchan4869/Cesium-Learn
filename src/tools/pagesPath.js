import fs from 'fs'

let dirNames = fs.readdirSync('src/pages')
dirNames.pop()
let dirs = dirNames.map((e) => {
  return `\n  '${e}': resolve(__dirname, '${e}/index.html')`
}).toString();
let data = `import { resolve } from 'path'
export const pages = {
  ${dirs}

}
`
fs.writeFileSync('src/pages/index.js', data)
