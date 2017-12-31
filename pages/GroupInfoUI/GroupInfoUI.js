// pages/GroupInfo/GroupInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    redX: 'http://wx4.sinaimg.cn/small/9bba9548gy1fm6vp4v7maj200w00w0ql.jpg',
    userImg: 'http://wx4.sinaimg.cn/small/9bba9548gy1fm6vp0lbj3j201k01g0pu.jpg',
    notCallRollStudentList: ['杨xx', '周xx', '李xx'],
    waitToGroupStudentList: [],
    groupList: [{
      name: '队伍1',
      title: '',
      member: ['杨xx', '周xx', '孙xx', '王xx', '李xx'],
      redXList: ['none', 'none', 'none', 'none', 'none']
    }, {
      name: '队伍2',
      title: '',
      member: ['杨xx', '周xx', '孙xx', '王xx', '李xx'],
      redXList: ['none', 'none', 'none', 'none', 'none']
    }, {
      name: '队伍3',
      title: '',
      member: ['杨xx', '周xx', '孙xx', '王xx', '李xx'],
      redXList: ['none', 'none', 'none', 'none', 'none']
    }, {
      name: '队伍4',
      title: '',
      member: ['杨xx', '周xx', '孙xx', '王xx', '李xx'],
      redXList: ['none', 'none', 'none', 'none', 'none']
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    var tmpList = new Array(this.data.notCallRollStudentList.length)
    for (var i = 0; i < this.data.notCallRollStudentList.length; i++) {
      tmpList[i] = this.data.notCallRollStudentList[i]
    }
    this.setData({
      waitToGroupStudentList: tmpList
    })



    // wx.request({
    //   url: 'http://120.77.173.98:8206/teacher/seminar/{seminarId}/group',
    //   method: 'GET',
    //   success: function (res) {
    //     console.log(res)
    //     var tmpList=[]
    //     var tmp=''
    //     for(var i=0;i<res.data.length;i++)
    //     {
    //       var t={name:'',title: '',member:[],redXList:[]}
    //       t.name=res.data[i].id
    //       t.title=res.data[i].topics.name
    //       t.member=res.data[i].members
    //       if(t.member!=null)for(var j=0;j<t.member.length;j++)t.redXList.push('none')
    //       tmpList.push(t)
    //     }
    //     console.log(tmpList)
    //     that.setData({
    //       groupList: tmpList
    //     })

    //   },
    //   fail: function (res) { },
    //   complete: function (res) { },
    // })
    // //TODO
    // wx.request({
    //   url: 'http://120.77.173.98:8206/teacher/seminar/{seminarId}/class/{classId}/attandance',
    //   method: 'GET',
    //   success: function (res) {
    //     console.log(res)
       

    //   },
    //   fail: function (res) { },
    //   complete: function (res) { },
    // })


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
  select: function (e) {
    var that = this
    var tmpList = this.data.waitToGroupStudentList
    var tmpList2 = this.data.groupList
    var selecti = e.currentTarget.dataset.i
    if (tmpList.length != 0)
      wx.showActionSheet({
        itemList: tmpList,
        success: function (res) {
          if (!res.cancel) {
            tmpList2[selecti].member.push(tmpList[res.tapIndex])
            tmpList2[selecti].redXList.push('inline')
            that.setData({
              groupList: tmpList2
            })
            tmpList.splice(res.tapIndex, 1)

            wx.request({
              url: 'http://120.77.173.98:8206/teacher/group/{groupId}',
              method: 'PUT',
              success: function (res) {
                console.log(res)


              },
              fail: function (res) { },
              complete: function (res) { },
            })
              



          }
        }
      })
  },
  delet: function (e) {
   
    if (e.target.dataset.deleti != undefined)
    {
      var deletei = e.target.dataset.deleti
      var deleteGroup=e.currentTarget.dataset.group
      var tmpList = this.data.groupList
      var tmpList2 = this.data.waitToGroupStudentList
      tmpList2.push(tmpList[deleteGroup].member[deletei])
      tmpList[deleteGroup].member.splice(deletei,1)
      tmpList[deleteGroup].redXList.splice(deletei, 1)
      this.setData({
        groupList: tmpList,
        waitToGroupStudentList: tmpList2
      })
    }
  }
})