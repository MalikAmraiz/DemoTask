import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Entypo';
import {StackNavigationProp} from '@react-navigation/stack';
import RootStackParamList from '../../types';
interface HeaderProps {
  title: string;
  backPress?: boolean;
  cartPress?: boolean;
}

const Header: React.FC<HeaderProps> = ({title, backPress, cartPress}) => {
  const navigation = useNavigation();
  const {navigate} = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleBackButtonPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.header}>
      {backPress ? (
        <TouchableOpacity
          onPress={handleBackButtonPress}
          style={styles.backButton}>
          <Icon
            name={'chevron-left'}
            size={responsiveFontSize(4)}
            color={'black'}
          />
        </TouchableOpacity>
      ) : (
        <View style={{width: responsiveWidth(10)}} />
      )}
      <Text style={styles.title}>{title}</Text>
      {cartPress ? (
        <TouchableOpacity
          onPress={() => {
            navigate('Cart');
          }}
          style={styles.backButton}>
          <Icon
            name={'shopping-cart'}
            size={responsiveFontSize(2.5)}
            color={'black'}
          />
        </TouchableOpacity>
      ) : (
        <View style={{width: responsiveWidth(10)}} />
      )}
    </View>
  );
};

export default Header;
