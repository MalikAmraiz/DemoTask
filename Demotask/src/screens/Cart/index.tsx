// CartScreen.tsx

import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Header from '../../components/Header';
import {styles} from './styles';
// Define the CartItem type (adjust the structure as needed)
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

// interface Props {
//   cartItems: CartItem[];
// }

const Cart = () => {
  //   Calculate the total price of items in the cart
  // const totalPrice = cartItems.reduce(
  //   (total, item) => total + item.price * item.quantity,
  //   0,
  // );

  // const renderItem = ({item}: {item: CartItem}) => (
  //   <View style={styles.cartItem}>
  //     <Text style={styles.itemName}>{item.name}</Text>
  //     <Text style={styles.itemPrice}>
  //       ${(item.price * item.quantity).toFixed(2)}
  //     </Text>
  //     <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
  //   </View>
  // );

  return (
    <View style={styles.container}>
      <Header backPress title="Check out" />
      {/* <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <View style={styles.totalPriceContainer}>
        <Text style={styles.totalPriceLabel}>Total Price:</Text>
        <Text style={styles.totalPrice}>${totalPrice.toFixed(2)}</Text>
      </View> */}
    </View>
  );
};

export default Cart;
