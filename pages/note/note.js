const app = getApp()

Page({
    data:{},
    onLoad:function(option){
        wx.request({
          url: 'http://47.106.189.98:8899/userbooknote/getbyuserid',
          data:{
            user_id:app.globalData.user_id
          },
          header:{
            'content-type': 'Application/json'
          },
          method:'get',
          dataType:'json',
          success:function(res){
              console.log(res.data)
          },fail:function(error){
              console.log(error)
          }
        })
    }
})