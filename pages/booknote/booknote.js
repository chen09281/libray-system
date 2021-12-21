const app = getApp()
Page({
    data:{
        book:''
    },
    onLoad:function(option){
        let data = wx.getStorageSync('user')
        var self = this
        if(data.id != undefined){
        wx.request({
            url: 'http://47.106.189.98:8899/userbooknote/getbyuseridbookid',
            header:{
              'content-type': 'Application/json'
            },
            method:'get',
            dataType:'json',
            data:{
              user_id:data.id,
              book_id:app.globalData.book_id
            },
            success:function(res){
                console.log(res.data)
                let data = res.data
                self.setData({
                    book:data
                })
            },fail:function(error){
                console.log(error)
            }
        })
    } else {
        wx.showToast({
          title: '请先登录用户',
          icon:'error'
        })
        setTimeout(function(){
            wx.redirectTo({
              url: '../login/login',
            })
        },2000)
    }
    }
})