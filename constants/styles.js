
import React from 'react';
import {
    StyleSheet,
    Dimensions
  } from 'react-native';
  
  import colors from './colors';

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	topViewStyle: {
		flexDirection: 'row',
    backgroundColor: 'rgb(255, 255, 255)',
    alignItems: 'center',
    justifyContent: 'space-between',
	paddingHorizontal: 16,
	paddingVertical: 12,
  },
  heading: {
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
  },
  imageViewStyle: {
	  //width: '100%',
	  backgroundColor: colors.grey
  },
  likeImageView: {
	backgroundColor: colors.white,
		width: 40,
		height: 40,
		position: 'absolute',
		right: 16,
		bottom: 16,
		borderRadius: 20,
		alignItems: 'center',
	    justifyContent: 'center',
		},
  likeImage: {
	  height: 18,
	  width: 18,
  },
  smallImageView: {
	  borderColor: colors.white,
	  borderWidth: 2,
	  borderRadius: 30,
	  width: 60,
	  height: 60,
	  margin: 16,
  },
	smallImage: {
		flex:1,
		height: null,
		width: null,
		borderRadius: 30,
	},
	productName: {
		fontFamily: 'Montserrat-Bold',
        fontSize: 18,
		textAlign: 'center',
    },
	productDesc: {
		fontFamily: 'Montserrat-Medium',
        fontSize: 14,
		textAlign: 'center',
    },
	iconStyle: {
    width: 80,
    height: 80,
   
  },
  options: {
  fontFamily: 'Montserrat-Medium', 
	  fontSize: 14
	  },
	
	reviewImageView: {
	  borderColor: colors.black,
	  borderWidth: 1,
	  borderRadius: 16,
	  width: 32,
	  height: 32,
	  //margin: 16,
	  justifyContent: 'center',
	  alignItems: 'center'
  },
  
  subHeading: {
	  fontFamily: 'Montserrat-Medium', 
	  fontSize: 16, 
	  marginLeft: 16
	},
	
	row_alignment: {
		flexDirection: 'row', 
	alignItems: 'center'
	},
	
	sizeView: {
		backgroundColor: colors.white,
		height: 50,
		width: 50,
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 16,
		marginVertical: 10,
	},
	colorView: {
		height: 50,
		width: 50,
		borderRadius: 25,
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 16,
		marginVertical: 10,
	},
	
  categoryViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: 'white',
    marginHorizontal: 16,
	marginBottom: 16,
	padding: 10
  },
  
  
  categoryItemImage: {
					borderRadius: 6, 
					borderWidth: 2, 
					flex: 0.2
				
				},
				categoryItemName: {
					fontSize: 16,
					fontFamily: 'Montserrat-Bold',
					marginStart: 10,
                },
				categoryItemPrice: {
                  fontSize: 16,
                  color: colors.blue,
                  fontFamily: 'Montserrat-Medium',
                  marginStart: 10,
                },
				categoryItemRating: {
                  fontSize: 16,
                  color: 'orange',
                  fontFamily: 'Montserrat-Medium',
                  marginStart: 10,
                },
				categoryItemDesc: {
                  fontSize: 12,
                  fontFamily: 'Montserrat-Regular',
                  marginStart: 10,
                },
});

  export default styles;