# IOT_node
![enter image description here](https://lh3.googleusercontent.com/d6SNHTesKSnfqqgxWYSKgIBY-QhVP6DZ1b-2lmGGRg5UC7JAjOYPEkyhxj_4KhPLFG3uG3iu6Tzl)
![enter image description here](https://lh3.googleusercontent.com/x0IcqtDUNzzwoqX8x9ZrAUICW1-BxC0WKELDDMUomHaEURsrlonTq46aRFSoXWIeHqg5rpNaTz8o)
![enter image description here](https://lh3.googleusercontent.com/xUG7b4sNBPosRXwRaHDKw2T9DKm-CDqwWn5_mEjDTkQaezy0LD8U0IDP7XU7M9CMtl1D_o03i3Wz)


https://expressjs.com/zh-tw/starter/generator.html

    $ npm install express-generator -g
    $ express --view=pug myapp
    $ cd myapp
	$ npm install
	set DEBUG=myapp:* & npm start

[express教學](https://developer.mozilla.org/zh-TW/docs/Learn/Server-side/Express_Nodejs/skeleton_website)

### 伺服器在檔案更改時重新啟動:

    npm install --save-dev nodemon

    "scripts": {
        "start": "node ./bin/www",
        "devstart": "nodemon ./bin/www"
      },

在 Windows，使用此命令:

    SET DEBUG=app:* & npm run devstart

在 macOS or Linux，使用此命令:

    DEBUG=app:* npm run devstart

### Others:
[##重要##Node JS-Back end見聞錄](https://ithelp.ithome.com.tw/articles/10194968)
[nodejs express的session验证](https://blog.csdn.net/qq_30100043/article/details/53673725)
[Secure random token in Node.js](https://stackoverflow.com/questions/8855687/secure-random-token-in-node-js)
[crypto_crypto_randombytes_size_callback](https://nodejs.org/api/crypto.html#crypto_crypto_randombytes_size_callback)
[session 在 express 上的應用 – 登入實作為例](https://ithelp.ithome.com.tw/articles/10187464)

    var crypto = require('crypto');
	var token = crypto.randomBytes(64).toString('hex');

[require() 源码解读](http://www.ruanyifeng.com/blog/2015/05/require.html)

> 如果 X 是内置模块（比如 require('http'）)  
　　a. 返回该模块。  
　　b. 不再继续执行。
（2）如果 X 以 "./" 或者 "/" 或者 "../" 开头  
　　a. 根据 X 所在的父模块，确定 X 的绝对路径。  
　　b. 将 X 当成文件，依次查找下面文件，只要其中有一个存在，就返回该文件，不再继续执行。

[Passport.js](https://ithelp.ithome.com.tw/articles/10193017?sc=iThelpR)

[使用Node.js訂閱MQTT訊息](https://swf.com.tw/?p=1023)
改正:
[Socket.io + MQTT = Memory leak?!](https://dotblogs.com.tw/justtong/2017/11/28/181013)
