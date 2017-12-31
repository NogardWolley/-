// pages/FixedRollStartCallUI/FixedRollStartCallUI.js
var t

Page({

  /**
   * 页面的初始数据
   */
  data: {
    callRollNumber: 0,
    totalNumber: 40,
    callRollWait: 'inline',
    callRollDone: 'none',
    className: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //TODO
    var that = this
    t = options.seminar.split(',')
    this.setData({
      className: t[2]
    })
    console.log(t[2])
    console.log(t[3])
    wx.request({
      url: 'http://120.77.173.98:8206/teacher/seminar/'+t[0]+'/class/'+t[1]+'/attendance',
      method: 'GET',
      success: function (res) {
        console.log(res)
        if(res.data)
        {
          that.setData({
            callRollWait: 'none',
            callRollDone: 'inline'
          })
        }
        that.setData({
          totalNumber: t[3]
        })
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
   StartCall: function () {
     wx.request({
       url: 'http://120.77.173.98:8206/teacher/class/'+t[1],
       method: 'PUT',
       data: { "calling": t[0] },
       success: function (res) {
          console.log(res)
       },
       fail: function (res) { },
       complete: function (res) { },
     })
     wx.navigateTo({
       url: '../FixedRollCallUI/FixedRollCallUI?Info=' + [this.data.className, this.data.totalNumber,t[1]]
    })
  },
   SearchGroup: function () {
    wx.navigateTo({
      url: '../GroupInfoUI/GroupInfoUI'
    })
  },
   RollCallList: function () {
     wx.navigateTo({
       url: '../RollCallListUI/RollCallListUI'
     })
   }
})