// pages/Teacher.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    TeacherName: "",
    TeacherNumber: "",
    School:"",
    "ClassRange": 4,
    "Classes": ["J2EE", "操作系统", "OOAD", "软件工程"],
    unbinding:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'http://120.77.173.98:8206/teacher/me',
      method: 'GET',
      success: function(res) {
        that.setData({
          TeacherName: res.data.name,
          TeacherNumber: res.data.number,
          School: res.data.school.name
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
    wx.request({
      url: 'http://120.77.173.98:8206/teacher/course',
      method: 'GET',
      success: function (res) {
        var tmpList=new Array(res.data.length)
        for(var i =0;i<res.data.length;i++)tmpList[i]=res.data[i].name
        console.log(tmpList)
        that.setData({
          Classes: tmpList
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
    if (this.data.unbinding == 1) {
      wx.redirectTo({
        url: '/pages/ChooseCharacter/ChooseCharacter',
      })
      this.setData({
        unbingding: 0
      })
    }
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
  PersonalInfo(){
    wx.navigateTo({
      url: '/pages/CheckTeacherInfoUI',
    })
  },

  ChooseClass: function (e) {
  
    var i = e.currentTarget.dataset.i
    wx.navigateTo({
      url: '/pages/ClassManage/ClassManage?courseInfo=' + [this.data.Classes[i],i],
    })

  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})