const app = getApp()

Page({
  data:{

  },
  note:function(){
    wx.navigateTo({
      url: '../note/note',
    })
  },
  onLoad:function(option){
    console.log(app.globalData.photo)
    if(app.globalData.photo != undefined){
    this.setData({
      photo:'data:image/png;base64,'+app.globalData.photo
    })
  } else {
    this.setData({
      photo:'../images/男头像.png'
    })
  }
  },
  login:function(){
    if(app.globalData.photo != undefined){
      wx.navigateTo({
        url: '../detail/detail',
      })
    } else {
  wx.redirectTo({
    url: '../login/login',
  })
}
}
})