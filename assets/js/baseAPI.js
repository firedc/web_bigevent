//每次调用$.get()或$.psost()或$.ajax()的时候会先调用ajaxPrefilter这个函数
$.ajaxPrefilter(function(options) {
    console.log(options.url);
    options.url = 'http://www.liulongbin.top:3007' + options.url 

//统一为有权限的接口，设置headers请求头
    if(options.url.indexOf('/my/') !== -1) {
        options.headers = {
            Authorization:localStorage.getItem('token') || ''
        }
    }

//全局统一挂载complete
options.complete = function(res) {
    if(res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！') {
        //1.清空token
        localStorage.removeItem('token')
        //2.跳转到登录页面
        location.href = '/home/login.html'
    }
}
})