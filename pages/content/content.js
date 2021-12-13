const app = getApp()

Page({
    data:{

    },
    onLoad:function(opetion){
        var that = this
        wx.request({
          url: 'http://47.106.189.98:8899/bookcontent/getbybookid',
          data:{
              book_id:app.globalData.book_id
          },
          header: {
            'content-type': 'Application/json'
        },
        method: 'get',
        dataType: 'json',
        success:function(res){
            console.log(res.data)
            app.globalData.content=res.data[res.data.length-1].content
            that.setData({
                content:app.globalData.content
            })
        }
        })
    }
})