const app = getApp()

Page({
    data:{
      disabled: true,
      btnstate: "default",
        src:'../images/男头像.png'
    },
    // 识别文本框是否为空
  accountblur: function (e) {
    var content = e.detail.value;
    if (content != "") {
      this.setData({
        disabled: false,
        btnstate: "primary"
      });
    } else {
      this.setData({
        disabled: true,
        btnstate: "default"
      });
    }
  },
    photo:function(e){
        var that = this;
        // 选择图片
        wx.chooseImage({
          count: 1,
          // 成功返回
          success:function(res){
              var temp = res.tempFilePaths;
              console.log(temp)
              that.setData({
                  src:temp[0]
              })
          }
        })
    },
    formSubmit:function(e){
        wx.uploadFile({
        url: 'http://47.106.189.98:8899/user/add',
          filePath: this.data.src,
          name: 'photo',
          header: {
            'content-type': 'Application/json'
          },
          formData: {
            name: e.detail.value.loginName,
            password: e.detail.value.password,
            phone: e.detail.value.phone,
            address: e.detail.value.address
          },
          success:function(res){
              console.log(res)
              let data = JSON.parse(res.data)
              console.log(data)
              app.globalData.name = data.name;
              app.globalData.userid = data.id;
              app.globalData.password = data.password;
              app.globalData.phone = data.phone;
              app.globalData.address = data.address;
              app.globalData.photo = data.photo;
              wx.showToast({
                title: '注册成功',
                icon:'success'
              })
              setTimeout(function(){
                  wx.switchTab({
                    url: '../index/index',
                  })
              },2000)
          },fail:function(error){
              console.log(error)
              wx.showToast({
                title: '请检查输入的信息是否有误',
                icon:'error'
              })
          }
        })
    }
})