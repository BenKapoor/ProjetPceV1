import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';


class Ticket extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Ticket!</Text>
      </View>
    );
  }
}

export default createAppContainer(Ticket);