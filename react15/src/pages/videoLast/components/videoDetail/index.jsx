import React from 'react'
import './index.scss'

import observer from '../../../../assets/observer.png'

class VideoDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    const { navList } = this.state
    return (
      <div className="video-detail-container">
        <div className="video-detail-play">
          <img src="https://p6-dcd-sign.byteimg.com/tos-cn-i-0000/1f4d8b02d76748218e88a76f9410135c~tplv-resize:2048:0.jpg?x-expires=1656673210&x-signature=%2Br2YvKvXkWPna6JAshnUxhIN4bQ%3D" alt=""/>
        </div>

        <div className="video-detail-title">
          思域还是昂克赛拉？老编辑来作一次“不冲动”的选择思域还是昂克赛拉？老编辑来作一次“不冲动”的选择
        </div>

        <div className="video-detail-observer">
          <img src={observer} alt=""/>
          <span>4.9w</span>
          <span>导购</span>
          <span>2020-02-02 00:00:00</span>
        </div>

        <div className="video-detail-prompt">
          谈起最能激发“肾上腺素”的十万级紧凑型轿车，就绝对绕不开思域与昂克赛拉——优雅运动的线条总能与年轻人意气相投。
        </div>
      </div>
    )
  }
}

export default VideoDetail
