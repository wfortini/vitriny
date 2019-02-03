import React, {Component} from 'react';

import {  StyleSheet,  TouchableOpacity,  Text,  View  } from 'react-native';

import { Actions } from 'react-native-router-flux';

const FormEmail = props => {

    console.log(props);


    return (

      <View style={styles.container}>

             <View style={{ flex: 3, alignItems: 'center' }}>
                    <Text style={styles.text}>Vitriny</Text>
             </View>

             <View  style={styles.inputWrapper} >
                    
                    <TextInput
                      style={styles.input}
                      placeholder="Email"
                      autoCorrect={false}
                      autoCapitalize={'none'}
                      returnKeyType={'none'}
                      value={props.email}
                      placeholderTextColor="white"
                      underlineColorAndroid="transparent"
                      onChangeText={texto => props.modificaEmail(texto) }
                    />
                </View>

                <View  style={styles.inputWrapper} >
                    
                    <TextInput
                      style={styles.input}
                      placeholder="Nome completo"
                      autoCorrect={false}
                      autoCapitalize={'none'}
                      returnKeyType={'none'}
                      value={props.nome}
                      placeholderTextColor="white"
                      underlineColorAndroid="transparent"
                      onChangeText={texto => props.modificaEmail(texto) }
                    />
                </View>

                <View  style={styles.inputWrapper} >
                    <TextInput
                      style={styles.input}
                      placeholder="Nome do usuário"
                      autoCorrect={false}
                      autoCapitalize={'none'}
                      returnKeyType={'none'}
                      value={props.nomeUsuario}
                      placeholderTextColor="white"
                      underlineColorAndroid="transparent"
                      onChangeText={texto => props.modificaEmail(texto) }
                    />
                </View>

                <View  style={styles.inputWrapper} >                    
                    <TextInput
                      style={styles.input}
                      placeholder="Senha"
                      autoCorrect={false}
                      autoCapitalize={'none'}
                      returnKeyType={'none'}
                      value={props.senha}
                      placeholderTextColor="white"
                      underlineColorAndroid="transparent"
                      onChangeText={texto => props.modificaEmail(texto) }
                    />
                </View>
      </View>
          
    );

}

const mapStateToProps = state => (
  {
      email: state.AutenticacaoReducer.email,
      password: state.AutenticacaoReducer.senha,
      nome: state.AutenticacaoReducer.nome,
      nomeUsuario: state.AutenticacaoReducer.nomeUsuario
  }
)

export default connect(mapStateToProps, null)(FormEmail);


const styles = StyleSheet.create({  
  container: {
    flex: 1,   
    alignItems: 'center',
  },
  containerTitle: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  text: {
    paddingTop: 80,
    coltextor: 'black',
    fontWeight: 'bold',   
    marginTop: 20,
    fontSize: 30,
    fontFamily: "Roboto",
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: DEVICE_WIDTH - 40,
    height: 40,
    marginHorizontal: 20,
    paddingLeft: 45,
    borderRadius: 20,
    color: '#ffffff',
    fontSize: 16,

  },
  inputWrapper: {
    flex: 1,
 },
 
});
