import Taro, { Component } from '@tarojs/taro'
import { View, Image, Button } from '@tarojs/components'
import { AtInput, AtModal, AtModalHeader, AtModalContent, AtModalAction } from "taro-ui"
import { baseUrl, showMessage } from '../../assets/js/common'
import './index.less'

import logo from '../../assets/images/logo.jpg'

export default class Login extends Component {
  config = {
    navigationBarTitleText: '登录'
  }

  constructor() {
    super(...arguments)
    this.state = {
      userName: '',
      modalVisible: false
    }
  }

  nameChange(value) {
    this.setState({
      userName: value
    })
  }

  login() {
    if (!this.state.userName) {
      showMessage("昵称不能为空")
    } else {
      Taro.request({
        url: `${baseUrl}/users/${this.state.userName}`,
        method: 'GET'
      })
        .then(res => {
          if (res.data.name) {
            showMessage("登录成功")
            Taro.setStorage({ key: 'userInfo', data: JSON.stringify(res.data) })
              .then(res => {
                Taro.switchTab({
                  url: `/pages/index/index`
                });
              })
          } else {
            this.setState({
              modalVisible: true
            })
          }
        }).catch(err => {
          console.log(err)
        })
    }
  }

  hideDialog() {
    this.setState({
      modalVisible: false
    })
  }

  render() {
    return (
      <View className='page'>
        <Image src={logo} />
        <View className='page-form'>
          <AtInput
            className='page-form-name'
            type='text'
            placeholder='请输入 github 用户名'
            value={this.state.userName}
            onChange={this.nameChange.bind(this)}
          />
          <View className='page-form-submit' onClick={this.login.bind(this)}>登录</View>
        </View>

        <AtModal isOpened={this.state.modalVisible} closeOnClickOverlay={false}>
          <AtModalHeader>提示</AtModalHeader>
          <AtModalContent>用户不存在</AtModalContent>
          <AtModalAction>
            <Button onClick={this.hideDialog.bind(this)}>确定</Button>
          </AtModalAction>
        </AtModal>
      </View>
    )
  }
}

