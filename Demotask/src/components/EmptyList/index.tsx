import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';

export const EmptyListComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>No Results Found...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: responsiveFontSize(2),
    marginTop: responsiveHeight(40),
    color: 'gray',
    fontWeight: '500',
  },
});

export default EmptyListComponent;
