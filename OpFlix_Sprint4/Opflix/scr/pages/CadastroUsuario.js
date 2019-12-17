import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, AsyncStorage, TouchableOpacity, TextInput, ScrollView, Button } from 'react-native';

// import { Container } from './styles';

export default class Cadastro extends Component {
  constructor() {
    super();
    this.state = {
      nome: "gegege",
      email: "telles@nogueira.COM",
      senha: "linda",
    };
  }
  static navigationOptions = {
    header: null
  }

  _cadastrar = async () => {
    await fetch('http://192.168.4.96:5000/api/usuario', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome: this.state.nome,
        email: this.state.email,
        senha: this.state.senha,
      }),
    })
      .then(resposta => resposta.json())
      .then(data => {
        console.warn(data)
        // this.props.navigation.navigate('AuthStack')
      })
      .catch(erro => console.warn(erro));
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
        <View style={styles.ttt}>
          <View style={styles.input1}>
            <TextInput
              style={styles.nome}
              placeholder="Nome"
              onChangeText={nome => this.setState({ nome })}
            // onChangeText={nome => console.warn(nome)}
            />
          </View>
          <View style={styles.input2}>
            <TextInput
              style={styles.email}
              placeholder="Email"
              onChangeText={email => this.setState({ email })}
            // onChangeText={email => console.warn(email)}
            />
          </View>
          <View style={styles.input3}>
            <TextInput
              style={styles.senha}
              placeholder="Senha"
              onChangeText={senha => this.setState({ senha })}
            // onChangeText={senha => console.warn(senha)}
            />
          </View>
        </View>

        <View style={styles.botao}>
          <TouchableOpacity onPress={this._cadastrar}>
            <Text style={styles.cadastrar}>Concluir</Text>

          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  tudo: {
    backgroundColor: "#570000",
    width: '100%',
    height: '100%'

  },
  imagem: {
    alignSelf: "center"
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
  ttt: {
    marginTop: 150,
    display: "flex",
    alignSelf: "center"
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
  input3: {
    margin: 10,
    borderWidth: 1,
    width: 350,
    backgroundColor: 'white'
  },
  input4: {
    margin: 10,
    borderWidth: 1,
    width: 350,
    backgroundColor: 'white'
  },
  botao: {
    margin: 12,
    display: "flex",
    alignSelf: "center",
    borderWidth: 1,
    backgroundColor: 'white',
  },
});