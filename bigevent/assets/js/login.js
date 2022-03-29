$(function() {
    $(".link_reg").hide()
    $("#link_login").on('click', function() {
        $(".link_reg").show()
        $(".link_login").hide()
    })
    $("#link_reg").on('click', function() {
        $(".link_reg").hide()
        $(".link_login").show()
    })

    let form = layui.form

    form.verify({
        pwd: [
            /^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'
        ],
        repwd: function(v) {
            let pass = $('.layui-form [name=password]')
            if (pass !== v) {
                return '两次输入的密码不一致!'
            }
        }
    })

    $('.link_reg from').on('submit', function(e) {

    })
})