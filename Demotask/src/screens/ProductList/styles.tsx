import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productItem: {
    flex: 1,
    margin: responsiveFontSize(0.8),
    padding: responsiveFontSize(1.5),
    backgroundColor: 'white',
    borderRadius: responsiveWidth(2),
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: responsiveHeight(20),
    marginBottom: responsiveHeight(1),
  },
  FlStyles: {
    padding: responsiveFontSize(1.7),
    paddingBottom: responsiveHeight(5),
  },
});
