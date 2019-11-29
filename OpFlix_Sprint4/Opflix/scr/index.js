
import CategoriaScreen from './pages/Categoria';
import LancamentoScreen from './pages/Lancamento.js';
import LoginScreen from './pages/Login.js';
import Cadastro from './pages/CadastroUsuario';
import DentinhoScreen from './pages/Dentinho';


import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import React, { Component } from 'react'
import { Image } from 'react-native'


const AuthStack = createStackNavigator({
    Sing: { screen: LoginScreen }
});


const CadastroNavigator = createStackNavigator({
    Cadastro
})


const LancamentoStack = createStackNavigator({
    LancamentoScreen: {
        screen: LancamentoScreen
    }
})

// const DentinhoStack = createStackNavigator({
//     DentinhoScreen: {
//         screen: DentinhoScreen
//     }
// })

const Navigator = createBottomTabNavigator(
    {
        Lancamentos: {
            screen: LancamentoStack,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        source={require("./assets/img/btn-menu.png")}
                        style={{
                            width: 25,
                            height: 25,
                            alignSelf: "center",
                            tintColor: '#FFFFFF'
                        }}
                        tintColor={tintColor}
                    />
                )
            }
        },
        Categorias: {
            screen: CategoriaScreen,
        },
        Dentinho: {
            screen: DentinhoScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        source={require("./assets/img/star_icon-icons.com_49980.png")}
                        style={{
                            width: 25,
                            height: 25,
                            alignSelf: "center",
                            tintColor: '#FFFFFF'
                        }}
                        tintColor={tintColor}
                    />
                )
            }
        }
    },



    {
        initialRouteName: 'Lancamentos',
        swipeEnabled: false,
        tabBarOptions: {
            showIcon: true,
            showLabel: false,
            inactiveBackgroundColor: "#FFFFFF",
            activeBackgroundColor: "#570000",
            activeTintColor: 'white',
            inactiveTintColor: 'black',
            style: {
                width: '100%',
                height: 50,
            }
        },
    }
)


export default createAppContainer(
    createSwitchNavigator(
        {
            Navigator,
            AuthStack,
            CadastroNavigator,
            LancamentoStack,
        },
        {
            initialRouteName: 'AuthStack',
        }

    )
)