import React, {Component} from 'react'
import './comAside.scss'

class ComAside extends Component {
      render () {
        return (
            <div className="comAside">
                <ul>
                    <li>react: 16.5.2 --- js框架</li>
                    <li>react-redux: 5.0.7 --- 状态管理</li>
                    <li>react-router-dom: 4.3.1 --- 路由</li>
                    <li>sass:  --- css预处理</li>
                    <li>animated: 0.2.2 --- 动画库</li>
                    <li>react-addons-css-transition-group: 15.6.2 --- 动画库</li>
                    <li>immutable: 0.2.2 --- 数据变更管理库</li>
                    <li>swiper: 4.4.1 --- 移动端滑动库</li>
                    <li>prop-types: 15.6.2 --- 类型校验库</li>
                </ul>
            </div>
        )
      }
    }
    
    export default ComAside