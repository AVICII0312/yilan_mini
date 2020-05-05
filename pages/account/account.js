// pages/account/account.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [{
        value: '男'
      },
      {
        value: '女',
        checked: 'true'
      },

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e)
  },
  inputChange: function (e) {
    this.setData({
      [e.currentTarget.dataset.info]: e.detail.value
    })
  }
})