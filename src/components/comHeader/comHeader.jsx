import React, {Component} from 'react'
import './comHeader.scss'

class ComHeader extends Component {
      render () {
        let userName = '当前'
        return (
            <div className="comHeader">
            <span className="title">两岸通后台管理系统</span>
            <div className="userInfo">
                <span>{userName}</span>
                |
                <span>注销</span>
            </div>
        </div>
        )
      }
    }
    
    export default ComHeader