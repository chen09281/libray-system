const app = getApp()

Page({
  data: {
    note:''
  },
  onLoad: function (option) {
    var that = this
    wx.request({
      url: 'http://47.106.189.98:8899/userbooknote/getbyuserid',
      data: {
        user_id: 1131
      },
      header: {
        'content-type': 'Application/json'
      },
      method: 'get',
      dataType: 'json',
      success: function (res) {
        console.log(res.data)
        let data = res.data;
        that.setData({
          note:data
        })
      },
      fail: function (error) {
        console.log(error)
      }
    })
  }
})