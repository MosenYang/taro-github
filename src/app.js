import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'
import './app.less'

class App extends Component {

  config = {
    pages: [
      // 首页
      'pages/index/index',
      // 登录
      'pages/login/index',
      // 授权
      'pages/authorization/index',
      // 仓库详情
      'pages/detail/index',
      // 搜索
      'pages/search/index',
      // 分类
      'pages/classification/index',
      // 我的
      'pages/account/index',
      // 我的仓库
      'pages/repositories/index',
      // 我的收藏
      'pages/stars/index',
      // 关注我的
      'pages/followers/index',
      // 我关注的
      'pages/following/index',
      // 退出登录
      'pages/logout/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#8D93A8",
      selectedColor: "#24292e",
      backgroundColor: "#FBFBFB",
      borderStyle: "white",
      list: [{
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "./assets/images/home.png",
        selectedIconPath: "./assets/images/home-selected.png"
      },
      {
        pagePath: "pages/classification/index",
        text: "分类",
        iconPath: "./assets/images/classification.png",
        selectedIconPath: "./assets/images/classification-selected.png"
      },
      {
        pagePath: "pages/account/index",
        text: "我的",
        iconPath: "./assets/images/mine.png",
        selectedIconPath: "./assets/images/mine-selected.png"
      }]
    }
  }

  render() {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))