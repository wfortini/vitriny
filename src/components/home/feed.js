import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import PromotionList from './promotionList.js';

const SLIDER_1_FIRST_ITEM = 1;

export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dada: [],
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM
    };
  }

  componentWillMount() {
    //this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch("https://randomuser.me/api?results=5");
    const json = await response.json();
    this.setState({ data: json.results });
  }



  render() {

    return (
      <View style={styles.container}>

        <View style={styles.header}>
            <View style={styles.cameraSectionBtn}>
            <TouchableOpacity >
              <Icon name="ios-camera-outline" size={40} color="#000"/>
            </TouchableOpacity>
            </View>

            <Text style={styles.headerText}>Vitriny</Text>

            <View style={styles.messagesSectionBtn}>
              <TouchableOpacity >
                <Icon name="ios-paper-plane-outline" size={35} color="#000" />
              </TouchableOpacity>
            </View>
          </View>

        <View style={styles.feeds}>
          <ScrollView style={{flex:1}}>

            {/* <Stories  data={this.state.data} /> */}

            <FlatList
                data={DADOS}
                keyExtractor={(x, i) => i.toString()}
                renderItem={({ item }) =>
                  <PromotionList promo={item} />
                }
              />


            {/*  <PromotionList pic={item.picture.large} entries={this.state.data} /> */}

          </ScrollView>
        </View>
      </View>
    );
  }
}

const DADOS = [
    {
        uid: 'xxxxxxxxvvvvvvvvvvvvvv',
        store: 'dafiti',
        price: '164,99',
        promotionalPrice: '154,99',
        title:'Calvin Klein Jeans',
        description: 'Calça Jeans Calvin Klein Jeans Skinny Estonada Azul Tipo de Produto Modelagem: SkinnyAltura da intura médiaTamanho: 40Fecho: Botão e zíperComposição: 81% algodão, 17% poliéster e 2% elastanoMedidas da peça: Cintura: 78cm/ Quadril: 100cm/ Gancho: 24cm/ Comprimento: 107cmMedidas do Modelo: Altura: 1,86m/ Tórax: 94cm/ Manequim: 40.Quantidade de Bolsos: 5Tipo de Tecido: JeansLavagens Jeans: Estonada',
        logo: 'https://i.imgur.com/UYiroysl.jpg',
        dateTime: '',
        dateTimeValidPromotion: '',
        location: {
                      latitude: '0',
                      longitude: '0',
                      street: '',
                      number: '',
                      city: '',
                      zipCode: '',
                      state: '',
                      neighborhood: ''
                  },
        images : ['https://randomuser.me/api/portraits/men/47.jpg',
                   'https://randomuser.me/api/portraits/men/44.jpg',
                   'https://randomuser.me/api/portraits/men/36.jpg',
                   'https://randomuser.me/api/portraits/women/60.jpg',
                    'https://randomuser.me/api/portraits/women/60.jpg']
    },
    {
      store: 'Villa Daslu',
      price: '100,000',
      promotionalPrice: '',
      title:'Vestido',
      description: 'Calça jeans xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      logo: 'https://i.imgur.com/UYiroysl.jpg',
      dateTime: '',
      dateTimeValidPromotion: '',
      location: {
                    latitude: '0',
                    longitude: '0',
                    street: '',
                    number: '',
                    city: '',
                    zipCode: '',
                    state: '',
                    neighborhood: ''
                },
      images : ['https://randomuser.me/api/portraits/men/47.jpg',
                 'https://randomuser.me/api/portraits/men/44.jpg',
                 'https://randomuser.me/api/portraits/men/36.jpg',
                 'https://randomuser.me/api/portraits/women/60.jpg',
                  'https://randomuser.me/api/portraits/women/60.jpg']
     },
    {
       store: 'Reserva',
       price: '100,00',
       promotionalPrice: '99.00',
       title:'Bermuda',
       description: 'Calça jeans xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
       logo: 'https://i.imgur.com/UYiroysl.jpg',
       dateTime: '',
       dateTimeValidPromotion: '',
       location: {
                     latitude: '0',
                     longitude: '0',
                     street: '',
                     number: '',
                     city: '',
                     zipCode: '',
                     state: '',
                     neighborhood: ''
                 },
       images : ['https://randomuser.me/api/portraits/men/47.jpg',
                  'https://randomuser.me/api/portraits/men/44.jpg',
                  'https://randomuser.me/api/portraits/men/36.jpg',
                  'https://randomuser.me/api/portraits/women/60.jpg',
                   'https://randomuser.me/api/portraits/women/60.jpg']
      }

];

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#fafafa',
    paddingTop: 5,
    paddingBottom: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -50 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 3,
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 25,
    alignSelf: 'center',
  },
  back: {
    alignSelf: 'flex-start',
  },
  backBtn: {
    height: 28,
    width:28,
  },
  feeds: {
    flex:1,
  },
  messagesSectionBtn: {
    marginRight: 10,
    marginTop: 3,
  },
  cameraSectionBtn: {
    marginLeft: 10,
  },
  slider: {
        marginTop: 15,
        overflow: 'visible' // for custom animations
    },
    sliderContentContainer: {
        paddingVertical: 10 // for custom animation
    }

})
