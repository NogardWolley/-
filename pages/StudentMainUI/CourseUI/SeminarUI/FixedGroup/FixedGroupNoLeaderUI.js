// pages/StudentMainUI/CourseUI/SeminarUI/RandomGroup/RandomGroupNoLeaderUI.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    noLeader: 'inline',
    haveLeader: 'none',
    isLeader: 'none',
    UserImage: 'http://wx4.sinaimg.cn/small/9bba9548gy1fm6vp0lbj3j201k01g0pu.jpg',
    MemberRange: 5,
    Member: [],
    MemberImage: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this
    wx.request({
      url: 'http://120.77.173.98:8206/student/seminar/{seminarId}/group/my',
      method: 'GET',
      success: function (res) {

        self.setData({
          Member: res.data,
          MemberRange: res.data.members.length

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
    var tmpList = new Array(this.data.MemberRange)
    for (var i = 0; i < this.data.MemberRange; i++) {
      tmpList[i] = this.data.UserImage
    }
    this.setData({
      MemberImage: tmpList
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
  ChooseBecameLeader: function () {
    var leader=1
     this.setData({
       noLeader:'none',
       haveLeader: 'inline'
     })
     if(leader)
     {
       this.setData({
         isLeader: 'inline'
       })
     }
     else
     {
       this.setData({
         isLeader: 'none'
       })
     }
     wx.request({
       url: 'http://120.77.173.98:8206/student/group/{groupID}/assign',
       method: 'PUT',
       header: { 'content-type': 'application/json' },
       success: function (res) {
         console.log(res.data)
       }
     })
   // wx.navigateTo({
    //  url: '/pages/StudentMainUI/CourseUI/SeminarUI/RandomGroup/RandomGroupLeaderUI?city='+this.data.noLeader
   // })
  },


  ChooseBecameMember: function () {
    this.setData({
      noLeader: 'inline',
      haveLeader: 'none',
      isLeader: 'none'
    })
    wx.request({
      url: 'http://120.77.173.98:8206/student/group/{groupID}/resign',
      method: 'PUT',
      header: { 'content-type': 'application/json' },
      success: function (res) {
        console.log(res.data)
      }
    })
  
  },

  ChooseTopic: function () {
    wx.navigateTo({
      url: '/pages/StudentMainUI/CourseUI/SeminarUI/RandomGroup/RandomGroupChooseTopicUI',
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})