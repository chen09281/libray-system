const app = getApp()

Page({
  data: {

  },
  note: function () {
    wx.navigateTo({
      url: '../note/note',
    })
  },
  onLoad: function (option) {
    let data = wx.getStorageSync('user')
    console.log(data.photo)

    if (data.photo == undefined) {
      this.setData({
        photo: '../images/男头像.png'
      })

    } else {
      this.setData({
        photo: 'data:image/png;base64,' + data.photo
      })
    }
  },
  login: function () {
    let data = wx.getStorageSync('user')
    if (data.photo != undefined) {
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