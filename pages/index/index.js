const app = getApp()

Page({
  data:{
    book:''
  },
  accountblur: function (e) {
    var content = e.detail.value;
    if (content != "") {
        this.setData({
            disabled: false,
            btnstate: 'primary'
        });
    } else {
        this.setData({
            disabled: true,
            btnstate: 'default'
        })
    }
},
onLoad:function(option){
  console.log('123')
  self = this;
  // 向服务端发送请求
  wx.request({
    url: 'http://47.106.189.98:8899/book/getall',
    method: 'get',
    dataType: 'json',
    header: {
      'content-type': 'Application/json'
    },
    // 成功返回
    success: function (res) {
      let data = res.data
      console.log(data);
      if (res.data.length > 0) {
        console.log('转跳成功');
      };
      self.setData({
        book:data
      })
    }
  });
},
addbook:function(e){
  wx.navigateTo({
    url: '../mid/mid',
  })
},
kantie:function(e){
  // console.log(e)
  let id = e.currentTarget.id;
  app.globalData.bookid=id,
  console.log(id)
  wx.navigateTo({
    url: '/pages/book/book',
  })
},
formSubmit: function (e) {
  app.globalData.select = e.detail.value.id;
  // 向服务端发送请求
  wx.request({
      url: 'http://47.106.189.98:8899/book/getbyid',
      data: {
          id: e.detail.value.id,
      },
      header: {
        'content-type': 'Application/json'
      },
      method: 'get',
      dataType: 'json',
      // 成功返回
      success: function (res) {
          console.log(res.data)
              wx.showToast({
                title: '搜索成功',
                icon:'success'
              })
          app.globalData.bookid = e.detail.value.id;     
          setTimeout(function(){
          wx.navigateTo({
            url: '/pages/book/book',
          })
          },2000);
      },fail:function(error){
          console.log(error)
          wx.showToast({
            title: '搜索失败',
            icon:'error'
          })
      }
})
},
})