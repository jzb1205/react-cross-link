import React, {Component} from 'react'
import './login.scss'

import ComHeader from '../../components/comHeader/comHeader'
import ComAside from '../../components/comAside/comAside'
import ComMain from '../../components/comMain/comMain'

class Food extends Component {
  render () {
    return (
      <div className='tech-container'>
        <ComHeader/>
        <div className="main">
            <ComAside/>
            <ComMain/>
        </div>
      </div>
    )
  }
}

export default Food