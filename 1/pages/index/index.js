// 关键功能是api
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: "",
    answer: "亲爱的，想我了吗？"
  },
  flower: function (e) {
    this.setData({
      content: e.detail.value
    })
    console.log(this.data.content)
  },
  //调用api
  send: function () {
    var that = this;
    var content = that.data.content;
    wx.request({
      url: 'https://api.ownthink.com/bot?appid=xiaosi&userid=user&spoken=' + content,
      method: 'GET',
      success: function (res) {
        var ans = that.data.answer;
        that.setData({
          answer: res.data.data.info.text
        })
        console.log(res.data)
        console.log(ans)
      }
    })
  }
  
})