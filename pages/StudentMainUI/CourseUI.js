// pages/StudentMainUI/CourseUI.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    ClassName:"",
    SeminarID1:"讨论课4",
    SeminarInfo:[],
    Range:"3",
    Seminar:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ClassName : options.classname})
    var self = this
    wx.request({
      url: 'http://120.77.173.98:8206/student/course/{courseId}/seminar',
      method: 'GET',
      success: function (res) {

        self.setData({
          Range:res.data.length-1,
          SeminarInfo:res.data
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
   
    var tmpList = new Array(this.data.Range)
    for (var i = 0; i < this.data.Range; i++) {
      tmpList[i] = []
    }
    this.setData({
      Seminar: tmpList
    })
    
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

  CheckCourseInfo:function(){
    wx.navigateTo({
      url: '/pages/StudentMainUI/CourseUI/CourseInfoUI',
    })
  },

  ChooseSeminar: function () {
    wx.navigateTo({
      url: '/pages/StudentMainUI/CourseUI/SeminarUI',
    })

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})