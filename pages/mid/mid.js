const app = getApp()

Page({
    data:{

    },
    addbook:function(e){
        wx.redirectTo({
          url: '../addbook/addbook',
        })
    },
    addcontent:function(e){
        wx.redirectTo({
          url: '../addcontent/addcontent',
        })
    }
})