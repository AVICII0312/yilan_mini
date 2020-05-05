// pages/account/phone.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  inputChange: function (e) {
    this.setData({
      [e.currentTarget.dataset.info]: e.detail.value
    })
  }
})