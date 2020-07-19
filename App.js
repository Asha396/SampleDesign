import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  SafeAreaView,
  Platform,
  ScrollView
} from 'react-native';

import {
	BACK_ARROW,
	SUPERMARKET,
	UNAVAILABLE,
	LIKE_UNSELECTED,
	LIKE_SELECTED,
	SHIPPING,
	DELIVERY,
	PAYMENT,
	CATEGORY,
	COLOR_SELECTED,
} from './assets/images/index';

import strings from './constants/globalStrings';
import colors from './constants/colors';
import styles from './constants/styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: false,
	  selectedSize: null,
	  selectedColor: null,
    };
  }
  
  
  render() {
    return (
		<SafeAreaView style={styles.container}>
       
        <View style={styles.topViewStyle}>
          <TouchableOpacity onPress={() => {}}>
            <Image source={BACK_ARROW} />
          </TouchableOpacity>
          <Text style={styles.heading}>{strings.sweaters}</Text>
          <TouchableOpacity onPress={() => {}}>
            <Image source={SUPERMARKET} />
          </TouchableOpacity>
        </View>
		
		
		<ScrollView>
		
		<View style={styles.imageViewStyle}>
            <Image style={{alignSelf: 'center'}} source={UNAVAILABLE} />
			<TouchableOpacity 
				style={styles.likeImageView} 
				onPress={() => {this.setState({isLiked: !this.state.isLiked})}}>
            <Image style={styles.likeImage} source={this.state.isLiked ? LIKE_SELECTED : LIKE_UNSELECTED} />
          </TouchableOpacity>
        </View>
		
		
		<View style={{flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 50}}>
			<TouchableOpacity 
				style={styles.smallImageView} 
				onPress={() => {}}>
            <Image style={styles.smallImage} source={UNAVAILABLE} />
          </TouchableOpacity>
		  <TouchableOpacity 
				style={styles.smallImageView} 
				onPress={() => {}}>
            <Image style={styles.smallImage} source={UNAVAILABLE} />
          </TouchableOpacity>
		  <TouchableOpacity 
				style={styles.smallImageView} 
				onPress={() => {}}>
            <Image style={styles.smallImage} source={UNAVAILABLE} />
          </TouchableOpacity>
        </View>
		
		
		<View style={{marginHorizontal: 24}}>
          <Text style={styles.productName}>{strings.product_name}</Text>
           <Text style={styles.productDesc}>{strings.product_desc}</Text>
        </View>
		
		
		<ScrollView 
		horizontal
		nestedScrollEnabled
		showsHorizontalScrollIndicator={false}
            style={{margin: 16}}>
            
            <View style={[styles.row_alignment, {marginRight: 12}]}>
              <TouchableOpacity onPress={() => {}}>
                <Image
                  style={styles.iconStyle}
                  source={SHIPPING}
                />
              </TouchableOpacity>
              <Text style={styles.options}>
				  {strings.shipping}
              </Text>
            </View>
            <View style={[styles.row_alignment, {marginRight: 12}]}>
              <TouchableOpacity onPress={() => {}}>
                <Image
                  style={styles.iconStyle}
                  source={DELIVERY}
                />
              </TouchableOpacity>
              <Text style={styles.options}>
                {strings.delivery}
              </Text>
            </View>
			
			<View style={[styles.row_alignment, {marginRight: 12}]}>
              <TouchableOpacity onPress={() => {}}>
                <Image
                  style={styles.iconStyle}
                  source={PAYMENT}
                />
              </TouchableOpacity>
              <Text style={styles.options}>
                {strings.payment}
              </Text>
            </View>
            <View style={[styles.row_alignment, {marginRight: 12}]}>
              <TouchableOpacity 
                onPress={() => {}}>
                <Image
                  style={styles.iconStyle}
	source={CATEGORY}
                />
              </TouchableOpacity>
              <Text style={styles.options}>
                {strings.categories}
              </Text>
            </View>
			
          </ScrollView>
		  
		  
		  <View style={{marginHorizontal: 16, marginBottom: 16}}>
		  <View style={{flexDirection: 'row', 
			  justifyContent: 'space-between'
			  }}>
		  <Text style={{fontFamily: 'Montserrat-Regular', fontSize: 16}}>
                {strings.rating}
              </Text>
			  <Text style={{fontFamily: 'Montserrat-Regular', fontSize: 16, color: 'green'}}>
                39 {strings.reviews}
              </Text>
		  </View>
		  
		  <View style={{margin: 6}} />
		  
		  <View style={{flexDirection: 'row', 
			  justifyContent: 'space-between'
			  }}>
		  
			  <View style={styles.row_alignment}>
			  <Image style={{marginRight: 5}} source={LIKE_SELECTED} />
			  <Image style={{marginRight: 5}} source={LIKE_SELECTED} />
			  <Image style={{marginRight: 5}} source={LIKE_SELECTED} />
			  <Image style={{marginRight: 5}} source={LIKE_SELECTED} />
			  <Image style={{marginRight: 5}} source={LIKE_SELECTED} />
			  <Text style={{fontFamily: 'Montserrat-Regular', fontSize: 16, color: colors.primary_color}}>
                5.0
              </Text>
			  </View>
			  <View style={{flexDirection: 'row', alignItems: 'center'}}>
				<View style={[styles.reviewImageView, {position: 'absolute', right: 80, zIndex: 0, backgroundColor: 'brown'}]} />
			  <View style={[styles.reviewImageView, {position: 'absolute', right: 60, backgroundColor: colors.blue, zIndex:1}]} />
			  <View style={[styles.reviewImageView, {position: 'absolute', right: 40, backgroundColor: colors.red, zIndex: 2}]} />
			  <View style={[styles.reviewImageView, {position: 'absolute', right: 20, backgroundColor: 'pink', zIndex:3}]} />
			<View style={[styles.reviewImageView, {zIndex: 4, backgroundColor: 'orange'}]} >
			  <Text style={{fontFamily: 'Montserrat-Bold', fontSize: 14, color: colors.white}}>+35</Text>
			  </View>
			  </View>
		  </View>
		  
		  </View>
		  
		  
		  <View style={{marginVertical: 16}}>
		  <Text style={styles.subHeading}>
                {strings.size}
              </Text>
		  <FlatList
		  
			horizontal
			showsHorizontalScrollIndicator={false}
			style={{marginLeft: 16}}
			data={['S', 'M', 'L', 'XL', '2XL', '3XL']}
            renderItem={({item}) => (
              <View style={styles.sizeView}>
              <TouchableOpacity
				onPress={() => {
								this.setState({selectedSize: item});
								}}>
                
			  <Text 
								style={[{fontFamily: 'Montserrat-Regular', fontSize: 20},{
								color: (this.state.selectedSize === item) ? colors.blue : colors.black}]}>
								{item}
							</Text>
              </TouchableOpacity>
              
            </View>
            )}
          />
		  </View>
		
		
		<View>
		  <Text style={styles.subHeading}>
                {strings.color}
              </Text>
		  <FlatList
		  
			horizontal
			showsHorizontalScrollIndicator={false}
			style={{marginLeft: 16}}
			data={['brown', 'pink', 'grey', 'lightgrey']}
            renderItem={({item}) => (
              <View style={[styles.colorView, {backgroundColor: item}]}>
              <TouchableOpacity
				onPress={() => {
								this.setState({selectedColor: item});
								}}>
                
			  <Image source={(this.state.selectedColor === item) ? COLOR_SELECTED : null} />
              </TouchableOpacity>
              
            </View>
            )}
          />
		  </View>
		
		
        <View style={{marginVertical: 16}}>
	<Text style={[styles.subHeading, {marginBottom: 16}]}>
                {strings.you_may_like}
              </Text>
                 
          <FlatList
			data={['', '', '', '', '']}
			
            renderItem={({item}) => (
              <View style={styles.categoryViewStyle}>
			  <View style={{flexDirection: 'row'}}>
			<View style={styles.categoryItemImage} />
								<View style={{justifyContent: 'space-between', flex: 0.8}}>
									<Text style={styles.categoryItemName}>{strings.category_name}</Text>
			<View style={[styles.row_alignment, {justifyContent: 'space-between'}]}>
								<Text style={styles.categoryItemPrice}>{strings.category_price}</Text>
								<Text style={styles.categoryItemRating}>4.5</Text>
								</View>
                                    <Text style={styles.categoryItemDesc}>{strings.category_desc}</Text>
								</View>
							</View>
							
							
               
                
              </View>
            )}
          />
        </View>
		</ScrollView>
      </SafeAreaView>
    );
  }
}



export default App;
