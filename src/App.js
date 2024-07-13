import './App.css';
import React from 'react';
import PureCom from './components/PureCom';
import TestCom from './components/TestCom';
import ShouldCom from './components/ShouldCom';


export default class App extends React.Component {
    state = {
        count:0,
        propsCount: 0,
    }

    render() {
        return (
            <div style={{width:'100vw', height:'100vh'}}>
                {/* count 버튼 */}
                <button style={{width:'20%', height:'20%'}}
                    onClick={()=>{this.setState({count: this.state.count + 1})}}>
                    {'count==> ' + this.state.count}
                </button>
                {/* propscount 버튼 */}
                <button style={{width:'20%', height:'20%'}}
                    onClick={()=>{this.setState({propsCount: this.state.propsCount + 1})}}>
                    {'propscount==> ' + this.state.propsCount}
                </button>
                <TestCom/>
                <PureCom propsCount={this.state.propsCount}/>
                {/* <ShouldCom/> */}
            </div>
        )
    }
}
