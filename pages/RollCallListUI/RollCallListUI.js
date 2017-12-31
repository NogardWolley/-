// pages/RollCallListUI/RollCallListUI.js
var t

Page({

  /**
   * 页面的初始数据
   */
  data: {
    callRollStudentList: ['杨xx', '周xx', '孙xx'],
    class: '班级1',
    callRollNumber: 3,
    totalNumber: 40
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    t=options.classId
    wx.request({
      url: 'http://120.77.173.98:8206/teacher/class/{classId}/attendance',
      method: 'GET',
      success: function (res) {
        console.log(res)
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

  }
})