const TIP_LIST = {
  "201": "密钥错误",
  "202": "传模板名称(act没给值)",
  "203": "用户名不能为空",
  "204": "密码不能为空",
  "205": "用户名或密码错误",
  "206": "验证码发送失败",
  "207": "验证码不能为空",
  "208": "验证码错误",
  "209": "标题不能为空",
  "210": "60秒后在获取(限制获取验证码)",
  "211": "摘要不能为空",
  "212": "标签不能为空",
  "213": "内容不能为空",
  "214": "没上传缩略图",
  "215": "缺少user_id",
  "216": "缺少商品id(goods_id)",
  "217": "缺少评论id(comment_id)",
  "218": "缺少id",
  "219": "缺少bonus_id",
  "220": "缺少goods_num",
  "221": "缺少pay_code",
  "222": "手机号不能为空",
  "223": "图片上传失败",
  "224": "没选支付方式",
  "225": "商品和数量不匹配",
  "226": "余额不足",
  "227": "订单添加失败",
  "228": "库存不足",
  "229": "缺少consignee",
  "230": "缺少province",
  "231": "缺少city",
  "232": "缺少district",
  "233": "缺少address",
  "234": "缺少tel",
  "235": "缺少default",
  "236": "缺少fullname",
  "237": "缺少sex",
  "238": "缺少birthday",
  "239": "缺少position",
  "240": "缺少province",
  "241": "缺少city",
  "242": "缺少district",
  "243": "缺少内容con",
  "244": "缺少pwd",
  "245": "缺少order_id",
  "246": "缺少cat_id",
  "247": "缺少dashi_id",
  "248": "缺少name",
  "249": "缺少pwdold",
  "250": "缺少goods_number商品数量",
  "251": "支付密码错误",
  "252": "积分不足兑换",
  "253": "缺少rec_id",
  "254": "电话号码不对",
  "255": "电话号已存在",
  "256": "电话号不存在",
  "257": "type值不正确",
  "258": "token值不正确",
  "259": "缺少身份证号idmun",
  "260": "缺少手机号mobile_phone",
  "261": "密码不一致",
  "262": "验证码超时",
  "263": "缺少头像",
  "264": "缺少pid",
  "265": "缺少课程名称字段",
  "266": "缺少上课日期字段",
  "267": "缺少人数上限字段",
  "268": "缺少课时消耗字段",
  "269": "缺少上课老师字段",
  "400": "未查询到数据"
}
export class Request {
  static method = "POST";
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  _get(url, data) {
    wx.showLoading({
      title: "加载中..."
    })
    Request.method = "GET";
    return Request.request(url, data);
  }
  _post(url, data) {
    Request.method = "POST";
    return Request.request(url, data);
  }
  static showTip(code, tip) {
    wx.showToast({
      title: TIP_LIST[code] || tip,
      icon: "none",
      mask: true
    })
  }
  static request(url, data = {}) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: this.baseUrl,
        data: Object.assign(data, {
          keys: '1',
          act: url
        }),
        method: Request.method,
        success(res) {
          wx.hideLoading();
          if (res.data.code === 200) resolve(res.data.result);
          else {
            Request.showTip(res.data.code);
            reject();
          }
        },
        fail(err) {
          Request.showTip(500, err);
          reject();
        }
      })
    })
  }
}