// Navigation/Navigation.js
import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer';
import { StyleSheet, Image, Text, Platform, Dimensions } from 'react-native';

import Login from '../Component/Login'
import Register from '../Component/Register'
import Accueil from '../Component/Accueil'
import Ticket from '../Component/Ticket'
import Compte from '../Component/Compte'

const connexionStackNavigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            title: "Login",
            headerLeft: <Text onPress={() => navigation.navigate('appDrawerNavigator')}>Menu</Text>
        }
    },
    Register: {
        screen: Register,
        navigationOptions: {
            title: "Register"
        }
    }
})

const ticketStackNavigator = createStackNavigator({
    Ticket: {
        screen: Ticket,
        navigationOptions: {
            title: "Ticket",
            headerLeft: <Text onPress={() => 
                navigation.navigate('DrawerOpen')}>Menu</Text>
        }
    },
})

const compteStackNavigator = createStackNavigator({
    Compte: {
        screen: Compte,
        navigationOptions: {
            title: "Compte",
            drawerLabel: 'Demo Screen 1',
        }
    },
})

const accueilStackNavigator = createStackNavigator({
    Accueil: {
        screen: Accueil,
        navigationOptions: {
            title: "Accueil",
            headerLeft: <Text onPress={() => 
                navigation.navigate('DrawerOpen')}>Menu</Text>
        }
    },
})

const appDrawerNavigator = createDrawerNavigator(
    {
    // Login: {
    //     screen: accueilStackNavigator,
    //     navigationOptions: {
    //     tabBarVisible: false
    //     }
    // },
    Login: {
        screen: connexionStackNavigator,
        navigationOptions: {
            tabBarIcon: () => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
                return <Image
                source={require('../Images/ic_search.png')}
                style={styles.icon}/> // On applique un style pour les redimensionner comme il faut
                },
                header: null,
            }
        },
    Accueil: {
        screen: accueilStackNavigator,
        navigationOptions: {
            tabBarIcon: () => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
                return <Image
                source={require('../Images/ic_search.png')}
                style={styles.icon}/> // On applique un style pour les redimensionner comme il faut
                },
            title: "Accueil"
            }
        },
    Ticket: {
        screen: ticketStackNavigator,
        navigationOptions: {
            tabBarIcon: () => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
                return <Image
                source={require('../Images/ic_search.png')}
                style={styles.icon}/> // On applique un style pour les redimensionner comme il faut
                },
            title: "Ticket"
            }
        },
    Compte: {
        screen: compteStackNavigator,
        navigationOptions: {
            tabBarIcon: () => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
                return <Image
                source={require('../Images/ic_search.png')}
                style={styles.icon}/> // On applique un style pour les redimensionner comme il faut
                },
            title: "Compte"
            },
        },
    },
    DrawerConfig
  )
  const DrawerConfig = {
        drawerWidth: WITDH*0.1,
        activeBackgroundColor: '#DDDDDD', // Couleur d'arrière-plan de l'onglet sélectionné
        inactiveBackgroundColor: '#FF5733', // Couleur d'arrière-plan des onglets non sélectionnés
        // showLabel: false, // On masque les titres
        // showIcon: true // On informe le TabNavigator qu'on souhaite afficher les icônes définis
}

const WITDH = Dimensions.get('window').width;

const styles = StyleSheet.create({
icon: {
    width: 30,
    height: 30
}
})
export default createAppContainer(appDrawerNavigator)