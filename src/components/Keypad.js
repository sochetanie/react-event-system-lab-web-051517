// Code Keypad Component Here
import React from 'react'

export default class Keypad extends React.Component {

        keyUppp = () => {
            console.log("Entering password...")
        }

    render() {
        return (<div>
                <input onKeyUp={this.keyUppp} type="password"/>
                </div>)
    }

}