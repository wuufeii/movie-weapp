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
    var tv = [
      {
        "imgUrl": "https://wuufeii-1257796228.cos.ap-chongqing.myqcloud.com/movie-weapp/movie/100.jpg",
        "title": "好戏一出"
      },
      {
        "imgUrl": "https://wuufeii-1257796228.cos.ap-chongqing.myqcloud.com/movie-weapp/movie/101.gif",
        "title": "明鸿传"
      },
      {
        "imgUrl": "https://wuufeii-1257796228.cos.ap-chongqing.myqcloud.com/movie-weapp/movie/102.jpg",
        "title": "舌害"
      },
      {
        "imgUrl": "https://wuufeii-1257796228.cos.ap-chongqing.myqcloud.com/movie-weapp/movie/103.jpg",
        "title": "苏茉儿传奇"
      },
      {
        "imgUrl": "https://wuufeii-1257796228.cos.ap-chongqing.myqcloud.com/movie-weapp/movie/104.jpg",
        "title": "等到烟暖雨收第三季"
      },
      {
        "imgUrl": "https://wuufeii-1257796228.cos.ap-chongqing.myqcloud.com/movie-weapp/movie/105.jpg",
        "title": "人间规则"
      }
    ];
    var variety = [
      {
        "imgUrl": "https://wuufeii-1257796228.cos.ap-chongqing.myqcloud.com/movie-weapp/movie/200.jpg",
        "title": "Hi室友",
        "detail": "宋小宝来袭喜提按摩椅!",
        "type": "自制",
        "time": "2018-10-10期"
      },
      {
        "imgUrl": "https://wuufeii-1257796228.cos.ap-chongqing.myqcloud.com/movie-weapp/movie/201.jpg",
        "title": "奇葩说·备战间",
        "detail": "陈铭暴露真心：键盘侠是侠!",
        "type": "独播",
        "time": "2018-10-12期"
      },
      {
        "imgUrl": "https://wuufeii-1257796228.cos.ap-chongqing.myqcloud.com/movie-weapp/movie/202.gif",
        "title": "咕噔咕噔banana",
        "detail": "尤长靖吃醋林超泽浮夸称赞",
        "type": "VIP",
        "time": "2018-10-16期"
      },
      {
        "imgUrl": "https://wuufeii-1257796228.cos.ap-chongqing.myqcloud.com/movie-weapp/movie/203.jpg",
        "title": "梁知·人情观察",
        "detail": "老梁支招出头鸟如何不挨枪",
        "type": "自制",
        "time": "2018-10-10期"
      },
      {
        "imgUrl": "https://wuufeii-1257796228.cos.ap-chongqing.myqcloud.com/movie-weapp/movie/204.jpg",
        "title": "中国新说唱·收官之战",
        "detail": "艾热激情演绎《新三部曲》",
        "type": "VIP",
        "time": "2018-10-10期"
      },
      {
        "imgUrl": "https://wuufeii-1257796228.cos.ap-chongqing.myqcloud.com/movie-weapp/movie/105.jpg",
        "title": "中国好声音",
        "detail": "刘郡格唯美大气演绎《空城》",
        "type": "自制",
        "time": "2018-10-10期"
      }
    ]
    this.setData({
      movies:movies,
      tv: tv,
      variety: variety
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