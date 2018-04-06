// pages/billing/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hours: 0,
    minutes: 0,
    seconds: 0,
    actionText: '正在计费',
    clickkey: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;
    console.log(options)
    this.setData({
      username: options.username
    })
    var h = 0,
        m = 0,
        s = 0;
    this.timer = setInterval(function () {
      self.setData({
        seconds: s++,
        minutes: m,
        hours: h
      })
      if (s >= 60) {
        s = 0;
        m ++;
      }
      if (m >= 60) {
        m = 0;
        h ++;
      }
    }, 1000)
  },
  endride: function () {
    clearInterval(this.timer);
    this.timer = '';
    this.setData({
      actionText: '本次骑行时间',
      clickkey: true
    })
  },
  movetomap: function () {
    if (this.timer == '') {
      wx.redirectTo({
        url: '../index/index',
      })
    } else {
      wx.navigateTo({
        url: '../index/index?timer=' + this.timer,
      })
    }
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
  
  }
})