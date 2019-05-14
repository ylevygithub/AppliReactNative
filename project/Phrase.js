import React from "react"
import {Text} from "react-native"

export default class Phrase extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Text>{this.props.text}</Text>
        )
    }
}