// pages/warn/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: {
      num:0,
      desc: ''
    },
    picUrls: [],
    checkboxValues: [],
    actionText: '拍摄/相册',
    textColor: '#ccc',
    itemsValue: [{
      value: '私锁私用',
      checked: false,
      color: '#b9dd08'
    }, {
      value: '车牌缺损',
      checked: false,
      color: '#b9dd08'
      }, {
        value: '轮胎坏了',
        checked: false,
        color: '#b9dd08'
    }, {
      value: '车锁坏了',
      checked: false,
      color: '#b9dd08'
      }, {
        value: '违规乱停',
        checked: false,
        color: '#b9dd08'
    }, {
      value: '密码不对',
      checked: false,
      color: '#b9dd08'
      }, {
        value: '刹车换了',
        checked: false,
        color: '#b9dd08'
    }, {
      value: '其他故障',
      checked: false,
      color: '#b9dd08'
    }]
  },
  changeCheckbox: function (e) {
    console.log(e)
    var value = e.detail.value;
    if (value.length == 0) {
      this.setData({
        checkboxValues: [],
        textColor: '#ccc'
      })
    } else {
      this.setData({
        checkboxValues: value,
        textColor: '#000'
      })
    }
  },
  clickPhoto: function () {
    var self = this;
    wx.chooseImage({
      success: function(res) {
        console.log(res)
        res.tempFilePaths.forEach(function (ele, index) {
          self.data.picUrls.push(ele);
        });
        self.setData({
          picUrls: self.data.picUrls,
          actionText: '+'
        })
        
      },
    })
  },
  delpic: function (e) {
    var index = e.target.dataset.index;
    var _picUrls = this.data.picUrls;
    _picUrls.splice(index, 1);
    this.setData({
      picUrls: _picUrls
    });
    if (_picUrls.length == 0) {
      this.setData({
        actionText: '拍摄/相册'
      });
    }
  },
  changeNum: function (e) {
    console.log(e)
    this.setData({
      inputValue: {
        num: e.detail.value,
        desc: this.data.inputValue.desc
      }
    })
  },
  changeDesc: function (e) {
    this.setData({
      inputValue: {
        num: this.data.inputValue.num,
        desc: e.detail.desc
      }
    })
  },
  submit: function () {
    if (this.data.checkboxValues.length == 0) {
      wx.showModal({
        title: '请填写反馈信息',
        content: '你瞅啥，快填',
        cancelText: '偏偏不填',
        confrimText: '我填我填',
        success: function (res) {
          if (res.cancel) {
            wx.navigateBack({
              delta: 1
            });
          }
        }
      })
    } else {
      wx.request({
        //正常开发中应该将inputValue、picUrls、checkboxValues都发送给后台
        //后台处理成功后，返回给我客户端信息
        url: 'https://www.easy-mock.com/mock/5ab119f7ddac7967e4398159/password/submit',
        success: function (res) {
          wx.showToast({
            title: '提交成功',
            icon: 'success',
            success: function () {
              setTimeout(function () {
                wx.redirectTo({
                  url: '../index/index',
                });
              }, 1000)
            }
          });
          
        }
      })
    }
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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