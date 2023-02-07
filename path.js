const os = require('os')
const path = require('path')
const {readFileSync,writeFileSync,readFile} = require('fs')
let baseAddr = path.resolve('/', __dirname, 'parent')
let giftFile = path.resolve(baseAddr, 'gift.txt')
let surpriseFile = path.resolve(baseAddr, 'surprise.txt')
let giftContent = readFileSync(giftFile, 'utf-8')
let surpriseContent = readFileSync(surpriseFile, 'utf-8')
writeFileSync(path.resolve(baseAddr,'fortune.txt'),`${surpriseContent}... ${giftContent}`)
console.log({ giftContent, surpriseContent })

readFile(path.resolve(baseAddr, 'fortune.txt'),'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
})