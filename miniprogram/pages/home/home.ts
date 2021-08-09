const normalCallout = {
  id: 1,
  latitude: 24.472576,
  longitude: 117.941975,
  iconPath: '../image/location.png',
  callout: {
    content: '文本内容',
    color: '#ff0000',
    fontSize: 14,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#000000',
    bgColor: '#fff',
    padding: 5,
    display: 'ALWAYS',
    textAlign: 'center'
  },
  // label: {
  //   content: 'label 文本',
  //   fontSize: 24,
  //   textAlign: 'center',
  //   borderWidth: 1,
  //   borderRadius: 5,
  //   bgColor: '#fff',
  //   padding: 5
  // }
}

const customCallout1 = {
  id: 2,
  latitude: 24.472576,
  longitude: 117.941975,
  iconPath: '../image/location.png',
  customCallout: {
    anchorY: 0,
    anchorX: 0,
    display: 'ALWAYS'
  },
}

const customCallout2 = {
  id: 3,
  latitude: 24.706142,
  longitude: 118.120449,
  iconPath: '../image/location.png',
  customCallout: {
    anchorY: 10,
    anchorX: 0,
    display: 'ALWAYS',
  },
}

const customCallout3 = {
  id: 4,
  latitude: 23.095994,
  longitude: 113.325520,
  iconPath: '../image/location.png',
  customCallout: {
    anchorY: 0,
    anchorX: 20,
    display: 'ALWAYS',
  },
}

const allMarkers = [customCallout1, customCallout2]

Page({
  data: {
    latitude: 24.472576,
    longitude: 117.941975,
    imgUrls: [
      '../image/jyf1.jpeg',
      '../image/jyf2.jpeg',
    ],
    descUrls: [
      '../image/t1.jpg',
      '../image/t2.jpg',
      '../image/t3.jpg',
      '../image/t4.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 10000,
    duration: 1800,
    allMarkers: [customCallout1, customCallout2]
  },
  //是否显示面板指示点
  changeIndicatorDots: function() {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  //是否自动切换
  changeAutoplay: function() {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  addMarker() {
    const markers = allMarkers
    this.setData({
      markers,
      customCalloutMarkerIds: [2,3,4],
    })
  },

  //自动切换时间间隔
  intervalChange: function(e:any) {
    this.setData({
      // e.detail.value获取slider的值
      interval: e.detail.value
    })
  },
  //滑动动画时长
  durationChange: function(e: any) {
    this.setData({
      duration: e.detail.value
    })
  },
  //当页面改变是会触发
  bindchangeTag:function(){
    console.log("bindchangeTag...")
  }, 
  onLoad:function(){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})