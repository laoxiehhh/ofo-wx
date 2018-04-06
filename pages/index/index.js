// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // latitude: 0,
    // longitude: 0,
    // controls:{}
  },
  bindcontroltap: function (e) {
    var self = this;
    console.log(e);
    switch (e.controlId) {
      case 1:
        this.movetoCenter();
        break;
      case 2: 
        if (this.timer) {
          wx.navigateBack({
            delta: 1
          });
        } else {
          wx.scanCode({
            success: function () {
              wx.showLoading({
                title: '正在获取密码',
              })
              wx.request({
                url: 'https://www.easy-mock.com/mock/5ab119f7ddac7967e4398159/password/password',
                success: function (res) {
                  console.log(res)
                  wx.hideLoading();
                  wx.redirectTo({
                    url: '../scanResult/index?password=' + res.data.data.password + '&number=' + res.data.data.username,
                    success: function () {
                      wx.showToast({
                        title: '获取密码成功',
                        duration: 1000
                      })
                    }
                  })
                }
              })
            }
          })
        } 
        break;
      case 3: 
        wx.navigateTo({
          url: '../warn/index',
        });
        break;
      case 4:
        wx.navigateTo({
          url: '../my/index',
        });
        break;
    }    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.timer = options.timer;
    var self = this;
    wx.getLocation({
      success: function(res) {
        self.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
      },
    });
    wx.getSystemInfo({
      success: function(res) {
        self.setData({
          controls: [{
            id: 1,
            iconPath: '/images/location.png',
            position: {
              width: 50,
              height:50,
              left: 20,
              top: res.windowHeight - 100
            },
            clickable: true
          }, {
            id: 2,
            iconPath: '/images/use.png',
            position: {
              width: 90,
              height: 90,
              top: res.windowHeight - 120,
              left: res.windowWidth/2 -45
            },
            clickable: true
          }, {
            id: 3,
            iconPath: '/images/warn.png',
            position: {
              width: 50,
              height: 50,
              left: res.windowWidth - 70,
              top: res.windowHeight - 100 
            },
            clickable: true
          }, {
            id: 4,
            iconPath: '/images/avatar.png',
            position: {
              width: 50,
              height: 50,
              left: res.windowWidth - 70,
              top: res.windowHeight - 185
            },
            clickable: true
          }, {
            id: 5,
            iconPath: '/images/marker.png',
            position: {
              width: 30,
              height: 50,
              left: res.windowWidth/2 - 15,
              top: res.windowHeight/2 - 45
            }
          }]
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  movetoCenter: function () {
    this.mapctx.moveToLocation();
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.mapctx = wx.createMapContext('ofo-map');
    this.movetoCenter();
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