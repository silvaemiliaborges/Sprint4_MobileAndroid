import React, { Component } from 'react';

import { View, Image, StyleSheet, TouchableOpacity, AsyncStorage, Text } from 'react-native';

import jwtParse from 'jwt-decode';

export default class Dentinho extends Component {




  static navigationOptions = {
    header: null,
  }


  constructor() {
    super();
    this.state = {
      IdLancamento: [],
      Imagem: "",
      nome: "",
      duracaoMin: "",
      classificacao: "",
      dataLancamento: "",
      sinopse: "",
      IdPlataforma: "",
      IdGenero: "",
      IdTipo: "",
      lancamentosLista: []
    }
    this._cadjiiaod;
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
    this._cadjiiaod()
    this._recuperaraLancamentos();
  }

  _cadjiiaod = () => {
    const { navigation } = this.props;
    // console.warn("oi");
    // console.log('erik',this.props.item)
    let valor = JSON.stringify(navigation.getParam("item", null))

    console.warn(valor)
    // this.setState({ lancamentosLista: valor })
  }

  _recuperaraLancamentos = async () => {
    let token = await AsyncStorage.getItem('@opflix:nomeTop')
    // let informacoes = jwtParse(token);

    let informacoes = this.state.lancamentosLista;
    // console.warn(informacoes);
    this.setState({
      IdLancamento: informacoes.IdLancamento,
      Imagem: informacoes.Imagem,
      nome: informacoes.nome,
      duracaoMin: informacoes.duracaoMin,
      classificacao: informacoes.classificacao,
      dataLancamento: informacoes.dataLancamento,
      sinopse: informacoes.sinopse,
      IdPlataforma: informacoes.IdPlataforma,
      IdGenero: informacoes.IdGenero,
      IdTipo: informacoes.IdTipo
    })
  }
  render() {
    const { navigation } = this.props;
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
        <View style={styles.textos}>

          <Text>
            Item: {JSON.stringify(navigation.getParam('item', 'NO-ID'))}
          </Text>

          <View style={styles.view1}>
            <Text style={styles.nomeLanc}>Nome:</Text>
            <Text style={styles.nomeLanc}>{this.state.nome}</Text>
          </View>

          <View style={styles.view2}>
            <Text style={styles.duracaoMini}>E-mail:</Text>
            <Text style={styles.duracaoMini}>{this.state.duracaoMin}</Text>
          </View>


          <View style={styles.view2}>
            <Text style={styles.clasificaccao}>Classificação:</Text>
            <Text style={styles.clasificaccao}>{this.state.classificacao}</Text>
          </View>


          <View style={styles.view2}>
            <Text style={styles.lancamentos}>Data do lancamento:</Text>
            <Text style={styles.lancamentos}>{this.state.dataLancamento}</Text>
          </View>

          <View style={styles.view2}>
            <Text style={styles.sinopses}>Sinopse:</Text>
            <Text style={styles.sinopses}>{this.state.sinopse}</Text>
          </View>

          <View style={styles.view2}>
            <Text style={styles.plataformas}>Plataforma:</Text>
            <Text style={styles.plataformas}>{this.state.IdPlataforma}</Text>
          </View>

          <View style={styles.view2}>
            <Text style={styles.generos}>Genêro:</Text>
            <Text style={styles.generos}>{this.state.IdGenero}</Text>
          </View>

          <View style={styles.view2}>
            <Text style={styles.tipoo}>Tipo:</Text>
            <Text style={styles.tipoo}>{this.state.IdTipo}</Text>
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
    // height: '100%',
  },
  imagem: {
    alignSelf: "center"
  },
})