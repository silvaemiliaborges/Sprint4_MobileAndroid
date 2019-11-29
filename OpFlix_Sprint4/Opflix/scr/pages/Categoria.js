import React, { Component } from 'react';

import { View, Image, StyleSheet, TouchableOpacity, Text, AsyncStorage } from 'react-native';

import jwtParse from 'jwt-decode';

export default class Categoria extends Component {

  constructor() {
    super();
    this.state = {
      nome: null,
      email: null,
    }
  }
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (

      <Image
        source={require("../assets/img/home-512.png")}
        style={{ width: 25, height: 25 }}
        tintColor={tintColor}
      />

    )
  }

  componentDidMount() {
    this._recuperar();
  }

  _recuperar = async () => {
    let token = await AsyncStorage.getItem('@opflix:token')
    let user = jwtParse(token);
    console.warn(user); 
    this.setState({ nome: user.nome, email: user.email })
  }

  render() {
    return (
      <View style={styles.tudo}>
        <View style={styles.imagem}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('AuthStack')} styles={styles.Image}>
            <Image
              source={require('../assets/img/1570566038528.png')}
              style={styles.tudoImag}
            />
          </TouchableOpacity>

        </View>

        <View style={styles.viewImagem}>
          <Image
            style={styles.icone}
            source={require('../assets/img/user-1_icon-icons.com_65106.png')}
          />
        </View>
        <View style={styles.textos}>
          <View style={styles.view1}>
            <Text style={styles.nomeUsuario1}>Nome:</Text>
            <Text style={styles.nomeUsuario}>{this.state.nome}</Text>
          </View>
          <View style={styles.view2}>
            <Text style={styles.emailUsuario1}>E-mail:</Text>
            <Text style={styles.emailUsuario}>{this.state.email}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tudo: {
    backgroundColor: "#570000",
    width: '100%',
    height: '100%',
  },
  imagem: {
    alignSelf: "center"
  },
  icone: {
    margin: 50,
    alignSelf: "center",
    width:100,
    height:100,
    tintColor:'white',
    marginBottom: 100,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 50,
  },
  tudoImag: {
    width: 200,
    height: 70,
    margin: 10
  },
  textos: {
    display: "flex",
    alignSelf: "center"
  },
  nomeUsuario1: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    padding: 10,
  },
  nomeUsuario: {
    color: 'white',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    width: 100,
    textAlign: "center"
  },
  emailUsuario1: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    padding: 10
  },
  emailUsuario: {
    color: 'white',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    width: 150,
    textAlign: "center"
  }
})