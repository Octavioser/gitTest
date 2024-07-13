import React, { Component, PureComponent } from 'react';

export default class PureCom extends PureComponent {

    componentDidUpdate() {
        console.log("PureCom 렌더링중!!")
        console.log("깃 푸쉬!!")
    }
    render() {
        return(
            <div/>
        )
    }
}
