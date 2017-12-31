// pages/StudentMainUI/CourseUI/SeminarUI/Grade/GradePresentationUI.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    BlueHeart:"http://wx2.sinaimg.cn/small/9bba9548gy1fm6voxh58jj200q00nt8z.jpg",
    GrayHeart:"http://wx2.sinaimg.cn/small/9bba9548gy1fm6voxu6bhj200q00nt8z.jpg",
    GradeRange: 5,
    groupList: ['A1','A2','A3','A4','A5'],
    heartList: [],
    gradeWait: 'inline',
    gradeDone: 'none'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this
    wx.request({
      url: 'http://120.77.173.98:8206/student/seminar/{seminarId}/group',
      method: 'GET',
      success: function (res) {

        self.setData({
          groupList:res.data

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
    var tmpList = new Array(this.data.GradeRange)
    for (var i = 0; i < this.data.groupList.length;i++)
    {
      tmpList[i]=new Array(this.data.GradeRange)
      for (var j = 0; j < this.data.GradeRange;j++)
      {
        tmpList[i][j]=this.data.GrayHeart
      }
    }
    this.setData({
      heartList: tmpList
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  GradeSubmit:function(){
    this.setData({
      gradeWait: 'none',
      gradeDone: 'inline'
    })
    wx.request({
      url: 'http://120.77.173.98:8206/group/{groupId}/grade/presentation/{studentId}',
      method: 'PUT',
      header: { 'content-type': 'application/json' },
      success: function (res) {
        console.log(res.data)
      }
    })
  },
  clickHeart:function(e){
    var g = e.currentTarget.dataset.clickgroup
    var c = e.target.dataset.click
    var tmpList = this.data.heartList
    for (var i = 0; i < this.data.GradeRange; i++)
    {
      tmpList[g][i] = this.data.GrayHeart
    }
    for(var i=0;i<=c;i++)
    {
      tmpList[g][i]=this.data.BlueHeart
    }
    this.setData({
      heartList: tmpList
    })
  }
})