import React, { Component } from 'react'
import App from '../App'
import Header from './Header'
import LeftPane from './LeftPane'
import RightPane from './RightPane'

export class FirstWizard extends Component {
    state={
        show: false,
        showBoot: true
    }
    start(){
        this.setState({show: true, showBoot: false})
    }
    render() {
        return (
            <div>
                {
                    (this.state.showBoot) && <><Header></Header><LeftPane></LeftPane><RightPane></RightPane>
                    <button onClick={this.start.bind(this)}>Start</button></>
                }
                
                {
                    this.state.show && <App></App>
                }
                
            </div>
        )
    }
}

export default FirstWizard
