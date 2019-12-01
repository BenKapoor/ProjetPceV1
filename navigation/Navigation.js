// Navigation/Navigation.js

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Login from '../Component/Login'
import Register from '../Component/Register'

const accueilStackNavigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            title: "Login"
        }
    },
    Register: {
        screen: Register,
        navigationOptions: {
            title: "Register"
        }
    }
})

export default createAppContainer(accueilStackNavigator)