import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { AtIcon, AtDivider } from 'taro-ui'
import { baseUrl, showMessage } from '../../assets/js/common.js'
import RepoItem from '../../components/record-item/index'
import './index.less';

export default class Classification extends Component {
  config = {
    navigationBarTitleText: '分类',
    enablePullDownRefresh: true
  };

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      recordList: [],
      total: null
    };
  }

  componentWillMount() {
  }
  showRecordList() {
  }

  onPullDownRefresh() {
    this.setState({
      currentPage: 1,
    }, () => {
      this.showRecordList()
    })
  }

  onReachBottom() {
    if (this.state.totalPage > this.state.currentPage) {
      var num = this.state.currentPage
      this.setState({
        currentPage: ++num
      }, () => {
        this.showRecordList()
      })
    }
  }

  render() {
    const { recordList, total } = this.state,
      len = recordList.length
    return (
      <View className='page'>
        <View className='page-search' onClick={this.searchChange.bind(this)}>
          <View className='page-search-main'>
            <View className='page-search-main-text'>
              <Text>输入关键词搜索</Text>
            </View>
            <View className='page-search-main-line'></View>
            <AtIcon className='page-search-main-icon' value='search' size='20' color='#8D93A8'></AtIcon>
          </View>
        </View>
        <View className='page-main'>
          <View hidden={!(len === total && len !== 0)} className='page-divide'>
            <AtDivider content='暂无更多内容' fontColor='#d2d2d2' lineColor='#f2f2f2' />
          </View>
          <View hidden={!(len === 0 && total === 0)} className='page-empty'>
            <AtDivider content='暂无数据' fontColor='#d2d2d2' lineColor='#f2f2f2' />
          </View>
        </View>
      </View>
    );
  }
}
