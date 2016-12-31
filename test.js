/**
 * Created by kisstheraik on 16/12/31.
 */

var p=require('./getopt.js');

var argv='-aser -b we -c';
var opt='a:b::c';

console.log(p.getopt(argv,opt,{'a':function (pa) {
    console.log('a的参数是: '+pa);
}}));
