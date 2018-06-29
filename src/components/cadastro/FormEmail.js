import React, {Component} from 'react';

import {  StyleSheet,  TouchableOpacity,  Text,  View  } from 'react-native';
import { Input, Item, Button, Text } from 'native-base';


import { Actions } from 'react-native-router-flux';

const FormEmail = props => {

    console.log(props);


    return (

      <View state={styles.container}>

          <View style={styles.containerTitle}>
                <Text style={styles.text}>Vitriny</Text>
          </View>


          <Item regular>
            <Input placeholder='Regular Textbox' />
          </Item>

          <Button block>
            <Text>Primary</Text>
          </Button>
      </View>
          
    );

}


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
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 20,
    fontSize: 30,
    fontFamily: "Roboto",
  },
 
});
