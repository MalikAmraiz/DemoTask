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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: responsiveWidth(3),
    borderBottomWidth: responsiveWidth(0.5),
    borderBottomColor: '#ccc',
  },
  image: {
    width: responsiveWidth(20),
    height: responsiveWidth(20),
    marginRight: responsiveWidth(3),
  },
  detailsContainer: {
    flex: 1,
  },
  title: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    marginBottom: responsiveHeight(0.5),
  },
  price: {
    fontSize: responsiveFontSize(2),
    color: 'royalblue',
    marginBottom: responsiveHeight(0.5),
  },
  quantity: {
    fontSize: responsiveFontSize(2),
    color: 'green',
  },
});
