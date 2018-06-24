import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class PriceView extends Component {
	constructor(props) {
		super(props);
	}

  _renderPrice(){

				if(this.props.promotionalPrice != ''){
						return (
							 <View style={{flexDirection: 'row'}}>
								 <Text>R$</Text><Text style={styles.priceLineThrough}>{this.props.price}</Text>
								 <Text style={styles.promotionalPrice}>R$ {this.props.promotionalPrice}</Text>
              </View>
					)
			 }else{
				 return (
					 <View style={{flexDirection: 'row'}}>
						 <Text>R$</Text><Text >{this.props.price}</Text>
           </View>
				)
			 }

	}

	render(){
		return(
         <View style={styles.containerPrice}>
               {this._renderPrice()}
				 </View>

		);
	}
}

const styles = StyleSheet.create({
  promotionalPrice: {
		fontWeight: 'bold',
		fontSize: 16,
		marginLeft: 10
	},
  containerPrice: {
		marginLeft: 10,
		flexDirection: 'row',
	},
  priceLineThrough:{
   textDecorationLine: 'line-through',
   textDecorationStyle: 'solid'
  }
});
