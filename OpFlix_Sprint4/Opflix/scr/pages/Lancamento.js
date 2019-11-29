import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, AsyncStorage, TouchableOpacity, TextInput, ScrollView, Button } from 'react-native';

// import { Container } from './styles';



export default class Lancamento extends Component {
  constructor() {
    super();
    this.state = {
      Lancamento: [],
      retorno: null,
      lancamentoEncontrado: [],
      ativo: 0,
      sinopseSelected: ''
    }
  }

  static navigationOptions = {
    header: null,
  }


  componentDidMount() {
    this._carregarLancamento();
  }

  _carregarLancamento = async () => {
    let token = await AsyncStorage.getItem('@opflix:token');
    await fetch('http://192.168.4.96:5000/api/lancamento', {
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      }
    })
      .then(resposta => resposta.json())
      .then(data => this.setState({ Lancamento: data }))
      .catch(erro => console.warn(erro));
  }

  _Filtro = async () => {
    let token = await AsyncStorage.getItem('@opflix:token');
    await fetch('http://192.168.4.96:5000/api/lancamento', {
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      }
    })
      .then(a => a.json())
      .then(data => {
        let retornoDoUsuario = data.filter(element => {
          return element.nome == this.state.retorno;
        });
        this.setState({ lancamentoEncontrado: retornoDoUsuario })
      })
  }

  _recuperar = async (nome) => {
    await AsyncStorage.setItem('@opflix:nomeTop', nome);
    this.props.navigation.navigate('Dentinho')
  }

  render() {
    return (
      <View>

        <ScrollView>

          <View style={styles.tudo}>
            <View style={styles.imagem}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('AuthStack')} styles={styles.Image}>

                <Image
                  source={require('../assets/img/1570566038528.png')}
                  style={styles.tudoImag}
                />
              </TouchableOpacity>

            </View>

            <View style={{ height: '90%' }}>
              <View style={styles.viewNomeL}>
                <Text style={styles.nomeL}>Lançamentos</Text>
              </View>

              <TextInput
                style={styles.inputL}
                onChangeText={retorno => this.setState({ retorno })}
                value={this.state.retorno}
              />

              <View style={styles.viewBotaoL}>
                <TouchableOpacity onPress={this._Filtro}>
                  <Text style={styles.botaoL}>Buscar</Text>
                </TouchableOpacity>
              </View>

              {(!this.state.retorno || this.state.retorno === null || this.state.retorno == '') ? (
                <FlatList
                  contentContainerStyle={styles.lista}
                  data={this.state.Lancamento}
                  keyExtractor={item => item.idLancamento}
                  renderItem={({ item }) => (
                    <View style={styles.table}>
                      <Text style={styles.nome}>{item.nome}</Text>
                      <TouchableOpacity onPress={() => { this._recuperar(item.nome) }}>
                        <Image source={{ uri: item.imagem }} style={styles.imagens} />
                      </TouchableOpacity>
                    </View>
                  )}
                />
              ) : (
                  <FlatList
                    contentContainerStyle={styles.lista}
                    data={this.state.lancamentoEncontrado}
                    keyExtractor={item => item.idLancamento}
                    renderItem={({ item }) => (
                      <View style={styles.table}>
                        <Text style={styles.nome}>{item.nome}</Text>
                        <TouchableOpacity onPress={() => {
                          this.props.navigation.navigate({
                            name: 'Dentinho',
                            params: { 'item': 'Deus' },
                          })
                        }}>
                          <Image source={{ uri: item.imagem }} style={styles.imagens} />
                        </TouchableOpacity>
                      </View>
                    )}
                  />
                )}
            </View>
          </View>
        </ScrollView>
      </View >
    );
  }
}


const styles = StyleSheet.create({
  tudo: {
    backgroundColor: "#570000",
    width: '100%',
    height: '100%',

  },
  tabNavigatorIconHome: {
    width: 25,
    height: 25,
    alignSelf: "center",
    tintColor: '#FFFFFF'
  },
  imagem: {
    alignSelf: "center"
  },
  tudoImag: {
    width: 200,
    height: 70,
    margin: 10
  },
  viewNomeL: {
    alignSelf: "center"
  },
  nomeL: {
    margin: 20,
    fontSize: 20,
    color: 'white'
  },
  inputL: {
    borderWidth: 1,
    backgroundColor: 'white',
    width: 350,
    alignSelf: "center"
  },
  viewBotaoL: {
    alignSelf: "center",
    margin: 10
  },
  botaoL: {
    borderWidth: 2,
    color: 'white',
    fontSize: 15
  },
  lista: {
    margin: 20,
    alignSelf: "center",
  },
  nome: {
    color: 'white',
    fontSize: 15
  }
  ,
  imagens: {
    width: 150,
    height: 220
  }
})

