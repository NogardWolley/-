// pages/CheckTeacherInfoUI.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    School: "厦门大学",
    PhoneNumber: "12345678900",

    TeacherName:"CCS",
    TeacherNumber:"24321432534"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'http://120.77.173.98:8206/teacher/me',
      method: 'GET',
      success: function (res) {
        that.setData({
          TeacherName: res.data.name,
          TeacherNumber: res.data.number,
          School: res.data.school.name,
          PhoneNumber: res.data.phone
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

  DisBind() {
    wx.showModal({
      title: '提示',
      content: '是否确认解绑？',
      success: function (res) {
        if (res.confirm) {
          wx.request({
            url: 'http://120.77.173.98:8206/teacher/me',
            method: 'PUT',
            data: {'unionID': ''},
            success: function (res) {
              console.log(res)
            },
            fail: function (res) { },
            complete: function (res) { },
          })
          var p=getCurrentPages()
          var prevpage=p[p.length-2]
          prevpage.setData({
            unbinding: 1
          })
          wx.navigateBack()
          
        }
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})