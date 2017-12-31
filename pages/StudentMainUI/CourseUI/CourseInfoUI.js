// pages/StudentMainUI/CourseUI/CourseInfoUI.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "StudentName": "Dragon",
    "StudentNumber": "2432015220XXX",
    "School": "厦门大学",
    "PhoneNumber": "12345678900",
    "Class1": "J2EE",
    "Class1Teacher": "邱明",
    "Class2": "操作系统",
    "Class2Teacher": "吴清强",
    "Class3": "OOAD",
    "Class3Teacher": "邱明",
    "Class4": "软件工程",
    "TeacherName": "王美红",
    "ClassName": "OOAD",
    SeminarID1: "讨论课4"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this
    wx.request({
      url: 'http://120.77.173.98:8206/student/course/{courseId}',
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})