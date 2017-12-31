// pages/StudentMainUI/CourseUI/SeminarUI/RandomGroup/RandomGroupChooseTopicUI.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Range: "4",
    Topic: [{
      name: 'TopicA',
      description: "XXXXXX",
      groupLeft: 2,
      groupLimit: 5
    }, {
      name: 'TopicB',
      description: "XXXXXX",
      groupLeft: 2,
      groupLimit: 5
    }, {
      name: 'TopicC',
      description: "XXXXXX",
      groupLeft: 3,
      groupLimit: 5
    }, {
      name: 'TopicD',
      description: "XXXXXX",
      groupLeft: 0,
      groupLimit: 5
    }],
    descriptionDisplay: ['none', 'none', 'none', 'none'],
    color: ['#6cf', '#6cf', '#6cf', '#6cf'],
    disable: ['false', 'false', 'false', 'false']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this
    // wx.request({
    //   url: 'http://120.77.173.98:8206/student/seminar/{seminarId}/topic ',
    //   method: 'GET',
    //   success: function (res) {
    //     self.setData({
    //       Topic: res.data
    //     })
    //     var tmpList = self.data.color
    //     var tmpList2 = self.data.disable
    //     for (var i = 0; i < self.data.Topic.length; i++) {
    //       if (self.data.Topic[i].groupLeft == 0) {
    //         tmpList[i] = '#ccc'
    //         tmpList2[i] = 'true'
    //       }
    //     }      
    //     self.setData({
    //       color: tmpList,
    //       disable: tmpList2
    //     })
    //     console.log(res.data)
    //   }
    // })

    var tmpList = self.data.color
    var tmpList2 = self.data.disable
    for (var i = 0; i < self.data.Topic.length; i++) {
      if (self.data.Topic[i].groupLeft == 0) {
        tmpList[i] = '#ccc'
        tmpList2[i] = 'true'
      }
    }
    self.setData({
      color: tmpList,
      disable: tmpList2
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

  DisBind(e) {
    if (this.data.disable[e.currentTarget.dataset.select] != 'true') {
      wx.showModal({
        title: '提示',
        content: '是否选择此话题？',
        success: function (res) {
          if (res.confirm) {
            wx.request({
              url: 'http://120.77.173.98:8206/student/group/{groupId}/topic',
              method: 'POST',
              header: { 'content-type': 'application/json' },
              success: function (res) {
                console.log(res.data)
              }
            })
          }
        }
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  unflodDescriptions: function (e) {
    console.log(e)
    var des = e.target.dataset.des
    var tmp = this.data.descriptionDisplay
    if (tmp[des] == 'none') tmp[des] = 'inline'
    else if (tmp[des] == 'inline') tmp[des] = 'none'
    this.setData({
      descriptionDisplay: tmp
    })
  }
})