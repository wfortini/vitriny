import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';

import styles from '../../styles/promotionSlider.style.js';

export default class PromotionSlider extends Component {

   
    get image () {        

        const data = this.props.data;
        
        return (
              <Image
                source={{ uri: data }}
                style={styles.image}
              />
        );
    }

    render () {

        const data = this.props.data;

        return (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.slideInnerContainer} >              
                
                    { this.image }
               
            </TouchableOpacity>
        );
    }
}
