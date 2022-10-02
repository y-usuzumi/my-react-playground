import React from 'react';
import Mouse from './mouse';
import MouseReporter from './mouse-reporter';

export default class extends React.Component {
    render() {
        return (
            <div>
                <Mouse render={mouseCoords => (
                    <MouseReporter mouseCoords={mouseCoords} />
                )} />
            </div>
        )
    }
}