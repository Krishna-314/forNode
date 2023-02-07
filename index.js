const os = require('os')
let user = os.userInfo()
console.log({ user })

// let repeater = setInterval(() => {
//     console.log(`uptime : ${os.uptime()}`);
// }, 100);
// setTimeout(()=> clearInterval(repeater),1000)
let osInfo = {
    release: os.release(),
    version: os.version(),
    freemem: os.freemem(),
    totMem:os.totalmem(),
    cpu: os.cpus(),
    type: os.type(),
    networkInterfaces: os.networkInterfaces(),
   hostName :os.hostname()
}
console.log({osInfo})