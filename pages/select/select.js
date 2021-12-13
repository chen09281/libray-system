const app = getApp()
Page({
    data:{
        book:''
    },
    onLoad:function(e){
        this.setData({
            title:app.globalData.name,
            photo:app.globalData.photo,
        })
    }
})