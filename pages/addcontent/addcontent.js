const app = getApp()
Page({
    data:{},
    formSubmit:function(e){
        wx.request({
            url: 'http://47.106.189.98:8899/bookcontent/add',
            header:{
              'content-type': 'application/x-www-form-urlencoded'
            },
            method:'post',
            dataType:'json',
            data:{
                book_id:e.detail.value.bookid,
                content:e.detail.value.content
            },
            success:function(res){
                console.log(res)
                let bookid = res.data.book_id;
                app.globalData.book_id = bookid
                wx.showToast({
                  title: '添加成功',
                  icon:'success'
                })
                setTimeout(function(){
                    wx.redirectTo({
                      url: '../content/content',
                    })
                })
            },fail:function(error){
                console.log(error)
            }
        })
    }
})