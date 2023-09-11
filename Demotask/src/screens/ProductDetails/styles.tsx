import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  thumbnail: {
    width: '100%',
    aspectRatio: 1,
  },
  productInfo: {
    marginTop: responsiveHeight(2),
  },
  title: {
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
  },
  description: {
    fontSize: responsiveFontSize(2),
    marginTop: responsiveHeight(2),
  },
  price: {
    fontSize: responsiveFontSize(2.5),
    marginTop: responsiveHeight(2),
    fontWeight: '500',
  },
  discount: {
    color: 'red',
  },
  rating: {
    fontSize: responsiveFontSize(2),
    marginTop: responsiveHeight(1),
  },

  productImage: {
    width: '100%',
    height: '100%',
    borderRadius: responsiveWidth(3),
  },
  imagesListView: {
    paddingTop: responsiveHeight(2),
    paddingBottom: responsiveHeight(15),
  },
  wrapper: {
    padding: responsiveWidth(3),
    marginTop: responsiveHeight(2),
  },
  imageWrapper: {
    width: responsiveWidth(40),
    height: responsiveWidth(40),
    padding: responsiveFontSize(0.5),
    borderRadius: responsiveWidth(3),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: responsiveWidth(5),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
