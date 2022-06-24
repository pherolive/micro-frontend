import React from 'react'
import './index.scss'

// 列表元素
import InformationItem from '../item/index.jsx'

// 分页组件
import InformationPagination from '../pagination/index.jsx';

class InformationList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        {
          img: 'https://p6-dcd-sign.byteimg.com/tos-cn-i-0000/1f4d8b02d76748218e88a76f9410135c~tplv-resize:2048:0.jpg?x-expires=1656673210&x-signature=%2Br2YvKvXkWPna6JAshnUxhIN4bQ%3D',
          title: '爱在大草原 吉利豪越的设计师一定是个暖男',
          number: '3026',
          type: '导购',
          status: true
        },
        {
          img: 'https://p6-dcd-sign.byteimg.com/tos-cn-i-0000/1f4d8b02d76748218e88a76f9410135c~tplv-resize:2048:0.jpg?x-expires=1656673210&x-signature=%2Br2YvKvXkWPna6JAshnUxhIN4bQ%3D',
          title: '爱在大草原 吉利豪越的设计师一定是个暖男',
          number: '3026',
          type: '导购',
          status: false
        },
        {
          img: 'https://p6-dcd-sign.byteimg.com/tos-cn-i-0000/1f4d8b02d76748218e88a76f9410135c~tplv-resize:2048:0.jpg?x-expires=1656673210&x-signature=%2Br2YvKvXkWPna6JAshnUxhIN4bQ%3D',
          title: '爱在大草原 吉利豪越的设计师一定是个暖男',
          number: '3026',
          type: '导购',
          status: false
        },
        {
          img: 'https://p6-dcd-sign.byteimg.com/tos-cn-i-0000/1f4d8b02d76748218e88a76f9410135c~tplv-resize:2048:0.jpg?x-expires=1656673210&x-signature=%2Br2YvKvXkWPna6JAshnUxhIN4bQ%3D',
          title: '爱在大草原 吉利豪越的设计师一定是个暖男',
          number: '3026',
          type: '导购',
          status: false
        },
        {
          img: 'https://p6-dcd-sign.byteimg.com/tos-cn-i-0000/1f4d8b02d76748218e88a76f9410135c~tplv-resize:2048:0.jpg?x-expires=1656673210&x-signature=%2Br2YvKvXkWPna6JAshnUxhIN4bQ%3D',
          title: '爱在大草原 吉利豪越的设计师一定是个暖男',
          number: '3026',
          type: '导购',
          status: false
        },
        {
          img: 'https://p6-dcd-sign.byteimg.com/tos-cn-i-0000/1f4d8b02d76748218e88a76f9410135c~tplv-resize:2048:0.jpg?x-expires=1656673210&x-signature=%2Br2YvKvXkWPna6JAshnUxhIN4bQ%3D',
          title: '爱在大草原 吉利豪越的设计师一定是个暖男',
          number: '3026',
          type: '导购',
          status: false
        },
        {
          img: 'https://p6-dcd-sign.byteimg.com/tos-cn-i-0000/1f4d8b02d76748218e88a76f9410135c~tplv-resize:2048:0.jpg?x-expires=1656673210&x-signature=%2Br2YvKvXkWPna6JAshnUxhIN4bQ%3D',
          title: '爱在大草原 吉利豪越的设计师一定是个暖男',
          number: '3026',
          type: '导购',
          status: false
        },
        {
          img: 'https://p6-dcd-sign.byteimg.com/tos-cn-i-0000/1f4d8b02d76748218e88a76f9410135c~tplv-resize:2048:0.jpg?x-expires=1656673210&x-signature=%2Br2YvKvXkWPna6JAshnUxhIN4bQ%3D',
          title: '爱在大草原 吉利豪越的设计师一定是个暖男',
          number: '3026',
          type: '导购',
          status: false
        },
        {
          img: 'https://p6-dcd-sign.byteimg.com/tos-cn-i-0000/1f4d8b02d76748218e88a76f9410135c~tplv-resize:2048:0.jpg?x-expires=1656673210&x-signature=%2Br2YvKvXkWPna6JAshnUxhIN4bQ%3D',
          title: '爱在大草原 吉利豪越的设计师一定是个暖男',
          number: '3026',
          type: '导购',
          status: false
        },
        {
          img: 'https://p6-dcd-sign.byteimg.com/tos-cn-i-0000/1f4d8b02d76748218e88a76f9410135c~tplv-resize:2048:0.jpg?x-expires=1656673210&x-signature=%2Br2YvKvXkWPna6JAshnUxhIN4bQ%3D',
          title: '爱在大草原 吉利豪越的设计师一定是个暖男',
          number: '3026',
          type: '导购',
          status: false
        },
        {
          img: 'https://p6-dcd-sign.byteimg.com/tos-cn-i-0000/1f4d8b02d76748218e88a76f9410135c~tplv-resize:2048:0.jpg?x-expires=1656673210&x-signature=%2Br2YvKvXkWPna6JAshnUxhIN4bQ%3D',
          title: '爱在大草原 吉利豪越的设计师一定是个暖男',
          number: '3026',
          type: '导购',
          status: false
        },
        {
          img: 'https://p6-dcd-sign.byteimg.com/tos-cn-i-0000/1f4d8b02d76748218e88a76f9410135c~tplv-resize:2048:0.jpg?x-expires=1656673210&x-signature=%2Br2YvKvXkWPna6JAshnUxhIN4bQ%3D',
          title: '爱在大草原 吉利豪越的设计师一定是个暖男',
          number: '3026',
          type: '导购',
          status: false
        },
        {
          img: 'https://p6-dcd-sign.byteimg.com/tos-cn-i-0000/1f4d8b02d76748218e88a76f9410135c~tplv-resize:2048:0.jpg?x-expires=1656673210&x-signature=%2Br2YvKvXkWPna6JAshnUxhIN4bQ%3D',
          title: '爱在大草原 吉利豪越的设计师一定是个暖男',
          number: '3026',
          type: '导购',
          status: false
        },
        {
          img: 'https://p6-dcd-sign.byteimg.com/tos-cn-i-0000/1f4d8b02d76748218e88a76f9410135c~tplv-resize:2048:0.jpg?x-expires=1656673210&x-signature=%2Br2YvKvXkWPna6JAshnUxhIN4bQ%3D',
          title: '爱在大草原 吉利豪越的设计师一定是个暖男',
          number: '3026',
          type: '导购',
          status: false
        },
        {
          img: 'https://p6-dcd-sign.byteimg.com/tos-cn-i-0000/1f4d8b02d76748218e88a76f9410135c~tplv-resize:2048:0.jpg?x-expires=1656673210&x-signature=%2Br2YvKvXkWPna6JAshnUxhIN4bQ%3D',
          title: '爱在大草原 吉利豪越的设计师一定是个暖男',
          number: '3026',
          type: '导购',
          status: false
        },
        {
          img: 'https://p6-dcd-sign.byteimg.com/tos-cn-i-0000/1f4d8b02d76748218e88a76f9410135c~tplv-resize:2048:0.jpg?x-expires=1656673210&x-signature=%2Br2YvKvXkWPna6JAshnUxhIN4bQ%3D',
          title: '爱在大草原 吉利豪越的设计师一定是个暖男',
          number: '3026',
          type: '导购',
          status: false
        },
      ],
      page: 1,
      limit: 10,
      total: 200,
    }
  }

  setItem() {

  }

  setPage(page) {
    this.setState({
      page
    })
  }

  render() {
    const { noPagination = false } = this.props
    const { list, page, limit, total } = this.state
    return (
      <div className="information-list-container">
        {
          list.map((item, index) => {
            return (
              <InformationItem data={item} setItem={() => this.setItem()}/>
            )
          })
        }

        {/* 分页组件 */}
        {
          noPagination ? <div> </div> : <InformationPagination
            data={{
              page,
              limit,
              total
            }}
            setPage={(page) => this.setPage(page)}
          />
        }
      </div>
    )
  }
}

export default InformationList
