const app = getApp()

Page({
    data:{

    },
    onLoad:function(option){
        console.log(app.globalData.user_id)
        console.log(app.globalData.book_id)
    },
    formSubmit:function(e){
      let data = wx.getStorageSync('user')
        console.log(data.user_id)
        if(data.id == undefined){
            wx.showToast({
              title: '请登录用户',
              icon:'error'
            })
        } else {
        wx.request({
          url: 'http://47.106.189.98:8899/userbooknote/add',
          data:{
              user_id:data.id,
              book_id:app.globalData.book_id,
              note:e.detail.value.note
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          method:'post',
          dataType:'json',
          success:function(res){
              console.log(res.data)
              console.log('上传成功')
              wx.showToast({
                title: '添加成功',
                icon:'success'
              })
              setTimeout(function(){
                wx.redirectTo({
                  url: '../booknote/booknote',
                })
              })
          },fail:function(error){
              console.log(error)
          }
        })
    }
    }
})