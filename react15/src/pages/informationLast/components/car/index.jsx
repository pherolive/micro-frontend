import React from 'react'
import './index.scss'

class InformationLastCar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div className="information-last-car">
        <div className="information-last-car-detail">
          <div className="information-last-car-img">
            <img src="https://p6-dcd-sign.byteimg.com/tos-cn-i-0000/1f4d8b02d76748218e88a76f9410135c~tplv-resize:2048:0.jpg?x-expires=1656673210&x-signature=%2Br2YvKvXkWPna6JAshnUxhIN4bQ%3D" alt=""/>
          </div>
          <div className="information-last-car-price">
            <div>高尔夫</div>
            <div>26.98-55.44万</div>
          </div>
        </div>

        <div className="information-last-car-button">
          询底价
        </div>
      </div>
    )
  }
}

export default InformationLastCar
