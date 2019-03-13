import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input } from '@tarojs/components'
import { AtDivider } from 'taro-ui'
import { showMessage } from '../../assets/js/common'
import './index.less'

export default class Search extends Component {

  config = {
    navigationBarTitleText: '搜索'
  }

  constructor(props) {
    super(props)
    this.state = {
      keyword: '',
      searchWord: '搜索',
      recordList: [],
      total: null,
      totalPage: null,
      currentPage: 1,
    }
  }

  showRecordList() {
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

  searchChange = (e) => {
    this.setState({
      keyword: e.detail.value,
      searchWord: '搜索'
    })
    if (!e.detail.value) {
      this.setState({
        recordList: []
      })
    }
  }

  confirmChange(e) {
    if (e.detail.value) {
      this.setState({
        keyword: e.detail.value,
        currentPage: 1,
      }, () => {
        this.showRecordList()
      })
    }
  }

  clearKeyword() {
    this.setState({
      keyword: '',
      searchWord: '搜索',
      currentPage: 1,
      recordList: [],
      total: null
    })

  }

  search() {
    if (this.state.searchWord == "搜索" && this.state.keyword) {
      this.setState({
        currentPage: 1,
      }, () => {
        this.showRecordList()
      })
    } else if (this.state.searchWord == "搜索" && !this.state.keyword) {
      showMessage("请输入搜索内容")
    } else {
      this.setState({
        keyword: "",
        searchWord: "搜索",
        recordList: []
      })
    }
  }

  render() {
    const { keyword, searchWord, recordList, total } = this.state,
      len = recordList.length
    return (
      <View className='page'>
        <View className='page-search'>
          <View className='page-search-left'>
            <Input
              className='page-search-left-input'
              type='text'
              confirmType='search'
              focus='true'
              placeholder='输入关键词搜索'
              value={keyword}
              onInput={this.searchChange.bind(this)}
              onConfirm={this.confirmChange.bind(this)}
            />
            <View
              hidden={!keyword}
              className='page-search-left-icon'
              onClick={this.clearKeyword.bind(this)}
            >
            </View>
          </View>
          <View className='page-search-right' onClick={this.search.bind(this)}>
            <Text>{searchWord}</Text>
          </View>
        </View>
        <View className='page-content'></View>
        <View hidden={!(len === total && len !== 0)} className='page-divide'>
          <AtDivider content='暂无更多内容' fontColor='#d2d2d2' lineColor='#f2f2f2' />
        </View>
        <View hidden={!(len === 0 && total === 0)} className='page-empty'>
          <AtDivider content='暂无数据' fontColor='#d2d2d2' lineColor='#f2f2f2' />
        </View>
      </View>
    )
  }
}

