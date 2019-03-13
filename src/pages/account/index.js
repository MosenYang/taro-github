import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtAvatar } from 'taro-ui'
import './index.less'

import repo from '../../assets/images/repo.png'
import stars from '../../assets/images/star.png'
import following from '../../assets/images/following.png'
import followers from "../../assets/images/follower.png"
import logout from "../../assets/images/logout.png"
import enter from "../../assets/images/enter.png"

export default class Account extends Component {

  config = {
    navigationBarTitleText: '我的'
  }

  constructor(props) {
    super(props)
    this.state = {
      avatar: '',
      userName: '',
    }
  }

  componentDidShow() {
    var userInfo = JSON.parse(Taro.getStorageSync('userInfo'))
    this.setState({
      avatar: userInfo.avatar_url,
      userName: userInfo.name,
    })
  }


  showRepositories() {
    Taro.navigateTo({
      url: '/pages/repositories/index'
    })
  }

  showStars() {
    Taro.navigateTo({
      url: '/pages/stars/index'
    })
  }

  showFollowers() {
    Taro.navigateTo({
      url: '/pages/followers/index'
    })
  }

  showFollowing() {
    Taro.navigateTo({
      url: '/pages/following/index'
    })
  }

  showLogout() {
    Taro.navigateTo({
      url: '/pages/logout/index'
    })
  }

  render() {
    return (
      <View className='page'>
        <View className='page-title'>
          <AtAvatar circle image={this.state.avatar}></AtAvatar>
          <View>{this.state.userName}</View>
        </View>
        <View className='page-admin'>
          <View className='page-admin-item' onClick={this.showRepositories.bind(this)}>
            <Image src={repo} />
            <Text className='text' >我的仓库</Text>
            <Image className='right' src={enter} />
          </View>
          <View className='page-admin-item' onClick={this.showStars.bind(this)}>
            <Image src={stars} />
            <Text className='text' >我的收藏</Text>
            <Image className='right' src={enter} />
          </View>
          <View className='page-admin-item' onClick={this.showFollowers.bind(this)}>
            <Image src={followers} />
            <Text className='text' >关注我的</Text>
            <Image className='right' src={enter} />
          </View>
          <View className='page-admin-item' onClick={this.showFollowing.bind(this)}>
            <Image src={following} />
            <Text className='text' >我关注的</Text>
            <Image className='right' src={enter} />
          </View>
          <View className='page-admin-item' onClick={this.showLogout.bind(this)}>
            <Image src={logout} />
            <Text className='text' >退出登录</Text>
            <Image className='right' src={enter} />
          </View>
        </View>
      </View>
    )
  }
}

