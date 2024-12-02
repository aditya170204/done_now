import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, removeFromCart} from './redux/action';

export const Product = props => {
  const item = props.item;
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.reducer);
  const [isAdded, setIsAdded] = useState(false);
  const handleAddToCart = item => {
    dispatch(addToCart(item));
  };
  const handleRemoveFromCart = item => {
    dispatch(removeFromCart(item.name));
  };
  useEffect(() => {
    let result = cartItems.filter(element => {
      return element.name === item.name;
    });
    if (result.length) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [cartItems]);
  return (
    <View
      style={{
        alignItems: 'center',
        borderBottomColor: 'orange',
        borderBottomWidth: 2,
        padding: 15,
        marginBottom: 80,
      }}>
      <Text style={{fontSize: 24}}>{item.name}</Text>
      <Text style={{fontSize: 24}}>{item.price}</Text>
      <Text style={{fontSize: 24}}>{item.color}</Text>
      <Image
        style={{width: 200, height: 200, borderRadius: 30, marginBottom: 20}}
        source={{uri: item.image}}
      />
      {isAdded ? (
        <Button
          title="Remove From Cart"
          onPress={() => handleRemoveFromCart(item)}
        />
      ) : (
        <Button title="Add To Cart" onPress={() => handleAddToCart(item)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({});
