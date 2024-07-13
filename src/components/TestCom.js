import React, { Component } from 'react';

export default class TestCom extends Component {


    componentDidUpdate() {
        console.log("TestCom 렌더링중!!")
    }

    render() {
        return(
            <div/>
        )
    }
}
