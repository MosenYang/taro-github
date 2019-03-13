import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.less'


export default class Followers extends Component {

  config = {
    navigationBarTitleText: '关注我的'
  }

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentWillMount() {
  }


  render() {
    return (
      <View className='page'></View>
    )
  }
}

