import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './comAside.scss'
import asideList from  '../../json/asideData'

class ComAside extends Component {
    constructor(props){
        super(props)
        console.log(this.props)
        this.state = {
            date: new Date(),
            value:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    getId = (id,type,e)=>{
        console.log(id)
        console.log(type)
        console.log(e)
        this.setState({
            curId : id
        })
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
          )
    }
    componentWillUnmount() {
        clearInterval(this.timerID)
    }
    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('提交的名字: ' + this.state.value);
        event.preventDefault();
      }
    render () {
        return (
            <div className="comAside">
                <ul className="asideWrap">
                    {asideList.map(item=>(
                        <li className={ this.state.curId === item.id?'active':'asideItem default'}
                            style={this.state.curId === item.id?{'fontSize':'20px'}:{'fontSize':'12px'}}
                            onClick={(e) => this.getId(item.id,'none',e)} 
                            // onClick={this.getId.bind(this,item.id)} 
                            key={item.id}>
                            <Link to={item.path}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ComAside