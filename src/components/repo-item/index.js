import Taro, { Component } from '@tarojs/taro'
import PropTypes from 'prop-types'
import { View, Text, Image } from '@tarojs/components'
import { renderTime } from "../../assets/js/common.js"
import './index.less'

import star from '../../assets/images/star.png'
import fork from '../../assets/images/forks.png'

export default class RepoItem extends Component {

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
          <View className='list-title'>
            <Text>{data.full_name}</Text>
          </View>
          <View className='list-desc'>
            <Text>{data.description}</Text>
          </View>
          <View className='list-operation'>
            <View className='list-operation-star'>
              <Image src={star} />
              <Text className='list-operation-star-text'>{data.watchers}</Text>
            </View>
            <View className='list-operation-fork'>
              <Image src={fork} />
              <Text className='list-operation-fork-text'>{data.forks}</Text>
            </View>
            <View className='list-operation-time'>
              <Text className='list-operation-time-text'>{renderTime(data.updated_at)} 更新</Text>
            </View>
          </View>
        </View>
      </View >
    )
  }
}

RepoItem.propTypes = {
  data: PropTypes.object,
  params: PropTypes.object,
  type: PropTypes.string,
  coverImage: PropTypes.string,
  len: PropTypes.number
}
