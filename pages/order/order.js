// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    items: ['全部', '待付款', '待发货', '待收货', '待评论']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  tabsChange: function (e) {
    this.setData({
      currentTab:e.currentTarget.dataset.current
    })
  }
})