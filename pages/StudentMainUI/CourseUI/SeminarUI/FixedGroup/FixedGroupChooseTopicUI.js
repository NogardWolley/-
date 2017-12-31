// pages/StudentMainUI/CourseUI/SeminarUI/RandomGroup/RandomGroupChooseTopicUI.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this
    wx.request({
      url: 'http://120.77.173.98:8206/student/seminar/{seminarId}/topic ',
      method: 'GET',
      success: function (res) {

        self.setData({

        })
        console.log(res.data)
      }
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
      content: '是否选择此话题？',
      success: function (res) {
        if (res.confirm) {
          wx.navigateTo({
            url: '/pages/StudentMainUI/CourseUI/SeminarUI/FixedGroup/FixedGroupChooseTopicUI',
          })
        }
        else {
          wx.navigateTo({
            url: '/pages/StudentMainUI/CourseUI/SeminarUI/FixedGroup/FixedGroupChooseTopicUI',
          })
        }
        wx.request({
          url: 'http://120.77.173.98:8206/student/group/{groupId}/topic',
          method: 'POST',
          header: { 'content-type': 'application/json' },
          success: function (res) {
            console.log(res.data)
          }
        })
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})