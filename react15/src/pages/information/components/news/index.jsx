import React from 'react'
import './index.scss'
import { Link } from 'react-router'

import grayArrow from '../../../../assets/gray-arrow.png'

// 热门推荐
import InformationRecommend from '../recommended/index.jsx';

class InformationNews extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  setItem() {

  }

  render() {
    return (
      <div className="information-news-container">
        {/*快速找车*/}
        <div>
          <div className="information-news-title">快速找车</div>

          <div className="information-news-wrapper">
            <div className="information-news-select">
              请选择品牌
              <img src={grayArrow} alt=""/>
            </div>
            <div className="information-news-select">
              请选择车系
              <img src={grayArrow} alt=""/>
            </div>
          </div>
          <Link to='/information-last'>
            <div className="information-news-button">
              查底价
            </div>
          </Link>
        </div>
        {/*热门推荐*/}
        <InformationRecommend />

        {/* 广告位 */}
        <div className="information-news-detail">
          <img src="https://p6-dcd-sign.byteimg.com/tos-cn-i-0000/1f4d8b02d76748218e88a76f9410135c~tplv-resize:2048:0.jpg?x-expires=1656673210&x-signature=%2Br2YvKvXkWPna6JAshnUxhIN4bQ%3D" alt=""/>
        </div>
      </div>
    )
  }
}

export default InformationNews
