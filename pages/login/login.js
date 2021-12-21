const app = getApp()

Page({
    data: {

    },
    reg:function(){
        wx.navigateTo({
          url: '../regit/regit',
        })
    },
    formSubmit: function (e) {
        wx.request({
            url: 'http://47.106.189.98:8899/user/getbynamepassword',
            data: {
                name: e.detail.value.username,
                password: e.detail.value.passwd
            },
            header: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: 'get',
            dataType: 'json',
            success: function (res) {
                console.log(res.data)
                let data = res.data
                if(data.length>1){
                wx.setStorageSync('user', data[data.length-1])
            } else if(data.length == 1){
                wx.setStorageSync('user', data)
            }
                wx.showToast({
                  title: '登录成功',
                  icon:'success'
                })
                setTimeout(function(){
                    wx.switchTab({
                      url: '../index/index',
                    })
                })
            },
            fail: function (error) {
                console.log(error)
            }
        })
    }
})