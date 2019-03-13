import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.less'


export default class Repositories extends Component {

  config = {
    navigationBarTitleText: '我的仓库'
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

