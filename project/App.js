import React from 'react';
import Phrase from './Phrase';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count : 0
    };
}

addOne = () => {
  this.setState({count: this.state.count +1});
}
  render() {
    return (
      <View style= {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{this.state.count}</Text>
        <Button
            onPress={this.addOne}
            title={"click me"}
            />
            <Phrase text ={"HOW MANY CLICK CAN YOU DO IN ONE MINUTE :D"}/>
            <Image
              style={{width: 50, height: 50}}
              source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
