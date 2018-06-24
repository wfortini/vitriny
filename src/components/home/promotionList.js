import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,TouchableNativeFeedback} from 'react-native';
import { Ionicons, EvilIcons } from 'react-native-vector-icons';
import PriceView from './priceView.js';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import PromotionSlider from './promotionSlider.js';
import { sliderWidth, itemWidth } from '../../styles/promotionSlider.style';

const SLIDER_1_FIRST_ITEM = 1;

export default class PromotionList extends Component {

	constructor (props) {
		super(props);		
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM
        };
    }

   _renderItem ({item, index}) {
       return (
             <PromotionSlider data={item} />
	   	);
    }

		_returnTime(){
			return '';
		}


	render(){

		const { slider1ActiveSlide } = this.state;

		return(
			<View style={styles.container}>

            <View style={styles.owner}>
					<Image style={styles.ownerThumb} source={{uri: this.props.promo.logo}} />
					<TouchableOpacity>
						<Text style={styles.ownerText}>{this.props.promo.store.substring(0,10)}</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={styles.menuIcon}>...</Text>
					</TouchableOpacity>
		   </View>


           <Carousel
		              ref={c => this._slider1Ref = c}
	                  data={this.props.promo.images}
	                  renderItem={this._renderItem}
	                  sliderWidth={sliderWidth}
	                  itemWidth={itemWidth}
	                  hasParallaxImages={false}
	                  firstItem={SLIDER_1_FIRST_ITEM}
	                  inactiveSlideScale={0.94}
	                  inactiveSlideOpacity={0.7}
	                  // inactiveSlideShift={20}
	                  containerCustomStyle={styles.slider}
	                  contentContainerCustomStyle={styles.sliderContentContainer}
	                  loop={false}
	                  loopClonesPerSide={2}
	                  autoplayInterval={3000}

	                  onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
	               />

	        <View style={styles.locationAnddescription}>
                        {/*
							<View style={styles.location}>
								<TouchableOpacity>
									<EvilIcons name={'location'} size={32} color='#000' />
								</TouchableOpacity>
							</View>
              
							<View style={styles.share}>
								<TouchableOpacity>
									<Ionicons name={'ios-send-outline'} size={32} color='#000' />
								</TouchableOpacity>
							</View>
						*/}
							<View>
									<Pagination
									 dotsLength={this.props.promo.images.length}
									 activeDotIndex={slider1ActiveSlide}
									 containerStyle={styles.paginationContainer}
									 dotColor={'rgba(40,140,253, 0.8)'}
									 dotStyle={styles.paginationDot}
									 inactiveDotColor={colors.black}
									 inactiveDotOpacity={0.4}
									 inactiveDotScale={0.6}
									 carouselRef={this._slider1Ref}
									 tappableDots={!!this._slider1Ref}
								 />
							</View>
                         {/*
							<View style={styles.save}>
								<TouchableOpacity>
									<Ionicons name={'ios-bookmark-outline'} size={32} color='#000' />
								</TouchableOpacity>
							</View>
						 */}
						</View>

		          <View>
								<TouchableOpacity>
									<Text style={styles.likesNum}>{this.props.promo.title}</Text>
								</TouchableOpacity>

								<View style={styles.commentSect}>

                      <PriceView price={this.props.promo.price}
											      promotionalPrice={this.props.promo.promotionalPrice} />

										<TouchableOpacity>
											<Text style={styles.viewAllComments}>{this.props.promo.description.substring(0, 10)}...</Text>
										</TouchableOpacity>
										<Text style={{marginLeft:10, fontSize: 13, color: '#757575'}}>2 Horas atrás</Text>
								</View>

					</View>              


			</View> 
		);
	}
}

const colors = {
    black: '#1a1917',
    gray: '#888888',
    background1: '#B721FF',
    background2: '#21D4FD'
};

const styles = StyleSheet.create({
	container: {
		flex:1,
		marginBottom: 1
	},
	image: {
		height: 300,
		width: '100%',
		alignSelf: 'center',
	},
	owner: {
		flexDirection: 'row',
		backgroundColor: '#fff',
		width: '100%',
		height:55,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	ownerText: {
		fontSize: 19,
		marginRight: 220,
		marginLeft: 2
	},
	ownerThumb: {
		height: 33,
		width: 33,
		borderRadius: 35,
		marginLeft: 10,
	},
	menuIcon: {
		fontSize: 30,
		marginRight: 0,
		transform: [{ rotate: '90deg'}],
	},
	locationAnddescription: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		marginLeft: 10,
		marginTop: 8,
	},
	location: {
	//	marginLeft: 2,
	},
	comment: {
		marginTop: 1,
		marginLeft: 15,
	},
	share: {
		marginLeft: 12,
	},
	save: {
		marginLeft: 50,
	},
	commentSect: {
		marginTop: 3,
	},

	viewAllComments: {
		marginTop: 3,
		marginLeft: 10,
		fontSize: 15,
		color: '#757575'
	},
	likesNum: {
		marginLeft: 12,
		fontSize: 17,
		fontWeight: 'bold',
	},
	slider: {
        marginTop: 10,
        overflow: 'visible' // for custom animations
    },
    sliderContentContainer: {
        paddingVertical: 10, // for custom animation
				paddingTop: 1

    },
     paginationContainer: {
        paddingVertical: 10

    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4

    }
});
