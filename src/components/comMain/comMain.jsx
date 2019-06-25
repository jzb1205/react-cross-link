import React, {Component} from 'react'
import './comMain.scss'

class ComMain extends Component {
      render () {
        return (
            <div className="comMain">
              <span>12345678</span>
              {console.log(this.props.children)}
              {this.props.children}
            </div>
        )
      }
    }
    
    export default ComMain