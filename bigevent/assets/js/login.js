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
        // 添加自定义校验规则
    layulFrom.verify({
            pwd: [
                /^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'
            ],
            repwd: function(v) {
                let pass = $('.link_reg [name=password]')

                if (pass.val() !== v) {
                    return '两次输入的密码不一致!'
                }
            }
        })
        // 用户注册
    $('#form_reg').on('submit', function(e) {
        e.preventDefault() //阻止submit默认提交事件
        let usn = $('.link_reg [name=username]').val()
        let pwd = $('.link_reg [name=password]').val()
        $.ajax({
            type: 'POST',
            url: '/api/reguser',
            data: { username: usn, password: pwd },
            success: function(res) {
                console.log(res);
                layulAlert.msg(res.message)
                if (res.status === 0) {
                    $("#link_reg").click()
                }
            }
        })
    })

    $("#form_login").on('submit', function(e) {
        e.preventDefault() //阻止submit默认提交事件

        let usn = $('.link_login [name=username]').val()
        let pwd = $('.link_login [name=password]').val()
        $.ajax({
            type: 'POST',
            url: '/api/login',
            data: $(this).serialize(),
            success: function(res) {

                if (res.status === 0) {
                    // 存入本地缓存中
                    localStorage.setItem('token', res.token)

                    location.href = 'index.html'
                } else {
                    layulAlert.msg('用户名或密码错误')
                }
            }
        })
    })


})