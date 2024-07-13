import React, { Component } from 'react';

export default class ShouldCom extends Component {

    componentDidUpdate() {
        console.log("ShouldCom 렌더링중!!")
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return(
            <div>
                
            </div>
        )
    }
}
