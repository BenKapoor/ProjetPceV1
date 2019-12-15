import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { Header, Left, Right, Icon } from 'native-base';

class Compte extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
            <Header>
              <Left style={{paddingRight: 250, paddingTop: 20}}>
                  
                  <Icon name="menu" onPress= {() => this.props.navigation.openDrawer()}/>
                  
              </Left>
            </Header>
            <SafeAreaView>
              <Text style={styles.text}>Ticket!</Text>
            </SafeAreaView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
      backgroundColor: '#fff'
  },
  text : {
      fontWeight: 'bold',
      marginTop: 16,
      marginBottom: 5,
      textAlign: 'center'
  }
});

export default createAppContainer(Compte);