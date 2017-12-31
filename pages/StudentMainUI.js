// pages/StudentMainUI.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StudentName: "Dragon",
    StudentNumber: "2432015220XXX",
    School: "厦门大学",
    "PhoneNumber": "12345678900",
    "ClassRange":4,
    "Classes": ["J2EE", "操作系统", "OOAD", "软件工程"],
    "ClassesTeacher": ["邱明", "吴清强", "邱明","王美红"],
    "ClassesInformation":[],
    unbinding: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var pages = getCurrentPages()
    // var prevPage = pages[pages.length - 2]
    // if (prevPage.data.id != '' && prevPage.data.name != '' && prevPage.data.school != ''){
    // this.setData({
    //   StudentName: prevPage.data.name,
    //   StudentNumber: prevPage.data.id,
    //   School: prevPage.data.school
    // })
    // }
    var self=this
    wx.request({
      url: 'localhost:8080/class/'+'1',
      method: 'GET',
      success: function (res) {

        self.setData({
          ClassRange: res.data.length,
          Classes: res.data
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

    if (this.data.unbinding == 1) {
      wx.redirectTo({
        url: '/pages/ChooseCharacter/ChooseCharacter',
      })
      this.setData({
        unbingding: 0
      })
    }


    var tmpList = new Array(this.data.ClassRange)
    for (var i = 0; i < this.data.ClassRange.length; i++) {
      tmpList[i] =[]
    }
    this.setData({
      ClassesInformation: tmpList
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

  PersonalInfo:function(){
    wx.navigateTo({
      url: '/pages/StudentMainUI/CheckStudentInfoUI',
    })
  },

  ChooseClass3:function(e){
    var i = e.currentTarget.dataset.i
    wx.navigateTo({
      url: '/pages/StudentMainUI/CourseUI?classname='+this.data.Classes[i].name,
    })
   
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})