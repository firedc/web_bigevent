//每次调用$.get()或$.psost()或$.ajax()的时候会先调用ajaxPrefilter这个函数
$.ajaxPrefilter(function(options) {
    console.log(options.url);
    options.url = '' + options.url 
})