// pages/ClassManage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classList: ['班级1', '班级2', '班级3'],
    ClassName: "",
    ClassTime: '',
    classPeriod: '',
    groupStyle: '',
    seminarId: 0,
    classId: [],
    numStudent: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    var t = options.courseInfo.split(',')
    console.log(t)
    this.setData({
      ClassName: t[0]
    })
    wx.request({
      url: 'http://120.77.173.98:8206/teacher/course/' + t[1]+'/seminar/current',
      method: 'GET',
      success: function (res) {
        console.log(res)
        var tmpList=new Array(res.data.classes.length)
        var tmpList2 = new Array(res.data.classes.length)
        var tmpList3 = new Array(res.data.classes.length)
        for(var i=0;i<res.data.classes.length;i++)
        {
          tmpList[i]=res.data.classes[i].name
          tmpList2[i] = res.data.classes[i].id
          tmpList3[i] = res.data.classes[i].numStudent
        }
        that.setData({
          ClassTime: res.data.name,
          classPeriod: res.data.starTime + '-' + res.data.endTime,
          groupStyle: res.data.groupingMethod,
          seminarId: res.data.id,
          classId:tmpList2,
          classList:tmpList
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  selectClass: function (e) {
    wx.navigateTo({
      url: '../FixedRollCallUI/FixedRollStartCallUI?seminar=' + [this.data.seminarId, this.data.classId[e.target.dataset.i],this.data.classList[e.target.dataset.i],this.data.numStudent[e.target.dataset.i]]
    })
  }
})