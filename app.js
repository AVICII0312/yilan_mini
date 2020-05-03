//app.js
import { Request } from './utils/request';
App({
  onLaunch: function () {
    const systemInfo = wx.getSystemInfoSync();
    wx.setStorageSync("systemInfo", {
      statusHeight: systemInfo.statusBarHeight,
      isIOS: systemInfo.system.includes('iOS')
    });
  },
  request: new Request("http://yd.ywlsd.cn/app"),
  globalData: {

  }
})