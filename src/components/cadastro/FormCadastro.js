import React, {Component} from 'react';
import {  StyleSheet,  Text,  View, TextInput } from 'react-native';

export default class FormCadastro extends Component {   

   render(){
          console.log(this.props);
            return (

              <View state={styles.container}>          

                  <View style={styles.containerTitle}>
                        <Text style={styles.text}>Vitriny</Text>
                  </View>
                  <View>
                  <TextInput                     
                      placeholder="Usuário"
                      autoCorrect={false}
                      autoCapitalize={'none'}
                      returnKeyType={'none'}
                      value={this.props.email}
                      placeholderTextColor="black"
                      underlineColorAndroid="transparent"                      
                    />
                  </View>
              </View>
                  
            );
          }

}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    marginTop: 48,   
  },
  containerTitle: {
    
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop : 20,
    
  },
  elementsContainer: {
    backgroundColor: 'red',
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 24
  }, 
  text: {
    paddingTop: 80,
    color: 'black',
    fontWeight: 'bold',   
    marginTop: 20,
    fontSize: 30,
    fontFamily: "Roboto",
  },
 
});
