// components/navBar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showIcon: {
      type: Boolean,
      value: true,
    },
    title: String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  attached() {
    this.setData(wx.getStorageSync("systemInfo"));
  },
  /**
   * 组件的方法列表
   */
  methods: {
    tapIcon() {
      wx.navigateBack();
    }
  }
})
