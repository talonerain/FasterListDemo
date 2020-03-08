import React, { Component } from 'react';
import { View, Button } from 'react-native';

export default class App extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title={"FlatListDemo"} onPress={() => {
          navigation.navigate("FlatListDemo")
        }} />
      </View>
    );
  }
}
