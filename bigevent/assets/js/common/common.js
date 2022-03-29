let layulFrom = layui.form
let layulAlert = layui.layer
const BASE_URL = 'http://www.liulongbin.top:3007'
    // 拼接根路径(每次执行ajax请求的时候会先执行ajaxPrefilter,options.url就是获取到ajax的url路径)
$.ajaxPrefilter(function(options) {
    options.url = BASE_URL + options.url
})