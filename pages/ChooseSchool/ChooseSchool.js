// pages/index/ChooseSchool.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    priText: '省份',
    cityText: '州市',
    schoolText: '学校',
    priHeight: 'inline-block',
    cityHeight: 'none',
    schoolHeight: 'none',
    priList: ['北京', '天津', '河北', '山西', '内蒙古', '辽宁', '福建', '江苏'],
    cityList: ['厦门', '龙岩', '泉州', '漳州', '福州'],
    schoolList: ['诚毅学院', '华侨大学', '厦门大学', '厦门理工', '嘉庚学院']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self=this
    wx.request({
      url: 'http://120.77.173.98:8206/student/school',
      method:'GET',
      success: function (res) {
        self.setData({
          schoolList:res.data
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

  },
  selectPriList: function () {
    this.setData({
      priHeight: 'inline-block',
      cityHeight: 'none',
      schoolHeight: 'none'
    })
  },
  selectCityList: function () {
    this.setData({
      priHeight: 'none',
      cityHeight: 'inline-block',
      schoolHeight: 'none'
    })
  },
  selectSchoolList: function () {
    this.setData({
      priHeight: 'none',
      cityHeight: 'none',
      schoolHeight: 'inline-block'
    })
  },
  selectPri: function (e) {
    var select = e.target.dataset.selected
    this.setData({
      priText: this.data.priList[select]
    })
  },
  selectCity: function (e) {
    var select = e.target.dataset.selected
    this.setData({
      cityText: this.data.cityList[select]
    })
  },
  selectSchool: function (e) {
    var select = e.target.dataset.selected
    var it = this.data.schoolList[select].name
    this.setData({
      schoolText: it
    })
    if (this.data.priText != '省份' && this.data.cityText != '州市' && this.data.schoolText != '学校') {
      var pages = getCurrentPages()
      var prevPage = pages[pages.length - 2]
      prevPage.setData({
        school: this.data.schoolText
      })
      wx.navigateBack()
      wx.request({
        url: 'http://120.77.173.98:8206/teacher/me',
        method: 'PUT',
        header: { 'content-type': 'application/json' },
        success: function (res) {
          console.log(res.data)
        }
      })
      wx.request({
        url: 'http://120.77.173.98:8206/student/me',
        method: 'PUT',
        header: { 'content-type': 'application/json' },
        success: function (res) {
          console.log(res.data)
        }
      })
    }
  },
  naviToCreateSchoolUI: function () {
    if (this.data.priText != '省份' && this.data.cityText != '州市') {
      var info = [this.data.priText, this.data.cityText]
      wx.navigateTo({
        url: '/pages/CreateSchoolUI/CreateSchoolUI??infoList=' + info
      })
    }
  }
})