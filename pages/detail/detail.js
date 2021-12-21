const app = getApp()

Page({
    data:{

    },
    onLoad:function(){
        let data = wx.getStorageSync('user')
        console.log(data.name)
        this.setData({
            name:data.name,
            arr:data.address,
            phone:data.phone,
            photo:'data:image/png;base64,' + data.photo
        })
    },
    loginout:function(){
        let data = wx.getStorageSync('user')
        var that = this
        wx.showModal({
          cancelColor: 'true',
          title:'是否要退出账户',
          success(res){
            wx.removeStorageSync('user');
              if(res.confirm){
                
                console.log('用户点击了退出');
                console.log(data)
                setTimeout(()=>{
                    wx.switchTab({
                      url: '/pages/me/me',
                    },1000);
                    app.globalData.photo = '../images/男头像.png'
                })
              }
          }
        })
    }
})