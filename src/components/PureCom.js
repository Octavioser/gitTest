import React, { Component, PureComponent } from 'react';

export default class PureCom extends PureComponent {

    componentDidUpdate() {
        console.log("PureCom 렌더링중!!")
    }
    render() {
        return(
            <div/>
        )
    }
}
