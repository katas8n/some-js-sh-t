const os = require('os');

console.log('[ARCHITECTURE]', os.arch());
console.log('[CPUs]', os.cpus());
console.log('[UserINFO]', os.userInfo());
console.log('[NetworkInterface]', os.networkInterfaces());
console.log('[RELEASE]', os.release());
