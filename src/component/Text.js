import React from "react";

export default class Text extends React.Component {
    state = {
        name: 'one',
    };

    render() {
        return (
            <div id="text">
                <p>
                    <span className="foreground">normal </span>
                    <span className="black">black </span>
                    <span className="red">red </span>
                    <span className="green">green </span>
                    <span className="yellow">yellow </span>
                    <span className="blue">blue </span>
                    <span className="purple">purple </span>
                    <span className="cyan">cyan </span>
                    <span className="white">white </span>
                </p>
                <p className="bold">
                    <span className="foreground">bold </span>
                    <span className="black">black </span>
                    <span className="red">red </span>
                    <span className="green">green </span>
                    <span className="yellow">yellow </span>
                    <span className="blue">blue </span>
                    <span className="purple">purple </span>
                    <span className="cyan">cyan </span>
                    <span className="white">white </span>
                </p>
                <p>
                    <span className="black">This is <b>black</b> line</span><br/>
                    <span className="red">This is <b>red</b> line</span><br/>
                    <span className="green">This is <b>green</b> line</span><br/>
                    <span className="yellow">This is <b>yellow</b> line</span><br/>
                    <span className="blue">This is <b>blue</b> line</span><br/>
                    <span className="purple">This is <b>purple</b> line</span><br/>
                    <span className="cyan">This is <b>cyan</b> line</span><br/>
                    <span className="white">This is <b>white</b> line</span><br/>
                </p>
            </div>
        );
    }
}
