import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartData = useSelector((state) => state.reducer);

  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    setCartItems(cartData.length);
  }, [cartData]);
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'right',
          padding: 10,
          backgroundColor: 'orange',
        }}>
        <View style={{ backgroundColor: "yellow", borderRadius: 25, height: 45, width: 45 }}>
          <Text style={{ fontSize: 30, textAlign: 'center' }}>
            {cartItems}
          </Text>
        </View>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});

export default Header;
