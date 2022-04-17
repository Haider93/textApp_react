import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div className='header-pane'>
                <div className='header-pane-inside-div'>
                </div>
                <div className='img-div'>
                    <img src='tick.png' style={{width:'30px', height:'30px', float:'center', margin:'10px 0px 10px 2px'}}/>
                </div>
            </div>
        )
    }
}

export default Header
