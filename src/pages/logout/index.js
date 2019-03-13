import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from "taro-ui"
import { showMessage } from '../../assets/js/common'
import './index.less'

export default class Logout extends Component {

  config = {
    navigationBarTitleText: '退出登录'
  }

  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false
    }
  }

  keepLogin() {
    Taro.switchTab({
      url: `/pages/account/index`
    });
  }

  showOperation() {
    this.setState({
      modalVisible: true
    })
  }

  cancelOperation() {
    this.setState({
      modalVisible: false
    })
  }

  confirmOperation() {
    this.setState({
      modalVisible: false
    }, () => {
      this.logout()
    })
  }

  logout() {
    Taro.setStorage({ key: 'userInfo', data: "" })
      .then(res => {
        showMessage("已退出登录")
        Taro.setStorage({ key: 'isLogout', data: true })
          .then(res => {
            Taro.switchTab({
              url: `/pages/index/index`
            })
          })
      })
  }

  render() {
    return (
      <View className='page'>
        <View className='page-title'>退出登录后将：</View>
        <View className='list'>
          <View className='listItem'>解除账号与小程序的关联，无法使用微信快捷登录</View>
        </View>
        <View className='form'>
          <View className='title'>确定要退出登录?</View>
          <View className='keepLogin' onClick={this.keepLogin.bind(this)}>保持登录</View>
          <View className='logout' onClick={this.showOperation.bind(this)}>退出登录</View>
        </View>

        <AtModal isOpened={this.state.modalVisible} closeOnClickOverlay={false}>
          <AtModalHeader>提示</AtModalHeader>
          <AtModalContent>您确定要退出登录吗？</AtModalContent>
          <AtModalAction>
            <Button onClick={this.cancelOperation.bind(this)}>取消</Button>
            <Button onClick={this.confirmOperation.bind(this)}>确定</Button>
          </AtModalAction>
        </AtModal>
      </View>
    )
  }
}

