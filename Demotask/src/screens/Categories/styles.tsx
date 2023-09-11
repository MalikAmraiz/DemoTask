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
  title: {
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
  },
  categoryItem: {
    padding: responsiveWidth(3),
    borderBottomWidth: responsiveWidth(0.3),
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  categoryText: {
    fontSize: responsiveFontSize(2.3),
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: responsiveHeight(2),
    paddingTop: responsiveHeight(2),
  },
  allProductsText: {
    color: 'blue',
    fontSize: responsiveFontSize(2),
    textDecorationLine: 'underline',
  },
  wrapper: {
    paddingHorizontal: responsiveWidth(3),
  },
});
