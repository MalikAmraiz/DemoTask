import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
interface ButtonProps {
  onPress?: () => void;
}
export const FloatingButton: React.FC<ButtonProps> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.floatingButton}>
      <View>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: responsiveHeight(5),
    backgroundColor: 'royalblue',
    borderRadius: responsiveWidth(2),
    paddingVertical: responsiveHeight(1.2),
    paddingHorizontal: responsiveWidth(15),
    elevation: 5,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
  },
});

export default FloatingButton;
