const app = getApp()
Page({
data:{
    disabled: true,
    btnstate: "default",
    src:'../images/书籍.png'
},
// 识别文本框是否为空
accountblur:function(e){
    var content = e.detail.value;
    if(content != ""){
        this.setData({
            disabled:false,
            btnstate:'primary'
        });
    } else {
        this.setData({
            disabled:true,
            btnstate:"default"
        });
    }
},
// 选择头像
photo:function(e){
    var that = this;
    // 选择图片
    wx.chooseImage({
        count:1,
        // 成功返回值
        success:function(res){
            var temp = res.tempFilePaths;
            console.log(temp);
            that.setData({
                src:temp[0]
            })
        }
    })
},

    // 添加按钮功能
    formSubmit:function(e){
        console.log(this.data.src);
        // 向服务器上传数据
        wx.uploadFile({
          filePath: this.data.src,
          name: 'photo',
          url: 'http://47.106.189.98:8899/book/add',
          header:{
            'content-type': 'Application/json'
          },
          method:'post',
          formData:{
              id:e.detail.value.loginName,
              name:e.detail.value.name,
              isbn:e.detail.value.isbn,
              authors:e.detail.value.authors,
              press:e.detail.value.press,
              price:e.detail.value.price,
              memo:e.detail.value.memo
          },
          // 成功执行以下代码
          success:function(res){
              console.log(res);
              let data = JSON.parse(res.data)
              console.log(data)
              // 弹框
              wx.showToast({
                title: '添加成功',
                icon:'success'
              });
              // 设置两秒跳转到book页面
              setTimeout(function(){
                  wx.switchTab({
                    url: '../index/index',
                  })
              },2000);
          },
          // 错误返回
          fail:function(res){
              wx.showToast({
                title: '请输入相关信息',
                icon:'error',
              })
          }
        })
    }
})