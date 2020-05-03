// components/goods/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // ["list"：搜索列表, "order"：确认订单, "order-detail"：订单详情, "cart"：购物车, "collect"：收藏, "order-list"：订单管理] 使用组件的页面
    source: String,
    // 商品信息
    goods: Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    uncollect() {
      this.triggerEvent("uncollect", this.data);
    }
  }
})
