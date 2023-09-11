import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff', // Customize the background color
    borderBottomWidth: responsiveWidth(0.5),
    borderBottomColor: '#ccc', // Customize the border color
    paddingTop: responsiveHeight(5),
    paddingBottom: responsiveHeight(1),
    width: '100%',
  },
  backButton: {
    width: responsiveWidth(10),
    alignItems: 'center',
  },
  title: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
  },
});
