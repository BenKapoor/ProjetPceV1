import React, {Component} from 'react';
import Navigation from './navigation/Navigation';
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { StyleSheet, Image, Text, Platform, Dimensions, SafeAreaView, ScrollView,View } from 'react-native';

import Login from './Component/Login'
import Register from './Component/Register'
import Accueil from './Component/Accueil'
import Ticket from './Component/Ticket'
import Compte from './Component/Compte'
import ScannerScreen from './Component/ScannerScreen'

const WITDH = Dimensions.get('window').width;

export default class App extends Component {
  render() {
  const AppNavigator = createAppContainer(AppDrawerNavigator);
  return (
    <AppNavigator/>
  );
}
}

const CustomDrawerComponant = (props) => (
<SafeAreaView style={{flex:1}}>
  <ScrollView>
    <View style={{height: 150, backgroundColor: '#a5d022', alignItems: 'center', justifyContent: 'center'}}>
      <Image source={require('./Images/evolve.png')} style={{height: 120, width: 120,
      borderRadius: 60}}/>
    </View>
  <DrawerItems { ...props}/>
  </ScrollView>

</SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator( 
{
  Login: 
  {
    screen: Login,
    navigationOptions: {
        drawerIcon: () => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
            return <Image
            source={require('./Images/ic_login.png')}
            style={styles.icon}/> // On applique un style pour les redimensionner comme il faut
            },
            header: null,
        }
  },
  Accueil: 
  {
    screen: Accueil,
    navigationOptions: {
      drawerIcon: () => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
      return <Image
      source={require('./Images/ic_home.png')}
      style={styles.icon}/> // On applique un style pour les redimensionner comme il faut
    },
    title: "Accueil"
    }
  },
  Ticket: 
  {
    screen: Ticket,
    navigationOptions: {
      drawerIcon: () => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
        return <Image
        source={require('./Images/ic_facture.png')}
        style={styles.icon}/> // On applique un style pour les redimensionner comme il faut
      },
    title: "Ticket"
    }
  },
  Compte: 
  {
  screen: Compte,
  navigationOptions: {
      drawerIcon: () => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
        return <Image
        source={require('./Images/ic_profil.png')}
        style={styles.icon}/> // On applique un style pour les redimensionner comme il faut
        },
      title: "Compte"
      },
  },
  Scanner: ScannerScreen,
}, 
{
  contentComponent: CustomDrawerComponant,
  drawerWidth: WITDH * 2/3,
  contentOptions: {
    activeTintColor: '#3b964f'
  }
});

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  }
})