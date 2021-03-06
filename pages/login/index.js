// pages/login/index.js
const App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.phone) {
      this.setData({
        phone: options.phone
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

  },
  login() {
    const _this = this;
    wx.login({
      success(login) {
        App.request._post().then(res => {
          _this.setData({
            phone: true
          })
        })
      }
    })
  },
  getPhone(e) {
    const { encryptedData, iv } = e.detail;
    App.request._post().then(() => {
      wx.setStorage({
        key: "hasPhone",
        value: true,
        complete() {
          wx.navigateBack();
        }
      })
    })
  }
})