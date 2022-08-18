const filesystem = require('fs'); // handle files and paths

// 
filesystem.writeFileSync('./media/hello.txt', 'Im writing this on node!');

console.log("Hello im in node");