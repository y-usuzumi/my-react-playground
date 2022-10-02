import React from 'react';

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("MouseReporter mounted");
    }

    componentWillUnmount() {
        console.log("MouseReporter will unmount");
    }

    render() {
        return <>
            <p style={{ color: 'red' }}>x: {this.props.mouseCoords.x}</p>
            <p style={{ color: 'red' }}>y: {this.props.mouseCoords.y}</p>
        </>
    }
}