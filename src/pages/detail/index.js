import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.less'


export default class Detail extends Component {

  config = {
    navigationBarTitleText: '详情'
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

