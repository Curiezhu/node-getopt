# nodejs-getopt
为nodejs脚本解析参数，支持短参数
getopt需要三个参数，参数字符串，选项字符串，参数回调(可选)。选项字符串的定义和c语言里面的getopt的短参数风格一样

#install & use

npm install nodejs-getopt

let getopt = require('nodejs-getopt');

getopt.getopt(process.argv.slice(2),'ab:c',{'a':function(){},'b':function(){}});
