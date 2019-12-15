import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { Header, Left, Right, Icon } from 'native-base';

class Accueil extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header>
          <Left style={{paddingRight: 250, paddingTop: 20}}>
            
            <Icon name="menu" onPress= {() => this.props.navigation.openDrawer()}/>
            
          </Left>
        </Header>
        <View>
          <Text style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>Home!</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
      backgroundColor: '#fff'
  }
});
export default createAppContainer(Accueil);