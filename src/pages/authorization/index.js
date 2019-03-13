import Taro, { Component } from '@tarojs/taro'
import { View, Button, Image } from '@tarojs/components'
import './index.less'

import logo from '../../assets/images/logo.jpg'

export default class Authorization extends Component {

  config = {
    navigationBarTitleText: '授权'
  }

  constructor() {
    super(...arguments)
    this.state = {
      text: "获取微信授权登录"
    }
  }

  confirmModal(e) {
    if (e.detail.userInfo) {
      if (Taro.getStorageSync('userInfo') && JSON.parse(Taro.getStorageSync('userInfo')).name) {
        Taro.switchTab({
          url: `/pages/index/index`
        })
      } else {
        Taro.redirectTo({
          url: `/pages/login/index`
        })
      }
    }
  }


  render() {
    return (
      <View className='page'>
        <Image src={logo} />
        <Button
          className='page-button'
          open-type='getUserInfo'
          onGetUserInfo={this.confirmModal.bind(this)}
        >{this.state.text}
        </Button>
      </View>
    )
  }
}