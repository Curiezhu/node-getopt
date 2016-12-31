/**
 * Created by kisstheraik on 16/12/31.
 * nodejs 版的 getopt函数
 * v1.0
 */

exports.getopt=function(argv,optString,actionList) {

    var result={};

    for(var i=0;i<argv.length;i++){

        var c = argv[i];

        //读取参数
        if( c == '-' ) {

            i++;

            c = argv[i];

            //查找opt里面字符的位置
            var index = optString.indexOf(c);

            if (index >= 0) {

                var currentC = c;

                if (optString[index + 1] == ':') {
                    if (optString[index + 2] == ':') {
                        i++;
                        //两个冒号
                        while(argv[i] == ' '){
                            i++;
                        }
                        result[currentC]=getPara(argv,i);

                    } else {
                        i++;
                        //一个冒号
                        if(argv[i]==' '){
                            actionList[currentC](c);

                        }else {
                            while (argv[i] == ' ') {
                                i++;
                            }
                            result[currentC]=getPara(argv,i);
                        }
                    }
                } else {
                    //没有冒号
                    result[currentC]=getPara(argv,i);
                }
            } else {
                //没有相应的短参数
                console.log('no para for '+c);

            }
        }
    }

    if(actionList!=null) {
        for (var key in result) {
            //如果回调是一个函数
            if(typeof actionList[key] == 'function') {
                actionList[key](result[key]);
            }
        }
    }

    function getPara(str,index) {

        var result='';
        for(var i=index;i<str.length;i++){
            if(str[i] != ' '){
                result+=str[i];
            }else break;
        }
        return result.trim();
    }
    return result;

};


