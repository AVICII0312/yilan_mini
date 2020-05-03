// components/searchBar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    ph: String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  ipt: "",
  /**
   * 组件的方法列表
   */
  methods: {
    inputValue(e) {
      this.ipt = e.detail.value;
    },
    search() {
      this.triggerEvent('search', this.ipt);
    }
  }
})
