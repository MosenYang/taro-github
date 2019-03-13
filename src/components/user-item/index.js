import Taro, { Component } from '@tarojs/taro'
import PropTypes from 'prop-types'
import { View, Text, Image } from '@tarojs/components'
import './index.less'

export default class UserItem extends Component {

  constructor() {
    super(...arguments)
    this.state = {
    }
  }

  showDetail(url) {
    Taro.navigateTo({
      url: `/pages/detail/index?url=${url}`
    });
  }

  render() {
    const { data } = this.props
    return (
      <View>
        <View className='list' key={data.id} onClick={this.showDetail.bind(this, data)}>
          <View className='list-left'>
            <Image className='list-left-image' src={data.url} />
          </View>
          <View className='list-right'>
            <View className='list-right-item1'>
              <Text>{data.title}</Text>
            </View>
            <View className='list-right-item2'>
              <Text className='list-right-text'>{data.adminName}</Text>
              <Text className='list-right-text'>{data.mp3Dur}</Text>
            </View>
            <View className='list-right-item3'>
              <Text>{data.publishTime}</Text>
            </View>
          </View>
        </View>
      </View >
    )
  }
}

UserItem.propTypes = {
  data: PropTypes.object
}
