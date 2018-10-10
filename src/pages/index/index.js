Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiper: ["https://wuufeii-1257796228.cos.ap-chongqing.myqcloud.com/movie-weapp/swiper/swiper-01.jpg",
              "https://wuufeii-1257796228.cos.ap-chongqing.myqcloud.com/movie-weapp/swiper/swiper-02.jpg",
              "https://wuufeii-1257796228.cos.ap-chongqing.myqcloud.com/movie-weapp/swiper/swiper-03.jpg",
              "https://wuufeii-1257796228.cos.ap-chongqing.myqcloud.com/movie-weapp/swiper/swiper-04.jpg",
              "https://wuufeii-1257796228.cos.ap-chongqing.myqcloud.com/movie-weapp/swiper/swiper-05.jpg"
            ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var movies = [
      {
        "imgUrl": "https://wuufeii-1257796228.cos.ap-chongqing.myqcloud.com/movie-weapp/movie/01.jpg",
        "title": "动物世界"
      },
      {
        "imgUrl": "https://wuufeii-1257796228.cos.ap-chongqing.myqcloud.com/movie-weapp/movie/02.jpg",
        "title": "侏罗纪世界2"
      },
      {
        "imgUrl": "https://wuufeii-1257796228.cos.ap-chongqing.myqcloud.com/movie-weapp/movie/03.jpg",
        "title": "巨齿鲨"
      },
      {
        "imgUrl": "https://wuufeii-1257796228.cos.ap-chongqing.myqcloud.com/movie-weapp/movie/04.jpg",
        "title": "爱情摩天轮"
      },
      {
        "imgUrl": "https://wuufeii-1257796228.cos.ap-chongqing.myqcloud.com/movie-weapp/movie/05.jpg",
        "title": "快把我哥带走"
      },
      {
        "imgUrl": "https://wuufeii-1257796228.cos.ap-chongqing.myqcloud.com/movie-weapp/movie/06.jpg",
        "title": "一出好戏"
      },
      {
        "imgUrl": "https://wuufeii-1257796228.cos.ap-chongqing.myqcloud.com/movie-weapp/movie/07.jpg",
        "title": "大师兄"
      },
      {
        "imgUrl": "https://wuufeii-1257796228.cos.ap-chongqing.myqcloud.com/movie-weapp/movie/08.jpg",
        "title": "耐撕大片"
      },
      {
        "imgUrl": "https://wuufeii-1257796228.cos.ap-chongqing.myqcloud.com/movie-weapp/movie/09.jpg",
        "title": "捉妖记2"
      },
      {
        "imgUrl": "https://wuufeii-1257796228.cos.ap-chongqing.myqcloud.com/movie-weapp/movie/10.jpg",
        "title": "这就是命"
      },
      {
        "imgUrl": "https://wuufeii-1257796228.cos.ap-chongqing.myqcloud.com/movie-weapp/movie/11.jpg",
        "title": "画皮师"
      },
      {
        "imgUrl": "https://wuufeii-1257796228.cos.ap-chongqing.myqcloud.com/movie-weapp/movie/12.jpg",
        "title": "洛奇"
      }
    ];
    this.setData({
      movies:movies
    })
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
    
  }
})