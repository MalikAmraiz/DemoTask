// src/screens/CartScreen.tsx
import React from 'react';
import {View, Text, Button, Image, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../store/rootReducer';
import {updateCartItemQuantity, removeFromCart} from '../../store/cartSlice';
import {styles} from './styles';
import Header from '../../components/Header';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
const CartScreen: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleUpdateQuantity = (id: number, quantity: number) => {
    dispatch(updateCartItemQuantity({id, quantity}));
  };

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  return (
    <View style={styles.container}>
      <Header backPress title="Cart" />
      {cartItems.map(item => (
        <View key={item.id} style={styles.row}>
          <Image source={{uri: item.image}} style={styles.image} />
          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>Price: ${item.price.toFixed(2)}</Text>
            <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => handleUpdateQuantity(item.id, item.quantity + 1)}>
              <Entypo
                name="plus"
                color={'green'}
                size={responsiveFontSize(3)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (item.quantity > 1) {
                  handleUpdateQuantity(item.id, item.quantity - 1);
                }
              }}>
              <Entypo
                name="minus"
                color={'royalblue'}
                size={responsiveFontSize(3)}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRemoveFromCart(item.id)}>
              <MaterialCommunityIcons
                name="delete"
                color={'red'}
                size={responsiveFontSize(3)}
              />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

export default CartScreen;
