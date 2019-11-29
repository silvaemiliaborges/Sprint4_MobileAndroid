import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, AsyncStorage, Image, StyleSheet } from 'react-native';


class Login extends Component {

  static navigationOptions = {
    header: null,
  }

  constructor() {
    super();
    this.state = {
      email: "cassiana@email.com",
      senha: "123456",
    };
  }

  _realizarLogin = async () => {
    await fetch('http://192.168.4.96:5000/api/login', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        senha: this.state.senha,
      }),
    })
      .then(resposta => resposta.json())
      .then(data => this._botaoLogar(data.token))
      .catch(erro => console.warn(erro));
  };

  _botaoLogar = async token => {
    if (token != null) {
      try {
        await AsyncStorage.setItem('@opflix:token', token);
        this.props.navigation.navigate('Navigator');
        //this.props.navigation.navigate('Navigator'); usar para link
      } catch (error) {
        console.warn(error)
      }
    }
  };

  render() {
    return (
      <View style={styles.tudo}>
        <View style={styles.viewImagem}>

          <Image
            source={require('../assets/img/1570566038528.png')}
            style={styles.tudoImag}
          />

        </View>
        <View style={styles.inputs}>
          <View style={styles.viewInput1}>
            <Text style={styles.email}>E-mail</Text>
            <TextInput
              style={styles.input1}
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            />
          </View>
          <View style={styles.viewInput2}>
            <Text style={styles.senha}>Senha</Text>
            <TextInput
              placeholderTextColor='#fff'
              style={styles.input2}
              onChangeText={senha => this.setState({ senha })}
              value={this.state.senha}
            />
          </View>
        </View>
        <View style={styles.logar}>
          <TouchableOpacity onPress={this._realizarLogin} style={styles.botao}>
            <Text style={styles.texto}>Logar</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.cadas}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('CadastroNavigator')} style={styles.botao}>
            <Text style={styles.texto1}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  tudo: {
    backgroundColor: "#570000",
    width: '100%',
    height: '100%'
  },
  viewImagem: {
    display: "flex"
  },
  tudoImag: {
    marginTop: 10,
    width: 200,
    height: 70,
    alignSelf: 'center'
  },
  inputs: {
    marginTop: 150,
    display: "flex",
    alignSelf: "center"
  },
  email: {
    fontSize: 20,
    color: 'white',
  },
  senha: {
    fontSize: 20,
    color: 'white',
  },
  input1: {
    margin: 10,
    borderWidth: 1,
    width: 350,
    backgroundColor: 'white'
  },
  input2: {
    margin: 10,
    borderWidth: 1,
    width: 350,
    backgroundColor: 'white'
  },
  logar: {
    margin: 10,
    display: "flex",
    alignSelf: "center",
    borderWidth: 1,
    height: 50,
    backgroundColor: 'white',
  },
  texto: {
    alignSelf: 'center',
    color: '#570000',
    fontSize: 30,

  },
  botao: {
  },

  texo1: {
    textAlign: "center",
    color: '#570000',
    fontSize: 30
  },
  cadas: {
    margin: 15,
    display: "flex",
    width: 100,
    borderWidth: 1,
    height: 30,
    backgroundColor: 'white',
  }
})
