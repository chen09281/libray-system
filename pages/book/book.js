const app = getApp()

Page({
    data:{
        isF:true
    },
    aa:function(){
        this.setData({
            isF:!this.data.isF
        })
    },
    start:function(e){
        console.log('123')
        wx.navigateTo({
          url: '../content/content',
        }) 
    },
    addnote:function(e){
        wx.navigateTo({
          url: '../addnote/addnote',
        })
    },
    onLoad:function(option){
        var that = this;
        console.log('123')
        wx.request({
          url: 'http://47.106.189.98:8899/book/getbyid',
          data:{
              id:app.globalData.bookid,
          },
          header: {
            'content-type': 'Application/json'
          },
          method: 'get',
          dataType: 'json',
          // 成功返回
          success:function(res){
              console.log(res.data)
              app.globalData.photo=res.data.photo;
              app.globalData.name = res.data.name;
              app.globalData.book_id = res.data.id;
              app.globalData.authors = res.data.authors;
              app.globalData.press = res.data.press;
              app.globalData.memo = res.data.memo
              that.setData({
                  photo:app.globalData.photo,
                  name:app.globalData.name,
                  authors:app.globalData.authors,
                  press:app.globalData.press,
                  memo:app.globalData.memo
              })
          }
        })
    }

})