import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.less'


export default class Stars extends Component {

  config = {
    navigationBarTitleText: '我的收藏'
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
      <View className='page'>
      </View >

    )
  }
}

