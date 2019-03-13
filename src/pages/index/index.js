import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtIcon, AtDivider } from 'taro-ui'
import RepoItem from "../../components/repo-item/index.js"
import { baseUrl } from '../../assets/js/common'
import './index.less'


export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页',
    enablePullDownRefresh: true
  }

  constructor(props) {
    super(props)
    this.state = {
      isCover: false,
      recordList: [],
      currentPage: 1,
    }
  }

  componentDidShow() {
    this.showLogin()
  }

  showLogin() {
    var that = this
    Taro.getSetting({
      success: function (response) {
        if (response.authSetting['scope.userInfo']) {
          if (Taro.getStorageSync('userInfo') && JSON.parse(Taro.getStorageSync('userInfo')).name) {
            that.showRecordList()
          } else {
            Taro.redirectTo({
              url: `/pages/login/index`
            })
          }
        } else {
          Taro.redirectTo({
            url: `/pages/authorization/index`
          })
        }
      }
    })
  }

  showRecordList() {
    Taro.showLoading({
      title: '数据加载中'
    })
    Taro.request({
      url: `${baseUrl}/users/calabash519/starred?page=${this.state.currentPage}`,
      method: 'GET'
    })
      .then(res => {
        if (res.data.length) {
          this.setState({
            recordList: this.state.currentPage == 1 ? res.data : this.state.recordList.concat(res.data),
          })
        }
        Taro.stopPullDownRefresh()
        Taro.hideLoading()
      }).catch(err => {
        Taro.hideLoading()
      })
  }

  onPullDownRefresh() {
    this.setState({
      currentPage: 1,
    }, () => {
      this.showRecordList()
    })
  }

  onReachBottom() {
    var num = this.state.currentPage
    this.setState({
      currentPage: ++num
    }, () => {
      this.showRecordList()
    })
  }

  searchChange() {
    this.hideModal()
    Taro.navigateTo({
      url: `/pages/search/index`
    });
  }


  hideModal() {
    this.setState({
      isCover: false,
    })
  }

  render() {
    const { isCover, recordList } = this.state,
      len = recordList.length
    return (
      <View className={isCover ? 'page hidden' : 'page'}>
        <View className='page-search' onClick={this.searchChange.bind(this)}>
          <View className='page-search-main'>
            <View className='page-search-main-text'>
              <Text>输入关键词搜索</Text>
            </View>
            <View className='page-search-main-line'></View>
            <AtIcon className='page-search-main-icon' value='search' size='20' color='#8D93A8'></AtIcon>
          </View>
        </View>

        <View className='page-content'></View>
        {
          recordList.map(item => (
            <RepoItem data={item} key={item.id}></RepoItem>
          ))
        }
        <View
          hidden={!isCover}
          className='page-cover'
          onClick={this.hideModal.bind(this)}
        >
        </View>
        <View hidden={!(len === 0)} className='page-empty'>
          <AtDivider content='暂无数据' fontColor='#d2d2d2' lineColor='#f2f2f2' />
        </View>
      </View>
    )
  }
}

