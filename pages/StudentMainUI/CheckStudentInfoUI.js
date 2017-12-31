// pages/StudentMainUI/CheckStudentInfoUI.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    me:"",
    StudentName:"Dragon",
    StudentNumber:"2432015220XXX",
    School:"厦门大学",
    PhoneNumber:"12345678900"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var pages = getCurrentPages()
    // var prevPage = pages[pages.length - 2]
    // if (prevPage.data.id != '' && prevPage.data.name != '' && prevPage.data.school != '') {
    //   this.setData({
    //     StudentName: prevPage.data.StudentName,
    //     StudentNumber: prevPage.data.StudentNumber,
    //     School: prevPage.data.School
    //   })
    // }
    var self = this
    wx.request({
      url: 'http://120.77.173.98:8206/student/me',
      method: 'GET',
      success: function (res) {

        self.setData({
          me: res.data,
          StudentName:res.data.name,
          StudentNumber:res.data.number,
          School:res.data.school.name,
          PhoneNumber:res.data.phone
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

  DisBind(){
    wx.showModal({
      title: '提示',
      content: '是否确认解绑？',
      success:function(res){
        if(res.confirm){
          wx.navigateBack()
          wx.redirectTo({
            url: '/pages/ChooseCharacter/ChooseCharacter',
          })
          wx.request({
            url: 'http://120.77.173.98:8206/student/group/7/resign',
            method: 'PUT',
            header: { 'content-type': 'application/json' },
            success: function (res) {
              console.log(res.data)
            }
          })
          var p = getCurrentPages()
          var prevpage = p[p.length - 2]
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