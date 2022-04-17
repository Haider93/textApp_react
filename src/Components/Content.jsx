import React, { Component } from 'react'
import Footer from './Footer';

export class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            counter: 0,
            color_value: 'footer-pane-red'
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        console.log('handle change called')
        let txt = e.target.value;
        let spaceCount = txt.trim().split(" ").length;
        let color_val = 'footer-pane-green';
        if (txt.trim() === '') {
            spaceCount = spaceCount - 1;
            color_val = 'footer-pane-red'
        }

        this.setState({ text: txt, counter: spaceCount, color_value: color_val });
    }
    convertUpperCase() {
        let t = this.state.text;
        t = t.toUpperCase();
        this.setState({ text: t })
    }
    clearText() {
        this.setState({ text: '', counter: 0, color_value: 'footer-pane-red' })
    }
    convertLowerCase() {
        let t = this.state.text;
        t = t.toLowerCase();
        this.setState({ text: t })
    }

    render() {
        return (
            <div>
                <h1>Text Utility</h1>
                <textarea type="text" className='content-input' placeholder="Enter text.." value={this.state.text} onChange={this.handleChange} />
                <Footer classname={this.state.color_value}></Footer>
                <p>Word count: {this.state.counter}</p>
                {
                    (this.state.color_value === 'footer-pane-green') &&
                    <p>You are writing something..</p>
                }
                {
                    (this.state.color_value === 'footer-pane-red') &&
                    <p>Text box is empty.</p>
                }
                <div style={{display:'flex inline'}}>
                <button onClick={this.convertUpperCase.bind(this)} className='btn'>
                    {/* <img src='settings.png' style={{ width: '20px', height: '20px' }} /> */}
                    <span style={{ margin: '2px 2px 2px 2px' }}>Uppercase</span></button>
                <button onClick={this.convertLowerCase.bind(this)} className='btn'>
                    {/* <img src='settings.png' style={{ width: '20px', height: '20px' }} /> */}
                    <span style={{ margin: '2px 2px 2px 2px' }}>Lowercase</span></button>
                <button onClick={this.clearText.bind(this)} className='btn'>
                    {/* <img src='settings.png' style={{ width: '20px', height: '20px' }} /> */}
                    <span style={{ margin: '2px 2px 2px 2px' }}>Clear</span></button>
                </div>
                <p style={{display: 'inline' }}><b>Your Text:</b> {this.state.text}</p>
            </div>
        )
    }
}

export default Content
